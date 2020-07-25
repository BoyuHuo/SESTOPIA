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

let addSkill = function(name,classification,prerequisites,knowledge_area,rationale,roles_for_skill,related_activities,real_world_scenario,role_of_academia,tools,self_assessment,reference) {
    return new Promise(function(resolve, reject) {
        mysql.query('INSERT INTO skills (name,classification,prerequisites,knowledge_area,rationale,roles_for_skill,related_activities,real_world_scenario,role_of_academia,tools,self_assessment,reference) VALUES ('+ mysql.pool.escape(name) +','+ mysql.pool.escape(classification) + ',' + mysql.pool.escape(prerequisites) + ',' + mysql.pool.escape(knowledge_area) +','+ mysql.pool.escape(rationale) +','+mysql.pool.escape(roles_for_skill) +','+mysql.pool.escape(related_activities) +','+mysql.pool.escape(real_world_scenario) +','+mysql.pool.escape(role_of_academia) +','+mysql.pool.escape(tools) +','+mysql.pool.escape(self_assessment) +','+mysql.pool.escape(reference) +')',function(err, data, field) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

module.exports =  { getAllSkills,  getSkillsByName,addSkill}; 