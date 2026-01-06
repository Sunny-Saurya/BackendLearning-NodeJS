import http from 'http';

const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
        res.end("<h2>Welcome to Home Page</h2>");
    } 
    else if (req.url === "/about") {
        res.end("<h2>Welcome to About Page</h2>");
    } 
    else if (req.url === "/contact") {
        res.end("<h2>Welcome to Contact Page</h2>");
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h2>404 Page Not Found</h2>");
    }
});

server.listen(8000, () => {
    console.log("Server running on port 8000");
});
