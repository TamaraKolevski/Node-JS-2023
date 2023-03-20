const http = require('http');

const server = http.createServer((req, res) => {
    console.log('test');
    console.log(req.url);
//     if(req.url == '/wiki/Main_Page/') {
//         res.end('Ovae e wikipedia main page');
//     } else if (req.url == '/about') {
//         res.end('<html><head><title>About</title></head><body><h1>Hallo World</h1></body></html>')
//     } else {
//         res.end('Zdravo od serverot');
//     }

});



module.export = server;
