/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./jspm.config.js":
/*!************************!*\
  !*** ./jspm.config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

SystemJS.config({
  transpiler: false
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "ajv": "npm:ajv@5.2.3",
    "babel-preset-react": "npm:babel-preset-react@6.24.1",
    "babel-standalone": "npm:babel-standalone@6.26.0",
    "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.1",
    "brace": "npm:brace@0.10.0",
    "cheerio": "npm:cheerio@0.22.0",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "co": "npm:co@4.6.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "css-element-queries": "npm:css-element-queries@0.4.0",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.0",
    "dns": "npm:jspm-nodelibs-dns@0.2.0",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "eslint": "npm:eslint@4.8.0",
    "espree": "npm:espree@3.5.1",
    "esprima": "npm:esprima@3.1.3",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "icojs": "npm:icojs-min@0.5.0",
    "jimp": "npm:jimp-min@0.2.32",
    "jodid25519": "npm:jodid25519@1.0.2",
    "js-yaml": "github:nodeca/js-yaml@master",
    "jsbn": "npm:jsbn@0.1.1",
    "jspm-nodelibs-process": "npm:jspm-nodelibs-process@0.2.0",
    "list_requires_multi": "npm:list_requires_multi@1.0.2",
    "livescript15": "npm:livescript15@1.5.6",
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "cfy": "npm:cfy@1.0.20",
    "dexie": "npm:dexie@1.5.1",
    "enable-webcomponents-in-content-scripts": "npm:enable-webcomponents-in-content-scripts@1.0.7",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "jquery": "npm:jquery@3.1.1",
    "mathjs": "npm:mathjs@3.9.0",
    "module": "npm:jspm-nodelibs-module@0.2.1",
    "moment": "npm:moment@2.17.1",
    "net": "npm:jspm-nodelibs-net@0.2.0",
    "nodeca/js-yaml": "github:nodeca/js-yaml@master",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "percipio": "npm:percipio@0.1.2",
    "prelude-ls": "npm:prelude-ls@1.1.2",
    "prettier-min": "npm:prettier-min@0.15.3",
    "prettyprintjs": "npm:prettyprintjs@0.1.12",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "promise-debounce": "npm:promise-debounce@1.0.1",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.0",
    "readable-stream": "npm:readable-stream@2.3.3",
    "readline": "npm:jspm-nodelibs-readline@0.2.0",
    "repl": "npm:jspm-nodelibs-repl@0.2.0",
    "shuffled": "npm:shuffled@1.0.0",
    "sortablejs": "npm:sortablejs@1.5.0-rc1",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "sweetalert2": "npm:sweetalert2@6.3.2",
    "sweetjs-min": "npm:sweetjs-min@2.2.14",
    "text": "github:systemjs/plugin-text@0.0.8",
    "timers": "npm:jspm-nodelibs-timers@0.2.0",
    "tls": "npm:jspm-nodelibs-tls@0.2.0",
    "tty": "npm:jspm-nodelibs-tty@0.2.0",
    "tweetnacl": "npm:tweetnacl@0.14.5",
    "underscore": "npm:underscore@1.8.3",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.2"
  },
  packages: {
    "npm:enable-webcomponents-in-content-scripts@1.0.7": {
      "map": {
        "webcomponentsjs-custom-element-v0": "npm:webcomponentsjs-custom-element-v0@1.0.1"
      }
    },
    "npm:percipio@0.1.2": {
      "map": {
        "fast-csv": "npm:fast-csv@0.5.7",
        "underscore": "npm:underscore@1.8.3"
      }
    },
    "npm:fast-csv@0.5.7": {
      "map": {
        "is-extended": "npm:is-extended@0.0.10",
        "extended": "npm:extended@0.0.6",
        "string-extended": "npm:string-extended@0.0.8",
        "object-extended": "npm:object-extended@0.0.7"
      }
    },
    "npm:is-extended@0.0.10": {
      "map": {
        "extended": "npm:extended@0.0.6"
      }
    },
    "npm:string-extended@0.0.8": {
      "map": {
        "extended": "npm:extended@0.0.6",
        "is-extended": "npm:is-extended@0.0.10",
        "date-extended": "npm:date-extended@0.0.6",
        "array-extended": "npm:array-extended@0.0.11"
      }
    },
    "npm:object-extended@0.0.7": {
      "map": {
        "extended": "npm:extended@0.0.6",
        "is-extended": "npm:is-extended@0.0.10",
        "array-extended": "npm:array-extended@0.0.11"
      }
    },
    "npm:extended@0.0.6": {
      "map": {
        "extender": "npm:extender@0.0.10"
      }
    },
    "npm:date-extended@0.0.6": {
      "map": {
        "extended": "npm:extended@0.0.6",
        "is-extended": "npm:is-extended@0.0.10",
        "array-extended": "npm:array-extended@0.0.11"
      }
    },
    "npm:array-extended@0.0.11": {
      "map": {
        "extended": "npm:extended@0.0.6",
        "is-extended": "npm:is-extended@0.0.10",
        "arguments-extended": "npm:arguments-extended@0.0.3"
      }
    },
    "npm:extender@0.0.10": {
      "map": {
        "declare.js": "npm:declare.js@0.0.8"
      }
    },
    "npm:arguments-extended@0.0.3": {
      "map": {
        "extended": "npm:extended@0.0.6",
        "is-extended": "npm:is-extended@0.0.10"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.3",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:shuffled@1.0.0": {
      "map": {
        "shuffle-array": "npm:shuffle-array@1.0.0"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.1"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.8",
        "miller-rabin": "npm:miller-rabin@4.0.1"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "randombytes": "npm:randombytes@2.0.5",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "browserify-aes": "npm:browserify-aes@1.1.1"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.4.0",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:mathjs@3.9.0": {
      "map": {
        "decimal.js": "npm:decimal.js@5.0.8",
        "typed-function": "npm:typed-function@0.10.5",
        "complex.js": "npm:complex.js@2.0.1",
        "tiny-emitter": "npm:tiny-emitter@1.0.2",
        "fraction.js": "npm:fraction.js@3.3.1"
      }
    },
    "npm:sweetalert2@6.3.2": {
      "map": {
        "es6-promise": "npm:es6-promise@4.0.5"
      }
    },
    "npm:unthenify@1.0.4": {
      "map": {
        "util-arity": "npm:util-arity@1.1.0",
        "any-promise": "npm:any-promise@1.3.0"
      }
    },
    "npm:cheerio@0.22.0": {
      "map": {
        "lodash.defaults": "npm:lodash.defaults@4.2.0",
        "dom-serializer": "npm:dom-serializer@0.1.0",
        "entities": "npm:entities@1.1.1",
        "lodash.assignin": "npm:lodash.assignin@4.2.0",
        "lodash.pick": "npm:lodash.pick@4.4.0",
        "htmlparser2": "npm:htmlparser2@3.9.2",
        "css-select": "npm:css-select@1.2.0",
        "lodash.bind": "npm:lodash.bind@4.2.1",
        "lodash.reduce": "npm:lodash.reduce@4.6.0",
        "lodash.flatten": "npm:lodash.flatten@4.4.0",
        "lodash.foreach": "npm:lodash.foreach@4.5.0",
        "lodash.merge": "npm:lodash.merge@4.6.0",
        "lodash.map": "npm:lodash.map@4.6.0",
        "lodash.some": "npm:lodash.some@4.6.0",
        "lodash.filter": "npm:lodash.filter@4.6.0",
        "lodash.reject": "npm:lodash.reject@4.6.0"
      }
    },
    "npm:dom-serializer@0.1.0": {
      "map": {
        "entities": "npm:entities@1.1.1",
        "domelementtype": "npm:domelementtype@1.1.3"
      }
    },
    "npm:htmlparser2@3.9.2": {
      "map": {
        "entities": "npm:entities@1.1.1",
        "domutils": "npm:domutils@1.5.1",
        "inherits": "npm:inherits@2.0.3",
        "domelementtype": "npm:domelementtype@1.3.0",
        "readable-stream": "npm:readable-stream@2.3.3",
        "node-readable-stream": "npm:readable-stream@2.3.3",
        "domhandler": "npm:domhandler@2.3.0"
      }
    },
    "npm:css-select@1.2.0": {
      "map": {
        "domutils": "npm:domutils@1.5.1",
        "boolbase": "npm:boolbase@1.0.0",
        "css-what": "npm:css-what@2.1.0",
        "nth-check": "npm:nth-check@1.0.1"
      }
    },
    "npm:domutils@1.5.1": {
      "map": {
        "dom-serializer": "npm:dom-serializer@0.1.0",
        "domelementtype": "npm:domelementtype@1.3.0"
      }
    },
    "npm:nth-check@1.0.1": {
      "map": {
        "boolbase": "npm:boolbase@1.0.0"
      }
    },
    "npm:domhandler@2.3.0": {
      "map": {
        "domelementtype": "npm:domelementtype@1.3.0"
      }
    },
    "npm:shift-reducer@3.0.3": {
      "map": {
        "shift-spec": "npm:shift-spec@2015.2.1"
      }
    },
    "npm:es6-map@0.1.4": {
      "map": {
        "event-emitter": "npm:event-emitter@0.3.4",
        "es6-set": "npm:es6-set@0.1.4",
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "d": "npm:d@0.1.1",
        "es6-symbol": "npm:es6-symbol@3.1.0",
        "es5-ext": "npm:es5-ext@0.10.12"
      }
    },
    "npm:es6-set@0.1.4": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "event-emitter": "npm:event-emitter@0.3.4",
        "d": "npm:d@0.1.1",
        "es6-symbol": "npm:es6-symbol@3.1.0",
        "es5-ext": "npm:es5-ext@0.10.12"
      }
    },
    "npm:event-emitter@0.3.4": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.12"
      }
    },
    "npm:es6-iterator@2.0.0": {
      "map": {
        "d": "npm:d@0.1.1",
        "es6-symbol": "npm:es6-symbol@3.1.0",
        "es5-ext": "npm:es5-ext@0.10.12"
      }
    },
    "npm:es6-symbol@3.1.0": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.12"
      }
    },
    "npm:d@0.1.1": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.12"
      }
    },
    "npm:es5-ext@0.10.12": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "es6-symbol": "npm:es6-symbol@3.1.0"
      }
    },
    "npm:babel-code-frame@6.22.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "js-tokens": "npm:js-tokens@3.0.2",
        "esutils": "npm:esutils@2.0.2"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "has-ansi": "npm:has-ansi@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
      }
    },
    "npm:jest-validate@18.2.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "leven": "npm:leven@2.0.0",
        "jest-matcher-utils": "npm:jest-matcher-utils@18.1.0",
        "pretty-format": "npm:pretty-format@18.1.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:jest-matcher-utils@18.1.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "pretty-format": "npm:pretty-format@18.1.0"
      }
    },
    "npm:pretty-format@18.1.0": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1"
      }
    },
    "npm:prettier-min@0.15.3": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.22.0",
        "esutils": "npm:esutils@2.0.2",
        "jest-validate": "npm:jest-validate@18.2.0",
        "babylon": "npm:babylon@6.15.0",
        "ast-types": "npm:ast-types@0.9.4"
      }
    },
    "npm:cfy@1.0.20": {
      "map": {
        "co": "npm:co@4.6.0",
        "unthenify": "npm:unthenify@1.0.4"
      }
    },
    "npm:sweetjs-min@2.2.14": {
      "map": {
        "immutable": "npm:immutable@3.8.1",
        "shift-reducer": "npm:shift-reducer@3.0.3",
        "ramda": "npm:ramda@0.19.1",
        "ramda-fantasy": "npm:ramda-fantasy@0.4.1",
        "shift-codegen": "npm:shift-codegen@4.0.3",
        "shift-parser": "npm:shift-parser@4.1.3",
        "transit-js": "npm:transit-js@0.8.846",
        "sweet-spec": "npm:sweet-spec@1.1.0"
      }
    },
    "npm:ramda-fantasy@0.4.1": {
      "map": {
        "ramda": "npm:ramda@0.17.1"
      }
    },
    "npm:shift-codegen@4.0.3": {
      "map": {
        "shift-reducer": "npm:shift-reducer@3.0.3",
        "object-assign": "npm:object-assign@3.0.0",
        "esutils": "npm:esutils@2.0.2"
      }
    },
    "npm:shift-parser@4.1.3": {
      "map": {
        "shift-reducer": "npm:shift-reducer@3.0.3",
        "esutils": "npm:esutils@2.0.2",
        "es6-map": "npm:es6-map@0.1.4",
        "multimap": "npm:multimap@0.1.1"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.8",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "hash.js": "npm:hash.js@1.1.3",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:jimp-min@0.2.32": {
      "map": {
        "bignumber.js": "npm:bignumber.js@2.4.0",
        "file-type": "npm:file-type@3.9.0",
        "request": "npm:request@2.80.0",
        "tinycolor2": "npm:tinycolor2@1.4.1",
        "url-regex": "npm:url-regex@3.2.0",
        "mime": "npm:mime@1.3.4",
        "pngjs": "npm:pngjs@3.0.1",
        "stream-to-buffer": "npm:stream-to-buffer@0.1.0",
        "read-chunk": "npm:read-chunk@1.0.1",
        "load-bmfont": "npm:load-bmfont@1.3.0",
        "jpeg-js": "npm:jpeg-js@0.2.0",
        "pixelmatch": "npm:pixelmatch@4.0.2",
        "exif-parser": "npm:exif-parser@0.1.9",
        "bmp-js": "npm:bmp-js@0.0.2"
      }
    },
    "npm:url-regex@3.2.0": {
      "map": {
        "ip-regex": "npm:ip-regex@1.0.3"
      }
    },
    "npm:request@2.80.0": {
      "map": {
        "caseless": "npm:caseless@0.12.0",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "aws4": "npm:aws4@1.6.0",
        "form-data": "npm:form-data@2.1.2",
        "har-validator": "npm:har-validator@4.2.1",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "extend": "npm:extend@3.0.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "http-signature": "npm:http-signature@1.1.1",
        "forever-agent": "npm:forever-agent@0.6.1",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "mime-types": "npm:mime-types@2.1.14",
        "stringstream": "npm:stringstream@0.0.5",
        "performance-now": "npm:performance-now@0.2.0",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "tunnel-agent": "npm:tunnel-agent@0.4.3",
        "uuid": "npm:uuid@3.0.1",
        "qs": "npm:qs@6.3.1",
        "hawk": "npm:hawk@3.1.3"
      }
    },
    "npm:load-bmfont@1.3.0": {
      "map": {
        "mime": "npm:mime@1.3.4",
        "xtend": "npm:xtend@4.0.1",
        "buffer-equal": "npm:buffer-equal@0.0.1",
        "parse-bmfont-binary": "npm:parse-bmfont-binary@1.0.6",
        "xhr": "npm:xhr@2.4.0",
        "parse-bmfont-xml": "npm:parse-bmfont-xml@1.1.3",
        "parse-bmfont-ascii": "npm:parse-bmfont-ascii@1.0.6"
      }
    },
    "npm:pixelmatch@4.0.2": {
      "map": {
        "pngjs": "npm:pngjs@3.0.1"
      }
    },
    "npm:form-data@2.1.2": {
      "map": {
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.14",
        "asynckit": "npm:asynckit@0.4.0"
      }
    },
    "npm:har-validator@4.2.1": {
      "map": {
        "har-schema": "npm:har-schema@1.0.5",
        "ajv": "npm:ajv@4.11.4"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:stream-to-buffer@0.1.0": {
      "map": {
        "stream-to": "npm:stream-to@0.2.2"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "jsprim": "npm:jsprim@1.3.1",
        "assert-plus": "npm:assert-plus@0.2.0",
        "sshpk": "npm:sshpk@1.11.0"
      }
    },
    "npm:mime-types@2.1.14": {
      "map": {
        "mime-db": "npm:mime-db@1.26.0"
      }
    },
    "npm:tough-cookie@2.3.2": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "boom": "npm:boom@2.10.1",
        "cryptiles": "npm:cryptiles@2.0.5",
        "sntp": "npm:sntp@1.0.9",
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.6.3"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.2": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:sshpk@1.11.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "dashdash": "npm:dashdash@1.14.1",
        "asn1": "npm:asn1@0.2.3",
        "getpass": "npm:getpass@0.1.6"
      }
    },
    "npm:xhr@2.4.0": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "global": "npm:global@4.3.1",
        "is-function": "npm:is-function@1.0.1",
        "parse-headers": "npm:parse-headers@2.0.1"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:ajv@4.11.4": {
      "map": {
        "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
        "co": "npm:co@4.6.0"
      }
    },
    "npm:jsprim@1.3.1": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2",
        "json-schema": "npm:json-schema@0.2.3",
        "verror": "npm:verror@1.3.6"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:parse-bmfont-xml@1.1.3": {
      "map": {
        "xml2js": "npm:xml2js@0.4.17",
        "xml-parse-from-string": "npm:xml-parse-from-string@1.0.0"
      }
    },
    "npm:stream-http@2.6.3": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.3",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:dashdash@1.14.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:getpass@0.1.6": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.1"
      }
    },
    "npm:bcrypt-pbkdf@1.0.1": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.5"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.1"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:json-stable-stringify@1.0.1": {
      "map": {
        "jsonify": "npm:jsonify@0.0.0"
      }
    },
    "npm:xml2js@0.4.17": {
      "map": {
        "xmlbuilder": "npm:xmlbuilder@4.2.1",
        "sax": "npm:sax@1.2.2"
      }
    },
    "npm:global@4.3.1": {
      "map": {
        "process": "npm:process@0.5.2",
        "min-document": "npm:min-document@2.19.0",
        "node-min-document": "npm:min-document@2.19.0"
      }
    },
    "npm:parse-headers@2.0.1": {
      "map": {
        "trim": "npm:trim@0.0.1",
        "for-each": "npm:for-each@0.3.2"
      }
    },
    "npm:for-each@0.3.2": {
      "map": {
        "is-function": "npm:is-function@1.0.1"
      }
    },
    "npm:jspm-nodelibs-timers@0.2.0": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:xmlbuilder@4.2.1": {
      "map": {
        "lodash": "npm:lodash@4.17.10"
      }
    },
    "npm:min-document@2.19.0": {
      "map": {
        "dom-walk": "npm:dom-walk@0.1.1"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.9"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.6",
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.4.0",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.1.1",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:livescript15@1.5.6": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:acorn-jsx@3.0.1": {
      "map": {
        "acorn": "npm:acorn@3.3.0"
      }
    },
    "npm:list_requires_multi@1.0.2": {
      "map": {
        "espree": "npm:espree@3.5.1",
        "esprima-walk": "npm:esprima-walk@0.1.0"
      }
    },
    "npm:eslint@4.8.0": {
      "map": {
        "eslint-scope": "npm:eslint-scope@3.7.1",
        "esquery": "npm:esquery@1.0.0",
        "is-resolvable": "npm:is-resolvable@1.0.0",
        "file-entry-cache": "npm:file-entry-cache@2.0.0",
        "levn": "npm:levn@0.3.0",
        "natural-compare": "npm:natural-compare@1.4.0",
        "imurmurhash": "npm:imurmurhash@0.1.4",
        "estraverse": "npm:estraverse@4.2.0",
        "doctrine": "npm:doctrine@2.0.0",
        "pluralize": "npm:pluralize@7.0.0",
        "cross-spawn": "npm:cross-spawn@5.1.0",
        "chalk": "npm:chalk@2.1.0",
        "ignore": "npm:ignore@3.3.5",
        "strip-ansi": "npm:strip-ansi@4.0.0",
        "strip-json-comments": "npm:strip-json-comments@2.0.1",
        "semver": "npm:semver@5.4.1",
        "esutils": "npm:esutils@2.0.2",
        "table": "npm:table@4.0.2",
        "glob": "npm:glob@7.1.2",
        "babel-code-frame": "npm:babel-code-frame@6.22.0",
        "inquirer": "npm:inquirer@3.3.0",
        "path-is-inside": "npm:path-is-inside@1.0.2",
        "progress": "npm:progress@2.0.0",
        "text-table": "npm:text-table@0.2.0",
        "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
        "functional-red-black-tree": "npm:functional-red-black-tree@1.0.1",
        "require-uncached": "npm:require-uncached@1.0.3",
        "optionator": "npm:optionator@0.8.2",
        "concat-stream": "npm:concat-stream@1.6.0",
        "minimatch": "npm:minimatch@3.0.4",
        "globals": "npm:globals@9.18.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "debug": "npm:debug@3.1.0",
        "espree": "npm:espree@3.5.1",
        "js-yaml": "npm:js-yaml@3.10.0",
        "lodash": "npm:lodash@4.17.10",
        "ajv": "npm:ajv@5.2.3"
      }
    },
    "npm:eslint-scope@3.7.1": {
      "map": {
        "estraverse": "npm:estraverse@4.2.0",
        "esrecurse": "npm:esrecurse@4.2.0"
      }
    },
    "npm:esquery@1.0.0": {
      "map": {
        "estraverse": "npm:estraverse@4.2.0"
      }
    },
    "npm:doctrine@2.0.0": {
      "map": {
        "esutils": "npm:esutils@2.0.2",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:file-entry-cache@2.0.0": {
      "map": {
        "flat-cache": "npm:flat-cache@1.3.0",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:glob@7.1.2": {
      "map": {
        "minimatch": "npm:minimatch@3.0.4",
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "inflight": "npm:inflight@1.0.6",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "once": "npm:once@1.4.0",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:table@4.0.2": {
      "map": {
        "chalk": "npm:chalk@2.1.0",
        "lodash": "npm:lodash@4.17.10",
        "slice-ansi": "npm:slice-ansi@1.0.0",
        "string-width": "npm:string-width@2.1.1",
        "ajv-keywords": "npm:ajv-keywords@2.1.0",
        "ajv": "npm:ajv@5.2.3"
      }
    },
    "npm:inquirer@3.3.0": {
      "map": {
        "chalk": "npm:chalk@2.1.0",
        "strip-ansi": "npm:strip-ansi@4.0.0",
        "lodash": "npm:lodash@4.17.10",
        "string-width": "npm:string-width@2.1.1",
        "cli-cursor": "npm:cli-cursor@2.1.0",
        "mute-stream": "npm:mute-stream@0.0.7",
        "ansi-escapes": "npm:ansi-escapes@3.0.0",
        "cli-width": "npm:cli-width@2.2.0",
        "run-async": "npm:run-async@2.3.0",
        "external-editor": "npm:external-editor@2.0.5",
        "figures": "npm:figures@2.0.0",
        "through": "npm:through@2.3.8",
        "rx-lite-aggregates": "npm:rx-lite-aggregates@4.0.8",
        "rx-lite": "npm:rx-lite@4.0.8"
      }
    },
    "npm:cross-spawn@5.1.0": {
      "map": {
        "shebang-command": "npm:shebang-command@1.2.0",
        "which": "npm:which@1.3.0",
        "lru-cache": "npm:lru-cache@4.1.1"
      }
    },
    "npm:levn@0.3.0": {
      "map": {
        "type-check": "npm:type-check@0.3.2",
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:chalk@2.1.0": {
      "map": {
        "ansi-styles": "npm:ansi-styles@3.2.0",
        "supports-color": "npm:supports-color@4.4.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
      }
    },
    "npm:optionator@0.8.2": {
      "map": {
        "type-check": "npm:type-check@0.3.2",
        "levn": "npm:levn@0.3.0",
        "deep-is": "npm:deep-is@0.1.3",
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "fast-levenshtein": "npm:fast-levenshtein@2.0.6",
        "wordwrap": "npm:wordwrap@1.0.0"
      }
    },
    "npm:esrecurse@4.2.0": {
      "map": {
        "estraverse": "npm:estraverse@4.2.0",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:is-resolvable@1.0.0": {
      "map": {
        "tryit": "npm:tryit@1.0.3"
      }
    },
    "npm:concat-stream@1.6.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "typedarray": "npm:typedarray@0.0.6",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:require-uncached@1.0.3": {
      "map": {
        "caller-path": "npm:caller-path@0.1.0",
        "resolve-from": "npm:resolve-from@1.0.1"
      }
    },
    "npm:type-check@0.3.2": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:string-width@2.1.1": {
      "map": {
        "strip-ansi": "npm:strip-ansi@4.0.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@2.0.0"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:flat-cache@1.3.0": {
      "map": {
        "circular-json": "npm:circular-json@0.3.3",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "write": "npm:write@0.2.1",
        "del": "npm:del@2.2.2"
      }
    },
    "npm:minimatch@3.0.4": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.8"
      }
    },
    "npm:figures@2.0.0": {
      "map": {
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
      }
    },
    "npm:rx-lite-aggregates@4.0.8": {
      "map": {
        "rx-lite": "npm:rx-lite@4.0.8"
      }
    },
    "npm:which@1.3.0": {
      "map": {
        "isexe": "npm:isexe@2.0.0"
      }
    },
    "npm:lru-cache@4.1.1": {
      "map": {
        "pseudomap": "npm:pseudomap@1.0.2",
        "yallist": "npm:yallist@2.1.2"
      }
    },
    "npm:supports-color@4.4.0": {
      "map": {
        "has-flag": "npm:has-flag@2.0.0"
      }
    },
    "npm:shebang-command@1.2.0": {
      "map": {
        "shebang-regex": "npm:shebang-regex@1.0.0"
      }
    },
    "npm:debug@3.1.0": {
      "map": {
        "ms": "npm:ms@2.0.0"
      }
    },
    "npm:strip-ansi@4.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@3.0.0"
      }
    },
    "npm:espree@3.5.1": {
      "map": {
        "acorn-jsx": "npm:acorn-jsx@3.0.1",
        "acorn": "npm:acorn@5.1.2"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:ansi-styles@3.2.0": {
      "map": {
        "color-convert": "npm:color-convert@1.9.0"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:cli-cursor@2.1.0": {
      "map": {
        "restore-cursor": "npm:restore-cursor@2.0.0"
      }
    },
    "npm:caller-path@0.1.0": {
      "map": {
        "callsites": "npm:callsites@0.2.0"
      }
    },
    "npm:run-async@2.3.0": {
      "map": {
        "is-promise": "npm:is-promise@2.1.0"
      }
    },
    "npm:slice-ansi@1.0.0": {
      "map": {
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@2.0.0"
      }
    },
    "npm:ajv@5.2.3": {
      "map": {
        "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
        "fast-deep-equal": "npm:fast-deep-equal@1.0.0",
        "co": "npm:co@4.6.0",
        "json-schema-traverse": "npm:json-schema-traverse@0.3.1"
      }
    },
    "npm:readable-stream@2.3.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@1.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:external-editor@2.0.5": {
      "map": {
        "jschardet": "npm:jschardet@1.5.1",
        "tmp": "npm:tmp@0.0.33",
        "iconv-lite": "npm:iconv-lite@0.4.19"
      }
    },
    "npm:js-yaml@3.10.0": {
      "map": {
        "argparse": "npm:argparse@1.0.9",
        "esprima": "npm:esprima@4.0.0"
      }
    },
    "npm:write@0.2.1": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1"
      }
    },
    "npm:del@2.2.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "is-path-in-cwd": "npm:is-path-in-cwd@1.0.0",
        "is-path-cwd": "npm:is-path-cwd@1.0.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "pify": "npm:pify@2.3.0",
        "globby": "npm:globby@5.0.0",
        "rimraf": "npm:rimraf@2.6.2"
      }
    },
    "npm:brace-expansion@1.1.8": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@1.0.0"
      }
    },
    "npm:color-convert@1.9.0": {
      "map": {
        "color-name": "npm:color-name@1.1.3"
      }
    },
    "npm:restore-cursor@2.0.0": {
      "map": {
        "onetime": "npm:onetime@2.0.1",
        "signal-exit": "npm:signal-exit@3.0.2"
      }
    },
    "npm:argparse@1.0.9": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:string_decoder@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:globby@5.0.0": {
      "map": {
        "glob": "npm:glob@7.1.2",
        "object-assign": "npm:object-assign@4.1.1",
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "array-union": "npm:array-union@1.0.2",
        "arrify": "npm:arrify@1.0.1"
      }
    },
    "npm:rimraf@2.6.2": {
      "map": {
        "glob": "npm:glob@7.1.2"
      }
    },
    "npm:is-path-in-cwd@1.0.0": {
      "map": {
        "is-path-inside": "npm:is-path-inside@1.0.0"
      }
    },
    "npm:onetime@2.0.1": {
      "map": {
        "mimic-fn": "npm:mimic-fn@1.1.0"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:tmp@0.0.33": {
      "map": {
        "os-tmpdir": "npm:os-tmpdir@1.0.2"
      }
    },
    "npm:is-path-inside@1.0.0": {
      "map": {
        "path-is-inside": "npm:path-is-inside@1.0.2"
      }
    },
    "npm:array-union@1.0.2": {
      "map": {
        "array-uniq": "npm:array-uniq@1.0.3"
      }
    },
    "npm:crypto-browserify@3.11.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hash": "npm:create-hash@1.1.3",
        "randombytes": "npm:randombytes@2.0.5",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hmac": "npm:create-hmac@1.1.6",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "browserify-cipher": "npm:browserify-cipher@1.0.0"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.9",
        "cipher-base": "npm:cipher-base@1.0.4"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "create-hash": "npm:create-hash@1.1.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.9",
        "cipher-base": "npm:cipher-base@1.0.4"
      }
    },
    "npm:pbkdf2@3.0.14": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "create-hmac": "npm:create-hmac@1.1.6",
        "create-hash": "npm:create-hash@1.1.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.9"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:sha.js@2.4.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "md5.js": "npm:md5.js@1.3.4"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:md5.js@1.3.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@3.0.4"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:brace@0.10.0": {
      "map": {
        "w3c-blob": "npm:w3c-blob@0.0.1"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.8"
      }
    },
    "npm:buffer@5.0.8": {
      "map": {
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.1"
      }
    },
    "npm:browserify-aes@1.1.1": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:babel-preset-react@6.24.1": {
      "map": {
        "babel-plugin-transform-react-jsx-self": "npm:babel-plugin-transform-react-jsx-self@6.22.0",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-preset-flow": "npm:babel-preset-flow@6.23.0",
        "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.24.1",
        "babel-plugin-transform-react-display-name": "npm:babel-plugin-transform-react-display-name@6.25.0",
        "babel-plugin-transform-react-jsx-source": "npm:babel-plugin-transform-react-jsx-source@6.22.0"
      }
    },
    "npm:babel-plugin-transform-react-jsx-self@6.22.0": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:babel-plugin-transform-react-jsx@6.24.1": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.26.0",
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:babel-plugin-transform-react-jsx-source@6.22.0": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:babel-preset-flow@6.23.0": {
      "map": {
        "babel-plugin-transform-flow-strip-types": "npm:babel-plugin-transform-flow-strip-types@6.22.0"
      }
    },
    "npm:babel-plugin-transform-react-display-name@6.25.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:babel-plugin-transform-flow-strip-types@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.18.0"
      }
    },
    "npm:babel-helper-builder-react-jsx@6.26.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "esutils": "npm:esutils@2.0.2",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:babel-runtime@6.26.0": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.11.1",
        "core-js": "npm:core-js@2.5.7"
      }
    },
    "npm:babel-types@6.26.0": {
      "map": {
        "esutils": "npm:esutils@2.0.2",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "to-fast-properties": "npm:to-fast-properties@1.0.3",
        "lodash": "npm:lodash@4.17.10"
      }
    }
  }
});


/***/ }),

