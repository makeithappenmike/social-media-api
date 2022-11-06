const router = require('express').Router();
const {
  getThoughts,
  getSingleUser,
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

// // /api/users/:userId
// router.route('/:userId').get(getSingleUser).delete(deleteUser);

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
