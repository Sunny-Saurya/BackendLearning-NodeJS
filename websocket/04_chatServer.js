import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const http = createServer(app);
const io = new Server(http);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '04_chatClient.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chatMessage', (msg) => {
        console.log("Messageee: ", msg);
        io.emit('chatMessage', msg);
    });    
    socket.on("disconnect", () => {
        console.log('user disconnected');
    });
});

http.listen(3000, () => {
    console.log("Server running on port 3000");
});
