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
    res.sendFile(path.join(__dirname, '03_broadcastNotification.html'));
});

let client = 0;

io.on('connection', (socket) => {
    client++;
    console.log('a user connected. Total clients: ' + client);
    // for notification
    socket.broadcast.emit("broadcast", "New client connected. Total clients: " + client);

    // for all clients including the newly connected one
    io.emit("broadcast", "New client connected. Total clients: " + client);

    socket.on("disconnect", () => {
        client--;
        console.log('user disconnected. Total clients: ' + client);
        io.emit("broadcast", "Client disconnected. Total clients: " + client);
    });
});

http.listen(3000, () => {
    console.log("Server running on port 3000");
});
