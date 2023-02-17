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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  top: 0;\\r\\n  margin: 25px 5px;\\r\\n  border-bottom: 1px solid rgba(191, 211, 202, 0.562);\\r\\n  position:sticky;\\r\\n  \\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 55px;\\r\\n  margin-left: 32px;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  list-style-type: none;\\r\\n  display: flex;\\r\\n  width: 50%;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: flex;\\r\\n  padding: 1rem 3rem;\\r\\n  border-top: 2px solid rgb(77, 15, 15);\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: 700;\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  bottom: 0;\\r\\n}\\r\\n\\r\\nfooter p {\\r\\n  font: 1rem;\\r\\n  color: #050000;\\r\\n  font-weight: 700;\\r\\n  margin-left: 100px;\\r\\n}\\r\\n.github {\\r\\n  color: rgb(255, 0, 234);\\r\\n}\\r\\n\\r\\n.fa-regular {\\r\\n  color: rgb(255, 0, 234);\\r\\n}\\r\\n\\r\\n#meals_list {\\r\\n  width: 90%;\\r\\n  margin-top: 80px;\\r\\n  padding-top: 1rem;\\r\\n  padding-bottom: 10rem;\\r\\n}\\r\\n \\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n.card {\\r\\n  margin-top: 1rem;\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\n.card a {\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.comments_button {\\r\\n  border-radius: 1.2rem;\\r\\n  margin-top: 15px;\\r\\n}\\r\\n\\r\\n.display_none {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.display__block {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.block_scroll {\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.image_section {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.thumb {\\r\\n  width: 300px;\\r\\n  height: auto;\\r\\n  margin: 20px 0;\\r\\n}\\r\\n\\r\\n#popup_section {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  backdrop-filter: blur(5px);\\r\\n  z-index: 1000;\\r\\n  overflow: scroll;\\r\\n}\\r\\n\\r\\n#popup_container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  background-color: #fff;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n#popup_close {\\r\\n  width: 20px;\\r\\n  position: absolute;\\r\\n  top: 10px;\\r\\n  right: 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#prev_comments {\\r\\n  display: flex;\\r\\n  padding-bottom: 30px;\\r\\n}\\r\\n\\r\\n.load_comments {\\r\\n  max-width: 400px;\\r\\n  min-width: 375px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.comment_container {\\r\\n  border: 1px solid gray;\\r\\n  border-radius: 10px;\\r\\n  padding: 10px 10px;\\r\\n  margin-bottom: 20px;\\r\\n  min-width: 320px;\\r\\n}\\r\\n\\r\\n.dateOf_text {\\r\\n  align-self: flex-end;\\r\\n}\\r\\n\\r\\n.information {\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.instructions {\\r\\n  text-align: justify;\\r\\n  text-justify: inter-word;\\r\\n}\\r\\n\\r\\n@media (min-width: 600px) {\\r\\n  .comment_section {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: baseline;\\r\\n    justify-content: space-around;\\r\\n  }\\r\\n}\\r\\n\\r\\n.add_comment {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 10px 20px;\\r\\n  padding-bottom: 60px;\\r\\n}\\r\\n\\r\\n#name {\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n#comment {\\r\\n  margin-top: 10px;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#comments_List {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://meal-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://meal-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://meal-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://meal-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://meal-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://meal-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://meal-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://meal-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://meal-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://meal-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_getLogo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getLogo.js */ \"./src/modules/getLogo.js\");\n/* harmony import */ var _modules_meals_featchAndLoadMeals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/meals/featchAndLoadMeals.js */ \"./src/modules/meals/featchAndLoadMeals.js\");\n/* harmony import */ var _popup_popupContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup/popupContainer.js */ \"./src/popup/popupContainer.js\");\n\n\n\n\n\n\nwindow.onload = () => {\n  (0,_modules_getLogo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_meals_featchAndLoadMeals_js__WEBPACK_IMPORTED_MODULE_2__.loadMeals)();\n  (0,_popup_popupContainer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n};\n\n\n//# sourceURL=webpack://meal-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/Comments/addComment.js":
/*!********************************************!*\
  !*** ./src/modules/Comments/addComment.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComments.js */ \"./src/modules/Comments/displayComments.js\");\n\r\n\r\nconst addComments = async (idMeal) => {\r\n  const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jcTX0b7AP0QeAh1m307k/comments';\r\n  const user = document.getElementById('name');\r\n  const comment = document.getElementById('comment');\r\n  const dataToPost = {\r\n    item_id: idMeal,\r\n    username: user.value,\r\n    comment: comment.value,\r\n  };\r\n  const response = await fetch(commentUrl, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(dataToPost),\r\n  });\r\n\r\n  user.value = '';\r\n  comment.value = '';\r\n  (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(idMeal);\r\n\r\n  if (!response.ok) {\r\n    const message = `An error has occured: ${response.status}`;\r\n    throw new Error(message);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComments);\n\n//# sourceURL=webpack://meal-app/./src/modules/Comments/addComment.js?");