/***/ "./jspm_config_backend.js":
/*!********************************!*\
  !*** ./jspm_config_backend.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

SystemJS.config({
map: {
  "libs_common/content_script_utils": "libs_backend/content_script_utils",
  "libs_common/require_remote_utils": "libs_backend/require_remote_utils",
  "libs_backend/expose_backend_libs": "generated_libs/libs_backend/expose_backend_libs",
  "libs_common/ajax_utils": "libs_backend/ajax_utils",
  "libs_frontend/ajax_utils": "generated_libs/libs_frontend/ajax_utils",
  "libs_common/cacheget_utils": "libs_backend/cacheget_utils",
  "libs_frontend/cacheget_utils": "generated_libs/libs_frontend/cacheget_utils",
  "libs_common/db_utils": "libs_backend/db_utils",
  "libs_frontend/db_utils": "generated_libs/libs_frontend/db_utils",
  "libs_common/debug_console_utils": "libs_backend/debug_console_utils",
  "libs_frontend/debug_console_utils": "generated_libs/libs_frontend/debug_console_utils",
  "libs_common/disable_habitlab_utils": "libs_backend/disable_habitlab_utils",
  "libs_frontend/disable_habitlab_utils": "generated_libs/libs_frontend/disable_habitlab_utils",
  "libs_common/duolingo_utils": "libs_backend/duolingo_utils",
  "libs_frontend/duolingo_utils": "generated_libs/libs_frontend/duolingo_utils",
  "libs_common/favicon_utils": "libs_backend/favicon_utils",
  "libs_frontend/favicon_utils": "generated_libs/libs_frontend/favicon_utils",
  "libs_common/fetch_page_utils": "libs_backend/fetch_page_utils",
  "libs_frontend/fetch_page_utils": "generated_libs/libs_frontend/fetch_page_utils",
  "libs_common/gamification_utils": "libs_backend/gamification_utils",
  "libs_frontend/gamification_utils": "generated_libs/libs_frontend/gamification_utils",
  "libs_common/goal_progress": "libs_backend/goal_progress",
  "libs_frontend/goal_progress": "generated_libs/libs_frontend/goal_progress",
  "libs_common/goal_utils": "libs_backend/goal_utils",
  "libs_frontend/goal_utils": "generated_libs/libs_frontend/goal_utils",
  "libs_common/goal_vars_backend": "libs_backend/goal_vars_backend",
  "libs_frontend/goal_vars_backend": "generated_libs/libs_frontend/goal_vars_backend",
  "libs_common/history_utils": "libs_backend/history_utils",
  "libs_frontend/history_utils": "generated_libs/libs_frontend/history_utils",
  "libs_common/intervention_feedback_utils": "libs_backend/intervention_feedback_utils",
  "libs_frontend/intervention_feedback_utils": "generated_libs/libs_frontend/intervention_feedback_utils",
  "libs_common/intervention_first_impression_utils_backend": "libs_backend/intervention_first_impression_utils_backend",
  "libs_frontend/intervention_first_impression_utils_backend": "generated_libs/libs_frontend/intervention_first_impression_utils_backend",
  "libs_common/intervention_session_vars_backend": "libs_backend/intervention_session_vars_backend",
  "libs_frontend/intervention_session_vars_backend": "generated_libs/libs_frontend/intervention_session_vars_backend",
  "libs_common/intervention_utils": "libs_backend/intervention_utils",
  "libs_frontend/intervention_utils": "generated_libs/libs_frontend/intervention_utils",
  "libs_common/intervention_vars_backend": "libs_backend/intervention_vars_backend",
  "libs_frontend/intervention_vars_backend": "generated_libs/libs_frontend/intervention_vars_backend",
  "libs_common/localization_utils_backend": "libs_backend/localization_utils_backend",
  "libs_frontend/localization_utils_backend": "generated_libs/libs_frontend/localization_utils_backend",
  "libs_common/log_utils": "libs_backend/log_utils",
  "libs_frontend/log_utils": "generated_libs/libs_frontend/log_utils",
  "libs_common/notification_utils_backend": "libs_backend/notification_utils_backend",
  "libs_frontend/notification_utils_backend": "generated_libs/libs_frontend/notification_utils_backend",
  "libs_common/persistent_storage_utils": "libs_backend/persistent_storage_utils",
  "libs_frontend/persistent_storage_utils": "generated_libs/libs_frontend/persistent_storage_utils",
  "libs_common/screenshot_utils": "libs_backend/screenshot_utils",
  "libs_frontend/screenshot_utils": "generated_libs/libs_frontend/screenshot_utils",
  "libs_common/session_utils": "libs_backend/session_utils",
  "libs_frontend/session_utils": "generated_libs/libs_frontend/session_utils",
  "libs_common/streak_utils": "libs_backend/streak_utils",
  "libs_frontend/streak_utils": "generated_libs/libs_frontend/streak_utils",
  "libs_common/tab_utils": "libs_backend/tab_utils",
  "libs_frontend/tab_utils": "generated_libs/libs_frontend/tab_utils",
  "jquery-contextmenu": "modules_custom/jquery-contextmenu/dist/jquery.contextMenu.js",
  "jquery-inview": "modules_custom/jquery-inview/jquery.inview.js",
  "jquery.isinview": "modules_custom/jquery.isinview/dist/jquery.isinview.js",
  "jquery.pagepiling": "modules_custom/jquery.pagepiling/jquery.pagepiling.js",
  "jquery.terminal": "modules_custom/jquery.terminal/js/jquery.terminal-0.10.12.js"
}
});

/***/ }),

