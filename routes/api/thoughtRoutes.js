const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteUser,
  addThought,
  removeThought,
  createReaction,
  removeReaction,
  addFriend,
  removeFriend,
} = require('../../controllers/thoughtController');

// Get thoughts /api/thoughts
router.route('/').get(getThoughts); //.post(createThought);

// Get single thought /api/thoughts/:thoughId
router.route('/:thoughtId').get(getSingleThought); //.delete(deleteThought);

// Create thought /api/users/:userId/thoughts
router.route('/').post(createThought);

// Delete thought /api/users/:userId/thoughts/:thoughtId
// router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

// Create reaction /api/users/:userId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// // /api/users/:userId/reactions/:reactionId
// router.route('/:userId/reactions/:reactionId').delete(removeReaction);

// // /api/users/:userId/friends
// router.route('/:userId/friends').post(addFriend);

// // /api/users/:userId/friends/:friendId
// router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
