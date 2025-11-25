import http from 'http'

const server = http.createServer((req, res) => {
    if(req.url === '/login'){
        res.write("Welcome to Login Page");
        res.end();
    }
    else if(req.url === '/logout'){
        res.write("Welcome to logout Page");
        res.end();
    }
    else if(req.url === '/about'){
        res.write("Welcome to about Page");
        res.end();
    }
    else if(req.url === '/resume'){
        res.write("Welcome to resume Page");
        res.end();
    }
    else{
        res.end("404 Page Not Found!")
    }
})

server.listen(3000);