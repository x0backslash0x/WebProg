import * as readline from "readline-sync";

//manier 1 : function keyword
function rolDobbelsteen(ogen : number, aantal : number) : number {
    let rol: number = Math.floor((Math.random() * ogen) + 1) * aantal;
    console.log(rol);
    return rol;
}

let waarde1: number = rolDobbelsteen(6, 1);
let waarde2: number = rolDobbelsteen(8, 2);

//manier 2 : arrow function
const roll0 = (ogen:number) => Math.floor(Math.random() * ogen + 1);
const roll1 = (): number => Math.floor(Math.random() * 6 + 1);
const roll2 = (): number => {
  return Math.floor(Math.random() * 6 + 1);
};

const planets: string[] = ['Mercury', 'Venus', 'Earth', 'Mars'];
const outerPlanets: string[] = ["Jupiter", "Saturnus"];
//planets = [];
console.log(planets.length);

console.log(planets[2]);
console.log(planets[planets.length - 1]);

planets[2] = "Aarde";
planets[4] = "Jupiter";

for (let planet of planets) {
    console.log(planet);
}
for (let i: number = 0; i < planets.length; i++) {
    console.log(planets[i]);
}

planets.concat(outerPlanets);

let result: string = planets.join(",");

let last: string | undefined = planets.pop();
planets.push("MARS");

let first: string | undefined = planets.shift();
planets.unshift("MERCURIUS");

planets.reverse();

const smallList: string[] = planets.slice(1, 3);
planets.splice(1, 2);


let i: number = planets.indexOf("Earth");

let j: number = planets.lastIndexOf("Earth");

let bool: boolean = planets.includes("Earth");