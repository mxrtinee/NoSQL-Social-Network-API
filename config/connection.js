// Import the necessary modules from Mongoose
const { connect, connection } = require('mongoose');

// Define the MongoDB connection string, using the provided environment variable or a default local connection
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialDB';

// Attempt to establish a connection to the MongoDB database
connect(connectionString)
  .then(() => {
    // If the connection is successful, log a success message
    console.log('MongoDB connected successfully!');
  })
  .catch((error) => {
    // If an error occurs during the connection, log an error message
    console.error('Error connecting to MongoDB:', error.message);
  });

// Export the Mongoose connection for reuse in other parts of the application
module.exports = connection;
