const db = require("../routes/db-config");
// const bcrypt = require("bcryptjs");
const booknow = async (req, res) => {
    console.log(req.body);
    console.log("in controllers.js");
    const {PNR_no:pnr, ph_no, date_of_departure, seat_no, source, destination, compartment } = req.body
    if (!ph_no || !date_of_departure || !seat_no || !source || !destination || !compartment)
        console.log("error in req body")
    else {
        console.log(ph_no, date_of_departure, seat_no, source, destination, compartment);
        const query = `INSERT INTO pnr_status (PNR_no,ph_no,date_of_departure,seat_no,source,destination,compartment) VALUES (?,?,?,?,?,?,?);`;
        // db.query('INSERT INTO users SET ?', { name:namee,address:address,email: email, password: password }, (error, results) => {
        db.query(query, [PNR_no,ph_no, date_of_departure, seat_no, source, destination, compartment], (error, results) => {
            if (error) throw error;
            return res.json({ status: "success", success: "successfully booked!" })

        })
    }
}
module.exports = { booknow };