"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useDiscountTime.js":
/*!**********************************!*\
  !*** ./hooks/useDiscountTime.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDiscountTime: function() { return /* binding */ useDiscountTime; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nfunction useDiscountTime() {\n    _s();\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(28800);\n    const [isRunning, setIsRunning] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    if (localStorage.getItem(\"veloTimer\") === null || localStorage.getItem(\"veloTimer\") === null) {\n        localStorage.setItem(\"veloTimer\", 28800); // 8 * 3600\n        setTime(28800);\n    }\n    let hours = Math.floor(time / 3600);\n    let minutes = Math.floor((time - hours * 3600) / 60);\n    let seconds = time - hours * 3600 - minutes * 60;\n    // Таймер\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        let interval = null;\n        if (isRunning) {\n            interval = setInterval(()=>{\n                if (time > 0) {\n                    setTime((prevTime)=>prevTime - 1);\n                } else {\n                    clearInterval(interval);\n                    setIsRunning(false);\n                }\n            }, 1000);\n        }\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, [\n        isRunning,\n        time\n    ]);\n    return {\n        hours,\n        minutes,\n        seconds\n    };\n}\n_s(useDiscountTime, \"gvocrqN1sNCt6+wIQJhA0MuYRCg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VEaXNjb3VudFRpbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUVyQyxTQUFTRTs7SUFFZCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTNDLElBQUlNLGFBQWFDLE9BQU8sQ0FBQyxpQkFBaUIsUUFBUUQsYUFBYUMsT0FBTyxDQUFDLGlCQUFpQixNQUFNO1FBQzVGRCxhQUFhRSxPQUFPLENBQUMsYUFBYSxRQUFRLFdBQVc7UUFDckRMLFFBQVE7SUFDVjtJQUVBLElBQUlNLFFBQVFDLEtBQUtDLEtBQUssQ0FBQ1QsT0FBTztJQUM5QixJQUFJVSxVQUFVRixLQUFLQyxLQUFLLENBQUMsQ0FBQ1QsT0FBT08sUUFBUSxJQUFHLElBQUs7SUFDakQsSUFBSUksVUFBVVgsT0FBT08sUUFBUSxPQUFPRyxVQUFVO0lBRTlDLFNBQVM7SUFDVGIsZ0RBQVNBLENBQUM7UUFDUixJQUFJZSxXQUFXO1FBRWYsSUFBSVYsV0FBVztZQUNiVSxXQUFXQyxZQUFZO2dCQUNyQixJQUFJYixPQUFPLEdBQUc7b0JBQ1pDLFFBQVEsQ0FBQ2EsV0FBYUEsV0FBVztnQkFDbkMsT0FBTztvQkFDTEMsY0FBY0g7b0JBQ2RULGFBQWE7Z0JBQ2Y7WUFDRixHQUFHO1FBQ0w7UUFFQSxPQUFPO1lBQ0xZLGNBQWNIO1FBQ2hCO0lBQ0YsR0FBRztRQUFDVjtRQUFXRjtLQUFLO0lBRXBCLE9BQU87UUFBRU87UUFBT0c7UUFBU0M7SUFBUTtBQUNuQztHQW5DZ0JaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZURpc2NvdW50VGltZS5qcz81M2QwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VEaXNjb3VudFRpbWUoKSB7XHJcblxyXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDI4ODAwKTsgXHJcbiAgY29uc3QgW2lzUnVubmluZywgc2V0SXNSdW5uaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ2ZWxvVGltZXJcIikgPT09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ2ZWxvVGltZXJcIikgPT09IG51bGwpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidmVsb1RpbWVyXCIsIDI4ODAwKTsgLy8gOCAqIDM2MDBcclxuICAgIHNldFRpbWUoMjg4MDApO1xyXG4gIH1cclxuXHJcbiAgbGV0IGhvdXJzID0gTWF0aC5mbG9vcih0aW1lIC8gMzYwMCk7XHJcbiAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lIC0gaG91cnMgKiAzNjAwKSAvIDYwKTtcclxuICBsZXQgc2Vjb25kcyA9IHRpbWUgLSBob3VycyAqIDM2MDAgLSBtaW51dGVzICogNjA7XHJcblxyXG4gIC8vINCi0LDQudC80LXRgFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaW50ZXJ2YWwgPSBudWxsO1xyXG5cclxuICAgIGlmIChpc1J1bm5pbmcpIHtcclxuICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRpbWUgPiAwKSB7XHJcbiAgICAgICAgICBzZXRUaW1lKChwcmV2VGltZSkgPT4gcHJldlRpbWUgLSAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICBzZXRJc1J1bm5pbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtpc1J1bm5pbmcsIHRpbWVdKTtcclxuXHJcbiAgcmV0dXJuIHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNjb3VudFRpbWUiLCJ0aW1lIiwic2V0VGltZSIsImlzUnVubmluZyIsInNldElzUnVubmluZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwic2Vjb25kcyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useDiscountTime.js\n"));

/***/ })

});