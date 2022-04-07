package main

import (
	"fmt"
	"github.com/confluentinc/confluent-kafka-go/kafka"
	"github.com/go-redis/redis/v8"
	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"github.com/segmentio/ksuid"
	"log"
	"os"
	"encoding/json"
	"strconv"
	"database/sql"
	"context"

)
type Game struct {
	GameId  int32  `json:"game_id"`
	Players int32  `json:"players"`
	Name    string `json:"game_name"`
	Winner  int32  `json:"winner"`
	Queue   string `json:"queue"`
}

type GameMongo struct {
	ID      primitive.ObjectID `bson:"_id"`
	GameId  int32              `bson:"game_id"`
	Players int32              `bson:"players"`
	Name    string             `bson:"game_name"`
	Winner  int32              `bson:"winner"`
	Queue   string             `bson:"queue"`
}

func loadEnv() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error al cargar variables de entorno")
	}
}

func sendToDataBases(game Game) {
	//sendToMongo(game)
	sendToRedis(game)
	//sendToTidb(game)
}

func main() {

	c, err := kafka.NewConsumer(&kafka.ConfigMap{
		"bootstrap.servers": "localhost:9092",
		"group.id":          "myGroup",
		"auto.offset.reset": "earliest",
	})

	if err != nil {
		panic(err)
	}

	c.SubscribeTopics([]string{"my-topic"}, nil)

	for {
		msg, err := c.ReadMessage(-1)
		if err == nil {
			fmt.Printf("Message: %s\n", string(msg.Value))
			var game Game
			b := []byte(string(msg.Value))
			json.Unmarshal(b, &game)
			sendToDataBases(game)
			fmt.Println("Sending log to databases")
		} else {
			// The client will automatically try to recover from all errors.
			fmt.Printf("Consumer error: %v (%v)\n", err, msg)
		}
	}

	c.Close()
}




func sendToRedis(game Game) {
	var ctx = context.Background()
	loadEnv()
	finalUrl := os.Getenv("REDIS_DIRECTION")
	client := redis.NewClient(&redis.Options{
		Addr:     finalUrl,
		Password: "",
		DB:       0,
	})
	json, err := json.Marshal(game)
	if err != nil {
		log.Fatal(err)
	}
	id := ksuid.New()
	err = client.Set(ctx, id.String(), json, 0).Err()
	if err != nil {
		panic(err)
	}
	fmt.Println("Log insertado, redis ", id.String())
}

func sendToTidb(game Game) {
	loadEnv()
	finalUrl := os.Getenv("TIDB_CONNECTION")
	// Open database connection
	db, err := sql.Open("mysql", finalUrl)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()
	sql := getQuery(game)
	res, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
	lastId, err := res.LastInsertId()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Log insertado, tidb: %d\n", lastId)
}

func getQuery(game Game) string {
	gameid := strconv.FormatInt(int64(game.GameId), 10)
	players := strconv.FormatInt(int64(game.Players), 10)
	game_name := game.Name
	winner := strconv.FormatInt(int64(game.Winner), 10)
	queue := game.Queue
	return "INSERT INTO games (game_id, players, game_name, winner, queue) VALUES (" + gameid + "," + players + ",\"" + game_name + "\"," + winner + ",\"" + queue + "\");"
}

func sendToMongo(game Game) {
	loadEnv()
	finalUrl := os.Getenv("MONGO_DIRECTION")
	clientOpts := options.Client().ApplyURI(finalUrl)
	client, err := mongo.Connect(context.TODO(), clientOpts)
	if err != nil {
		log.Fatal(err)
	}
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err)
	}
	collection := client.Database("Practica1_f2").Collection("games")
	game2 := &GameMongo{
		ID:      primitive.NewObjectID(),
		GameId:  game.GameId,
		Players: game.Players,
		Name:    game.Name,
		Winner:  game.Winner,
		Queue:   game.Queue,
	}
	insertResult, err := collection.InsertOne(context.TODO(), game2)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Log insertado, mongo", insertResult.InsertedID)
}