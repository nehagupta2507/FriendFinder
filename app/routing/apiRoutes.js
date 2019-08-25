let friendsArray = require("../data/friend.js");

//API GET request
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

//API Post request 
app.post("/api/friends", function(req, resp) {
  let userData = req.body;  
  let userName = userData.name;
  let userPhoto = userData.photo;
  let userScores = userData.scores; 
  //push to data /api/friends
  friendsArray.push(userData);
  //way to push data to frinds.js as well.
  // logic to find match
 });
 };