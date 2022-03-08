package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

type InfoRam struct {
	Vm             string `json:"Vm"`
	Total_ram      int    `json:"Totalram"`
	Ram_usada      int    `json:"Ramusage"`
	Porcentaje_uso int    `json:"Rampercent"`
	Ram_libre      int    `json:"Freeram"`
}

func loadEnv() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal(err)
		return
	}
}

func home(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	json.NewEncoder(w).Encode("Proyecto 1 Grupo 6")
}

func getram(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Content-Type", "application/json")

	ram := "/proc/ram_module"
	bytesLeidos, err2 := ioutil.ReadFile(ram)
	if err2 != nil {
		log.Println(err2)
		return
	}
	var data InfoRam
	json.Unmarshal(bytesLeidos, &data)
	data.Vm = os.Getenv("VM")
	json.NewEncoder(w).Encode(data)
}

func getprocesos(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	cpu := "/proc/process_module"
	bytesLeidos, err2 := ioutil.ReadFile(cpu)
	if err2 != nil {
		log.Println(err2)
		return
	}
	leido := string(bytesLeidos[:])
	result := leido[:len(leido)-3] + "]"
	var objmap []map[string]interface{}

	if err := json.Unmarshal([]byte(result), &objmap); err != nil {
		log.Fatal(err)
	}

	json.NewEncoder(w).Encode(objmap)
}

func main() {
	router := mux.NewRouter()
	loadEnv()
	http.HandleFunc("/", home)
	router.HandleFunc("/getram", getram).Methods("GET", "OPTIONS")
	router.HandleFunc("/getprocesos", getprocesos).Methods("GET", "OPTIONS")
	fmt.Println("Server running on port 5000")
	// iniciar servidor
	http.ListenAndServe(":5000", router)
}
