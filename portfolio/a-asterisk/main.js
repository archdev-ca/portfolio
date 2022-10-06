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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles/app.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles/app.css ***!
  \****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/crates_study_x2.png */ \"./src/images/crates_study_x2.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\\n*//*\\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\\n*/\\n\\n*,\\n::before,\\n::after {\\n  box-sizing: border-box; /* 1 */\\n  border-width: 0; /* 2 */\\n  border-style: solid; /* 2 */\\n  border-color: #e5e7eb; /* 2 */\\n}\\n\\n::before,\\n::after {\\n  --tw-content: '';\\n}\\n\\n/*\\n1. Use a consistent sensible line-height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n3. Use a more readable tab size.\\n4. Use the user's configured `sans` font-family by default.\\n*/\\n\\nhtml {\\n  line-height: 1.5; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n  -moz-tab-size: 4; /* 3 */\\n  -o-tab-size: 4;\\n     tab-size: 4; /* 3 */\\n  font-family: Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\"; /* 4 */\\n}\\n\\n/*\\n1. Remove the margin in all browsers.\\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\\n*/\\n\\nbody {\\n  margin: 0; /* 1 */\\n  line-height: inherit; /* 2 */\\n}\\n\\n/*\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n3. Ensure horizontal rules are visible by default.\\n*/\\n\\nhr {\\n  height: 0; /* 1 */\\n  color: inherit; /* 2 */\\n  border-top-width: 1px; /* 3 */\\n}\\n\\n/*\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\n\\nabbr:where([title]) {\\n  -webkit-text-decoration: underline dotted;\\n          text-decoration: underline dotted;\\n}\\n\\n/*\\nRemove the default font size and weight for headings.\\n*/\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n\\n/*\\nReset links to optimize for opt-in styling instead of opt-out.\\n*/\\n\\na {\\n  color: inherit;\\n  text-decoration: inherit;\\n}\\n\\n/*\\nAdd the correct font weight in Edge and Safari.\\n*/\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/*\\n1. Use the user's configured `mono` font family by default.\\n2. Correct the odd `em` font sizing in all browsers.\\n*/\\n\\ncode,\\nkbd,\\nsamp,\\npre {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/*\\nAdd the correct font size in all browsers.\\n*/\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/*\\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\\n*/\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/*\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n3. Remove gaps between table borders by default.\\n*/\\n\\ntable {\\n  text-indent: 0; /* 1 */\\n  border-color: inherit; /* 2 */\\n  border-collapse: collapse; /* 3 */\\n}\\n\\n/*\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n3. Remove default padding in all browsers.\\n*/\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  font-weight: inherit; /* 1 */\\n  line-height: inherit; /* 1 */\\n  color: inherit; /* 1 */\\n  margin: 0; /* 2 */\\n  padding: 0; /* 3 */\\n}\\n\\n/*\\nRemove the inheritance of text transform in Edge and Firefox.\\n*/\\n\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Remove default button styles.\\n*/\\n\\nbutton,\\n[type='button'],\\n[type='reset'],\\n[type='submit'] {\\n  -webkit-appearance: button; /* 1 */\\n  background-color: transparent; /* 2 */\\n  background-image: none; /* 2 */\\n}\\n\\n/*\\nUse the modern Firefox focus style for all focusable elements.\\n*/\\n\\n:-moz-focusring {\\n  outline: auto;\\n}\\n\\n/*\\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\\n*/\\n\\n:-moz-ui-invalid {\\n  box-shadow: none;\\n}\\n\\n/*\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/*\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n\\n::-webkit-inner-spin-button,\\n::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/*\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n\\n[type='search'] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/*\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n\\n::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to `inherit` in Safari.\\n*/\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/*\\nRemoves the default spacing and border for appropriate elements.\\n*/\\n\\nblockquote,\\ndl,\\ndd,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nhr,\\nfigure,\\np,\\npre {\\n  margin: 0;\\n}\\n\\nfieldset {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nlegend {\\n  padding: 0;\\n}\\n\\nol,\\nul,\\nmenu {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/*\\nPrevent resizing textareas horizontally by default.\\n*/\\n\\ntextarea {\\n  resize: vertical;\\n}\\n\\n/*\\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\\n2. Set the default placeholder color to the user's configured gray 400 color.\\n*/\\n\\ninput::-moz-placeholder, textarea::-moz-placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\ninput::placeholder,\\ntextarea::placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\n/*\\nSet the default cursor for buttons.\\n*/\\n\\nbutton,\\n[role=\\\"button\\\"] {\\n  cursor: pointer;\\n}\\n\\n/*\\nMake sure disabled buttons don't get the pointer cursor.\\n*/\\n:disabled {\\n  cursor: default;\\n}\\n\\n/*\\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\\n   This can trigger a poorly considered lint error in some tools but is included by design.\\n*/\\n\\nimg,\\nsvg,\\nvideo,\\ncanvas,\\naudio,\\niframe,\\nembed,\\nobject {\\n  display: block; /* 1 */\\n  vertical-align: middle; /* 2 */\\n}\\n\\n/*\\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\\n*/\\n\\nimg,\\nvideo {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n*, ::before, ::after{\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgb(59 130 246 / 0.5);\\n  --tw-ring-offset-shadow: 0 0 #0000;\\n  --tw-ring-shadow: 0 0 #0000;\\n  --tw-shadow: 0 0 #0000;\\n  --tw-shadow-colored: 0 0 #0000;\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n\\n::-webkit-backdrop{\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgb(59 130 246 / 0.5);\\n  --tw-ring-offset-shadow: 0 0 #0000;\\n  --tw-ring-shadow: 0 0 #0000;\\n  --tw-shadow: 0 0 #0000;\\n  --tw-shadow-colored: 0 0 #0000;\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n\\n::backdrop{\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgb(59 130 246 / 0.5);\\n  --tw-ring-offset-shadow: 0 0 #0000;\\n  --tw-ring-shadow: 0 0 #0000;\\n  --tw-shadow: 0 0 #0000;\\n  --tw-shadow-colored: 0 0 #0000;\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n.container{\\n  width: 100%;\\n}\\n@media (min-width: 640px){\\n\\n  .container{\\n    max-width: 640px;\\n  }\\n}\\n@media (min-width: 768px){\\n\\n  .container{\\n    max-width: 768px;\\n  }\\n}\\n@media (min-width: 1024px){\\n\\n  .container{\\n    max-width: 1024px;\\n  }\\n}\\n@media (min-width: 1280px){\\n\\n  .container{\\n    max-width: 1280px;\\n  }\\n}\\n@media (min-width: 1536px){\\n\\n  .container{\\n    max-width: 1536px;\\n  }\\n}\\n.my-4{\\n  margin-top: 1rem;\\n  margin-bottom: 1rem;\\n}\\n.mx-auto{\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n.mb-4{\\n  margin-bottom: 1rem;\\n}\\n.mr-2{\\n  margin-right: 0.5rem;\\n}\\n.ml-2{\\n  margin-left: 0.5rem;\\n}\\n.flex{\\n  display: flex;\\n}\\n.inline-flex{\\n  display: inline-flex;\\n}\\n.h-4{\\n  height: 1rem;\\n}\\n.w-4{\\n  width: 1rem;\\n}\\n.items-center{\\n  align-items: center;\\n}\\n.justify-center{\\n  justify-content: center;\\n}\\n.justify-around{\\n  justify-content: space-around;\\n}\\n.bg-slate-100{\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(241 245 249 / var(--tw-bg-opacity));\\n}\\n.bg-white{\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\\n}\\n.bg-teal-400{\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(45 212 191 / var(--tw-bg-opacity));\\n}\\n.px-4{\\n  padding-left: 1rem;\\n  padding-right: 1rem;\\n}\\n.py-2{\\n  padding-top: 0.5rem;\\n  padding-bottom: 0.5rem;\\n}\\n.text-center{\\n  text-align: center;\\n}\\n.text-white{\\n  --tw-text-opacity: 1;\\n  color: rgb(255 255 255 / var(--tw-text-opacity));\\n}\\n.shadow-sm{\\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\n.body *{\\n  box-sizing: border-box;\\n}\\n.cell{\\n  border-radius: 0.25rem;\\n  --tw-shadow: 0 0 #0000;\\n  --tw-shadow-colored: 0 0 #0000;\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n  transition-property: all;\\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n  transition-duration: 150ms;\\n  background-color: #fff;\\n  width: 50px;\\n  height: 50px;\\n  margin: 2px;\\n  /* margin-left: -1px;\\n margin-top: -1px; */\\n  /* position: absolute; */\\n  display: inline-block;\\n  position: relative;\\n  z-index: 1;\\n}\\n/* &:before,\\n &:after {\\n  background-color: #fff;\\n  content: \\\" \\\";\\n  position: absolute;\\n } */\\n.cell:hover{\\n  --tw-scale-x: 1.25;\\n  --tw-scale-y: 1.25;\\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\\n}\\n.cell:hover:before,\\n    .cell:hover:after {\\n      top: 0;\\n      bottom: 0;\\n      left: 0;\\n      right: 0;\\n    }\\n.cell:hover{\\n    z-index: 2;\\n}\\n.cell > .node{\\n  border-radius: 0.25rem;\\n    font-size: 8px;\\n    line-height: 12px;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    bottom: 0;\\n    right: 0;\\n}\\n.cell > .node.open-node {\\n      border: 2px solid #22c55e;\\n    }\\n.cell > .node.traced {\\n      border: none !important;\\n      background-color: #000;\\n    }\\n.container {\\n  max-width: 830px;\\n  margin: 0 auto;\\n  padding-top: 2rem;\\n  padding-bottom: 2rem;\\n}\\n.stepper {\\n  display: flex;\\n  align-items: center;\\n}\\n.stepper > .stepper-line {\\n    border-radius: 2px;\\n    height: 4px;\\n    flex-grow: 1;\\n    margin: 0 8px;\\n    background-color: #e2e8f0;\\n  }\\n.stepper > .stepper-line.active {\\n      background-color: #2dd4bf;\\n    }\\n.stepper > .step {\\n    display: flex;\\n    align-items: center;\\n  }\\n.stepper > .step > .icon {\\n      width: 40px;\\n      height: 40px;\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      background-color: #e2e8f0;\\n      border-radius: 50%;\\n      margin-right: 8px;\\n    }\\n.stepper > .step > .icon > svg {\\n        color: #fff;\\n      }\\n.stepper > .step.active > .icon {\\n        background-color: #2dd4bf;\\n      }\\n#map {\\n  /* @apply bg-slate-300; */\\n  position: relative;\\n  font-size: 0;\\n  line-height: 0;\\n  text-align: center;\\n}\\n.node.end-node {\\n    border: 2px solid #000;\\n    border-radius: 4px;\\n  }\\n.node.end-node span:after,\\n    .node.end-node span:before,\\n    .node.end-node:after,\\n    .node.end-node:before {\\n      background-color: #000;\\n      content: \\\" \\\";\\n      display: block;\\n      width: 33%;\\n      height: 33%;\\n      position: absolute;\\n    }\\n.node.end-node:before {\\n      top: 0;\\n      left: 0;\\n    }\\n.node.end-node:after {\\n      top: 0;\\n      right: 0;\\n    }\\n.node.end-node span:first-child:before {\\n        left: 33.33%;\\n        top: 33.33%;\\n      }\\n.node.end-node span:last-child:before {\\n        bottom: 0;\\n        left: 0;\\n      }\\n.node.end-node span:last-child:after {\\n        bottom: 0;\\n        right: 0;\\n      }\\n.node.obstacle-node {\\n    background: transparent url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center;\\n    background-size: cover;\\n  }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://a-asterisk/./src/styles/app.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://a-asterisk/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://a-asterisk/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://a-asterisk/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/app.css":
