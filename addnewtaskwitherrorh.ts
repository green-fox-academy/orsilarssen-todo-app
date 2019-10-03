/*Add new task error handling
Given the terminal opened in the project directory
When the application is ran with the -a argument
Then it should show an error message like: Unable to add: no task provided*/

'use strict'

const fs = require('fs');

const args: string[] = process.argv;

export let addnewtaskerrorhandling = () => {
  if (args[2] == '-a') {
    console.log('Unable to add: no task provided');
  } else {
    console.log('$ todo \n Command Line Todo application \n ============================= \n Command line arguments: \n -l   Lists all the tasks \n -a   Adds a new task \n -r   Removes an task \n -c   Completes an task');
  }
}
addnewtaskerrorhandling();