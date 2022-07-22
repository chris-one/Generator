// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter your Project Title?',
        name: 'title',
    },

    {   
        type: 'input',
        message: 'Please describe the project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please input the instructions for the installation.',
        name: 'installationInstructions',
    },
    {
        type: 'input',
        message: 'Please decsribe the usage information?',
        name: 'usageInformation',
    },
    {
        type: 'input',
        message: 'Please input the guidelines of the contribution?',
        name: 'contributionGuidelines',
    },
    {
        type: 'input',
        message: 'Please describe the test.',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Please select the license you wish to use',
        name: 'license',
        choices: ['MIT License', 'GNU GPL v2', 'GNU GPL v3', 'Apache License 2.0', 'BSD 3-Clause']
    },
    {
        type: 'input',
        message: 'Please enter your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please input your email.',
        name: 'mail',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("You READ.me file has been created.");
    }
  });
}

// TODO: Create a function to initialize app
async function init() {
    const responses = await inquirer.prompt(questions);
    let readMe = generateMarkdown(responses)
    fs.writeFile('README.md', readMe, (err) => err ? console.log(err) : console.log('You READ.me file has been created.'))

}

// Function call to initialize app
init();
