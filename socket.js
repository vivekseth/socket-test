var net = require('net');
var server = net.createServer(function(c) { //'connection' listener
  console.log('client connected');
  c.on('end', function() {
    console.log('client disconnected');
  });
  c.on('data', function(data) {
  	console.log(data);
  	c.write('ACK\n');
  })
  c.write('hello\r\n');
});
server.listen(8124, function() { //'listening' listener
  console.log('server bound');
});