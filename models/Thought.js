const { Schema, model } = require("mongoose");
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: [true, "Please add a thought"],
      minlength: [1, "Your thought must be at least 1 character long"],
      maxlength: [280, "Your thought must be less than 280 characters"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction.schema],
  },
  {
    timestamps: true,

    // Configure toJSON to include virtuals
    toJSON: {
      getters: true,
      virtuals: true,
    },
    // Disable inclusion of virtual 'id' in JSON output
    id: false,
  }
);

// Define a virtual property for reaction count
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Create the Thought model using the defined schema
const Thought = model("Thought", thoughtSchema);

// Export the Thought model for use in other parts of the application
module.exports = Thought;
