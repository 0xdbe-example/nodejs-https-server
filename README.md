# Sample NodeJS HTTPS Server

This application is a simple HTTPS server using TLS1.2 or 1.3.

- Create self-signed certificate (prime256v1)

```
openssl req \
  -x509 \
  -subj "/C=FR/ST=Paris/L=Paris/O=Security/OU=IT Department/CN=www.example.com" \
  -nodes \
  -days 365 \
  -newkey ec:<(openssl ecparam -name prime256v1) \
  -keyout tls/key.pem \
  -out tls/cert.pem 
```

- Run

```
node server.js
```
  
- Check

```
curl -kv https://localhost:3443
```
