/* recepten.ts

   2024-2025 Patrick Lanove
   BA Electronica-ICT/Cybersecurity
   OLOD Web programming

   labo 3 oefening 1
*/

interface Ingredient {
    naam: string;
    hoeveelheid: string;
    prijs: number;
}

interface Recepten {
    naam: string;
    beschrijving: string;
    personen: number;
    ingredienten: Ingredient[];
}

let ingredient1: Ingredient = {
    naam: 'lasagnevellen',
    hoeveelheid: '1 pak',
    prijs: 3
}

let ingredient2: Ingredient = {
    naam: 'gehakt',
    hoeveelheid: '500 gr',
    prijs: 4
}

let ingredient3: Ingredient = {
    naam: 'look',
    hoeveelheid: '1 teentje',
    prijs: 3
}

let lasagne: Recepten = {
    naam: 'Lasagne',
    beschrijving: 'Lekker lasagne',
    personen: 4,
    ingredienten: [ingredient1, ingredient2, ingredient3]
}

console.log('Recept: ' + lasagne.naam);
console.log('Beschrijvng: ' + lasagne.beschrijving);
console.log('Personen: ' + lasagne.personen);
console.log('Ingredienten:');
let totaleprijs: number = 0;
for (let ingredient of lasagne.ingredienten) {
    console.log(`- ${ingredient.naam} ${ingredient.hoeveelheid}}`)
    totaleprijs += ingredient.prijs;
}
//console.log('Totale kostprijs: ' + totaleprijs);
// indien je met classes/objecten werk is een bijkomende parameter nodig voor de reduce() method
// beginwaarde/type meegeven aan accumulator omdat die anders het type van het object (waar curr naar verwijst) overneemt
console.log('Totale kostprijs: ' + lasagne.ingredienten.reduce((acc: number, curr: Ingredient) => {return acc + curr.prijs}, 0));