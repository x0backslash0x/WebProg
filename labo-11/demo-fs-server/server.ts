import express, {Express, Request, Response} from 'express';
import mysql, { ConnectionOptions, Connection } from 'mysql2';

const app: Express = express();
app.use(express.json());

const hostname: string = "127.0.0.1";
const port: number = 3000;

const access: ConnectionOptions = {
    host: "localhost",
    user: "root",
    password: "hierjourwachtwoord",
    database: "demo"
}

interface MyFormData {
    name: string;
    email: string;
}

app.post("/sendData", async (req: Request, res: Response) => {
    let json: MyFormData = req.body;
    console.log(json);

    try {
        const conn: Connection = await mysql.createConnection(access);
        const [result] = await conn.query("INSERT INTO USERS(name, email) VALUES(?, ?)"),
            ([json.name, json.email]);    
        res.status(200).send("Data is aangekomen");
    } catch (error) {
        res.status(500).send("Er is een fout opgetreden");
    }

});

app.get("/users", async (req: Request, res: Response) => {
    try {
        const conn: Connection = await mysql.createConnection(access);
        const [result] = await conn.query("SELECT * FROM users"),
            ([json.name, json.email]);    
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send("Er is een fout opgetreden");
    }
});

app.listen(port, hostname, () => {
    console.log(`Server listening on http://${hostname}:${port}`);
});