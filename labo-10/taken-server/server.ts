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

let taken: Taak[] = [];

app.get("/tasks", (req: Request, res: Response) => {
    //GET /tasks (alle taken opvragen)
    res.status(200).send(taken);
});

app.get("/task", (req: Request, res: Response) => {
    //GET /task (de eerstvolgende taak opvragen)
    //nog onduidelijk wat hier juist moet gebeuren
});

app.post("/task", (req: Request, res: Response) => {
    //GET /task (een nieuwe taak toevoegen)
    const omschrijving: any = req.query.omschrijving;
    const naam: any = req.query.naam;
    taken.push(new Taak(omschrijving, naam));
    console.log(taken);
    res.sendStatus(200);
});

app.delete("/task", (req: Request, res: Response) => {
    //GET /task (een taak verwijderen)
    const omschrijving: any = req.query.omschrijving;
    const naam: any = req.query.naam;
    //taak verwijderen
    res.sendStatus(200);
});

app.use((req: Request, res: Response) => {
    res.status(404).send("Hier is niets gevonden");
});

app.listen(port, hostname, () => {
    console.log(`Server listening on http://${hostname}:${port}`);
});
