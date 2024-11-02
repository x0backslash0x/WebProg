import * as readline from "readline-sync";

let game = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]
];

function showGame(): void {
    console.log("    0   1   2")
    for (let i: number = 0; i < 3; i++) {
        console.log("  +-----------+")
        let line: string = i + " |";
        for (let j: number = 0; j < 3; j++) {
            line = line + ` ${game[i][j]} |`;
        }
        console.log(line);
    }
    console.log("  +-----------+");
}

function checkWinner(): boolean {
    let winner: boolean = false;
    //horizontal check
    for (let i: number = 0; i < 3; i++) {
        let check: string = game[i].join("");
        if (check == "XXX" || check == "OOO") {
            winner = true
            break;
        }
    }
    if (winner) return true;
    //vertical check
    for (let i: number = 0; i < 3; i++) {
        let check: string = game[0][i] + game[1][i] + game[2][i];
        if (check == "XXX" || check == "OOO") {
            winner = true;
            break;
        }
    }
    if (winner) return true;
    //diagonal check
    let check1: string = game[0][0] + game[1][1] + game[2][2];
    if (check1 == "XXX" || check1 == "OOO") {
        winner = true;
    }
    if (winner) return true;
    let check2: string = game[2][0] + game[1][1] + game[0][2];
    if (check2 == "XXX" || check2 == "OOO") {
        winner = true;
    }
    return winner;
}

let player1: string = readline.question("Enter player 1 : ");
let player2: string = readline.question("Enter player 2 : ");

let winner: string = "";
let playing: string = player1;

while (winner == "") {
    console.log(`${playing} is playing`);
    showGame();
    let positions: string = readline.question("Enter coordinates (x,y) :");
    let idxs: string[] = positions.split(",");
    let idx1: number = parseInt(idxs[0]);
    let idx2: number = parseInt(idxs[1]);
    let current: string = game[idx1][idx2];
    if (current != " ") {
        console.log("er is al een zet gedaan op deze positie");
    } else {
        if (playing == player1) {
            game[idx1][idx2] = "X";
            if (checkWinner()) {
                winner = playing;
            } else {
                playing = player2;
            }
        } else {
            game[idx1][idx2] = "O";
            if (checkWinner()) {
                winner = playing;
            } else {
                playing = player1;
            }
        }
    }
}

console.log("De winnaar is " + winner + " !");