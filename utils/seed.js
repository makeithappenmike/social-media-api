const connection = require('../config/connection');
const { Reaction, Thought, User } = require('../models');
const { getUsers, getThoughts, getReactions } = require('./data');

connection.on('error', (err) => err);

// Creates a connection to mongodb
connection.once('open', async () => {
  
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});   

  // Create empty arrays to hold users and thoughts
  const usersArray = [];
  const thoughtsArray = [];

  const users = getUsers();
  const thoughts = getThoughts();
  // const thoughts = getThoughts();
  const reactions = getReactions();

  // usersArray.push({
  //   users,
  //   // thoughts,
  //   // reactions,
  //   });

  // Add users to the collection and await the results
  // await User.collection.insertMany(usersArray);
  await User.collection.insertOne(users);
  await Thought.collection.insertOne(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(usersArray);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
