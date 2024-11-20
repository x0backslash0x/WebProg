//demo-json.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
//  Labo 4 demo werken met json

/// ### JSON beschrijven via interfaces ###
/*
   Door middel van interfaces kun je aparte datatypes beschrijven om met de json data te gaan werken.
   De toewijzing van de const en uitvoer van forEach method met arrow function in dit gedeelde lukt evengoed zonder gebruik te maken van interfaces.
   Echter in dat geval zijn de nodige datatypes op maat niet beschreven. Bijgevolg kunnen deze datatypes niet worden toegewezen.
*/

interface Planet {
    name: string;
    moons: Moon[];
}
 
interface Moon {
    name: string;
}

const planets: Planet[] = [
    {
        name: "Venus",
        moons: []
    },
    {
        name: "Earth",
        moons: [{name : "Moon"}]
    },
    {
        name: "Mars",
        moons: [{name: "Phobos"}, {name: "Deimos"}]
    }
];

console.log("inhoud van 'planets':");
planets.forEach((planet: Planet) => console.log(planet));
// planets.forEach((planet) => console.log(planet)); // indien er geen interfaces worden gebruikt


/// ### JSON importeren uit een bestand ###
import planets2 from "./planets.json";
console.log(`\ninhoud van 'planets2':`);
planets2.forEach((planet: Planet) => console.log(planet));


/// ### Fetch met JSON - GET ###
async function readPlanets(): Promise<void> {
    //const response: Response = await fetch("http://localhost:3000/planets");
    const response: Response = await fetch("https://theorie-webprogramming.surge.sh/planets.json");
    const planets: Planet[] = await response.json();
    console.log(planets);
}
console.log(`\nresultaat van de Fetch:`);
readPlanets();


/// ### Fetch met JSON - POST ###
// Content-Type headers toevoegen & gebruikt stringify method
// nog niet werkbaar zonder localhost implementatie
/* async function sendJSON(planets: Planet[]) {
    const response: Response = await fetch("http://localhost:3000/planets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(planets)
    });

    const text: string = await response.text();
    console.log(text);
} */