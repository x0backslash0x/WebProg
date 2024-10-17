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

// return the division of two numbers after a certain timout
const slowDiv = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            if(a == 0) {
                reject(new Error("Division by zero is an illegal operation"))
            } else {
                resolve(a/b);
            }
        },2000) // 2 second delay
    });
}

// Expected output: 6 [sum of 1 & 5]
// Actual output: Promise { <pending>}
//console.log(slowSum(1, 5));

// Expected output: 12 [product of (sum of 1 & 5) & 2]
// Actual output: Promise { <pending>}'
//slowSum(1, 5).then((result: number) => {console.log(slowMult(result, 2))});

// Expected output: 2 [division of 6 & 3]
// Actual output: Promise { <pending>}'
//console.log(slowDiv(6,3));

// Expected output: error
// Actual output: Division by zero is an illegal operation
slowDiv(0,6)
    .then((result: number) => {
        console.log(result);
    })
    .catch((error: Error) => {
        console.log(error.message);
    });
