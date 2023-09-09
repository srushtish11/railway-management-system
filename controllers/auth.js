const express = require("express");
const register = require("./register");
const login = require("./login");
//const logout = require("./logout");
const router = express.Router();
const bodyParser = require("body-parser");//convert string converting json docuent to obj towork on
router.use(bodyParser.json());//middleware


router.post("/register", register);
router.post("/login", login);

module.exports = router;//to use router in other aaplications