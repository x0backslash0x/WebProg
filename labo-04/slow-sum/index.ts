//slow-sum.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 4, oefening 1
//

// returns the sum of two numbers after a certain timeout
const slowSum = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        },1000) // 1 second delay
    });
}

// return the product of two numbers after a certain timout
const slowMult = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a*b);
        },1500) // 1.5 second delay
    });
}

// I expect slowSum to return the sum of 1 & 5
// It only returns 'Promise { <pending>}' after a certain timeout
console.log(slowSum(1, 5));
