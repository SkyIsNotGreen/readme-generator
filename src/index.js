// required packages to make the app work 
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./markdown");


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

