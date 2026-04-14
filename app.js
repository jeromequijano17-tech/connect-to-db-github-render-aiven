const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
 host: "mysql-37610bae-jeromequijano17-df99.l.aivencloud.com",
  user: "jerome",
  password: "AVNS_-YAxsM4LYuR2M5SLjeq",
  database: "crud_db",
  port: 23687
});

app.get("/", (req, res) => {
  db.query("SELECT NOW()", (err, result) => {
    if(err) throw err;
    res.send("Database Connected Successfully: " + result[0]["NOW()"]);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

