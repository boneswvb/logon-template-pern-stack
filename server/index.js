const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const { response } = require('express');

//Middleware

app.use(cors());
app.use(express.json());

//ROUTES//

//create a user

app.post("/logon", async (req, res) => {
  try {
    const { fullName, email, passwordf, passwordr } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (fullName, email, passwordf, passwordr) VALUES($1, $2, $3, $4) RETURNING *",
      [fullName.fullName, email.email, passwordf.passwordf, passwordr.passwordr]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message)
  }
});

//get all users

 app.get("/logon", async (req, res) =>{
   try {
     const allUsers = await pool.query("SELECT * FROM users"); 
     res.json(allUsers.rows);
   } catch (err) {
     console.error(err.message);
   }
 });

//get a user

app.get("/logon/:id", async (req, res) => {
  try {
    const { id } = req.params
    const listUsers = await pool.query(
      "SELECT * FROM users WHERE  u_id = $1", [id]
    );
    res.json(listUsers.rows);
  } catch (err) {
    console.error(err.message)
  }
});

//update a user

app.put("/logon/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, email, passwordf, passwordr } = req.body;
    const udateUser = await pool.query(
      "UPDATE users SET fullName = $1, email = $2, passwordf = $3, passwordr = $4 WHERE u_id = $5",
      [fullName, email, passwordf, passwordr, id]
    );
    res.json("User was updated")
  } catch (err) {
    console.error(err.message)
  }
});

//delete a user

app.delete("/logon/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query(
      "DELETE FROM users WHERE u_id = $1",
      [id]
    );
    res.json("User was deleted");
  } catch (err) {
    console.error(err.message)
  }
});

//lISTEN TO PORT

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});