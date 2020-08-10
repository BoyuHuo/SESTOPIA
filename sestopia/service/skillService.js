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
        let sql = 'SELECT skills.id as id, skills.name as name, classification, prerequisites,knowledge_area, rationale,roles_for_skill,related_activities,real_world_scenario,role_of_academia, tools, self_assessment, reference, members.name as student_name, members.sno as student_no, members.student_overview as student_overview, members.responsibility as responsibility, skills.introduction as introduction,skills.download as download FROM skills,members where skills.id= members.skill_id AND (skills.NAME LIKE ' + mysql.pool.escape(name) + ' or members.name LIKE ' + mysql.pool.escape(name) + ' or skills.knowledge_area LIKE ' + mysql.pool.escape(name) + ') ';

        mysql.query(sql, function(err, data, field) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

let addSkill = function(name, classification, prerequisites, knowledgeArea, rationale, rolesForSkill, relatedActivities, realWorldScenario, roleOfAcademia, tools, selfAssessment, reference) {
    return new Promise(function(resolve, reject) {
        mysql.query('INSERT INTO skills (name,classification,prerequisites,knowledge_area,rationale,roles_for_skill,related_activities,real_world_scenario,role_of_academia,tools,self_assessment,reference) VALUES (' + mysql.pool.escape(name) + ',' + mysql.pool.escape(classification) + ',' + mysql.pool.escape(prerequisites) + ',' + mysql.pool.escape(knowledgeArea) + ',' + mysql.pool.escape(rationale) + ',' + mysql.pool.escape(rolesForSkill) + ',' + mysql.pool.escape(relatedActivities) + ',' + mysql.pool.escape(realWorldScenario) + ',' + mysql.pool.escape(roleOfAcademia) + ',' + mysql.pool.escape(tools) + ',' + mysql.pool.escape(selfAssessment) + ',' + mysql.pool.escape(reference) + ')', function(err, data, field) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

module.exports = { getAllSkills, getSkillsByName, addSkill };