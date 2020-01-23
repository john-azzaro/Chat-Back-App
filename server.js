const io = require('socket.io')(3000);

io.on('connection', function(socket) {
  console.log('new user')
  socket.on('send-chat-message', function(message) {
    socket.broadcast.emit('chat-message', 'Hello world');
    
  });
});