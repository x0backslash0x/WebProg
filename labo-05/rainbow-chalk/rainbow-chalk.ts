//hello.ts
//
// 2024-2025 Patrick Lanove
// BA Electronica-ICT/Cybersecurity
// OLOD Web programming
//
// labo 5 oefening 4 rainbow chalk

import { RgbColor } from "rainbow-colors-array-ts";
import { rainbow } from "rainbow-colors-array-ts";
import chalk from "chalk";

const height = process.stdout.rows;
const width = process.stdout.columns;

const colorsArray = rainbow(height, "rgb", true);

let charlen: string = ' '
for (let i: number = 1; i < width; i++) {
    charlen = charlen + ' '
}

for (var color of colorsArray) {
    console.log(chalk.bgRgb(color['r'], color['g'], color['b']).bold(charlen));
}
