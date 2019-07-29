const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next()
})

const { LoginAPI } = require('./user');
app.post('/user/login', LoginAPI());

app.listen(80, () => {
  console.log('mock接口服务器启动完成，端口为：80')
})