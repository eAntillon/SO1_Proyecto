var mysql = require('mysql');
const util = require('util');
require("dotenv").config();

const getTidbLogs = async () => {
    let data = [];
    const connection = mysql.createConnection({
        host     : process.env.TIDB_HOST,
        port     : process.env.TIDB_PORT,
        database : process.env.TIDB_DATABASE
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
    return data;
}

module.exports = {
    getTidbLogs
}