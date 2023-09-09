const express=require('express');

const mysql=require('mysql');

const connection=mysql.createConnection({
    host:'localhost',
    port:3306,
    database:'testing',
    user:'root',
    password:''
});
var database_connection_status='';

connection.connect(function(error){
    if(error)
{
    database_connection_status='<h3 class="text-center text-danger">MySQL Database Connection Error</h3>';
}
else
{
    database_connection_status='<h3 class="text-center text-success">Node JS Application Successfully connect to MySQL Database</h3>';
}
});
const app=express();
app.use(express.urlencoded());

app.get('/',function(request,reponse,next)
{
    response.send(`
    <!DOCTYPE html>
    <!-- Created By CodingNepal -->
    <html lang="en" dir="ltr">
       <head>
          <meta charset="utf-8">
          <title>Transparent Login Form HTML CSS</title>
          <link rel="stylesheet" href="login.css">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
       </head>
       <body>
          <div class="bg-img">
            <video class="bg-img" src="train.mp4" muted autoplay></video>
             <div class="content">
                <header>Signup Form</header>
                <form action="index.html">
                   <div class="field">
                      <span class="fa fa-user"></span>
                      <input type="text" name="phone" placeholder="Phone number">
                   </div>
                   <div class="field space">
                      <span class="fa fa-lock"></span>
                      <input type="password" name="password" class="pass-key" required placeholder="Password">
                      <span class="show">SHOW</span>
                   </div>
                   <div class="pass">
                      <a href="#">Forgot Password?</a>
                   </div>
                   <div class="field">
                      <input type="submit" value="SIGNUP">
                   </div>
                </form>
                <!-- <div class="login">
                   Or login with
                </div>
                <div class="links">
                   <div class="facebook">
                      <i class="fab fa-facebook-f"><span>Facebook</span></i>
                   </div>
                   <div class="instagram">
                      <i class="fab fa-instagram"><span>Instagram</span></i>
                   </div>
                </div> -->
                <div class="signup">
                   already have an account?
                   <a href="login.html">Login</a>
                </div>
             </div>
          </div>
          <script>
             const pass_field = document.querySelector('.pass-key');
             const showBtn = document.querySelector('.show');
             showBtn.addEventListener('click', function(){
              if(pass_field.type === "password"){
                pass_field.type = "text";
                showBtn.textContent = "HIDE";
                showBtn.style.color = "#3498db";
              }else{
                pass_field.type = "password";
                showBtn.textContent = "SHOW";
                showBtn.style.color = "#222";
              }
             });
          </script>
       </body>
    </html>`)
});
app.post('/',function(request,response,next)
{
    response.send(request.body);
})
app.listen(2000);