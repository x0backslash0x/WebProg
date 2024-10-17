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

//** De voorbeeldinteractie geef als volgorder: deling door nul, 6, 2, 12 **/
// Division by zero
slowDiv(0,6)
    .then((result: number) => {
        console.log(result);
    })
    .catch((error: Error) => {
        console.log(error.message);
    });

// sum of 1 & 5
slowSum(1, 5).then((result: number) => console.log(result));

// division of 6 & 3
slowDiv(6,3).then((result: number) => {console.log(result);});

// product of (sum of 1 & 5) & 2
slowSum(1, 5)
    .then((result: number) => {
        slowMult(result, 2)
        .then((result: number) => {
            console.log(result)
        })
    }
);
