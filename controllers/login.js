const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {//async return a promise resolve either by a value or a error
    const { email, password } = req.body
    if (!email || !password) return res.json({ status: "error", error: "please enter your emailid and password" })
    else {
        db.query('SELECT * FROM users WHERE email=?', [email], async (Err, result) => {
            if (Err) throw Err;
            if (!result.length || !await bcrypt.compare(password, result[0].password))
                return res.json({ status: "error", error: "Incorrect email or password" })
            else {
                const cookieOptions = {
                    expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRS * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                //res.cookie("userRegistered", token, cookieOptions);
                return res.json({ status: "success", success: "Successfully Logged In!" });
            }
        })
    }

}
module.exports = login;