/***/ "./node_modules/localforage/dist/localforage.js":
/*!******************************************************!*\
  !*** ./node_modules/localforage/dist/localforage.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
'use strict';
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
'use strict';
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2}],4:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {
        return;
    }
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb || !idb.open) {
            return false;
        }
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

        // Safari <10.1 does not meet our requirements for IDB support
        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
        // Safari 10.1 shipped with fetch, we can use that to detect it.
        // Note: this creates issues with `window.fetch` polyfills and
        // overrides; see:
        // https://github.com/localForage/localForage/issues/856
        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
        // some outdated implementations of IDB that appear on Samsung
        // and HTC Android devices <4.4 are missing IDBKeyRange
        // See: https://github.com/mozilla/localForage/issues/128
        // See: https://github.com/mozilla/localForage/issues/272
        typeof IDBKeyRange !== 'undefined';
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

function normalizeKey(key) {
    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    return key;
}

function getCallback() {
    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        return arguments[arguments.length - 1];
    }
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs = void 0;
var dbContexts = {};
var toString = Object.prototype.toString;

// Transaction Modes
var READ_ONLY = 'readonly';
var READ_WRITE = 'readwrite';

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve, reject) {
        deferredOperation.resolve = resolve;
        deferredOperation.reject = reject;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
        return deferredOperation.promise;
    }
}

function _rejectReadiness(dbInfo, err) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Reject its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.reject(err);
        return deferredOperation.promise;
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {
        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            var db = openreq.result;
            db.onversionchange = function (e) {
                // Triggered when the database is modified (e.g. adding an objectStore) or
                // deleted (even when initiated by other sessions in different tabs).
                // Closing the connection here prevents those operations from being blocked.
                // If the database is accessed again later by this instance, the connection
                // will be reopened or the database recreated as needed.
                e.target.close();
            };
            resolve(db);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Try to establish a new db connection to replace the
// current one which is broken (i.e. experiencing
// InvalidStateError while creating a transaction).
function _tryReconnect(dbInfo) {
    _deferReadiness(dbInfo);

    var dbContext = dbContexts[dbInfo.name];
    var forages = dbContext.forages;

    for (var i = 0; i < forages.length; i++) {
        var forage = forages[i];
        if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
        }
    }
    dbInfo.db = null;

    return _getOriginalConnection(dbInfo).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        // store the latest db reference
        // in case the db was upgraded
        dbInfo.db = dbContext.db = db;
        for (var i = 0; i < forages.length; i++) {
            forages[i]._dbInfo.db = db;
        }
    })["catch"](function (err) {
        _rejectReadiness(dbInfo, err);
        throw err;
    });
}

// FF doesn't like Promises (micro-tasks) and IDDB store operations,
// so we have to do it with callbacks
function createTransaction(dbInfo, mode, callback, retries) {
    if (retries === undefined) {
        retries = 1;
    }

    try {
        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
        callback(null, tx);
    } catch (err) {
        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
            return Promise$1.resolve().then(function () {
                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    // increase the db version, to create the new ObjectStore
                    if (dbInfo.db) {
                        dbInfo.version = dbInfo.db.version + 1;
                    }
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                }
            }).then(function () {
                return _tryReconnect(dbInfo).then(function () {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                });
            })["catch"](callback);
        }

        callback(err);
    }
}

function createDbContext() {
    return {
        // Running localForages sharing a database.
        forages: [],
        // Shared database.
        db: null,
        // Database readiness (promise).
        dbReady: null,
        // Deferred operations on the database.
        deferredOperations: []
    };
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = createDbContext();
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.get(key);

                    req.onsuccess = function () {
                        var value = req.result;
                        if (value === undefined) {
                            value = null;
                        }
                        if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                        }
                        resolve(value);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                            var value = cursor.value;
                            if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                            }
                            var result = iterator(value, cursor.key, iterationNumber++);

                            // when the iterator callback returns any
                            // (non-`undefined`) value, then we stop
                            // the iteration immediately
                            if (result !== void 0) {
                                resolve(result);
                            } else {
                                cursor["continue"]();
                            }
                        } else {
                            resolve();
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);

                    // The reason we don't _save_ null is because IE 10 does
                    // not support saving the `null` type in IndexedDB. How
                    // ironic, given the bug below!
                    // See: https://github.com/mozilla/localForage/issues/161
                    if (value === null) {
                        value = undefined;
                    }

                    var req = store.put(value, key);

                    transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                            value = null;
                        }

                        resolve(value);
                    };
                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    // We use a Grunt task to make this safe for IE and some
                    // versions of Android (including those used by Cordova).
                    // Normally IE won't like `.delete()` and will insist on
                    // using `['delete']()`, but we have a build step that
                    // fixes this for us now.
                    var req = store["delete"](key);
                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onerror = function () {
                        reject(req.error);
                    };

                    // The request will be also be aborted if we've exceeded our storage
                    // space.
                    transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.clear();

                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.count();

                    req.onsuccess = function () {
                        resolve(req.result);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openKeyCursor();

                    req.onsuccess = function () {
                        var cursor = req.result;
                        if (!cursor) {
                            // this means there weren't enough keys
                            resolve(null);

                            return;
                        }

                        if (n === 0) {
                            // We have the first key, return it if that's what they
                            // wanted.
                            resolve(cursor.key);
                        } else {
                            if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                            } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                            }
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openKeyCursor();
                    var keys = [];

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                            resolve(keys);
                            return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
            }
            return db;
        });

        if (!options.storeName) {
            promise = dbPromise.then(function (db) {
                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                }

                var dropDBPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.deleteDatabase(options.name);

                    req.onerror = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        reject(req.error);
                    };

                    req.onblocked = function () {
                        // Closing all open connections in onversionchange handler should prevent this situation, but if
                        // we do get here, it just means the request remains pending - eventually it will succeed or error
                        console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        resolve(db);
                    };
                });

                return dropDBPromise.then(function (db) {
                    dbContext.db = db;
                    for (var i = 0; i < forages.length; i++) {
                        var _forage = forages[i];
                        _advanceReadiness(_forage._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        } else {
            promise = dbPromise.then(function (db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                }

                var newVersion = db.version + 1;

                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                }

                var dropObjectPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.open(options.name, newVersion);

                    req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                    };

                    req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                    };
                });

                return dropObjectPromise.then(function (db) {
                    dbContext.db = db;
                    for (var j = 0; j < forages.length; j++) {
                        var _forage2 = forages[j];
                        _forage2._dbInfo.db = db;
                        _advanceReadiness(_forage2._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        }
    }

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    _support: isIndexedDBValid(),
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys,
    dropInstance: dropInstance
};

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function createDbTable(t, dbInfo, callback, errorCallback) {
    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
}

// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            createDbTable(t, dbInfo, function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        }, reject);
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
    t.executeSql(sqlStatement, args, callback, function (t, error) {
        if (error.code === error.SYNTAX_ERR) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                if (!results.rows.length) {
                    // if the table is missing (was deleted)
                    // re-create it table and retry
                    createDbTable(t, dbInfo, function () {
                        t.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                } else {
                    errorCallback(t, error);
                }
            }, errorCallback);
        } else {
            errorCallback(t, error);
        }
    }, errorCallback);
}

function getItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// https://www.w3.org/TR/webdatabase/#databases
// > There is no way to enumerate or delete the databases available for an origin from this API.
function getAllStoreNames(db) {
    return new Promise$1(function (resolve, reject) {
        db.transaction(function (t) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                var storeNames = [];

                for (var i = 0; i < results.rows.length; i++) {
                    storeNames.push(results.rows.item(i).name);
                }

                resolve({
                    db: db,
                    storeNames: storeNames
                });
            }, function (t, error) {
                reject(error);
            });
        }, function (sqlError) {
            reject(sqlError);
        });
    });
}

function dropInstance$1(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            var db;
            if (options.name === currentConfig.name) {
                // use the db reference of the current instance
                db = self._dbInfo.db;
            } else {
                db = openDatabase(options.name, '', '', 0);
            }

            if (!options.storeName) {
                // drop all database tables
                resolve(getAllStoreNames(db));
            } else {
                resolve({
                    db: db,
                    storeNames: [options.storeName]
                });
            }
        }).then(function (operationInfo) {
            return new Promise$1(function (resolve, reject) {
                operationInfo.db.transaction(function (t) {
                    function dropTable(storeName) {
                        return new Promise$1(function (resolve, reject) {
                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                resolve();
                            }, function (t, error) {
                                reject(error);
                            });
                        });
                    }

                    var operations = [];
                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                        operations.push(dropTable(operationInfo.storeNames[i]));
                    }

                    Promise$1.all(operations).then(function () {
                        resolve();
                    })["catch"](function (e) {
                        reject(e);
                    });
                }, function (sqlError) {
                    reject(sqlError);
                });
            });
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    _support: isWebSQLValid(),
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1,
    dropInstance: dropInstance$1
};

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
        // in IE8 typeof localStorage.setItem === 'object'
        !!localStorage.setItem;
    } catch (e) {
        return false;
    }
}

function _getKeyPrefix(options, defaultConfig) {
    var keyPrefix = options.name + '/';

    if (options.storeName !== defaultConfig.storeName) {
        keyPrefix += options.storeName + '/';
    }
    return keyPrefix;
}

// Check if localStorage throws when saving an item
function checkIfLocalStorageThrows() {
    var localStorageTestKey = '_localforage_support_test';

    try {
        localStorage.setItem(localStorageTestKey, true);
        localStorage.removeItem(localStorageTestKey);

        return false;
    } catch (e) {
        return true;
    }
}

// Check if localStorage is usable and allows to save an item
// This method checks if localStorage is usable in Safari Private Browsing
// mode, or in any other case where the available quota for localStorage
// is 0 and there wasn't any saved items yet.
function _isLocalStorageUsable() {
    return !checkIfLocalStorageThrows() || localStorage.length > 0;
}

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

    if (!_isLocalStorageUsable()) {
        return Promise$1.reject();
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance$2(options, callback) {
    callback = getCallback.apply(this, arguments);

    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        var currentConfig = this.config();
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            if (!options.storeName) {
                resolve(options.name + '/');
            } else {
                resolve(_getKeyPrefix(options, self._defaultConfig));
            }
        }).then(function (keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var key = localStorage.key(i);

                if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    _support: isLocalStorageValid(),
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2,
    dropInstance: dropInstance$2
};

var sameValue = function sameValue(x, y) {
    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
};

var includes = function includes(array, searchElement) {
    var len = array.length;
    var i = 0;
    while (i < len) {
        if (sameValue(array[i], searchElement)) {
            return true;
        }
        i++;
    }

    return false;
};

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

// Drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var DefinedDrivers = {};

var DriverSupport = {};

var DefaultDrivers = {
    INDEXEDDB: asyncStorage,
    WEBSQL: webSQLStorage,
    LOCALSTORAGE: localStorageWrapper
};

var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

var OptionalDriverMethods = ['dropInstance'];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                    } else {
                        arguments[0][_key] = arg[_key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;

                if (!DefinedDrivers[driverName]) {
                    // we don't need to wait for the promise,
                    // since the default drivers can be defined
                    // in a blocking manner
                    this.defineDriver(driver);
                }
            }
        }

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }

                var driverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var driverMethodName = driverMethods[i];

                    // when the property is there,
                    // it should be a method even when optional
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var configureMissingMethods = function configureMissingMethods() {
                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                        return function () {
                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                            var promise = Promise$1.reject(error);
                            executeCallback(promise, arguments[arguments.length - 1]);
                            return promise;
                        };
                    };

                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                        var optionalDriverMethod = OptionalDriverMethods[_i];
                        if (!driverObject[optionalDriverMethod]) {
                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                        }
                    }
                };

                configureMissingMethods();

                var setDriverSupport = function setDriverSupport(support) {
                    if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    // don't use a then, so that we can define
                    // drivers that have simple _support methods
                    // in a blocking manner
                    resolve();
                };

                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                    } else {
                        setDriverSupport(!!driverObject._support);
                    }
                } else {
                    setDriverSupport(true);
                }
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!DriverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/jspm_packages/system.js":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/jspm_packages/system.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "(function(){'use strict';function t(wa){return yt?Symbol():'@@'+wa}function n(wa,Ga){ct||(Ga=Ga.replace(mt?/file:\\/\\/\\//g:/file:\\/\\//g,''));var Fa,Ua=(wa.message||wa)+'\\n  '+Ga;Fa=vt&&wa.fileName?new Error(Ua,wa.fileName,wa.lineNumber):new Error(Ua);var qa=wa.originalErr?wa.originalErr.stack:wa.stack;return Fa.stack=ft?Ua+'\\n  '+qa:qa,Fa.originalErr=wa.originalErr||wa,Fa}function r(wa,Ga){throw new RangeError('Unable to resolve \"'+wa+'\" to '+Ga)}function s(wa,Ga){wa=wa.trim();var Ua=Ga&&Ga.substr(0,Ga.indexOf(':')+1),Fa=wa[0],qa=wa[1];if('/'===Fa&&'/'===qa)return Ua||r(wa,Ga),Ua+wa;if('.'===Fa&&('/'===qa||'.'===qa&&('/'===wa[2]||2===wa.length&&(wa+='/'))||1===wa.length&&(wa+='/'))||'/'===Fa){var Ja,za=!Ua||'/'!==Ga[Ua.length];if(za?(void 0===Ga&&r(wa,Ga),Ja=Ga):'/'===Ga[Ua.length+1]?'file:'===Ua?Ja=Ga.substr(8):(Ja=Ga.substr(Ua.length+2),Ja=Ja.substr(Ja.indexOf('/')+1)):Ja=Ga.substr(Ua.length+1),'/'===Fa)if(za)r(wa,Ga);else return Ga.substr(0,Ga.length-Ja.length-1)+wa;for(var Ya=Ja.substr(0,Ja.lastIndexOf('/')+1)+wa,Ba=[],Ha=-1,Va=0;Va<Ya.length;Va++){if(-1!=Ha){'/'===Ya[Va]&&(Ba.push(Ya.substring(Ha,Va+1)),Ha=-1);continue}if('.'===Ya[Va]){if('.'===Ya[Va+1]&&'/'===Ya[Va+2])Ba.pop(),Va+=2;else if('/'===Ya[Va+1])Va+=1;else{Ha=Va;continue}za&&0===Ba.length&&r(wa,Ga),Va===Ya.length&&Ba.push('');continue}Ha=Va}return-1!==Ha&&Ba.push(Ya.substr(Ha)),Ga.substr(0,Ga.length-Ja.length)+Ba.join('')}var Wa=wa.indexOf(':');if(-1!==Wa)return ft&&':'===wa[1]&&'\\\\'===wa[2]&&wa[0].match(/[a-z]/i)?'file:///'+wa.replace(/\\\\/g,'/'):wa}function l(wa){if(wa.values)return wa.values();if('undefined'==typeof Symbol||!Symbol.iterator)throw new Error('Symbol.iterator not supported in this browser');var Ga={};return Ga[Symbol.iterator]=function(){var Ua=Object.keys(wa),Fa=0;return{next:function(){return Fa<Ua.length?{value:wa[Ua[Fa++]],done:!1}:{value:void 0,done:!0}}}},Ga}function o(){this.registry=new f}function d(wa){if(!(wa instanceof h))throw new TypeError('Module instantiation did not return a valid namespace object.');return wa}function u(wa){if(void 0===wa)throw new RangeError('No resolution found.');return wa}function f(){this[Ot]={}}function h(wa){Object.defineProperty(this,_t,{value:wa}),Object.keys(wa).forEach(y,this)}function y(wa){Object.defineProperty(this,wa,{enumerable:!0,get:function(){return this[_t][wa]}})}function k(){o.call(this);var wa=this.registry.delete;this.registry.delete=function(Ua){var Fa=wa.call(this,Ua);return Ga.hasOwnProperty(Ua)&&!Ga[Ua].linkRecord&&(delete Ga[Ua],Fa=!0),Fa};var Ga={};this[Ct]={lastRegister:void 0,records:Ga},this.trace=!1}function x(wa,Ga,Ua){return wa.records[Ga]={key:Ga,registration:Ua,module:void 0,importerSetters:void 0,loadError:void 0,evalError:void 0,linkRecord:{instantiatePromise:void 0,dependencies:void 0,execute:void 0,executingRequire:!1,moduleObj:void 0,setters:void 0,depsInstantiatePromise:void 0,dependencyInstantiations:void 0}}}function E(wa,Ga,Ua,Fa,qa){var za=Fa[Ga];if(za)return Promise.resolve(za);var Ja=qa.records[Ga];return Ja&&!Ja.module?Ja.loadError?Promise.reject(Ja.loadError):R(wa,Ja,Ja.linkRecord,Fa,qa):wa.resolve(Ga,Ua).then(function(Ya){if(za=Fa[Ya],za)return za;if(Ja=qa.records[Ya],(!Ja||Ja.module)&&(Ja=x(qa,Ya,Ja&&Ja.registration)),Ja.loadError)return Promise.reject(Ja.loadError);var Ba=Ja.linkRecord;return Ba?R(wa,Ja,Ba,Fa,qa):Ja})}function S(wa,Ga,Ua){return function(){var Fa=Ua.lastRegister;return Fa?(Ua.lastRegister=void 0,Ga.registration=Fa,!0):!!Ga.registration}}function R(wa,Ga,Ua,Fa,qa){return Ua.instantiatePromise||(Ua.instantiatePromise=(Ga.registration?Promise.resolve():Promise.resolve().then(function(){return qa.lastRegister=void 0,wa[Mt](Ga.key,1<wa[Mt].length&&S(wa,Ga,qa))})).then(function(za){if(void 0!==za){if(!(za instanceof h))throw new TypeError('Instantiate did not return a valid Module object.');return delete qa.records[Ga.key],wa.trace&&O(wa,Ga,Ua),Fa[Ga.key]=za}var Ja=Ga.registration;if(Ga.registration=void 0,!Ja)throw new TypeError('Module instantiation did not call an anonymous or correctly named System.register.');return Ua.dependencies=Ja[0],Ga.importerSetters=[],Ua.moduleObj={},Ja[2]?(Ua.moduleObj.default=Ua.moduleObj.__useDefault={},Ua.executingRequire=Ja[1],Ua.execute=Ja[2]):_(wa,Ga,Ua,Ja[1]),Ga}).catch(function(za){throw Ga.linkRecord=void 0,Ga.loadError=Ga.loadError||n(za,'Instantiating '+Ga.key)}))}function I(wa,Ga,Ua,Fa,qa,za){return wa.resolve(Ga,Ua).then(function(Ja){za&&(za[Ga]=Ja);var Ya=qa.records[Ja],Ba=Fa[Ja];if(Ba&&(!Ya||Ya.module&&Ba!==Ya.module))return Ba;if(Ya&&Ya.loadError)throw Ya.loadError;Ya&&(Ba||!Ya.module)||(Ya=x(qa,Ja,Ya&&Ya.registration));var Ha=Ya.linkRecord;return Ha?R(wa,Ya,Ha,Fa,qa):Ya})}function O(wa,Ga,Ua){wa.loads=wa.loads||{},wa.loads[Ga.key]={key:Ga.key,deps:Ua.dependencies,dynamicDeps:[],depMap:Ua.depMap||{}}}function _(wa,Ga,Ua,Fa){var qa=Ua.moduleObj,za=Ga.importerSetters,Ja=!1,Ya=Fa.call(ht,function(Ba,Ha){if('object'==typeof Ba){var Va=!1;for(var Wa in Ba)Ha=Ba[Wa],'__useDefault'==Wa||Wa in qa&&qa[Wa]===Ha||(Va=!0,qa[Wa]=Ha);if(!1==Va)return Ha}else{if((Ja||Ba in qa)&&qa[Ba]===Ha)return Ha;qa[Ba]=Ha}for(var $a=0;$a<za.length;$a++)za[$a](qa);return Ha},new T(wa,Ga.key));Ua.setters=Ya.setters,Ua.execute=Ya.execute,Ya.exports&&(Ua.moduleObj=qa=Ya.exports,Ja=!0)}function C(wa,Ga,Ua,Fa,qa){if(Ua.depsInstantiatePromise)return Ua.depsInstantiatePromise;for(var za=Array(Ua.dependencies.length),Ja=0;Ja<Ua.dependencies.length;Ja++)za[Ja]=I(wa,Ua.dependencies[Ja],Ga.key,Fa,qa,wa.trace&&Ua.depMap||(Ua.depMap={}));var Ya=Promise.all(za).then(function(Ba){if(Ua.dependencyInstantiations=Ba,Ua.setters)for(var Va,Ha=0;Ha<Ba.length;Ha++)if(Va=Ua.setters[Ha],Va){var Wa=Ba[Ha];if(Wa instanceof h)Va(Wa);else{if(Wa.loadError)throw Wa.loadError;Va(Wa.module||Wa.linkRecord.moduleObj),Wa.importerSetters&&Wa.importerSetters.push(Va)}}return Ga});return wa.trace&&(Ya=Ya.then(function(){return O(wa,Ga,Ua),Ga})),Ya=Ya.catch(function(Ba){throw Ua.depsInstantiatePromise=void 0,n(Ba,'Loading '+Ga.key)}),Ya.catch(function(){}),Ua.depsInstantiatePromise=Ya}function M(wa,Ga,Ua,Fa,qa){return new Promise(function(za,Ja){function Ya(Wa){var $a=Wa.linkRecord;$a&&-1===Ha.indexOf(Wa)&&(Ha.push(Wa),Va++,C(wa,Wa,$a,Fa,qa).then(Ba,Ja))}function Ba(Wa){Va--;var $a=Wa.linkRecord;if($a)for(var Qa,Xa=0;Xa<$a.dependencies.length;Xa++)Qa=$a.dependencyInstantiations[Xa],Qa instanceof h||Ya(Qa);0===Va&&za()}var Ha=[],Va=0;Ya(Ga)})}function T(wa,Ga){this.loader=wa,this.key=this.id=Ga,this.meta={url:Ga}}function L(wa,Ga,Ua,Fa,qa,za){if(Ga.module)return Ga.module;if(Ga.evalError)throw Ga.evalError;if(za&&-1!==za.indexOf(Ga))return Ga.linkRecord.moduleObj;var Ja=j(wa,Ga,Ua,Fa,qa,Ua.setters?[]:za||[]);if(Ja)throw Ja;return Ga.module}function A(wa,Ga,Ua,Fa,qa,za,Ja){return function(Ya){for(var Ba=0;Ba<Ua.length;Ba++)if(Ua[Ba]===Ya){var Va,Ha=Fa[Ba];return Va=Ha instanceof h?Ha:L(wa,Ha,Ha.linkRecord,qa,za,Ja),'__useDefault'in Va?Va.__useDefault:Va}throw new Error('Module '+Ya+' not declared as a System.registerDynamic dependency of '+Ga)}}function j(wa,Ga,Ua,Fa,qa,za){za.push(Ga);var Ja;if(Ua.setters)for(var Ya,Ba,Ha=0;Ha<Ua.dependencies.length;Ha++)if(Ya=Ua.dependencyInstantiations[Ha],!(Ya instanceof h)&&(Ba=Ya.linkRecord,Ba&&-1===za.indexOf(Ya)&&(Ya.evalError?Ja=Ya.evalError:Ja=j(wa,Ya,Ba,Fa,qa,Ba.setters?za:[])),Ja))return Ga.linkRecord=void 0,Ga.evalError=n(Ja,'Evaluating '+Ga.key),Ga.evalError;if(Ua.execute)if(Ua.setters)Ja=N(Ua.execute);else{var Va={id:Ga.key},Wa=Ua.moduleObj;Object.defineProperty(Va,'exports',{configurable:!0,set:function(Za){Wa.default=Wa.__useDefault=Za},get:function(){return Wa.__useDefault}});var $a=A(wa,Ga.key,Ua.dependencies,Ua.dependencyInstantiations,Fa,qa,za);if(!Ua.executingRequire)for(var Ha=0;Ha<Ua.dependencies.length;Ha++)$a(Ua.dependencies[Ha]);Ja=K(Ua.execute,$a,Wa.default,Va),Va.exports!==Wa.default&&(Wa.default=Wa.__useDefault=Va.exports);var Xa=Wa.default;if(Xa&&Xa.__esModule)for(var Qa in Xa)Object.hasOwnProperty.call(Xa,Qa)&&(Wa[Qa]=Xa[Qa])}if(Ga.linkRecord=void 0,Ja)return Ga.evalError=n(Ja,'Evaluating '+Ga.key);if(Fa[Ga.key]=Ga.module=new h(Ua.moduleObj),!Ua.setters){if(Ga.importerSetters)for(var Ha=0;Ha<Ga.importerSetters.length;Ha++)Ga.importerSetters[Ha](Ga.module);Ga.importerSetters=void 0}}function N(wa){try{wa.call(Tt)}catch(Ga){return Ga}}function K(wa,Ga,Ua,Fa){try{var qa=wa.call(ht,Ga,Ua,Fa);void 0!==qa&&(Fa.exports=qa)}catch(za){return za}}function P(){}function D(wa){return wa instanceof h?wa:wa&&wa.__esModule?new h(wa):new h({default:wa,__useDefault:wa})}function G(wa,Ga){(Ga||this.warnings&&'undefined'!=typeof console&&console.warn)&&console.warn(wa)}function U(wa,Ga,Ua){var Fa=new Uint8Array(Ga);return 0===Fa[0]&&97===Fa[1]&&115===Fa[2]?WebAssembly.compile(Ga).then(function(qa){var za=[],Ja=[],Ya={};return WebAssembly.Module.imports&&WebAssembly.Module.imports(qa).forEach(function(Ba){var Ha=Ba.module;Ja.push(function(Va){Ya[Ha]=Va}),-1===za.indexOf(Ha)&&za.push(Ha)}),wa.register(za,function(Ba){return{setters:Ja,execute:function(){Ba(new WebAssembly.Instance(qa,Ya).exports)}}}),Ua(),!0}):Promise.resolve(!1)}function F(wa,Ga){if('.'===wa[0])throw new Error('Node module '+wa+' can\\'t be loaded as it is not a package require.');if(!Dt){var Ua=this._nodeRequire('module'),Fa=decodeURI(Ga.substr(mt?8:7));Dt=new Ua(Fa),Dt.paths=Ua._nodeModulePaths(Fa)}return Dt.require(wa)}function q(wa,Ga){for(var Ua in Ga)Object.hasOwnProperty.call(Ga,Ua)&&(wa[Ua]=Ga[Ua]);return wa}function z(wa,Ga){for(var Ua in Ga)Object.hasOwnProperty.call(Ga,Ua)&&void 0===wa[Ua]&&(wa[Ua]=Ga[Ua]);return wa}function J(wa,Ga,Ua){for(var Fa in Ga)if(Object.hasOwnProperty.call(Ga,Fa)){var qa=Ga[Fa];void 0===wa[Fa]?wa[Fa]=qa:qa instanceof Array&&wa[Fa]instanceof Array?wa[Fa]=[].concat(Ua?qa:wa[Fa]).concat(Ua?wa[Fa]:qa):'object'==typeof qa&&null!==qa&&'object'==typeof wa[Fa]?wa[Fa]=(Ua?z:q)(q({},wa[Fa]),qa):!Ua&&(wa[Fa]=qa)}}function Y(wa){if(!wt&&!Gt){var Ga=new Image;return void(Ga.src=wa)}var Ua=document.createElement('link');wt?(Ua.rel='preload',Ua.as='script'):Ua.rel='prefetch',Ua.href=wa,document.head.appendChild(Ua),document.head.removeChild(Ua)}function B(wa,Ga,Ua){try{importScripts(wa)}catch(Fa){Ua(Fa)}Ga()}function H(wa,Ga,Ua,Fa,qa){function za(){Fa(),Ya()}function Ja(){Ya(),qa(new Error('Fetching '+wa))}function Ya(){for(var Ha=0;Ha<Ut.length;Ha++)if(Ut[Ha].err===Ja){Ut.splice(Ha,1);break}Ba.removeEventListener('load',za,!1),Ba.removeEventListener('error',Ja,!1),document.head.removeChild(Ba)}if(wa=wa.replace(/#/g,'%23'),Pt)return B(wa,Fa,qa);var Ba=document.createElement('script');Ba.type='text/javascript',Ba.charset='utf-8',Ba.async=!0,Ga&&(Ba.crossOrigin=Ga),Ua&&(Ba.integrity=Ua),Ba.addEventListener('load',za,!1),Ba.addEventListener('error',Ja,!1),Ba.src=wa,document.head.appendChild(Ba)}function V(wa,Ga){for(var Ua=wa.split('.');Ua.length;)Ga=Ga[Ua.shift()];return Ga}function W(wa,Ga,Ua){var Fa=X(Ga,Ua);if(Fa){var qa=Ga[Fa]+Ua.substr(Fa.length),za=s(qa,bt);return void 0===za?wa+qa:za}return-1===Ua.indexOf(':')?wa+Ua:Ua}function $(wa){var Ga=this.name;if(Ga.substr(0,wa.length)===wa&&(Ga.length===wa.length||'/'===Ga[wa.length]||'/'===wa[wa.length-1]||':'===wa[wa.length-1])){var Ua=wa.split('/').length;Ua>this.len&&(this.match=wa,this.len=Ua)}}function X(wa,Ga){if(Object.hasOwnProperty.call(wa,Ga))return Ga;var Ua={name:Ga,match:void 0,len:0};return Object.keys(wa).forEach($,Ua),Ua.match}function Z(wa,Ga,Ua,Fa){return new Promise(function(qa,za){function Ja(){qa(Fa?Ba.response:Ba.responseText)}function Ya(){za(new Error('XHR error: '+(Ba.status?' ('+Ba.status+(Ba.statusText?' '+Ba.statusText:'')+')':'')+' loading '+wa))}wa=wa.replace(/#/g,'%23');var Ba=new XMLHttpRequest;Fa&&(Ba.responseType='arraybuffer'),Ba.onreadystatechange=function(){4===Ba.readyState&&(0==Ba.status?Ba.response?Ja():(Ba.addEventListener('error',Ya),Ba.addEventListener('load',Ja)):200===Ba.status?Ja():Ya())},Ba.open('GET',wa,!0),Ba.setRequestHeader&&(Ba.setRequestHeader('Accept','application/x-es-module, */*'),Ga&&('string'==typeof Ga&&Ba.setRequestHeader('Authorization',Ga),Ba.withCredentials=!0)),Ba.send(null)})}function ae(){return{pluginKey:void 0,pluginArgument:void 0,pluginModule:void 0,packageKey:void 0,packageConfig:void 0,load:void 0}}function ne(wa,Ga,Ua){var Fa=ae();if(Ua){var qa;Ga.pluginFirst?-1!==(qa=Ua.lastIndexOf('!'))&&(Fa.pluginArgument=Fa.pluginKey=Ua.substr(0,qa)):-1!==(qa=Ua.indexOf('!'))&&(Fa.pluginArgument=Fa.pluginKey=Ua.substr(qa+1)),Fa.packageKey=X(Ga.packages,Ua),Fa.packageKey&&(Fa.packageConfig=Ga.packages[Fa.packageKey])}return Fa}function se(wa,Ga){var Ua=ge(wa.pluginFirst,Ga);if(Ua){var Fa=se.call(this,wa,Ua.plugin);return ce(wa.pluginFirst,oe.call(this,wa,Ua.argument,void 0,!1,!1),Fa)}return oe.call(this,wa,Ga,void 0,!1,!1)}function le(wa,Ga){var Ua=this[Nt],Fa=ae(),qa=qa||ne(this,Ua,Ga),za=ge(Ua.pluginFirst,wa);return za?(Fa.pluginKey=le.call(this,za.plugin,Ga),ce(Ua.pluginFirst,ie.call(this,Ua,za.argument,qa.pluginArgument||Ga,Fa,qa,!!Fa.pluginKey),Fa.pluginKey)):ie.call(this,Ua,wa,qa.pluginArgument||Ga,Fa,qa,!!Fa.pluginKey)}function oe(wa,Ga,Ua,Fa,qa){var za=s(Ga,Ua||bt);if(za)return W(wa.baseURL,wa.paths,za);if(Fa){var Ja=X(wa.map,Ga);if(Ja&&(Ga=wa.map[Ja]+Ga.substr(Ja.length),za=s(Ga,bt),za))return W(wa.baseURL,wa.paths,za)}if(this.registry.has(Ga))return Ga;if('@node/'===Ga.substr(0,6))return Ga;var Ya=qa&&'/'!==Ga[Ga.length-1],Ba=W(wa.baseURL,wa.paths,Ya?Ga+'/':Ga);return Ya?Ba.substr(0,Ba.length-1):Ba}function ie(wa,Ga,Ua,Fa,qa,za){if(qa&&qa.packageConfig&&'.'!==Ga[0]){var Ja=qa.packageConfig.map,Ya=Ja&&X(Ja,Ga);if(Ya&&'string'==typeof Ja[Ya]){var Ba=ye(this,wa,qa.packageConfig,qa.packageKey,Ya,Ga,Fa,za);if(Ba)return Ba}}var Ha=oe.call(this,wa,Ga,Ua,!0,!0),Va=ve(wa,Ha);if(Fa.packageKey=Va&&Va.packageKey||X(wa.packages,Ha),!Fa.packageKey)return Ha;if(-1!==wa.packageConfigKeys.indexOf(Ha))return Fa.packageKey=void 0,Ha;Fa.packageConfig=wa.packages[Fa.packageKey]||(wa.packages[Fa.packageKey]=je());var Wa=Ha.substr(Fa.packageKey.length+1);return me(this,wa,Fa.packageConfig,Fa.packageKey,Wa,Fa,za)}function de(wa,Ga,Ua,Fa,qa,za){var Ja=this;return Lt.then(function(){if(qa&&qa.packageConfig&&'./'!==Ga.substr(0,2)){var Ya=qa.packageConfig.map,Ba=Ya&&X(Ya,Ga);if(Ba)return ke(Ja,wa,qa.packageConfig,qa.packageKey,Ba,Ga,Fa,za)}return Lt}).then(function(Ya){if(Ya)return Ya;var Ba=oe.call(Ja,wa,Ga,Ua,!0,!0),Ha=ve(wa,Ba);if(Fa.packageKey=Ha&&Ha.packageKey||X(wa.packages,Ba),!Fa.packageKey)return Promise.resolve(Ba);if(-1!==wa.packageConfigKeys.indexOf(Ba))return Fa.packageKey=void 0,Fa.load=pe(),Fa.load.format='json',Fa.load.loader='',Promise.resolve(Ba);Fa.packageConfig=wa.packages[Fa.packageKey]||(wa.packages[Fa.packageKey]=je());var Va=Ha&&!Fa.packageConfig.configured;return(Va?Ee(Ja,wa,Ha.configPath,Fa):Lt).then(function(){var Wa=Ba.substr(Fa.packageKey.length+1);return be(Ja,wa,Fa.packageConfig,Fa.packageKey,Wa,Fa,za)})})}function pe(){return{extension:'',deps:void 0,format:void 0,loader:void 0,scriptLoad:void 0,globals:void 0,nonce:void 0,integrity:void 0,sourceMap:void 0,exports:void 0,encapsulateGlobal:!1,crossOrigin:void 0,cjsRequireDetection:!0,cjsDeferDepsExecute:!1,esModule:!1}}function ue(wa,Ga,Ua){Ua.load=Ua.load||pe();var qa,Fa=0;for(var za in wa.meta)if(qa=za.indexOf('*'),-1!==qa&&za.substr(0,qa)===Ga.substr(0,qa)&&za.substr(qa+1)===Ga.substr(Ga.length-za.length+qa+1)){var Ja=za.split('/').length;Ja>Fa&&(Fa=Ja),J(Ua.load,wa.meta[za],Fa!==Ja)}if(wa.meta[Ga]&&J(Ua.load,wa.meta[Ga],!1),Ua.packageKey){var Ya=Ga.substr(Ua.packageKey.length+1),Ba={};if(Ua.packageConfig.meta){var Fa=0;Se(Ua.packageConfig.meta,Ya,function(Ha,Va,Wa){Wa>Fa&&(Fa=Wa),J(Ba,Va,Wa&&Fa>Wa)}),J(Ua.load,Ba,!1)}!Ua.packageConfig.format||Ua.pluginKey||Ua.load.loader||(Ua.load.format=Ua.load.format||Ua.packageConfig.format)}}function ge(wa,Ga){var Ua,Fa,qa=wa?Ga.indexOf('!'):Ga.lastIndexOf('!');if(-1!==qa)return wa?(Ua=Ga.substr(qa+1),Fa=Ga.substr(0,qa)):(Ua=Ga.substr(0,qa),Fa=Ga.substr(qa+1)||Ua.substr(Ua.lastIndexOf('.')+1)),{argument:Ua,plugin:Fa}}function ce(wa,Ga,Ua){return wa?Ua+'!'+Ga:Ga+'!'+Ua}function fe(wa,Ga,Ua,Fa,qa){if(!Fa||!Ga.defaultExtension||'/'===Fa[Fa.length-1]||qa)return Fa;var za=!1;if(Ga.meta&&Se(Ga.meta,Fa,function(Ya,Ba,Ha){if(0===Ha||Ya.lastIndexOf('*')!==Ya.length-1)return za=!0}),!za&&wa.meta&&Se(wa.meta,Ua+'/'+Fa,function(Ya,Ba,Ha){if(0===Ha||Ya.lastIndexOf('*')!==Ya.length-1)return za=!0}),za)return Fa;var Ja='.'+Ga.defaultExtension;return Fa.substr(Fa.length-Ja.length)===Ja?Fa:Fa+Ja}function me(wa,Ga,Ua,Fa,qa,za,Ja){if(!qa)if(Ua.main)qa='./'===Ua.main.substr(0,2)?Ua.main.substr(2):Ua.main;else return Fa;if(Ua.map){var Ya='./'+qa,Ba=X(Ua.map,Ya);if(Ba||(Ya='./'+fe(Ga,Ua,Fa,qa,Ja),Ya!='./'+qa&&(Ba=X(Ua.map,Ya))),Ba){var Ha=ye(wa,Ga,Ua,Fa,Ba,Ya,za,Ja);if(Ha)return Ha}}return Fa+'/'+fe(Ga,Ua,Fa,qa,Ja)}function he(wa,Ga,Ua){return Ga.substr(0,wa.length)===wa&&Ua.length>wa.length?!1:!0}function ye(wa,Ga,Ua,Fa,qa,za,Ja,Ya){'/'===za[za.length-1]&&(za=za.substr(0,za.length-1));var Ba=Ua.map[qa];if('object'==typeof Ba)throw new Error('Synchronous conditional normalization not supported sync normalizing '+qa+' in '+Fa);return he(qa,Ba,za)&&'string'==typeof Ba?ie.call(wa,Ga,Ba+za.substr(qa.length),Fa+'/',Ja,Ja,Ya):void 0}function be(wa,Ga,Ua,Fa,qa,za,Ja){if(!qa)if(Ua.main)qa='./'===Ua.main.substr(0,2)?Ua.main.substr(2):Ua.main;else return Promise.resolve(Fa);var Ya,Ba;return Ua.map&&(Ya='./'+qa,Ba=X(Ua.map,Ya),!Ba&&(Ya='./'+fe(Ga,Ua,Fa,qa,Ja),Ya!=='./'+qa&&(Ba=X(Ua.map,Ya)))),(Ba?ke(wa,Ga,Ua,Fa,Ba,Ya,za,Ja):Lt).then(function(Ha){return Ha?Promise.resolve(Ha):Promise.resolve(Fa+'/'+fe(Ga,Ua,Fa,qa,Ja))})}function ke(wa,Ga,Ua,Fa,qa,za,Ja,Ya){'/'===za[za.length-1]&&(za=za.substr(0,za.length-1));var Ba=Ua.map[qa];if('string'==typeof Ba)return he(qa,Ba,za)?de.call(wa,Ga,Ba+za.substr(qa.length),Fa+'/',Ja,Ja,Ya).then(function(Xa){return Oe.call(wa,Xa,Fa+'/',Ja)}):Lt;var Ha=[],Va=[];for(var Wa in Ba){var $a=Re(Wa);Va.push({condition:$a,map:Ba[Wa]}),Ha.push(k.prototype.import.call(wa,$a.module,Fa))}return Promise.all(Ha).then(function(Xa){for(var Qa=0;Qa<Va.length;Qa++){var Za=Va[Qa].condition,en=V(Za.prop,'__useDefault'in Xa[Qa]?Xa[Qa].__useDefault:Xa[Qa]);if(!Za.negate&&en||Za.negate&&!en)return Va[Qa].map}}).then(function(Xa){if(Xa)return he(qa,Xa,za)?de.call(wa,Ga,Xa+za.substr(qa.length),Fa+'/',Ja,Ja,Ya).then(function(Qa){return Oe.call(wa,Qa,Fa+'/',Ja)}):Lt})}function xe(wa){var Ga=wa.lastIndexOf('*'),Ua=Math.max(Ga+1,wa.lastIndexOf('/'));return{length:Ua,regEx:new RegExp('^('+wa.substr(0,Ua).replace(/[.+?^${}()|[\\]\\\\]/g,'\\\\$&').replace(/\\*/g,'[^\\\\/]+')+')(\\\\/|$)'),wildcard:-1!==Ga}}function ve(wa,Ga){for(var Ua,qa,Fa=!1,za=0;za<wa.packageConfigPaths.length;za++){var Ja=wa.packageConfigPaths[za],Ya=Ht[Ja]||(Ht[Ja]=xe(Ja));if(!(Ga.length<Ya.length)){var Ba=Ga.match(Ya.regEx);Ba&&(!Ua||!(Fa&&Ya.wildcard)&&Ua.length<Ba[1].length)&&(Ua=Ba[1],Fa=!Ya.wildcard,qa=Ua+Ja.substr(Ya.length))}}return Ua?{packageKey:Ua,configPath:qa}:void 0}function Ee(wa,Ga,Ua,Fa){var za=wa.pluginLoader||wa;return-1===Ga.packageConfigKeys.indexOf(Ua)&&Ga.packageConfigKeys.push(Ua),za.import(Ua).then(function(Ja){Ne(Fa.packageConfig,Ja,Fa.packageKey,!0,Ga),Fa.packageConfig.configured=!0}).catch(function(Ja){throw n(Ja,'Unable to fetch package configuration file '+Ua)})}function Se(wa,Ga,Ua){var Fa;for(var qa in wa){var za='./'===qa.substr(0,2)?'./':'';if(za&&(qa=qa.substr(2)),Fa=qa.indexOf('*'),-1!==Fa&&qa.substr(0,Fa)===Ga.substr(0,Fa)&&qa.substr(Fa+1)===Ga.substr(Ga.length-qa.length+Fa+1)&&Ua(qa,wa[za+qa],qa.split('/').length))return}var Ja=wa[Ga]&&Object.hasOwnProperty.call(wa,Ga)?wa[Ga]:wa['./'+Ga];Ja&&Ua(Ja,Ja,0)}function Re(wa){var Ga,Ua,Fa,Fa,qa=wa.lastIndexOf('|');return-1===qa?(Fa='~'===wa[0],Ga='default',Ua=wa.substr(Fa),-1!==Vt.indexOf(Ua)&&(Ga=Ua,Ua=null)):(Ga=wa.substr(qa+1),Ua=wa.substr(0,qa),'~'===Ga[0]&&(Fa=!0,Ga=Ga.substr(1))),{module:Ua||'@system-env',prop:Ga,negate:Fa}}function Ie(wa,Ga,Ua){return k.prototype.import.call(this,wa.module,Ga).then(function(Fa){var qa=V(wa.prop,Fa);if(Ua&&'boolean'!=typeof qa)throw new TypeError('Condition did not resolve to a boolean.');return wa.negate?!qa:qa})}function Oe(wa,Ga){var Fa=wa.match(Wt);if(!Fa)return Promise.resolve(wa);var qa=Re.call(this,Fa[0].substr(2,Fa[0].length-3));return Ie.call(this,qa,Ga,!1).then(function(za){if('string'!=typeof za)throw new TypeError('The condition value for '+wa+' doesn\\'t resolve to a string.');if(-1!==za.indexOf('/'))throw new TypeError('Unabled to interpolate conditional '+wa+(Ga?' in '+Ga:'')+'\\n\\tThe condition value '+za+' cannot contain a \"/\" separator.');return wa.replace(Wt,za)})}function Ce(wa,Ga,Ua){for(var qa,Fa=0;Fa<$t.length;Fa++)qa=$t[Fa],Ga[qa]&&ja[qa.substr(0,qa.length-6)]&&Ua(Ga[qa])}function Me(wa,Ga){var Ua={};for(var Fa in wa){var qa=wa[Fa];1<Ga?qa instanceof Array?Ua[Fa]=[].concat(qa):'object'==typeof qa?Ua[Fa]=Me(qa,Ga-1):'packageConfig'!=Fa&&(Ua[Fa]=qa):Ua[Fa]=qa}return Ua}function Te(wa,Ga){var Ua=wa[Ga];return Ua instanceof Array?wa[Ga].concat([]):'object'==typeof Ua?Me(Ua,3):wa[Ga]}function je(){return{defaultExtension:void 0,main:void 0,format:void 0,meta:void 0,map:void 0,packageConfig:void 0,configured:!1}}function Ne(wa,Ga,Ua,Fa,qa){for(var za in Ga)'main'===za||'format'===za||'defaultExtension'===za||'configured'===za?Fa&&void 0!==wa[za]||(wa[za]=Ga[za]):'map'===za?(Fa?z:q)(wa.map=wa.map||{},Ga.map):'meta'===za?(Fa?z:q)(wa.meta=wa.meta||{},Ga.meta):Object.hasOwnProperty.call(Ga,za)&&G.call(qa,'\"'+za+'\" is not a valid package configuration option in package '+Ua);return void 0===wa.defaultExtension&&(wa.defaultExtension='js'),void 0===wa.main&&wa.map&&wa.map['.']?(wa.main=wa.map['.'],delete wa.map['.']):'object'==typeof wa.main&&(wa.map=wa.map||{},wa.map['./@main']=wa.main,wa.main['default']=wa.main['default']||'./',wa.main='@main'),wa}function Ke(wa){return Xt?Qt+new Buffer(wa).toString('base64'):'undefined'==typeof btoa?'':Qt+btoa(unescape(encodeURIComponent(wa)))}function Pe(wa,Ga,Ua,Fa){var qa=wa.lastIndexOf('\\n');if(Ga){if('object'!=typeof Ga)throw new TypeError('load.metadata.sourceMap must be set to an object.');Ga=JSON.stringify(Ga)}return(Fa?'(function(System, SystemJS) {':'')+wa+(Fa?'\\n})(System, System);':'')+('\\n//# sourceURL='==wa.substr(qa,15)?'':'\\n//# sourceURL='+Ua+(Ga?'!transpiled':''))+(Ga&&Ke(Ga)||'')}function De(wa,Ga,Ua,Fa,qa){Zt||(Zt=document.head||document.body||document.documentElement);var za=document.createElement('script');za.text=Pe(Ga,Ua,Fa,!1);var Ya,Ja=window.onerror;if(window.onerror=function(Ba){Ya=addToError(Ba,'Evaluating '+Fa),Ja&&Ja.apply(this,arguments)},we(wa),qa&&za.setAttribute('nonce',qa),Zt.appendChild(za),Zt.removeChild(za),Ge(),window.onerror=Ja,Ya)return Ya}function we(wa){0==na++&&(aa=ht.System),ht.System=ht.SystemJS=wa}function Ge(){0==--na&&(ht.System=ht.SystemJS=aa)}function Ue(wa,Ga,Ua,Fa,qa,za,Ja){if(Ga){if(za&&ra)return De(wa,Ga,Ua,Fa,za);try{we(wa),!ea&&wa._nodeRequire&&(ea=wa._nodeRequire('vm'),ta=ea.runInThisContext('typeof System !== \\'undefined\\' && System')===wa),ta?ea.runInThisContext(Pe(Ga,Ua,Fa,!Ja),{filename:Fa+(Ua?'!transpiled':'')}):(0,eval)(Pe(Ga,Ua,Fa,!Ja)),Ge()}catch(Ya){return Ge(),Ya}}}function Fe(wa){return'file:///'===wa.substr(0,8)?wa.substr(7+!!mt):la&&wa.substr(0,la.length)===la?wa.substr(la.length):wa}function qe(wa,Ga){return Fe(this.normalizeSync(wa,Ga))}function ze(wa){var Ua,Ga=wa.lastIndexOf('!');Ua=-1===Ga?wa:wa.substr(0,Ga);var Fa=Ua.split('/');return Fa.pop(),Fa=Fa.join('/'),{filename:Fe(Ua),dirname:Fe(Fa)}}function Je(wa){function Ga(Ya,Ba){for(var Ha=0;Ha<Ya.length;Ha++)if(Ya[Ha][0]<Ba.index&&Ya[Ha][1]>Ba.index)return!0;return!1}qt.lastIndex=oa.lastIndex=ia.lastIndex=0;var Fa,Ua=[],qa=[],za=[];if(200>wa.length/wa.split('\\n').length){for(;Fa=ia.exec(wa);)qa.push([Fa.index,Fa.index+Fa[0].length]);for(;Fa=oa.exec(wa);)Ga(qa,Fa)||za.push([Fa.index+Fa[1].length,Fa.index+Fa[0].length-1])}for(;Fa=qt.exec(wa);)if(!Ga(qa,Fa)&&!Ga(za,Fa)){var Ja=Fa[1].substr(1,Fa[1].length-2);if(Ja.match(/\"|'/))continue;Ua.push(Ja)}return Ua}function Ye(wa){if(-1===da.indexOf(wa)){try{var Ga=ht[wa]}catch(Ua){da.push(wa)}this(wa,Ga)}}function Be(wa){if('string'==typeof wa)return V(wa,ht);if(!(wa instanceof Array))throw new Error('Global exports must be a string or array.');for(var Ga={},Ua=0;Ua<wa.length;Ua++)Ga[wa[Ua].split('.').pop()]=V(wa[Ua],ht);return Ga}function He(wa,Ga,Ua,Fa){var qa=ht.define;ht.define=void 0;var za;if(Ua)for(var Ja in za={},Ua)za[Ja]=ht[Ja],ht[Ja]=Ua[Ja];return Ga||(pa={},Object.keys(ht).forEach(Ye,function(Ya,Ba){pa[Ya]=Ba})),function(){var Ba,Ya=Ga?Be(Ga):{},Ha=!!Ga;if((!Ga||Fa)&&Object.keys(ht).forEach(Ye,function(Wa,$a){pa[Wa]===$a||void 0===$a||(Fa&&(ht[Wa]=void 0),!Ga&&(Ya[Wa]=$a,void 0==Ba?Ba=$a:!Ha&&Ba!==$a&&(Ha=!0)))}),Ya=Ha?Ya:Ba,za)for(var Va in za)ht[Va]=za[Va];return ht.define=qa,Ya}}function Ve(wa,Ga){wa=wa.replace(oa,'');var Ua=wa.match(ca),Fa=(Ua[1].split(',')[Ga]||'require').replace(fa,''),qa=ma[Fa]||(ma[Fa]=new RegExp(ua+Fa+ga,'g'));qa.lastIndex=0;for(var Ja,za=[];Ja=qa.exec(wa);)za.push(Ja[2]||Ja[3]);return za}function We(wa){return function(Ga,Ua,Fa){wa(Ga,Ua,Fa),Ua=Fa.exports,'object'!=typeof Ua&&'function'!=typeof Ua||'__esModule'in Ua||Object.defineProperty(Fa.exports,'__esModule',{value:!0})}}function $e(wa,Ga){ba=wa,ka=Ga,ya=void 0,ha=!1}function Xe(wa){ya?wa.registerDynamic(ba?ya[0].concat(ba):ya[0],!1,ka?We(ya[1]):ya[1]):ha&&wa.registerDynamic([],!1,P)}function Qe(wa,Ga){wa.load.esModule&&('object'==typeof Ga||'function'==typeof Ga)&&!('__esModule'in Ga)&&Object.defineProperty(Ga,'__esModule',{value:!0})}function et(wa,Ga,Ua){return Ua.pluginKey?wa.import(Ua.pluginKey).then(function(Fa){Ua.pluginModule=Fa,Ua.pluginLoad={name:Ga,address:Ua.pluginArgument,source:void 0,metadata:Ua.load},Ua.load.deps=Ua.load.deps||[]}):Lt}function tt(wa,Ga,Ua){var Fa=wa.depCache[Ua];if(Fa)for(var qa=0;qa<Fa.length;qa++)Ga.normalize(Fa[qa],Ua).then(Y);else{var za=!1;for(var Ja in wa.bundles){for(var Ya,qa=0;qa<wa.bundles[Ja].length;qa++){if(Ya=wa.bundles[Ja][qa],Ya===Ua){za=!0;break}if(-1!==Ya.indexOf('*')){var Ba=Ya.split('*');if(2!==Ba.length){wa.bundles[Ja].splice(qa--,1);continue}if(Ua.substr(0,Ba[0].length)===Ba[0]&&Ua.substr(Ua.length-Ba[1].length,Ba[1].length)===Ba[1]){za=!0;break}}}if(za)return Ga.import(Ja)}}}function at(wa,Ga,Ua,Fa,qa){return Ua.load.exports&&!Ua.load.format&&(Ua.load.format='global'),Lt.then(function(){return Ua.pluginModule&&Ua.pluginModule.locate?Promise.resolve(Ua.pluginModule.locate.call(wa,Ua.pluginLoad)).then(function(za){za&&(Ua.pluginLoad.address=za)}):void 0}).then(function(){return Ua.pluginModule?(qa=!1,Ua.pluginModule.fetch?Ua.pluginModule.fetch.call(wa,Ua.pluginLoad,function(za){return Bt(za.address,Ua.load.authorization,Ua.load.integrity,!1)}):Bt(Ua.pluginLoad.address,Ua.load.authorization,Ua.load.integrity,!1)):Bt(Ga,Ua.load.authorization,Ua.load.integrity,qa)}).then(function(za){return qa&&'string'!=typeof za?U(wa,za,Fa).then(function(Ja){if(!Ja){var Ya=ct?new TextDecoder('utf-8').decode(new Uint8Array(za)):za.toString();return nt(wa,Ga,Ya,Ua,Fa)}}):nt(wa,Ga,za,Ua,Fa)})}function nt(wa,Ga,Ua,Fa,qa){return Promise.resolve(Ua).then(function(za){return('detect'===Fa.load.format&&(Fa.load.format=void 0),dt(za,Fa),!Fa.pluginModule)?za:(Fa.pluginLoad.source=za,Fa.pluginModule.translate?Promise.resolve(Fa.pluginModule.translate.call(wa,Fa.pluginLoad,Fa.traceOpts)).then(function(Ja){if(Fa.load.sourceMap){if('object'!=typeof Fa.load.sourceMap)throw new Error('metadata.load.sourceMap must be set to an object.');lt(Fa.pluginLoad.address,Fa.load.sourceMap)}return'string'==typeof Ja?Ja:Fa.pluginLoad.source}):za)}).then(function(za){return Fa.load.format||'\"bundle\"'!==za.substring(0,8)?'register'===Fa.load.format||!Fa.load.format&&rt(za)?(Fa.load.format='register',za):'esm'!==Fa.load.format&&(Fa.load.format||!za.match(Sa))?za:(Fa.load.format='esm',ot(wa,za,Ga,Fa,qa)):(Fa.load.format='system',za)}).then(function(za){if('string'!=typeof za||!Fa.pluginModule||!Fa.pluginModule.instantiate)return za;var Ja=!1;return Fa.pluginLoad.source=za,Promise.resolve(Fa.pluginModule.instantiate.call(wa,Fa.pluginLoad,function(Ya){if(za=Ya.source,Fa.load=Ya.metadata,Ja)throw new Error('Instantiate must only be called once.');Ja=!0})).then(function(Ya){return Ja?za:D(Ya)})}).then(function(za){if('string'!=typeof za)return za;Fa.load.format||(Fa.load.format=st(za));var Ja=!1;switch(Fa.load.format){case'esm':case'register':case'system':var Ya=Ue(wa,za,Fa.load.sourceMap,Ga,Fa.load.integrity,Fa.load.nonce,!1);if(Ya)throw Ya;return qa()?void 0:At;break;case'json':var Ba=JSON.parse(za);return wa.newModule({default:Ba,__useDefault:Ba});case'amd':var Ha=ht.define;ht.define=wa.amdDefine,$e(Fa.load.deps,Fa.load.esModule);var Ya=Ue(wa,za,Fa.load.sourceMap,Ga,Fa.load.integrity,Fa.load.nonce,!1);if(Ja=qa(),Ja||(Xe(wa),Ja=qa()),ht.define=Ha,Ya)throw Ya;break;case'cjs':var Va=Fa.load.deps,Wa=(Fa.load.deps||[]).concat(Fa.load.cjsRequireDetection?Je(za):[]);for(var $a in Fa.load.globals)Fa.load.globals[$a]&&Wa.push(Fa.load.globals[$a]);wa.registerDynamic(Wa,!0,function(Qa,Za,en){if(Qa.resolve=function(dn){return qe.call(wa,dn,en.id)},en.paths=[],en.require=Qa,!Fa.load.cjsDeferDepsExecute&&Va)for(var tn=0;tn<Va.length;tn++)Qa(Va[tn]);var an=ze(en.id),nn={exports:Za,args:[Qa,Za,en,an.filename,an.dirname,ht,ht]},rn='(function (require, exports, module, __filename, __dirname, global, GLOBAL';if(Fa.load.globals)for(var sn in Fa.load.globals)nn.args.push(Qa(Fa.load.globals[sn])),rn+=', '+sn;var ln=ht.define;ht.define=void 0,ht.__cjsWrapper=nn,za=rn+') {'+za.replace(_a,'')+'\\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);';var on=Ue(wa,za,Fa.load.sourceMap,Ga,Fa.load.integrity,Fa.load.nonce,!1);if(on)throw on;Qe(Fa,Za),ht.__cjsWrapper=void 0,ht.define=ln}),Ja=qa();break;case'global':var Wa=Fa.load.deps||[];for(var $a in Fa.load.globals){var Xa=Fa.load.globals[$a];Xa&&Wa.push(Xa)}wa.registerDynamic(Wa,!1,function(Qa,Za,en){var tn;if(Fa.load.globals)for(var an in tn={},Fa.load.globals)Fa.load.globals[an]&&(tn[an]=Qa(Fa.load.globals[an]));var nn=Fa.load.exports;nn&&(za+='\\n'+Ea+'[\"'+nn+'\"] = '+nn+';');var rn=He(en.id,nn,tn,Fa.load.encapsulateGlobal),sn=Ue(wa,za,Fa.load.sourceMap,Ga,Fa.load.integrity,Fa.load.nonce,!0);if(sn)throw sn;var ln=rn();return Qe(Fa,ln),ln}),Ja=qa();break;default:throw new TypeError('Unknown module format \"'+Fa.load.format+'\" for \"'+Ga+'\".'+('es6'===Fa.load.format?' Use \"esm\" instead here.':''));}if(!Ja)throw new Error('Module '+Ga+' detected as '+Fa.load.format+' but didn\\'t execute correctly.')})}function rt(wa){var Ga=wa.match(Ra);return Ga&&'System.register'===wa.substr(Ga[0].length,15)}function st(wa){return wa.match(Ia)?'amd':(Oa.lastIndex=0,qt.lastIndex=0,qt.exec(wa)||Oa.exec(wa)?'cjs':'global')}function lt(wa,Ga){var Ua=wa.split('!')[0];Ga.file&&Ga.file!=wa||(Ga.file=Ua+'!transpiled'),Ga.sources&&(!(1>=Ga.sources.length)||Ga.sources[0]&&Ga.sources[0]!==wa)||(Ga.sources=[Ua])}function ot(wa,Ga,Ua,Fa){if(!wa.transpiler)throw new TypeError('Unable to dynamically transpile ES module\\n   A loader plugin needs to be configured via `SystemJS.config({ transpiler: \\'transpiler-module\\' })`.');if(Fa.load.deps){for(var za='',Ja=0;Ja<Fa.load.deps.length;Ja++)za+='import \"'+Fa.load.deps[Ja]+'\"; ';Ga=za+Ga}return wa.import.call(wa,wa.transpiler).then(function(Ya){if(Ya=Ya.__useDefault||Ya,!Ya.translate)throw new Error(wa.transpiler+' is not a valid transpiler plugin.');return Ya===Fa.pluginModule?Ga:('string'==typeof Fa.load.sourceMap&&(Fa.load.sourceMap=JSON.parse(Fa.load.sourceMap)),Fa.pluginLoad=Fa.pluginLoad||{name:Ua,address:Ua,source:Ga,metadata:Fa.load},Fa.load.deps=Fa.load.deps||[],Promise.resolve(Ya.translate.call(wa,Fa.pluginLoad,Fa.traceOpts)).then(function(Ba){var Ha=Fa.load.sourceMap;return Ha&&'object'==typeof Ha&&lt(Ua,Ha),'esm'===Fa.load.format&&rt(Ba)&&(Fa.load.format='register'),Ba}))},function(Ya){throw n(Ya,'Unable to load transpiler to transpile '+Ua)})}function it(wa,Ga,Ua){for(var qa,Fa=Ga.split('.');1<Fa.length;)qa=Fa.shift(),wa=wa[qa]=wa[qa]||{};qa=Fa.shift(),void 0===wa[qa]&&(wa[qa]=Ua)}function dt(wa,Ga){var Ua=wa.match(Ca);if(Ua)for(var Fa=Ua[0].match(Ma),qa=0;qa<Fa.length;qa++){var za=Fa[qa],Ja=za.length,Ya=za.substr(0,1);if(';'==za.substr(Ja-1,1)&&Ja--,'\"'==Ya||'\\''==Ya){var Ba=za.substr(1,za.length-3),Ha=Ba.substr(0,Ba.indexOf(' '));if(Ha){var Va=Ba.substr(Ha.length+1,Ba.length-Ha.length-1);'deps'===Ha&&(Ha='deps[]'),'[]'===Ha.substr(Ha.length-2,2)?(Ha=Ha.substr(0,Ha.length-2),Ga.load[Ha]=Ga.load[Ha]||[],Ga.load[Ha].push(Va)):'use'!==Ha&&it(Ga.load,Ha,Va)}else Ga.load[Ba]=!0}}}function pt(){k.call(this),this._loader={},this[Kt]={},this[Nt]={baseURL:bt,paths:{},packageConfigPaths:[],packageConfigKeys:[],map:{},packages:{},depCache:{},meta:{},bundles:{},production:!1,transpiler:void 0,loadedBundles:{},warnings:!1,pluginFirst:!1,wasm:!1},this.scriptSrc=Ta,this._nodeRequire=va,this.registry.set('@empty',At),ut.call(this,!1,!1),sa(this)}function ut(wa,Ga){this[Nt].production=wa,this.registry.set('@system-env',ja=this.newModule({browser:ct,node:!!this._nodeRequire,production:!Ga&&wa,dev:Ga||!wa,build:Ga,default:!0}))}function gt(wa,Ga){G.call(wa[Nt],'SystemJS.'+Ga+' is deprecated for SystemJS.registry.'+Ga)}var bt,ct='undefined'!=typeof window&&'undefined'!=typeof document,ft='undefined'!=typeof process&&process.versions&&process.versions.node,mt='undefined'!=typeof process&&'string'==typeof process.platform&&process.platform.match(/^win/),ht='undefined'==typeof self?global:self,yt='undefined'!=typeof Symbol;if(!('undefined'!=typeof document&&document.getElementsByTagName))'undefined'!=typeof location&&(bt=location.href);else if(bt=document.baseURI,!bt){var kt=document.getElementsByTagName('base');bt=kt[0]&&kt[0].href||window.location.href}if(bt){bt=bt.split('#')[0].split('?')[0];var xt=bt.lastIndexOf('/');-1!==xt&&(bt=bt.substr(0,xt+1))}else if('undefined'!=typeof process&&process.cwd)bt='file://'+(mt?'/':'')+process.cwd(),mt&&(bt=bt.replace(/\\\\/g,'/'));else throw new TypeError('No environment baseURI');'/'!==bt[bt.length-1]&&(bt+='/');var vt='_'==new Error(0,'_').fileName,Et=Promise.resolve();o.prototype.constructor=o,o.prototype.import=function(wa,Ga){if('string'!=typeof wa)throw new TypeError('Loader import method must be passed a module key string');var Ua=this;return Et.then(function(){return Ua[Rt](wa,Ga)}).then(d).catch(function(Fa){throw n(Fa,'Loading '+wa+(Ga?' from '+Ga:''))})};var St=o.resolve=t('resolve'),Rt=o.resolveInstantiate=t('resolveInstantiate');o.prototype[Rt]=function(wa,Ga){var Ua=this;return Ua.resolve(wa,Ga).then(function(Fa){return Ua.registry.get(Fa)})},o.prototype.resolve=function(wa,Ga){var Ua=this;return Et.then(function(){return Ua[St](wa,Ga)}).then(u).catch(function(Fa){throw n(Fa,'Resolving '+wa+(Ga?' to '+Ga:''))})};var It='undefined'!=typeof Symbol&&Symbol.iterator,Ot=t('registry');It&&(f.prototype[Symbol.iterator]=function(){return this.entries()[Symbol.iterator]()},f.prototype.entries=function(){var wa=this[Ot];return l(Object.keys(wa).map(function(Ga){return[Ga,wa[Ga]]}))}),f.prototype.keys=function(){return l(Object.keys(this[Ot]))},f.prototype.values=function(){var wa=this[Ot];return l(Object.keys(wa).map(function(Ga){return wa[Ga]}))},f.prototype.get=function(wa){return this[Ot][wa]},f.prototype.set=function(wa,Ga){if(!(Ga instanceof h))throw new Error('Registry must be set with an instance of Module Namespace');return this[Ot][wa]=Ga,this},f.prototype.has=function(wa){return Object.hasOwnProperty.call(this[Ot],wa)},f.prototype.delete=function(wa){return!!Object.hasOwnProperty.call(this[Ot],wa)&&(delete this[Ot][wa],!0)};var _t=t('baseObject');h.prototype=Object.create(null),'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(h.prototype,Symbol.toStringTag,{value:'Module'});var Ct=t('register-internal');k.prototype=Object.create(o.prototype),k.prototype.constructor=k;var Mt=k.instantiate=t('instantiate');k.prototype[k.resolve=o.resolve]=function(wa,Ga){return s(wa,Ga||bt)},k.prototype[Mt]=function(){},k.prototype[o.resolveInstantiate]=function(wa,Ga){var Ua=this,Fa=this[Ct],qa=this.registry[Ot];return E(Ua,wa,Ga,qa,Fa).then(function(za){if(za instanceof h)return za;var Ja=za.linkRecord;if(!Ja){if(za.module)return za.module;throw za.evalError}return M(Ua,za,Ja,qa,Fa).then(function(){return L(Ua,za,Ja,qa,Fa,void 0)})})},k.prototype.register=function(wa,Ga,Ua){var Fa=this[Ct];if(void 0===Ua)Fa.lastRegister=[wa,Ga,void 0];else{var qa=Fa.records[wa]||x(Fa,wa,void 0);qa.registration=[Ga,Ua,void 0]}},k.prototype.registerDynamic=function(wa,Ga,Ua,Fa){var qa=this[Ct];if('string'!=typeof wa)qa.lastRegister=[wa,Ga,Ua];else{var za=qa.records[wa]||x(qa,wa,void 0);za.registration=[Ga,Ua,Fa]}},T.prototype.import=function(wa){return this.loader.trace&&this.loader.loads[this.key].dynamicDeps.push(wa),this.loader.import(wa,this.key)};var Tt={};Object.freeze&&Object.freeze(Tt);var jt,Dt,Lt=Promise.resolve(),At=new h({}),Nt=t('loader-config'),Kt=t('metadata'),Pt='undefined'==typeof window&&'undefined'!=typeof self&&'undefined'!=typeof importScripts,wt=!1,Gt=!1;if(ct&&function(){var wa=document.createElement('link').relList;if(wa&&wa.supports){Gt=!0;try{wt=wa.supports('preload')}catch(Ga){}}}(),ct){var Ut=[],Ft=window.onerror;window.onerror=function(Ga,Ua){for(var Fa=0;Fa<Ut.length;Fa++)if(Ut[Fa].src===Ua)return void Ut[Fa].err(Ga);Ft&&Ft.apply(this,arguments)}}var zt,Jt,qt=/(?:^\\uFEFF?|[^$_a-zA-Z\\xA0-\\uFFFF.\"'])require\\s*\\(\\s*(\"[^\"\\\\]*(?:\\\\.[^\"\\\\]*)*\"|'[^'\\\\]*(?:\\\\.[^'\\\\]*)*')\\s*\\)/g,Yt='undefined'!=typeof XMLHttpRequest;Jt='undefined'!=typeof self&&'undefined'!=typeof self.fetch?function(wa,Ga,Ua,Fa){if('file:///'===wa.substr(0,8)){if(Yt)return Z(wa,Ga,Ua,Fa);throw new Error('Unable to fetch file URLs in this environment.')}wa=wa.replace(/#/g,'%23');var qa={headers:{Accept:'application/x-es-module, */*'}};Ua&&(qa.integrity=Ua),Ga&&('string'==typeof Ga&&(qa.headers.Authorization=Ga),qa.credentials='include');var za;return za='undefined'!=typeof self&&'undefined'!=typeof self.systemjs_fetch?self.systemjs_fetch:fetch,za(wa,qa).then(function(Ja){if(Ja.ok)return Fa?Ja.arrayBuffer():Ja.text();throw new Error('Fetch error: '+Ja.status+' '+Ja.statusText)})}:Yt?Z:'undefined'!=typeof require&&'undefined'!=typeof process?function(wa,Ga,Ua,Fa){return'file:///'==wa.substr(0,8)?(zt=zt||require('fs'),wa=mt?wa.replace(/\\//g,'\\\\').substr(8):wa.substr(7),new Promise(function(qa,za){zt.readFile(wa,function(Ja,Ya){if(Ja)return za(Ja);if(Fa)qa(Ya);else{var Ba=Ya+'';'\\uFEFF'===Ba[0]&&(Ba=Ba.substr(1)),qa(Ba)}})})):Promise.reject(new Error('Unable to fetch \"'+wa+'\". Only file URLs of the form file:/// supported running in Node.'))}:function(){throw new Error('No fetch method is defined for this environment.')};var Bt=Jt,Ht={},Vt=['browser','node','dev','build','production','default'],Wt=/#\\{[^\\}]+\\}/,$t=['browserConfig','nodeConfig','devConfig','buildConfig','productionConfig'],Xt='undefined'!=typeof Buffer;try{Xt&&'YQ=='!==new Buffer('a').toString('base64')&&(Xt=!1)}catch(wa){Xt=!1}var Zt,ea,ta,aa,Qt='\\n//# sourceMappingURL=data:application/json;base64,',na=0,ra=!1;ct&&'undefined'!=typeof document&&document.getElementsByTagName&&!(window.chrome&&window.chrome.extension||navigator.userAgent.match(/^Node\\.js/))&&(ra=!0);var la,sa=function(wa){function Ga(Fa,qa,za,Ja){if('object'==typeof Fa&&!(Fa instanceof Array))return Ga.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if('string'==typeof Fa&&'function'==typeof qa&&(Fa=[Fa]),Fa instanceof Array){for(var Ya=[],Ba=0;Ba<Fa.length;Ba++)Ya.push(wa.import(Fa[Ba],Ja));Promise.all(Ya).then(function(Wa){qa&&qa.apply(null,Wa)},za)}else{if('string'==typeof Fa){var Ha=wa.decanonicalize(Fa,Ja),Va=wa.get(Ha);if(!Va)throw new Error('Module not already loaded loading \"'+Fa+'\" as '+Ha+(Ja?' from \"'+Ja+'\".':'.'));return'__useDefault'in Va?Va.__useDefault:Va}throw new TypeError('Invalid require')}}function Ua(Fa,qa,za){function Ja(Va,Wa,$a){for(var Xa=[],Qa=0;Qa<qa.length;Qa++)Xa.push(Va(qa[Qa]));if($a.uri=$a.id,$a.config=P,-1!==Ha&&Xa.splice(Ha,0,$a),-1!==Ba&&Xa.splice(Ba,0,Wa),-1!==Ya){var Za=function(an,nn,rn){return'string'==typeof an&&'function'!=typeof nn?Va(an):Ga.call(wa,an,nn,rn,$a.id)};Za.toUrl=function(an){return wa.normalizeSync(an,$a.id)},Xa.splice(Ya,0,Za)}var en=ht.require;ht.require=Ga;var tn=za.apply(-1===Ba?ht:Wa,Xa);ht.require=en,'undefined'!=typeof tn&&($a.exports=tn)}'string'!=typeof Fa&&(za=qa,qa=Fa,Fa=null),qa instanceof Array||(za=qa,qa=['require','exports','module'].splice(0,za.length)),'function'!=typeof za&&(za=function(Va){return function(){return Va}}(za)),!Fa&&ba&&(qa=qa.concat(ba),ba=void 0);var Ya,Ba,Ha;-1!==(Ya=qa.indexOf('require'))&&(qa.splice(Ya,1),!Fa&&(qa=qa.concat(Ve(za.toString(),Ya)))),-1!==(Ba=qa.indexOf('exports'))&&qa.splice(Ba,1),-1!==(Ha=qa.indexOf('module'))&&qa.splice(Ha,1),Fa?(wa.registerDynamic(Fa,qa,!1,Ja),ya?(ya=void 0,ha=!0):!ha&&(ya=[qa,Ja])):wa.registerDynamic(qa,!1,ka?We(Ja):Ja)}wa.set('@@cjs-helpers',wa.newModule({requireResolve:qe.bind(wa),getPathVars:ze})),wa.set('@@global-helpers',wa.newModule({prepareGlobal:He})),Ua.amd={},wa.amdDefine=Ua,wa.amdRequire=Ga};'undefined'!=typeof window&&'undefined'!=typeof document&&window.location&&(la=location.protocol+'//'+location.hostname+(location.port?':'+location.port:''));var pa,ya,ba,va,oa=/(^|[^\\\\])(\\/\\*([\\s\\S]*?)\\*\\/|([^:]|^)\\/\\/(.*)$)/mg,ia=/(\"[^\"\\\\\\n\\r]*(\\\\.[^\"\\\\\\n\\r]*)*\"|'[^'\\\\\\n\\r]*(\\\\.[^'\\\\\\n\\r]*)*')/g,da=['_g','sessionStorage','localStorage','clipboardData','frames','frameElement','external','mozAnimationStartTime','webkitStorageInfo','webkitIndexedDB','mozInnerScreenY','mozInnerScreenX'],ua='(?:^|[^$_a-zA-Z\\\\xA0-\\\\uFFFF.])',ga='\\\\s*\\\\(\\\\s*(\"([^\"]+)\"|\\'([^\\']+)\\')\\\\s*\\\\)',ca=/\\(([^\\)]*)\\)/,fa=/^\\s+|\\s+$/g,ma={},ha=!1,ka=!1,xa=(ct||Pt)&&'undefined'!=typeof navigator&&navigator.userAgent&&!navigator.userAgent.match(/MSIE (9|10).0/);'undefined'==typeof require||'undefined'==typeof process||process.browser||(va=require);var Ta,Ea='undefined'==typeof self?'global':'self',Sa=/(^\\s*|[}\\);\\n]\\s*)(import\\s*(['\"]|(\\*\\s+as\\s+)?(?!type)([^\"'\\(\\)\\n; ]+)\\s*from\\s*['\"]|\\{)|export\\s+\\*\\s+from\\s+[\"']|export\\s*(\\{|default|function|class|var|const|let|async\\s+function))/,Ra=/^(\\s*\\/\\*[^\\*]*(\\*(?!\\/)[^\\*]*)*\\*\\/|\\s*\\/\\/[^\\n]*|\\s*\"[^\"]+\"\\s*;?|\\s*'[^']+'\\s*;?)*\\s*/,Ia=/(?:^\\uFEFF?|[^$_a-zA-Z\\xA0-\\uFFFF.])define\\s*\\(\\s*(\"[^\"]+\"\\s*,\\s*|'[^']+'\\s*,\\s*)?\\s*(\\[(\\s*((\"[^\"]+\"|'[^']+')\\s*,|\\/\\/.*\\r?\\n|\\/\\*(.|\\s)*?\\*\\/))*(\\s*(\"[^\"]+\"|'[^']+')\\s*,?)?(\\s*(\\/\\/.*\\r?\\n|\\/\\*(.|\\s)*?\\*\\/))*\\s*\\]|function\\s*|{|[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*\\))/,Oa=/(?:^\\uFEFF?|[^$_a-zA-Z\\xA0-\\uFFFF.])(exports\\s*(\\[['\"]|\\.)|module(\\.exports|\\['exports'\\]|\\[\"exports\"\\])\\s*(\\[['\"]|[=,\\.]))/,_a=/^\\#\\!.*/,Ca=/^(\\s*\\/\\*[^\\*]*(\\*(?!\\/)[^\\*]*)*\\*\\/|\\s*\\/\\/[^\\n]*|\\s*\"[^\"]+\"\\s*;?|\\s*'[^']+'\\s*;?)+/,Ma=/\\/\\*[^\\*]*(\\*(?!\\/)[^\\*]*)*\\*\\/|\\/\\/[^\\n]*|\"[^\"]+\"\\s*;?|'[^']+'\\s*;?/g;if('undefined'==typeof Promise)throw new Error('SystemJS needs a Promise polyfill.');if('undefined'!=typeof document){var La=document.getElementsByTagName('script'),Aa=La[La.length-1];document.currentScript&&(Aa.defer||Aa.async)&&(Aa=document.currentScript),Ta=Aa&&Aa.src}else if('undefined'!=typeof importScripts)try{throw new Error('_')}catch(wa){wa.stack.replace(/(?:at|@).*(http.+):[\\d]+:[\\d]+/,function(Ga,Ua){Ta=Ua})}else'undefined'!=typeof __filename&&(Ta=__filename);var ja;pt.prototype=Object.create(k.prototype),pt.prototype.constructor=pt,pt.prototype[pt.resolve=k.resolve]=pt.prototype.normalize=function(wa,Ga){var Ua=this[Nt],Fa=ae(),qa=ne(this,Ua,Ga),za=this;return Promise.resolve().then(function(){var Ja=wa.lastIndexOf('#?');if(-1===Ja)return Promise.resolve(wa);var Ya=Re.call(za,wa.substr(Ja+2));return Ie.call(za,Ya,Ga,!0).then(function(Ba){return Ba?wa.substr(0,Ja):'@empty'})}).then(function(Ja){var Ya=ge(Ua.pluginFirst,Ja);return Ya?(Fa.pluginKey=Ya.plugin,Promise.all([de.call(za,Ua,Ya.argument,qa&&qa.pluginArgument||Ga,Fa,qa,!0),za.resolve(Ya.plugin,Ga)]).then(function(Ba){if(Fa.pluginArgument=Ba[0],Fa.pluginKey=Ba[1],Fa.pluginArgument===Fa.pluginKey)throw new Error('Plugin '+Fa.pluginArgument+' cannot load itself, make sure it is excluded from any wildcard meta configuration via a custom loader: false rule.');return ce(Ua.pluginFirst,Ba[0],Ba[1])})):de.call(za,Ua,Ja,qa&&qa.pluginArgument||Ga,Fa,qa,!1)}).then(function(Ja){return Oe.call(za,Ja,Ga,qa)}).then(function(Ja){return ue.call(za,Ua,Ja,Fa),Fa.pluginKey||!Fa.load.loader?Ja:za.resolve(Fa.load.loader,Ja).then(function(Ya){return Fa.pluginKey=Ya,Fa.pluginArgument=Ja,Ja})}).then(function(Ja){return za[Kt][Ja]=Fa,Ja})},pt.prototype.load=function(wa,Ga){return G.call(this[Nt],'System.load is deprecated.'),this.import(wa,Ga)},pt.prototype.decanonicalize=pt.prototype.normalizeSync=pt.prototype.resolveSync=le,pt.prototype[pt.instantiate=k.instantiate]=function(wa,Ga){var Ua=this,Fa=this[Nt];return(tt(Fa,this,wa)||Lt).then(function(){if(!Ga()){var qa=Ua[Kt][wa];if('@node/'===wa.substr(0,6)){if(!Ua._nodeRequire)throw new TypeError('Error loading '+wa+'. Can only load node core modules in Node.');return Ua.registerDynamic([],!1,function(){return F.call(Ua,wa.substr(6),Ua.baseURL)}),void Ga()}return qa.load.scriptLoad?(qa.load.pluginKey||!xa)&&(qa.load.scriptLoad=!1,G.call(Fa,'scriptLoad not supported for \"'+wa+'\"')):!1!==qa.load.scriptLoad&&!qa.load.pluginKey&&xa&&!qa.load.deps&&!qa.load.globals&&('system'===qa.load.format||'register'===qa.load.format||'global'===qa.load.format&&qa.load.exports)&&(qa.load.scriptLoad=!0),qa.load.scriptLoad?new Promise(function(za,Ja){if('amd'===qa.load.format&&ht.define!==Ua.amdDefine)throw new Error('Loading AMD with scriptLoad requires setting the global `'+Ea+'.define = SystemJS.amdDefine`');H(wa,qa.load.crossOrigin,qa.load.integrity,function(){if(!Ga()){qa.load.format='global';var Ya=qa.load.exports&&Be(qa.load.exports);Ua.registerDynamic([],!1,function(){return Qe(qa,Ya),Ya}),Ga()}za()},Ja)}):et(Ua,wa,qa).then(function(){return at(Ua,wa,qa,Ga,Fa.wasm)})}}).then(function(qa){return delete Ua[Kt][wa],qa})},pt.prototype.config=function(wa,Ga){var Ua=this,Fa=this[Nt];if('warnings'in wa&&(Fa.warnings=wa.warnings),'wasm'in wa&&(Fa.wasm='undefined'!=typeof WebAssembly&&wa.wasm),('production'in wa||'build'in wa)&&ut.call(Ua,!!wa.production,!!(wa.build||ja&&ja.build)),!Ga){var qa;for(var za in Ce(Ua,wa,function(an){qa=qa||an.baseURL}),qa=qa||wa.baseURL,qa&&(Fa.baseURL=s(qa,bt)||s('./'+qa,bt),'/'!==Fa.baseURL[Fa.baseURL.length-1]&&(Fa.baseURL+='/')),wa.paths&&q(Fa.paths,wa.paths),Ce(Ua,wa,function(an){an.paths&&q(Fa.paths,an.paths)}),Fa.paths)-1!==Fa.paths[za].indexOf('*')&&(G.call(Fa,'Path config '+za+' -> '+Fa.paths[za]+' is no longer supported as wildcards are deprecated.'),delete Fa.paths[za])}if(wa.defaultJSExtensions&&G.call(Fa,'The defaultJSExtensions configuration option is deprecated.\\n  Use packages defaultExtension instead.',!0),'boolean'==typeof wa.pluginFirst&&(Fa.pluginFirst=wa.pluginFirst),wa.map)for(var za in wa.map){var Ja=wa.map[za];if('string'==typeof Ja){var Ya=oe.call(Ua,Fa,Ja,void 0,!1,!1);'/'===Ya[Ya.length-1]&&':'!==za[za.length-1]&&'/'!==za[za.length-1]&&(Ya=Ya.substr(0,Ya.length-1)),Fa.map[za]=Ya}else{var Ba=oe.call(Ua,Fa,'/'===za[za.length-1]?za:za+'/',void 0,!0,!0);Ba=Ba.substr(0,Ba.length-1);var Ha=Fa.packages[Ba];Ha||(Ha=Fa.packages[Ba]=je(),Ha.defaultExtension=''),Ne(Ha,{map:Ja},Ba,!1,Fa)}}if(wa.packageConfigPaths){for(var Va=[],Wa=0;Wa<wa.packageConfigPaths.length;Wa++){var $a=wa.packageConfigPaths[Wa],Xa=Math.max($a.lastIndexOf('*')+1,$a.lastIndexOf('/')),Qa=oe.call(Ua,Fa,$a.substr(0,Xa),void 0,!1,!1);Va[Wa]=Qa+$a.substr(Xa)}Fa.packageConfigPaths=Va}if(wa.bundles)for(var za in wa.bundles){for(var Za=[],Wa=0;Wa<wa.bundles[za].length;Wa++)Za.push(Ua.normalizeSync(wa.bundles[za][Wa]));Fa.bundles[za]=Za}if(wa.packages)for(var za in wa.packages){if(za.match(/^([^\\/]+:)?\\/\\/$/))throw new TypeError('\"'+za+'\" is not a valid package name.');var Ba=oe.call(Ua,Fa,'/'===za[za.length-1]?za:za+'/',void 0,!0,!0);Ba=Ba.substr(0,Ba.length-1),Ne(Fa.packages[Ba]=Fa.packages[Ba]||je(),wa.packages[za],Ba,!1,Fa)}if(wa.depCache)for(var za in wa.depCache)Fa.depCache[Ua.normalizeSync(za)]=[].concat(wa.depCache[za]);if(wa.meta)for(var za in wa.meta)if('*'===za[0])q(Fa.meta[za]=Fa.meta[za]||{},wa.meta[za]);else{var en=oe.call(Ua,Fa,za,void 0,!0,!0);q(Fa.meta[en]=Fa.meta[en]||{},wa.meta[za])}for(var tn in'transpiler'in wa&&(Fa.transpiler=wa.transpiler),wa)-1===Na.indexOf(tn)&&-1===$t.indexOf(tn)&&(Ua[tn]=wa[tn]);Ce(Ua,wa,function(an){Ua.config(an,!0)})},pt.prototype.getConfig=function(wa){if(wa){if(-1!==Na.indexOf(wa))return Te(this[Nt],wa);throw new Error('\"'+wa+'\" is not a valid configuration name. Must be one of '+Na.join(', ')+'.')}for(var Ga={},Ua=0;Ua<Na.length;Ua++){var Fa=Na[Ua],qa=Te(this[Nt],Fa);void 0!==qa&&(Ga[Fa]=qa)}return Ga},pt.prototype.global=ht,pt.prototype.import=function(){return k.prototype.import.apply(this,arguments).then(function(wa){return'__useDefault'in wa?wa.__useDefault:wa})};for(var Na=['baseURL','map','paths','packages','packageConfigPaths','depCache','meta','bundles','transpiler','warnings','pluginFirst','production','wasm'],Ka='undefined'!=typeof Proxy,Pa=0;Pa<Na.length;Pa++)(function(wa){Object.defineProperty(pt.prototype,wa,{get:function(){var Ga=Te(this[Nt],wa);return Ka&&'object'==typeof Ga&&(Ga=new Proxy(Ga,{set:function(Ua,Fa){throw new Error('Cannot set SystemJS.'+wa+'[\"'+Fa+'\"] directly. Use SystemJS.config({ '+wa+': { \"'+Fa+'\": ... } }) rather.')}})),Ga},set:function(){throw new Error('Setting `SystemJS.'+wa+'` directly is no longer supported. Use `SystemJS.config({ '+wa+': ... })`.')}})})(Na[Pa]);pt.prototype.delete=function(wa){return gt(this,'delete'),this.registry.delete(wa)},pt.prototype.get=function(wa){return gt(this,'get'),this.registry.get(wa)},pt.prototype.has=function(wa){return gt(this,'has'),this.registry.has(wa)},pt.prototype.set=function(wa,Ga){return gt(this,'set'),this.registry.set(wa,Ga)},pt.prototype.newModule=function(wa){return new h(wa)},pt.prototype.isModule=function(wa){return void 0===jt&&(jt='undefined'!=typeof Symbol&&!!Symbol.toStringTag),wa instanceof h||jt&&'[object Module]'==Object.prototype.toString.call(wa)},pt.prototype.register=function(wa,Ga,Ua){return'string'==typeof wa&&(wa=se.call(this,this[Nt],wa)),k.prototype.register.call(this,wa,Ga,Ua)},pt.prototype.registerDynamic=function(wa,Ga,Ua,Fa){return'string'==typeof wa&&(wa=se.call(this,this[Nt],wa)),k.prototype.registerDynamic.call(this,wa,Ga,Ua,Fa)},pt.prototype.version='0.20.18 Dev';var Da=new pt;(ct||Pt)&&(ht.SystemJS=ht.System=Da),'undefined'!=typeof module&&module.exports&&(module.exports=Da)})();\n\n"

/***/ }),

/***/ "./node_modules/script-loader/addScript.js":
/*!*************************************************!*\
  !*** ./node_modules/script-loader/addScript.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	function log(error) {
		(typeof console !== "undefined")
		&& (console.error || console.log)("[Script Loader]", error);
	}

	// Check for IE =< 8
	function isIE() {
		return typeof attachEvent !== "undefined" && typeof addEventListener === "undefined";
	}

	try {
		if (typeof execScript !== "undefined" && isIE()) {
			execScript(src);
		} else if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else {
			log("EvalError: No eval function available");
		}
	} catch (error) {
		log(error);
	}
}


/***/ }),

