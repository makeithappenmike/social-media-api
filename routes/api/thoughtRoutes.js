const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  deleteReaction,
  createReaction,
} = require('../../controllers/thoughtController');

// Get thoughts /api/thoughts
router.route('/').get(getThoughts); //.post(createThought);

// Get single thought /api/thoughts/:thoughId
router.route('/:thoughtId').get(getSingleThought); //.delete(deleteThought);

// Create thought /api/users/:userId/thoughts
router.route('/').post(createThought);

// Create reaction /api/users/:userId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// Delete reaction /api/users/:userId/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Delete thought /api/users/:userId/thoughts/:thoughtId
router.route('/:thoughtId').delete(deleteThought);

// Update user /api/users/:userId/thoughts/:thoughId
router.route('/:thoughtId').put(updateThought);

module.exports = router;
