const { ObjectId } = require('mongoose').Types;
  
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
        'friends': "636d777c32245ae578d31e07",
    }

const thought = 
    {
        'thoughtId': 1,
        'thoughtText': 'This is a thought!',
        'createdAt': '01/01/2022',
        'username': `makeithappenmike`,
        'reactions': [1]
    }

const getUsers = () => {
    return user;
}; getUsers();

const getThoughts = () => {
    return thought;
}; getThoughts();
  
// Export the functions for use in seed.js
module.exports = { getUsers, getThoughts };
  