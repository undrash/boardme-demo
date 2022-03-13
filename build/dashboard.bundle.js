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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Dashboard.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!../style/dashboard.scss":
/*!************************************************************************************************************************************************************!*\
  !*** C:/Projects/boardme-demo/node_modules/css-loader/dist/cjs.js!C:/Projects/boardme-demo/node_modules/sass-loader/lib/loader.js!../style/dashboard.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"../../node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./img/list.svg */ \"../style/img/list.svg\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./img/list-active.svg */ \"../style/img/list-active.svg\"));\nvar ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ./img/cards.svg */ \"../style/img/cards.svg\"));\nvar ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ./img/cards-active.svg */ \"../style/img/cards-active.svg\"));\nvar ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ./img/arrow-left.svg */ \"../style/img/arrow-left.svg\"));\nvar ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ./img/arrow-right.svg */ \"../style/img/arrow-right.svg\"));\nvar ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ./img/arrow-right-colored.svg */ \"../style/img/arrow-right-colored.svg\"));\nvar ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(/*! ./img/arrow-left-colored.svg */ \"../style/img/arrow-left-colored.svg\"));\nvar ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(/*! ./img/list-white.svg */ \"../style/img/list-white.svg\"));\n\n// Module\nexports.push([module.i, \"/** ==================================== HTML5 display definitions ==================================== */\\n*, *::after, *::before {\\n  box-sizing: border-box;\\n  /* Remove background highlight on touch from mobile devices */\\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\\n\\n/**\\r\\n * Reset browser margins and padding\\r\\n */\\nhtml, body, div, section, article, aside, header, hgroup, footer, nav, h1, h2, h3, h4, h5, h6, p, blockquote,\\naddress, time, span, em, strong, img, ol, ul, li, figure, canvas, video, th, td, tr {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  vertical-align: baseline;\\n  font: inherit; }\\n\\n/**\\r\\n * Correct `block` display not defined in IE 8/9.\\r\\n */\\narticle, aside, details, figcaption, figure, footer,\\nheader, hgroup, main, nav, section, summary {\\n  display: block; }\\n\\n/**\\r\\n * Correct `inline-block` display not defined in IE 8/9.\\r\\n */\\naudio, canvas, video {\\n  display: inline-block; }\\n\\n/**\\r\\n * Prevent modern browsers from displaying `audio` without controls.\\r\\n * Remove excess height in iOS 5 devices.\\r\\n */\\naudio:not([controls]) {\\n  display: none;\\n  height: 0; }\\n\\n/**\\r\\n * Address `[hidden]` styling not present in IE 8/9.\\r\\n * Hide the `template` element in IE, Safari, and Firefox < 22.\\r\\n */\\n[hidden],\\ntemplate {\\n  display: none; }\\n\\n/** ==================================== Base ==================================== */\\n/**\\r\\n * 1. Set default font family to sans-serif.\\r\\n * 2. Prevent iOS text size adjust after orientation change, without disabling\\r\\n *    user zoom.\\r\\n */\\nhtml {\\n  font-family: sans-serif;\\n  -ms-text-size-adjust: 100%;\\n  -webkit-text-size-adjust: 100%; }\\n\\n/** ==================================== Links ==================================== */\\n/**\\r\\n * Remove the gray background color from active links in IE 10.\\r\\n */\\na {\\n  background: transparent;\\n  text-decoration: none;\\n  color: inherit;\\n  text-decoration: none;\\n  /** Improve readability when focused and also mouse hovered in all browsers */ }\\n  a:link, a :visited, a :hover, a :active {\\n    text-decoration: none;\\n    outline: 0; }\\n  a:hover {\\n    cursor: pointer; }\\n\\n/** ==================================== Typography ==================================== */\\n/**\\r\\n * Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome.\\r\\n */\\nb,\\nstrong {\\n  font-weight: bold; }\\n\\n/**\\r\\n * Address styling not present in Safari 5 and Chrome.\\r\\n */\\ndfn {\\n  font-style: italic; }\\n\\nem {\\n  font-style: italic; }\\n\\n/**\\r\\n * Address differences between Firefox and other browsers.\\r\\n */\\nhr {\\n  -moz-box-sizing: content-box;\\n  box-sizing: content-box;\\n  height: 0; }\\n\\n/**\\r\\n * Address styling not present in IE 8/9.\\r\\n */\\nmark {\\n  background: #ff0;\\n  color: #000; }\\n\\n/** ==================================== Embedded content ==================================== */\\n/**\\r\\n * Remove border when inside `a` element in IE 8/9.\\r\\n */\\nimg {\\n  border: 0; }\\n\\n/**\\r\\n * Correct overflow displayed oddly in IE 9.\\r\\n */\\nsvg:not(:root) {\\n  overflow: hidden; }\\n\\n/**\\r\\n * 1. Correct font family not being inherited in all browsers.\\r\\n * 2. Correct font size not being inherited in all browsers.\\r\\n * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.\\r\\n */\\nbutton, input, select, textarea {\\n  font-family: inherit;\\n  font-size: 100%;\\n  margin: 0;\\n  resize: none; }\\n\\n/**\\r\\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\\r\\n * the UA stylesheet.\\r\\n */\\nbutton, input {\\n  line-height: normal;\\n  outline: none;\\n  border: none; }\\n\\n/**\\r\\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\\r\\n * All other form control elements do not inherit `text-transform` values.\\r\\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\\r\\n * Correct `select` style inheritance in Firefox 4+ and Opera.\\r\\n */\\nbutton, select {\\n  text-transform: none; }\\n\\n/**\\r\\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\\r\\n *    and `video` controls.\\r\\n * 2. Correct inability to style clickable `input` types in iOS.\\r\\n * 3. Improve usability and consistency of cursor style between image-type\\r\\n *    `input` and others.\\r\\n */\\nbutton,\\ninput[type=\\\"button\\\"],\\ninput[type=\\\"reset\\\"],\\ninput[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n  cursor: pointer;\\n  border: none; }\\n\\n/**\\r\\n * Re-set default cursor for disabled elements.\\r\\n */\\nbutton[disabled],\\ninput[disabled] {\\n  cursor: default; }\\n\\n/**\\r\\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\\r\\n * 2. Remove excess padding in IE 8/9/10.\\r\\n */\\ninput[type=\\\"checkbox\\\"],\\ninput[type=\\\"radio\\\"] {\\n  box-sizing: border-box;\\n  padding: 0; }\\n\\n/**\\r\\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\\r\\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\\r\\n *    (include `-moz` to future-proof).\\r\\n */\\ninput[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield;\\n  -moz-box-sizing: content-box;\\n  -webkit-box-sizing: content-box;\\n  box-sizing: content-box;\\n  /** Remove inner padding and search cancel button in Safari 5 and Chrome on OS X */ }\\n  input[type=\\\"search\\\"]::-webkit-search-cancel-button, input[type=\\\"search\\\"] ::-webkit-search-decoration {\\n    -webkit-appearance: none; }\\n\\n/**\\r\\n * Remove inner padding and border in Firefox 4+.\\r\\n */\\nbutton::-moz-focus-inner,\\ninput::-moz-focus-inner {\\n  border: 0;\\n  padding: 0; }\\n\\n/**\\r\\n * 1. Remove default vertical scrollbar in IE 8/9.\\r\\n * 2. Improve readability and alignment in all browsers.\\r\\n */\\ntextarea {\\n  overflow: auto;\\n  /* 1 */\\n  vertical-align: top;\\n  /* 2 */ }\\n\\n/** ==================================== Tables ==================================== */\\n/**\\r\\n * Remove most spacing between table cells.\\r\\n */\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\nul {\\n  list-style: none; }\\n\\n/** ==================================== Clearfix ==================================== */\\n.clearfix {\\n  zoom: 1; }\\n  .clearfix::before, .clearfix ::after {\\n    content: \\\"\\\";\\n    display: block; }\\n  .clearfix::after {\\n    clear: both;\\n    visibility: hidden;\\n    display: block;\\n    font-size: 0;\\n    content: \\\".\\\";\\n    height: 0; }\\n\\n/** ==================================== Inputs and buttons ==================================== */\\ninput, textarea, button {\\n  -webkit-appearance: none;\\n  border-radius: 0; }\\n\\ninput:focus, textarea:focus {\\n  outline: none; }\\n\\nbody {\\n  background: linear-gradient(44.75deg, #EBF2FF 0%, #FCFDFF 100%);\\n  margin: 0;\\n  height: 100vh; }\\n\\n.text {\\n  height: 10px;\\n  border-radius: 9px;\\n  width: 100%;\\n  background-color: #98A3C3;\\n  margin-bottom: 15px;\\n  transition: background-color 0.3s ease-in-out; }\\n  .text.nav {\\n    background-color: #3F59A6; }\\n  .text.medium {\\n    height: 18px;\\n    margin-bottom: 25px; }\\n  .text.large {\\n    height: 25px;\\n    margin-bottom: 50px;\\n    border-radius: 25px; }\\n  .text.w-10 {\\n    width: 10%; }\\n  .text.w-20 {\\n    width: 20%; }\\n  .text.w-30 {\\n    width: 30%; }\\n  .text.w-40 {\\n    width: 40%; }\\n  .text.w-50 {\\n    width: 50%; }\\n  .text.w-60 {\\n    width: 60%; }\\n  .text.w-70 {\\n    width: 70%; }\\n  .text.w-80 {\\n    width: 80%; }\\n  .text.w-90 {\\n    width: 90%; }\\n\\n.oval {\\n  height: 50px;\\n  width: 50px;\\n  background-color: #CBD0E1;\\n  border-radius: 50px;\\n  display: inline-block;\\n  margin-right: 15px;\\n  transition: background-color 0.3s ease-in-out; }\\n  .oval.nav {\\n    background-color: #3F59A6; }\\n\\n.svg-bg {\\n  transition: fill 0.3s ease-in-out; }\\n\\n.secondary-btn {\\n  border: 1px solid #CBD0E1;\\n  border-radius: 5px;\\n  max-width: 240px;\\n  padding: 20px 0;\\n  text-align: center;\\n  transition: all 0.3s ease-in-out;\\n  cursor: pointer;\\n  background-color: #ffffff; }\\n  .secondary-btn .text {\\n    background-color: #CBD0E1;\\n    display: inline-block;\\n    margin-bottom: 0; }\\n  .secondary-btn:hover {\\n    border: 1px solid #3F59A6;\\n    box-shadow: 0 7px 30px -10px #a6bbec; }\\n    .secondary-btn:hover .text {\\n      background-color: #3F59A6; }\\n\\n.tab-btn {\\n  transition: background-color 0.3s ease-in-out;\\n  cursor: pointer; }\\n  .tab-btn:hover {\\n    background-color: #3F59A6; }\\n  .tab-btn.active {\\n    background-color: #3F59A6; }\\n\\n.btn {\\n  height: 60px;\\n  width: 60px;\\n  border-radius: 5px;\\n  background-color: #FFFFFF;\\n  box-shadow: 0 7px 16px -10px #CEDAF7;\\n  cursor: pointer;\\n  transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out; }\\n  .btn.list {\\n    float: right;\\n    background: url(\" + ___CSS_LOADER_URL___0___ + \") center no-repeat #FFFFFF;\\n    transition: background 0.3s ease-in-out; }\\n    .btn.list:hover, .btn.list.active {\\n      background: url(\" + ___CSS_LOADER_URL___1___ + \") center no-repeat #FFFFFF; }\\n  .btn.card {\\n    float: left;\\n    background: url(\" + ___CSS_LOADER_URL___2___ + \") center no-repeat #FFFFFF; }\\n    .btn.card:hover, .btn.card.active {\\n      background: url(\" + ___CSS_LOADER_URL___3___ + \") center no-repeat #FFFFFF; }\\n  .btn.arrow-left-btn {\\n    background: url(\" + ___CSS_LOADER_URL___4___ + \") center no-repeat #FFFFFF;\\n    float: left; }\\n  .btn.arrow-right-btn {\\n    background: url(\" + ___CSS_LOADER_URL___5___ + \") center no-repeat #FFFFFF;\\n    float: right; }\\n  .btn.dark {\\n    background-color: #465C9E;\\n    box-shadow: 0 7px 16px -10px #000000; }\\n    .btn.dark:hover {\\n      box-shadow: 0 7px 30px -10px #000000; }\\n    .btn.dark.arrow-right-btn {\\n      background: url(\" + ___CSS_LOADER_URL___6___ + \") center no-repeat rgba(70, 92, 158, 0.5);\\n      float: right; }\\n    .btn.dark.arrow-left-btn {\\n      background: url(\" + ___CSS_LOADER_URL___7___ + \") center no-repeat rgba(70, 92, 158, 0.5);\\n      float: left; }\\n  .btn:hover {\\n    box-shadow: 0 7px 30px -10px #a6bbec; }\\n    .btn:hover .svg-bg {\\n      fill: #3F59A6; }\\n    .btn:hover.arrow-left-btn {\\n      background: url(\" + ___CSS_LOADER_URL___7___ + \") center no-repeat #FFFFFF; }\\n    .btn:hover.arrow-right-btn {\\n      background: url(\" + ___CSS_LOADER_URL___6___ + \") center no-repeat #FFFFFF; }\\n\\n.nav-btn {\\n  height: 60px;\\n  width: 60px;\\n  border-radius: 5px;\\n  background-color: #FFFFFF;\\n  box-shadow: 0 7px 16px -10px #CEDAF7;\\n  cursor: pointer;\\n  transition: box-shadow 0.3s ease-in-out; }\\n\\n.mini-menu-btn {\\n  background: url(\" + ___CSS_LOADER_URL___8___ + \") no-repeat center #3F59A6;\\n  border-radius: 50px;\\n  margin: 30px 0 0 50px;\\n  width: 150px;\\n  height: 50px;\\n  display: none;\\n  cursor: pointer; }\\n\\n.close-btn {\\n  width: 30px;\\n  height: 30px;\\n  cursor: pointer;\\n  transition: fill 0.3s ease-in-out; }\\n  .close-btn:hover .svg-bg {\\n    fill: #3F59A6; }\\n\\n.white-bg {\\n  border-radius: 5px;\\n  background-color: #FFFFFF;\\n  box-shadow: 0 7px 17px -10px #CEDAF7;\\n  width: 100%;\\n  overflow: auto;\\n  transition: box-shadow 0.3s ease-in-out; }\\n  .white-bg:hover {\\n    box-shadow: 0 7px 30px -10px #a6bbec; }\\n\\n.margin-t-40 {\\n  margin-top: 40px; }\\n\\n.sidebar-nav {\\n  height: 100vh;\\n  background: linear-gradient(180deg, #20346B 0%, #222D4F 100%);\\n  width: 330px;\\n  float: left;\\n  position: fixed;\\n  transition: left 0.6s cubic-bezier(0.23, 1, 0.32, 1); }\\n  .sidebar-nav .nav-content-container {\\n    overflow-y: auto;\\n    height: calc(100vh - 125px); }\\n  .sidebar-nav .nav-links-container {\\n    margin-top: 50px; }\\n  .sidebar-nav .link-btn-wrapper {\\n    padding: 25px 30px 25px 50px;\\n    transition: background-color 0.3s ease-in-out;\\n    cursor: pointer; }\\n    .sidebar-nav .link-btn-wrapper:hover {\\n      background-color: rgba(70, 92, 158, 0.5); }\\n      .sidebar-nav .link-btn-wrapper:hover .link-btn {\\n        background-color: #a7c6de; }\\n      .sidebar-nav .link-btn-wrapper:hover .svg-bg {\\n        fill: #a7c6de; }\\n    .sidebar-nav .link-btn-wrapper.active {\\n      background-color: #465C9E; }\\n      .sidebar-nav .link-btn-wrapper.active .link-btn {\\n        background-color: #ffffff; }\\n    .sidebar-nav .link-btn-wrapper img, .sidebar-nav .link-btn-wrapper svg {\\n      display: inline-block;\\n      vertical-align: middle;\\n      margin-right: 10px; }\\n  .sidebar-nav .link-btn {\\n    background-color: #3F59A6;\\n    height: 10px;\\n    border-radius: 9px;\\n    width: 100%;\\n    display: inline-block;\\n    transition: background-color 0.3s ease-in-out; }\\n    .sidebar-nav .link-btn.w-40 {\\n      width: 40%; }\\n    .sidebar-nav .link-btn.w-50 {\\n      width: 50%; }\\n    .sidebar-nav .link-btn.w-60 {\\n      width: 60%; }\\n    .sidebar-nav .link-btn.w-70 {\\n      width: 70%; }\\n    .sidebar-nav .link-btn.w-80 {\\n      width: 80%; }\\n    .sidebar-nav .link-btn.w-90 {\\n      width: 90%; }\\n    .sidebar-nav .link-btn.active {\\n      background-color: #ffffff; }\\n  .sidebar-nav .nav-text-container {\\n    padding: 0 30px 0 50px;\\n    margin-top: 100px; }\\n  .sidebar-nav .nav-footer-container {\\n    background-color: #131F45;\\n    width: 330px;\\n    padding: 35px;\\n    position: fixed;\\n    bottom: 0;\\n    cursor: pointer;\\n    transition: background-color 0.3s ease-in-out; }\\n    .sidebar-nav .nav-footer-container:hover {\\n      background-color: #101a34; }\\n      .sidebar-nav .nav-footer-container:hover .oval, .sidebar-nav .nav-footer-container:hover .text {\\n        background-color: #a7c6de; }\\n  .sidebar-nav .footer-text-container {\\n    display: inline-block;\\n    width: calc(100% - 70px); }\\n    .sidebar-nav .footer-text-container .medium {\\n      margin-bottom: 20px; }\\n    .sidebar-nav .footer-text-container .footer-text {\\n      margin-bottom: 0; }\\n\\n.main-content-container {\\n  width: calc(100% - 330px);\\n  display: inline-block;\\n  height: 100vh;\\n  max-width: 1700px;\\n  padding: 100px 100px 20px;\\n  overflow: auto;\\n  float: left;\\n  margin-left: 330px; }\\n\\n@media only screen and (max-width: 1235px) {\\n  .main-content-container {\\n    padding: 100px 50px 50px;\\n    overflow: initial;\\n    height: 100%; } }\\n\\n@media only screen and (max-width: 1024px) {\\n  body {\\n    height: 100%; }\\n  .sidebar-nav {\\n    left: -250px;\\n    top: 0;\\n    width: 250px;\\n    z-index: 5; }\\n    .sidebar-nav.visible {\\n      left: 0; }\\n    .sidebar-nav .nav-footer-container {\\n      width: 250px; }\\n  .mini-menu-btn {\\n    display: block; }\\n  .main-content-container {\\n    width: 100%;\\n    padding: 50px;\\n    margin-left: 0; } }\\n\\n@media only screen and (max-width: 750px) {\\n  .mini-menu-btn {\\n    margin: 30px 0 0 25px; }\\n  .main-content-container {\\n    height: 100%;\\n    padding: 50px 25px 25px; } }\\n\\n.dashboard-content-header {\\n  position: relative;\\n  margin-bottom: 100px; }\\n  .dashboard-content-header .text {\\n    display: inline-block;\\n    margin-right: 45px; }\\n    .dashboard-content-header .text.large {\\n      display: block; }\\n  .dashboard-content-header #dashboard-more-btn {\\n    position: absolute;\\n    top: 0;\\n    right: 0; }\\n    .dashboard-content-header #dashboard-more-btn svg {\\n      position: absolute;\\n      left: 50%;\\n      transform: translateX(-50%) translateY(-50%);\\n      top: 50%; }\\n\\n.arrow-right {\\n  position: absolute;\\n  right: 0;\\n  top: 50%;\\n  transform: translateY(-50%); }\\n\\n.stats-left {\\n  width: 50%;\\n  float: left;\\n  border-right: 1px solid #CBD0E1;\\n  padding: 40px 50px 50px; }\\n\\n.stats-right {\\n  width: 50%;\\n  float: right; }\\n  .stats-right .text-container {\\n    padding: 40px 50px 0; }\\n\\n.stats-bars-container {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-top: 45px; }\\n\\n.stats-bar-group {\\n  height: 150px;\\n  position: relative;\\n  width: 35px; }\\n\\n.stat-bar {\\n  width: 15px;\\n  border-radius: 5px;\\n  background-color: #76D1D8;\\n  height: 100%;\\n  display: inline-block;\\n  position: absolute;\\n  bottom: 0;\\n  left: 0; }\\n  .stat-bar.h-25 {\\n    height: 25%; }\\n  .stat-bar.h-35 {\\n    height: 35%; }\\n  .stat-bar.h-45 {\\n    height: 45%; }\\n  .stat-bar.h-55 {\\n    height: 55%; }\\n  .stat-bar.h-65 {\\n    height: 65%; }\\n  .stat-bar.h-75 {\\n    height: 75%; }\\n  .stat-bar.purple {\\n    background-color: #C688F1;\\n    right: 0;\\n    bottom: 0;\\n    left: initial; }\\n\\n.stats-list-group {\\n  margin-top: 55px;\\n  padding: 40px 50px 40px;\\n  transition: background-color 0.3s ease-in-out;\\n  cursor: pointer; }\\n  .stats-list-group:hover {\\n    background-color: #F5F8FF; }\\n  .stats-list-group .text-container {\\n    width: calc(100% - 90px);\\n    display: inline-block;\\n    vertical-align: middle;\\n    position: relative;\\n    padding: 0 0 0 20px; }\\n    .stats-list-group .text-container .text:nth-child(2) {\\n      margin-bottom: 0; }\\n\\n.stat-oval {\\n  width: 85px;\\n  height: 85px;\\n  border-radius: 50px;\\n  border: 25px solid #FFE6F8;\\n  background-color: #FF8CDF;\\n  display: inline-block;\\n  vertical-align: middle; }\\n  .stat-oval.purple {\\n    background-color: #B48CFF;\\n    border: 25px solid #EFE6FF; }\\n  .stat-oval.red {\\n    background-color: #FF8CA7;\\n    border: 25px solid #FFE6EC; }\\n  .stat-oval.yellow {\\n    background-color: #FFCD8C;\\n    border: 25px solid #FFF4E6; }\\n  .stat-oval.blue {\\n    background-color: #8CB4FF;\\n    border: 25px solid #E6EEFF; }\\n\\n.bottom-stats-container {\\n  margin-top: 35px; }\\n  .bottom-stats-container .stats-section {\\n    width: 48%;\\n    border-radius: 5px;\\n    background-color: #FFFFFF;\\n    box-shadow: 0 7px 17px -10px #CEDAF7;\\n    overflow: auto;\\n    min-height: 380px;\\n    position: relative; }\\n    .bottom-stats-container .stats-section.left {\\n      float: left; }\\n    .bottom-stats-container .stats-section.right {\\n      float: right;\\n      margin-top: 3000px; }\\n    .bottom-stats-container .stats-section.dark {\\n      background: linear-gradient(180deg, #20346B 0%, #222D4F 100%); }\\n      .bottom-stats-container .stats-section.dark .text {\\n        background-color: #3F59A6; }\\n    .bottom-stats-container .stats-section .nav-btn-container {\\n      position: absolute;\\n      width: 140px;\\n      bottom: 50px;\\n      right: 50px; }\\n      .bottom-stats-container .stats-section .nav-btn-container .btn {\\n        display: inline-block; }\\n\\n.bottom-stats-text-container {\\n  padding: 50px 50px 35px; }\\n  .bottom-stats-text-container .text:last-child {\\n    margin-bottom: 0; }\\n\\n.profile-container {\\n  position: relative;\\n  border-top: 1px solid #CBD0E1;\\n  padding: 50px;\\n  cursor: pointer;\\n  transition: background-color 0.3s ease-in-out; }\\n  .profile-container:hover {\\n    background-color: #F5F8FF; }\\n  .profile-container .oval {\\n    margin-right: 5px;\\n    width: 60px;\\n    height: 60px; }\\n  .profile-container .arrow-right {\\n    right: 50px; }\\n\\n.side-panel {\\n  width: 35%;\\n  height: 100%;\\n  position: fixed;\\n  right: -580px;\\n  top: 0;\\n  box-shadow: 0 7px 86px -10px rgba(3, 42, 133, 0.51);\\n  background-color: #FFFFFF;\\n  max-width: 530px;\\n  overflow: auto;\\n  transition: right 0.6s cubic-bezier(0.23, 1, 0.32, 1); }\\n  .side-panel.visible {\\n    right: 0;\\n    top: 0; }\\n\\n#side-panel-close-btn {\\n  position: absolute;\\n  top: 40px;\\n  right: 40px; }\\n\\n.side-panel-header {\\n  margin-bottom: 50px;\\n  padding: 100px 60px 50px; }\\n  .side-panel-header .text {\\n    display: inline-block; }\\n    .side-panel-header .text:first-child {\\n      margin-right: 45px; }\\n\\n.text-group {\\n  margin-bottom: 70px;\\n  padding: 0 60px; }\\n  .text-group .large {\\n    margin-bottom: 20px; }\\n  .text-group .secondary-btn {\\n    margin-top: 30px; }\\n\\n.stats-list-container .stats-list-group {\\n  border-top: 1px solid #CBD0E1;\\n  margin-top: 0;\\n  padding: 25px 60px;\\n  cursor: pointer;\\n  transition: background-color 0.3s ease-in-out; }\\n  .stats-list-container .stats-list-group:hover {\\n    background-color: #F5F8FF; }\\n\\n@media only screen and (max-width: 1450px) {\\n  .stats-bar-group:first-child, .stats-bar-group:last-child {\\n    display: none; } }\\n\\n@media only screen and (max-width: 1235px) {\\n  .dashboard-content-header {\\n    margin-bottom: 50px; }\\n  .stats-left, .stats-right {\\n    padding: 40px 25px 25px; }\\n  .bottom-stats-container .stats-section {\\n    min-height: 338px; }\\n  .bottom-stats-text-container {\\n    padding: 40px 25px 25px; }\\n  .profile-container {\\n    padding: 40px 25px 40px; } }\\n\\n@media only screen and (max-width: 1024px) {\\n  .side-panel {\\n    width: 50%; }\\n  .side-panel-header {\\n    padding: 100px 30px 25px; }\\n  .text-group {\\n    padding: 0 25px; }\\n  .stats-list-container .stats-list-group {\\n    padding: 25px; } }\\n\\n@media only screen and (max-width: 750px) {\\n  .stats-left {\\n    width: 100%;\\n    border-bottom: 1px solid #CBD0E1;\\n    border-right: none; }\\n  .stats-right {\\n    width: 100%; }\\n  .stats-bar-group:first-child, .stats-bar-group:last-child {\\n    display: block; }\\n  .bottom-stats-container .stats-section {\\n    width: 100%;\\n    margin-bottom: 35px; }\\n  .side-panel {\\n    width: 75%; }\\n  .stats-list-container .stats-list-group {\\n    padding: 25px 15px 25px 25px; }\\n    .stats-list-container .stats-list-group .text-container {\\n      width: calc(100% - 65px);\\n      padding-left: 10px; }\\n    .stats-list-container .stats-list-group .stat-oval {\\n      width: 60px;\\n      height: 60px; }\\n      .stats-list-container .stats-list-group .stat-oval.purple {\\n        border: 20px solid #EFE6FF; }\\n      .stats-list-container .stats-list-group .stat-oval.red {\\n        border: 20px solid #FFE6EC; }\\n      .stats-list-container .stats-list-group .stat-oval.yellow {\\n        border: 20px solid #FFF4E6; }\\n      .stats-list-container .stats-list-group .stat-oval.blue {\\n        border: 20px solid #E6EEFF; } }\\n\\n@media only screen and (max-width: 520px) {\\n  .dashboard-content-header .text {\\n    display: block; }\\n  .stats-bar-group:first-child, .stats-bar-group:last-child {\\n    display: none; }\\n  .profile-container .oval {\\n    width: 50px;\\n    height: 50px; }\\n  .profile-container .arrow-right {\\n    right: 25px; } }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///../style/dashboard.scss?C:/Projects/boardme-demo/node_modules/css-loader/dist/cjs.js!C:/Projects/boardme-demo/node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!****************************************************************************!*\
  !*** C:/Projects/boardme-demo/node_modules/css-loader/dist/runtime/api.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///C:/Projects/boardme-demo/node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/url-escape.js":
