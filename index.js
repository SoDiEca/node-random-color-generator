const chalk = require('chalk');
const randomColor = require('randomcolor');
const prompt = require('prompt-sync')();
let luminosity = process.argv[2];
let hue = process.argv[3];

if (process.argv[2] === 'ask') {
  luminosity = prompt('Specify the luminosity:');
  hue = prompt('specify the hue:');
}

const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});

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
