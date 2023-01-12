const express = require('express');
const app = express();                      // 이 코드를 사용해서 변수 express에 담은 express 를 app 객체로 모아 모든 서버의 일을 처리한다.
const port = 3000;

require('dotenv').config();                 // dotenv 패키지를 불러온 뒤 .config() 함수 실행하면 .env 파일의 내용을 process.env 객체를 통해 접근함

app.get('/', (req, res) => {
  res.send('Hello World!');
});

console.log("MYSQL_AWS_USERNAME:", process.env.MYSQL_AWS_USERNAME);
console.log("MYSQL_AWS_PASSWORD:", process.env.MYSQL_AWS_PASSWORD);
console.log("MYSQL_AWS_DATABASE:", process.env.MYSQL_AWS_DATABASE);
console.log("MYSQL_AWS_HOST:", process.env.MYSQL_AWS_HOST);

app.listen(port, () => {                            // app.listen 메소드로 http.listen과 같이 3000 포트에서 요청을 대기한다.
  console.log(port, '포트로 서버가 열렸어요!');
});