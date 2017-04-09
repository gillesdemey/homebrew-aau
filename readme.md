# homebrew-aau [![Build Status](https://travis-ci.org/gillesdemey/homebrew-aau.svg?branch=master)](https://travis-ci.org/gillesdemey/homebrew-aau) [![Coverage Status](https://coveralls.io/repos/github/gillesdemey/homebrew-aau/badge.svg?branch=master)](https://coveralls.io/github/gillesdemey/homebrew-aau?branch=master)

> an AAU is a unit obtained by multiplying the alpha-acid rating of the hop (a percentage value) by the weight (ounces) that you intend to use

## Install

```
$ npm install --save homebrew-aau
```


## Usage

```js
const aau = require('homebrew-aau')

// 1.25 oz. of 4% Liberty
aau(1.25, 4)
//=> 5
```


## API

### aau(weight, acidity)

#### weight

Type: `integer`, `float`

the weight (**ounces**) that you intend to use

#### acidity

Type: `integer`, `float`

alpha-acid rating of the hop (a percentage value)

## License

MIT © [Gilles De Mey](https://gilles.demey.io)
