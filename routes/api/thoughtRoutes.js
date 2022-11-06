const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createUser,
  deleteUser,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  addFriend,
  removeFriend,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts); //.post(createThought);

// // /api/thoughts/:thoughId
router.route('/:thoughtId').get(getSingleThought); //.delete(deleteThought);

// // /api/users/:userId/thoughts
// router.route('/:userId/thoughts').post(addThought);

// // /api/users/:userId/thoughts/:thoughtId
// router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

// // /api/users/:userId/reactions
// router.route('/:userId/reactions').post(addReaction);

// // /api/users/:userId/reactions/:reactionId
// router.route('/:userId/reactions/:reactionId').delete(removeReaction);

// // /api/users/:userId/friends
// router.route('/:userId/friends').post(addFriend);

// // /api/users/:userId/friends/:friendId
// router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
