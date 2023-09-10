var express=require('express');
var app=express();
const PORT = process.env.PORT || 3000

var router=express.Router();
app.set("view engine", "ejs");

var database=require('./views/database.js');
router.get("/",function(request,response,next){
    var query="SELECT * from schedule";
    database.query(query,function(error,data){
        if (error) {throw error;}
        else{
            response.render('sample_data',{title:'Node.js MySQL',action:'list',sampleData:data});
        }
    })
});

router.get("/add",function(request,response,next){
    response.send('add sample data');
})

app.listen(PORT);