/**
 * Created by apple on 2017/8/28.
 */
var server = require('./server');
var router = require('./router');

server.start(router.route);