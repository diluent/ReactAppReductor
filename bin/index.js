#!/usr/bin/env node

'use strict';

var argv = require('minimist')(process.argv.slice(2));
var commands = argv._;

console.log(commands);