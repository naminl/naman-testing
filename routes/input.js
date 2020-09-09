const router = require("express").Router();
const mySqlConnection = require("../db/db");

router.post("/", (req, res) => {
  const { name, date } = req.body;
  const dateN = date.substring(0, 10);

  var sql = `INSERT INTO users (full_name,dob) VALUES ?`;
  const values = [[name, dateN]];

  mySqlConnection.query(sql, [values], (err) => {
    if (err) res.status(500).send(err);
    else {
      res.json("done");
    }
  });
});

module.exports = router;
