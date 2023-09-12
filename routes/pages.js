const express = require("express");
const router = express.Router();
//const feedController = require("../controllers/booknow");
//const loggedIn = require("../controllers/loggedin")

router.get("/", (req, res) => {
    res.render("index");
})

router.get("/register", (req, res) => {
    res.sendFile("register.html", { root: "./public" });
})

router.get("/login", (req, res) => {
    res.sendFile("login.html", { root: "./public" });
})

// router.post("/book_now", async (req, res) => {
//     res.sendFile("book_now.html", { root: "./public" });
//     // Your code to handle the POST request and insert data into the database
// });

// router.get("/booknow", (req, res) => {
//     res.sendFile("booknow.html", { root: "./public" });
// });




// router.get("/post", feedController.booknow);
//  router.post("/post", feedController.booknow);



module.exports = router;
