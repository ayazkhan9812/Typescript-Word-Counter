#! /usr/bin/env node    
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRed("\n \t\t code with AyazKhan -word counter"));
console.log("=".repeat(60));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
let words = answers.sentence.trim().split(" ");
console.log("=".repeat(60));
console.log(chalk.bgRed("- sentence words: "));
console.log(words);
console.log(chalk.bgRed(`\n - word count: ${chalk.green(words.length)}`));
console.log("=".repeat(60));