/***/ }),

/***/ "./src/modules/Comments/countComments.js":
/*!***********************************************!*\
  !*** ./src/modules/Comments/countComments.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countComments = () => {\r\n  const container = document.getElementById('comments_List');\r\n  const { length } = container.getElementsByTagName('li');\r\n  const title = document.getElementById('comments_title');\r\n  title.innerHTML = `(${length}) Comments `;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);\n\n//# sourceURL=webpack://meal-app/./src/modules/Comments/countComments.js?");

/***/ }),

/***/ "./src/modules/Comments/displayComments.js":
/*!*************************************************!*\
  !*** ./src/modules/Comments/displayComments.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _featchComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./featchComments.js */ \"./src/modules/Comments/featchComments.js\");\n/* harmony import */ var _countComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countComments.js */ \"./src/modules/Comments/countComments.js\");\n\r\n\r\n\r\nconst displayComments = async (idMeals) => {\r\n  const comments = await (0,_featchComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(idMeals);\r\n  const commentContainer = document.getElementById('comments_List');\r\n  const container = document.getElementById('error_message');\r\n  container.textContent = '';\r\n  let prevComments = '';\r\n  if (comments) {\r\n    comments.forEach((e) => {\r\n      prevComments += `\r\n        <li class='comment_container'>\r\n          <h5><b>@${e.username}</b></h5>\r\n          <h5>${e.comment}</h5>\r\n          <h6 class=\"dateOf_text text-end\">${e.creation_date}</h6>\r\n        </li>\r\n      `;\r\n    });\r\n    commentContainer.innerHTML = prevComments;\r\n  } else {\r\n    container.textContent = 'There are no comments yet for this meal.';\r\n  }\r\n  (0,_countComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);\n\n//# sourceURL=webpack://meal-app/./src/modules/Comments/displayComments.js?");

/***/ }),

/***/ "./src/modules/Comments/featchComments.js":
/*!************************************************!*\
  !*** ./src/modules/Comments/featchComments.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jcTX0b7AP0QeAh1m307k/comments?item_id=';\r\n\r\nconst featchComments = async (idMeal) => {\r\n  let comments = [];\r\n  const response = await fetch(commentUrl + idMeal);\r\n  if (response.status >= 400 && response.status < 600) {\r\n    return false;\r\n  }\r\n  comments = await response.json();\r\n  return comments;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (featchComments);\n\n//# sourceURL=webpack://meal-app/./src/modules/Comments/featchComments.js?");

/***/ }),

/***/ "./src/modules/Likes/addLikes.js":
/*!***************************************!*\
  !*** ./src/modules/Likes/addLikes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addLikes = async (idMeal) => {\r\n  const likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jcTX0b7AP0QeAh1m307k/likes';\r\n  const newLike = {\r\n    item_id: idMeal,\r\n  };\r\n  await fetch(likeUrl, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(newLike),\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLikes);\n\n//# sourceURL=webpack://meal-app/./src/modules/Likes/addLikes.js?");

/***/ }),

/***/ "./src/modules/Likes/displayNewLikes.js":
/*!**********************************************!*\
  !*** ./src/modules/Likes/displayNewLikes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchLikes.js */ \"./src/modules/Likes/fetchLikes.js\");\n/* harmony import */ var _addLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addLikes.js */ \"./src/modules/Likes/addLikes.js\");\n\r\n\r\n\r\n\r\nconst updateLikes = async (mealID) => {\r\n  const likeNode = document.querySelector(`#likes_${mealID}`);\r\n  await (0,_addLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mealID);\r\n  const newLike = await (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_0__.fetchMealLikes)(mealID);\r\n  likeNode.textContent = `${newLike} likes`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLikes);\n\n//# sourceURL=webpack://meal-app/./src/modules/Likes/displayNewLikes.js?");

