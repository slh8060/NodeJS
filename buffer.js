/**
 * Created by apple on 2017/8/27.
 */

//写入缓冲区
var buf = new Buffer(256);
var len = buf.write('www.runoob.com');
console.log('写入字节数：'+len);


//从缓冲区读区数据
var buf = new Buffer(26);
for(var i = 0; i < 26; i ++){
    buf[i] = i + 97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString(undefined,0,5));

//将 Buffer 转换为 JSON 对象
var buf = new Buffer('www.runoob.com');
var json = buf.toJSON(buf);
console.log(json);

//缓冲区合并

var buffer1 = new Buffer('Hello,');
var buffer2 = new Buffer('NodeJS');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log('buffer3内容:'+buffer3.toString());

//缓冲区比较
var buffer1 = new Buffer('ABCE');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);
if (result < 0){
    console.log(buffer1 + " 在 " + buffer2 + "之前");
} else if (result == 0) {
    console.log(buffer1 + " 与 " + buffer2 + "相同");
} else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}

//拷贝缓冲区
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());


//缓冲区裁剪
var buffer1 = new Buffer('runoob');
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());
console.log("buffer1 content: " + buffer1.toString());