class NumberFilter {
  filterPositive(arr: number[]): number[] {
    let result: number[] = [];

    for (let num of arr) {
      if (num >= 0) {
        result.push(num);
      }
    }

    return result;
  }

  filterNegative(arr: number[]): number[] {
    return arr.filter((p) => p < 0);
  }

  filterEven(arr: number[]): number[] {
    return arr.filter((p) => p % 2 == 0);
  }

  filter(arr: number[], func: any): number[] {
    return arr.filter(func);
  }
}

const numberFilter: NumberFilter = new NumberFilter();
const numbers: number[] = [-4, -4, 1, 2, 3, 4, 5];

console.log(numberFilter.filterPositive(numbers));
console.log(numberFilter.filterNegative(numbers));
console.log(numberFilter.filterEven(numbers));

const isPositive = (num: number) => num >= 0;
const isNegative = (num: number) => num < 0;
const isEven = (num: number) => num % 2 == 0;

console.log(numberFilter.filter(numbers, isPositive));
console.log(numberFilter.filter(numbers, isNegative));
console.log(numberFilter.filter(numbers, isEven));
