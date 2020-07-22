var  mysql = require("./mysqlUtil");

let getAllSkills = function(){
    return new Promise(function (resolve,reject){
        mysql.query('SELECT skills.id as id, skills.name as name, classification, prerequisites,knowledge_area, rationale,roles_for_skill,related_activities,real_world_scenario,role_of_academia, tools, self_assessment, reference, members.name as student_name, members.sno as student_no FROM skills,members where skills.id= members.skill_id',function (err,data, field) {
            if(err){
                 reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

let getSkillsByName = function(name){
    return new Promise(function (resolve,reject){
        let sql = 'SELECT skills.id as id, skills.name as name, classification, prerequisites,knowledge_area, rationale,roles_for_skill,related_activities,real_world_scenario,role_of_academia, tools, self_assessment, reference, members.name as student_name, members.sno as student_no FROM skills,members where skills.id= members.skill_id AND skills.name LIKE '+ mysql.pool.escape(name);
        mysql.query(sql,function (err,data, field) {
            if(err){
                 reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


module.exports =  { getAllSkills,  getSkillsByName}; 