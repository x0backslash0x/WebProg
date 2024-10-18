//demo_promise.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 4, demo 1

/// PROMISE ///
//** promise dmv 'new Promise' constructor **/
const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(2*2);
    }, 1000);
});

// promise object wordt hier terug gegeven, niet het resultaat
promise.then((result : number) => {
    console.log(result);
});

// resultaat van de promise ophalen
const result2 = multiply(2, 2);
result2.then((result) => {
    console.log(result2);
});

//** promise als return type dmv een functie **//
function multiply(number1: number, number2: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(number1 * number2);
        }, 1000);
    });
};

// functie aanroepen en object promise opvragen
const result3 = multiply(2, 2);
console.log(result3);

// functie aanroepen en resultaat van de promise ophalen
multiply(2, 2).then((result) => {
    console.log(result);
});

/// CATCH ///
//** Promise functie met een reject **/
function multiply2(number1: number, number2: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            if (number1 * number2 > 10) {
                reject(new Error("Result is greater than 10"));
            } else {
                resolve(number1 * number2);
            }
        }, 1000);
    });
};

// reject gedeetje van de promise opvangen dmv een foutbericht
multiply2(4,10)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message))

/// BUILT-IN PROMISE ///
//** Filesystem **/
import { readFile } from "fs/promises";

readFile("test.txt", "utf-8")
    .then((result: string) => console.log(result))
    .catch((error) => console.log(error.message));

//** DNS LOOKUP **/
import { lookup } from 'dns/promises';

lookup('ap.ber')
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