/*!****************************!*\
  !*** ./src/styles/app.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./app.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/styles/app.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://a-asterisk/./src/styles/app.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://a-asterisk/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://a-asterisk/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://a-asterisk/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://a-asterisk/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://a-asterisk/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://a-asterisk/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\nclass App {\n    constructor(width, height, pubsub) {\n        this.pubsub = pubsub;\n        this.clickAction = constants_1.ClickAction.SET_START;\n        this.store = {\n            byId: {},\n            allIds: [],\n        };\n        this.debug = true;\n        this.obstacles = {};\n        this.processQueue = {\n            nodes: [],\n            map: {},\n        };\n        this.width = width;\n        this.height = height;\n    }\n    /**\n     * Set the starting node\n     * @param x\n     * @param y\n     */\n    setStartNode(x, y) {\n        let id = `${x}:${y}`;\n        this.store.allIds.forEach((id) => {\n            this.store.byId[id].actor.innerHTML = \"\";\n        });\n        if (this.startNodeId == id) {\n            this.startNodeId = \"\";\n        }\n        else {\n            this.startNodeId = id;\n            let startNode = this.getStartNode();\n            startNode.actor.innerHTML = `\n        <svg xmlns=\"http://www.w3.org/2000/svg\"\n          fill=\"none\"\n          viewBox=\"0 0 24 24\"\n          stroke-width=\"1.5\"\n          stroke=\"currentColor\"\n          class=\"w-6 h-6\"\n        >\n          <path\n            stroke-linecap=\"round\"\n            stroke-linejoin=\"round\"\n            d=\"M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0\n            00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563\n            0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563\n            0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0\n            00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563\n            0 00.475-.345L11.48 3.5z\"\n          />\n        </svg>\n      `;\n        }\n        this.pubsub.publish(\"onSetStartNode\");\n    }\n    /**\n     * Set the ending node\n     * @param x\n     * @param y\n     */\n    setEndNode(x, y) {\n        let id = `${x}:${y}`;\n        let lastEndNode = this.store.byId[this.endNodeId];\n        if (lastEndNode) {\n            lastEndNode.actor.classList.remove(\"end-node\");\n            lastEndNode.actor.innerHTML = \"\";\n        }\n        if (this.endNodeId == id) {\n            this.endNodeId = \"\";\n        }\n        else {\n            this.endNodeId = id;\n            let endNode = this.store.byId[id];\n            endNode.actor.classList.add(\"end-node\");\n            endNode.actor.innerHTML = \"<span></span><span></span>\";\n        }\n        this.pubsub.publish(\"onSetEndNode\");\n    }\n    /**\n     * Add obstacles\n     * @param x\n     * @param y\n     */\n    setObstacleNode(x, y) {\n        let id = `${x}:${y}`;\n        let node = this.store.byId[id];\n        if (node.type === \"obstacle\") {\n            node.actor.classList.remove(\"obstacle-node\");\n            node.type = \"\";\n            delete this.obstacles[id];\n        }\n        else {\n            node.actor.classList.add(\"obstacle-node\");\n            node.type = \"obstacle;\";\n            this.obstacles[id] = true;\n        }\n        this.pubsub.publish(\"onSetObstacleNode\");\n    }\n    /**\n     * Go to next step\n     */\n    handleClickNext() {\n        switch (this.clickAction) {\n            case constants_1.ClickAction.SET_START:\n                this.clickAction = constants_1.ClickAction.SET_END;\n                break;\n            case constants_1.ClickAction.SET_END:\n                // queue start node before moving to the next step\n                let startNode = this.store.byId[this.startNodeId];\n                this.queueNode(startNode);\n                this.clickAction = constants_1.ClickAction.SET_OBSTACLE;\n                break;\n            case constants_1.ClickAction.SET_OBSTACLE:\n                break;\n        }\n        this.pubsub.publish(\"onClickNext\");\n    }\n    /**\n     * What to do when a node is clicked\n     * @param x\n     * @param y\n     */\n    handleClickNode(x, y) {\n        switch (this.clickAction) {\n            case constants_1.ClickAction.SET_START:\n                this.setStartNode(x, y);\n                break;\n            case constants_1.ClickAction.SET_END:\n                this.setEndNode(x, y);\n                break;\n            case constants_1.ClickAction.SET_OBSTACLE:\n                this.setObstacleNode(x, y);\n                break;\n        }\n    }\n    /**\n     * Add new node\n     * @param x\n     * @param y\n     * @param node\n     */\n    addNode(x, y, node) {\n        let newId = `${x}:${y}`;\n        this.store.byId[newId] = node;\n        this.store.allIds.push(newId);\n    }\n    /**\n     * Get the starting node\n     * @returns\n     */\n    getStartNode() {\n        return this.store.byId[this.startNodeId];\n    }\n    /**\n     * Check if coordinate is valid\n     * @param x\n     * @param y\n     * @returns\n     */\n    isValidCoords(x, y) {\n        let id = `${x}:${y}`;\n        let node = this.store.byId[id];\n        if (\n        // Inside the grid\n        x > -1 &&\n            x < this.width &&\n            y > -1 &&\n            y < this.height &&\n            // Node is not closed\n            !node.close &&\n            // Not an obstacle node\n            !this.obstacles[id] &&\n            // Not start or end node\n            id != this.startNodeId) {\n            return true;\n        }\n        return false;\n    }\n    /**\n     * Get the distance between two coords\n     * @param node1\n     * @param node2\n     * @returns\n     */\n    getDistance(node1, node2) {\n        return (Math.abs(node1.x - node2.x) + Math.abs(node1.y - node2.y)) * 10;\n    }\n    /**\n     * Get nodes surrounding the coordinates\n     * @param x\n     * @param y\n     */\n    getSurroundingNodes(x, y) {\n        let id = `${x}:${y}`;\n        let parentNode = this.store.byId[id];\n        let surroundingNodes = [];\n        let endNode = this.store.byId[this.endNodeId];\n        let nodeCoords = [\n            [x, y - 1],\n            [x, y + 1],\n            [x - 1, y],\n            [x + 1, y],\n        ];\n        nodeCoords.forEach((coord) => {\n            let [x, y] = coord;\n            if (this.isValidCoords(x, y)) {\n                let node = this.store.byId[`${x}:${y}`];\n                let gCost = parentNode.gCost + 10;\n                let hCost = this.getDistance(node, endNode);\n                let fCost = gCost + hCost;\n                node.parentNode = parentNode;\n                if (!this.processQueue.map[`${x}:${y}`] ||\n                    fCost < node.fCost ||\n                    (fCost == node.fCost && hCost < node.hCost)) {\n                    node.fCost = fCost;\n                    node.gCost = gCost;\n                    node.hCost = hCost;\n                    if (this.debug) {\n                        node.actor.innerHTML = `\n              <p>gCost: ${gCost}</p>\n              <p>hCost: ${hCost}</p>\n              <p>gCost: ${gCost}</p>\n            `;\n                    }\n                    node.actor.classList.add(\"open-node\");\n                    surroundingNodes.push(node);\n                    this.queueNode(node);\n                }\n            }\n        });\n        return surroundingNodes;\n    }\n    traceback(node) {\n        if (`${node.x}:${node.y}` === this.startNodeId) {\n            return;\n        }\n        if (`${node.x}:${node.y}` !== this.endNodeId) {\n            node.actor.classList.add(\"traced\");\n        }\n        if (node.parentNode) {\n            setTimeout(() => {\n                this.traceback(node.parentNode);\n            }, 50);\n        }\n        return;\n    }\n    queueNode(node) {\n        if (node.close) {\n            return false;\n        }\n        for (let i = 0; i < this.processQueue.nodes.length; i++) {\n            let curNode = this.processQueue.nodes[i];\n            // Lower fCost or Lower gCost\n            if (node.fCost < curNode.fCost ||\n                (node.fCost == curNode.fCost && node.hCost < curNode.hCost)) {\n                this.processQueue.nodes.splice(i, 0, node);\n                this.processQueue.nodes.map[`${node.x}:${node.y}`] = true;\n                return;\n            }\n        }\n        this.processQueue.nodes.push(node);\n        this.processQueue.nodes.map[`${node.x}:${node.y}`] = true;\n    }\n    solve() {\n        // Get first item from queue\n        let node = this.processQueue.nodes.shift();\n        delete this.processQueue.nodes.map[this.startNodeId];\n        // Exit if there is no array from queue\n        if (!node) {\n            return;\n        }\n        node.close = true;\n        // If node === endNode, exit\n        if (`${node === null || node === void 0 ? void 0 : node.x}:${node === null || node === void 0 ? void 0 : node.y}` === this.endNodeId) {\n            // Trace node\n            this.traceback(node);\n            return;\n        }\n        // Get surrounding nodes and queue them\n        let surroundingNodes = this.getSurroundingNodes(node === null || node === void 0 ? void 0 : node.x, node === null || node === void 0 ? void 0 : node.y);\n        for (let i = 0; i < surroundingNodes.length; i++) {\n            this.queueNode(surroundingNodes[i]);\n        }\n        this.solve();\n    }\n}\nexports[\"default\"] = App;\n\n\n//# sourceURL=webpack://a-asterisk/./src/app.ts?");

/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.config = void 0;\nexports.config = {\n    mapSize: 15,\n    cellSize: 50,\n};\n\n\n//# sourceURL=webpack://a-asterisk/./src/config.ts?");

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ClickAction = void 0;\nexports.ClickAction = {\n    SET_START: 0,\n    SET_END: 1,\n    SET_OBSTACLE: 2,\n};\n\n\n//# sourceURL=webpack://a-asterisk/./src/constants.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/app.ts\");\nconst pubsub_1 = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.ts\");\nconst models_1 = __webpack_require__(/*! ./models */ \"./src/models.ts\");\nconst config_1 = __webpack_require__(/*! ./config */ \"./src/config.ts\");\n__webpack_require__(/*! ./styles/app.css */ \"./src/styles/app.css\");\n// Elements\nconst map = document.getElementById(\"map\");\nconst nextBtn = document.getElementById(\"btn-next\");\nconst playBtn = document.getElementById(\"play\");\nconst stepper = document.getElementById(\"stepper\");\nconst steps = stepper === null || stepper === void 0 ? void 0 : stepper.getElementsByClassName(\"step\");\nconst stepLines = stepper === null || stepper === void 0 ? void 0 : stepper.getElementsByClassName(\"stepper-line\");\n// Initialize stuff\nconst pubsub = new pubsub_1.default();\nconst app = new app_1.default(config_1.config.mapSize, config_1.config.mapSize, pubsub);\nnextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener(\"click\", function () {\n    return app.handleClickNext();\n});\nplayBtn === null || playBtn === void 0 ? void 0 : playBtn.addEventListener(\"click\", function () {\n    app.solve();\n});\npubsub.subscribe(\"onClickNext\", function () {\n    if (steps && stepLines) {\n        for (let i = 0; i < (steps === null || steps === void 0 ? void 0 : steps.length); i++) {\n            if (app.clickAction >= i) {\n                steps[i].classList.add(\"active\");\n            }\n            if (app.clickAction > i) {\n                stepLines[i].classList.add(\"active\");\n            }\n        }\n    }\n});\npubsub.subscribe(\"onSetStartNode\", function () {\n    let startNode = app.getStartNode();\n});\n// Generate Map\nfor (let x = 0; x < config_1.config.mapSize; x++) {\n    for (let y = 0; y < config_1.config.mapSize; y++) {\n        let cell = document.createElement(\"div\");\n        cell.className = \"cell\";\n        // create node element\n        let nodeEl = document.createElement(\"div\");\n        nodeEl.className = \"node\";\n        cell.appendChild(nodeEl);\n        // create node object\n        let node = new models_1.Node(x, y, \"\", nodeEl);\n        nodeEl.addEventListener(\"click\", function () {\n            return app.handleClickNode(x, y);\n        });\n        // store node\n        app.addNode(x, y, node);\n        map === null || map === void 0 ? void 0 : map.appendChild(cell);\n    }\n}\n\n\n//# sourceURL=webpack://a-asterisk/./src/main.ts?");

/***/ }),

