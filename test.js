'use strict';
var assert = require('assert');
var tealc = require('./');

// Array
it('should return indeed if array is the same', function () {
	assert.strictEqual(tealc([1, 'Jack O\'Neill', 'Samantha Carter', 'Daniel Jackson', true, {theKey: 'theValue'}], [1, 'Jack O\'Neill', 'Samantha Carter', 'Daniel Jackson', true, {theKey: 'theValue'}]), 'indeed');
});

it('should return false if array is not the same', function () {
	assert.strictEqual(tealc([1, 'Jack O\'Neill', 'Samantha Carter', 'Daniel Jackson', true, {theKey: 'theValue'}], ['Apophis']), false);
});

// String
it('should return indeed if string is the same', function () {
	assert.strictEqual(tealc('Stargate SG-1', 'Stargate SG-1'), 'indeed');
});

it('should return false if string is not the same', function () {
	assert.strictEqual(tealc('Stargate SG-1', 'National Intelligence Department'), false);
});
