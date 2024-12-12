/* server.ts
 *
 * 2024-2025 Patrick Lanove
 * BA Electronica-ICT/Cybersecurity
 * OLOD Web programming
 * 
 * labo 10 oefening 2 taken server
 */

import express, { Express, Request, Response } from 'express';

interface intTaak {
    omschrijving: string;
    naam: string;
}

class Taak implements intTaak {
    omschrijving: string;
    naam: string;

    constructor(omschrijving: string, naam: string) {
        this.omschrijving = omschrijving;
        this.naam = naam;
    }
}

const app: Express = express();
app.use(express.json());

const hostname: string = "127.0.0.1";
const port: number = 3000;

app.use((req: Request, res: Response) => {
    res.status(404).send("Hier is niets gevonden");
});

app.listen(port, hostname, () => {
    console.log(`Server listening on http://${hostname}:${port}`);
});
