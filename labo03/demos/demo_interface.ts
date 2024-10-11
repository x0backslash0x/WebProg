interface Continent {
    name: string;
    inwoners: number;
}

interface StellarObject {
    name: string;
    radius: number;
    continenten: Continent[];
}

let europa: Continent = {
    name: "Europa",
    inwoners: 100000
}

let asia: Continent = {
    name: "Azie",
    inwoners: 200000
}

let earth2: StellarObject = {
    name: "Aarde",
    radius: 6371,
    continenten : [europa, asia]
}

earth2.continenten.reduce((acc: number, current: Continent) => acc + current.inwoners, 0);

console.log(earth2.name);
console.log(earth2.radius);

for (let i: number = 0; i < earth2.continenten.length; i++) {

}

for (let continent of earth2.continenten) {

}