/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/AppLayout.jsx":
/*!**********************************!*\
  !*** ./components/AppLayout.jsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppLayout: () => (/* binding */ AppLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"clsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([clsx__WEBPACK_IMPORTED_MODULE_1__]);\nclsx__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction AppLayout({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-slate-900\"),\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\site\\\\backend\\\\velo-pt-two\\\\app\\\\components\\\\AppLayout.jsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"modals\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\site\\\\backend\\\\velo-pt-two\\\\app\\\\components\\\\AppLayout.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcExheW91dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0I7QUFFakIsU0FBU0MsVUFBVSxFQUFFQyxRQUFRLEVBQUU7SUFDcEMscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBSUMsV0FBV0osZ0RBQUlBLENBQUM7MEJBQW9CRTs7Ozs7OzBCQUN6Qyw4REFBQ0M7Z0JBQUlFLElBQUc7Ozs7Ozs7O0FBR2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcExheW91dC5qc3g/MTc3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFwcExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJ0ZXh0LXNsYXRlLTkwMFwiKX0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwibW9kYWxzXCI+PC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjbHN4IiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AppLayout.jsx\n");

/***/ }),

/***/ "./components/constants.js":
/*!*********************************!*\
  !*** ./components/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   discount: () => (/* binding */ discount),\n/* harmony export */   filterList: () => (/* binding */ filterList),\n/* harmony export */   langCondition: () => (/* binding */ langCondition),\n/* harmony export */   loginURL: () => (/* binding */ loginURL),\n/* harmony export */   priceCondition: () => (/* binding */ priceCondition),\n/* harmony export */   registrationURL: () => (/* binding */ registrationURL),\n/* harmony export */   theme: () => (/* binding */ theme),\n/* harmony export */   tovarListURL: () => (/* binding */ tovarListURL)\n/* harmony export */ });\n// ссылка на сервер к tovarList\nconst tovarListURL = \"http://localhost:3001/tovars\";\n// ссылка на сервер к registration\nconst registrationURL = \"http://localhost:3001/auth/registration\";\n// ссылка на сервер к login\nconst loginURL = \"http://localhost:3001/auth/login\";\n// Тема\nconst theme = false; // светлая - false, темная - true\n// Фильтры для каталога\nconst filterList = [\n    \"All\",\n    \"Ru\",\n    \"En\",\n    \"< 30$\",\n    \"> 30$\"\n];\n// Условие цены релиза\nconst priceCondition = 35; // null или  цена (например: 40)\n// Условие языка релиза\nconst langCondition = \"\"; // \"Ru\", \"En\"\n// Скидка (%)\nconst discount = 20;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnN0YW50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUN4QixNQUFNQSxlQUFlLCtCQUErQjtBQUUzRCxrQ0FBa0M7QUFDM0IsTUFBTUMsa0JBQWtCLDBDQUEwQztBQUV6RSwyQkFBMkI7QUFDcEIsTUFBTUMsV0FBVyxtQ0FBbUM7QUFFM0QsT0FBTztBQUNBLE1BQU1DLFFBQVEsTUFBTSxDQUFDLGlDQUFpQztBQUU3RCx1QkFBdUI7QUFDaEIsTUFBTUMsYUFBYTtJQUFDO0lBQU87SUFBTTtJQUFNO0lBQVM7Q0FBUSxDQUFDO0FBRWhFLHNCQUFzQjtBQUNmLE1BQU1DLGlCQUFpQixHQUFHLENBQUMsZ0NBQWdDO0FBRWxFLHVCQUF1QjtBQUNoQixNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDLGFBQWE7QUFFOUMsYUFBYTtBQUNOLE1BQU1DLFdBQVcsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29uc3RhbnRzLmpzPzRiOTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g0YHRgdGL0LvQutCwINC90LAg0YHQtdGA0LLQtdGAINC6IHRvdmFyTGlzdFxyXG5leHBvcnQgY29uc3QgdG92YXJMaXN0VVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS90b3ZhcnMnO1xyXG5cclxuLy8g0YHRgdGL0LvQutCwINC90LAg0YHQtdGA0LLQtdGAINC6IHJlZ2lzdHJhdGlvblxyXG5leHBvcnQgY29uc3QgcmVnaXN0cmF0aW9uVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hdXRoL3JlZ2lzdHJhdGlvbic7XHJcblxyXG4vLyDRgdGB0YvQu9C60LAg0L3QsCDRgdC10YDQstC10YAg0LogbG9naW5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hdXRoL2xvZ2luJztcclxuXHJcbi8vINCi0LXQvNCwXHJcbmV4cG9ydCBjb25zdCB0aGVtZSA9IGZhbHNlOyAvLyDRgdCy0LXRgtC70LDRjyAtIGZhbHNlLCDRgtC10LzQvdCw0Y8gLSB0cnVlXHJcblxyXG4vLyDQpNC40LvRjNGC0YDRiyDQtNC70Y8g0LrQsNGC0LDQu9C+0LPQsFxyXG5leHBvcnQgY29uc3QgZmlsdGVyTGlzdCA9IFtcIkFsbFwiLCBcIlJ1XCIsIFwiRW5cIiwgXCI8IDMwJFwiLCBcIj4gMzAkXCJdO1xyXG5cclxuLy8g0KPRgdC70L7QstC40LUg0YbQtdC90Ysg0YDQtdC70LjQt9CwXHJcbmV4cG9ydCBjb25zdCBwcmljZUNvbmRpdGlvbiA9IDM1OyAvLyBudWxsINC40LvQuCAg0YbQtdC90LAgKNC90LDQv9GA0LjQvNC10YA6IDQwKVxyXG5cclxuLy8g0KPRgdC70L7QstC40LUg0Y/Qt9GL0LrQsCDRgNC10LvQuNC30LBcclxuZXhwb3J0IGNvbnN0IGxhbmdDb25kaXRpb24gPSBcIlwiOyAvLyBcIlJ1XCIsIFwiRW5cIlxyXG5cclxuLy8g0KHQutC40LTQutCwICglKVxyXG5leHBvcnQgY29uc3QgZGlzY291bnQgPSAyMDtcclxuIl0sIm5hbWVzIjpbInRvdmFyTGlzdFVSTCIsInJlZ2lzdHJhdGlvblVSTCIsImxvZ2luVVJMIiwidGhlbWUiLCJmaWx0ZXJMaXN0IiwicHJpY2VDb25kaXRpb24iLCJsYW5nQ29uZGl0aW9uIiwiZGlzY291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/constants.js\n");

