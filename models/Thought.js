const { Schema, model, Types } = require('mongoose');

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
        type: string,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        getters: true,
        virtuals: true,
      },
      id: false
    }
  );

  thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: string,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

const thought = model('Thought', thoughtSchema);

  module.exports = thought;