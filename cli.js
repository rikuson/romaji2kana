#!/usr/bin/env node
"use strict";

const romaji2kana = require('./dist/bundle.js');

const argv = require('yargs').argv;

console.log(romaji2kana(argv._.join(' ')));
