const usernames = [
    'makeithappenmike'
];
  
const thoughts = [
    'This is a thought!',
];

const reactions = [
    'This is a reaction!',
];
  
// Get all usernames
const getUsernames = () => `Usernames: ${usernames}`;

// Get all usernames
const getThoughts = () => `Thoughts: ${thoughts}`;

// Get all usernames
const getReactions = () => `Reactions: ${reactions}`;
  
// Export the functions for use in seed.js
module.exports = { getUsernames, getThoughts, getReactions };
  