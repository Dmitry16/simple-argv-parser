# simple-argv-parser is a command-line (process.argv) parser for Node.js with no dependencies!

Example of usage:

Install the package:

$ npm i simple-argv-parser

Import the package in your code. It returns an object { parsedObj } with command-line arguments parsed.

i.e. command: 

$ node index.js -a b -c

Then in your code:

const { parsedObj } = require('simple-argv-parser');

console.log(parsedObj); // prints { '-a': 'b', '-c': null } 
