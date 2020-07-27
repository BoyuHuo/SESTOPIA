let ERROR = {
    DB_CONNECT_FAIL: {
        CODE: 501,
        MSG: 'Can\'t connect to the database, please contact the administrator!'
    },
    DB_ERR_MEMBER_GET: {
        CODE: 511,
        MSG: 'Can\'t get member information, please contact the administrator!'
    },
    DB_ERR_MEMBER_ADD: {
        CODE: 512,
        MSG: 'Can\'t add new member, due to following issue: '
    },
    DB_ERR_SKILL_GET: {
        CODE: 521,
        MSG: 'Can\'t get skill information, please contact the administrator!'
    },
    DB_ERR_SKILL_ADD: {
        CODE: 522,
        MSG: 'Can\'t add new skill, due to following issue: '
    }
};

module.exports = ERROR;