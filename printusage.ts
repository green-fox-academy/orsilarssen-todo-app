'use strict'

const fs = require('fs'); // for writing into files (don't forget to use npm i @types/node)

const args: string[] = process.argv;

export let printUsage = () => {

  if (args.length == 2) {
    console.log('$ todo \n Command Line Todo application \n ============================= \n Command line arguments: \n -l   Lists all the tasks \n -a   Adds a new task \n -r   Removes an task \n -c   Completes an task');
  } else if (args[2] == 'list') {
    console.log('i am listing all the todos')
  } else {
    console.log('this is the error handling');
  }
}
printUsage();