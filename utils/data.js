const users = [
    {
        'username': 'makeithappenmike',
        'email': 'omichaelaaron@gmail.com',
        'thoughts': [1],
        'friends': [1, 2, 3]
    },
    {
        'username': 'makeithappenmike2',
        'email': 'omichaelaaron@gmail.com',
        'thoughts': [2, 3],
        'friends': [1, 2, 3]
    }
];
  
const thoughts = [
    {
        'thoughtId': 1,
        'thoughtText': 'This is a thought (1)!',
        'createdAt': '01/01/2022',
        'username': `makeithappenmike`,
        'reactions': [1]
    },
    {
        'thoughtId': 2,
        'thoughtText': 'This is a thought (2)!',
        'createdAt': '01/02/2022',
        'username': `makeithappenmike2`,
        'reactions': [2]
    },
    {
        'thoughtId': 3,
        'thoughtText': 'This is a thought (3)!',
        'createdAt': '01/03/2022',
        'username': `makeithappenmike2`,
        'reactions': [3]
    }
];

const reactions = [
    {
        'reactionId': 1,
        'reactionBody': 'This is a reaction (1)!',
        'username': 'makeithappenmike',
        'createdAt': '01/01/2022',
    },
    {
        'reactionId': 2,
        'reactionBody': 'This is a reaction (2)!',
        'username': 'makeithappenmike2',
        'createdAt': '01/02/2022',
    },
    {
        'reactionId': 3,
        'reactionBody': 'This is a reaction (3)!',
        'username': 'makeithappenmike2',
        'createdAt': '01/03/2022',
    }
];
  
// Get all usernames
const getUsernames = () => {
    const usernameArray = [];
    users.forEach((user) => {
        console.log(user.username);
        usernameArray.push(user.username);
    });
    console.log("Usernames:", usernameArray);
    return usernameArray;
}; getUsernames();

// Get all thoughts
const getThoughts = () => {
    const thoughtArray = [];
    thoughts.forEach((thought) => {
        console.log(thought.thoughtId);
        thoughtArray.push(thought.thoughtId);
    });
    console.log("Thoughts:", thoughtArray);
    return thoughtArray;
}; getThoughts();

// Get all reactions
const getReactions = () => {
    const reactionArray = [];
    reactions.forEach((reaction) => {
        console.log(reaction.reactionId);
        reactionArray.push(reaction.reactionId);
    });
    console.log("Reactions:", reactionArray);
    return reactionArray;
}; getReactions();
  
// Export the functions for use in seed.js
module.exports = { getUsernames, getThoughts, getReactions };
  