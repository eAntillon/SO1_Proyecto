var mysql = require('mysql');
const util = require('util');
require("dotenv").config();

const getTidbLogs = async () => {
    let data = [];
    const connection = mysql.createConnection({
        host     : process.env.TIDB_HOST,
        port     : process.env.TIDB_PORT,
        database : process.env.TIDB_DATABASE,
        user     : process.env.TIDB_USER,
        password : process.env.TIDB_PASSWORD
    });
    const query = util.promisify(connection.query).bind(connection);
    let rows;
    try {
        rows = await query('select * from games');
      } finally {
        connection.end();
      }
    for(let value of rows){
        data.push(value);
    }
    console.log("logs redis: ", data);
    return data;
}

module.exports = {
    getTidbLogs
}