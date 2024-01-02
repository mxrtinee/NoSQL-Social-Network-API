const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // Validate email format using a regular expression
      match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    // Configure toJSON to include virtuals
    toJSON: {
      virtuals: true,
    },
    // Disable inclusion of virtual 'id' in JSON output
    id: false,
  }
);

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Create the User model using the defined schema
const User = model("User", userSchema);

// Export the User model for use in other parts of the application
module.exports = User;