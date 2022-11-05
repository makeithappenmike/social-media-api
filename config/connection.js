require('dotenv').config();

const { connect, connection } = require('mongoose');

const connectionString = process.env.CONNECTION_STRING;

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
