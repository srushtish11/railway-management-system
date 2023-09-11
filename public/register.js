function validateEmail(emailId) {
    
    emailid = document.getElementById("email");
        var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (emailId.value.match(mailformat)) {
            document.form.email.focus();
           
          const register = {
              email: emailid.value,
            password: password.value
            }
            
        fetch("http://localhost:3000/register", {
            method: "POST",
            body: JSON.stringify(register),
            
            headers: {
                "Content-Type": "application/json"
            }, 
        }).then(res => res.json())
            .then(data => {
                alert(register,"data register");
                if (data.status == "error") {
                    alert("Failed to login")
                } else {
                    alert("Successfully registered")
                    
                }
            })
        }      
        else {
          alert("Invalid email address.");
          document.form.email.focus();
          
          
          // location.reload();
          document.getElementById("email").select();
        
          return false;
        } }