/***/ }),

/***/ "./contexts/AppContext.js":
/*!********************************!*\
  !*** ./contexts/AppContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppContext: () => (/* binding */ AppContext),\n/* harmony export */   AppProvider: () => (/* binding */ AppProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/constants */ \"./components/constants.js\");\n\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AppProvider = ({ children })=>{\n    const [currentTheme, setCurrentTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_components_constants__WEBPACK_IMPORTED_MODULE_2__.theme); //  тема\n    const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_components_constants__WEBPACK_IMPORTED_MODULE_2__.filterList[0]); //  фильтры для перебора товаров на странице catalog; по умолчанию \"All\"\n    const [cartList, setCartList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // массив с товарами в корзине\n    const [cartCounter, setCartCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // счетчик товаров в корзине\n    const handleSetCartCounter = ()=>{\n        setCartCounter(cartList.reduce((acc, obj)=>acc + obj.count, 0));\n    }; // функция для обновления счетчика товаров в корзине\n    const [viewedAlbums, setViewedAlbums] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Просмотренные товары\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            currentTheme,\n            setCurrentTheme,\n            activeFilter,\n            setActiveFilter,\n            cartList,\n            setCartList,\n            cartCounter,\n            handleSetCartCounter,\n            viewedAlbums,\n            setViewedAlbums\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\site\\\\backend\\\\velo-pt-two\\\\app\\\\contexts\\\\AppContext.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BcHBDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdEO0FBT2Y7QUFFMUIsTUFBTU8sMkJBQWFQLG9EQUFhQSxHQUFHO0FBRW5DLE1BQU1RLGNBQWMsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDdEMsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUNHLHdEQUFLQSxHQUFHLFFBQVE7SUFDakUsTUFBTSxDQUFDUSxjQUFjQyxnQkFBZ0IsR0FBR1osK0NBQVFBLENBQUNFLDZEQUFVLENBQUMsRUFBRSxHQUFHLHdFQUF3RTtJQUN6SSxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR2QsK0NBQVFBLENBQUMsRUFBRSxHQUFHLDhCQUE4QjtJQUM1RSxNQUFNLENBQUNlLGFBQWFDLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFDLElBQUksNEJBQTRCO0lBQy9FLE1BQU1pQix1QkFBdUI7UUFDM0JELGVBQWVILFNBQVNLLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxNQUFRRCxNQUFNQyxJQUFJQyxLQUFLLEVBQUU7SUFDaEUsR0FBRyxvREFBb0Q7SUFDdkQsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR3ZCLCtDQUFRQSxDQUFDLEVBQUUsR0FBRyx1QkFBdUI7SUFFN0UscUJBQ0UsOERBQUNNLFdBQVdrQixRQUFRO1FBQ2xCQyxPQUFPO1lBQ0xoQjtZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBQztZQUNBRTtZQUNBSztZQUNBQztRQUNGO2tCQUVDZjs7Ozs7O0FBR1AsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbnRleHRzL0FwcENvbnRleHQuanM/Y2IzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIGRpc2NvdW50LFxyXG4gIGZpbHRlckxpc3QsXHJcbiAgdGhlbWUsXHJcbiAgcHJpY2VDb25kaXRpb24sXHJcbiAgbGFuZ0NvbmRpdGlvbixcclxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50VGhlbWUsIHNldEN1cnJlbnRUaGVtZV0gPSB1c2VTdGF0ZSh0aGVtZSk7IC8vICDRgtC10LzQsFxyXG4gIGNvbnN0IFthY3RpdmVGaWx0ZXIsIHNldEFjdGl2ZUZpbHRlcl0gPSB1c2VTdGF0ZShmaWx0ZXJMaXN0WzBdKTsgLy8gINGE0LjQu9GM0YLRgNGLINC00LvRjyDQv9C10YDQtdCx0L7RgNCwINGC0L7QstCw0YDQvtCyINC90LAg0YHRgtGA0LDQvdC40YbQtSBjYXRhbG9nOyDQv9C+INGD0LzQvtC70YfQsNC90LjRjiBcIkFsbFwiXHJcbiAgY29uc3QgW2NhcnRMaXN0LCBzZXRDYXJ0TGlzdF0gPSB1c2VTdGF0ZShbXSk7IC8vINC80LDRgdGB0LjQsiDRgSDRgtC+0LLQsNGA0LDQvNC4INCyINC60L7RgNC30LjQvdC1XHJcbiAgY29uc3QgW2NhcnRDb3VudGVyLCBzZXRDYXJ0Q291bnRlcl0gPSB1c2VTdGF0ZSgwKTsgLy8g0YHRh9C10YLRh9C40Log0YLQvtCy0LDRgNC+0LIg0LIg0LrQvtGA0LfQuNC90LVcclxuICBjb25zdCBoYW5kbGVTZXRDYXJ0Q291bnRlciA9ICgpID0+IHtcclxuICAgIHNldENhcnRDb3VudGVyKGNhcnRMaXN0LnJlZHVjZSgoYWNjLCBvYmopID0+IGFjYyArIG9iai5jb3VudCwgMCkpO1xyXG4gIH07IC8vINGE0YPQvdC60YbQuNGPINC00LvRjyDQvtCx0L3QvtCy0LvQtdC90LjRjyDRgdGH0LXRgtGH0LjQutCwINGC0L7QstCw0YDQvtCyINCyINC60L7RgNC30LjQvdC1XHJcbiAgY29uc3QgW3ZpZXdlZEFsYnVtcywgc2V0Vmlld2VkQWxidW1zXSA9IHVzZVN0YXRlKFtdKTsgLy8g0J/RgNC+0YHQvNC+0YLRgNC10L3QvdGL0LUg0YLQvtCy0LDRgNGLXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGN1cnJlbnRUaGVtZSxcclxuICAgICAgICBzZXRDdXJyZW50VGhlbWUsXHJcbiAgICAgICAgYWN0aXZlRmlsdGVyLFxyXG4gICAgICAgIHNldEFjdGl2ZUZpbHRlcixcclxuICAgICAgICBjYXJ0TGlzdCxcclxuICAgICAgICBzZXRDYXJ0TGlzdCxcclxuICAgICAgICBjYXJ0Q291bnRlcixcclxuICAgICAgICBoYW5kbGVTZXRDYXJ0Q291bnRlcixcclxuICAgICAgICB2aWV3ZWRBbGJ1bXMsXHJcbiAgICAgICAgc2V0Vmlld2VkQWxidW1zLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImRpc2NvdW50IiwiZmlsdGVyTGlzdCIsInRoZW1lIiwicHJpY2VDb25kaXRpb24iLCJsYW5nQ29uZGl0aW9uIiwiQXBwQ29udGV4dCIsIkFwcFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjdXJyZW50VGhlbWUiLCJzZXRDdXJyZW50VGhlbWUiLCJhY3RpdmVGaWx0ZXIiLCJzZXRBY3RpdmVGaWx0ZXIiLCJjYXJ0TGlzdCIsInNldENhcnRMaXN0IiwiY2FydENvdW50ZXIiLCJzZXRDYXJ0Q291bnRlciIsImhhbmRsZVNldENhcnRDb3VudGVyIiwicmVkdWNlIiwiYWNjIiwib2JqIiwiY291bnQiLCJ2aWV3ZWRBbGJ1bXMiLCJzZXRWaWV3ZWRBbGJ1bXMiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/AppContext.js\n");

