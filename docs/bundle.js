(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["romaji2kana"] = factory();
	else
		root["romaji2kana"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var vowel = {\n  a: 'あ',\n  i: 'い',\n  u: 'う',\n  e: 'え',\n  o: 'お'\n};\nvar consonant = {\n  k: {\n    a: 'か',\n    i: 'き',\n    u: 'く',\n    e: 'け',\n    o: 'こ'\n  },\n  s: {\n    a: 'さ',\n    i: 'し',\n    u: 'す',\n    e: 'せ',\n    o: 'そ'\n  },\n  t: {\n    a: 'た',\n    i: 'ち',\n    u: 'つ',\n    e: 'て',\n    o: 'と'\n  },\n  n: {\n    a: 'な',\n    i: 'に',\n    u: 'ぬ',\n    e: 'ね',\n    o: 'の'\n  },\n  h: {\n    a: 'は',\n    i: 'ひ',\n    u: 'ふ',\n    e: 'へ',\n    o: 'ほ'\n  },\n  m: {\n    a: 'ま',\n    i: 'み',\n    u: 'む',\n    e: 'め',\n    o: 'も'\n  },\n  y: {\n    a: 'や',\n    u: 'ゆ',\n    e: 'いぇ',\n    o: 'よ'\n  },\n  r: {\n    a: 'ら',\n    i: 'り',\n    u: 'る',\n    e: 'れ',\n    o: 'ろ'\n  },\n  w: {\n    a: 'わ',\n    i: 'うぃ',\n    u: 'う',\n    e: 'うぇ',\n    o: 'を'\n  },\n  g: {\n    a: 'が',\n    i: 'ぎ',\n    u: 'ぐ',\n    e: 'げ',\n    o: 'ご'\n  },\n  z: {\n    a: 'ざ',\n    i: 'じ',\n    u: 'ず',\n    e: 'ぜ',\n    o: 'ぞ'\n  },\n  d: {\n    a: 'だ',\n    i: 'ぢ',\n    u: 'づ',\n    e: 'で',\n    o: 'ど'\n  },\n  b: {\n    a: 'ば',\n    i: 'び',\n    u: 'ぶ',\n    e: 'べ',\n    o: 'ぼ'\n  },\n  p: {\n    a: 'ぱ',\n    i: 'ぴ',\n    u: 'ぷ',\n    e: 'ぺ',\n    o: 'ぽ'\n  },\n  j: {\n    a: 'じゃ',\n    i: 'じ',\n    u: 'じゅ',\n    e: 'じぇ',\n    o: 'じょ'\n  },\n  l: {\n    a: 'ぁ',\n    i: 'ぃ',\n    u: 'ぅ',\n    e: 'ぇ',\n    o: 'ぉ'\n  },\n  ky: {\n    a: 'きゃ',\n    i: 'きぃ',\n    u: 'きゅ',\n    e: 'きぇ',\n    o: 'きょ'\n  },\n  sh: {\n    a: 'しゃ',\n    i: 'し',\n    u: 'しゅ',\n    e: 'しぇ',\n    o: 'しょ'\n  },\n  sy: {\n    a: 'しゃ',\n    i: 'しぃ',\n    u: 'しゅ',\n    e: 'しぇ',\n    o: 'しょ'\n  },\n  ty: {\n    a: 'ちゃ',\n    i: 'ちぃ',\n    u: 'ちゅ',\n    e: 'ちぇ',\n    o: 'ちょ'\n  },\n  th: {\n    a: 'てゃ',\n    i: 'てぃ',\n    u: 'てゅ',\n    e: 'てぇ',\n    o: 'てょ'\n  },\n  tw: {\n    a: 'とぁ',\n    i: 'とぃ',\n    u: 'とぅ',\n    e: 'とぇ',\n    o: 'とぉ'\n  },\n  ch: {\n    a: 'ちゃ',\n    i: 'ち',\n    u: 'ちゅ',\n    e: 'ちぇ',\n    o: 'ちょ'\n  },\n  ny: {\n    a: 'にゃ',\n    i: 'にぃ',\n    u: 'にゅ',\n    e: 'にぇ',\n    o: 'にょ'\n  },\n  hy: {\n    a: 'ひゃ',\n    i: 'ひぃ',\n    u: 'ひゅ',\n    e: 'ひぇ',\n    o: 'ひょ'\n  },\n  my: {\n    a: 'みゃ',\n    i: 'みぃ',\n    u: 'みゅ',\n    o: 'みょ'\n  },\n  ry: {\n    a: 'りゃ',\n    i: 'りぃ',\n    u: 'りゅ',\n    e: 'りぇ',\n    o: 'りょ'\n  },\n  wy: {\n    i: 'ゐ',\n    e: 'ゑ'\n  },\n  wh: {\n    i: 'うぃ',\n    e: 'うぇ',\n    o: 'うぉ'\n  },\n  gy: {\n    a: 'ぎゃ',\n    i: 'ぎぃ',\n    u: 'ぎゅ',\n    e: 'ぎぇ',\n    o: 'ぎょ'\n  },\n  zy: {\n    a: 'じゃ',\n    i: 'じぃ',\n    u: 'じゅ',\n    e: 'じぇ',\n    o: 'じょ'\n  },\n  by: {\n    a: 'びゃ',\n    i: 'びぃ',\n    u: 'びゅ',\n    e: 'びぇ',\n    o: 'びょ'\n  },\n  zh: {\n    a: '←あ',\n    i: '←い',\n    u: '←う',\n    e: '←え',\n    o: '←お'\n  },\n  jy: {\n    a: 'じゃ',\n    i: 'じぃ',\n    u: 'じゅ',\n    e: 'じぇ',\n    o: 'じょ'\n  },\n  dh: {\n    i: 'でぃ',\n    u: 'でゅ'\n  },\n  lt: {\n    u: 'っ'\n  },\n  ly: {\n    a: 'ゃ',\n    u: 'ゅ',\n    e: 'ぇ',\n    o: 'ょ'\n  },\n  lw: {\n    a: 'ゎ'\n  }\n};\n\nfunction romaji2kana(str) {\n  var indexDesc = str.split('').reverse().findIndex(function (l) {\n    return l in vowel || l === 'n';\n  });\n  var index = str.length - indexDesc - 1;\n  var letters = [indexDesc > -1 ? str[index] : '', // NOTE: when index not found\n  index > 0 ? str[index - 1] : '', index > 1 ? str[index - 2] : '', index > 2 ? str[index - 3] : ''];\n  var jp = '';\n  var romaji = '';\n  var prefix = '';\n  var suffix = '';\n\n  if (letters[0] in vowel) {\n    romaji = letters[0];\n\n    if (!(letters[1] in consonant)) {\n      // EXAMPLE: あ(a)\n      jp = vowel[letters[0]];\n      prefix = str.slice(0, index - (romaji.length - 1));\n      suffix = str.slice(index + 1);\n      return romaji2kana(prefix + jp + suffix);\n    }\n\n    if (letters[2] && letters[2] + letters[1] in consonant) {\n      // EXAMPLE: でぃ(dhi)\n      romaji = letters[2] + letters[1] + romaji;\n      jp = consonant[letters[2] + letters[1]][letters[0]] + jp;\n    } else if (letters[1] in consonant) {\n      // EXAMPLE: か(ka)\n      romaji = letters[1] + romaji;\n      jp = consonant[letters[1]][letters[0]];\n    }\n\n    if (letters[2] === letters[1]) {\n      // EXAMPLE: っか(kka)\n      if (letters[2] !== 'n') {\n        romaji = letters[2] + romaji;\n        jp = 'っ' + jp;\n      }\n    } else if (letters[2] && letters[3] === letters[2]) {\n      // EXAMPLE: っゎ(llwa)\n      romaji = letters[3] + romaji;\n      jp = 'っ' + jp;\n    }\n\n    prefix = str.slice(0, index - (romaji.length - 1));\n    suffix = str.slice(index + 1);\n    return romaji2kana(prefix + jp + suffix);\n  }\n\n  if (letters[0] === 'n') {\n    romaji = letters[0];\n\n    if (letters[1] === 'n') {\n      // EXAMPLE: ん(nn)\n      romaji = letters[1] + romaji;\n      jp += 'ん';\n      prefix = str.slice(0, index - (romaji.length - 1));\n      suffix = str.slice(index + 1);\n      return romaji2kana(prefix + jp + suffix);\n    }\n\n    if (index < str.length - 1 && !(str[index + 1] in vowel)) {\n      // EXAMPLE: んだ(nだ)\n      romaji = letters[1] + romaji;\n      jp = 'ん';\n      prefix = str.slice(0, index);\n      suffix = str.slice(index + 1);\n      return romaji2kana(prefix + jp + suffix);\n    } // EXAMPLE: ぱn(pan)\n\n\n    prefix = str.slice(0, index - (romaji.length - 1));\n    suffix = str.slice(index);\n    return romaji2kana(prefix) + suffix;\n  }\n\n  return str;\n}\n\nmodule.exports = romaji2kana;\n\n//# sourceURL=webpack://romaji2kana/./src/index.js?");

/***/ })

/******/ });
});