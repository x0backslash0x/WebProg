import chalk from "chalk";
import { rainbow, RgbColor } from "rainbow-colors-array-ts";

const colors: RgbColor[] = rainbow(process.stdout.rows, "rgb");

for (let color of colors) {
    let text: string = "";
    for (let i: number = 0; i < process.stdout.columns; i++) {
        text = text + " ";
    }
    console.log(chalk.bgRgb(color.r, color.g, color.b)(text));
}
