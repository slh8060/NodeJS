/**
 * Created by apple on 2017/8/28.
 */
//GET方法
/*
var express = require('express');
var app = express();
app.use(express.static('../public'));

app.get('/index.html',function (req,res) {
    res.sendFile(__dirname+'/'+'index.html');

});

app.get('/process_get',function (req,res) {
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8099,function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});*/


//POST 方法
/*
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended:false
});
app.use(express.static('public'));
app.get('/index.html',function (req,res) {
    res.sendFile(__dirname+'/'+'index.html');
});
app.post('/process_post',urlencodedParser,function (req,res) {
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8082,function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});*/

//文件上传
/*
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/file_upload', function (req, res) {

    console.log(req.files[0]);  // 上传的文件信息

    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log( response );
            res.end( JSON.stringify( response ) );
        });
    });
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
*/

//Cookie 管理
/*
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

app.get('/',function (req,res) {
    console.log("Cookies:",req.cookies)
});

app.listen(8081);*/

//RESTful Web Services
//获取用户信息
var express = require('express');
var app = express();
var fs = require('fs');
app.get('/listUser',function (req,res) {
    res.sendFile(__dirname+'/'+'users.json','utf8',function (err,data) {
        console.log(data);
        res.end(data);
    });
});



//添加用户
var user = {
    "user4":{
        "name":"qqq",
        "password":"444",
        "profession":"farm",
        "id":4
    }
};
app.get('/addUser',function (req,res) {
    fs.readFile(__dirname+'/'+'users.json','utf8',function (err,data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data))
    })
});


//显示用户详情
app.get('/:id',function (req,res) {
    fs.readFile(__dirname+'/'+'users.json','utf8',function (err,data) {
        data = JSON.parse(data);
        var user = data["user"+req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    })
});


//删除用户
var id = 2;
app.get('/deleteUser', function (req, res) {

    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data["user" + 2];

        console.log( data );
        res.end( JSON.stringify(data));
    });
})


var server = app.listen(8081,function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});


