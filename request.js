/**
 * Created by apple on 2017/8/28.
 */

//获取GET请求内容
/*
 var http = require('http');
 var url = require('url');
 var util = require('util');

http.createServer(function (req,res) {
    res.writeHead(200,
        {'Content-Type':'text/plain;charset=utf-8'});

    //解析 url 参数
    var params = url.parse(req.url,true).query;
    res.write('网站名：'+params.name);
    res.write('网站URL:'+params.url);
    res.end();
}).listen(3000);*/

//获取 POST 请求内容
var http = require('http');
var querystring = require('querystring');
var postHTML =  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req,res) {
    var body = "";
    req.on('data',function (chunk) {
        body += chunk;
    });

    req.on('end',function () {
        body = querystring.parse(body);
        res.writeHead(200,
            {'Content-Type':'text/html;charset=utf8'});
        if (body.name && body.url){
            res.write('网站名:'+body.name);
            res.write('网站URl:'+body.url);
        } else {
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);
