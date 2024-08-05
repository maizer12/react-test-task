import https from 'https';
import { IncomingMessage, ServerResponse } from 'http';

export default function handler(req: IncomingMessage, res: ServerResponse): void {
	const options = {
		hostname: 'live.devnimble.com',
		port: 443,
		path: req.url,
		method: req.method,
		headers: req.headers,
	};

	const proxy = https.request(options, proxyRes => {
		res.writeHead(proxyRes.statusCode || 500, proxyRes.headers);
		proxyRes.pipe(res, { end: true });
	});

	req.pipe(proxy, { end: true });
}
