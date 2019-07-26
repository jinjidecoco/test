var fs =require('fs');
//阻塞代码实例
var data =fs.readFileSync('read.txt');
console.log(data.toString());

//非阻塞代码实例
fs.readFile('read.txt',function(err,data){
  if(err)  return console.error(err);
  console.log(data.toString());
})

//事件处理
var events =require('events');
var eventEmitter =new events.EventEmitter();
//预先定义
const handleConnect = function connected() {
  console.log('链接成功')
}
eventEmitter.on('connect',handleConnect);

eventEmitter.emit('connect');

var buf =new Buffer(10);
console.log(buf);