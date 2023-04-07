/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apiFuncs.js":
/*!*************************!*\
  !*** ./src/apiFuncs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchWeatherData\": () => (/* binding */ fetchWeatherData),\n/* harmony export */   \"formatUrl\": () => (/* binding */ formatUrl)\n/* harmony export */ });\nfunction formatUrl(searchStr) {\n  const url = `http://api.weatherapi.com/v1/current.json?key=1878fcfaf02d4971951195654230304&q=${searchStr}`;\n  return url;\n}\nasync function fetchWeatherData(url) {\n  try {\n    const response = await fetch(url, { mode: 'cors' });\n    const weatherData = await response.json();\n    return weatherData;\n  } catch (error) {\n    console.log(error);\n    return error;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/apiFuncs.js?");

/***/ }),

/***/ "./src/formatData.js":
/*!***************************!*\
  !*** ./src/formatData.js ***!
  \***************************/
/***/ (() => {

eval("class Location {\n  constructor(country, localtime, name) {\n    this.country = country;\n    this.localtime = localtime;\n    this.name = name;\n  }\n}\n\nfunction updateLocation(loc) {\n  const location = new Location(loc.title, loc.author, loc.pages);\n  return location;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/formatData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiFuncs */ \"./src/apiFuncs.js\");\n/* harmony import */ var _formatData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatData */ \"./src/formatData.js\");\n/* harmony import */ var _formatData__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_formatData__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst searchForm = document.getElementById('search-form');\nconst img = document.querySelector('img');\n\nasync function getNewData(searchStr = 'New York City') {\n  const url = _apiFuncs__WEBPACK_IMPORTED_MODULE_0__.formatUrl(searchStr);\n  // console.log(rawData.location.country);\n  const rawData = await _apiFuncs__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData(url);\n  // let locData = updateLocation(rawData.location);\n  console.log(rawData);\n  img.src = `https:${rawData.current.condition.icon}`;\n}\n\nsearchForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const searchInput = document.getElementById('search-input');\n  // searchStr = searchInput.value;\n  getNewData(searchInput.value);\n});\n\ngetNewData();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;