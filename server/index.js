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
    const { names, surname, id_number, pasword } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (names, surname, id_number, pasword) VALUES($1, $2, $3, $4) RETURNING *",
      [names, surname, id_number, pasword]
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
    const { names, surname, id_number, pasword } = req.body;
    const udateUser = await pool.query(
      "UPDATE users SET names = $1, surname = $2, id_number = $3, pasword = $4 WHERE u_id = $5",
      [names, surname, id_number, pasword, id]
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
  console.log('Server has started on port 5000');
});