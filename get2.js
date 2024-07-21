const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer(function(req, res) {
    const path = url.parse(req.url).pathname;
    const query = url.parse(req.url).query; 
    const name = query["name"];
    const email = query["email"];
    
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Response</title>
            <style>
                .container {
                    border: 2px solid black;
                    padding: 20px;
                    width: 300px; 
                    margin: 0 auto; 
                    background-color: aqua; 
                }
            </style>
        </head>
        <body>
            <div class="container">
                <p>Hello ${name}, your email id is ${email}</p>
                <p> you have signed in successfully</p>
            </div>
        </body>
        </html>
    `);
    res.end();
}).listen(1000);
