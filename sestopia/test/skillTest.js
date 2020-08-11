var skillService = require('../service/skillService');
var assert = require('assert');

describe('Skill', function() {
    describe('get skills', function() {
        it('Skills Test has been passed', function() {
            skillService.getAllSkills(function(data) {
                assert.equal(data.length, 11);
            }, function(err) {
                alert(err);
            });
        });
    });

});