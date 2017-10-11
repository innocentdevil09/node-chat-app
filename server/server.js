const path = require('path');

const publicPath = path.join(__dirname, '../public');
// console.log(publicPath);
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
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
