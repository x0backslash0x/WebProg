//reizen_api.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 9 oefening 3 reiskosten server

import express, {Express, Request, Response} from "express";

const app: Express = express();
app.use(express.json());

app.get("/reizen", (req: Request, res: Response) => {
    // deze route geeft alle reizen uit de database in JSON formaat terug
});

app.get("/reis:reisid", (req: Request, res: Response) => {
    //deze route vraagt één reis op adhv de request parameter ‘reisid’.
});

app.get("/reis/:reisid/kosten", (req: Request, res: Response) => {
    // deze route berekent het totaal aan kosten voor de reis met de reisid.
});

app.post("/reis", (req: Request, res: Response) => {
    // deze route maakt één reis aan in de database.
});

app.post("reis/:reisid/kost", (req: Request, res: Response) => {
    //deze route maakt één kost aan voor een reis met de reisid.
});