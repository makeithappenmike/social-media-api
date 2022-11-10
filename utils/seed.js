const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getUsers, getThoughts } = require('./data');

connection.on('error', (err) => err);

// Creates a connection to mongodb
connection.once('open', async () => {
  
  console.log('connected');

  // Drop existing users and thoughts
  await User.deleteMany({});
  await Thought.deleteMany({}); 

  // Get new users and thoughts
  const users = getUsers();
  const thoughts = getThoughts();

  // Add users to the collection and await the results
  await User.collection.insertOne(users);
  await Thought.collection.insertOne(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
