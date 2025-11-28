import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';

const app = express();
const http = createServer(app);
const io = new Server(http);
import path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Client.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (mag) => {
        console.log('Message from client: ${msg}');
    }
    );

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});


// using socket.io server to send message to client every 2 seconds
setInterval(() => {
    io.emit('message', 'Hello from server');
}
, 2000);;
http.listen(3000)

