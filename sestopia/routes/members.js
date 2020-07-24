var memberService = require("../service/memberService");
var express = require('express');
var router = express.Router();

/* GET members. */
router.get('/', (req, res, next) => {

    memberService.getAllMembers().then((data) => {
        res.send(data);
    }, (err) => {
        res.status(501).send("Can't get members because : " + err.stack);
    })
});

//TODO Micheal
/* Add a new memnber */





module.exports = router;