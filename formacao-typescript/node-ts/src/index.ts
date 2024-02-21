//index.ts dentro da pasta src

import express, { Request, Response, request } from 'express';
import { router } from './routes';

const server = express();

server.use(express.json());
server.use(router)

/* Declarando minhas rotas */
server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({ message: 'Diobank API' });
})

server.listen(5000, () => {console.log('Server on port 5000')});