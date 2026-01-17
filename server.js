const http = require('http'); 

const server = http.createServer((req, res) => { 
// 1. Log the URL the user asked for 
    console.log('Request received for:', req.url); 

    // 2. Decide what to send back 
    if (req.url === '/') { 
        res.writeHead(200, { 'Content-Type': 'text/plain' }); 
        res.end('Welcome to the Home Page!'); 
    } else if (req.url === '/api') { 
        res.writeHead(200, { 'Content-Type': 'application/json' }); 
        res.end(JSON.stringify({ message: "This is your first API response!" })); 
    } else { 
        res.writeHead(404); 
        res.end('Page not found'); 
    } 
});

const PORT = 3000; 
server.listen(PORT, () => { 
    console.log(`Server is running on http://localhost:${PORT}`); 
}); 