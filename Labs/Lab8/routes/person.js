let express = require('express');
let router = express.Router();
let Person = require('../models/person');

router.get("/person", function (req, res) {
    res.render('index')
})

router.post("/person", function (req, res) {
    console.log(req.body.person)
    Person.create(req.body.person, function (err, person) {
        if (err) {
            console.error(err);
        } else {
            res.redirect('/person/person');
        }
    })
    
})

module.exports = router;