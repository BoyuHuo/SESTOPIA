const config = require("./mysql.config.js")
const mysql = require("mysql")

//Config
const pool = mysql.createPool({
    connectionLimit: 50,
    host: config["host"],
    user: config["user"],
    password: config["password"],
    database: config["database"],
    multipleStatements: true
});

let query = function(sql, values) {

    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }

                    connection.release()
                })
            }
        })
    })
}



module.exports = {
    query,
    pool
}