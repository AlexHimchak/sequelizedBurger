var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
    db.burger.findAll({}).then(function(dbburger) {
        var hbsObject = {
            burgers: dbburger
        };
        res.render("index", hbsObject);
    });


});
router.post("/", function(req, res) {
    db.burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function(dbburger) {
        res.redirect("/");
    });
});
router.put("/:id", function(req, res) {

    db.burger.update(req.body,

            {
                where: {
                    id: req.params.id
                }
            })
        .then(function(dbburger) {
            res.redirect("/");
        });
});
// Export routes for server.js to use.
module.exports = router;