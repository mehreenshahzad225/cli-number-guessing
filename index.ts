#! /usr/bin/env node

import inquirer from "inquirer";

//computer will generate a random number
//use input for guessing number
//compare user input with computer generatd number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);

console.log("Welcome to number guessing game");

const solve = await inquirer.prompt([
   {
    name: "userGuessNumber",
    type: "number",
    message: "Please guess a number between 1-10:",
   },
]);

if(solve.userGuessNumber === randomNumber) {
    console.log("Congratulation! you guess right number")
}else {
    console.log("you guess wrong")
}