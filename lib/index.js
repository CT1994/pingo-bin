'use strict';
const path = require('path');
const BinWrapper = require('bin-wrapper');
const pkg = require('../package.json');

const url = `https://raw.githubusercontent.com/CT1994/pingo-bin/v${pkg.version}/vendor/`;

module.exports = new BinWrapper()
	.src(`${url}linux/pingo`, 'linux')
	.src(`${url}win32/pingo.exe`, 'win32')
	.dest(path.resolve(__dirname, '../vendor'))
	.use(process.platform === 'win32' ? 'pingo.exe' : 'pingo');
