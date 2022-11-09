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
  // Delete a reaction
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      console.log(req.params.thoughtId),
      { _id: req.params.thoughtId },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
    Reaction.findOneAndRemove(
      { _id: req.params.reactionId },
      { $pull: req.params.reactionId },
      { runValidators: true, new: true }
      )
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: 'No such reaction exists' })
          : Reaction.findOneAndRemove(
              { reactions: req.params.reactionId },
              // TODO: update options for findOneAndRemove here
            )
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No such thought exists' })
          : Thought.findOneAndRemove(
              { thoughts: req.params.thoughtId },
              // TODO: update options for findOneAndRemove here
            )
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
