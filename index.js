#!  /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blue("\n \t Welcome to Coding with Huma - Quiz of TypeScript \n "));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "\n \t Q1.What is the correct way to check if two values are not equal in Typescript? \t",
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "\n \t Q2.Which of the following characters is commonly allowed in variable names in Typescript? \t",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "\n \t Q3.Which operator is commonly used for string concatenation in Typescript? \t",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: "\n \t Q4.In Typescript , which symbol is commonly used to terminate a statement? \t",
        choices: [".", ":", ";", ","]
    },
    {
        name: "question_5",
        type: "list",
        message: "\n \t Q5.Which method of Inquirer.js is used to start the prompt interface and receive user input ? \t",
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a !== b":
        console.log(chalk.bold.green("1. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("1. Incorrect!"));
}
switch (quiz.question_2) {
    case "$":
        console.log(chalk.bold.green("2. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("2. Incorrect!"));
}
switch (quiz.question_3) {
    case "+":
        console.log(chalk.bold.green("3. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("3. Incorrect!"));
}
switch (quiz.question_4) {
    case ";":
        console.log(chalk.bold.green("4. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("4. Incorrect!"));
}
switch (quiz.question_5) {
    case "prompt()":
        console.log(chalk.bold.green("5. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("5. Incorrect!"));
}
console.log(chalk.bold.blueBright(`Score : ${score}`));
