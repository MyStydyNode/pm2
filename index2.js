const express = require('express');

const app = express();

app.get('/index2', (req, res) => {
  res.json({
    code: 200,
    message: '请求2成功！',
  })
})

app.listen('5000', () => {
  console.log('listening on http://localhost:5000/index2');
})