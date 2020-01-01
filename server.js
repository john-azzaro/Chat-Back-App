const io = require('socket.io')(3000);

io.on('connection', function(socket) {
  socket.on('send-chat-message', function(message) {
    socket.broadcast.emit('chat-message', message);
  });
});