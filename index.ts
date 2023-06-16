import express, { Express, Request, Response } from 'express';
//import resolve from 'path'
import debug from 'debug';
const app: Express = express();
import http from 'http';

const port: String = process.env.PORT || "8080";

app.use(
    express.static('public')
);

app.get('/status', (req: Request, res: Response) => {
    res.send('OK')
});

const server = http.createServer(app);

server.listen(port, () => debug.log(`⚡️[server]: Server is running at http://0.0.0.0:${port}`));