// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the project title:",
    validate: (input) => {
      return input.trim() !== "" ? true : "Project title cannot be empty";
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a brief description of the project:",
    validate: (input) => {
      return input.trim() !== "" ? true : "Description cannot be empty";
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions:",
    validate: (input) => {
      return input.trim() !== ""
        ? true
        : "Installation instructions cannot be empty";
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information:",
    validate: (input) => {
      return input.trim() !== "" ? true : "Usage information cannot be empty";
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines:",
    validate: (input) => {
      return input.trim() !== ""
        ? true
        : "Contribution guidelines cannot be empty";
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions:",
    validate: (input) => {
      return input.trim() !== "" ? true : "Test instructions cannot be empty";
    },
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GNU GPLv3", "ISC", "Unlicense", "Other"],
    default: "MIT",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your GitHub username:",
    validate: (input) => {
      return input.trim() !== "" ? true : "GitHub username cannot be empty";
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: (input) => {
      // Basic email validation
      const re = /\S+@\S+\.\S+/;
      return re.test(input) ? true : "Please enter a valid email address";
    },
  },
];

// Function to write README file to the specified folder
function writeToFile(folderPath, fileName, data) {
  const filePath = path.join(folderPath, fileName);
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log(`README file created successfully at ${filePath}!`);
    }
  });
}

// Function to initialize app
function init() {
  const generateMarkdown = require("./utils/generateMarkdown");

  // Folder PATH where the README will generate
  const folderPath = "./output";

  // Check if the "output" folder exists, if not, create it
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate README content based on the user's answers (use 'answers' object)
      const readmeContent = generateMarkdown(answers);

      // Write the generated README content to a file in the specified folder
      writeToFile(folderPath, "README.md", readmeContent);
    })
    .catch((error) => {
      console.error("Error occurred during prompts:", error);
    });
}

// Function call to initialize app
init();
