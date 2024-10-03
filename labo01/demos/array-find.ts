const planets : string[] = ['Mercury', 'Venus', 'Earth', 'Mars'];

//let result1: string | undefined = planets.find((p: string) => p.startsWith('M'));
let result1: string | undefined = planets.find((p: string) => {
    if (p != 'Mercurius') {
        return p.startsWith('M');
    } else {
        return false;
    }
})

//let result1:string = planets.find((p: string) => p.startsWith('E'));
//console.log(result1);

let result2: number = planets.findIndex((p: string) => p.startsWith('E'));
console.log(result2);


let result5: boolean = planets.every((p: string) => p.startsWith('M'));
console.log(result5);

let result7: string[] = planets.map((p: string) => p.toUpperCase());
console.log(result7)

// map kan het datatype van het resultaat aanpassen
let result8: number[] = planets.map((p: string) => p.length);
console.log(result8);

// accumulator is resultaat van de operatie
// currentItem is het huidige item
let result9: number = nums.reduce(
    (accumulator: number, currentItem: number) => accumulator + currentItem);

// method chaining
let result10: string[] = planets
    .filter((p: string) => p.startsWith('M'))
    .map((p: string) => p.toUpperCase); // wordt toegepast op het resultaat van vorige functie
console.log(result10);