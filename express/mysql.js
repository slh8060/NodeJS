/**
 * Created by apple on 2017/8/29.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'RUNOOB'
});
connection.connect();

//查询数据
var sql = 'select * from runoob_tbl';

//插入数据
var addSql = 'insert into runoob_tbl(runoob_id,runoob_title,runoob_author,submission_date) values (4,?,?,?)';
var addSqlParams = ['sss','sanming','2012-03-12'];

//更新数据
var modsql = 'update runoob_tbl set runoob_title = ?, runoob_author = ? where runoob_id = ?';
var modSqlParams = ['Java','slh','4'];

//删除数据

var delSql = 'delete from runoob_tbl where runoob_id = 4';
connection.query(delSql,function (err,result) {
    if (err){
        console.log('SELECT ERROR -',err.message);
        return;
    }

    console.log(result);
});

connection.end();