const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle, Sonic, Mario } = require('./shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: input => input.length <= 3 || 'Must be 3 characters or less',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hex):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['Circle', 'Square', 'Triangle', 'Sonic', 'Mario'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hex):',
        when: answers => !['Sonic', 'Mario'].includes(answers.shape), // Skip color input for Sonic and Mario
        validate: input => /^#[0-9A-F]{6}$/i.test(input) || /^[a-zA-Z]+$/.test(input) || 'Please enter a valid color (keyword or hex).',
    },
];

inquirer.prompt(questions).then(answers => {
    let shape;

    switch (answers.shape) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Square':
            shape = new Square();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Sonic':
            shape = new Sonic();
            break;
        case 'Mario':
            shape = new Mario();
            break;
    }

    if (shape instanceof Circle || shape instanceof Square || shape instanceof Triangle) {
        shape.setColor(answers.shapeColor);
    }

    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="150" y="180" font-size="40" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>
    `;

    fs.writeFile('logo.svg', svgContent.trim(), err => {
        if (err) {
            console.error('Error creating the SVG file:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
});
