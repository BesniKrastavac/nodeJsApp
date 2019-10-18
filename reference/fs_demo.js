const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {if (err) throw err; console.log('directory created!')});
// const append = () => fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " I love node.js", err => {if (err) throw err; console.log('file created!')});
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello World", err => {if (err) throw err; console.log('file created!')}, append);

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {if (err) throw err; console.log(data)});
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello1.txt'), err => {if (err) throw err; console.log('file renamed')});
