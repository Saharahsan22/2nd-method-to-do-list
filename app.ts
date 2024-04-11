#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todos = [];
let condition = true; 

while(condition)
{
    let addTask = await inquirer.prompt(
        [
            {name: 'todo',
            type: 'input',
            message: 'Eid ki Shopping main kia kia purchase krna hy',
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: 'aur kia Purchase karna hai',
            default: 'false'
        }
        ]
    );
    todos.push(addTask.todo);
    condition = addTask.addMore
    console.log(chalk.bgGreen(todos));
}