
// console.log(__dirname)

// console.log(__filename)

var all = require('./add');
//回调
function callFunction(fun) {
    fun();
}
function foo(){
    console.log('hi,coco');
}
callFunction(foo);
//直接调用
callFunction(function(){
    console.log('hi,cisco');
})

all.add(2,3);
console.log(all.pi)
all.reduce(10,4)

// 事件
var events = require('events');

//事件监听
var emmits = new events.EventEmitter();

emmits.on('someEvent',function(name){
    console.log('hi,'+name);
})
//事件触发
emmits.emit('someEvent','coco');

//文件系统
var fs =require('fs');

var content=fs.readFileSync('read.txt','utf8')
console.log(content);
fs.writeFileSync('write.txt', 'writed');

//异步读取(I/O操作)

var read  = fs.readFile('read.txt','utf8',function(err, data){
    console.log('异步获取'+ data);
})
// console.log(12);