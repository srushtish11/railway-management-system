const mysql=require('mysql')

var connection=mysql.createConnection({
    host:'localhost',
    database:'railways',
    user:'root',
    password:''
});

connection.connect(function(error){
    if (error) {
        console.log("not connected");
    }
    else{
        console.log("connected");
    }
});

module.exports=connection;