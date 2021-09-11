const chalk = require('chalk');
const randomColor = require('randomcolor');
const prompt = require('prompt-sync')();

const color = randomColor({
  luminosity: process.argv[2],
  hue: process.argv[3],
});

if (process.argv[2] === 'ask') {
  luminosity = prompt('Specify the luminosity:');
  hue = prompt('specify the hue:');
}

console.log(
  chalk.hex(color)(`###############################
###############################
###############################
#####                     #####
#####       ${color}       #####
#####                     #####
###############################
###############################
###############################`),
);
