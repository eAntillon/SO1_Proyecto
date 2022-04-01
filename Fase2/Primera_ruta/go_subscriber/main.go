package main

import (
	"encoding/json"
	"fmt"
	"log"

	"github.com/streadway/amqp"
)

type Game struct {
	GameId  int32  `json:"game_id"`
	Players int32  `json:"players"`
	Name    string `json:"game_name"`
	Winner  int32  `json:"winner"`
	Queue   string `json:"queue"`
}

func sendToDataBases(game Game) {
	//fmt.Println(game.GameId)
	//fmt.Println(game.Players)
	//fmt.Println(game.Name)
	//fmt.Println(game.Winner)
	//fmt.Println(game.Queue)
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
		}
	}()
	fmt.Println("Succesfully connected to RabbitMQ")
	fmt.Println("[*] - waiting for messages")
	<-noStop
}
