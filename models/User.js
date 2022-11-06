const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought').schema;

// TODO: Friends - Array of _id values referencing the User model (self-reference)
// TODO: Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
    },
    thoughts: [thoughtSchema],
    // friends: [user],
  },
  // TODO: Confirm where this should live
  // {
  //   toJSON: {
  //     getters: true,
  //   },
  // }
);

const User = model('user', userSchema);

module.exports = User;