/***/ }),

/***/ "./src/modules/Likes/fetchLikes.js":
/*!*****************************************!*\
  !*** ./src/modules/Likes/fetchLikes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAllLikes\": () => (/* binding */ fetchAllLikes),\n/* harmony export */   \"fetchMealLikes\": () => (/* binding */ fetchMealLikes)\n/* harmony export */ });\nconst likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jcTX0b7AP0QeAh1m307k/likes';\r\n\r\nconst fetchAllLikes = async () => {\r\n  const response = await fetch(likeUrl);\r\n  if (response.status >= 400 && response.status < 600) {\r\n    return false;\r\n  }\r\n  const like = await response.json();\r\n  return like;\r\n};\r\n\r\nconst fetchMealLikes = async (mealId) => {\r\n  const allLikes = await fetchAllLikes();\r\n  const mealLikes = [];\r\n  allLikes.forEach((like) => {\r\n    if (mealId === like.item_id) {\r\n      mealLikes.push(like.likes);\r\n    }\r\n  });\r\n  return mealLikes[0]; // reduce function here to sum all likes of a given mealID\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://meal-app/./src/modules/Likes/fetchLikes.js?");

/***/ }),

/***/ "./src/modules/getLogo.js":
/*!********************************!*\
  !*** ./src/modules/getLogo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_vintage_restaurant_menu_23_2147491098_avif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/vintage-restaurant-menu_23-2147491098.avif */ \"./src/img/vintage-restaurant-menu_23-2147491098.avif\");\n\n\nconst getLogo = () => {\n  const logo = document.querySelector('.logo');\n  logo.src = _img_vintage_restaurant_menu_23_2147491098_avif__WEBPACK_IMPORTED_MODULE_0__;\n  logo.alt = 'logo';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLogo);\n\n//# sourceURL=webpack://meal-app/./src/modules/getLogo.js?");

/***/ }),

/***/ "./src/modules/meals/containerForMeal.js":
/*!***********************************************!*\
  !*** ./src/modules/meals/containerForMeal.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mealContainer = (meal, likes) => {\r\n  const mealElement = document.createElement('li');\r\n  mealElement.classList.add('col-md-6');\r\n  mealElement.classList.add('col-lg-4');\r\n  mealElement.classList.add('col-xxl-3');\r\n  mealElement.innerHTML = `\r\n  <article id=${meal.idMeal}>\r\n    <div class='card h-95'>\r\n      <img src=${meal.strMealThumb} class=\"card-img-top\" alt=${meal.strMeal}>\r\n      <div class=\"card-body\">\r\n        <header class='row'>\r\n          <div class=\"col\">\r\n            <span class='fs-5'>${meal.strMeal}</span><br> \r\n            <span class=\"fs-6\">${meal.strArea}</span>\r\n          </div>\r\n          <div class=\"col d-flex justify-content-end\">\r\n            <a href=\"#\" id=\"like_${meal.idMeal}\" flex-column align-items-center class=\"d-flex justify-content-center\">\r\n              <i class=\"fa-regular fa-heart fa-2x\"></i>\r\n              <small id=\"likes_${meal.idMeal}\">${likes} likes</small>\r\n            </a>\r\n          </div>\r\n        </header>\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col\">\r\n            <small>${meal.strCategory}</small>\r\n          </div>\r\n          <div class=\"col text-end\">\r\n            <button id=\"comments_${meal.idMeal}\" class='btn comments_button btn-outline-primary'>Comments</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>  \r\n  </article>  \r\n  `;\r\n  return mealElement;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealContainer);\r\n\n\n//# sourceURL=webpack://meal-app/./src/modules/meals/containerForMeal.js?");

/***/ }),

/***/ "./src/modules/meals/countMeals.js":
/*!*****************************************!*\
  !*** ./src/modules/meals/countMeals.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countMeals = () => {\r\n  const totalMeals = document.querySelector('.total-meals');\r\n  const tot = document.querySelector('#meals_list').childElementCount;\r\n  totalMeals.innerHTML = `(${tot}) meals`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countMeals);\r\n\n\n//# sourceURL=webpack://meal-app/./src/modules/meals/countMeals.js?");

/***/ }),

