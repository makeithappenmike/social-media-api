const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  createFriend,
  deleteFriend,
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

// Delete friend /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(deleteFriend);

// Create a friend /api/users/:userId/friends/:friendId
router.route('/:userId/friends/').post(createFriend);

module.exports = router;
