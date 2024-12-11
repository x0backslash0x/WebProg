//server.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 9 oefening 3 reiskosten server

import express, {Express, Request, Response} from "express";

let counter: number = 0;

class Reis {
    id: number;
    bestemming: string;
    jaar: number;
    kosten: Kost[];

    constructor(bestemming: string, jaar: number) {
        counter += 1;
        this.id = counter;
        this.bestemming = bestemming;
        this.jaar = jaar;
        this.kosten = [];
    }

    toJSON() {
        return {
            "id": this.id,
            "bestemming": this.bestemming,
            "jaar": this.jaar,
            "kosten": this.kosten
        }
    }
}

class Kost {
    uitgave: string;
    prijs: number;

    constructor(uitgave: string, prijs: number)  {
        this.uitgave = uitgave;
        this.prijs = prijs;
    }

    toJSON() {
        return {
            "uitgave": this.uitgave,
            "prijs": this.prijs
        }
    }
}

let reizen: Reis[] = [];
/* reizen.push(new Reis("London", 2024));
reizen.push(new Reis("Lisabon", 2022));
console.log(reizen);

let kostLondon: Kost = new Kost("treintickets", 100);
console.log(kostLondon);
const idLondon: number = 1;
let reisLondon: Reis | undefined = reizen.find((reis: Reis) => reis.id == idLondon);
reisLondon?.kosten.push(kostLondon);
console.log(reisLondon) */

const app: Express = express();
app.use(express.json());
const hostname: string = "127.0.0.1";
const port: number = 3000;

// localhost:port/reizen
app.get("/reizen", (req: Request, res: Response) => {
    // deze route geeft alle reizen uit de database in JSON formaat terug
    res.status(200).send(reizen);
});

// hostname:port/reis/1
app.get("/reis/:reisid", (req: Request, res: Response) => {
    //deze route vraagt één reis op adhv de request parameter ‘reisid’.
    let id: number = Number(req.params.reisid);
    let reis: Reis | undefined = reizen.find((reis: Reis) => reis.id == id);
    console.log(reis);
    res.status(200).send(reis);
});

// localhost:port/reis
app.post("/reis", (req: Request, res: Response) => {
    // deze route maakt één reis aan in de database.
    // format: {"bestemming": "London", "jaar": 2024}
    const reis: Reis = new Reis(req.body.bestemming, req.body.jaar)
    reizen.push(reis);
    console.log(reizen);
    res.sendStatus(200);
});

app.use((req: Request, res: Response) => {
    res.status(404).send("404 niets gevonden");
});

app.listen(port, hostname, () => {
    console.log(`Server listening on http://${hostname}:${port}/`);
});
