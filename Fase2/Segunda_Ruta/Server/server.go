package main

import (
	pb "servergrpc/proto-grpc"
)

const (
	port = ":50051"
)

type server struct {
	pb.UnimplementedGetInfoServer
}
