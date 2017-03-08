# ms-to [![Build Status](https://travis-ci.org/kevva/ms-to.svg?branch=master)](https://travis-ci.org/kevva/ms-to)

> Convert milliseconds to other formats


## Install

```
$ npm install --save ms-to
```


## Usage

```js
const msTo = require('ms-to');

msTo(1000 * 60 * 60 * 24);
/*
{
	days: 1,
	hours: 24,
	minutes: 1440,
	seconds: 86400,
	milliseconds: 86400000
}
 */
```


## API

### msTo(ms)

#### ms

Type: `number`

Value in milliseconds to convert.


## License

MIT © [Kevin Martensson](http://github.com/kevva)
