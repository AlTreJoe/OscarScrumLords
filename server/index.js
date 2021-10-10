const { app } = require('./helper');
const http = require('http');
const server = http.createServer(app);
const PORT = 3001;



//const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);



//const cors = require('cors')
//app.use(cors()) --> appaently library has cors issus?

//for sockets
const { Server } = require('socket.io');
const io = new Server(server); //socket instance



io.on('connection', (socket) => { //listens for connectin
  console.log('a user is connected', socket.request.user, socket.request.session);


  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log(`user with id ${socket.id} joins room ${room}`);
  });

  socket.on('message', (data) => {
    //console.log('MESSAGE', message, username, room)
    console.log('the data here--', data);
    socket.to(data.room).emit('receivedMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('user chao chao');
  });
});


server.listen(PORT, () => {
  console.info(`http://127.0.0.1:${PORT}`);
});
