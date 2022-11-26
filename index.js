#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';
const sleep = () => {
    return new Promise((r) => setTimeout(r, 4000));
};
async function welcome() {
    const style = chalkAnimation.karaoke('Welcome to this calculator program \n');
    await sleep(); //waiting for sleep to over
    style.stop();
}
await welcome();
async function askQuestions() {
    await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operation do you want to perform?",
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"]
        },
        {
            type: "number",
            name: "num1",
            message: chalk.blue("Enter number 1 : ")
        },
        {
            type: "number",
            name: "num2",
            message: chalk.blue("Enter number 2 : "),
        }
    ])
        .then((ans) => {
        //this then isn used for feedback
        if (ans.operator == "Addition") {
            console.log(chalk.red(`${ans.num1} + ${ans.num2} = ${ans.num1 + ans.num2}`));
        }
        else if (ans.operator == "Subtraction") {
            console.log(chalk.red(`${ans.num1} - ${ans.num2} = ${ans.num1 - ans.num2}`));
        }
        else if (ans.operator == "Multiplication") {
            console.log(chalk.red(`${ans.num1} * ${ans.num2} = ${ans.num1 * ans.num2}`));
        }
        else if (ans.operator == "Division") {
            console.log(chalk.red(`${ans.num1} / ${ans.num2} = ${ans.num1 / ans.num2}`));
        }
        else if (ans.operator == "Modulus") {
            console.log(chalk.red(`${ans.num1} % ${ans.num2} = ${ans.num1 % ans.num2}`));
        }
    });
}
//askQuestions()
async function startAgain() {
    do {
        await askQuestions();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "doAgain",
            message: chalk.blueBright("Do you want to do more calculations? Type 'y' for yes and 'n' for No ")
        });
    } while (again.doAgain == "y" || again.doAgain == "Y");
}
startAgain();
