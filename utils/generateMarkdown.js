// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license.replace(
      / /g,
      ""
    )}-blue.svg)`;
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

// function to take the stringg from the result and split it into a new array and for each item in the array we build a string with a link
function renderContributors(contributorsList) {
  if(contributorsList){
    const nameList = contributorsList.split(', ')
    const nameLinkList = nameList.map(name => `https://github.com/${name}`)
    return (
    nameLinkList.map((link, index) => ` [${nameList[index]}](${link})\n`
    ));
  } else {
    return ""
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(ansObj) {
  return `# ${ansObj.title}
## ${renderLicenseBadge(ansObj.license)}\n
## Table of Contents
- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution Guidelines](#contribution-guidelines)
- [Contributors](#contributors)
- [Tests](#test)
- [Questions](#questions) 

## Project Description\n
${ansObj.description}\n
## Installation \n
${ansObj.installation}\n
## Usage \n
${ansObj.usage}\n
${renderLicenseSection(ansObj.license)}\n
## Contribution Guidelines\n
${ansObj.contributing_guidelines} 
## Contributors \n
${renderContributors(ansObj.contributing)}\n
## Tests \n
${ansObj.tests}\n
## Questions\n
Github: [${ansObj.ghUserName}](https://github.com/${ansObj.ghUserName})\n
Email: [${ansObj.email}](mailto:${ansObj.email})
`;
}

module.exports = generateMarkdown;
