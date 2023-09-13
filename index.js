const express = require("express");
const db = require("./routes/db-config.js");
const app = express();


const cookie = require("cookie-parser");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.json()); 




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



app.get('/check_pnra', (req, res) => {
    res.render('check_pnr.ejs');    
});
app.post('/check_pnr', (req, res) => {
    const { pnr } = req.body;

    db.query('SELECT * FROM pnr_status WHERE PNR_no = ?', [pnr], (err, results) => {
        if (err) {
            console.error('Error fetching booking:', err);
            res.status(500).send('Error fetching booking');
        } else {
            if (results.length > 0) {
                res.render('display_booking.ejs', { booking: results[0] });
            } else {
                res.status(404).send('PNR not found');
            }
        }
    });
});


app.get('/check_seat', (req, res) => {
    res.render('check_seats.ejs');    
});
app.post('/check_seats', (req, res) => {
    const { train_no } = req.body;

    db.query('SELECT * FROM seats_available WHERE train_no = ?', [train_no], (err, results) => {
        if (err) {
            console.error('Error fetching booking:', err);
            res.status(500).send('Error fetching booking');
        } else {
            if (results.length > 0) {
                res.render('display_seats.ejs', { seats: results[0] });
            } else {
                res.status(404).send('Train number not found');
            }
        }
    });
});



app.get('/fare', (req, res) => {
    res.render('check_fare.ejs');    
});
app.post('/check_fare', (req, res) => {
    const { train_no } = req.body;

    db.query('SELECT * FROM ticket_price WHERE train_no = ?', [train_no], (err, results) => {
        if (err) {
            console.error('Error fetching booking:', err);
            res.status(500).send('Error fetching booking');
        } else {
            if (results.length > 0) {
                res.render('display_fare.ejs', { seats: results[0] });
            } else {
                res.status(404).send('Train number not found');
            }
        }
    });
});





app.listen(PORT);


