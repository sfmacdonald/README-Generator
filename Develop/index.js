// Include packages required for this app
const fs = require('fs');
const inquirer = require('inquirer');
const generateREADME = require('./generateREADME');

// Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Project Name',
            message: 'Enter the project title:',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Enter a project description:',
        },
        {
            type: 'input',
            name: 'Features',
            message: 'Enter the key features of the application/project:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:',
        },
        {
            type: 'list',
            name: 'License',
            message: 'Choose a license:',
            choices: ['MIT', 'Apache', 'GPL', 'Other', 'None'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contribution guidelines:',
        },
        {
            type: 'input',
            name: 'Testing',
            message: 'Enter test instructions:',
        },
        {
            type: 'list',
            name: 'Collaborators',
            message: 'Enter names of collaborators on the project:',
        },
    ]);
}

// Function to write the README file
function writeREADME(data) {
    const filename = 'README.md';
    const content = generateREADME(data);

    fs.writeFile(filename, content, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`README.md successfully generated!`);
        }
    });
}

// Run the app
async function init() {
    try {
        const userInput = await promptUser();
        writeREADME(userInput);
    } catch (error) {
        console.error(error);
    }
}

// Function call to initialize app
init();