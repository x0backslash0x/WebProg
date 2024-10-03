// 2024-2025
// Web Programming - demo bij les 2

import * as readline from "readline-sync"

// manier 1: function keybword
function rolDobbelsteen(ogen: number, aantal: number) : number {
  let rol: number = Math.floor((Math.random() * ogen) +1) * aantal;
  console.log(rol);
  return rol;
}

let waarde1: number = rolDobbelsteen(6, 1);
let waarde2: number = rolDobbelsteen(8, 2);


// manier 2: arrow function
const roll0 = () => Math.floor((Math.random() * 6) +1);
const roll1 = (): number => Math.floor((Math.random() * 6) +1);
const roll2 = (): number => {
    return Math.floor((Math.random() * 6) +1);
};


const planets : string[] = ['Mercury', 'Venus', 'Earth', 'Mars']
const outherPlanets : string[] = ['Saturnus', 'Neptunus', 'Uranus']
//let planets : string[] = ['Mercury', 'Venus', 'Earth', 'Mars']
//planets = [];

console.log(planets[2]);
console.log(planets[planets.length - 1]);

planets[2] = 'Aarde';
planets[4] = 'Jupiter'; //index bestaat nog niet, waarde wordt toegevoegd (append)

// laat toe iteratie te doen op een array zonder gebruik van index
for(let planet of planets) {
    console.log(planet);
};

let result: string = planets.join(","); //alle array waardes worden achter elkaar geplakt in een string
let last:string = planets.pop(); //de achterste (laatse) waarde wordt er af gehaald
planets.push('MARS'); // waarde aan de achterkant invoegen
let first: string = planets.shift //de voorste (eerste) waarde wordt er af gehaald
planets.unshift('MERCURIUS'); // waarde aan de voorkant invoegen

const smallList:string[] = planets.slice(1, 3); // oorspronkelijke array blijft ongewijzigd
planets.splice(1, 2); // 2 elementen vanaf index 1 verwijderen

planets.concat(outherPlanets); // beide lijsten worden samengevoegd. Eerste array wordt dus groter

// om duplicate waardes op te sporen (kan makkelijk voorkomen in een numerieke geïndexeerde array)
let i: number = planets.indexOf('Earth');
let j: number = planets.lastIndexOf('Earth');

let bool: boolean = planets.includes('Earth');


// algemene logica voor een sorteerfunctio (ook in andere talen)
let result: string[] = planets.sort(
    (a: string, b: string) => { // a = aarde, b = mars
        // a > b --> resultaat = 1 // positief getal
        // a = b --> resultaar = 0
        // a < b --> resultaat = -1 // negatief getal

        if(a == b) {
            return 0;
        }
        else if(a < b) { // alfabetisch kleiner, ligt er na
            return -1; // we willen de waardes omdraaien
        }
        return 0;
    }
);

const nums: number[] = [1, 2, 3, 4, 11, 12, 21, 22];
console.log(nums.sort()); // array wordt niet numerieke gesorteerd maar alfanumeriek (1, 11, 2, 21, 22, ...)

let result: string[] = nums.sort(
    (a: number, b: number) => { // a = aarde, b = mars
        // a < b --> resultaat = -1 // negatief getal - als ze juist staan
        // a = b --> resultaar = 0
        // a > b --> resultaat = 1 // positief getal - als ze moeten omdraaien

        if(a == b) {
            return 0;
        } else if (a < b) {
            return -1; // we willen de waardes omdraaien
        } else if (a > b) {
            return 1;
        }
        return 0;
    }
);
