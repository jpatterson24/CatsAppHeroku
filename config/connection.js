// Set up MySQL connection.
var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
      connection = mysql.createConnection({
        host: 'd6vscs19jtah8iwb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'kja1y6zncqvnmu2x',
        password: 's7erx40sy598yn9s',
        database: 'nj8nio2w37nzcrxl'
      });
  };

  connection.connect();
// Export connection for our ORM to use.
module.exports = connection;
