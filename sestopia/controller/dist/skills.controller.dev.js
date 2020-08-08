'use strict';

var skillService = require('../service/skillService');

var RESPONSE = require('../util/error.handler');

var express = require('express');

var router = express.Router();

/* GET skills. */

router.get('/', function (req, res) {
  skillService.getAllSkills().then(function (data) {
    res.status(RESPONSE.SUCCESS.OK.CODE).send(data);
  }, function (err) {
    res.status(RESPONSE.ERROR.DB_ERR_SKILL_GET.CODE).send(RESPONSE.ERROR.DB_ERR_SKILL_GET.MSG + '\n' + err.stack);
  });
});

/* GET skills by search. */

router.get('/search', function (req, res) {
  skillService.getSkillsByName('%' + req.query.name + '%').then(function (data) {
    res.status(RESPONSE.SUCCESS.OK.CODE).send(data);
  }, function (err) {
    res.status(RESPONSE.ERROR.DB_ERR_MEMBER_GET.CODE).send(RESPONSE.ERROR.DB_ERR_MEMBER_GET.MSG + '\n' + err.stack);
  });
});

/* Add a new skill */

router.post('/addskill', function (req, res) {
  skillService.addSkill(req.body.name, req.body.classification, req.body.prerequisites, req.body.knowledge_area, req.body.rationale, req.body.roles_for_skill, req.body.related_activities, req.body.real_world_scenario, req.body.role_of_academia, req.body.tools, req.body.self_assessment, req.body.reference).then(function (data) {
    res.status(RESPONSE.SUCCESS.OK.CODE).send(data);
  }, function (err) {
    res.status(RESPONSE.ERROR.DB_ERR_MEMBER_ADD.CODE).send(RESPONSE.ERROR.DB_ERR_MEMBER_ADD.MSG + '\n' + err.stack);
  });
});
module.exports = router;
//# sourceMappingURL=skills.controller.dev.js.map
