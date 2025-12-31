import http from 'http'
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log("Server Created Successfully !!");
    res.write("Hello");
    res.end("Server Created Successfully !!");
})

server.listen(5000, () => {
    console.log('Server is running on port 5000');
    
})