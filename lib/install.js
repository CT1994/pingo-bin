'use strict';
const log = require('logalot');
const bin = require('.');

bin.run([]).then(() => {
	log.success('pingo pre-build test passed successfully');
}).catch(async (error) => {
	log.error('pingo is current not support by your os please make a request here https://css-ig.net/submit/bugs/')
});
