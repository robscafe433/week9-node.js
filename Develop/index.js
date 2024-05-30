// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//In case there are more than one prerequisites this function loops through until confirm is "no".
let prerequisites = [];
let packagesNeededForApp = [];

// function that asks for prerequisite packages, example: node / npm

function askPrerequisite() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'prerequisite',
                message:
                    'What are the installation prerequisites? Example: npm',
            },
            {
                type: 'confirm',
                name: 'askAgain',
                message:
                    'Would you like to add another installation prerequisite?',
                default: true,
            },
        ])
        .then((answers) => {
            prerequisites.push(answers.prerequisite);
            if (answers.askAgain) {
                return askPrerequisite();
            } else {
                return prerequisites;
            }
        });
}

function askPackagesNeededForApp() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'packagesNeededForApp',
                message:
                    'What are the installation packages needed for app to work? Example: Inquirer? version?',
            },
            {
                type: 'confirm',
                name: 'askAgain',
                message: 'Would you like to add another installation package?',
                default: true,
            },
        ])
        .then((answers) => {
            packagesNeededForApp.push(answers.packagesNeededForApp);
            if (answers.askAgain) {
                return askPackagesNeededForApp();
            } else {
                return packagesNeededForApp;
            }
        });
}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description?',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Enter table of contents?',
    },
];

// TODO: Create a function to write README file
const writeToLog = (data) => {
    fs.writeFile('readme.md', data, (err) => {
        err ? console.error(err) : console.log('Log created!');
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
