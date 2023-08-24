var con = require("../db_connection");
var connection = con.getConnection();
connection.connect();
var express = require("express");
var router = express.Router();

router.post("/", (req, res) => {
    var e_id = req.body.e_id;
    var e_name = req.body.e_name;
    var e_sal = req.body.e_sal;

    // Use parameterized query to prevent SQL injection
    var sql = "UPDATE EMP SET E_NAME = ?, E_SALARY = ? WHERE E_ID = ?";
    
    // Pass the values as an array to avoid SQL injection
    connection.query(sql, [e_name, e_sal, e_id], (err, result) => {
        if (err) {
            console.error(err);
            res.send({ "update": "fail" });
        } else {
            res.send({ "update": "success" });
        }
    });
});

module.exports = router;
