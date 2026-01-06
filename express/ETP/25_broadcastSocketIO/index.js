import { WebSocketServer, WebSocket } from "ws";

const server = new WebSocketServer({ port: 8000 });
console.log("WebSocket server running on localhost:8000");

server.on("connection", (ws) => {
    console.log("Client Connected !!");

    ws.on("message", (msg) => {
        console.log("Message Received:", msg.toString());

        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`Broadcast: ${msg}`);
            }
        });
    });

    ws.on("close", () => {
        console.log("Client Disconnected !!");
    });
});
