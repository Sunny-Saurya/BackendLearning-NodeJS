import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 8000 });
console.log("WebSocket server running on localhost:8000");

server.on("connection", (ws) => {
    console.log("Client Connected !!");

    ws.on("message", (msg) => {
        console.log("Received:", msg.toString());
        ws.send(`Server received: ${msg}`);
    });

    ws.on("close", () => {
        console.log("Client disconnected !!");
    });
});
