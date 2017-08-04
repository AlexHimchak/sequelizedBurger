var express = require("express");
var router = express.Router();
var db = require("../models");
// Import the model (cat.js) to use its database functions.
//var burger = require("../models/burger.js");
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.burger.findAll({}).then(function(dbburger){
    var hbsObject = {
      burgers:dbburger
    };
    res.render("index", hbsObject);
    //res.json(dbburger);
  });


});
router.post("/", function(req, res) {
  db.burger.create({
    burger_name:req.body.burger_name,
    devoured:req.body.devoured
  }).then(function(dbburger) {
   // res.json(dbburger);
    res.redirect("/");
  });
});
router.put("/:id", function(req, res) {
  // var condition = "id = " + req.params.id;
  // console.log("condition", condition);
  db.burger.update(req.body,
  //   burger_name: req.body.burger_name,
  //   devoured: req.body.devoured
  // },
 {
      where: {
        id: req.params.id
  }
})
  .then( function(dbburger) {
    res.redirect("/");
  });
});
// Export routes for server.js to use.
module.exports = router;