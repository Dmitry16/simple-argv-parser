# Simple command-line (process.argv) parser for Node.js.

Example of usage:

Install the package:

$ npm i simple-argv-parser

Import the package in your code. It returns an object with command-line arguments parsed :

i.e. command: $ node index.js -a b -c

Somewhere in your code:

const argvParsedObject = require('simple-argv-parser');

console.log(argvParsedObject); // prints { '-a': 'b', '-c': null } 

