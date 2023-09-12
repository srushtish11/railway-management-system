const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const PNR = async (req, res) => {//async return a promise resolve either by a value or a error
    const { PNR_no } = req.body
    if (!PNR_no) return res.json({ status: "error", error: "please enter your PNR_no" })
    else {
        db.query('SELECT * FROM users WHERE PNR_no=?', [PNR_no], async (Err, result) => {
            if (Err) throw Err;
    
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
module.exports = PNR;