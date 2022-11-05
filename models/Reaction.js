const { Schema, Types } = require('mongoose');

// TODO: Confirm getter method to format the timestamp on query

//Create Reaction Schema
const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId, // Using Mongoose's ObjectID
        default: () => new Types.ObjectId(), // Set default to new ObjectId
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now, // Set date to current date
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );
  
  module.exports = reactionSchema;
