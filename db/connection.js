const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sampledb",
});

connection.connect((err) => {
  if (err) console.log(err.message);
  else console.log("Connnection Completed");
});

module.exports = connection;
