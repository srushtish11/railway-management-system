const express = require("express");
const db = require("./routes/db-config.js");
const app = express();
const cookie = require("cookie-parser");
const PORT = process.env.PORT || 3000

// app.use("/js", express.static(__dirname + "/public/js"))
//  app.use("/css", express.static(__dirname + "/public/css"))
app.set("view engine", "ejs");
app.set("views", "./views");
// app.get('/schedule', (req, res) => {
//     res.render('schedule'); // Renders the schedule.ejs file in the views folder
// });
app.use(express.static('public'))
app.use(cookie());
app.use(express.json());

db.connect((error => {
    
    if (error) {console.log("erorr!!!");
        };
}))





app.use("/", require("./routes/pages.js"));
app.use("/", require("./controllers/auth"));

// Inside your Express.js route that renders the schedule.ejs template
app.get('/schedule', (req, res) => {
    // Assuming you have fetched the schedule data from your database
    db.query('SELECT * FROM schedule', (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            res.status(500).send('Database query error');
            return;
        }/* Fetch schedule data from your database */

    // Pass the schedule data to the template
    res.render('schedule.ejs', { schedule: results });
    });
});


// Define a route for the booking page
// app.get('/booking', (req, res) => {
//   res.sendFile(__dirname + '/public/booking.html');
// });

// Handle form submissions
// app.post('/book', (req, res) => {
//   const { ph_no, date_of_dep, seat_no, source, destination, compartment } = req.body;

//   // Generate a dummy PNR number (random 6-digit number)
//   const PNR_no = Math.floor(100000 + Math.random() * 900000).toString();

//   // Insert booking details into the MySQL database
//   db.query(
//     'INSERT INTO pnr_status (ph_no, date_of_dep, seat_no, source, destination, compartment, PNR_no) VALUES (?, ?, ?, ?, ?, ?, ?)',
//     [ph_no, date_of_dep, seat_no, source, destination, compartment, PNR_no],
//     (err, results) => {
//       if (err) {
//         console.error('Error inserting booking:', err);
//         res.status(500).send('Error inserting booking');
//       } else {
//         console.log('Booking successfully inserted with PNR:', PNR_no);
//         res.status(200).json({ PNR_no });
//       }
//     }
//   );
// });



app.listen(PORT);


