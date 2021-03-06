var skillService = require('../service/skillService');
var RESPONSE = require('../util/error.handler');
var express = require('express');
var router = express.Router();

/* GET skills. */
router.get('/', (req, res) => {

    skillService.getAllSkills().then((data) => {
        res.status(RESPONSE.SUCCESS.OK.CODE).send(data);
    }, (err) => {
        res.status(RESPONSE.ERROR.DB_ERR_SKILL_GET.CODE).send(RESPONSE.ERROR.DB_ERR_SKILL_GET.MSG + '\n' + err.stack);
    });
});

/* GET skills by search. */
router.get('/search', (req, res) => {
    skillService.getSkillsByName('%' + req.query.name + '%').then((data) => {
        res.status(RESPONSE.SUCCESS.OK.CODE).send(data);
    }, (err) => {
        res.status(RESPONSE.ERROR.DB_ERR_MEMBER_GET.CODE).send(RESPONSE.ERROR.DB_ERR_MEMBER_GET.MSG + '\n' + err.stack);
    });
});

/* Add a new skill */
router.post('/addskill', (req, res) => {
    skillService.addSkill(req.body).then((data) => {
        res.status(RESPONSE.SUCCESS.OK.CODE).send(data);
    }, (err) => {
        res.status(RESPONSE.ERROR.DB_ERR_MEMBER_ADD.CODE).send(RESPONSE.ERROR.DB_ERR_MEMBER_ADD.MSG + '\n' + err.stack);
    });
});


module.exports = router;