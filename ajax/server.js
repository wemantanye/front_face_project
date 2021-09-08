// 1. 引入express
const { request, response } = require('express');
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request是请求报文的封装
// response是对响应报文的封装

// json响应
app.all('/json',(request,response)=> {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    // 响应一个数据
    const data = {
        name:'atyufeng'
    }
    // 对对象进行字符串的转换
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
});

// get响应
app.get('/server',(request,response)=> {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    // 设置响应体
    response.send('hello ajax get');
});

// post响应
app.post('/server',(request,response)=> {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    // 设置响应体
    response.send('hello ajax post');
});

// 延时响应
app.get('/delay',(request,response)=> {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 加定时器
    setTimeout(()=> {
        response.send('hello delay');
    },3000)
});

// jQuery 服务
app.all('/jquery-server',(request,response)=> {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    // 设置响应体
    // response.send('hello ajax jquery');
    const data = {name:'王晓阳'};
    response.send(JSON.stringify(data));
});

// axios 服务
app.all('/axios-server',(request,response)=> {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    // 设置响应体
    // response.send('hello ajax axios');
    const data = {name:'王晓阳'};
    response.send(JSON.stringify(data));
});

// fetch 服务
app.all('/fetch-server',(request,response)=> {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    // 设置响应体
    // response.send('hello ajax axios');
    const data = {name:'王晓阳'};
    response.send(JSON.stringify(data));
});

// jsonp 服务
app.all('/jsonp-server',(request,response)=> {
    // response.send('console.log("hello jsonp")');
    // 写入一个json数据
    const data = {
        name: '王晓阳'
    }
    // 将json数据转为字符串
    let str = JSON.stringify(data);
    response.end(`handle(${str})`); // 调用函数并响应报文回送信息
});

// 原生jsonp用户名监测是否存在
app.all('/check-usename',(request,response) => {
    // response.send('console.log("hello jsonp")');
    // 写入一个json数据
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    // 将json数据转为字符串
    let str = JSON.stringify(data);
    // 返回结果
    response.end(`handle(${str})`); // 调用函数并响应报文回送信息
});

// jquery的jsonp请求
app.all('/jquery-jsonp-server',(request,response) => {
    // 写入一个json数据
    const data = {
        name: 'scitc    ',
        city: ['北京','上海','成都']
    };
    // 将json数据转为字符串
    let str = JSON.stringify(data);
    // 接受callback参数
    let cb = request.query.callback;
    // 返回结果
    response.end(`${cb}(${str})`); // 调用函数并响应报文回送信息
});

// cors实现跨域
app.all('/cors-server',(request,response) => {
    // 使用CORS是非常简单的，只需要加上响应头的响应设置就好了
    // 设置源，那些网页可以用来发请求
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('hello cors');
});

// 4. 监听端口启动服务
app.listen(8000,()=> {
    console.log("服务已经启动,8000端口监听中...");
})