const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    console.log(req.body);
    const { email, password: Npassword } = req.body
    if (!email || !Npassword)
        console.log("error")
        else {
            const password = await bcrypt.hash(Npassword, 8);
            console.log(password);
            const query=`INSERT INTO users (email,password) VALUES (?,?);`;
            // db.query('INSERT INTO users SET ?', { name:namee,address:address,email: email, password: password }, (error, results) => {
                db.query(query, [email,password] , (error, results) => {
            if (error) throw error;
                return res.json({status: "success", success: "successfully signed up!"})
                
            })
             }
            }
module.exports = register;