/***/ "./node_modules/script-loader/index.js!./src/jspm_packages/system.js":
/*!******************************************************************!*\
  !*** ./node_modules/script-loader!./src/jspm_packages/system.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !./node_modules/script-loader/addScript.js */ "./node_modules/script-loader/addScript.js")(__webpack_require__(/*! !./node_modules/raw-loader!./src/jspm_packages/system.js */ "./node_modules/raw-loader/index.js!./src/jspm_packages/system.js"))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index_jspm.ls":
/*!***************************!*\
  !*** ./src/index_jspm.ls ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(it){
  return it();
})(function(){
  var dlog;
  window.global_exports = {};
  window.addEventListener("unhandledrejection", function(evt){
    throw evt.reason;
  });
  dlog = window.dlog = function(){
    var args, res$, i$, to$;
    res$ = [];
    for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
      res$.push(arguments[i$]);
    }
    args = res$;
    if (localStorage.getItem('display_dlog') === 'true') {
      return console.log.apply(console, args);
    }
  };
  __webpack_require__(/*! libs_backend/systemjs */ "./src/libs_backend/systemjs.js");
  return async function(){
    var add_url_input_if_needed, getUrlParameters, use_polyfill, jsYaml, get_interventions, set_nested_property, start_page_index;
    add_url_input_if_needed = function(){
      var url_input;
      if (localStorage.index_show_url_bar === 'true') {
        url_input = document.createElement('input');
        url_input.style.position = 'fixed';
        url_input.style.bottom = '0px';
        url_input.style.left = '0px';
        url_input.value = window.location.href;
        url_input.style.width = '100vw';
        url_input.style.backgroundColor = 'transparent';
        url_input.style.border = 'none';
        url_input.style.color = 'white';
        url_input.style.backgroundColor = 'black';
        url_input.addEventListener('keydown', function(evt){
          if (evt.keyCode === 13) {
            if (url_input.value !== window.location.href) {
              return window.location.href = url_input.value;
            } else {
              return window.location.reload();
            }
          }
        });
        document.body.appendChild(url_input);
      }
    };
    window.developer_options = function(){
      return window.location.href = '/index.html?tag=options-dev';
    };
    getUrlParameters = (await SystemJS['import']('libs_frontend/frontend_libs')).getUrlParameters;
    use_polyfill = getUrlParameters().polyfill;
    if (use_polyfill && use_polyfill !== 'false' && parseInt(use_polyfill) !== 0) {
      document.registerElement = null;
      (await SystemJS['import']('webcomponentsjs-custom-element-v0'));
    }
    window.Polymer = {
      dom: 'shady',
      lazyRegister: true
    };
    jsYaml = (await SystemJS['import']('js-yaml'));
    get_interventions = (await SystemJS['import']('libs_backend/intervention_utils')).get_interventions;
    /*
    export getUrlParameters = ->
      url = window.location.href
      hash = url.lastIndexOf('#')
      if hash != -1
        url = url.slice(0, hash)
      map = {}
      parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m,key,value) ->
        #map[key] = decodeURI(value).split('+').join(' ').split('%2C').join(',') # for whatever reason this seems necessary?
        map[key] = decodeURIComponent(value).split('+').join(' ') # for whatever reason this seems necessary?
      )
      return map
    */
    set_nested_property = function(tag, property_name, property_value){
      var dot_index, property_name_start, property_name_remainder;
      dot_index = property_name.indexOf('.');
      if (dot_index === -1) {
        tag[property_name] = property_value;
        return;
      }
      property_name_start = property_name.substr(0, dot_index);
      property_name_remainder = property_name.substr(dot_index + 1);
      return set_nested_property(tag[property_name_start], property_name_remainder, property_value);
    };
    start_page_index = async function(){
      var interventions, params, tagname, index_body_width, index_body_height, tag, num_properties, k, v, index_body;
      interventions = (await get_interventions());
      window.intervention = interventions['debug/fake_intervention'];
      window.goal_info = {
        name: 'debug/fake_goal',
        domain: 'habitlab.stanford.edu',
        homepage: 'https://habitlab.stanford.edu',
        sitename: 'goal',
        sitename_printable: 'Goal',
        description: 'Fake goal'
      };
      params = getUrlParameters();
      tagname = params.tag;
      index_body_width = params.index_body_width, index_body_height = params.index_body_height;
      if (tagname == null) {
        tagname = 'debug-view';
      }
      (await SystemJS['import']('components/' + tagname + '.deps'));
      tag = document.createElement(tagname);
      num_properties = 0;
      for (k in params) {
        v = params[k];
        if (k === 'tag' || k === 'index_body_width' || k === 'index_body_height') {
          continue;
        }
        v = jsYaml.safeLoad(v);
        set_nested_property(tag, k, v);
        num_properties += 1;
      }
      if (num_properties === 0) {
        tag.isdemo = true;
      }
      document.getElementById('index_contents').appendChild(tag);
      index_body = document.getElementById('index_body');
      if (index_body_width != null) {
        index_body.style.width = index_body_width;
      }
      if (index_body_height) {
        index_body.style.height = index_body_height;
      }
      add_url_input_if_needed();
    };
    start_page_index();
    window.uselib = function(libname, callback){
      if (typeof callback === 'function') {
        return SystemJS['import'](libname).then(callback);
      } else if (typeof callback === 'string') {
        return SystemJS['import'](libname).then(function(imported_lib){
          window[callback] = imported_lib;
          return console.log('imported as window.' + callback);
        });
      } else if (typeof libname === 'string') {
        callback = libname.toLowerCase().split('').filter(function(x){
          return 'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(x) !== -1;
        }).join('');
        return SystemJS['import'](libname).then(function(imported_lib){
          window[callback] = imported_lib;
          return console.log('imported as window.' + callback);
        });
      } else {
        return console.log(['Use uselib() to import jspm libraries.', 'The first argument is the library name (under SystemJS, see jspm)', 'The second argument is the name it should be given (in the \'window\' object)', 'Example of using moment:', '    uselib(\'moment\', \'moment\')', '    window.moment().format()', 'Example of using jquery:', '    uselib(\'jquery\', \'$\')', '    window.$(\'body\').css(\'background-color\', \'black\')', 'Example of using sweetalert2:', '    uselib(\'libs_common/content_script_utils\', \'content_script_utils\')', '    content_script_utils.load_css_file(\'bower_components/sweetalert2/dist/sweetalert2.css\')', '    uselib(\'sweetalert2\', \'swal\')', '    swal(\'hello world\')'].join('\n'));
      }
    };
    (await SystemJS['import']('libs_common/global_exports_post'));
  }();
});
//# sourceMappingURL=index_jspm.ls.map


