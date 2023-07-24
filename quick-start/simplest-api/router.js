const express = require('express');
const router = express.Router();

// 注册特定于此路由器的中间件
router.use((req, res, next) => {
  console.log('特定于此路由器的中间件');
  // 执行后续中间件或路由
  next();
});

// 路由GET请求：查询用户
router.get('/users/:uid', (req, res) => {
  // 获取URL中的查询参数
  const { query } = req;
  // 获取路径中定义的uid字段
  const { uid } = req.params;
  // 响应JSON数据
  res.json({ query, uid });
});

// 路由POST请求：新增用户
router.post('/users', (req, res) => {
  // 获取请求体数据
  const { body } = req;
  // 响应JSON数据
  res.json({ body });
});

// 路由PUT请求：更新用户
router.put('/users/:uid', (req, res) => {
  res.json({});
});

// 路由DELETE请求：删除用户
router.delete('/users/:uid', (req, res) => {
  res.json({});
});

// 导出路由
module.exports = router;