/*!***********************************************************************************!*\
  !*** C:/Projects/boardme-demo/node_modules/css-loader/dist/runtime/url-escape.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///C:/Projects/boardme-demo/node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "../../node_modules/style-loader/addStyles.js":
/*!***********************************************************************!*\
  !*** C:/Projects/boardme-demo/node_modules/style-loader/addStyles.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nvar stylesInDom = {},\n\tmemoize = function(fn) {\n\t\tvar memo;\n\t\treturn function () {\n\t\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\t\treturn memo;\n\t\t};\n\t},\n\tisOldIE = memoize(function() {\n\t\treturn /msie [6-9]\\b/.test(self.navigator.userAgent.toLowerCase());\n\t}),\n\tgetHeadElement = memoize(function () {\n\t\treturn document.head || document.getElementsByTagName(\"head\")[0];\n\t}),\n\tsingletonElement = null,\n\tsingletonCounter = 0,\n\tstyleElementsInsertedAtTop = [];\n\nmodule.exports = function(list, options) {\n\tif(typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif(typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (typeof options.singleton === \"undefined\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the bottom of <head>.\n\tif (typeof options.insertAt === \"undefined\") options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list);\n\taddStylesToDom(styles, options);\n\n\treturn function update(newList) {\n\t\tvar mayRemove = [];\n\t\tfor(var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\t\tfor(var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor(var j = 0; j < domStyle.parts.length; j++)\n\t\t\t\t\tdomStyle.parts[j]();\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n}\n\nfunction addStylesToDom(styles, options) {\n\tfor(var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles(list) {\n\tvar styles = [];\n\tvar newStyles = {};\n\tfor(var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\t\tif(!newStyles[id])\n\t\t\tstyles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse\n\t\t\tnewStyles[id].parts.push(part);\n\t}\n\treturn styles;\n}\n\nfunction insertStyleElement(options, styleElement) {\n\tvar head = getHeadElement();\n\tvar lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];\n\tif (options.insertAt === \"top\") {\n\t\tif(!lastStyleElementInsertedAtTop) {\n\t\t\thead.insertBefore(styleElement, head.firstChild);\n\t\t} else if(lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\thead.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\thead.appendChild(styleElement);\n\t\t}\n\t\tstyleElementsInsertedAtTop.push(styleElement);\n\t} else if (options.insertAt === \"bottom\") {\n\t\thead.appendChild(styleElement);\n\t} else {\n\t\tthrow new Error(\"Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.\");\n\t}\n}\n\nfunction removeStyleElement(styleElement) {\n\tstyleElement.parentNode.removeChild(styleElement);\n\tvar idx = styleElementsInsertedAtTop.indexOf(styleElement);\n\tif(idx >= 0) {\n\t\tstyleElementsInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement(options) {\n\tvar styleElement = document.createElement(\"style\");\n\tstyleElement.type = \"text/css\";\n\tinsertStyleElement(options, styleElement);\n\treturn styleElement;\n}\n\nfunction createLinkElement(options) {\n\tvar linkElement = document.createElement(\"link\");\n\tlinkElement.rel = \"stylesheet\";\n\tinsertStyleElement(options, linkElement);\n\treturn linkElement;\n}\n\nfunction addStyle(obj, options) {\n\tvar styleElement, update, remove;\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\t\tstyleElement = singletonElement || (singletonElement = createStyleElement(options));\n\t\tupdate = applyToSingletonTag.bind(null, styleElement, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);\n\t} else if(obj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\") {\n\t\tstyleElement = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, styleElement);\n\t\tremove = function() {\n\t\t\tremoveStyleElement(styleElement);\n\t\t\tif(styleElement.href)\n\t\t\t\tURL.revokeObjectURL(styleElement.href);\n\t\t};\n\t} else {\n\t\tstyleElement = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, styleElement);\n\t\tremove = function() {\n\t\t\tremoveStyleElement(styleElement);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle(newObj) {\n\t\tif(newObj) {\n\t\t\tif(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)\n\t\t\t\treturn;\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag(styleElement, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (styleElement.styleSheet) {\n\t\tstyleElement.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = styleElement.childNodes;\n\t\tif (childNodes[index]) styleElement.removeChild(childNodes[index]);\n\t\tif (childNodes.length) {\n\t\t\tstyleElement.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyleElement.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag(styleElement, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyleElement.setAttribute(\"media\", media)\n\t}\n\n\tif(styleElement.styleSheet) {\n\t\tstyleElement.styleSheet.cssText = css;\n\t} else {\n\t\twhile(styleElement.firstChild) {\n\t\t\tstyleElement.removeChild(styleElement.firstChild);\n\t\t}\n\t\tstyleElement.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink(linkElement, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\tif(sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = linkElement.href;\n\n\tlinkElement.href = URL.createObjectURL(blob);\n\n\tif(oldSrc)\n\t\tURL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///C:/Projects/boardme-demo/node_modules/style-loader/addStyles.js?");

/***/ }),