/***/ }),

/***/ "./src/libs_backend/cacheget_utils.ls":
/*!********************************************!*\
  !*** ./src/libs_backend/cacheget_utils.ls ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var localforage, ref$, gexport, gexport_module, manifest, habitlab_version, is_production, localforage_store, get_store, localforage_store_remote, get_store_remote, localforage_store_systemjs, get_store_systemjs, clear_cache_localget, clear_cache_remoteget, clear_cache_systemjs, localget, localget_json, localget_base64, remoteget, remoteget_json, remoteget_base64, systemjsget, out$ =  true && exports || this;
localforage = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
ref$ = __webpack_require__(/*! libs_common/gexport */ "./src/libs_common/gexport.ls"), gexport = ref$.gexport, gexport_module = ref$.gexport_module;
if ((typeof chrome != 'undefined' && chrome !== null ? (ref$ = chrome.runtime) != null ? ref$.getManifest : void 8 : void 8) != null) {
  manifest = chrome.runtime.getManifest();
  habitlab_version = manifest.version.split('.').join('-');
  is_production = manifest.update_url != null || localStorage.getItem('devmode_use_cache') === 'true';
} else {
  habitlab_version = 'test';
  is_production = false;
}
localforage_store = null;
get_store = function(){
  if (localforage_store == null) {
    if (is_production) {
      localforage_store = localforage.createInstance({
        name: 'localget'
      });
    } else {
      localforage_store = {
        setItem: async function(){},
        getItem: async function(){}
      };
    }
  }
  return localforage_store;
};
localforage_store_remote = null;
get_store_remote = function(){
  if (localforage_store_remote == null) {
    localforage_store_remote = localforage.createInstance({
      name: 'remoteget'
    });
  }
  return localforage_store_remote;
};
localforage_store_systemjs = null;
get_store_systemjs = function(){
  if (localforage_store_systemjs == null) {
    localforage_store_systemjs = localforage.createInstance({
      name: 'systemjsget'
    });
  }
  return localforage_store_systemjs;
};
/**
 * Clears the cache used by {@link #localget|localget} and {@link #localget_json|localget_json}
 */
