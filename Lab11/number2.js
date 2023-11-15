const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, 'anxious.png'),  (error, data) => {
        res.writeHead(200, {'Content-Type': 'image/png'})
        res.end(data);
    });
}).listen(3000);