/***/ "./src/modules/meals/desplayMeal.js":
/*!******************************************!*\
  !*** ./src/modules/meals/desplayMeal.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup_detailPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../popup/detailPopup.js */ \"./src/popup/detailPopup.js\");\n/* harmony import */ var _Likes_displayNewLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Likes/displayNewLikes.js */ \"./src/modules/Likes/displayNewLikes.js\");\n\r\n\r\n\r\n\r\nconst desplayMeal = (mealContainerElement, meal) => {\r\n  const mealsList = document.getElementById('meals_list');\r\n  mealsList.appendChild(mealContainerElement);\r\n\r\n  const btn = document.getElementById(`comments_${meal.idMeal}`);\r\n  btn.addEventListener('click', () => {\r\n    (0,_popup_detailPopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(meal.idMeal);\r\n  });\r\n  const likeBtn = document.querySelector(`#like_${meal.idMeal}`);\r\n  likeBtn.addEventListener('click', async () => {\r\n    await (0,_Likes_displayNewLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(meal.idMeal);\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (desplayMeal);\r\n\n\n//# sourceURL=webpack://meal-app/./src/modules/meals/desplayMeal.js?");

/***/ }),

/***/ "./src/modules/meals/featchAndLoadMeals.js":
/*!*************************************************!*\
  !*** ./src/modules/meals/featchAndLoadMeals.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMeals\": () => (/* binding */ getMeals),\n/* harmony export */   \"loadMeals\": () => (/* binding */ loadMeals)\n/* harmony export */ });\n/* harmony import */ var _Likes_fetchLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Likes/fetchLikes.js */ \"./src/modules/Likes/fetchLikes.js\");\n/* harmony import */ var _containerForMeal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containerForMeal.js */ \"./src/modules/meals/containerForMeal.js\");\n/* harmony import */ var _countMeals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countMeals.js */ \"./src/modules/meals/countMeals.js\");\n/* harmony import */ var _desplayMeal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desplayMeal.js */ \"./src/modules/meals/desplayMeal.js\");\n\r\n\r\n\r\n\r\n\r\nconst apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';\r\n\r\nconst getMeals = async () => {\r\n  const request = await fetch(apiUrl);\r\n  const { meals } = await request.json();\r\n  return meals;\r\n};\r\n\r\nconst loadMeals = async () => {\r\n  const meals = await getMeals();\r\n  meals.forEach(async (meal) => {\r\n    const like = await (0,_Likes_fetchLikes_js__WEBPACK_IMPORTED_MODULE_0__.fetchMealLikes)(meal.idMeal);\r\n    const cardElement = (0,_containerForMeal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(meal, like);\r\n    (0,_desplayMeal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(cardElement, meal);\r\n    (0,_countMeals_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://meal-app/./src/modules/meals/featchAndLoadMeals.js?");

/***/ }),

/***/ "./src/popup/closePopup.js":
/*!*********************************!*\
  !*** ./src/popup/closePopup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst closePopup = () => {\r\n  const popupSection = document.getElementById('popup_section');\r\n  const body = document.querySelector('body');\r\n  const nav = document.querySelector('nav');\r\n  const footer = document.querySelector('footer');\r\n  popupSection.classList.add('display_none');\r\n  popupSection.classList.remove('display_block');\r\n  body.classList.remove('block_scroll');\r\n  nav.classList.remove('display_none');\r\n  footer.classList.remove('display_none');\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closePopup);\n\n//# sourceURL=webpack://meal-app/./src/popup/closePopup.js?");

/***/ }),

