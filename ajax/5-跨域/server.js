// 引入express
const {requset,response} = require('express');
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由规则
app.get('/home',(require,response) => {
    // 响应一个页面
    response.sendFile(__dirname + '/同源.html');
});

app.get('/data',(require,response) => {
    response.send('用户数据');
});

app.listen(9000,()=>{
    console.log('服务已经启动...');
})

