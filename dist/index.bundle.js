/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@tailwind base;\\r\\n@tailwind components;\\r\\n@tailwind utilities;\\r\\n\\r\\nhtml {\\r\\n    box-sizing: border-box;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n  }\\r\\n  *, *:before, *:after {\\r\\n    box-sizing: inherit;\\r\\n    margin: 0;\\r\\n  }\\r\\n\\r\\n  header {\\r\\n    font-size: 2em;\\r\\n    min-height: 5vh;\\r\\n  }\\r\\n\\r\\n  footer {\\r\\n    width: 100%;\\r\\n    font-size: 1em;\\r\\n    min-height: 2vh;\\r\\n    border-top-style: solid;\\r\\n    border-top-width: 0.1em;\\r\\n    border-color: black;\\r\\n  }\\r\\n\\r\\n  header {\\r\\n    border-bottom-style: solid;\\r\\n    border-bottom-width: 0.1em;\\r\\n    border-color: dimgray;\\r\\n  }\\r\\n\\r\\n  .sideBar {\\r\\n    min-height: 100%;\\r\\n    width: 15vw;\\r\\n    min-width: 140px;\\r\\n  }\\r\\n\\r\\n  .tasks {\\r\\n    border-left-style: solid;\\r\\n    border-left-width: 0.2em;\\r\\n    border-color: dimgray;\\r\\n    max-height: 100%;\\r\\n    width: 85vw;\\r\\n  }\\r\\n\\r\\n  #content {\\r\\n    display: flex;\\r\\n    min-height: 93vh;\\r\\n  }\\r\\n\\r\\n  .projectHeader, .taskHeader {\\r\\n    display: flex;\\r\\n    padding: .5em;\\r\\n    border-bottom-style: solid;\\r\\n    border-color: dimgray;\\r\\n    border-bottom-width: 0.2em;\\r\\n    justify-content: center;\\r\\n    font-size: 24px;\\r\\n  }\\r\\n\\r\\n  .projectTasks {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    align-items: center;\\r\\n    max-height: 100%;\\r\\n    gap: .8em;\\r\\n    padding: .8em;\\r\\n  }\\r\\n\\r\\n  .task {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: flex-start;\\r\\n    \\r\\n    align-items: center;\\r\\n    border-style: solid;\\r\\n    border-width: 0.2em;\\r\\n    border-color: black;\\r\\n    height: 12em;\\r\\n    width: 12em;\\r\\n    overflow: auto;\\r\\n    border-radius: 2em;\\r\\n    padding: 0.3em;\\r\\n    gap: 6px;\\r\\n  }\\r\\n\\r\\n  .project.addProject {\\r\\n    min-height: auto;\\r\\n  }\\r\\n\\r\\n  .project.addProject, .task.addTask {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    background: none;\\r\\n    color: inherit;\\r\\n    border: solid;\\r\\n    border-width: 0.2em;\\r\\n    border-color: black;\\r\\n    padding: 0;\\r\\n    font: inherit;\\r\\n    cursor: pointer;\\r\\n    outline: inherit;\\r\\n  }\\r\\n\\r\\n  input {\\r\\n    width: 85%;\\r\\n    border-radius: 2em;\\r\\n    border: 0;\\r\\n    padding-left: 0.2em;\\r\\n  }\\r\\n\\r\\n  input:focus {\\r\\n    outline:none!important;\\r\\n  }\\r\\n\\r\\n  .addTask {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    \\r\\n    align-items: center;\\r\\n    border-style: solid;\\r\\n    border-width: 0.2em;\\r\\n    border-color: black;\\r\\n    height: 12em;\\r\\n    width: 12em;\\r\\n    overflow: auto;\\r\\n    border-radius: 2em;\\r\\n    padding: 0.3em;\\r\\n    gap: 6px;\\r\\n  }\\r\\n\\r\\n  .project.addProject:hover, .task.addTask:hover {\\r\\n    background-color: lightgrey;\\r\\n  }\\r\\n\\r\\n  .projects {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    overflow: auto;\\r\\n    min-height: 84vh;\\r\\n    gap: 0.8em;\\r\\n    padding: 0.8em;\\r\\n    \\r\\n  }\\r\\n\\r\\n  .project {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    border-style: solid;\\r\\n    border-width: 0.2em;\\r\\n    border-color: black;\\r\\n    width: 90%;\\r\\n    min-height: 2em;\\r\\n    border-radius: 2em;\\r\\n  }\\r\\n\\r\\n  .addProject {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    border-style: solid;\\r\\n    border-width: 0.2em;\\r\\n    border-color: black;\\r\\n    width: 90%;\\r\\n    min-height: 2em;\\r\\n    border-radius: 2em;\\r\\n  }\\r\\n\\r\\n/* width */\\r\\n::-webkit-scrollbar {\\r\\n  width: 10px;\\r\\n}\\r\\n\\r\\n/* Track */\\r\\n::-webkit-scrollbar-track {\\r\\n  background: #f1f1f1;\\r\\n}\\r\\n\\r\\n/* Handle */\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background: #888;\\r\\n}\\r\\n\\r\\n/* Handle on hover */\\r\\n::-webkit-scrollbar-thumb:hover {\\r\\n  background: #555;\\r\\n}\\r\\n\\r\\n  .project:hover {\\r\\n    background-color: lightblue;\\r\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addButtons.ts":
/*!***************************!*\
  !*** ./src/addButtons.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.addTask = exports.addProject = exports.taskAddButton = void 0;\r\nconst _1 = __webpack_require__(/*! . */ \"./src/index.ts\");\r\nconst uiUpdater_1 = __webpack_require__(/*! ./uiUpdater */ \"./src/uiUpdater.ts\");\r\nlet projectAddButton = document.querySelector('.addProject');\r\nexports.taskAddButton = document.querySelector('.addTask');\r\nconst newDate = new Date(2000, 6, 2);\r\nfunction addProject() {\r\n    projectAddButton.addEventListener('click', () => {\r\n        if (_1.projectsSetup.projects[0]) {\r\n            let lastProjectNumber = parseInt(_1.projectsSetup.projects[_1.projectsSetup.projects.length - 1].name.replace(/^\\D+/g, ''));\r\n            _1.projectsSetup.addProject(`Project ${lastProjectNumber += 1}`);\r\n        }\r\n        else {\r\n            _1.projectsSetup.addProject(`Project 1`);\r\n        }\r\n        (0, uiUpdater_1.loopProjects)();\r\n    });\r\n}\r\nexports.addProject = addProject;\r\n;\r\nfunction addTask() {\r\n    exports.taskAddButton.addEventListener('click', () => {\r\n        if (_1.projectsSetup.projects[0]) {\r\n            _1.projectsSetup.projects[uiUpdater_1.projectIndex].addTask('bruh', newDate, 'desc');\r\n            (0, uiUpdater_1.loopTasks)(_1.projectsSetup.projects[uiUpdater_1.projectIndex]);\r\n        }\r\n        else {\r\n            return;\r\n        }\r\n    });\r\n}\r\nexports.addTask = addTask;\r\n\n\n//# sourceURL=webpack://todo-list/./src/addButtons.ts?");

