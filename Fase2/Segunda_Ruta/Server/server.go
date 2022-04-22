package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"
	//"time"
	"encoding/json"
	"math/rand"
	"github.com/segmentio/kafka-go"
	"google.golang.org/grpc"
	pb "github.com/eAntillon/SO1_Proyecto/tree/main/Fase2/Segunda_Ruta/Server/proto"
	"github.com/joho/godotenv"
	"os"
)

var (
	port = flag.Int("port", 50051, "The server port")
)

// server is used to implement helloworld.GreeterServer.
type server struct {
	pb.UnimplementedGetInfoServer
}
func loadEnv() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error al cargar variables de entorno")
	}
}

type LogGame struct {
	Game_id  int32 `json:"game_id"`
	Players int32 `json:"players"`
	Game_name string `json:"game_name"`
    Winner int32 `json:"winner"`
    Queue string `json:"queue"`
}


// SayHello implements helloworld.GreeterServer
func (s *server) PlayGame(ctx context.Context, in *pb.GameRequest) (*pb.GameReply, error) {
	game, players := in.GetGameid(), in.GetPlayers()
	game_name := ""
	//Los juegos
	result := 0
	pl := int(players)
	if game == 1 {
		game_name = "random"
		result = rand.Intn(pl-1) + 1
	} else if game == 2 {
		game_name = "last-one"
		result = pl
	} else if game == 3 {
		game_name = "middle-winner"
		result = pl/2
	} else if game == 4 {
		game_name = "pair-players"
		num := rand.Intn(pl-1)+1
		if num%2 == 0 {
			result = num
		} else {
			if num >= pl {
				result = num - 1
			} else {
				result = num + 1
			}
			
		}
	} else if game == 5 {
		game_name = "odd-players"
		num := rand.Intn(pl-1)+1
		if num%2 == 0 {
			if num >= pl {
				result = num - 1
			} else {
				result = num + 1
			}
		} else {
			result = num
		}
	}

	if game > 0 {
		if game <= 5{
			r := int32(result)
			logSend := LogGame{
				Game_id: game,
				Players: players,
				Game_name: game_name,
				Winner: int32(r),
				Queue: "Kafka",
			}
			savekafka(logSend)
		}
	}

	log.Printf("Received: %v", in.GetGameid())
	return &pb.GameReply{Response: fmt.Sprint(int32(result))}, nil
}

func savekafka(logSend LogGame) {
	loadEnv()
	finalUrl := os.Getenv("KAFKA_DIRECTION")
	topic := "my-topic"
	partition := 0
	jsonString, err := json.Marshal(logSend)
	conn, err := kafka.DialLeader(context.Background(), "tcp", finalUrl, topic, partition)
	if err != nil{
		log.Fatal("failed to connect: ",err.Error())
	}
	
	for _, word := range []string{string(jsonString)}{
		_, err = conn.WriteMessages(
			kafka.Message{Value: []byte(word)},
		)
		if err != nil {
			log.Fatal("failed to send messages: ", err)
		}
	}
	if err := conn.Close(); err != nil {
		log.Fatal("Failed to close conection: ", err)
	}
	
}

func main() {
	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterGetInfoServer(s, &server{})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}