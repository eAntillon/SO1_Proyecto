const grpc = require('@grpc/grpc-js');
const PROTO_PATH ='./proto/conf.proto';
const protoLoader = require('@grpc/proto-loader');
const express = require('express');
var app = express();
var router = express.Router()
const cors = require('cors');
app.set('port',5000);
app.use(express.json());
var corsOptions = { origin: true, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(router);
const { response } = require('express');
require('dotenv').config();

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
   
});

const game_proto = grpc.loadPackageDefinition(packageDefinition).confproto;


router.get('/',(req,res)=>{
    res.json("Proyecto-Fase2-Ruta-KAFKA");
});


router.post('/Game', (req, res) =>{
    var won = ""
    var SERVER_GRPC_GO = process.env.SERVER_GRPC_GO
    console.log(SERVER_GRPC_GO)
        // Establish connection with the server
    const client = new game_proto.getInfo(SERVER_GRPC_GO, grpc.credentials.createInsecure());
    client.PlayGame({gameid: req.body.game_id, players: req.body.players} , function(err, response) {
        console.log('Data:', response); // API response
        res.send("Inicio el juego")
    });
        
});
 
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);
});







