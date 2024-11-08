// test-inquirer.js
const inquirer = require('inquirer');

async function testInquirer() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'testInput',
                message: 'Enter something:'
            }
        ]);
        console.log('Prompt received:', answers);
    } catch (error) {
        console.error('Error:', error);
    }
}

testInquirer();
