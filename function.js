/**
 * Created by apple on 2017/8/27.
 */
function say(word) {
    console.log(word);
}
function execute(someFunction,value) {
    someFunction(value);
}

execute(say,'Hello');