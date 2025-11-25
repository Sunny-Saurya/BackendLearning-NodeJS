const http = require('http')
const server = http.createServer((req, res) => {
    
    if(req.url == '/login'){
        res.end("welocme to login page")
        const logmsg = `User logged in at ${now.Date().toLocalString()}`
        fs.appendFile('log.txt', logmsg, (err) => {
            if(err) return console.log("Error in creating the login for user");
            else{
                return console.log("Successfully Created !!")
            }
            
        })
    }
    if(req.url == '/home'){ 
        res.writeHead(200, {'content-type': 'text/html'})
        console.log("This is home page");   
        res.write("<h1 style='color:red'>This is home page</h1>")
        res.end();
    }
    else if(req.url == '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        console.log("This is about page");   
        res.write("<h1 style='color:red'>This is about page</h1>")
        res.end();
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        console.log("The page you are looking for doesn't exist.");   
        res.write("<h1 style='color:red'>Page Not Found</h1>")
        res.end();
    }
})

server.listen(3000, () =>{
    console.log("The server is listening at port number 3000");
    
})