var  mysql = require("../service/mysqlUtil");
var express = require('express');
var router = express.Router();

/* GET members. */
router.get('/', (req, res, next) => {
  let totalData;
   mysql.query('SELECT * FROM members',function (err,rows, field) {
       res.send(rows);
   })


});

module.exports = router;
