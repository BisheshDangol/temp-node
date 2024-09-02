const http = require('http');

const server = http.createServer((res, req) => {
    req.write('Welcome')
    req.end()
})

server.listen(5550)