document.querySelector(".formc").addEventListener("submit", (e) => {
    const PNR = {
       PNR_no: PNR_no.value
    }
    fetch("http://localhost:3000/PNR", {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == "error") {
                alert("Failed to get PNR_no")
            }
            else {
                alert("Successfully logged in")
                window.localStorage.setItem("stat","1");
                

            }


        })
})