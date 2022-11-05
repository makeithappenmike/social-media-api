require('dotenv').config();

const { connect, connection } = require('mongoose');

const connectionString = process.env.CONNECTION_STRING;

console.log("Connection String:", connectionString);

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
