const path = require('path');

const publicPath = path.join(__dirname, '../public');

const socketIO = require('socket.io');
const http = require('http');
const express = require('express');
const app = express();

var server = http.createServer(app);
app.use(express.static(publicPath));

var io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New connection added');

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });
});
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
