const express = require('express');
const router = express.Router();
const db = require("../routes/db-config");// Import your database connection

// Define the GET route for /trains
router.get('/', (req, res) => {
    // Perform a database query to fetch train schedule data from the "schedule" table
    db.query('SELECT * FROM schedule', (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            res.status(500).send('Database query error');
            return;
        }

        // Render an EJS template and pass the fetched data
        res.render('schedule.html', { root: "./public" }, { schedule: results });
    });
});

module.exports = router;