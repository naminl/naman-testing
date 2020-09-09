const router = require("express").Router();
const mySqlConnection = require("../db/db");

router.get("/", (req, res) => {
  mySqlConnection.query("SELECT * FROM users ", (err, data) => {
    if (err) res.status(400).json("Error: " + err);
    else res.json(data);
  });
});

module.exports = router;
