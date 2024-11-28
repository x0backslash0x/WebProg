//server.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 9 demo server routes met Express

// {} wordt gebruikt om types te importeren
import express, {Express, Request, Response} from "express";
import { stringify } from "querystring";

// server klaar maken
const app: Express = express();
app.use(express.json());

const hostname: string = "127.0.0.1";
const port: number = 3000;

// wordt uitgevoerd als de browser naar de server gaat
app.get("/", ((req: Request, res: Response) => {
    res.status(200).send("Hello world!");
}));

// query parameter opvangen
app.get("/hello", ((req: Request, res: Response) => {
    //localhost:3000/hello?name=patrick
    let query: any = req.query.name; // kan meerdere types zijn
    // res.set("Content-Type", "text/html"); // headers meegeven
    res.type("text/html"); // verkorte versie van bovenstaande
    res.status(200).send("<b>Hello " + query + "</b>");
}));

// query parameters opvangen
app.get("/hello/:name", ((req: Request, res: Response) => {
    //localhost:3000/hello?name=patrick
    let query: any = req.query.name; // kan meerdere types zijn
    res.status(200).send("<b>Hello " + query + "</b>");
}));

// post requests opvangen (kan niet vanuit een browser getest worden)
app.post("/hello", ((req: Request, res: Response) => {
    let data = req.body;
    // res.status200); // geen correct antwoord
    //res.status(200).end();
    res.sendStatus(200); // verkote vorm van bovenstaande
}));

// DELETE HTTP methode behandelen - er wordt geen body meegegeven bij DELETE
app.delete("/dezmo/:id", ((req: Request, res: Response) => {
    let id: number = parseInt(req.params.id);
    // iets doen met id
    res.status(200).end();
}));

class Planet {
    name:string = "Earth";
    radius: number = 6371;

    toJSON() { // zelf bepalen hoe de json data wordt terug gegeven
        return {
            "planeetnaam": this.name,
            "planeetradius": this.radius
        }
    }
}

app.get("/planet", ((req: Request, res: Response) => {
    let planet: Planet = new Planet();
    /*res.type("application/json");
    res.status(200).json(planet); */
    res.status(200).send(planet);
    // res.status(200).send(JSON.stringify(planet)) // oude manier van werken
}));

app.get("/allplanets", ((req: Request, res: Response) => {
    let arr:Planet[] = [new Planet(), new Planet()];
    res.status(200).json(arr);
}));

// async als callback gebruiken
app.get("/planetsapi", async (req: Request, res: Response) => {
    let response = await fetch("https://theorie-webprogramming.surge.sh/planets.json");
    let data = await response.json();
    res.status(200).send(data);
});

// catch-all functie - moet altijd als laatste staan!
app.use(((req: Request, res: Response) => {
    res.status(404).send("Not found!");
}));

// start server
app.listen(port, hostname, () => {
    console.log(`server listening on http://${hostname}:${port}/`);
});
