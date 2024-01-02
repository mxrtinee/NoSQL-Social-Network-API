const { Schema, model, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: [true, "Please add a reaction"],
      minlength: [1, "Your reaction must be at least 1 character long"],
      maxlength: [280, "Your reaction must be less than 280 characters"],
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

// Create the Reaction model using the defined schema
const Reaction = model('Reaction', reactionSchema);

// Export the Reaction model for use in other parts of the application
module.exports = Reaction;
