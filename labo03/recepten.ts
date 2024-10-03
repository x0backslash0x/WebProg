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
