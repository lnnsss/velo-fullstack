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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDiscountTime: function() { return /* binding */ useDiscountTime; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nfunction useDiscountTime() {\n    _s();\n    if (localStorage.getItem(\"veloTimer\") === null) {\n        localStorage.setItem(\"veloTimer\", 28800); // 8 * 3600\n        setTime(28800);\n    } else {\n        localStorage.getItem(\"veloTimer\");\n    }\n    const [isRunning, setIsRunning] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    let hours = Math.floor(time / 3600);\n    let minutes = Math.floor((time - hours * 3600) / 60);\n    let seconds = time - hours * 3600 - minutes * 60;\n    // Таймер\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        let interval = null;\n        if (isRunning) {\n            interval = setInterval(()=>{\n                if (time > 0) {\n                    setTime((prevTime)=>prevTime - 1);\n                    localStorage.setItem(\"veloTimer\", (prevTime)=>prevTime - 1);\n                } else {\n                    clearInterval(interval);\n                    setIsRunning(false);\n                }\n            }, 1000);\n        }\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, [\n        isRunning,\n        time\n    ]);\n    return {\n        hours,\n        minutes,\n        seconds\n    };\n}\n_s(useDiscountTime, \"ZKCjG1hbhP5BhyrOOAWSENWTq/Y=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VEaXNjb3VudFRpbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUVyQyxTQUFTRTs7SUFFZCxJQUFJQyxhQUFhQyxPQUFPLENBQUMsaUJBQWlCLE1BQU07UUFDOUNELGFBQWFFLE9BQU8sQ0FBQyxhQUFhLFFBQVEsV0FBVztRQUNyREMsUUFBUTtJQUNWLE9BQU87UUFDTEgsYUFBYUMsT0FBTyxDQUFDO0lBQ3ZCO0lBRUEsTUFBTSxDQUFDRyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNDLElBQUlRLFFBQVFDLEtBQUtDLEtBQUssQ0FBQ0MsT0FBTztJQUM5QixJQUFJQyxVQUFVSCxLQUFLQyxLQUFLLENBQUMsQ0FBQ0MsT0FBT0gsUUFBUSxJQUFHLElBQUs7SUFDakQsSUFBSUssVUFBVUYsT0FBT0gsUUFBUSxPQUFPSSxVQUFVO0lBRTlDLFNBQVM7SUFDVGIsZ0RBQVNBLENBQUM7UUFDUixJQUFJZSxXQUFXO1FBRWYsSUFBSVIsV0FBVztZQUNiUSxXQUFXQyxZQUFZO2dCQUNyQixJQUFJSixPQUFPLEdBQUc7b0JBQ1pOLFFBQVEsQ0FBQ1csV0FBYUEsV0FBVztvQkFDakNkLGFBQWFFLE9BQU8sQ0FBQyxhQUFhLENBQUNZLFdBQWFBLFdBQVc7Z0JBQzdELE9BQU87b0JBQ0xDLGNBQWNIO29CQUNkUCxhQUFhO2dCQUNmO1lBQ0YsR0FBRztRQUNMO1FBRUEsT0FBTztZQUNMVSxjQUFjSDtRQUNoQjtJQUNGLEdBQUc7UUFBQ1I7UUFBV0s7S0FBSztJQUVwQixPQUFPO1FBQUVIO1FBQU9JO1FBQVNDO0lBQVE7QUFDbkM7R0FwQ2dCWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VEaXNjb3VudFRpbWUuanM/NTNkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRGlzY291bnRUaW1lKCkge1xyXG5cclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ2ZWxvVGltZXJcIikgPT09IG51bGwpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidmVsb1RpbWVyXCIsIDI4ODAwKTsgLy8gOCAqIDM2MDBcclxuICAgIHNldFRpbWUoMjg4MDApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInZlbG9UaW1lclwiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFtpc1J1bm5pbmcsIHNldElzUnVubmluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBsZXQgaG91cnMgPSBNYXRoLmZsb29yKHRpbWUgLyAzNjAwKTtcclxuICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoKHRpbWUgLSBob3VycyAqIDM2MDApIC8gNjApO1xyXG4gIGxldCBzZWNvbmRzID0gdGltZSAtIGhvdXJzICogMzYwMCAtIG1pbnV0ZXMgKiA2MDtcclxuXHJcbiAgLy8g0KLQsNC50LzQtdGAXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpbnRlcnZhbCA9IG51bGw7XHJcblxyXG4gICAgaWYgKGlzUnVubmluZykge1xyXG4gICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBpZiAodGltZSA+IDApIHtcclxuICAgICAgICAgIHNldFRpbWUoKHByZXZUaW1lKSA9PiBwcmV2VGltZSAtIDEpO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ2ZWxvVGltZXJcIiwgKHByZXZUaW1lKSA9PiBwcmV2VGltZSAtIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgIHNldElzUnVubmluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH07XHJcbiAgfSwgW2lzUnVubmluZywgdGltZV0pO1xyXG5cclxuICByZXR1cm4geyBob3VycywgbWludXRlcywgc2Vjb25kcyB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZURpc2NvdW50VGltZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic2V0VGltZSIsImlzUnVubmluZyIsInNldElzUnVubmluZyIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwidGltZSIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useDiscountTime.js\n"));

/***/ })

});