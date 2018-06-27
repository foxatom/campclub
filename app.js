var express = require("express");
var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){
  // res.send("this will be the landing page")
  res.render("landing");
});

app.get("/campgrounds",function(req,res){
  var campgrounds = [
    {name: "Youhou Creek", image: "https://shotstash.com/wp-content/uploads/edd/2017/07/0007-small.jpg"},
    {name: "Sam Mount", image: "https://shotstash.com/wp-content/uploads/2016/11/shotstash_0167-small.jpg"},
    {name: "Lion in Love", image: "https://shotstash.com/wp-content/uploads/2017/06/0036-1-small.jpg"},
  ]
  res.render("campgrounds",{campgrounds:campgrounds});
});

var PORT = 5000 || process.env.PORT;

app.listen(PORT, process.env.IP, function(){
  console.log("yelp server started, listening to port " + PORT );
});
