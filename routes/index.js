// Import the necessary packages and modules
const router = require("express").Router();
const apiRoutes = require("./api");

// Define a route for the '/api' path and attach the 'apiRoutes' to it
router.use("/api", apiRoutes);

// If none of the defined routes match, send a 'Wrong route!' message
router.use((req, res) => res.send("Wrong route!"));

// Export the 'router' module for use in other parts of the application
module.exports = router;