out$.clear_cache_localget = clear_cache_localget = async function(){
  var store;
  store = get_store();
  return (await store.clear());
};
/**
 * Clears the cache used by {@link #remoteget|remoteget} and {@link #remoteget_json|remoteget_json}
 */
out$.clear_cache_remoteget = clear_cache_remoteget = async function(){
  var store;
  store = get_store_remote();
  return (await store.clear());
};
out$.clear_cache_systemjs = clear_cache_systemjs = async function(){
  var store;
  store = get_store_systemjs();
  return (await store.clear());
};
/**
 * Fetches a local URL and returns the content as text. This is for data that is local to the extension, ie chrome-extension URLs - for remote HTTP/HTTPS URLs, use {@link #remoteget|remoteget} instead. Result is cached - if you need to clear the cache, use {@link #clear_cache_localget|clear_cache_localget}.
 * @param {string} url - The URL that we should fetch
 * @return {Promise.<string>} Content of the remote URL, as text
 */
out$.localget = localget = async function(url){
  var store, res, request;
  store = get_store();
  res = (await store.getItem(url));
  if (res != null) {
    return res;
  }
  request = (await fetch(url));
  res = (await request.text());
  if (res != null) {
    (await store.setItem(url, res));
  }
  return res;
};
/**
 * Fetches a local URL and returns the content as JSON. This is for data that is local to the extension, ie chrome-extension URLs - for remote HTTP/HTTPS URLs, use {@link #remoteget_json|remoteget_json} instead. Result is cached - if you need to clear the cache, use {@link #clear_cache_localget|clear_cache_localget}.
 * @param {string} url - The URL that we should fetch
 * @return {Promise.<Object|Array>} Content of the remote URL, as parsed JSON (either an Object or Array)
 */
out$.localget_json = localget_json = async function(url){
  var text;
  text = (await localget(url));
  if (text != null) {
    return JSON.parse(text);
  }
  return null;
};
out$.localget_base64 = localget_base64 = async function(url){
  var text;
  text = (await localget(url));
  if (text != null) {
    return 'data:text/plain;base64,' + btoa(unescape(encodeURIComponent(text)));
  }
  return null;
};
/**
 * Fetches a remote URL and returns the content as text. This is for external HTTP/HTTPS URLs - for data that is local to the extension, use {@link #localget|localget} instead. Result is cached - if you need to clear the cache, use {@link #clear_cache_remoteget|clear_cache_remoteget}.
 * @param {string} url - The URL that we should fetch
 * @return {Promise.<string>} Content of the remote URL, as text
 */
out$.remoteget = remoteget = async function(url){
  var store, res, request;
  store = get_store_remote();
  res = (await store.getItem(url));
  if (res != null) {
    return res;
  }
  request = (await fetch(url));
  res = (await request.text());
  if (res != null) {
    (await store.setItem(url, res));
  }
  return res;
};
/**
 * Fetches a remote URL and returns the content as parsed JSON. This is for external HTTP/HTTPS URLs - for data that is local to the extension, use {@link #localget_json|localget_json} instead. Result is cached - if you need to clear the cache, use {@link #clear_cache_remoteget|clear_cache_remoteget}.
 * @param {string} url - The URL that we should fetch
 * @return {Promise.<Object|Array>} Content of the remote URL, as parsed JSON (either an Object or Array)
 */
out$.remoteget_json = remoteget_json = async function(url){
  var text;
  text = (await remoteget(url));
  if (text != null) {
    return JSON.parse(text);
  }
  return null;
};
out$.remoteget_base64 = remoteget_base64 = async function(url){
  var text;
  text = (await remoteget(url));
  if (text != null) {
    return 'data:text/plain;base64,' + btoa(unescape(encodeURIComponent(text)));
  }
  return null;
};
out$.systemjsget = systemjsget = async function(url){
  var store, res, request, this$ = this;
  if (!is_production) {
    url = url.replace(chrome.extension.getURL('/'), '');
    return (await fetch(chrome.extension.getURL('/' + url)).then(function(it){
      return it.text();
    }));
  }
  store = get_store_systemjs();
  url = url.replace(chrome.extension.getURL('/'), '');
  res = (await store.getItem(url));
  if (res != null) {
    return res;
  }
  request = (await fetch('https://habitlab-dist.github.io/' + habitlab_version + '/' + url));
  res = (await request.text());
  if (res != null) {
    (await store.setItem(url, res));
  }
  return res;
};
gexport_module('cacheget_utils', function(it){
  return eval(it);
});
//# sourceMappingURL=cacheget_utils.ls.map


/***/ }),

/***/ "./src/libs_backend/systemjs.js":
/*!**************************************!*\
  !*** ./src/libs_backend/systemjs.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function() {
  if (!window.systemjs_fetch) {
    var {systemjsget, remoteget} = __webpack_require__(/*! libs_backend/cacheget_utils */ "./src/libs_backend/cacheget_utils.ls");
    var chrome_base_url = chrome.runtime.getURL('');
    var is_local_package = function(input) {
      for (var prefix of ['bower_components', 'bundles', 'components', 'frontend_utils', 'generated_libs', 'goals', 'intervention_utils', 'jspm_packages', 'libs_backend', 'libs_common', 'libs_frontend', 'modules_custom']) {
        if (input.startsWith(chrome_base_url + prefix + '/')) {
          return true;
        }
      }
      return false;
    }
    window.systemjs_fetch = function(input, init) {
      if (input.startsWith(chrome_base_url)) {
        if (is_local_package(input)) {
          return systemjsget(input).then(function(text) {
            return new Response(text);
          });
        } else {
          var npm_package_name = input.replace(chrome_base_url, '');
          var url = 'https://unpkg.com/' + npm_package_name;
          return remoteget(url).then(function(text) {
            return new Response(text);
          })
        }
      }
      return fetch(input, init);
    }
  }
})();

if (!window.SystemJS) {
  __webpack_require__(/*! script-loader!jspm_packages/system.js */ "./node_modules/script-loader/index.js!./src/jspm_packages/system.js")
  __webpack_require__(/*! ../systemjs_paths.js */ "./src/systemjs_paths.js")
  __webpack_require__(/*! ../../jspm.config.js */ "./jspm.config.js")
  __webpack_require__(/*! ../../jspm_config_backend.js */ "./jspm_config_backend.js");
  SystemJS.import_multi = function(libs_list, callback) {
    if (callback) {
      Promise.all(libs_list.map(lib_name => SystemJS.import(lib_name))).then(function(args) {
        callback(...args);
      });
    } else {
      return Promise.all(libs_list.map(lib_name => SystemJS.import(lib_name)));
    }
  }
}


/***/ }),

/***/ "./src/libs_common/gexport.ls":
/*!************************************!*\
  !*** ./src/libs_common/gexport.ls ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var gexport, gexport_module, out$ =  true && exports || this;
out$.gexport = gexport = function(vardict){
  var k, v;
  if (window.global_exports == null) {
    console.log('calling gexport but global_exports is not defined');
    return;
  }
  for (k in vardict) {
    v = vardict[k];
    window.global_exports[k] = v;
  }
};
out$.gexport_module = gexport_module = function(module_name, eval_func){
  if (window.global_exports == null) {
    return;
  }
  window.global_exports['eval_' + module_name] = eval_func;
  if (window.global_exports.gexport_eval_funcs == null) {
    window.global_exports.gexport_eval_funcs = {};
  }
  return window.global_exports.gexport_eval_funcs[module_name] = eval_func;
};
//# sourceMappingURL=gexport.ls.map


/***/ }),

/***/ "./src/systemjs_paths.js":
/*!*******************************!*\
  !*** ./src/systemjs_paths.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* edit systemjs_paths_template.js instead of src/systemjs_paths.js (which is generated) */
