#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const files = require("./lib/files");
const inquirer = require("./lib/inquirer");
const fetch = require('node-fetch');
const currencyFormatter = require('currency-formatter');

clear();

console.log(
  chalk.yellow(figlet.textSync("BTConverter CLI", { horizontalLayout: "full" })),
  'Love u Day 💖'
  );
  
  const run = async () => {
  const value = await inquirer.askGithubCredentials();

  const response = await fetch('https://brasilbitcoin.com.br/API/prices/BTC');
  const responseObj = await response.json();

  const totalPrice = currencyFormatter.format(value.value * responseObj.last, { code: 'BRL' });
  console.log('Total price: ' + totalPrice);
};

run();
