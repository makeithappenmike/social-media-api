const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  removeThought,
  addReaction,
  removeReaction,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// Get users /api/users
router.route('/').get(getUsers);

// Get single user /api/users/:userId
router.route('/:userId').get(getSingleUser);

// Create user /api/users/:userId/thoughts
router.route('/').post(createUser);

// Delete user /api/users/:userId
router.route('/:userId').delete(deleteUser);

// Update user /api/users/:userId
router.route('/:userId').put(updateUser);

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