SystemJS.config({
  baseURL: chrome.extension.getURL('/'),
  packages: {
    'libs_frontend': {
      defaultExtension: 'js',
    },
    'libs_backend': {
      defaultExtension: 'js',
    },
    'libs_common': {
      defaultExtension: 'js',
    },
    'generated_libs/libs_frontend': {
      defaultExtension: 'js',
    },
    'generated_libs/libs_backend': {
      defaultExtension: 'js',
    },
    'components': {
      defaultExtension: 'js',
    },
    'bower_components': {
      defaultExtension: 'js',
    },
    'goals': {
      defaultExtension: 'js',
    },
  },
  meta: {
    '*.html': {
      loader: 'text'
    },
    'data:text/html;base64,*': {
      loader: 'text'
    }
  },
  browserConfig: {
    baseURL: chrome.extension.getURL('/'),
    paths: {
      'npm:': chrome.extension.getURL("/jspm_packages/npm/"),
      'github:': chrome.extension.getURL("/jspm_packages/github/")
    }
  },
  bundles: {
  "bundles/jquery.js": [
    "npm:jquery@3.1.1/dist/jquery.js",
    "npm:jquery@3.1.1.json"
  ],
  "bundles/prettyprintjs.js": [
    "npm:prettyprintjs@0.1.12/index.js",
    "npm:prettyprintjs@0.1.12.json"
  ],
  "bundles/js-yaml.js": [
    "github:nodeca/js-yaml@master/dist/js-yaml.js",
    "github:nodeca/js-yaml@master.json"
  ],
  "bundles/moment.js": [
    "npm:moment@2.17.1/moment.js",
    "npm:moment@2.17.1.json"
  ],
  "bundles/promise-debounce.js": [
    "npm:promise-debounce@1.0.1/index.js",
    "npm:promise-debounce@1.0.1.json"
  ],
  "bundles/shuffled.js": [
    "npm:shuffled@1.0.0/index.js",
    "npm:shuffled@1.0.0.json",
    "npm:shuffle-array@1.0.0/index.js",
    "npm:shuffle-array@1.0.0.json"
  ],
  "bundles/sweetalert2.js": [
    "npm:sweetalert2@6.3.2/dist/sweetalert2.js",
    "npm:sweetalert2@6.3.2.json"
  ],
  "bundles/text.js": [
    "github:systemjs/plugin-text@0.0.8/text.js",
    "github:systemjs/plugin-text@0.0.8.json"
  ],
  "bundles/enable-webcomponents-in-content-scripts.js": [
    "npm:enable-webcomponents-in-content-scripts@1.0.7/index.js",
    "npm:enable-webcomponents-in-content-scripts@1.0.7.json",
    "npm:webcomponentsjs-custom-element-v0@1.0.1/CustomElements.js",
    "npm:webcomponentsjs-custom-element-v0@1.0.1.json"
  ],
  "bundles/underscore.js": [
    "npm:underscore@1.8.3/underscore.js",
    "npm:underscore@1.8.3.json"
  ],
  "bundles/cheerio.js": [
    "npm:cheerio@0.22.0/index.js",
    "npm:cheerio@0.22.0.json",
    "npm:cheerio@0.22.0/package.json",
    "npm:cheerio@0.22.0/lib/cheerio.js",
    "npm:cheerio@0.22.0/lib/static.js",
    "npm:lodash.defaults@4.2.0/index.js",
    "npm:lodash.defaults@4.2.0.json",
    "npm:lodash.merge@4.6.0/index.js",
    "npm:lodash.merge@4.6.0.json",
    "npm:jspm-nodelibs-buffer@0.2.3/global.js",
    "npm:jspm-nodelibs-buffer@0.2.3.json",
    "npm:buffer@5.0.8/index.js",
    "npm:buffer@5.0.8.json",
    "npm:ieee754@1.1.8/index.js",
    "npm:ieee754@1.1.8.json",
    "npm:base64-js@1.2.1/index.js",
    "npm:base64-js@1.2.1.json",
    "npm:cheerio@0.22.0/lib/parse.js",
    "npm:htmlparser2@3.9.2/lib/index.js",
    "npm:htmlparser2@3.9.2.json",
    "npm:htmlparser2@3.9.2/lib/CollectingHandler.js",
    "npm:domutils@1.5.1/index.js",
    "npm:domutils@1.5.1.json",
    "npm:domutils@1.5.1/lib/helpers.js",
    "npm:domutils@1.5.1/lib/legacy.js",
    "npm:domelementtype@1.3.0/index.js",
    "npm:domelementtype@1.3.0.json",
    "npm:domutils@1.5.1/lib/querying.js",
    "npm:domutils@1.5.1/lib/manipulation.js",
    "npm:domutils@1.5.1/lib/traversal.js",
    "npm:domutils@1.5.1/lib/stringify.js",
    "npm:dom-serializer@0.1.0/index.js",
    "npm:dom-serializer@0.1.0.json",
    "npm:entities@1.1.1/index.js",
    "npm:entities@1.1.1.json",
    "npm:entities@1.1.1/lib/decode.js",
    "npm:entities@1.1.1/lib/decode_codepoint.js",
    "npm:entities@1.1.1/maps/decode.json",
    "npm:entities@1.1.1/maps/xml.json",
    "npm:entities@1.1.1/maps/legacy.json",
    "npm:entities@1.1.1/maps/entities.json",
    "npm:entities@1.1.1/lib/encode.js",
    "npm:domelementtype@1.1.3/index.js",
    "npm:domelementtype@1.1.3.json",
    "npm:htmlparser2@3.9.2/lib/ProxyHandler.js",
    "npm:htmlparser2@3.9.2/lib/WritableStream.js",
    "npm:inherits@2.0.3/inherits_browser.js",
    "npm:inherits@2.0.3.json",
    "npm:string_decoder@0.10.31/index.js",
    "npm:string_decoder@0.10.31.json",
    "npm:jspm-nodelibs-string_decoder@0.2.2.json",
    "npm:readable-stream@2.3.3/readable-browser.js",
    "npm:readable-stream@2.3.3.json",
    "npm:jspm-nodelibs-process@0.2.0/process.js",
    "npm:jspm-nodelibs-process@0.2.0.json",
    "npm:readable-stream@2.3.3/lib/_stream_passthrough.js",
    "npm:core-util-is@1.0.2/lib/util.js",
    "npm:core-util-is@1.0.2.json",
    "npm:readable-stream@2.3.3/lib/_stream_transform.js",
    "npm:readable-stream@2.3.3/lib/_stream_duplex.js",
    "npm:readable-stream@2.3.3/lib/_stream_writable.js",
    "npm:readable-stream@2.3.3/lib/internal/streams/destroy.js",
    "npm:process-nextick-args@1.0.7/index.js",
    "npm:process-nextick-args@1.0.7.json",
    "npm:safe-buffer@5.1.1/index.js",
    "npm:safe-buffer@5.1.1.json",
    "npm:readable-stream@2.3.3/lib/internal/streams/stream-browser.js",
    "npm:jspm-nodelibs-events@0.2.0/events.js",
    "npm:jspm-nodelibs-events@0.2.0.json",
    "npm:util-deprecate@1.0.2/browser.js",
    "npm:util-deprecate@1.0.2.json",
    "npm:readable-stream@2.3.3/lib/_stream_readable.js",
    "npm:string_decoder@1.0.3/lib/string_decoder.js",
    "npm:string_decoder@1.0.3.json",
    "npm:readable-stream@2.3.3/lib/internal/streams/BufferList.js",
    "npm:isarray@1.0.0/index.js",
    "npm:isarray@1.0.0.json",
    "npm:stream-browserify@2.0.1/index.js",
    "npm:stream-browserify@2.0.1.json",
    "npm:readable-stream@2.3.3/passthrough.js",
    "npm:readable-stream@2.3.3/transform.js",
    "npm:readable-stream@2.3.3/duplex-browser.js",
    "npm:readable-stream@2.3.3/writable-browser.js",
    "npm:jspm-nodelibs-stream@0.2.0.json",
    "npm:htmlparser2@3.9.2/lib/Parser.js",
    "npm:htmlparser2@3.9.2/lib/Tokenizer.js",
    "npm:htmlparser2@3.9.2/lib/Stream.js",
    "npm:htmlparser2@3.9.2/lib/FeedHandler.js",
    "npm:domhandler@2.3.0/index.js",
    "npm:domhandler@2.3.0.json",
    "npm:domhandler@2.3.0/lib/element.js",
    "npm:domhandler@2.3.0/lib/node.js",
    "npm:css-select@1.2.0/index.js",
    "npm:css-select@1.2.0.json",
    "npm:css-select@1.2.0/lib/compile.js",
    "npm:css-select@1.2.0/lib/pseudos.js",
    "npm:boolbase@1.0.0/index.js",
    "npm:boolbase@1.0.0.json",
    "npm:css-select@1.2.0/lib/attributes.js",
    "npm:nth-check@1.0.1/index.js",
    "npm:nth-check@1.0.1.json",
    "npm:nth-check@1.0.1/compile.js",
    "npm:nth-check@1.0.1/parse.js",
    "npm:css-select@1.2.0/lib/procedure.json",
    "npm:css-select@1.2.0/lib/sort.js",
    "npm:css-select@1.2.0/lib/general.js",
    "npm:css-what@2.1.0/index.js",
    "npm:css-what@2.1.0.json",
    "npm:cheerio@0.22.0/lib/api/forms.js",
    "npm:lodash.map@4.6.0/index.js",
    "npm:lodash.map@4.6.0.json",
    "npm:cheerio@0.22.0/lib/api/css.js",
    "npm:lodash.pick@4.4.0/index.js",
    "npm:lodash.pick@4.4.0.json",
    "npm:cheerio@0.22.0/lib/utils.js",
    "npm:cheerio@0.22.0/lib/api/manipulation.js",
    "npm:lodash.foreach@4.5.0/index.js",
    "npm:lodash.foreach@4.5.0.json",
    "npm:lodash.bind@4.2.1/index.js",
    "npm:lodash.bind@4.2.1.json",
    "npm:lodash.flatten@4.4.0/index.js",
    "npm:lodash.flatten@4.4.0.json",
    "npm:cheerio@0.22.0/lib/api/traversing.js",
    "npm:lodash.reduce@4.6.0/index.js",
    "npm:lodash.reduce@4.6.0.json",
    "npm:lodash.filter@4.6.0/index.js",
    "npm:lodash.filter@4.6.0.json",
    "npm:lodash.reject@4.6.0/index.js",
    "npm:lodash.reject@4.6.0.json",
    "npm:cheerio@0.22.0/lib/api/attributes.js",
    "npm:lodash.some@4.6.0/index.js",
    "npm:lodash.some@4.6.0.json",
    "npm:lodash.assignin@4.2.0/index.js",
    "npm:lodash.assignin@4.2.0.json"
  ],
  "bundles/percipio.js": [
    "npm:percipio@0.1.2/src/index.js",
    "npm:percipio@0.1.2.json",
    "npm:percipio@0.1.2/src/metrics.js",
    "npm:underscore@1.8.3/underscore.js",
    "npm:underscore@1.8.3.json",
    "npm:percipio@0.1.2/src/stats.js",
    "npm:percipio@0.1.2/src/naive_bayes.js",
    "npm:percipio@0.1.2/src/bandits.js"
  ],
  "bundles/livescript15.js": [
    "npm:livescript15@1.5.6/lib/browser.js",
    "npm:livescript15@1.5.6.json",
    "npm:jspm-nodelibs-process@0.2.0/process.js",
    "npm:jspm-nodelibs-process@0.2.0.json",
    "npm:livescript15@1.5.6/lib/index.js",
    "npm:jspm-nodelibs-buffer@0.2.3/global.js",
    "npm:jspm-nodelibs-buffer@0.2.3.json",
    "npm:buffer@5.0.8/index.js",
    "npm:buffer@5.0.8.json",
    "npm:ieee754@1.1.8/index.js",
    "npm:ieee754@1.1.8.json",
    "npm:base64-js@1.2.1/index.js",
    "npm:base64-js@1.2.1.json",
    "npm:jspm-nodelibs-path@0.2.1/path.js",
    "npm:jspm-nodelibs-path@0.2.1.json",
    "npm:livescript15@1.5.6/lib/source-map.js",
    "npm:livescript15@1.5.6/lib/ast.js",
    "npm:livescript15@1.5.6/lib/util.js",
    "npm:prelude-ls@1.1.2/lib/index.js",
    "npm:prelude-ls@1.1.2.json",
    "npm:prelude-ls@1.1.2/lib/Num.js",
    "npm:prelude-ls@1.1.2/lib/Str.js",
    "npm:prelude-ls@1.1.2/lib/Obj.js",
    "npm:prelude-ls@1.1.2/lib/List.js",
    "npm:prelude-ls@1.1.2/lib/Func.js",
    "npm:livescript15@1.5.6/lib/parser.js",
    "npm:jspm-nodelibs-fs@0.2.0/fs.js",
    "npm:jspm-nodelibs-fs@0.2.0.json",
    "npm:livescript15@1.5.6/lib/lexer.js"
  ],
  "bundles/dexie.js": [
    "npm:dexie@1.5.1/dist/dexie.js",
    "npm:dexie@1.5.1.json",
    "npm:jspm-nodelibs-process@0.2.0/process.js",
    "npm:jspm-nodelibs-process@0.2.0.json"
  ],
  "bundles/intervention-editor-libs.js": [
    "npm:list_requires_multi@1.0.2/index.js",
    "npm:list_requires_multi@1.0.2.json",
    "npm:esprima-walk@0.1.0/esprima-walk.js",
    "npm:esprima-walk@0.1.0.json",
    "npm:espree@3.5.1/espree.js",
    "npm:espree@3.5.1.json",
    "npm:espree@3.5.1/lib/visitor-keys.js",
    "npm:espree@3.5.1/package.json",
    "npm:acorn@5.1.2/dist/acorn.js",
    "npm:acorn@5.1.2.json",
    "npm:acorn-jsx@3.0.1/inject.js",
    "npm:acorn-jsx@3.0.1.json",
    "npm:acorn-jsx@3.0.1/xhtml.js",
    "npm:espree@3.5.1/lib/token-translator.js",
    "npm:espree@3.5.1/lib/comment-attachment.js",
    "npm:espree@3.5.1/lib/ast-node-types.js",
    "npm:eslint@4.8.0/lib/api.js",
    "npm:eslint@4.8.0.json",
    "npm:jspm-nodelibs-process@0.2.0/process.js",
    "npm:jspm-nodelibs-process@0.2.0.json",
    "npm:eslint@4.8.0/lib/util/source-code.js",
    "npm:lodash@4.17.10/lodash.js",
    "npm:lodash@4.17.10.json",
    "npm:eslint@4.8.0/lib/ast-utils.js",
    "npm:esutils@2.0.2/lib/utils.js",
    "npm:esutils@2.0.2.json",
    "npm:esutils@2.0.2/lib/keyword.js",
    "npm:esutils@2.0.2/lib/code.js",
    "npm:esutils@2.0.2/lib/ast.js",
    "npm:eslint@4.8.0/lib/util/traverser.js",
    "npm:estraverse@4.2.0/estraverse.js",
    "npm:estraverse@4.2.0.json",
    "npm:estraverse@4.2.0/package.json",
    "npm:eslint@4.8.0/lib/token-store/index.js",
    "npm:eslint@4.8.0/lib/token-store/utils.js",
    "npm:eslint@4.8.0/lib/token-store/padded-token-cursor.js",
    "npm:eslint@4.8.0/lib/token-store/forward-token-cursor.js",
    "npm:eslint@4.8.0/lib/token-store/cursor.js",
    "npm:eslint@4.8.0/lib/token-store/cursors.js",
    "npm:eslint@4.8.0/lib/token-store/skip-cursor.js",
    "npm:eslint@4.8.0/lib/token-store/decorative-cursor.js",
    "npm:eslint@4.8.0/lib/token-store/limit-cursor.js",
    "npm:eslint@4.8.0/lib/token-store/forward-token-comment-cursor.js",
    "npm:eslint@4.8.0/lib/token-store/filter-cursor.js",
    "npm:eslint@4.8.0/lib/token-store/backward-token-cursor.js",
    "npm:eslint@4.8.0/lib/token-store/backward-token-comment-cursor.js",
    "npm:jspm-nodelibs-assert@0.2.0/assert.js",
    "npm:jspm-nodelibs-assert@0.2.0.json",
    "npm:jspm-nodelibs-util@0.2.1/util.js",
    "npm:jspm-nodelibs-util@0.2.1.json",
    "npm:jspm-nodelibs-util@0.2.1/isBufferBrowser.js",
    "npm:eslint@4.8.0/lib/testers/rule-tester.js",
    "npm:eslint@4.8.0/lib/util/source-code-fixer.js",
    "npm:debug@3.1.0/src/browser.js",
    "npm:debug@3.1.0.json",
    "npm:debug@3.1.0/src/debug.js",
    "npm:ms@2.0.0/index.js",
    "npm:ms@2.0.0.json",
    "npm:eslint@4.8.0/lib/config/environments.js",
    "npm:eslint@4.8.0/conf/environments.js",
    "npm:globals@9.18.0/index.js",
    "npm:globals@9.18.0.json",
    "npm:globals@9.18.0/globals.json",
    "npm:eslint@4.8.0/lib/linter.js",
    "npm:eslint@4.8.0/package.json",
    "npm:eslint@4.8.0/lib/timing.js",
    "npm:eslint@4.8.0/lib/rules.js",
    "npm:eslint@4.8.0/lib/rules_all_requires.js",
    "npm:eslint@4.8.0/lib/rules/yoda.js",
    "npm:eslint@4.8.0/lib/rules/yield-star-spacing.js",
    "npm:eslint@4.8.0/lib/rules/wrap-regex.js",
    "npm:eslint@4.8.0/lib/rules/wrap-iife.js",
    "npm:eslint@4.8.0/lib/rules/vars-on-top.js",
    "npm:eslint@4.8.0/lib/rules/valid-typeof.js",
    "npm:eslint@4.8.0/lib/rules/valid-jsdoc.js",
    "npm:doctrine@2.0.0/lib/doctrine.js",
    "npm:doctrine@2.0.0.json",
    "npm:doctrine@2.0.0/lib/utility.js",
    "npm:doctrine@2.0.0/package.json",
    "npm:doctrine@2.0.0/lib/typed.js",
    "npm:isarray@1.0.0/index.js",
    "npm:isarray@1.0.0.json",
    "npm:eslint@4.8.0/lib/rules/use-isnan.js",
    "npm:eslint@4.8.0/lib/rules/unicode-bom.js",
    "npm:eslint@4.8.0/lib/rules/template-tag-spacing.js",
    "npm:eslint@4.8.0/lib/rules/template-curly-spacing.js",
    "npm:eslint@4.8.0/lib/rules/symbol-description.js",
    "npm:eslint@4.8.0/lib/rules/switch-colon-spacing.js",
    "npm:eslint@4.8.0/lib/rules/strict.js",
    "npm:eslint@4.8.0/lib/rules/spaced-comment.js",
    "npm:eslint@4.8.0/lib/rules/space-unary-ops.js",
    "npm:eslint@4.8.0/lib/rules/space-infix-ops.js",
    "npm:eslint@4.8.0/lib/rules/space-in-parens.js",
    "npm:eslint@4.8.0/lib/rules/space-before-function-paren.js",
    "npm:eslint@4.8.0/lib/rules/space-before-blocks.js",
    "npm:eslint@4.8.0/lib/rules/sort-vars.js",
    "npm:eslint@4.8.0/lib/rules/sort-keys.js",
    "npm:natural-compare@1.4.0/index.js",
    "npm:natural-compare@1.4.0.json",
    "npm:eslint@4.8.0/lib/rules/sort-imports.js",
    "npm:eslint@4.8.0/lib/rules/semi.js",
    "npm:eslint@4.8.0/lib/util/fix-tracker.js",
    "npm:eslint@4.8.0/lib/rules/semi-style.js",
    "npm:eslint@4.8.0/lib/rules/semi-spacing.js",
    "npm:eslint@4.8.0/lib/rules/rest-spread-spacing.js",
    "npm:eslint@4.8.0/lib/rules/require-yield.js",
    "npm:eslint@4.8.0/lib/rules/require-jsdoc.js",
    "npm:eslint@4.8.0/lib/rules/require-await.js",
    "npm:eslint@4.8.0/lib/rules/radix.js",
    "npm:eslint@4.8.0/lib/rules/quotes.js",
    "npm:eslint@4.8.0/lib/rules/quote-props.js",
    "npm:eslint@4.8.0/lib/util/keywords.js",
    "npm:eslint@4.8.0/lib/rules/prefer-template.js",
    "npm:eslint@4.8.0/lib/rules/prefer-spread.js",
    "npm:eslint@4.8.0/lib/rules/prefer-rest-params.js",
    "npm:eslint@4.8.0/lib/rules/prefer-reflect.js",
    "npm:eslint@4.8.0/lib/rules/prefer-promise-reject-errors.js",
    "npm:eslint@4.8.0/lib/rules/prefer-numeric-literals.js",
    "npm:eslint@4.8.0/lib/rules/prefer-destructuring.js",
    "npm:eslint@4.8.0/lib/rules/prefer-const.js",
    "npm:eslint@4.8.0/lib/rules/prefer-arrow-callback.js",
    "npm:eslint@4.8.0/lib/rules/padding-line-between-statements.js",
    "npm:eslint@4.8.0/lib/rules/padded-blocks.js",
    "npm:eslint@4.8.0/lib/rules/operator-linebreak.js",
    "npm:eslint@4.8.0/lib/rules/operator-assignment.js",
    "npm:eslint@4.8.0/lib/rules/one-var.js",
    "npm:eslint@4.8.0/lib/rules/one-var-declaration-per-line.js",
    "npm:eslint@4.8.0/lib/rules/object-shorthand.js",
    "npm:eslint@4.8.0/lib/rules/object-property-newline.js",
    "npm:eslint@4.8.0/lib/rules/object-curly-spacing.js",
    "npm:eslint@4.8.0/lib/rules/object-curly-newline.js",
    "npm:eslint@4.8.0/lib/rules/nonblock-statement-body-position.js",
    "npm:eslint@4.8.0/lib/rules/no-with.js",
    "npm:eslint@4.8.0/lib/rules/no-whitespace-before-property.js",
    "npm:eslint@4.8.0/lib/rules/no-warning-comments.js",
    "npm:eslint@4.8.0/lib/rules/no-void.js",
    "npm:eslint@4.8.0/lib/rules/no-var.js",
    "npm:eslint@4.8.0/lib/rules/no-useless-return.js",
    "npm:eslint@4.8.0/lib/rules/no-useless-rename.js",
    "npm:eslint@4.8.0/lib/rules/no-useless-escape.js",
    "npm:eslint@4.8.0/lib/rules/no-useless-constructor.js",
    "npm:eslint@4.8.0/lib/rules/no-useless-concat.js",
    "npm:eslint@4.8.0/lib/rules/no-useless-computed-key.js",
    "npm:eslint@4.8.0/lib/rules/no-useless-call.js",
    "npm:eslint@4.8.0/lib/rules/no-use-before-define.js",
    "npm:eslint@4.8.0/lib/rules/no-unused-vars.js",
    "npm:eslint@4.8.0/lib/rules/no-unused-labels.js",
    "npm:eslint@4.8.0/lib/rules/no-unused-expressions.js",
    "npm:eslint@4.8.0/lib/rules/no-unsafe-negation.js",
    "npm:eslint@4.8.0/lib/rules/no-unsafe-finally.js",
    "npm:eslint@4.8.0/lib/rules/no-unreachable.js",
    "npm:eslint@4.8.0/lib/rules/no-unneeded-ternary.js",
    "npm:eslint@4.8.0/lib/rules/no-unmodified-loop-condition.js",
    "npm:eslint@4.8.0/lib/rules/no-unexpected-multiline.js",
    "npm:eslint@4.8.0/lib/rules/no-underscore-dangle.js",
    "npm:eslint@4.8.0/lib/rules/no-undefined.js",
    "npm:eslint@4.8.0/lib/rules/no-undef.js",
    "npm:eslint@4.8.0/lib/rules/no-undef-init.js",
    "npm:eslint@4.8.0/lib/rules/no-trailing-spaces.js",
    "npm:eslint@4.8.0/lib/rules/no-throw-literal.js",
    "npm:eslint@4.8.0/lib/rules/no-this-before-super.js",
    "npm:eslint@4.8.0/lib/rules/no-ternary.js",
    "npm:eslint@4.8.0/lib/rules/no-template-curly-in-string.js",
    "npm:eslint@4.8.0/lib/rules/no-tabs.js",
    "npm:eslint@4.8.0/lib/rules/no-sync.js",
    "npm:eslint@4.8.0/lib/rules/no-sparse-arrays.js",
    "npm:eslint@4.8.0/lib/rules/no-spaced-func.js",
    "npm:eslint@4.8.0/lib/rules/no-shadow.js",
    "npm:eslint@4.8.0/lib/rules/no-shadow-restricted-names.js",
    "npm:eslint@4.8.0/lib/rules/no-sequences.js",
    "npm:eslint@4.8.0/lib/rules/no-self-compare.js",
    "npm:eslint@4.8.0/lib/rules/no-self-assign.js",
    "npm:eslint@4.8.0/lib/rules/no-script-url.js",
    "npm:eslint@4.8.0/lib/rules/no-return-await.js",
    "npm:eslint@4.8.0/lib/rules/no-return-assign.js",
    "npm:eslint@4.8.0/lib/rules/no-restricted-syntax.js",
    "npm:eslint@4.8.0/lib/rules/no-restricted-properties.js",
    "npm:eslint@4.8.0/lib/rules/no-restricted-modules.js",
    "npm:ignore@3.3.5/ignore.js",
    "npm:ignore@3.3.5.json",
    "npm:eslint@4.8.0/lib/rules/no-restricted-imports.js",
    "npm:eslint@4.8.0/lib/rules/no-restricted-globals.js",
    "npm:eslint@4.8.0/lib/rules/no-regex-spaces.js",
    "npm:eslint@4.8.0/lib/rules/no-redeclare.js",
    "npm:eslint@4.8.0/lib/rules/no-prototype-builtins.js",
    "npm:eslint@4.8.0/lib/rules/no-proto.js",
    "npm:eslint@4.8.0/lib/rules/no-process-exit.js",
    "npm:eslint@4.8.0/lib/rules/no-process-env.js",
    "npm:eslint@4.8.0/lib/rules/no-plusplus.js",
    "npm:eslint@4.8.0/lib/rules/no-path-concat.js",
    "npm:eslint@4.8.0/lib/rules/no-param-reassign.js",
    "npm:eslint@4.8.0/lib/rules/no-octal.js",
    "npm:eslint@4.8.0/lib/rules/no-octal-escape.js",
    "npm:eslint@4.8.0/lib/rules/no-obj-calls.js",
    "npm:eslint@4.8.0/lib/rules/no-new.js",
    "npm:eslint@4.8.0/lib/rules/no-new-wrappers.js",
    "npm:eslint@4.8.0/lib/rules/no-new-symbol.js",
    "npm:eslint@4.8.0/lib/rules/no-new-require.js",
    "npm:eslint@4.8.0/lib/rules/no-new-object.js",
    "npm:eslint@4.8.0/lib/rules/no-new-func.js",
    "npm:eslint@4.8.0/lib/rules/no-nested-ternary.js",
    "npm:eslint@4.8.0/lib/rules/no-negated-in-lhs.js",
    "npm:eslint@4.8.0/lib/rules/no-negated-condition.js",
    "npm:eslint@4.8.0/lib/rules/no-native-reassign.js",
    "npm:eslint@4.8.0/lib/rules/no-multiple-empty-lines.js",
    "npm:eslint@4.8.0/lib/rules/no-multi-str.js",
    "npm:eslint@4.8.0/lib/rules/no-multi-spaces.js",
    "npm:eslint@4.8.0/lib/rules/no-multi-assign.js",
    "npm:eslint@4.8.0/lib/rules/no-mixed-spaces-and-tabs.js",
    "npm:eslint@4.8.0/lib/rules/no-mixed-requires.js",
    "npm:eslint@4.8.0/lib/rules/no-mixed-operators.js",
    "npm:eslint@4.8.0/lib/rules/no-magic-numbers.js",
    "npm:eslint@4.8.0/lib/rules/no-loop-func.js",
    "npm:eslint@4.8.0/lib/rules/no-lonely-if.js",
    "npm:eslint@4.8.0/lib/rules/no-lone-blocks.js",
    "npm:eslint@4.8.0/lib/rules/no-labels.js",
    "npm:eslint@4.8.0/lib/rules/no-label-var.js",
    "npm:eslint@4.8.0/lib/rules/no-iterator.js",
    "npm:eslint@4.8.0/lib/rules/no-irregular-whitespace.js",
    "npm:eslint@4.8.0/lib/rules/no-invalid-this.js",
    "npm:eslint@4.8.0/lib/rules/no-invalid-regexp.js",
    "npm:eslint@4.8.0/lib/rules/no-inner-declarations.js",
    "npm:eslint@4.8.0/lib/rules/no-inline-comments.js",
    "npm:eslint@4.8.0/lib/rules/no-implied-eval.js",
    "npm:eslint@4.8.0/lib/rules/no-implicit-globals.js",
    "npm:eslint@4.8.0/lib/rules/no-implicit-coercion.js",
    "npm:eslint@4.8.0/lib/rules/no-global-assign.js",
    "npm:eslint@4.8.0/lib/rules/no-func-assign.js",
    "npm:eslint@4.8.0/lib/rules/no-floating-decimal.js",
    "npm:eslint@4.8.0/lib/rules/no-fallthrough.js",
    "npm:eslint@4.8.0/lib/rules/no-extra-semi.js",
    "npm:eslint@4.8.0/lib/rules/no-extra-parens.js",
    "npm:eslint@4.8.0/lib/rules/no-extra-label.js",
    "npm:eslint@4.8.0/lib/rules/no-extra-boolean-cast.js",
    "npm:eslint@4.8.0/lib/rules/no-extra-bind.js",
    "npm:eslint@4.8.0/lib/rules/no-extend-native.js",
    "npm:eslint@4.8.0/lib/rules/no-ex-assign.js",
    "npm:eslint@4.8.0/lib/rules/no-eval.js",
    "npm:eslint@4.8.0/lib/rules/no-eq-null.js",
    "npm:eslint@4.8.0/lib/rules/no-empty.js",
    "npm:eslint@4.8.0/lib/rules/no-empty-pattern.js",
    "npm:eslint@4.8.0/lib/rules/no-empty-function.js",
    "npm:eslint@4.8.0/lib/rules/no-empty-character-class.js",
    "npm:eslint@4.8.0/lib/rules/no-else-return.js",
    "npm:eslint@4.8.0/lib/rules/no-duplicate-imports.js",
    "npm:eslint@4.8.0/lib/rules/no-duplicate-case.js",
    "npm:eslint@4.8.0/lib/rules/no-dupe-keys.js",
    "npm:eslint@4.8.0/lib/rules/no-dupe-class-members.js",
    "npm:eslint@4.8.0/lib/rules/no-dupe-args.js",
    "npm:eslint@4.8.0/lib/rules/no-div-regex.js",
    "npm:eslint@4.8.0/lib/rules/no-delete-var.js",
    "npm:eslint@4.8.0/lib/rules/no-debugger.js",
    "npm:eslint@4.8.0/lib/rules/no-control-regex.js",
    "npm:eslint@4.8.0/lib/rules/no-continue.js",
    "npm:eslint@4.8.0/lib/rules/no-constant-condition.js",
    "npm:eslint@4.8.0/lib/rules/no-const-assign.js",
    "npm:eslint@4.8.0/lib/rules/no-console.js",
    "npm:eslint@4.8.0/lib/rules/no-confusing-arrow.js",
    "npm:eslint@4.8.0/lib/rules/no-cond-assign.js",
    "npm:eslint@4.8.0/lib/rules/no-compare-neg-zero.js",
    "npm:eslint@4.8.0/lib/rules/no-class-assign.js",
    "npm:eslint@4.8.0/lib/rules/no-catch-shadow.js",
    "npm:eslint@4.8.0/lib/rules/no-case-declarations.js",
    "npm:eslint@4.8.0/lib/rules/no-caller.js",
    "npm:eslint@4.8.0/lib/rules/no-buffer-constructor.js",
    "npm:eslint@4.8.0/lib/rules/no-bitwise.js",
    "npm:eslint@4.8.0/lib/rules/no-await-in-loop.js",
    "npm:eslint@4.8.0/lib/rules/no-array-constructor.js",
    "npm:eslint@4.8.0/lib/rules/no-alert.js",
    "npm:eslint@4.8.0/lib/rules/newline-per-chained-call.js",
    "npm:eslint@4.8.0/lib/rules/newline-before-return.js",
    "npm:eslint@4.8.0/lib/rules/newline-after-var.js",
    "npm:eslint@4.8.0/lib/rules/new-parens.js",
    "npm:eslint@4.8.0/lib/rules/new-cap.js",
    "npm:eslint@4.8.0/lib/rules/multiline-ternary.js",
    "npm:eslint@4.8.0/lib/rules/max-statements.js",
    "npm:eslint@4.8.0/lib/rules/max-statements-per-line.js",
    "npm:eslint@4.8.0/lib/rules/max-params.js",
    "npm:eslint@4.8.0/lib/rules/max-nested-callbacks.js",
    "npm:eslint@4.8.0/lib/rules/max-lines.js",
    "npm:eslint@4.8.0/lib/rules/max-len.js",
    "npm:eslint@4.8.0/lib/rules/max-depth.js",
    "npm:eslint@4.8.0/lib/rules/lines-around-directive.js",
    "npm:eslint@4.8.0/lib/rules/lines-around-comment.js",
    "npm:eslint@4.8.0/lib/rules/linebreak-style.js",
    "npm:eslint@4.8.0/lib/rules/line-comment-position.js",
    "npm:eslint@4.8.0/lib/rules/keyword-spacing.js",
    "npm:eslint@4.8.0/lib/rules/key-spacing.js",
    "npm:eslint@4.8.0/lib/rules/jsx-quotes.js",
    "npm:eslint@4.8.0/lib/rules/init-declarations.js",
    "npm:eslint@4.8.0/lib/rules/indent.js",
    "npm:functional-red-black-tree@1.0.1/rbtree.js",
    "npm:functional-red-black-tree@1.0.1.json",
    "npm:eslint@4.8.0/lib/rules/indent-legacy.js",
    "npm:eslint@4.8.0/lib/rules/id-match.js",
    "npm:eslint@4.8.0/lib/rules/id-length.js",
    "npm:eslint@4.8.0/lib/rules/id-blacklist.js",
    "npm:eslint@4.8.0/lib/rules/handle-callback-err.js",
    "npm:eslint@4.8.0/lib/rules/guard-for-in.js",
    "npm:eslint@4.8.0/lib/rules/global-require.js",
    "npm:eslint@4.8.0/lib/rules/getter-return.js",
    "npm:eslint@4.8.0/lib/rules/generator-star-spacing.js",
    "npm:eslint@4.8.0/lib/rules/function-paren-newline.js",
    "npm:eslint@4.8.0/lib/rules/func-style.js",
    "npm:eslint@4.8.0/lib/rules/func-names.js",
    "npm:eslint@4.8.0/lib/rules/func-name-matching.js",
    "npm:eslint@4.8.0/lib/rules/func-call-spacing.js",
    "npm:eslint@4.8.0/lib/rules/for-direction.js",
    "npm:eslint@4.8.0/lib/rules/eqeqeq.js",
    "npm:eslint@4.8.0/lib/rules/eol-last.js",
    "npm:eslint@4.8.0/lib/rules/dot-notation.js",
    "npm:eslint@4.8.0/lib/rules/dot-location.js",
    "npm:eslint@4.8.0/lib/rules/default-case.js",
    "npm:eslint@4.8.0/lib/rules/curly.js",
    "npm:eslint@4.8.0/lib/rules/constructor-super.js",
    "npm:eslint@4.8.0/lib/rules/consistent-this.js",
    "npm:eslint@4.8.0/lib/rules/consistent-return.js",
    "npm:eslint@4.8.0/lib/rules/computed-property-spacing.js",
    "npm:eslint@4.8.0/lib/rules/complexity.js",
    "npm:eslint@4.8.0/lib/rules/comma-style.js",
    "npm:eslint@4.8.0/lib/rules/comma-spacing.js",
    "npm:eslint@4.8.0/lib/rules/comma-dangle.js",
    "npm:eslint@4.8.0/lib/rules/class-methods-use-this.js",
    "npm:eslint@4.8.0/lib/rules/capitalized-comments.js",
    "npm:eslint@4.8.0/lib/util/patterns/letters.js",
    "npm:eslint@4.8.0/lib/rules/camelcase.js",
    "npm:eslint@4.8.0/lib/rules/callback-return.js",
    "npm:eslint@4.8.0/lib/rules/brace-style.js",
    "npm:eslint@4.8.0/lib/rules/block-spacing.js",
    "npm:eslint@4.8.0/lib/rules/block-scoped-var.js",
    "npm:eslint@4.8.0/lib/rules/arrow-spacing.js",
    "npm:eslint@4.8.0/lib/rules/arrow-parens.js",
    "npm:eslint@4.8.0/lib/rules/arrow-body-style.js",
    "npm:eslint@4.8.0/lib/rules/array-element-newline.js",
    "npm:eslint@4.8.0/lib/rules/array-callback-return.js",
    "npm:eslint@4.8.0/lib/rules/array-bracket-spacing.js",
    "npm:eslint@4.8.0/lib/rules/array-bracket-newline.js",
    "npm:eslint@4.8.0/lib/rules/accessor-pairs.js",
    "npm:eslint@4.8.0/conf/replacements.json",
    "npm:eslint@4.8.0/lib/load-rules.js",
    "npm:eslint@4.8.0/lib/rules_filenames.js",
    "npm:jspm-nodelibs-path@0.2.1/path.js",
    "npm:jspm-nodelibs-path@0.2.1.json",
    "npm:jspm-nodelibs-fs@0.2.0/fs.js",
    "npm:jspm-nodelibs-fs@0.2.0.json",
    "npm:eslint@4.8.0/lib/report-translator.js",
    "npm:eslint@4.8.0/lib/util/rule-fixer.js",
    "npm:eslint@4.8.0/lib/util/node-event-generator.js",
    "npm:esquery@1.0.0/esquery.js",
    "npm:esquery@1.0.0.json",
    "npm:esquery@1.0.0/parser.js",
    "npm:eslint@4.8.0/lib/util/safe-emitter.js",
    "npm:eslint@4.8.0/lib/util/apply-disable-directives.js",
    "npm:eslint@4.8.0/lib/config/config-validator.js",
    "npm:eslint@4.8.0/conf/config-schema.js",
    "npm:eslint@4.8.0/lib/util/ajv.js",
    "npm:ajv@5.2.3/lib/refs/json-schema-draft-04.json",
    "npm:ajv@5.2.3.json",
    "npm:ajv@5.2.3/lib/ajv.js",
    "npm:ajv@5.2.3/lib/refs/json-schema-draft-06.json",
    "npm:ajv@5.2.3/lib/refs/$data.json",
    "npm:ajv@5.2.3/lib/compile/error_classes.js",
    "npm:ajv@5.2.3/lib/compile/resolve.js",
    "npm:json-schema-traverse@0.3.1/index.js",
    "npm:json-schema-traverse@0.3.1.json",
    "npm:ajv@5.2.3/lib/compile/schema_obj.js",
    "npm:ajv@5.2.3/lib/compile/util.js",
    "npm:ajv@5.2.3/lib/compile/ucs2length.js",
    "npm:fast-deep-equal@1.0.0/index.js",
    "npm:fast-deep-equal@1.0.0.json",
    "npm:url@0.11.0/url.js",
    "npm:url@0.11.0.json",
    "npm:querystring@0.2.0/index.js",
    "npm:querystring@0.2.0.json",
    "npm:querystring@0.2.0/encode.js",
    "npm:querystring@0.2.0/decode.js",
    "npm:url@0.11.0/util.js",
    "npm:punycode@1.3.2/punycode.js",
    "npm:punycode@1.3.2.json",
    "npm:jspm-nodelibs-url@0.2.0.json",
    "npm:ajv@5.2.3/lib/keyword.js",
    "npm:ajv@5.2.3/lib/dotjs/custom.js",
    "npm:ajv@5.2.3/lib/compile/async.js",
    "npm:co@4.6.0/index.js",
    "npm:co@4.6.0.json",
    "npm:ajv@5.2.3/lib/patternGroups.js",
    "npm:ajv@5.2.3/lib/$data.js",
    "npm:ajv@5.2.3/lib/compile/rules.js",
    "npm:ajv@5.2.3/lib/compile/_rules.js",
    "npm:ajv@5.2.3/lib/dotjs/validate.js",
    "npm:ajv@5.2.3/lib/dotjs/uniqueItems.js",
    "npm:ajv@5.2.3/lib/dotjs/required.js",
    "npm:ajv@5.2.3/lib/dotjs/propertyNames.js",
    "npm:ajv@5.2.3/lib/dotjs/properties.js",
    "npm:ajv@5.2.3/lib/dotjs/pattern.js",
    "npm:ajv@5.2.3/lib/dotjs/oneOf.js",
    "npm:ajv@5.2.3/lib/dotjs/not.js",
    "npm:ajv@5.2.3/lib/dotjs/multipleOf.js",
    "npm:ajv@5.2.3/lib/dotjs/_limitProperties.js",
    "npm:ajv@5.2.3/lib/dotjs/_limitLength.js",
    "npm:ajv@5.2.3/lib/dotjs/_limitItems.js",
    "npm:ajv@5.2.3/lib/dotjs/_limit.js",
    "npm:ajv@5.2.3/lib/dotjs/items.js",
    "npm:ajv@5.2.3/lib/dotjs/format.js",
    "npm:ajv@5.2.3/lib/dotjs/enum.js",
    "npm:ajv@5.2.3/lib/dotjs/dependencies.js",
    "npm:ajv@5.2.3/lib/dotjs/contains.js",
    "npm:ajv@5.2.3/lib/dotjs/const.js",
    "npm:ajv@5.2.3/lib/dotjs/anyOf.js",
    "npm:ajv@5.2.3/lib/dotjs/allOf.js",
    "npm:ajv@5.2.3/lib/dotjs/ref.js",
    "npm:ajv@5.2.3/lib/compile/formats.js",
    "npm:json-stable-stringify@1.0.1/index.js",
    "npm:json-stable-stringify@1.0.1.json",
    "npm:jsonify@0.0.0/index.js",
    "npm:jsonify@0.0.0.json",
    "npm:jsonify@0.0.0/lib/stringify.js",
    "npm:jsonify@0.0.0/lib/parse.js",
    "npm:ajv@5.2.3/lib/cache.js",
    "npm:ajv@5.2.3/lib/compile/index.js",
    "npm:eslint@4.8.0/lib/config/config-ops.js",
    "npm:minimatch@3.0.4/minimatch.js",
    "npm:minimatch@3.0.4.json",
    "npm:brace-expansion@1.1.8/index.js",
    "npm:brace-expansion@1.1.8.json",
    "npm:balanced-match@1.0.0/index.js",
    "npm:balanced-match@1.0.0.json",
    "npm:concat-map@0.0.1/index.js",
    "npm:concat-map@0.0.1.json",
    "npm:eslint@4.8.0/lib/code-path-analysis/code-path-analyzer.js",
    "npm:eslint@4.8.0/lib/code-path-analysis/debug-helpers.js",
    "npm:eslint@4.8.0/lib/code-path-analysis/id-generator.js",
    "npm:eslint@4.8.0/lib/code-path-analysis/code-path-segment.js",
    "npm:eslint@4.8.0/lib/code-path-analysis/code-path.js",
    "npm:eslint@4.8.0/lib/code-path-analysis/code-path-state.js",
    "npm:eslint@4.8.0/lib/code-path-analysis/fork-context.js",
    "npm:eslint@4.8.0/conf/default-config-options.js",
    "npm:eslint@4.8.0/conf/blank-script.json",
    "npm:levn@0.3.0/lib/index.js",
    "npm:levn@0.3.0.json",
    "npm:type-check@0.3.2/lib/index.js",
    "npm:type-check@0.3.2.json",
    "npm:type-check@0.3.2/lib/check.js",
    "npm:prelude-ls@1.1.2/lib/index.js",
    "npm:prelude-ls@1.1.2.json",
    "npm:prelude-ls@1.1.2/lib/Num.js",
    "npm:prelude-ls@1.1.2/lib/Str.js",
    "npm:prelude-ls@1.1.2/lib/Obj.js",
    "npm:prelude-ls@1.1.2/lib/List.js",
    "npm:prelude-ls@1.1.2/lib/Func.js",
    "npm:type-check@0.3.2/lib/parse-type.js",
    "npm:levn@0.3.0/lib/cast.js",
    "npm:levn@0.3.0/lib/parse-string.js",
    "npm:eslint-scope@3.7.1/lib/index.js",
    "npm:eslint-scope@3.7.1.json",
    "npm:eslint-scope@3.7.1/package.json",
    "npm:eslint-scope@3.7.1/lib/scope.js",
    "npm:eslint-scope@3.7.1/lib/definition.js",
    "npm:eslint-scope@3.7.1/lib/variable.js",
    "npm:eslint-scope@3.7.1/lib/reference.js",
    "npm:eslint-scope@3.7.1/lib/referencer.js",
    "npm:eslint-scope@3.7.1/lib/pattern-visitor.js",
    "npm:esrecurse@4.2.0/esrecurse.js",
    "npm:esrecurse@4.2.0.json",
    "npm:esrecurse@4.2.0/package.json",
    "npm:object-assign@4.1.1/index.js",
    "npm:object-assign@4.1.1.json",
    "npm:eslint-scope@3.7.1/lib/scope-manager.js",
    "npm:brace@0.10.0/theme/monokai.js",
    "npm:brace@0.10.0.json",
    "npm:brace@0.10.0/mode/jsx.js",
    "npm:brace@0.10.0/mode/javascript.js",
    "npm:brace@0.10.0/worker/javascript.js",
    "npm:brace@0.10.0/mode/html.js",
    "npm:brace@0.10.0/worker/html.js",
    "npm:brace@0.10.0/worker/css.js",
    "npm:brace@0.10.0/index.js",
    "npm:w3c-blob@0.0.1/browser.js",
    "npm:w3c-blob@0.0.1.json",
    "npm:brace@0.10.0/ext/language_tools.js",
    "npm:babel-standalone@6.26.0/babel.js",
    "npm:babel-standalone@6.26.0.json",
    "npm:babel-preset-react@6.24.1/lib/index.js",
    "npm:babel-preset-react@6.24.1.json",
    "npm:babel-plugin-transform-react-display-name@6.25.0/lib/index.js",
    "npm:babel-plugin-transform-react-display-name@6.25.0.json",
    "npm:babel-plugin-syntax-jsx@6.18.0/lib/index.js",
    "npm:babel-plugin-syntax-jsx@6.18.0.json",
    "npm:babel-plugin-transform-react-jsx@6.24.1/lib/index.js",
    "npm:babel-plugin-transform-react-jsx@6.24.1.json",
    "npm:babel-helper-builder-react-jsx@6.26.0/lib/index.js",
    "npm:babel-helper-builder-react-jsx@6.26.0.json",
    "npm:babel-types@6.26.0/lib/index.js",
    "npm:babel-types@6.26.0.json",
    "npm:babel-types@6.26.0/lib/react.js",
    "npm:babel-types@6.26.0/lib/definitions/index.js",
    "npm:babel-runtime@6.26.0/helpers/typeof.js",
    "npm:babel-runtime@6.26.0.json",
    "npm:babel-runtime@6.26.0/core-js/symbol.js",
    "npm:core-js@2.5.7/library/fn/symbol/index.js",
    "npm:core-js@2.5.7.json",
    "npm:core-js@2.5.7/library/modules/_core.js",
    "npm:core-js@2.5.7/library/modules/es7.symbol.observable.js",
    "npm:core-js@2.5.7/library/modules/_wks-define.js",
    "npm:core-js@2.5.7/library/modules/_object-dp.js",
    "npm:core-js@2.5.7/library/modules/_descriptors.js",
    "npm:core-js@2.5.7/library/modules/_fails.js",
    "npm:core-js@2.5.7/library/modules/_to-primitive.js",
    "npm:core-js@2.5.7/library/modules/_is-object.js",
    "npm:core-js@2.5.7/library/modules/_ie8-dom-define.js",
    "npm:core-js@2.5.7/library/modules/_dom-create.js",
    "npm:core-js@2.5.7/library/modules/_global.js",
    "npm:core-js@2.5.7/library/modules/_an-object.js",
    "npm:core-js@2.5.7/library/modules/_wks-ext.js",
    "npm:core-js@2.5.7/library/modules/_wks.js",
    "npm:core-js@2.5.7/library/modules/_uid.js",
    "npm:core-js@2.5.7/library/modules/_shared.js",
    "npm:core-js@2.5.7/library/modules/_library.js",
    "npm:core-js@2.5.7/library/modules/es7.symbol.async-iterator.js",
    "npm:core-js@2.5.7/library/modules/es6.object.to-string.js",
    "npm:core-js@2.5.7/library/modules/es6.symbol.js",
    "npm:core-js@2.5.7/library/modules/_hide.js",
    "npm:core-js@2.5.7/library/modules/_property-desc.js",
    "npm:core-js@2.5.7/library/modules/_object-gops.js",
    "npm:core-js@2.5.7/library/modules/_object-pie.js",
    "npm:core-js@2.5.7/library/modules/_object-gopn.js",
    "npm:core-js@2.5.7/library/modules/_enum-bug-keys.js",
    "npm:core-js@2.5.7/library/modules/_object-keys-internal.js",
    "npm:core-js@2.5.7/library/modules/_shared-key.js",
    "npm:core-js@2.5.7/library/modules/_array-includes.js",
    "npm:core-js@2.5.7/library/modules/_to-absolute-index.js",
    "npm:core-js@2.5.7/library/modules/_to-integer.js",
    "npm:core-js@2.5.7/library/modules/_to-length.js",
    "npm:core-js@2.5.7/library/modules/_to-iobject.js",
    "npm:core-js@2.5.7/library/modules/_defined.js",
    "npm:core-js@2.5.7/library/modules/_iobject.js",
    "npm:core-js@2.5.7/library/modules/_cof.js",
    "npm:core-js@2.5.7/library/modules/_has.js",
    "npm:core-js@2.5.7/library/modules/_object-keys.js",
    "npm:core-js@2.5.7/library/modules/_object-gopd.js",
    "npm:core-js@2.5.7/library/modules/_object-gopn-ext.js",
    "npm:core-js@2.5.7/library/modules/_object-create.js",
    "npm:core-js@2.5.7/library/modules/_html.js",
    "npm:core-js@2.5.7/library/modules/_object-dps.js",
    "npm:core-js@2.5.7/library/modules/_is-array.js",
    "npm:core-js@2.5.7/library/modules/_enum-keys.js",
    "npm:core-js@2.5.7/library/modules/_set-to-string-tag.js",
    "npm:core-js@2.5.7/library/modules/_meta.js",
    "npm:core-js@2.5.7/library/modules/_redefine.js",
    "npm:core-js@2.5.7/library/modules/_export.js",
    "npm:core-js@2.5.7/library/modules/_ctx.js",
    "npm:core-js@2.5.7/library/modules/_a-function.js",
    "npm:babel-runtime@6.26.0/core-js/symbol/iterator.js",
    "npm:core-js@2.5.7/library/fn/symbol/iterator.js",
    "npm:core-js@2.5.7/library/modules/web.dom.iterable.js",
    "npm:core-js@2.5.7/library/modules/_iterators.js",
    "npm:core-js@2.5.7/library/modules/es6.array.iterator.js",
    "npm:core-js@2.5.7/library/modules/_iter-define.js",
    "npm:core-js@2.5.7/library/modules/_object-gpo.js",
    "npm:core-js@2.5.7/library/modules/_to-object.js",
    "npm:core-js@2.5.7/library/modules/_iter-create.js",
    "npm:core-js@2.5.7/library/modules/_iter-step.js",
    "npm:core-js@2.5.7/library/modules/_add-to-unscopables.js",
    "npm:core-js@2.5.7/library/modules/es6.string.iterator.js",
    "npm:core-js@2.5.7/library/modules/_string-at.js",
    "npm:babel-runtime@6.26.0/core-js/json/stringify.js",
    "npm:core-js@2.5.7/library/fn/json/stringify.js",
    "npm:babel-runtime@6.26.0/core-js/get-iterator.js",
    "npm:core-js@2.5.7/library/fn/get-iterator.js",
    "npm:core-js@2.5.7/library/modules/core.get-iterator.js",
    "npm:core-js@2.5.7/library/modules/core.get-iterator-method.js",
    "npm:core-js@2.5.7/library/modules/_classof.js",
    "npm:babel-types@6.26.0/lib/definitions/init.js",
    "npm:babel-types@6.26.0/lib/definitions/experimental.js",
    "npm:babel-types@6.26.0/lib/definitions/misc.js",
    "npm:babel-types@6.26.0/lib/definitions/jsx.js",
    "npm:babel-types@6.26.0/lib/definitions/flow.js",
    "npm:babel-types@6.26.0/lib/definitions/es2015.js",
    "npm:babel-types@6.26.0/lib/definitions/core.js",
    "npm:babel-types@6.26.0/lib/constants.js",
    "npm:babel-runtime@6.26.0/core-js/symbol/for.js",
    "npm:core-js@2.5.7/library/fn/symbol/for.js",
    "npm:lodash@4.17.10/uniq.js",
    "npm:lodash@4.17.10/_baseUniq.js",
    "npm:lodash@4.17.10/_setToArray.js",
    "npm:lodash@4.17.10/_createSet.js",
    "npm:lodash@4.17.10/noop.js",
    "npm:lodash@4.17.10/_Set.js",
    "npm:lodash@4.17.10/_root.js",
    "npm:lodash@4.17.10/_freeGlobal.js",
    "npm:lodash@4.17.10/_getNative.js",
    "npm:lodash@4.17.10/_getValue.js",
    "npm:lodash@4.17.10/_baseIsNative.js",
    "npm:lodash@4.17.10/_toSource.js",
    "npm:lodash@4.17.10/isObject.js",
    "npm:lodash@4.17.10/_isMasked.js",
    "npm:lodash@4.17.10/_coreJsData.js",
    "npm:lodash@4.17.10/isFunction.js",
    "npm:lodash@4.17.10/_baseGetTag.js",
    "npm:lodash@4.17.10/_objectToString.js",
    "npm:lodash@4.17.10/_getRawTag.js",
    "npm:lodash@4.17.10/_Symbol.js",
    "npm:lodash@4.17.10/_cacheHas.js",
    "npm:lodash@4.17.10/_arrayIncludesWith.js",
    "npm:lodash@4.17.10/_arrayIncludes.js",
    "npm:lodash@4.17.10/_baseIndexOf.js",
    "npm:lodash@4.17.10/_strictIndexOf.js",
    "npm:lodash@4.17.10/_baseIsNaN.js",
    "npm:lodash@4.17.10/_baseFindIndex.js",
    "npm:lodash@4.17.10/_SetCache.js",
    "npm:lodash@4.17.10/_setCacheHas.js",
    "npm:lodash@4.17.10/_setCacheAdd.js",
    "npm:lodash@4.17.10/_MapCache.js",
    "npm:lodash@4.17.10/_mapCacheSet.js",
    "npm:lodash@4.17.10/_getMapData.js",
    "npm:lodash@4.17.10/_isKeyable.js",
    "npm:lodash@4.17.10/_mapCacheHas.js",
    "npm:lodash@4.17.10/_mapCacheGet.js",
    "npm:lodash@4.17.10/_mapCacheDelete.js",
    "npm:lodash@4.17.10/_mapCacheClear.js",
    "npm:lodash@4.17.10/_Map.js",
    "npm:lodash@4.17.10/_ListCache.js",
    "npm:lodash@4.17.10/_listCacheSet.js",
    "npm:lodash@4.17.10/_assocIndexOf.js",
    "npm:lodash@4.17.10/eq.js",
    "npm:lodash@4.17.10/_listCacheHas.js",
    "npm:lodash@4.17.10/_listCacheGet.js",
    "npm:lodash@4.17.10/_listCacheDelete.js",
    "npm:lodash@4.17.10/_listCacheClear.js",
    "npm:lodash@4.17.10/_Hash.js",
    "npm:lodash@4.17.10/_hashSet.js",
    "npm:lodash@4.17.10/_nativeCreate.js",
    "npm:lodash@4.17.10/_hashHas.js",
    "npm:lodash@4.17.10/_hashGet.js",
    "npm:lodash@4.17.10/_hashDelete.js",
    "npm:lodash@4.17.10/_hashClear.js",
    "npm:lodash@4.17.10/clone.js",
    "npm:lodash@4.17.10/_baseClone.js",
    "npm:lodash@4.17.10/keys.js",
    "npm:lodash@4.17.10/isArrayLike.js",
    "npm:lodash@4.17.10/isLength.js",
    "npm:lodash@4.17.10/_baseKeys.js",
    "npm:lodash@4.17.10/_nativeKeys.js",
    "npm:lodash@4.17.10/_overArg.js",
    "npm:lodash@4.17.10/_isPrototype.js",
    "npm:lodash@4.17.10/_arrayLikeKeys.js",
    "npm:lodash@4.17.10/isTypedArray.js",
    "npm:lodash@4.17.10/_nodeUtil.js",
    "npm:lodash@4.17.10/_baseUnary.js",
    "npm:lodash@4.17.10/_baseIsTypedArray.js",
    "npm:lodash@4.17.10/isObjectLike.js",
    "npm:lodash@4.17.10/_isIndex.js",
    "npm:lodash@4.17.10/isBuffer.js",
    "npm:lodash@4.17.10/stubFalse.js",
    "npm:lodash@4.17.10/isArray.js",
    "npm:lodash@4.17.10/isArguments.js",
    "npm:lodash@4.17.10/_baseIsArguments.js",
    "npm:lodash@4.17.10/_baseTimes.js",
    "npm:lodash@4.17.10/isSet.js",
    "npm:lodash@4.17.10/_baseIsSet.js",
    "npm:lodash@4.17.10/_getTag.js",
    "npm:lodash@4.17.10/_WeakMap.js",
    "npm:lodash@4.17.10/_Promise.js",
    "npm:lodash@4.17.10/_DataView.js",
    "npm:lodash@4.17.10/isMap.js",
    "npm:lodash@4.17.10/_baseIsMap.js",
    "npm:lodash@4.17.10/_initCloneObject.js",
    "npm:lodash@4.17.10/_getPrototype.js",
    "npm:lodash@4.17.10/_baseCreate.js",
    "npm:lodash@4.17.10/_initCloneByTag.js",
    "npm:lodash@4.17.10/_cloneTypedArray.js",
    "npm:lodash@4.17.10/_cloneArrayBuffer.js",
    "npm:lodash@4.17.10/_Uint8Array.js",
    "npm:lodash@4.17.10/_cloneSymbol.js",
    "npm:lodash@4.17.10/_cloneRegExp.js",
    "npm:lodash@4.17.10/_cloneDataView.js",
    "npm:lodash@4.17.10/_initCloneArray.js",
    "npm:lodash@4.17.10/_getAllKeysIn.js",
    "npm:lodash@4.17.10/keysIn.js",
    "npm:lodash@4.17.10/_baseKeysIn.js",
    "npm:lodash@4.17.10/_nativeKeysIn.js",
    "npm:lodash@4.17.10/_getSymbolsIn.js",
    "npm:lodash@4.17.10/stubArray.js",
    "npm:lodash@4.17.10/_getSymbols.js",
    "npm:lodash@4.17.10/_arrayFilter.js",
    "npm:lodash@4.17.10/_arrayPush.js",
    "npm:lodash@4.17.10/_baseGetAllKeys.js",
    "npm:lodash@4.17.10/_getAllKeys.js",
    "npm:lodash@4.17.10/_copySymbolsIn.js",
    "npm:lodash@4.17.10/_copyObject.js",
    "npm:lodash@4.17.10/_baseAssignValue.js",
    "npm:lodash@4.17.10/_defineProperty.js",
    "npm:lodash@4.17.10/_assignValue.js",
    "npm:lodash@4.17.10/_copySymbols.js",
    "npm:lodash@4.17.10/_copyArray.js",
    "npm:lodash@4.17.10/_cloneBuffer.js",
    "npm:lodash@4.17.10/_baseAssignIn.js",
    "npm:lodash@4.17.10/_baseAssign.js",
    "npm:lodash@4.17.10/_arrayEach.js",
    "npm:lodash@4.17.10/_Stack.js",
    "npm:lodash@4.17.10/_stackSet.js",
    "npm:lodash@4.17.10/_stackHas.js",
    "npm:lodash@4.17.10/_stackGet.js",
    "npm:lodash@4.17.10/_stackDelete.js",
    "npm:lodash@4.17.10/_stackClear.js",
    "npm:to-fast-properties@1.0.3/index.js",
    "npm:to-fast-properties@1.0.3.json",
    "npm:babel-types@6.26.0/lib/flow.js",
    "npm:babel-types@6.26.0/lib/converters.js",
    "npm:lodash@4.17.10/isRegExp.js",
    "npm:lodash@4.17.10/_baseIsRegExp.js",
    "npm:lodash@4.17.10/isPlainObject.js",
    "npm:babel-runtime@6.26.0/core-js/number/max-safe-integer.js",
    "npm:core-js@2.5.7/library/fn/number/max-safe-integer.js",
    "npm:core-js@2.5.7/library/modules/es6.number.max-safe-integer.js",
    "npm:babel-types@6.26.0/lib/validators.js",
    "npm:babel-types@6.26.0/lib/retrievers.js",
    "npm:babel-runtime@6.26.0/core-js/object/create.js",
    "npm:core-js@2.5.7/library/fn/object/create.js",
    "npm:core-js@2.5.7/library/modules/es6.object.create.js",
    "npm:babel-runtime@6.26.0/core-js/object/keys.js",
    "npm:core-js@2.5.7/library/fn/object/keys.js",
    "npm:core-js@2.5.7/library/modules/es6.object.keys.js",
    "npm:core-js@2.5.7/library/modules/_object-sap.js",
    "npm:babel-runtime@6.26.0/core-js/object/get-own-property-symbols.js",
    "npm:core-js@2.5.7/library/fn/object/get-own-property-symbols.js",
    "npm:babel-preset-flow@6.23.0/lib/index.js",
    "npm:babel-preset-flow@6.23.0.json",
    "npm:babel-plugin-transform-flow-strip-types@6.22.0/lib/index.js",
    "npm:babel-plugin-transform-flow-strip-types@6.22.0.json",
    "npm:babel-plugin-syntax-flow@6.18.0/lib/index.js",
    "npm:babel-plugin-syntax-flow@6.18.0.json"
  ]
}
});


/***/ }),

/***/ 2:
/*!*********************************!*\
  !*** multi ./src/index_jspm.ls ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/marcomora/Documents/Github/unstuck_extension/src/index_jspm.ls */"./src/index_jspm.ls");


/***/ })

/******/ });