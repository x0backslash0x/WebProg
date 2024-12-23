/* server.ts
 *
 * 2024-2025 Patrick Lanove
 * BA Electronica-ICT/Cybersecurity
 * OLOD Web programming
 * 
 * labo 10 oefening 3 taken server met prioriteit
 * deze oefening bouwt verder op taken server (1002)
**/

import express, { Router, Request, Response } from 'express';
import mysql, { Connection, ConnectionOptions, RowDataPacket } from "mysql2/promise";
import { MYSQL_PWD } from './env';
import { Taak } from "./taak";

const access: ConnectionOptions = {
    host: "localhost",
    user: "root",
    password: MYSQL_PWD,
    database: "taken",
    connectionLimit: 1,
}

export const router: Router = express.Router();
const table: string = "TAKEN";

router.route("/task")
    // GET localhost:3000/task (de eerstvolgende taak opvragen)
    .get(async(req: Request, res: Response) => {
        try {
            let json: Taak[] = [];
            const query: string = "SELECT * FROM " + table +  " WHERE prioriteit=1";
            const conn: Connection = await mysql.createConnection(access);
            const [result] = await conn.query(query);
            res.status(200).send(result);
        } catch (error) {
            res.sendStatus(500);
            console.log(error);
        }
    })

    //POST localhost:3000/task:<json> (een nieuwe taak toevoegen)
    .post(async (req: Request, res: Response) => {
        try {
            let json: Taak = req.body; // {"omschrijving": "<omschrijving>", "naam": "<naam>", "prioriteit": <prioriteit>}
            const omschrijving: any = json.omschrijving
            const naam: any = json.naam;
            const prioriteit: any = json.prioriteit;
            const preparedStatement: string = `INSERT INTO ${table}(omschrijving, naam, prioriteit) VALUES(?, ?, ?)`;

            const conn: Connection = await mysql.createConnection(access);
            const [result] = await conn.query(preparedStatement, [omschrijving, naam, prioriteit]);
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

router.route("/tasks")
    // GET localhost:3000/tasks (alle taken opvragen)
    .get(async (req: Request, res: Response) => {
        try {
            let json: Taak[] = [];
            const query: string = "SELECT * FROM " + table + " ORDER BY prioriteit DESC";
            const conn: Connection = await mysql.createConnection(access);
            const [result] = await conn.query(query);
            res.status(200).send(result);
        } catch (error) {
            res.sendStatus(500);
            console.log(error);
        }
    });

router.route("/task-urgent")
    //POST localhost:3000/task-urgent:<json> (een nieuwe taak toevoegen met prioriteit 1)
    .post(async (req: Request, res: Response) => {
        try {
            // prioriteit van huidige taken verlagen met 1
            let taken: Taak[] = [];
            const query_select: string = "SELECT * FROM " + table;
            const conn: Connection = await mysql.createConnection(access);
            const [result1] = await conn.query(query_select);
            const prioriteiten = (result1 as RowDataPacket);
            for (let index in prioriteiten) {
                let prioriteit: number = prioriteiten[index].prioriteit;
                let naam: string = prioriteiten[index].naam;
                await conn.query(`UPDATE ${table} SET prioriteit = ${prioriteit+1} WHERE naam = "${naam}"`);
            }
            res.sendStatus(200);
        } catch (error) {
            res.sendStatus(500);
            console.log(error);
        }
    })