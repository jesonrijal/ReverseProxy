const http = require('http');
const httpProxy = require('http-proxy'),
    

//
// Create the HTTPS proxy server in front of a HTTP server
//
proxy = httpProxy.createServer({
  target: {
    host: 'localhost',
    port: 5050
  },
  ssl: {
    cert: fs.readFileSync(`C:\\Users\lukur\Desktop\javascript\ReverseProxy-master\ReverseProxy-master\private.key.txt`),
    key: fs.readFileSync(`C:\\Users\lukur\Desktop\javascript\ReverseProxy-master\ReverseProxy-master\public.key.txt`)
  }
});

proxy.listen(443);

proxy.on('error', function (err, req, res) {
  console.log("You got an error: " + err);
});
