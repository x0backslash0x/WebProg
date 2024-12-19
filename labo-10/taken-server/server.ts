/* server.ts
 *
 * 2024-2025 Patrick Lanove
 * BA Electronica-ICT/Cybersecurity
 * OLOD Web programming
 * 
 * labo 10 oefening 2 taken server
 */

import express, { Express, Request, Response } from 'express';
import { router } from './router';

const app: Express = express();
app.use(express.json());
app.use(router);

const hostname: string = "127.0.0.1";
const port: number = 3000;
const table: string = "TAKEN";

// catch-all route
app.use((req: Request, res: Response) => {
    res.status(404).send("Hier is niets gevonden");
});

app.listen(port, hostname, () => {
    console.log(`Server listening on http://${hostname}:${port}`);
});
