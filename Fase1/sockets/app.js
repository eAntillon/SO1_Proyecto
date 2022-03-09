const server = require('http').createServer();
require("dotenv").config();
let user = process.env.USERNAME;
let pass = process.env.PASSWORD;
let host = process.env.HOSTNAME;
let port = process.env.PORT;
//Coneccion con mongo
const uri = `mongodb://${user}:${pass}@${host}:${port}`;
console.log(uri);
const { MongoClient } = require('mongodb');

const io = require('socket.io')(server,{ cors: {
  origin: "*"
}});

io.on('connection', async (client) => {
  const cliente = new MongoClient(uri);
  let connection = await cliente.connect();
  let db = await connection.db("proyecto1");
  let collection = await db.collection("registry");
  let data = await collection.find({}).toArray();
  console.log(data);
  client.on('message', ( object ) => {
    const newMessage = {
      nombre: "Josué David Zea Herrera"
    }
    console.log(object);
    io.emit("message", newMessage);
  });
});
server.listen(8080);