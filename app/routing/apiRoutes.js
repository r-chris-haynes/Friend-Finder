var friendsData = require("../data/friends");

module.exports = function(app) {
 
  app.get("/api/friends", function(req, res) {
      res.json(friendsData);
   
    });

    app.post("/api/friends", function(req, res) {
      const newPerson = req.body;
      var possibleMatch = "";

      for (let i = 0; i < friendsData.length; i++) {
        var matchPercentage = 100;
        var possibleSecondMatch = "";

      for (let j = 0; j < newPerson.choices.length; j++) {
        matchPercentage - Math.abs(parseInt(newPerson.choices[j]) - parseInt(friendsData[i].choices[j])); 
      };
      if (possibleMatch === "") {
        possibleMatch = friendsData[i];
        possibleMatch.percentage = matchPercentage;
      } else {
        possibleSecondMatch = friendsData[i];
        possibleSecondMatch.percentage = matchPercentage;
      };
      if (possibleSecondMatch.percentage > possibleMatch.percentage) {
        possibleMatch = possibleSecondMatch;
      };
    }
    console.log("Possible Match: " , possibleMatch);
    res.json(possibleMatch);
    });
  }
