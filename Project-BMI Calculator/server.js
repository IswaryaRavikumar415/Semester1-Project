const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extende:true}));


app.get("/",function(req,res){

    res.sendFile(__dirname+"/BMICalculator2.html");

});

app.post("/",function(req,res){
    var bmi, w, h;
   w = Number(req.body.weight);
   h = Number(req.body.height);
   bmi=w/(h/100*h/100);
 


  //console.log(req.body, result)
  //console.log(req.body);
     
     
res.send("FITNESS AND HEALTH : YOUR BMI IS "+bmi);

});


app.listen(3001,function(){
    console.log("Server is running on port 3001");
});







