// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

const licenses = [
  "MIT",
  "Apache License 2.0",
  "GNU General Public License v3.0",
  "BSD 3-Clause License",
  "None",
  "Mozilla Public License 2.0",
  "Creative Commons Zero v1.0 Universal",
  "The Unlicense"
];

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project name? This value will be your project title",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a detailed description of your project. Explain its purpose, features, and any other relevant information that will help users understand what your project is about."
  },
  {
    type: "input",
    name: "installation",
    message: "Include step-by-step instructions on how to install and set up your project."
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions on how to use your project. Explain the different functionalities, commands, or interfaces available."
  },
  {
    type: "list",
    choices: [...licenses],
    name: "license",
    message: "Please choose a license."
  }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('success!')
    }
  }  )
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(answer => {
    writeToFile("README.md", answer)
  })
}

// Function call to initialize app
init();
