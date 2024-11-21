//main.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
//  Labo 8 oefening 1 uitvinders


interface Uitvinder {
    first: string,
    last: string,
    year: number,
    passed: number;
}

import json from "./uitvinders.json"
const uitvinders: Uitvinder[] = json;

console.log(uitvinders.filter((uitvinder: Uitvinder) => {
    const year: number = uitvinder.year;
    if (year >= 1500 && year < 1600) {
        return uitvinder;
    }
}))