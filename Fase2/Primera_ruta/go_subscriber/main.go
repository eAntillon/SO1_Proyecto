package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/streadway/amqp"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
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
	sendToMongo(game)
	sendToRedis(game)
	sendToTidb(game)
}

func main() {
	conn, err := amqp.Dial("amqp://guest:guest@localhost:5672/")
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()
	ch, err := conn.Channel()
	if err != nil {
		log.Fatal(err)
	}
	defer ch.Close()
	msg, err := ch.Consume(
		"games",
		"",
		true,
		false,
		false,
		false,
		nil,
	)

	noStop := make(chan bool)
	go func() {
		for d := range msg {
			var game Game
			b := []byte(string(d.Body))
			json.Unmarshal(b, &game)
			sendToDataBases(game)
			fmt.Println("Sending log to databases")
		}
	}()
	fmt.Println("Succesfully connected to RabbitMQ")
	fmt.Println("[*] - waiting for messages")
	<-noStop
}

func sendToRedis(game Game) {

}

func sendToTidb(game Game) {

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

	fmt.Println("Operacion insertada", insertResult.InsertedID)
}
