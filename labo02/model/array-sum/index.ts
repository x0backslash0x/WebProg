let arr: number[] = [1, 2, 3, 4, 5];

function sum(arr: number[]): number {
    return arr.reduce((acc: number, val: number) => acc + val);
}

let total: number = sum(arr);

console.log(`De som van de getallen is ${total}!`);
