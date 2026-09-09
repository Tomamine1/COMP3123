/* Purpose
We'll use Node to Create a server and the nlisten on that server for any incoming request. then return a response.

*/
var http = require("http")

http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html"
    })
    response.end("The server is now runnung successfully and listening")
}).listen(8088)