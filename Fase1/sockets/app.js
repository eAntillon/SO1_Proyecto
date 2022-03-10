const server = require('http').createServer();
require("dotenv").config();
let user = process.env.USR;
let pass = process.env.PASS;
let host = process.env.HOST;

//Coneccion con mongo
const uri = `mongodb://${user}:${pass}@${host}`;
const { MongoClient } = require('mongodb');

const io = require('socket.io')(server,{ cors: {
  origin: "*"
}});

io.on('connection', async (client) => {
  client.on('getlogs', async ( ) => {
    const cliente = new MongoClient(uri);
    let connection = await cliente.connect();
    let db = await connection.db("Proyecto");
    let collection = await db.collection("logs");
    let data = await collection.find({}).sort({date:-1}).limit(50).toArray();
    io.emit("sendlogs", data);
  });
});

server.listen(8080);