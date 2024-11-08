const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle, Sonic, Mario } = require('./shapes');

// Your main function here
const generateLogo = async () => {
    const answers = await inquirer.prompt([
        // Your questions here
    ]);
    
    // Logic to generate logo based on answers
};

// Call the function to test
generateLogo();
