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

/* let reizen: Reis[] = [];
reizen.push(new Reis("London", 2024));
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

app.use((req: Request, res: Response) => {
    res.status(404).send("404 niets gevonden");
});

app.listen(port, hostname, () => {
    console.log(`Server listening on http://${hostname}:${port}/`);
});
