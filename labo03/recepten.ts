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

let recept: Recepten = {
    naam: 'Lasagne',
    beschrijving: 'Lekker lasagne',
    personen: 4,
    ingredienten: [ingredient1, ingredient2, ingredient3]
}
