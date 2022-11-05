require("getenv").config();

const { connect, connection } = require('mongoose');

const connectionString = getenv('connection_string');

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
