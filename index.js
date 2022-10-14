const express = require('express');
const os = require('os');

const app = express();

app.get('/index', (req, res) => {
  res.json({
    code: 200,
    message: '请求成功4444444444444！',
    data: {
      list: os.cpus(),
    }
  })
})

app.listen('3000', () => {
  console.log('listening on http://localhost:3000/index');
})