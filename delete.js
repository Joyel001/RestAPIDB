var con = require("../db_connection");
var connection = con.getConnection();
connection.connect();
var express = require("express");
var router = express.Router();

router.post("/", (req, res) => {
    var e_id = req.body.e_id;
    
    // Use parameterized query to prevent SQL injection
    var sql = "DELETE FROM EMP WHERE E_ID = ?";
    
    // Pass the value as an array to avoid SQL injection
    connection.query(sql, [e_id], (err, result) => {
        if (err) {
            console.error(err);
            res.send({ "delete": "fail" });
        } else {
            res.send({ "delete": "success" });
        }
    });
});

module.exports = router;
