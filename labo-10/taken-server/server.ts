/* server.ts
 *
 * 2024-2025 Patrick Lanove
 * BA Electronica-ICT/Cybersecurity
 * OLOD Web programming
 * 
 * labo 10 oefening 2 taken server
 */

import express, { Express, Request, Response } from 'express';
import mysql, { Connection, ConnectionOptions } from "mysql2/promise";
import { MYSQL_PWD } from './env';

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

const access: ConnectionOptions = {
    host: "localhost",
    user: "root",
    password: MYSQL_PWD,
    database: "taken",
    connectionLimit: 1,
}

const app: Express = express();
app.use(express.json());

const hostname: string = "127.0.0.1";
const port: number = 3000;
const table: string = "TAKEN";

app.get("/tasks", async (req: Request, res: Response) => {
    //GET /tasks (alle taken opvragen)
    try {
        let json: intTaak[] = [];
        const query: string = "SELECT * FROM " + table;
        const conn: Connection = await mysql.createConnection(access);
        const [result] = await conn.query(query);
        res.status(200).send(result);
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
});

app.get("/task", (req: Request, res: Response) => {
    //GET /task (de eerstvolgende taak opvragen)
    //nog onduidelijk wat hier juist moet gebeuren
});

app.post("/task", async (req: Request, res: Response) => {
    //GET /task (een nieuwe taak toevoegen)
    try {
        let json: intTaak = req.body;
        console.log(json);
        const omschrijving: any = json.omschrijving
        const naam: any = json.naam;

        const conn: Connection = await mysql.createConnection(access);
        const [result] = await conn.query("INSERT INTO taken(omschrijving, naam) VALUES(?, ?)", [omschrijving, naam]);
        res.status(200).send("Data is aangekomen");
    } catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
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
