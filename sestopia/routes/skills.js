var  skillService = require("../service/skillService");
var express = require('express');
var router = express.Router();

/* GET skills. */
router.get('/', (req, res, next) => {

   skillService.getAllSkills().then((data)=>{
    res.send(data);
  },(err)=>{
    res.status(501).send("Can't get skills because : "+err.stack);
  })
});

/* GET skills. */
router.get('/search', (req, res, next) => {
   skillService.getSkillsByName("%"+req.query.name+"%").then((data)=>{
    res.send(data);
  },(err)=>{
    res.status(501).send("Can't get skills because : "+err.stack);
  })
});




module.exports = router;
