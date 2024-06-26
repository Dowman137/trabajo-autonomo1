import express from 'express'
import http from 'http'
import {Server as SocketServer} from 'socket.io'

const app = express()
const server = http.createServer(app)
const io =  new SocketServer(server)

io.on('connection', socket => {
    console.log(socket.id);

    socket.on('actualizarTransaccion', (transaccion) => {
        io.emit('actualizarTransaccion', transaccion);
    });
});

server.listen(4000)
console.log("server on port", 4000)