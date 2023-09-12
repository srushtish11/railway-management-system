const express = require("express");
const db = require("./routes/db-config.js");
const app = express();
const cookie = require("cookie-parser");
const PORT = process.env.PORT || 3000


app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('public'))
app.use(cookie());
app.use(express.json());

db.connect((error => {
    
    if (error) {console.log("erorr!!!");
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
    
    res.render('schedule.ejs', { schedule: results });
    });
});

app.listen(PORT);


