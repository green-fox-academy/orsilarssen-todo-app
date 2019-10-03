/*Empty list
Given the terminal opened in the project directory
And the file where you store your data
And the file has 0 task
When the application is ran with -l argument
Then it should show a message like this: No todos for today! :)*/

'use strict'

const fs = require('fs');

const args: string[] = process.argv;

let fileContent: string='';

let readStuff: string = fs.readFileSync('emptylist.txt', fileContent='');

export let emptylist = () => {
  if (args[2] == '-l' && readStuff.length==0) {
    console.log('No todos for today! :-)');
  } else {
    console.log('$ todo \n Command Line Todo application \n ============================= \n Command line arguments: \n -l   Lists all the tasks \n -a   Adds a new task \n -r   Removes an task \n -c   Completes an task');
  }
}
emptylist();