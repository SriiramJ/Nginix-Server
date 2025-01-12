const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 3000;

const server = http.createServer();

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
    
})