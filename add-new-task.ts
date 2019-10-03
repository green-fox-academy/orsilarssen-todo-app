/*Add new task
Given the terminal opened in the project directory
When the application is ran with the -a "Feed the monkey" argument
Then it should add a new task with the description Feed the monkey*/

'use strict'

const fs = require('fs');

const args: string[] = process.argv;

let fileContent: string;

export let addnewtask = () => {
  if (args[2] == '-a') {
    fs.writeFileSync('todotasks.txt', fileContent='Feed the monkey');
  } else {
    console.log('$ todo \n Command Line Todo application \n ============================= \n Command line arguments: \n -l   Lists all the tasks \n -a   Adds a new task \n -r   Removes an task \n -c   Completes an task');
  }
}
addnewtask();