const Manager = require("./library/Manager");
const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./library/htmlMaker");

const employees = [];

function createTeam() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the employee you would like to add?",
      },

      {
        type: "input",
        name: "id",
        message: "What is the ID# of this employee?",
      },

      {
        type: "input",
        name: "email",
        message: "What is this employee's email address?",
        validate: (input) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input),
      },

      {
        type: "list",
        name: "role",
        message: "What is this employee's position?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((answers) => {
      switch (answers.role) {
        case "Manager":
          inquirer
            .prompt([
              {
                type: "input",
                name: "officeNumber",
                message: "What is this manager's office number?",
              },
            ])
            .then((answers2) => {
              const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers2.officeNumber
              );
              employees.push(manager);

              continueTeam();
            });
          break;

        case "Engineer":
          inquirer
            .prompt([
              {
                type: "input",
                name: "github",
                message: "What is this engineer's github profile link?",
              },
            ])
            .then((answers2) => {
              const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers2.github
              );
              employees.push(engineer);

              continueTeam();
            });
          break;

        case "Intern":
          inquirer
            .prompt([
              {
                type: "input",
                name: "school",
                message: "What school does/did this intern go to?",
              },
            ])
            .then((answers2) => {
              const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers2.school
              );
              employees.push(intern);

              continueTeam();
            });
          break;
      }
    });
}
