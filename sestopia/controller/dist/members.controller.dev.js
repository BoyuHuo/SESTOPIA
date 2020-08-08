'use strict';

var memberService = require('../service/memberService');

var RESPONSE = require('../util/error.handler');

var express = require('express');

var router = express.Router();

/* GET members. */

router.get('/', function (req, res) {
  memberService.getAllMembers().then(function (data) {
    res.status(RESPONSE.SUCCESS.OK.CODE).send(data);
  }, function (err) {
    res.status(RESPONSE.ERROR.DB_ERR_MEMBER_GET.CODE).send(RESPONSE.ERROR.DB_ERR_MEMBER_GET.MSG);
  });
});

/* Add a new memnber */

router.post('/addmember', function (req, res) {
  memberService.addMember(req.body.name, req.body.sno, req.body.email).then(function (data) {
    res.status(RESPONSE.SUCCESS.OK.CODE).send(data);
  }, function (err) {
    res.status(RESPONSE.ERROR.DB_ERR_MEMBER_ADD.CODE).send(RESPONSE.ERROR.DB_ERR_MEMBER_ADD.MSG + '\n' + err.stack);
  });
});
module.exports = router;
//# sourceMappingURL=members.controller.dev.js.map
