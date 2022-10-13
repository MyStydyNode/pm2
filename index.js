const express = require('express');

const app = express();

app.get('/index', (req, res) => {
  res.json({
    code: 200,
    message: '请求成功！',
  })
})

app.listen('3000', () => {
  console.log('listening on http://localhost:3000/index');
})