function add1(a: number, b: number): number {
    return a + b;
}

function substract1(a: number, b: number): number {
    return a - b;
}

function multiply1(a: number, b: number): number {
    return a * b;
}

function divide1(a: number, b: number): number {
    return a / b;
}

//(4 + 5) * (6 - 3) / 2

let result1: number = divide1(
    multiply1(
        add1(4, 5),
        substract1(6, 3)
    )
    , 2);

console.log(`Het resultaat is ${result1}`);

const add2 = (a: number, b: number): number =>  a + b;

const substract2 = (a: number, b: number): number => a - b;

const multiply2 = (a: number, b: number): number => a * b;

const divide2 = (a: number, b: number): number => a / b;

let result2: number = divide2(multiply2(add2(4, 5), substract2(6, 3)), 2);

console.log(`Het resultaat is ${result2}`);