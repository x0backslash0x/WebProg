const nums: number[] = [1, 2, 3, 4, 11, 12, 21, 22];
console.log(nums.sort()); // array wordt niet numerieke gesorteerd maar alfanumeriek (1, 11, 2, 21, 22, ...)

let result: number[] = nums.sort(
    // arrow function om de structuur uit te leggen
    (a: number, b: number) => { // a = aarde, b = mars
        // a < b --> resultaat = -1 // negatief getal - als ze juist staan
        // a = b --> resultaar = 0
        // a > b --> resultaat = 1 // positief getal - als ze moeten omdraaien

        if(a == b) {
            return 0;
        } else if (a < b) {
            return -1; // we willen de waardes omdraaien
        } else if (a > b) {
            return 1;
        }
        return 0;
    }
);

console.log(result);