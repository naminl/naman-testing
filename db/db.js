const mysql = require("mysql");

// const mySqlConnection = mysql.createConnection({
//   host: "localhost",
// });

const mySqlConnection = mysql.createConnection({
  host: "sql12.freemysqlhosting.net", //Or whatever you received in your mail

  user: "sql12364619",

  password: "sjvPe46ckp",

  database: "sql12364619",
});

mySqlConnection.connect((err) => {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = mySqlConnection;
