var mysql = require("../util/mysql.util");

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
let addMember = function(name, sno, email) {
    return new Promise(function(resolve, reject) {
        mysql.query('INSERT INTO members (name,sno,email) VALUES (' + mysql.pool.escape(name) + ',' + mysql.pool.escape(sno) + ',' + mysql.pool.escape(email) + ')', function(err, data, field) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}






module.exports = { getAllMembers, addMember };