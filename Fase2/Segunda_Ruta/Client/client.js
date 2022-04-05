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
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
   
});

const game_proto = grpc.loadPackageDefinition(packageDefinition).confproto;


router.get('/',(req,res)=>{
    res.json("al fin");
});


router.post('/Game', (req, res) =>{
    const {Gameid, Players} = req.body;
        // Establish connection with the server
        const client = new game_proto.getInfo('0.0.0.0:50051', grpc.credentials.createInsecure());
        client.PlayGame({gameid: req.body.Gameid, players: req.body.Players} , function(err, response) {
          console.log('Data:', response); // API response
        });
        res.send("Juego iniciado")
});

app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);
});







