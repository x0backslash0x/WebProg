/* server.ts
 *
 * 2024-2025 Patrick Lanove
 * BA Electronica-ICT/Cybersecurity
 * OLOD Web programming
 * 
 * labo 10 oefening 2 taken server
**/

import express, { Router, Request, Response } from 'express';
import mysql, { Connection, ConnectionOptions } from "mysql2/promise";
import { MYSQL_PWD } from './env';

interface intTaak {
    omschrijving: string;
    naam: string;
}

const access: ConnectionOptions = {
    host: "localhost",
    user: "root",
    password: MYSQL_PWD,
    database: "taken",
    connectionLimit: 1,
}

export const router: Router = express.Router();
const table: string = "TAKEN";

router.route("/")
    // GET localhost:3000/task
    .get((req: Request, res: Response) => {
        //GET /task (de eerstvolgende taak opvragen)
        //nog onduidelijk wat hier juist moet gebeuren
    })

    //POST localhost:3000/task:<json> (een nieuwe taak toevoegen)
    .post(async (req: Request, res: Response) => {
        try {
            let json: intTaak = req.body; // {"omschrijving": "<omschrijving>", "naam": "<naam>"}
            const omschrijving: any = json.omschrijving
            const naam: any = json.naam;
            const preparedStatement: string = `INSERT INTO ${table}(omschrijving, naam) VALUES(?, ?)`;

            const conn: Connection = await mysql.createConnection(access);
            const [result] = await conn.query(preparedStatement, [omschrijving, naam]);
            res.status(200).send("Data is aangekomen");
            console.log(preparedStatement);
        } catch (error) {
            res.sendStatus(500);
            console.log(error);
        }
    })

    // DELETE localhost:3000/task?omschrijving=<omschrijving>&naam=<naam> (een taak verwijderen)
    .delete(async (req: Request, res: Response) => {
        try {
            const omschrijving: any = req.query.omschrijving;
            const naam: any = req.query.naam;
            const query: string = `DELETE FROM ${table} WHERE omschrijving='${omschrijving}' AND naam='${naam}'`;

            const conn: Connection = await mysql.createConnection(access);
            const [result] = await conn.query(query);
            res.sendStatus(200);
            console.log(query);
        } catch (error) {
            res.sendStatus(500);
            console.log(error);
        }
    });
