const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const register =  async(req, res) => {
    const { phone, password: Npassword } = req.body
    if (!phone || !Npassword)
        console.log("error")
            else {
                const password = await bcrypt.hash(Npassword, 8);
                console.log(password);
                db.query('INSERT INTO users SET ?', { phone:phone, password: password }, (error, results) => {
                    if (error) throw error;
                    return res.json({status: "success", success: "successfully signed up!"})
                })
             }
            }
module.exports = register;