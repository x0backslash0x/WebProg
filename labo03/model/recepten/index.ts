interface Ingredient {
  naam: string;
  hoeveelheid: string;
  prijs: number;
}

interface Recept {
  naam: string;
  beschrijving: string;
  personen: number;
  ingredienten: Ingredient[];
}

let ingredient1: Ingredient = {
  naam: "lasagnevellen",
  hoeveelheid: "1 pak",
  prijs: 3,
};

let ingredient2: Ingredient = {
  naam: "gehakt",
  hoeveelheid: "500 gr",
  prijs: 5,
};

let ingredient3: Ingredient = {
  naam: "ui",
  hoeveelheid: "1",
  prijs: 1,
};

let ingredient4: Ingredient = {
  naam: "look",
  hoeveelheid: "1 teentje",
  prijs: 1,
};

let lasagne: Recept = {
  naam: "Lasagne",
  beschrijving: "Lekkere lasagne",
  personen: 4,
  ingredienten: [ingredient1, ingredient2, ingredient3, ingredient4]
};

console.log("Recept: " + lasagne.naam);
console.log("Beschrijving: " + lasagne.beschrijving);
console.log("Personen: " + lasagne.personen);
console.log("Ingredienten:");
for (let ingredient of lasagne.ingredienten) {
    console.log("- " + ingredient.hoeveelheid + " " + ingredient.naam);
}
let total: number = lasagne.ingredienten.reduce((acc: number, cur: Ingredient) => acc + cur.prijs, 0);
console.log("Totale kostprijs: " + total + " euro");