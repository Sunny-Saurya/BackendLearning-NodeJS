import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 4000 });

console.log('WebSocket server running on ws://localhost:4000');

server.on("connection", (socket) => {
    console.log("Client Connected !!");

    // receive message from client
    socket.on("message", (msg) => {
        console.log("Received From Client:", msg.toString());

        // send back to client
        socket.send(`Server received: ${msg}`);
    });

    socket.on("close", () => {
        console.log("Client Disconnected !!");
    });
});
