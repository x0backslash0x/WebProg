import * as readline from "readline-sync";

let numberOfPersons: number = readline.questionInt("Geef het aantal personen in :");

for (let i: number = 0; i < numberOfPersons; i++) {
    let name: string = readline.question(`Geef de naam in van persoon ${i + 1} :`);
    let weight: number = readline.questionInt(`Geef het gewicht van ${name} in (in kg) :`);
    let height: number = readline.questionFloat(`Geef de lengte van ${name} in (in m) :`);

    let bmi: number = Math.round((weight / (height * height)) * 100) / 100;

    console.log(`${name} heeft een BMI van ${bmi}!`);
}