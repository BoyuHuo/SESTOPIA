var memberService = require('../service/memberService');
var assert = require('assert');


describe('Member', function() {
    describe('get members', function() {
        it('Members Test has been passed', function() {
            memberService.getAllMembers(function(data) {
                assert.equal(data.length, 4);
            }, function(err) {
                alert(err);
            });

        });
    });

});