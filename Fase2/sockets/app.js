const app = require('express')();

var cors = require('cors');
const { getRedisLogs } = require("./helpers/conectRedis");
const { getTidbLogs } = require("./helpers/conectTidb");
app.use(cors());

app.get("/", (req, res)=>{
  res.send({
    data: "Sockets"
  });
});

app.get('/tidb', async (req, res) =>  {
  const dataTidb = await getTidbLogs();
  res.send({
    dataTidb
  });
})

app.get('/redis', async (req, res) =>  {
  const dataRedis = await getRedisLogs();
  res.send({
    dataRedis
  });
})

const server = require('http').createServer(app);

const io = require('socket.io')(server, { cors: {
  origin: '*',
  methods: ["GET","POST"]
}});

io.on('connection', async (client) => {
  console.log('Client connected...');
  const getData = async () =>{
    const dataRedis = await getRedisLogs();
    const dataTidb = await getTidbLogs();
    const data = { dataRedis: [], dataTidb: [] };
    if(dataRedis.length > 0){
      data.dataRedis = dataRedis;
    }
    if(dataTidb.length > 0){
      data.dataTidb = dataTidb;
    }
    console.log(data);
    io.emit("sendlogs", data);
  }
  setInterval(() => getData(), 1000);
});

server.listen(8080);
console.log("Server running on port 8080");