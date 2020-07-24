var memberService = require("../service/memberService");
var assert = require('assert');
describe('Member', function() {
    describe('get members', function() {
        it('should return -1 when the value is not present', function() {
            memberService.getAllMembers(function(data) {
                assert.equal(data.length, 4);
            }, function(err) {

            })

        });
    });
});