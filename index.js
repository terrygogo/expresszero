var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({
  extended: true
}));
// parse application/json
app.use(bodyParser.json())
app.use(express.static('./dist'));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('./dist'));
app.get("/hello", function (req, res) {
  res.json({
    message: "Express is up!",
		get_message: req.query
  });
});

app.post("/api/echo", function (req, res) {
 res.json({
      message: "ok",
			post_message: req.body
    });
});

app.listen(3030,function(){
  console.log("Live at Port 3030");
});