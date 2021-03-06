var memberService = require('../service/memberService');
var RESPONSE = require('../util/error.handler');
var express = require('express');
var router = express.Router();

/* GET members. */
router.get('/', (req, res) => {

    memberService.getAllMembers().then((data) => {
        res.status(RESPONSE.SUCCESS.OK.CODE).send(data);
    }, (err) => {
        res.status(RESPONSE.ERROR.DB_ERR_MEMBER_GET.CODE).send(RESPONSE.ERROR.DB_ERR_MEMBER_GET.MSG);
    });
});

/* Add a new memnber */
router.post('/addmember', (req, res) => {
    memberService.addMember(req.body.name, req.body.sno, req.body.email).then((data) => {
        res.status(RESPONSE.SUCCESS.OK.CODE).send(data);
    }, (err) => {
        res.status(RESPONSE.ERROR.DB_ERR_MEMBER_ADD.CODE).send(RESPONSE.ERROR.DB_ERR_MEMBER_ADD.MSG + '\n' + err.stack);
    });
});


module.exports = router;