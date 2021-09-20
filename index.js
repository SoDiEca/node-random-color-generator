const chalk = require('chalk');
const randomColor = require('randomcolor');
const prompt = require('prompt-sync')();
let hue = process.argv[2];
let luminosity = process.argv[3];

if (process.argv[2] === 'ask') {
  hue = prompt('specify the hue:');
  luminosity = prompt('specify the brightness:');
}

const color = randomColor({
  hue: hue,
  luminosity: luminosity,
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
