var app = require('koa')();
var server = require('http').createServer(app.callback());
var io = require('socket.io')(server);
io.on('connection', function(socket){
  socket.on('event', function(data){
      socket.emit('res', {'payload': 'this is a payload'});
  })
  socket.on('disconnect', function(){
      console.log('disconnect');
  })
});
server.listen(8124);


