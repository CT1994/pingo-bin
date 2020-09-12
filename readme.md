![Node.js Package](https://github.com/CT1994/pingo-bin/workflows/Node.js%20Package/badge.svg)

[pingo](https://css-ig.net/pingo) — fast web image optimizer by Cédric Louvrier

> currently only supports Windows, Linux

## Install

```
$ npm install -save pingo-bin
```

## Usage

```js
const {execFile} = require('child_process');
const pingo = require('pingo-bin');

execFile(pingo, ['input.png'], (err) => {
    console.log('Image minified!');
});
```
