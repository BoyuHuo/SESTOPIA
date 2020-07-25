var skillService = require("../service/skillService");
var assert = require('assert');

describe('Member', function() {
    describe('get skillsç', function() {
        it('should return -1 when the value is not present', function() {
            skillService.getAllSkills(function(data) {
                assert.equal(data.length, 11);
            }, function(err) {
            })
        });
    });

});


