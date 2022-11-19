const inquirer = require("inquirer");

const fs = require("fs");

// ---call inquirer to use the prompt messages ----
inquirer
  .prompt([
    {
      type: "input",
      message: "Whats your project tittle?",
      name: "Title",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "i need a value to continue";
        }
      },
    },
    {
      type: "input",

      message: "Give a short description of your project",
      name: "Description",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "i need a value to continue";
        }
      },
    },
    {
      type: "input",
      name: "Installation",
      message:
        "What instructions the user should follow to install your application?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "i need a value to continue";
        }
      },
    },
    {
      type: "input",
      name: "Usage",
      message: "How to use this application",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "i need a value to continue";
        }
      },
    },

    {
      type: "list",
      name: "License",
      message: "What is the license for this project?",
      choices: [
        "The MIT License",
        "The GPL License",
        "Apache License",
        "GNU License",
        "N/A",
      ],

      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "i need a value to continue";
        }
      },
    },
    {
      type: "input",
      name: "Github",
      message: "Enter your github username",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "i need a value to continue";
        }
      },
    },
    {
      type: "input",
      name: "Email",
      message: "Enter your email address",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "i need a value to continue";
        }
      },
    },
    {
      type: "input",
      name: "Contributions",
      message: "What are your contributions to the project?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "i need a value to continue";
        }
      },
    },
    {
      type: "input",
      name: "Testing",
      message: "How to test your program?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "i need a value to continue";
        }
      },
    },
  ])
  .then(
    // ----Writing the readme file using the prompt-----

    ({
      Title,
      Description,
      Installation,
      Usage,
      License,
      Github,
      Email,
      Contributions,
      Testing,
    }) => {
      // ----Adding a template for the readme File----
      const template = `# ${Title}

  ${Description}
 ## Installation

  ${Installation}

 ## Description
 - [Readme Generator](#readme-generator)
 - [Installation](#installation)
 - [Description](#description)
 - [Table of Contents](#table-of-contents)
 - [Functionality](#functionality)
 - [License](#license)
 - [Testing](#testing)
 - [Contributions](#contributions)
 - [Websites](#websites)

 ## Functionality

  ${Usage}

 ## License 

  ${License}

## Testing

  ${Testing}

## Contributions

 ${Contributions}
     
     
 ## Websites

      * GitHub: ${Github}
      * Email: ${Email}
    
    `;
      createReadme(template);
    }
  );

//  ----Function that creates the readme file using fs------

function createReadme(data) {
  fs.writeFile(`README-Example.md`, data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Your Readme has been generated");
  });
}