/***/ "./src/popup/detailPopup.js":
/*!**********************************!*\
  !*** ./src/popup/detailPopup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayPopup.js */ \"./src/popup/displayPopup.js\");\n/* harmony import */ var _modules_Comments_displayComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Comments/displayComments.js */ \"./src/modules/Comments/displayComments.js\");\n\r\n\r\n\r\nconst getdetailsPopup = async (idMeal) => {\r\n  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';\r\n  const response = await fetch(apiUrl + idMeal);\r\n  const data = await response.json();\r\n\r\n  const category = document.querySelector('.category');\r\n  category.setAttribute('id', idMeal);\r\n  const area = document.querySelector('.area');\r\n  const instructions = document.querySelector('.instructions');\r\n  const mealName = document.querySelector('.mealName');\r\n  const mealImage = document.querySelector('.thumb');\r\n  const dataArray = data.meals[0];\r\n  category.innerHTML = `Category: ${dataArray.strCategory}`;\r\n  area.innerHTML = `Area: ${dataArray.strArea}`;\r\n  instructions.innerHTML = `<b>Instructions: </b>${dataArray.strInstructions}`;\r\n  mealName.innerHTML = dataArray.strMeal;\r\n  mealImage.src = dataArray.strMealThumb;\r\n  (0,_modules_Comments_displayComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(idMeal);\r\n  (0,_displayPopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getdetailsPopup);\n\n//# sourceURL=webpack://meal-app/./src/popup/detailPopup.js?");

/***/ }),

/***/ "./src/popup/displayPopup.js":
/*!***********************************!*\
  !*** ./src/popup/displayPopup.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayPopup = () => {\r\n  const popupSection = document.getElementById('popup_section');\r\n  const body = document.querySelector('body');\r\n  const nav = document.querySelector('nav');\r\n  const footer = document.querySelector('footer');\r\n\r\n  body.classList.add('block_scroll');\r\n  footer.classList.add('display_none');\r\n  nav.classList.add('display_none');\r\n  popupSection.classList.remove('display_none');\r\n  popupSection.classList.add('display_block');\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPopup);\n\n//# sourceURL=webpack://meal-app/./src/popup/displayPopup.js?");

/***/ }),

/***/ "./src/popup/popupContainer.js":
/*!*************************************!*\
  !*** ./src/popup/popupContainer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _closePopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closePopup.js */ \"./src/popup/closePopup.js\");\n/* harmony import */ var _modules_Comments_addComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Comments/addComment.js */ \"./src/modules/Comments/addComment.js\");\n\n\n\nconst createPopup = () => {\n  const popupSection = document.getElementById('popup_section');\n  const popupContainer = document.createElement('section');\n  popupContainer.setAttribute('id', 'popup_container');\n  popupContainer.innerHTML = `    \n      <div class='image_section'>\n       <img class='thumb' src=\"\" alt='meal image'/>  \n       <h2 class=\"mealName\"></h2>\n      </div>    \n      <section class='information'>\n        <h4 class='category'></h4>\n        <h4 class='area'></h4>\n        <p class='instructions'></p>\n      </section>\n      <section class='comment_section'>\n        <section class='load_comments'>\n          <h2 id='comments_title'>Comments</h2>\n          <div id='prev_comments'>          \n            <ul id=\"comments_List\"></ul>\n          </div>\n         <h5 id='error_message'></h5>\n        </section>\n        <section >\n          <form id='input_form' class=\"add_comment\" action=\"\">\n            <h2>Add your comment</h2>\n            <input id='name' class='form-control' type=\"text\" placeholder=\"Your name\" autocomplete='off' required>\n            <textarea id='comment' class='form-control' type=\"text\" rows='6' maxlength=\"50\" placeholder=\"Your insights\" autocomplete='off' required></textarea>\n            <button id='comment__button' class='btn btn-outline-primary commentsBtn' type=\"submit\">Comment</button>\n          </form>\n        </section>\n      </section>  \n      <i id='popup_close' class='fa-solid fa-xmark fa-2x'></i> \n        `;\n  popupSection.appendChild(popupContainer);\n  const closeIcon = document.getElementById('popup_close');\n  closeIcon.addEventListener('click', () => {\n    (0,_closePopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n  const form = document.getElementById('input_form');\n\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const idMeal = document.querySelector('.category').id;\n    (0,_modules_Comments_addComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(idMeal);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPopup);\n\n//# sourceURL=webpack://meal-app/./src/popup/popupContainer.js?");

/***/ }),

/***/ "./src/img/vintage-restaurant-menu_23-2147491098.avif":
/*!************************************************************!*\
  !*** ./src/img/vintage-restaurant-menu_23-2147491098.avif ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aefdd792e9e14b1bd09c.avif\";\n\n//# sourceURL=webpack://meal-app/./src/img/vintage-restaurant-menu_23-2147491098.avif?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;