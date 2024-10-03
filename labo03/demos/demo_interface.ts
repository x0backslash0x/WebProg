interface Continent {
    name: string;
}

interface StellarObject {
    name: string;
    radius: number;
    continenten: Continent[];
}

let europa: Continent = {
    name: 'Europa'
}

let earthInt: StellarObject = {
    name: 'Aarde',
    radius: 6371,
    continenten: [europa]
}