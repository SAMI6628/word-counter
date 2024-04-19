#! /usr/bin/env node

// This line is called a shebang, it tells the os to run it with node.js

// import the 'inquirer' module, which is a comand line interface for node.js
import inquirer from "inquirer"

// Declear a constant 'answer' and assign it to the result of inquirer.prompt funvtion

const answer: {
    Sentence: string
} = await inquirer.prompt(
    [
        {
            name: "Sentence",
            type: "input",
            message: "Enter your sentence to count the word: "
        }
    ]
)
const words = answer.Sentence.trim().split(" ")
// print the array of words to the console
console.log(words)
// print the word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);
