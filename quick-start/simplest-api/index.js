const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

// 创建一个Express应用实例
const app = express();

// 使用中间件：解析JSON请求体
app.use(bodyParser.json());

// 注册路由
app.use('/api', router);

// 启动服务
app.listen(3000, () => {
  console.log(`Web 服务启动成功`);
});
