const mysql = require("mysql2")

const pool  = mysql.createPool({
    host : "localhost",
    user : "root",
    database : "nodeProject",
    password : "SHa.arvind*99#"
})


module.exports = pool.promise();