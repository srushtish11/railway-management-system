const express = require("express");
const db = require("./routes/db-config.js");
const app = express();
const cookie = require("cookie-parser");
const PORT = process.env.PORT || 3000

// app.use("/js", express.static(__dirname + "/public/js"))
// app.use("/css", express.static(__dirname + "/public/css"))
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static('public'))
app.use(cookie());
app.use(express.json());

db.connect((err => {
    
    if (err) {console.log("erorr!!!");
        throw err};
}))

app.use("/", require("./routes/pages.js"));
//app.use("/", require("./controllers/auth"));
app.listen(PORT);


