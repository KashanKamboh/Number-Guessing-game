#! usr/bin/evn node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blueBright("Welcome to code with Kashaf - Number Guessing Game"));
const randomNumber = Math.floor( Math.random ()* 5 + 1);

const answer = await inquirer.prompt([
    {  
       name: "userGuessedNumber",
       type: "number",
       message: " Enter your guess number(Number Limit from 1 to 5):",
    }
]);
if (answer.userGuessedNumber === randomNumber ){
    console.log(chalk.redBright("Congratulations ! you guess a correct number."));
}
else {
    console.log(chalk.greenBright("Sorry, you guess a wrong number."));
}