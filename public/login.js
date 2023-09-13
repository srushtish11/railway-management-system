document.querySelector(".formc").addEventListener("submit", (e) => {
    const login = {
        email: email.value,
        password: password.value
    }
    fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == "error") {
                alert("Failed to login")
            }
            else {
                alert("Successfully logged in")
                window.localStorage.setItem("stat","1");
                window.location.href="index.html";
            }


        })
})