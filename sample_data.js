const mysql = require('mysql');
const express = require('express');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost', // e.g., localhost
  user: 'root',
  password: '',
  database: 'railways',
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

app.get('/', (req, res) => {
  connection.query('SELECT * FROM schedule', (err, rows) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error fetching data');
      return;
    }
    res.send(rows);
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
