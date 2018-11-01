# node+express router 

## install node.js &  VS Code

install node 
https://nodejs.org/en/download/

install vs code
https://code.visualstudio.com/download

install express
https://expressjs.com/en/starter/installing.html

## 설치 하고 실행하기 

## 설치및 테스트 

git가 설치 되어 있다면 

> git clone https://github.com/terrygogo/expresszero.git

> 아니면 https://github.com/terrygogo/expresszero 에서 zip 파일을 받아 압축을 풀고 

해당 디랙토리로 이동 후 

패키지 설치
> npm install

실행 
> npm start

**frontend를 실행하여 작동을 확인 할수도 있습니다**
https://github.com/terrygogo/reactroutermen 


## 작성했던 순서 입니다. 

> mkdir “abc”  
> cd “abc” 
> npm init

> npm install express  --save

https://codeforgeek.com/2015/05/expressjs-router-tutorial/

> npm install body-parser

https://www.npmjs.com/package/body-parser

> code .

https://code.visualstudio.com/docs/nodejs/nodejs-tutorial


서버 프로그램을 작성합니다. 
add new file "index.js"

```javascript
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

기본 홈페이지를 하나 작성 합니다. 반드시 있을 필요는 없습니다. 

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
프로젝트 생성후 처음 vs code를 구동하는 경우라면 디버거 작동 설정이 필요합니다. 

debug -> start -> select node.js & luanch.json ( VC code debugger setting) 

debug -> start 

혹은 vs code의 터미널이나 명령창에서 실행하기 위해 아래와 같이 설정합니다. 
add to "pacake.json" below  

"scripts": {
    "start": "node index.js"
  },

> npm start 

frontend 가동전이라도 아래와 같이 수행해서 서버 작동을 확인 할 수 있습니다. 
test by curl commmand 

> curl http://localhost:3000/hello?babo=mimi

> curl http://localhost:3000/api/echo/ -d "mama=hama"

혹은 postman을 사용하세요

https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=ko
https://www.getpostman.com/

 
