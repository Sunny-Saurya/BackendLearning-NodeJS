import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h2>Simple Form</h2>
            <form action="/submit" method="GET">
                <input type="text" name="username" placeholder="Enter name" />
                <br><br>
                <input type="text" name="city" placeholder="Enter city" />
                <br><br>
                <button type="submit">Submit</button>
            </form>
        `);
    }

    else if (req.url.startsWith("/submit")) {
        const q = url.parse(req.url, true).query;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h3>Form Data</h3>
            <p>Name: ${q.username}</p>
            <p>City: ${q.city}</p>
        `);
    }

});

server.listen(8000, () => {
    console.log("Server running on port 8000");
});
