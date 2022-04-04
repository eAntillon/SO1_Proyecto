const grpc = require('@grpc/grpc-js');
const PROTO_PATH ='./proto/conf.proto';
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
   
});

const game_proto = grpc.loadPackageDefinition(packageDefinition).confproto;

const dataToSend = {
    Gameid: 1,
    Players: 20
};

function main() {
    // Establish connection with the server
    const client = new game_proto.ExecuteGame('0.0.0.0:50051', grpc.credentials.createInsecure());
    client.PlayGame({gameid: dataToSend.Gameid, players: dataToSend.Players} , function(err, response) {
      console.log('Data:', response); // API response
      console.log(err);
    });

}
main();