/***/ "./src/models.ts":
/*!***********************!*\
  !*** ./src/models.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Node = void 0;\nclass Node {\n    constructor(x, y, type, actor) {\n        this.x = x;\n        this.y = y;\n        this.actor = actor;\n        this.type = type;\n        this.open = true;\n        this.close = false;\n        this.gCost = 0;\n        this.fCost = 0;\n        this.hCost = 0;\n    }\n}\nexports.Node = Node;\n\n\n//# sourceURL=webpack://a-asterisk/./src/models.ts?");

/***/ }),

/***/ "./src/pubsub.ts":
/*!***********************!*\
  !*** ./src/pubsub.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass PubSub {\n    constructor() {\n        this.subscribers = {};\n    }\n    // Subscribe to an event\n    subscribe(event, callback) {\n        if (!this.subscribers[event]) {\n            this.subscribers[event] = [];\n        }\n        this.subscribers[event].push(callback);\n    }\n    // Publish an event\n    publish(event) {\n        if (this.subscribers[event]) {\n            this.subscribers[event].forEach((callback) => {\n                callback();\n            });\n        }\n    }\n}\nexports[\"default\"] = PubSub;\n\n\n//# sourceURL=webpack://a-asterisk/./src/pubsub.ts?");

/***/ }),

/***/ "./src/images/crates_study_x2.png":
/*!****************************************!*\
  !*** ./src/images/crates_study_x2.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ec244c3db39b68ce14e8.png\";\n\n//# sourceURL=webpack://a-asterisk/./src/images/crates_study_x2.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;