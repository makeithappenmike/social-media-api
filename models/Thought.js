const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// TODO: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Set date to current date
      },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
