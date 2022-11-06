const { ObjectId } = require('mongoose').Types;
const { Reaction, Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then(async (thought) =>
        !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json({
                thought,
                // TODO: Add additional parameters?
            })
        )
        .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
        });
    },
  // Create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // Create a new reaction
  // Add an assignment to a student
  createReaction(req, res) {
    console.log('Creating reaction...');
    console.log("Req Body:", req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: 'No thought found with that ID :(' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
//   createReaction(req, res) {
//     Reaction.create(req.body)
//       .then((reactoin) => res.json(reactoin))
//       .catch((err) => res.status(500).json(err));
//   },
};
