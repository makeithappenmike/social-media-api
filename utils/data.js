const { ObjectId } = require('mongoose').Types;

// const users = [
//     {
//         '_id': 1,
//         'username': 'makeithappenmike',
//         'email': 'omichaelaaron@gmail.com',
//         'thoughts': [
//             {
//                 'thoughtId': 1,
//                 'thoughtText': 'This is a thought (1)!',
//                 'createdAt': '01/01/2022',
//                 'username': `makeithappenmike`,
//                 'reactions': [
//                     {
//                         'reactionId': 1,
//                         'reactionBody': 'This is a reaction (1)!',
//                         'username': 'makeithappenmike',
//                         'createdAt': '01/01/2022',
//                     },
//                 ]
//             },
//         ],
//         'friendCount': 1,
//     },
// ];
  
const user = 
    {
        'username': 'makeithappenmike',
        'email': 'omichaelaaron@gmail.com',
        'thoughts': [
            {
                'thoughtText': 'This is a thought!',
                'createdAt': '01/01/2022',
                'username': `makeithappenmike`,
                'reactions': [
                    {
                        'reactionId': 1,
                        'reactionBody': 'This is a reaction!',
                        'username': 'makeithappenmike',
                        'createdAt': '01/01/2022',
                    },
                ]
            },
        ],
        'friendCount': 1,
    }

const thought = 
    {
        'thoughtId': 1,
        'thoughtText': 'This is a thought!',
        'createdAt': '01/01/2022',
        'username': `makeithappenmike`,
        'reactions': [1]
    }

// const thoughts = [
//     {
//         'thoughtId': 1,
//         'thoughtText': 'This is a thought (1)!',
//         'createdAt': '01/01/2022',
//         'username': `makeithappenmike`,
//         'reactions': [1]
//     },
// ];

// const reactions = [
//     {
//         'reactionId': 1,
//         'reactionBody': 'This is a reaction (1)!',
//         'username': 'makeithappenmike',
//         'createdAt': '01/01/2022',
//     },
// ];
  
// Get all usernames
// const getUsers = () => {
//     const userArray = [];
//     users.forEach((user) => {
//         userArray.push(user);
//     });
//     return userArray;
// }; getUsers();
const getUsers = () => {
    // const userArray = [];
    // users.forEach((user) => {
    //     userArray.push(user);
    // });
    return user;
}; getUsers();

const getThoughts = () => {
    // const userArray = [];
    // users.forEach((user) => {
    //     userArray.push(user);
    // });
    return thought;
}; getThoughts();

// Get all thoughts
// const getThoughts = () => {
//     const thoughtArray = [];
//     thoughts.forEach((thought) => {
//         console.log(thought.thoughtId);
//         thoughtArray.push(thought.thoughtId);
//     });
//     console.log("Thoughts:", thoughtArray);
//     return thoughtArray;
// }; getThoughts();

// Get all reactions
// const getReactions = () => {
//     const reactionArray = [];
//     reactions.forEach((reaction) => {
//         console.log(reaction.reactionId);
//         reactionArray.push(reaction.reactionId);
//     });
//     console.log("Reactions:", reactionArray);
//     return reactionArray;
// }; getReactions();
  
// Export the functions for use in seed.js
module.exports = { getUsers, getThoughts };
  