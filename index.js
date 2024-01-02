// Import the Express framework for building the web application
const express = require('express');

// Import the MongoDB connection instance
const db = require('./config/connection');

// Import the defined routes for the application
const routes = require('./routes');

// Define the port to use, either from the environment variable or a default value (3001)
const PORT = process.env.PORT || 3001;

// Create an Express application instance
const app = express();

// Middleware to parse incoming JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes for the application
app.use(routes);

// Once the MongoDB connection is open, start the server
db.once('open', () => {
  // Log a success message when connected to the MongoDB database
  console.log('Connected to MongoDB database');

  // Start the Express server and log its URL
  app.listen(PORT, () => {
    console.log(`API server running on http://localhost:${PORT}!`);
  });
});