/***/ }),

/***/ "./hooks/useIsClient.js":
/*!******************************!*\
  !*** ./hooks/useIsClient.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useIsClient: () => (/* binding */ useIsClient)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useIsClient() {\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    return isClient;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VJc0NsaWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFFckMsU0FBU0U7SUFDZCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7SUFFekNELGdEQUFTQSxDQUFDO1FBQ1JJLFlBQVk7SUFDZCxHQUFHLEVBQUU7SUFFTCxPQUFPRDtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlSXNDbGllbnQuanM/ZWQzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlSXNDbGllbnQoKSB7XHJcbiAgY29uc3QgW2lzQ2xpZW50LCBzZXRJc0NsaWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJc0NsaWVudCh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiBpc0NsaWVudDtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VJc0NsaWVudCIsImlzQ2xpZW50Iiwic2V0SXNDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useIsClient.js\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AppContext */ \"./contexts/AppContext.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.jsx\");\n/* harmony import */ var _hooks_useIsClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useIsClient */ \"./hooks/useIsClient.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__]);\n_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const isClient = (0,_hooks_useIsClient__WEBPACK_IMPORTED_MODULE_6__.useIsClient)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    href: \"/favicon.ico\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\site\\\\backend\\\\velo-pt-two\\\\app\\\\pages\\\\_app.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\site\\\\backend\\\\velo-pt-two\\\\app\\\\pages\\\\_app.jsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            isClient ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.HashRouter, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AppContext__WEBPACK_IMPORTED_MODULE_2__.AppProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__.AppLayout, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\site\\\\backend\\\\velo-pt-two\\\\app\\\\pages\\\\_app.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\site\\\\backend\\\\velo-pt-two\\\\app\\\\pages\\\\_app.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\site\\\\backend\\\\velo-pt-two\\\\app\\\\pages\\\\_app.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\site\\\\backend\\\\velo-pt-two\\\\app\\\\pages\\\\_app.jsx\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\site\\\\backend\\\\velo-pt-two\\\\app\\\\pages\\\\_app.jsx\",\n                lineNumber: 25,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ3FCO0FBQ3RCO0FBQ2U7QUFDTTtBQUNEO0FBRWxDLFNBQVNLLElBQUksRUFBQ0MsU0FBUyxFQUFFQyxTQUFTLEVBQUM7SUFDOUMsTUFBTUMsV0FBV0osK0RBQVdBO0lBRTVCLHFCQUNJOzswQkFDSSw4REFBQ0gsa0RBQUlBOzBCQUNELDRFQUFDUTtvQkFBS0MsS0FBSTtvQkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7WUFFekJILHlCQUNHLDhEQUFDTix3REFBVUE7MEJBQ1AsNEVBQUNGLDZEQUFXQTs4QkFDUiw0RUFBQ0csNERBQVNBO2tDQUNOLDRFQUFDRzs0QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FLcEMsOERBQUNLOzBCQUFJOzs7Ozs7OztBQUlyQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanN4PzRjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcclxuaW1wb3J0IHtBcHBQcm92aWRlcn0gZnJvbSBcIi4uL2NvbnRleHRzL0FwcENvbnRleHRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQge0hhc2hSb3V0ZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7QXBwTGF5b3V0fSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IHt1c2VJc0NsaWVudH0gZnJvbSBcIi4uL2hvb2tzL3VzZUlzQ2xpZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoe0NvbXBvbmVudCwgcGFnZVByb3BzfSkge1xyXG4gICAgY29uc3QgaXNDbGllbnQgPSB1c2VJc0NsaWVudCgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICB7aXNDbGllbnQgPyAoXHJcbiAgICAgICAgICAgICAgICA8SGFzaFJvdXRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXBwUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L0hhc2hSb3V0ZXI+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiQXBwUHJvdmlkZXIiLCJIZWFkIiwiSGFzaFJvdXRlciIsIkFwcExheW91dCIsInVzZUlzQ2xpZW50IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNDbGllbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("clsx");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();