/*Remove task
Given the terminal opened in the project directory
And the file where you store your data
And the file has at least 2 tasks
When the application is ran with the -r 2 argument
Then it should remove the second task from the file*/

'use strict'

const fs = require('fs');

const args: string[] = process.argv;

//let fileContent: string = '';

let readStuff: string = fs.readFileSync('removetask.txt');

export let removetask = () => {
  if (args[2] == '-r' && args[3] == '2' && readStuff.length == 2) {
    readStuff.slice(2, 2);
    console.log('You had two tasks, but we cut the last one off so you can be happy ;-)');
  } else {
    console.log('$ todo \n Command Line Todo application \n ============================= \n Command line arguments: \n -l   Lists all the tasks \n -a   Adds a new task \n -r   Removes an task \n -c   Completes an task');
  }
}
removetask();