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
    message: "Provide a detailed description of your project."
  },
  {
    type: "input",
    name: "installation",
    message: "Include step-by-step instructions on how to install and set up your project."
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions on how to use your project."
  },
  {
    type: "list",
    choices: [...licenses],
    name: "license",
    message: "Please choose a license."
  },
  {
    type: "input",
    name: "contributing_guidelines",
    message: "Enter guidelines about how people can contribute to your project",
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter contributors by github user-name followed by a ', ' *No trailing comma on the last entry*",
  },
  {
    type: "input",
    name: "tests",
    message: "Please describe any tests performed. Include info about the testing framework",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email",
  },
  {
    type: "input",
    name: "ghUserName",
    message: "Enter your Github User Name",
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
