var mysql = require('../util/mysql.util');

let getAllSkills = function() {
    return new Promise(function(resolve, reject) {
        mysql.query('SELECT skills.id as id, skills.name as name, classification, prerequisites,knowledge_area, rationale,roles_for_skill,related_activities,real_world_scenario,role_of_academia, tools, self_assessment, reference, members.name as student_name, members.sno as student_no FROM skills,members where skills.id= members.skill_id', function(err, data, field) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

let getSkillsByName = function(name) {
    return new Promise(function(resolve, reject) {
        let sql = 'SELECT skills.id as id, skills.name as name, classification, prerequisites,knowledge_area, rationale,roles_for_skill,related_activities,real_world_scenario,role_of_academia, tools, self_assessment, reference, members.name as student_name, members.sno as student_no, members.student_overview as student_overview, members.responsibility as responsibility, skills.introduction as introduction,skills.download as download, skills.related_area as related_area FROM skills,members where skills.id= members.skill_id AND (skills.NAME LIKE ' + mysql.pool.escape(name) + ' or members.name LIKE ' + mysql.pool.escape(name) + ' or skills.knowledge_area LIKE ' + mysql.pool.escape(name) + ') ';

        mysql.query(sql, function(err, data, field) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

let addSkill = function(skilldoc) {
    return new Promise(function(resolve, reject) {
        mysql.query('INSERT INTO skills (name,classification,prerequisites,knowledge_area,rationale,roles_for_skill,related_activities,real_world_scenario,role_of_academia,tools,self_assessment,reference) VALUES (' + mysql.pool.escape(skilldoc.name) + ',' + mysql.pool.escape(skilldoc.classification) + ',' + mysql.pool.escape(skilldoc.prerequisites) + ',' + mysql.pool.escape(skilldoc.knowledgeArea) + ',' + mysql.pool.escape(skilldoc.rationale) + ',' + mysql.pool.escape(skilldoc.rolesForSkill) + ',' + mysql.pool.escape(skilldoc.relatedActivities) + ',' + mysql.pool.escape(skilldoc.realWorldScenario) + ',' + mysql.pool.escape(skilldoc.roleOfAcademia) + ',' + mysql.pool.escape(skilldoc.tools) + ',' + mysql.pool.escape(skilldoc.selfAssessment) + ',' + mysql.pool.escape(skilldoc.reference) + ')', function(err, data, field) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

module.exports = { getAllSkills, getSkillsByName, addSkill };