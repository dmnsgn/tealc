# tealc [![Build Status](https://travis-ci.org/dmnsgn/tealc.svg?branch=master)](https://travis-ci.org/dmnsgn/tealc)

> isEqual in Jaffa. Return `'indeed'` if equal.


## Install

```
$ npm install --save tealc
```


## Usage

```js
var tealc = require('tealc');

tealc('Chulak', 'Chulak');
//=> 'indeed'

tealc('Chulak', 'Dakara');
//=> false
```


## CLI

```
$ npm install --global tealc
```

```
$ tealc --help

Usage
  $ tealc [value] [other]

Examples
  $ tealc "Daniel Jackson" "Jack O\'Neill"
  //=> false

  $ tealc 0 0
  //=> true

```

See [isEqual](https://lodash.com/docs#isEqual) from lodash.


## API

### tealc(value, other, [customizer], [thisArg])

#### value

Type: `*`

The value to compare.

#### other

Type: `*`  

The other value to compare.

#### customizer

Type: `Function`

The function to customize value comparisons.

#### thisArg

Type: `*`  

The this binding of customizer.


## License

MIT © [Damien SEGUIN](http://dmnsgn.me)
