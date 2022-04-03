package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"

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
	log.Printf("Received: %v", in.GetGameid())
	return &pb.GameReply{Response: "Carenalga respuesta servidor" + fmt.Sprint(in.GetPlayers())}, nil
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