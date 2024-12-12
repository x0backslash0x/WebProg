//import mysql, { ConnectionOptions, Connection } from "mysql2"; // indien je met callbacks werkt
import mysql, { Connection, ConnectionOptions } from "mysql2/promise"; //indien je met async/await werkt
import { run } from "node:test";

const access: ConnectionOptions = {
    user: "root",
    password: "rootapjdv",
    database: "planetdb",
    connectionLimit: 1,
};
//callback
/*
const conn: Connection = mysql.createConnection(access);

conn.query("SELECT * FROM planet", (error, results) => {
    if (error) throw error;
    console.log(results);
});
*/

//promise
async function runMe(planetName: string) {
    try {
        const conn: Connection = await mysql.createConnection(access);

        //geeft een tuple terug van results en fields. fields wordt niet altijd gebruikt
        //const [results] =  await connection.query("SELECT * FROM planet where name = " + planetName); // kwetsbaar voor SQL injection
        //const [results] =  await connection.query("SELECT * FROM planet where name = ?", [planetName]); // maakt gebruik van een prepared statement
        const [results] = await conn.query("SELECT * FROM planet WHERE name = ? OR name = ?", 
            [planetName, "Mars"]); // waardes zijn positioneel
        console.log(results);

        // gaat een fout geven indien er met auto-increment wordt gewerkt. Het eerste veld kan dan niet manueel toegewezen worden.
        //const [insertResult] = await conn.query("INSERT INTO planet VALUES(?, ?)", [2, "Mars"]);
    } catch (error) {
        console.log(error);
    }
}

runMe("Earth");