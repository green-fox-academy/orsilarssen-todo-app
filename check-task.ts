/*Check task
Given the terminal opened in the project directory
And the file where you store your data
And the file has at least 2 tasks
When the application is ran with the -c 2 argument
Then it should check the second task from the file*/

'use strict'

const fs = require('fs');

const args: string[] = process.argv;

let readStuff: string = fs.readFileSync('chektask.txt', 'utf8');

export let checktask = () => {
  let stuffbylines: string[] = readStuff.split('\n');
  if (args[2] == '-c' && args[3] == '2' && readStuff.length >= 2) {
    console.log(`${stuffbylines[1]}`);
  } else {
    console.log('$ todo \n Command Line Todo application \n ============================= \n Command line arguments: \n -l   Lists all the tasks \n -a   Adds a new task \n -r   Removes an task \n -c   Completes an task');
  }
}
checktask();