/***/ }),

/***/ "./src/allProjectsObject.ts":
/*!**********************************!*\
  !*** ./src/allProjectsObject.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\n//Create new Project object when new project is added.\r\n//Probable gonna need an array of projects that can be selected as well.\r\n//Project object needs title, and array of task objects that are stored within the project.\r\n//When tasks are added, create task Object, and store in current Project Object\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Task = exports.Project = exports.AllProjects = void 0;\r\n;\r\nclass AllProjects {\r\n    constructor(projects) {\r\n        this.projects = projects;\r\n    }\r\n    ;\r\n    addProject(name) {\r\n        let newProject = new Project(name, []);\r\n        this.projects.push(newProject);\r\n    }\r\n    ;\r\n    logProjects() {\r\n        console.log(this);\r\n    }\r\n    ;\r\n}\r\nexports.AllProjects = AllProjects;\r\n;\r\n;\r\nclass Project {\r\n    constructor(name, tasks) {\r\n        this.name = name;\r\n        this.tasks = tasks;\r\n    }\r\n    ;\r\n    addTask(title, dueDate, description) {\r\n        let newTask = new Task(title, dueDate, description);\r\n        this.tasks.push(newTask);\r\n    }\r\n    ;\r\n}\r\nexports.Project = Project;\r\n;\r\nclass Task {\r\n    constructor(title, dueDate, description) {\r\n        this.title = title;\r\n        this.dueDate = dueDate;\r\n        this.description = description;\r\n    }\r\n    ;\r\n}\r\nexports.Task = Task;\r\n;\r\n\n\n//# sourceURL=webpack://todo-list/./src/allProjectsObject.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\n//Note\r\n// -cog wheel on tasks header to change amount of rows\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.projectsSetup = void 0;\r\n// -Add new Projects and Tasks button will always be at bottom/end of list to add new objects\r\n// -Add new projects\r\n// -When you click 'Add new Projects' just turn the 'Add new Projects' button to the new project, and move the add new project button down\r\n// -Add new Tasks within projects\r\n// -When different project is selected, present stored tasks\r\n// -New tasks will act similar, when you click 'Add new Task' button it turns the button into a new task and you can fill in the fields as necessary, also moves add new task button over\r\n// -add a bin button on the tasks in the bottom right to delete the tasks\r\n// -add a bin button the the right of projects to delete them (are you sure warning)\r\n//localStorage Test\r\n// export function catTom()\r\n//     let newCat = 'Phillip'\r\n// localStorage.setItem('myCat', newCat)\r\n// const cat = localStorage.getItem('myCat')\r\n// console.log(cat)\r\n// }\r\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\r\nconst allProjectsObject_1 = __webpack_require__(/*! ./allProjectsObject */ \"./src/allProjectsObject.ts\");\r\nconst todoSetup_1 = __webpack_require__(/*! ./todoSetup */ \"./src/todoSetup.ts\");\r\nconst localStorage_1 = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.ts\");\r\nexports.projectsSetup = new allProjectsObject_1.AllProjects([]);\r\n(0, localStorage_1.getLocalStorage)();\r\n(0, todoSetup_1.projectSetup)();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.ts?");

