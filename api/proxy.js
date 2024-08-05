import https from 'https';

export default function handler(req, res) {
  const options = {
    hostname: 'https://live.devnimble.com',
    port: 443,
    path: req.url,
    method: req.method,
    headers: req.headers
  };

  const proxy = https.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  req.pipe(proxy, { end: true });
}