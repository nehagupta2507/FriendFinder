// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Tells node that w e are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3030;

// Sets up app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// The below code effectively "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});