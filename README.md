# romaji2kana

Convert romaji strings into kana.  
You can use it in command line and browser.

[Demo](https://rikuson.github.io/romaji2kana/)

## Installation

```
$ npm install -g romaji2kana
```

## Usage

### Command line

```
$ romaji2kana nihongo
にほんご
```

### Browser

```html
<script type="text/javascript" src="./dist/bundle.js"></script>
```

```javascript
const romaji = 'nihongo';
const kana = romaji2kana(romaji);
console.log(kana); // にほんご
```

### Node.js

```javascript
const romaji2kana = require('romaji2kana');
const romaji = 'nihongo';
const kana = romaji2kana(romaji);
console.log(kana); // にほんご
```
