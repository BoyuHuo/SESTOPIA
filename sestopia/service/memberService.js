var mysql = require("./mysqlUtil");

let getAllMembers = function() {
    return new Promise(function(resolve, reject) {
        mysql.query('SELECT members.id as id,members.name as student_name,sno as student_no, email,skills.name as skill_name, skills.knowledge_area as knowledge_area  FROM members,skills where members.skill_id=skills.id', function(err, data, field) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

//TODO Micheal
/* add new member function */


module.exports = { getAllMembers };