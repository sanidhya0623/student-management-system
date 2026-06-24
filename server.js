const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sanidhya2#",
  database: "studentdb"
});

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("MySQL Connected");
});

// Add Student
app.post("/students", (req, res) => {
  const { name, enrollment, email, mobile, branch } = req.body;

  const sql =
    "INSERT INTO students(name,enrollment,email,mobile,branch) VALUES(?,?,?,?,?)";

  db.query(
    sql,
    [name, enrollment, email, mobile, branch],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Student Added Successfully"
      });
    }
  );
});

// Get All Students
app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("Server Running on Port 3000");
});