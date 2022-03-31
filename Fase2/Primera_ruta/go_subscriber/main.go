package main

import (
	"log"
	"mine/go/pkg/mod/github.com/gorilla/mux@v1.8.0"
	"net/http"
	"os"
)

func main() {
	loadEnv()
	port := os.Getenv("GO_CLIENT_PORT")
	router := mux.NewRouter().StrictSlash(false)
	router.HandleFunc("/", IndexHandler)
	router.HandleFunc("/game", game).Methods("POST")
	log.Println("Listening at port " + port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
