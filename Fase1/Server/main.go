package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

type InfoRam struct {
	Vm             string `json:"Vm"`
	Total_ram      int    `json:"Total_ram"`
	Ram_usada      int    `json:"Ram_usada"`
	Porcentaje_uso int    `json:"Porcentaje_uso"`
	Ram_libre      int    `json:"Ram_libre"`
}

func home(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	json.NewEncoder(w).Encode("Proyecto 1 Grupo 6")
}

func ram(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

}

func procesos(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func getram(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	SendRam := InfoRam{
		Vm:             "oa",
		Total_ram:      0,
		Ram_usada:      0,
		Porcentaje_uso: 0,
		Ram_libre:      0,
	}
	json.NewEncoder(w).Encode(SendRam)
}

func getprocesos(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func main() {
	router := mux.NewRouter()
	http.HandleFunc("/", home)
	router.HandleFunc("/ram", ram).Methods("GET", "OPTIONS")
	router.HandleFunc("/procesos", procesos).Methods("GET", "OPTIONS")
	router.HandleFunc("/getram", getram).Methods("GET", "OPTIONS")
	router.HandleFunc("/getprocesos", getprocesos).Methods("GET", "OPTIONS")
	fmt.Println("Server running on port 5000")
	// iniciar servidor
	http.ListenAndServe(":5000", router)
}