/***/ "../style/dashboard.scss":
/*!*******************************!*\
  !*** ../style/dashboard.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./dashboard.scss */ \"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!../style/dashboard.scss\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ \"../../node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///../style/dashboard.scss?");

/***/ }),

/***/ "../style/img/arrow-left-colored.svg":
/*!*******************************************!*\
  !*** ../style/img/arrow-left-colored.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/Boardme-demo/img/arrow-left-colored.svg\";\n\n//# sourceURL=webpack:///../style/img/arrow-left-colored.svg?");

/***/ }),

/***/ "../style/img/arrow-left.svg":
/*!***********************************!*\
  !*** ../style/img/arrow-left.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/Boardme-demo/img/arrow-left.svg\";\n\n//# sourceURL=webpack:///../style/img/arrow-left.svg?");

/***/ }),

/***/ "../style/img/arrow-right-colored.svg":
/*!********************************************!*\
  !*** ../style/img/arrow-right-colored.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/Boardme-demo/img/arrow-right-colored.svg\";\n\n//# sourceURL=webpack:///../style/img/arrow-right-colored.svg?");

/***/ }),

/***/ "../style/img/arrow-right.svg":
/*!************************************!*\
  !*** ../style/img/arrow-right.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/Boardme-demo/img/arrow-right.svg\";\n\n//# sourceURL=webpack:///../style/img/arrow-right.svg?");

/***/ }),