/***/ }),

/***/ "./src/localStorage.ts":
/*!*****************************!*\
  !*** ./src/localStorage.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getLocalStorage = exports.localProjectStorage = void 0;\r\nconst _1 = __webpack_require__(/*! . */ \"./src/index.ts\");\r\nfunction localProjectStorage() {\r\n    localStorage.setItem('allProjects', JSON.stringify(_1.projectsSetup));\r\n}\r\nexports.localProjectStorage = localProjectStorage;\r\n;\r\nfunction getLocalStorage() {\r\n    let storedProjects = localStorage.getItem('allProjects');\r\n    let parseProjects = JSON.parse(storedProjects);\r\n    if (!storedProjects) {\r\n        return;\r\n    }\r\n    ;\r\n    parseProjects.projects.forEach((project) => {\r\n        _1.projectsSetup.addProject(project.name);\r\n        populateTasks(_1.projectsSetup.projects[_1.projectsSetup.projects.length - 1], project.tasks);\r\n    });\r\n}\r\nexports.getLocalStorage = getLocalStorage;\r\n;\r\nfunction populateTasks(thisProject, tasks) {\r\n    tasks.forEach((task) => {\r\n        thisProject.addTask(task.title, task.dueDate, task.description);\r\n    });\r\n}\r\n;\r\n\n\n//# sourceURL=webpack://todo-list/./src/localStorage.ts?");

/***/ }),

/***/ "./src/todoSetup.ts":
/*!**************************!*\
  !*** ./src/todoSetup.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.projectSetup = void 0;\r\nconst _1 = __webpack_require__(/*! . */ \"./src/index.ts\");\r\nconst addButtons_1 = __webpack_require__(/*! ./addButtons */ \"./src/addButtons.ts\");\r\nconst uiUpdater_1 = __webpack_require__(/*! ./uiUpdater */ \"./src/uiUpdater.ts\");\r\nfunction projectSetup() {\r\n    (0, addButtons_1.addProject)();\r\n    (0, addButtons_1.addTask)();\r\n    (0, uiUpdater_1.loopProjects)();\r\n    if (_1.projectsSetup.projects[0]) {\r\n        (0, uiUpdater_1.loopTasks)(_1.projectsSetup.projects[0]);\r\n    }\r\n}\r\nexports.projectSetup = projectSetup;\r\n\n\n//# sourceURL=webpack://todo-list/./src/todoSetup.ts?");

/***/ }),

