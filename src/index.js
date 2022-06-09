// required packages to make the app work and to generate the README.md file
import inquirer from "inquirer";
import { writeFile } from "fs";
import generateMarkdown from "./markdown.js";

// array of questions for user
const questions = [

    {
        type: "input",
        message: "What is the project title?",
        name: "title",
    },

    {
        type: "input",
        message: "What is the project description?",
        name: "description",
    },

    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installInstructions",
    },

    {
        type: "input",
        message: "How do you run the project?",
        name: "gettingStarted",
    },

    {
        type: "input",
        message: "What are the contribution guidelines? ",
        name: "guidelines",
    },

    {
        type: "input",
        message: "What are the test instructions? ",
        name: "testInstructions",
    },

    {
        type: "list",
        message: "What is the license? ",
        name: "license",
        choices: ["MIT", "GNU v3.0", "Apache v2.0", "None"],
    },

    {
        type: "input",
        message: "What is your GitHub username? ",
        name: "username",
    },

    {
        type: "input",
        message: "What is your email address? ",
        name: "email",
    },
];

// function to write README file
const writeToFile = (fileName, data) => {
    writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("Successfully wrote to README.md");
    }
    );
}

// function to initialize program
const init = () => {
    inquirer
        .prompt(questions)
        .then((response) => {
            const readme = generateMarkdown(response);
            writeToFile("GENERATED_README.md", readme);
        }
        );
}


init();