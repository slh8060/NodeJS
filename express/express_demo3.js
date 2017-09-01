/**
 * Created by apple on 2017/8/28.
 */
var express = require('express');
var app = express();

app.use(express.static('../public'));

app.get('/',function (req,res) {
    res.send('Hello123 World');
});

var server = app.listen(8099,function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});