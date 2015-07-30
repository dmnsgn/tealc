#!/usr/bin/env node
'use strict';
var meow = require('meow');
var tealc = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ tealc [value] [other]',
    '',
    'Examples',
    '  $ tealc "Daniel Jackson" "Jack O\'Neill"',
    '  //=> false',
    '',
    '  $ tealc 0 0',
    '  //=> true',
    '',
    'See https://lodash.com/docs#isEqual'
  ]
});

console.log(tealc(cli.input[0], cli.input[1]));
