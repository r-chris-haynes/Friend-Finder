var friendsData = require("../data/friends");

module.exports = function(app) {
 
  app.get("/api/friends", function(req, res) {
      res.json(friendsData);
      console.log(friendArray);
    });

    app.post("/api/friends", function(req, res) {
      friendsData.push(req.body);
      res.json(true);
    });
  }
