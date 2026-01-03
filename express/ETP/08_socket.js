import { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 4000 });

server.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', (message) => {
        console.log('Received:', message.toString());
        socket.send('Hello from server');
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });
});
