const io = require('socket.io')(3000);

io.on('connection', function(socket) {
  console.log('new user');
  socket.emit('chat-message', 'Hello world')
});