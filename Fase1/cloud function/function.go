// Package p contains an HTTP Cloud Function.
package p

import (
	"os"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"context" 
	"time" 
	"bytes" 
	"go.mongodb.org/mongo-driver/bson" 
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Save de incoming json in the MongoDB server


func SaveInMongo(w http.ResponseWriter, r *http.Request) {

	buf := new(bytes.Buffer)
	buf.ReadFrom(r.Body)
	str := buf.String()

	var doc interface{}
	err := bson.UnmarshalExtJSON([]byte(str), true, &doc)
	if err != nil {
		log.Fatal(err)
	}

	credential := options.Credential{
		Username:      os.Getenv("MONGO_USER"),
		Password:      os.Getenv("MONGO_PASS"),
	}
	clientOpts := options.Client().ApplyURI(os.Getenv("MONGO_HOST")).
		SetAuth(credential)
		
	//CONEXION A LA BASE DE DATOS E INSERCION DE DATOS
	client, err := mongo.NewClient(clientOpts)
	if err != nil {
		log.Fatal(err)
	}

	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}

	defer client.Disconnect(ctx)

	collection := client.Database("Proyecto").Collection("logs")
	res, insertErr := collection.InsertOne(ctx, doc)
		if insertErr != nil {
			log.Fatal(insertErr)
	}
	fmt.Println(res);


	//RESPUESTA
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	json.NewEncoder(w).Encode(struct {
		Message string `json:"message"`
	}{Message: "Datos almacenado en base de datos"})
	
}
