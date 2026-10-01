var http = require("http");
var employeeModule = require("./employee");
console.log("Lab 03 -  NodeJs");


//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end("<h1>Welcome to lab Exercise 03</h1>");
        }

        if (req.url === '/employee') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(employeeModule.getAllEmployees()));
        }

        if (req.url === '/employee/names') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(employeeModule.getEmployeeNames()));
        }

        if (req.url === '/employee/totalsalary') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ total_salary: employeeModule.getTotalSalary() }));
        }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})