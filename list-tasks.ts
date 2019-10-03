/*List tasks
Given the terminal opened in the project directory
And the file where you store your data
And a task with the description Walk the dog stored in the file
And a task with the description Buy milk stored in the file
And a task with the description Do homework stored in the file
When the application is ran with -l argument
Then it should print the tasks that are stored in the file
And it should add numbers before each
$ todo -l

1 - Walk the dog
2 - Buy milk
3 - Do homework*/

'use strict'

const fs = require('fs'); 

const args: string[] = process.argv;

export let listTasks = () => {
  if (args[2] == '-l') {
    console.log(fs.readFileSync('tasklist.txt', 'utf-8'));
  } else {
    console.log('$ todo \n Command Line Todo application \n ============================= \n Command line arguments: \n -l   Lists all the tasks \n -a   Adds a new task \n -r   Removes an task \n -c   Completes an task');
  }
}
listTasks();