const http = require('http')
const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write("<h3 style=color:red >Hey There !! Hello from Write !!<h3>")
    res.write("<p style=color:purple>This is semmester 4 - Adcance web development<p>")
    res.end()
    console.log("The user has a request");
    

})

server.listen(3000, () =>{
    console.log("The server is listening at port number 3000");
    
})