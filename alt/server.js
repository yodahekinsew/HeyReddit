const http = require('http');
var fs = require('fs');
var url = require('url');

const port = 3000;
http.createServer(function(request, response) {  
    console.log(request.url);
    if (request.url == "/") {
        html = fs.readFileSync("index.html", "utf8");
        response.writeHead(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    } else if (request.url == "/main.js") {
        js = fs.readFileSync("main.js", "utf8");
        response.writeHead(200, {"Content-Type": "text/js"});  
        response.write(js);  
        response.end();  
    }
}).listen(port);