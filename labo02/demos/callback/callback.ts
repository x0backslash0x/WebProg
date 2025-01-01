//callback.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 2 demo callback functies

//const numbers: number[] = [1, 2, 3, 4, 5];

let fruitschaal: string[] = ["banaan", "appel"];

/* function fruitToevoegen(schaal: string[], fruit: string): string[] {
    schaal.push(fruit);
    return schaal;
} */

const fruitToevoegen = ((schaal: string[], fruit: string) => schaal.push(fruit))

console.log(fruitschaal);
fruitToevoegen(fruitschaal, "citroen");
console.log(fruitschaal);