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
import { router } from './router';

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
app.use("/task", router);

const hostname: string = "127.0.0.1";
const port: number = 3000;
const table: string = "TAKEN";

// GET localhost:3000/tasks (alle taken opvragen)
// ik weet nog niet hoe deze in de router mee te nemen omdat het over een ander pad gaat
app.get("/tasks", async (req: Request, res: Response) => {
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

// catch-all route
app.use((req: Request, res: Response) => {
    res.status(404).send("Hier is niets gevonden");
});

app.listen(port, hostname, () => {
    console.log(`Server listening on http://${hostname}:${port}`);
});
