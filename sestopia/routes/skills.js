var skillService = require("../service/skillService");
var express = require('express');
var router = express.Router();

/* GET skills. */
router.get('/', (req, res, next) => {

    skillService.getAllSkills().then((data) => {
        res.send(data);
    }, (err) => {
        res.status(501).send("Can't get skills because : " + err.stack);
    })
});

/* GET skills. */
router.get('/search', (req, res, next) => {
    skillService.getSkillsByName("%" + req.query.name + "%").then((data) => {
        res.send(data);
    }, (err) => {
        res.status(501).send("Can't get skills because : " + err.stack);
    })
});

//TODO Micheal
/* Add a new skill */

router.post('/addskill', (req, res, next) => {
    skillService.addSkill(req.body.name, req.body.classification, req.body.prerequisites,req.body.knowledge_area,req.body.rationale,req.body.roles_for_skill,req.body.related_activities,req.body.real_world_scenario,req.body.role_of_academia,req.body.tools,req.body.self_assessment,req.body.reference).then((data) => {
        res.send(data);
    }, (err) => {
        res.status(501).send("Can't add skill because : " + err.stack);
    })
});






module.exports = router;