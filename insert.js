var con = require("../db_connection");
var connection = con.getConnection();
connection.connect();
var express = require("express");
var router = express.Router();

router.post("/", (req, res) => {
    var e_id = req.body.e_id;
    var e_name = req.body.e_name;
    var e_sal = req.body.e_sal;

    // Use placeholders in the SQL query to prevent SQL injection
    var sql = "INSERT INTO EMP (E_ID, E_NAME, E_SALARY) VALUES (?, ?, ?)";

    // Pass the values as an array to avoid SQL injection and handle any escaping
    connection.query(sql, [e_id, e_name, e_sal], (err, result) => {
        if (err) {
            console.error(err);
            res.send({ "insert": "fail" });
        } else {
            res.send({ "insert": "success" });
        }
    });
});

module.exports = router;