/***/ "../style/img/cards-active.svg":
/*!*************************************!*\
  !*** ../style/img/cards-active.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/Boardme-demo/img/cards-active.svg\";\n\n//# sourceURL=webpack:///../style/img/cards-active.svg?");

/***/ }),

/***/ "../style/img/cards.svg":
/*!******************************!*\
  !*** ../style/img/cards.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/Boardme-demo/img/cards.svg\";\n\n//# sourceURL=webpack:///../style/img/cards.svg?");

/***/ }),

/***/ "../style/img/list-active.svg":
/*!************************************!*\
  !*** ../style/img/list-active.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/Boardme-demo/img/list-active.svg\";\n\n//# sourceURL=webpack:///../style/img/list-active.svg?");

/***/ }),

/***/ "../style/img/list-white.svg":
/*!***********************************!*\
  !*** ../style/img/list-white.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/Boardme-demo/img/list-white.svg\";\n\n//# sourceURL=webpack:///../style/img/list-white.svg?");

/***/ }),

/***/ "../style/img/list.svg":
/*!*****************************!*\
  !*** ../style/img/list.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/Boardme-demo/img/list.svg\";\n\n//# sourceURL=webpack:///../style/img/list.svg?");

/***/ }),

/***/ "./Dashboard.ts":
/*!**********************!*\
  !*** ./Dashboard.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\n__webpack_require__(/*! ../style/dashboard.scss */ \"../style/dashboard.scss\");\r\nconsole.log(\"Dasboard\");\r\nvar optionsBtn = document.getElementById(\"dashboard-more-btn\");\r\nvar dashboardSidePanel = document.getElementById(\"dashboard-side-panel\");\r\nvar dashboardSidePanelCloseBtn = document.getElementById(\"side-panel-close-btn\");\r\nvar sideMenuBtn = document.getElementById(\"mini-menu-btn\");\r\nvar sideBarNavPanel = document.getElementById(\"sidebar-nav\");\r\noptionsBtn.addEventListener(\"click\", function () {\r\n    dashboardSidePanel.classList.add(\"visible\");\r\n});\r\ndashboardSidePanelCloseBtn.addEventListener(\"click\", function () {\r\n    dashboardSidePanel.classList.remove(\"visible\");\r\n});\r\nsideMenuBtn.addEventListener(\"click\", function () {\r\n    sideBarNavPanel.classList.add(\"visible\");\r\n});\r\n\n\n//# sourceURL=webpack:///./Dashboard.ts?");

/***/ })

/******/ });