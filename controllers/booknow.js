const db = require("../routes/db-config");
// const bcrypt = require("bcryptjs");
const booknow = async (req, res) => {
    console.log("controller",req.body);
    console.log("in controllers.js");
    const {PNR_no, ph_no, date_of_dep, seat_no, source, destination, compartment,status } = req.body
    if (!PNR_no||!ph_no || !date_of_dep || !seat_no || !source || !destination || !compartment ||!status)
        console.log("error in req body")
    else {
         console.log(PNR_no,ph_no, date_of_dep, seat_no, source, destination, compartment,status);
        const query = `INSERT INTO pnr_status (PNR_no,ph_no,date_of_dep,seat_no,source,destination,compartment,status) VALUES (?,?,?,?,?,?,?,?);`;
        db.query(query, [PNR_no,ph_no, date_of_dep, seat_no, source, destination, compartment,status], (error, results) => {
            if (error) throw error;
            return res.json({ status: "success", success: "successfully booked!" })

        })
    }
}
module.exports =  booknow ;