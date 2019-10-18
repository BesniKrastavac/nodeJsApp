// const Person = require('./person');
// const person = new Person('Deki', 31);
// person.greeting()

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if (req.url === '/') {

    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content)
    //     });

    // }
    // if (req.url === '/about') {

    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content)
    //     });

    // }
    // if (req.url === '/api/users') {
    //     const users = [{name: 'test', age: 31}];
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const extName = path.extname(filePath)
    let contentType = 'text/html';
    switch (extName) {
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.json':
            contentType = 'application/json'
            break;
        case '.png':
            contentType = 'image/png'
            break;
        case '.jpg':
            contentType = 'image/jpg'    
            break;
        case '.js':
            break;
        default:
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content, 'utf8');
                })
            } else {
                res.writeHead(500);
                res.end(`Server error  ${err.code}`);
            }
        } else {
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    })

    // console.log(req.url);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('server running on port ', PORT));