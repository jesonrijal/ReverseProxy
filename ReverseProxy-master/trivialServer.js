const express = require("express");
const app = new express();

app.get("/", function(req, res){
  res.send("Hello world");
});

app.listen(5050, function(err){
  if(err) return console.log("Err " + err);
  console.log("Listening on port 5050");
})