/**
 * Created by apple on 2017/8/28.
 */

process.on('exit',function (code) {
   setTimeout(function () {
      console.log('该代码不会执行')
   },0);
    console.log('退出码为:', code);
});

console.log("程序执行结束");

process.stdout.write('Hello World!\n');
process.argv.forEach(function (val,index,array) {
    console.log(index+':'+val);
});

console.log('path:'+process.execPath);
console.log(process.platform);