/**
 * Created by apple on 2017/8/27.
 */
//从流中读取数据

var fs = require('fs');
var data = '';
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data',function (chunk) {
    data += chunk;
});
readerStream.on('end',function () {
    console.log(data);
});
readerStream.on('error',function (err) {
    console.log(err.stack);
});
console.log('程序执行完毕');

//写入流
var fs = require('fs');
var data = '菜鸟教程官网地址：www.runoob.com';
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data,'UTF8');
writeStream.end();
writeStream.on('finish',function () {
    console.log('写入完成。');
});
writeStream.on('error',function (err) {
    console.log(err.stack);
});
console.log("程序执行完毕");

//管道流
var fs = require('fs');
var readStream = fs.createReadStream('input.txt');
var writeStream = fs.createWriteStream('output.txt');
readerStream.pipe(writeStream);
console.log("程序执行完毕");


//链式流

var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成。");



// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log("文件解压完成。");