import * as readline from "readline-sync";

let tasks: string[] = [];
let completed: string[] = [];
let option: number;

do {
    option = readline.keyInSelect(["Add a task", "Show tasks", "Check a task", "Exit"]);

    switch (option) {
        case 0:
            let task: string = readline.question("Enter a task:");
            tasks.push(task);
            break;
        case 1:
            for (let i: number = 0; i < tasks.length; i++) {
                console.log(`[ ] ${tasks[i]}`);
            }
            for (let i: number = 0; i < completed.length; i++) {
                console.log(`[X] ${completed[i]}`);
            }
            break;
        case 2:
            for (let i: number = 0; i < tasks.length; i++) {
                console.log(`[${i + 1}] ${tasks[i]}`);
            }
            let select: number = readline.questionInt("Select task to complete:");
            let complete: string[] = tasks.splice(select - 1, 1);
            completed = completed.concat(complete);
            break;
    }

} while (option < 3);