const app = require('express')();
var cors = require('cors');
app.use(cors());

app.get("/", (req, res)=>{
  res.send({
    data: "Sockets"
  });
});

const server = require('http').createServer(app);

const user = "proyecto";
const pass = "7T4MGIMvis";
const host = "34.72.202.175:27017";

//Coneccion con mongo
const uri = `mongodb://${user}:${pass}@${host}`;
const { MongoClient } = require('mongodb');

const io = require('socket.io')(server, { cors: {
  origin: '*',
  methods: ["GET","POST"]
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

server.listen(5000);