//server.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 9 oefening 1 Hello Express


import express, {Express, Request, Response} from "express";

const app: Express = express();
const hostname: string = "127.0.0.1";
const port: number = 3000;

app.get("/", ((req: Request, res: Response) => {
    res.status(200).send(`
        <html>
            <head><title>Hello Express oefening</title></head>
            <body><p>Een basis response van de header op de standaard route '/'</p></body>
        </html>
        `);
}));

app.use((req: Request, res: Response) => {
    res.status(404).send("Not found!");
});

app.listen(port, hostname, () => {
    console.log(`server listening on http://${hostname}:${port}/`);
});