/***/ "./src/uiUpdater.ts":
/*!**************************!*\
  !*** ./src/uiUpdater.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.refreshTasks = exports.refreshProjects = exports.loopTasks = exports.loopProjects = exports.projectIndex = exports.projectAddButton = void 0;\r\nconst _1 = __webpack_require__(/*! . */ \"./src/index.ts\");\r\nconst addButtons_1 = __webpack_require__(/*! ./addButtons */ \"./src/addButtons.ts\");\r\nconst localStorage_1 = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.ts\");\r\nexports.projectAddButton = document.querySelector('.addProject');\r\nexports.projectIndex = 0;\r\nlet projectList = document.querySelector('.projects');\r\nlet projectTasks = document.querySelector('.projectTasks');\r\nconst taskHeader = document.querySelector('.taskHeader');\r\nfunction loopProjects() {\r\n    refreshProjects();\r\n    taskHeaderFix();\r\n    _1.projectsSetup.projects.forEach(project => {\r\n        let div = document.createElement('div');\r\n        let displayText = document.createElement('button');\r\n        let deleteButton = document.createElement('button');\r\n        div.classList.add('project', 'justify-around');\r\n        div.classList.add(`${project.name.replace(/\\s/g, '').toLowerCase()}`);\r\n        displayText.classList.add('w-full', 'pl-7', `${project.name.replace(/\\s/g, '').toLowerCase()}Title`);\r\n        deleteButton.classList.add('w-7');\r\n        deleteButton.textContent = 'X';\r\n        displayText.textContent = project.name;\r\n        projectList.insertBefore(div, exports.projectAddButton);\r\n        div.appendChild(displayText);\r\n        div.appendChild(deleteButton);\r\n        displayText.addEventListener('click', () => {\r\n            exports.projectIndex = _1.projectsSetup.projects.indexOf(project);\r\n            taskHeader.textContent = `${project.name} Tasks`;\r\n            loopTasks(project);\r\n        });\r\n        displayText.addEventListener('dblclick', () => renameProject(project));\r\n        deleteButton.addEventListener('click', () => deleteProject(project));\r\n    });\r\n    (0, localStorage_1.localProjectStorage)();\r\n}\r\nexports.loopProjects = loopProjects;\r\nfunction loopTasks(selectedProject) {\r\n    refreshTasks();\r\n    selectedProject.tasks.forEach(task => {\r\n        let div = document.createElement('div');\r\n        let taskTitle = document.createElement('div');\r\n        let taskDueDate = document.createElement('div');\r\n        let taskDescription = document.createElement('div');\r\n        let taskDeleteButton = document.createElement('button');\r\n        div.appendChild(taskTitle);\r\n        div.appendChild(taskDueDate);\r\n        div.appendChild(taskDescription);\r\n        div.appendChild(taskDeleteButton);\r\n        taskTitle.textContent = task.title;\r\n        taskDueDate.textContent = '10/10/2022';\r\n        taskDescription.textContent = task.description;\r\n        taskDeleteButton.textContent = 'X';\r\n        taskDescription.classList.add('h-full');\r\n        taskDeleteButton.classList.add('w-7', 'ml-36');\r\n        div.classList.add('task');\r\n        projectTasks.insertBefore(div, addButtons_1.taskAddButton);\r\n        taskDeleteButton.addEventListener('click', () => deleteTask(task));\r\n    });\r\n    (0, localStorage_1.localProjectStorage)();\r\n}\r\nexports.loopTasks = loopTasks;\r\n;\r\nfunction refreshProjects() {\r\n    const deleteProjects = document.querySelectorAll('.project');\r\n    deleteProjects.forEach((div) => {\r\n        div.remove();\r\n    });\r\n}\r\nexports.refreshProjects = refreshProjects;\r\nfunction refreshTasks() {\r\n    const deleteTasks = document.querySelectorAll('.task');\r\n    deleteTasks.forEach((div) => {\r\n        div.remove();\r\n    });\r\n}\r\nexports.refreshTasks = refreshTasks;\r\nfunction deleteProject(project) {\r\n    _1.projectsSetup.projects.splice(_1.projectsSetup.projects.indexOf(project), 1);\r\n    if (_1.projectsSetup.projects[0]) {\r\n        project.name = _1.projectsSetup.projects[0].name;\r\n        taskHeader.textContent = `${project.name} Tasks`;\r\n        loopTasks(_1.projectsSetup.projects[0]);\r\n    }\r\n    else {\r\n        refreshTasks();\r\n    }\r\n    loopProjects();\r\n}\r\n;\r\nfunction deleteTask(task) {\r\n    _1.projectsSetup.projects[exports.projectIndex].tasks.splice(_1.projectsSetup.projects[exports.projectIndex].tasks.indexOf(task), 1);\r\n    loopTasks(_1.projectsSetup.projects[exports.projectIndex]);\r\n}\r\n;\r\nfunction taskHeaderFix() {\r\n    if (_1.projectsSetup.projects[0]) {\r\n        taskHeader.textContent = `${_1.projectsSetup.projects[0].name} Tasks`;\r\n    }\r\n    else {\r\n        taskHeader.textContent = 'Project 1 Tasks';\r\n    }\r\n}\r\nfunction renameProject(project) {\r\n    let projectTitle = document.querySelector(`.${project.name.replace(/\\s/g, '').toLowerCase()}Title`);\r\n    projectTitle.replaceWith(document.createElement('input'));\r\n    project.name = 'user Input';\r\n    // loopProjects()\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/uiUpdater.ts?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;