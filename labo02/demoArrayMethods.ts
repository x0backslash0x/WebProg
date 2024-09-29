const nums: number[] = [1, 2, 3, 4, 11, 12, 21, 22];
console.log(nums.sort());

let result: number[] = nums.sort(
    (a: number, b: number) => {
        //a < b --> resultaat = -1 // negatief getal
        //a == b --> resultaat = 0
        //a > b --> resultaat = 1 // positief getal
        if (a == b) {
            return 0;
        } else if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
        return 0;
    }
);

console.log(result);

const planets: string[] = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturnus", "Uranus", "Neptunus"];

let result1: string | undefined = planets.find((p: string) => {
    if (p != "Mercury") {
        return p.startsWith("M");
    } else {
        return false;
    }
});
console.log(result1);

let result2: number = planets.findIndex((p: string) => p.startsWith("E"));
console.log(result2);

let result3: string[] = planets.filter((p: string) => p.startsWith("M"));
console.log(result3);

function filterStartWithLetterM(p: string): boolean {
  return p.startsWith("M");
}

let result4: string[] = planets.filter(filterStartWithLetterM);
console.log(result4);

planets.forEach((p: string) => console.log(p));

let result5: boolean = planets.every((p: string) => p.startsWith("M"));
console.log(result5);

let result6: boolean = planets.some((p: string) => p.startsWith("M"));
console.log(result6);

let result7: string[] = planets.map((p: string) => p.toUpperCase());
console.log(result7);

let result8: number[] = planets.map((p: string) => p.length);
console.log(result8);

let result9:number = nums.reduce(
    (accumulator: number, currentItem: number) => accumulator + currentItem);

let result10: string[] = planets
    .filter((p: string) => p.startsWith("M"))
    .map((p: string) => p.toUpperCase());
console.log(result10);