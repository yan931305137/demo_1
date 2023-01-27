const express = require('express');
const server = express();

//监听get和post请求
server.get('地址', function (req, res) {
    res.send('get_ok')
})
server.post('地址', function (req, res) {
    res.send('post_ok')
})

server.listen(80, function () {
    console.log('创建成功')
})

    