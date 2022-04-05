package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"
	"math/rand"

	"google.golang.org/grpc"
	pb "github.com/eAntillon/SO1_Proyecto/tree/main/Fase2/Segunda_Ruta/Server/proto"
)

var (
	port = flag.Int("port", 50051, "The server port")
)

// server is used to implement helloworld.GreeterServer.
type server struct {
	pb.UnimplementedGetInfoServer
}


// SayHello implements helloworld.GreeterServer
func (s *server) PlayGame(ctx context.Context, in *pb.GameRequest) (*pb.GameReply, error) {
	game, players := in.GetGameid(), in.GetPlayers()

	//Los juegos
	result := 0
	pl := int(players)
	if game == 1 {
		result = rand.Intn(pl-1) + 1
	} else if game == 2 {
		result = pl
	} else if game == 3 {
		result = pl/2
	} else if game == 4 {
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
	} else {
		result = 0
	}


	log.Printf("Received: %v", in.GetPlayers())
	return &pb.GameReply{Response: fmt.Sprint(int32(result))}, nil
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