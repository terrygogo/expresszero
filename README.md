# node+express router 

## install node.js &  VS Code

install node 
https://nodejs.org/en/download/

install vs code
https://code.visualstudio.com/download

install express
https://expressjs.com/en/starter/installing.html

## 설치 하고 실행하기 




## 작성했던 순서 

> mkdir “abc”  
> cd “abc” 
> npm init

> npm install express  --save

https://codeforgeek.com/2015/05/expressjs-router-tutorial/

> npm install body-parser

https://www.npmjs.com/package/body-parser

> code .

https://code.visualstudio.com/docs/nodejs/nodejs-tutorial

```javascript
add new file "index.js"

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

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
```

add folder "dist" and add new file "index.html" 

```
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```
debug -> start -> select node.js & luanch.json ( VC code debugger setting) 

debug -> start 

add to "pacake.json" below to run by command

"scripts": {
    "start": "node index.js"
  },

> npm start 

test by postman  or curl 

> curl http://localhost:3000/hello?babo=mimi
> curl http://localhost:3000/api/echo/ -d "mama=hama"

https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=ko
https://www.getpostman.com/

downlod or clone complete source
npm install
npm start 
or debug start in vs code
