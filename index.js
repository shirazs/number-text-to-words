#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const {NumberToText} = require('./core/NumberToText');

const input = process.argv[2];

const boxenOptions = {
  padding: 1,
  margin: 0,
  borderColor: "white",
  backgroundColor: "#333"
};

try {
  const msgBox = boxen(NumberToText(input), boxenOptions);
  
  console.log(msgBox);
  
} catch(e) {
  console.error(chalk.red(e))
}
