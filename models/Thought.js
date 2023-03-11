const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      username: {
        type: stringify,
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

  module.exports = thoughtSchema;