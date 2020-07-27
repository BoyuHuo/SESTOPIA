var memberService = require("../service/memberService");
var ERROR = require("../util/error.handler");
var express = require('express');
var router = express.Router();

/* GET members. */
router.get('/', (req, res, next) => {

    memberService.getAllMembers().then((data) => {
        res.send(data);
    }, (err) => {
        res.status(ERROR.DB_ERR_MEMBER_GET.CODE).send(ERROR.DB_ERR_MEMBER_GET.MSG);
    })
});

/* Add a new memnber */
router.post('/addmember', (req, res, next) => {
    memberService.addMember(req.body.name, req.body.sno, req.body.email).then((data) => {
        res.send(data);
    }, (err) => {
        res.status(ERROR.DB_ERR_MEMBER_ADD.CODE).send(ERROR.DB_ERR_MEMBER_ADD.MSG + "\n" + err.stack);
    })
});




module.exports = router;