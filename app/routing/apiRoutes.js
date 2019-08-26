let friendsArray = require("../data/friend.js");

//API GET request
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });
//Create new User 
app.post("/api/friends", function(req, res) {
  let userData = req.body;  
  let userScores = userData.scores; 
  let diff = 0;
  let diffArr = [];
  //push to data /api/friends
  friendsArray.push(userData);
  console.log("User added.");
  
  //way to push data to frinds.js as well. ??????
  
  for(i=0; i < (friendsArray.length - 1); i ++){
    let score =(friendsArray[i].scores);
    for(j =0; j < 9; j++){
      diff += Math.abs(score[j] - userScores[j])
      };
      diffArr.push(parseInt(diff));
      diff = 0;  
    }; 
    //console.log(diffArr)
    let userMatch = Math.min.apply(Math, diffArr);
    //console.log(userMatch);
    let index = diffArr.indexOf(userMatch);
    let userMatchFound = friendsArray[index];
    //console.log(userMatchFound);
    //return best match to client NOT WORKING
    res.json(userMatchFound);
    });  
}