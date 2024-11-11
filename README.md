# SVG Logo Generator
## Description
The SVG Logo Generator allows users to create custom SVG logos by selecting a shape, inputting text, and choosing colors for both the text and shape. The application uses Node.js, Inquirer, and Jest for testing. Users can select from several shapes (Circle, Square, Triangle, Sonic, and Mario) and provide text for their logo. The generated logo is saved as an SVG file that can be opened in a web browser.

# Installation
1) Clone the repository:

```bash
git clone <repository-url>
```

2) Navigate to the project directory:

```bash
cd <project-directory>
```
3) Install the dependencies:

```bash
npm install
```

# Usage

To use the logo generator, run the following command:

``` bash
node index.js
```

The application will prompt you to:
- Enter up to three characters for the logo text.
- Choose a text color (either a keyword or hex).
- Select a shape (Circle, Square, Triangle, Sonic, or Mario).
- Choose a shape color (if applicable).
Once you complete the prompts, the application will generate an logo.svg file in the project directory.

# Example of the process:

1) Run the application with node index.js.
2) Follow the prompts to enter the text and colors.
3) After completing the prompts, the SVG logo will be saved as logo.svg.
   
Walkthrough Video
A walkthrough video demonstrating how to use the application and showing the generated SVG file will be available soon. The video will include:



Tests
The application uses Jest for unit tests. To run the tests:

```bash
npm test
```

License
This project is licensed under the MIT License.
