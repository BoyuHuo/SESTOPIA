var skillService = require("../service/skillService");
var ERROR = require("../util/error.handler");
var express = require('express');
var router = express.Router();

/* GET skills. */
router.get('/', (req, res, next) => {

    skillService.getAllSkills().then((data) => {
        res.send(data);
    }, (err) => {
        res.status(ERROR.DB_ERR_SKILL_GET.CODE).send(ERROR.DB_ERR_SKILL_GET.MSG + "\n" + err.stack);
    })
});

/* GET skills. */
router.get('/search', (req, res, next) => {
    skillService.getSkillsByName("%" + req.query.name + "%").then((data) => {
        res.send(data);
    }, (err) => {
        res.status(ERROR.DB_ERR_MEMBER_GET.CODE).send(ERROR.DB_ERR_MEMBER_GET.MSG + "\n" + err.stack);
    })
});

/* Add a new skill */
router.post('/addskill', (req, res, next) => {
    skillService.addSkill(req.body.name, req.body.classification, req.body.prerequisites, req.body.knowledge_area, req.body.rationale, req.body.roles_for_skill, req.body.related_activities, req.body.real_world_scenario, req.body.role_of_academia, req.body.tools, req.body.self_assessment, req.body.reference).then((data) => {
        res.send(data);
    }, (err) => {
        res.status(ERROR.DB_ERR_MEMBER_ADD.CODE).send(ERROR.DB_ERR_MEMBER_ADD.MSG + "\n" + err.stack);
    })
});






module.exports = router;