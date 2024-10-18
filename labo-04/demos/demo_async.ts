//async_promise.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 4, demo 2

/// ASYNC/AWAIT ///

//** Callback hell **/
function multiply(number1: number, number2: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(number1 * number2);
        }, 1000);
    });
};

multiply(2, 2).then((result) => {
    multiply(result, 5).then((result) => {
        multiply(result, 10).then((result) => {
            console.log(result);
        });
    });
});

//** Await gebruiken **/
// Dit zal een fout geven.
// Await kan niet in de global scope gebruikt worden, enkel binnen een async functie.
/* let result : number = await multiply(2, 2);
result = await multiply(result, 5);
result = await multiply(result, 10);
console.log(result); */

async function main(): Promise<void> {
    let result: number = await multiply(2, 2);
    result = await multiply(result, 5);
    result = await multiply(result, 10);
    console.log(result);
}
main();

//** async functie met een try-catch blok **/
import { readFile, writeFile } from "fs/promises";

async function main2(): Promise<void> {
    try {
        let result: number = await multiply(2, 2);
        result = await multiply(result, 5);
        result = await multiply(result, 10);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
main2();
