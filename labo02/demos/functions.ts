//functions.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 2 demo functions

/** REGULIERE FUNCTIONS  **/
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(2,3)); // 5

// optionele parameter
function mutiply(a: number, b?: number): number {
    if (b == undefined) { b = 1; }

    return a * b;
}
console.log(mutiply(2,3)); // 6
console.log(mutiply(2)); // 2

// default parameter
function multiply2(a: number, b: number = 1): number {
    return a * b;
}

console.log(multiply2(5)); // 5

// rest parameters
function sum(...numbers: number[]): number {
    let total = 0;
    for (let number of numbers) { total += number; }

    return total;
}

console.log(sum(1,2,3,4,5)); // 15
console.log(sum(1,2,3)); // 6


/** ARROW FUNCTIONS  **/
let add2 = (a: number, b: number): number => {
    return a + b;
}
console.log(add2(1,2)); // 3

//  verkorte notatie
let hello = (tekst: string) => {
    console.log("hello");
}

let hello2 = () => { console.log("hello"); };


/** CALL FUNCTION **/
let numbers = [1,2,3,4,5];

numbers.forEach((element) => {
    console.log(element);
});

// callback keyword
function forEach(array: number[], callback: any) {
    for (let element of array) {
        callback(element);
    }
}

let numbers2: number[] = [1,2,3,4,5];

forEach(numbers, (element2) => {
    console.log(element2);
});
