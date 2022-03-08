package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type InfoRam struct {
	Vm             string `json:"Vm"`
	Total_ram      int    `json:"Totalram"`
	Ram_usada      int    `json:"Ramusage"`
	Porcentaje_uso int    `json:"Rampercent"`
	Ram_libre      int    `json:"Freeram"`
}

type ramgenerada struct {
	Totalram   int `json:"totalram"`
	Ramusage   int `json:"ramusage"`
	Rampercent int `json:"rampercent"`
	Freeram    int `json:"freeram"`
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
	var data ramgenerada
	json.Unmarshal(bytesLeidos, &data)
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
	http.HandleFunc("/", home)
	router.HandleFunc("/getram", getram).Methods("GET", "OPTIONS")
	router.HandleFunc("/getprocesos", getprocesos).Methods("GET", "OPTIONS")
	fmt.Println("Server running on port 5000")
	// iniciar servidor
	http.ListenAndServe(":5000", router)
}
