const fs = require('fs');
const https = require('https');
    
const httpsConfig = {
  key: fs.readFileSync('./tls/key.pem'),
  cert: fs.readFileSync('./tls/cert.pem'),
  minVersion: 'TLSv1.2',
  maxVersion: 'TLSv1.3',
  ciphers:"ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256",
  ecdhCurve: 'prime256v1',
  honorCipherOrder: true
};

const server = https.createServer(
  httpsConfig, 
  function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
});

server.listen(3443,'127.0.0.1');
