//const { response } = require("express");

function getRandom(PNR_no, event) {
    alert("in public.js");
    //event.preventDefault();
    // var pnr = document.getElementById(PNR_no);
    // const length = 10;
    // var pnr = Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
    const booknow = {
        PNR_no: PNR_no.value,
        ph_no: ph_no.value,
        date_of_dep: date_of_dep.value,
        seat_no: seat_no.value,
        source: source.value,
        destination: destination.value,
        compartment: compartment.value
    }
    
    fetch("http://localhost:3000/booknow", {
        method: "POST",
        body: JSON.stringify(booknow),


        headers: {
            "Content-Type": "application/json"
        },
    }).then(res => res.json())
        .then(data => {
            alert("Booked");
            if (data.status == "error") {
                alert("Failed to Book")
            } else {
                alert("Successfully Booked")

            }
        })
    
    
    alert("end of public.js");
}

//     try{
//         const response = await fetch('http://localhost:3000/booknow',
//          {
//              method:'POST',
//              headers:{
//                  'Content-Type':'application/json'
//              },
//              body:JSON.stringify(data)
//          });
//              const responseData = response.json();
//              console.log(responseData);
//      }
//      catch(err){
//          console.log(err);
//      } 
//     // console.log(PNR_no);
//     // return false;
// }