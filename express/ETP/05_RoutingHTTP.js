import http from 'http'
const id = 2;
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Welcome to Home Page");
        res.end();
    }
    else if(req.url === '/about'){
        res.write("Welcome to About Page");
        res.end();
    }
    else if(req.url === '/blog'){
        res.write("Welcome to Blog page");
        res.end();
    }
    else if(req.url === `/blog/${id}`){
        res.end(`This is blog ${id}`);
    }
    else{   
        res.end("404 Not Found :((")
    }
})

server.listen(5000, () => {
    console.log('Server is running on port 5000');  
})