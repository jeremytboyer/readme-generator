// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return "";
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(ansObj) {
  return `# ${ansObj.title}
## ${renderLicenseBadge('MIT')}\n
## Table of Contents
- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- License
- Contributing
- Tests
- Questions 

## Project Description\n
${ansObj.description}\n
## Installation \n
${ansObj.installation}
## Usage \n
${ansObj.usage}\n
${renderLicenseSection('MIT')}
`;
}

module.exports = generateMarkdown;
