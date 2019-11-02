var friends = require("../data/friends");

module.exports = function(app) {
 
  app.get("/api/friends", function(req, res) {
      res.json(friends);
   
    });

    app.post("/api/friends", function(req, res) {
      var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
      };
      console.log(req.body)

      var userData = req.body;
      var userScores = userData.scores;
      var totalDifference = 0;

      for (var i = 0; i < friends.length; i++) {
        console.log(friends[i]);
        totalDifference = 0;

        for (var j = 0; j < friends[i].scores[j]; j++) {
          totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

          if (totalDifference <= bestMatch.friendDifference) {
            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendDifference = totalDifference;
          }
        }
      }
      friends.push(userData);
      res.json(bestMatch);
    });
    
    
    
    
    // app.post("/api/friends", function(req, res) {
    //   const newPerson = req.body;
    //   var possibleMatch = "";

    //   for (let i = 0; i < friendsData.length; i++) {
    //     var matchPercentage = 100;
    //     var possibleSecondMatch = "";

    //   for (let j = 0; j < newPerson.choices.length; j++) {
    //     matchPercentage - Math.abs(parseInt(newPerson.choices[j]) - parseInt(friendsData[i].choices[j])); 
    //   };
    //   if (possibleMatch === "") {
    //     possibleMatch = friendsData[i];
    //     possibleMatch.percentage = matchPercentage;
    //   } else {
    //     possibleSecondMatch = friendsData[i];
    //     possibleSecondMatch.percentage = matchPercentage;
    //   };
    //   if (possibleSecondMatch.percentage > possibleMatch.percentage) {
    //     possibleMatch = possibleSecondMatch;
    //   };
    // }
    // console.log("Possible Match: " , possibleMatch);
    // res.json(possibleMatch);
    // });
  }
