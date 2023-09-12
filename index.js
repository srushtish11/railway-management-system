const express = require("express");
const db = require("./routes/db-config.js");
const app = express();


const cookie = require("cookie-parser");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(express.json()); // Parse JSON data




app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('public'))
app.use(cookie());
app.use(express.json());

db.connect((error => {

    if (error) {
        console.log("erorr!!! dbbbb index.js error");
    };
}))


app.use("/", require("./routes/pages.js"));
app.use("/", require("./controllers/auth"));


app.get('/schedule', (req, res) => {

    db.query('SELECT * FROM schedule', (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            res.status(500).send('Database query error');
            return;
        }

        res.render('schedule', { schedule: results });
    });
});

// app.get('/PNR', (req, res) => {

//   db.query('SELECT * FROM pnr_status WHERE PNR_no=?',[PNR_no], (err, results) => {
//       if (err) {
//           console.error('Database query error:', err);
//           res.status(500).send('Database query error');
//           return;
//       }

//   res.render('PNR.ejs', { PNR: results });
//   });
// });



// Define a route for checking and displaying a specific booking by PNR
// app.get('/check-pnr', (req, res) => {
//     // Render a form for users to enter a PNR number
//     res.render('check-pnr');
//   });

// Handle the form submission for checking the PNR number

app.get('/check_pnra', (req, res) => {
    // Render a form for users to enter a PNR number
    res.render('check_pnr.ejs');    
});
app.post('/check_pnr', (req, res) => {
    console.log('POST request to /check_pnr received');
    const { pnr } = req.body;
    console.log(pnr);

    // Fetch the booking details from the database by PNR
    db.query('SELECT * FROM pnr_status WHERE PNR_no = ?', [pnr], (err, results) => {
        if (err) {
            console.error('Error fetching booking:', err);
            res.status(500).send('Error fetching booking');
        } else {
            if (results.length > 0) {
                // Render a page displaying the booking details
                res.render('display_booking.ejs', { booking: results[0] });
            } else {
                // PNR not found, display an error message or redirect as needed
                res.status(404).send('PNR not found');
            }
        }
    });
});


app.listen(PORT);


