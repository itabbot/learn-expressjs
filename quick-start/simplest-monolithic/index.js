const path = require('path');
const express = require('express');

// 创建一个Express应用实例
const app = express();

// 设置静态文件目录
app.use('/static', express.static(path.join(__dirname, 'public')));

// 设置视图模板文件所在的目录
app.set('views', path.join(__dirname, 'views'));

// 设置要使用的模板引擎
app.set('view engine', 'pug');

// 路由渲染 index.pug 文件
app.get('/', (req, res) => {
  res.render('index', { title: '你好', message: '你好世界！' });
});

// 启动服务
app.listen(3000, () => {
  console.log(`Web 服务启动成功`);
});
