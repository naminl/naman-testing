const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const mySqlConnection = require("./db/db");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", express.static("./public"));
app.use(express.static(path.join(__dirname, "public")));

const inputRouter = require("./routes/input");
const listingRouter = require("./routes/listing");

app.use("/add", inputRouter);
app.use("/show", listingRouter);

app.get("/delete/:id", (req, res) => {
  mySqlConnection.query(
    "DELETE FROM users WHERE user_id = ?",
    [req.params.id],
    (err) => {
      if (err) res.status(500).send(err);
      else {
        res.json("Profile deleted.");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
