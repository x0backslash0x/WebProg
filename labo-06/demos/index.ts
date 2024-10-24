//import { multiply } from "./mathfunctions";
// meerdere functies importeren uit een module kan ook
import {multiply, divide } from "./mathfunctions";

console.log(multiply(2, 3));
console.log(divide(4, 2));

//import {add} from "./mycoolmathfunctions";
// omdat dat het een default function betreft kan je de naam zelf opgeven bij import
import myCoolAddionFunction from "./mycoolmathfunctions";

console.log(myCoolAddionFunction(2, 3));

// ook classes kan je importeren
//import {Planet} from "./planet";
//let earth: Planet = new Planet("Aarde");

// de ongeschreven regel zegt ook dat het bestand waar de klasse in zit de naam van de klasse heeft
// in het geval van default gebruik je geen accolades
import Planeet from "./planet";

let earth: Planeet = new Planeet("Aarde");
console.log(Planeet.name);