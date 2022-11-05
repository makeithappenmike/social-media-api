const connection = require('../config/connection');
const { Reaction, Thought, User } = require('../models');
const { getUsernames, getThoughts, getReactions } = require('./data');

connection.on('error', (err) => err);

// Creates a connection to mongodb
connection.once('open', async () => {
  
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});   

  // Create empty array to hold the users
  const users = [];

  const usernames = getUsernames();
  const thoughts = getThoughts();
  const reactions = getReactions();

  users.push({
    usernames,
    thoughts,
    reactions,
    });

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
