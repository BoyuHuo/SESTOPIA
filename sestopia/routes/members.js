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

router.post('/addmember', (req, res, next) => {
    memberService.addMember(req.body.name, req.body.sno, req.body.email).then((data) => {
        res.send(data);
    }, (err) => {
        res.status(501).send("Can't get members because : " + err.stack);
    })
});




module.exports = router;