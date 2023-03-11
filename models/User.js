const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      username: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 4,
      },
      email: {
        type: String,
        required: true,
        default: () => Math.floor(Math.random() * (100 - 70 + 1) + 70),
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'thoughts',
        },
      ],
    },
  );

  module.exports = userSchema;
  