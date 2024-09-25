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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDiscountTime: function() { return /* binding */ useDiscountTime; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nfunction useDiscountTime() {\n    _s();\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{\n        // Проверяем наличие таймера в localStorage при первой загрузке компонента\n        const savedTime = localStorage.getItem(\"veloTimer\");\n        return savedTime !== null ? parseInt(savedTime, 10) : 28800; // Если нет, задаем значение по умолчанию\n    });\n    const [isRunning, setIsRunning] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    // Расчет часов, минут и секунд\n    let hours = Math.floor(time / 3600);\n    let minutes = Math.floor((time - hours * 3600) / 60);\n    let seconds = time - hours * 3600 - minutes * 60;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        // Обновляем localStorage при каждом изменении времени\n        localStorage.setItem(\"veloTimer\", time);\n        let interval = null;\n        if (isRunning) {\n            interval = setInterval(()=>{\n                setTime((prevTime)=>{\n                    if (prevTime > 0) {\n                        return prevTime - 1;\n                    } else {\n                        clearInterval(interval);\n                        setIsRunning(false);\n                        return 0; // Таймер остановился\n                    }\n                });\n            }, 1000);\n        }\n        // Очищаем интервал при размонтировании компонента\n        return ()=>clearInterval(interval);\n    }, [\n        isRunning,\n        time\n    ]);\n    return {\n        hours,\n        minutes,\n        seconds\n    };\n}\n_s(useDiscountTime, \"6hUbldwfNdziA/BqwBw1d10KCHM=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VEaXNjb3VudFRpbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUVyQyxTQUFTRTs7SUFDZCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQUM7UUFDL0IsMEVBQTBFO1FBQzFFLE1BQU1JLFlBQVlDLGFBQWFDLE9BQU8sQ0FBQztRQUN2QyxPQUFPRixjQUFjLE9BQU9HLFNBQVNILFdBQVcsTUFBTSxPQUFPLHlDQUF5QztJQUN4RztJQUVBLE1BQU0sQ0FBQ0ksV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUUzQywrQkFBK0I7SUFDL0IsSUFBSVUsUUFBUUMsS0FBS0MsS0FBSyxDQUFDVixPQUFPO0lBQzlCLElBQUlXLFVBQVVGLEtBQUtDLEtBQUssQ0FBQyxDQUFDVixPQUFPUSxRQUFRLElBQUcsSUFBSztJQUNqRCxJQUFJSSxVQUFVWixPQUFPUSxRQUFRLE9BQU9HLFVBQVU7SUFFOUNkLGdEQUFTQSxDQUFDO1FBQ1Isc0RBQXNEO1FBQ3RETSxhQUFhVSxPQUFPLENBQUMsYUFBYWI7UUFFbEMsSUFBSWMsV0FBVztRQUNmLElBQUlSLFdBQVc7WUFDYlEsV0FBV0MsWUFBWTtnQkFDckJkLFFBQVEsQ0FBQ2U7b0JBQ1AsSUFBSUEsV0FBVyxHQUFHO3dCQUNoQixPQUFPQSxXQUFXO29CQUNwQixPQUFPO3dCQUNMQyxjQUFjSDt3QkFDZFAsYUFBYTt3QkFDYixPQUFPLEdBQUcscUJBQXFCO29CQUNqQztnQkFDRjtZQUNGLEdBQUc7UUFDTDtRQUVBLGtEQUFrRDtRQUNsRCxPQUFPLElBQU1VLGNBQWNIO0lBQzdCLEdBQUc7UUFBQ1I7UUFBV047S0FBSztJQUVwQixPQUFPO1FBQUVRO1FBQU9HO1FBQVNDO0lBQVE7QUFDbkM7R0F0Q2dCYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VEaXNjb3VudFRpbWUuanM/NTNkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRGlzY291bnRUaW1lKCkge1xyXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCDQvdCw0LvQuNGH0LjQtSDRgtCw0LnQvNC10YDQsCDQsiBsb2NhbFN0b3JhZ2Ug0L/RgNC4INC/0LXRgNCy0L7QuSDQt9Cw0LPRgNGD0LfQutC1INC60L7QvNC/0L7QvdC10L3RgtCwXHJcbiAgICBjb25zdCBzYXZlZFRpbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInZlbG9UaW1lclwiKTtcclxuICAgIHJldHVybiBzYXZlZFRpbWUgIT09IG51bGwgPyBwYXJzZUludChzYXZlZFRpbWUsIDEwKSA6IDI4ODAwOyAvLyDQldGB0LvQuCDQvdC10YIsINC30LDQtNCw0LXQvCDQt9C90LDRh9C10L3QuNC1INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtpc1J1bm5pbmcsIHNldElzUnVubmluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy8g0KDQsNGB0YfQtdGCINGH0LDRgdC+0LIsINC80LjQvdGD0YIg0Lgg0YHQtdC60YPQvdC0XHJcbiAgbGV0IGhvdXJzID0gTWF0aC5mbG9vcih0aW1lIC8gMzYwMCk7XHJcbiAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lIC0gaG91cnMgKiAzNjAwKSAvIDYwKTtcclxuICBsZXQgc2Vjb25kcyA9IHRpbWUgLSBob3VycyAqIDM2MDAgLSBtaW51dGVzICogNjA7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyDQntCx0L3QvtCy0LvRj9C10LwgbG9jYWxTdG9yYWdlINC/0YDQuCDQutCw0LbQtNC+0Lwg0LjQt9C80LXQvdC10L3QuNC4INCy0YDQtdC80LXQvdC4XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInZlbG9UaW1lclwiLCB0aW1lKTtcclxuXHJcbiAgICBsZXQgaW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgaWYgKGlzUnVubmluZykge1xyXG4gICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lKChwcmV2VGltZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHByZXZUaW1lID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJldlRpbWUgLSAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIHNldElzUnVubmluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiAwOyAvLyDQotCw0LnQvNC10YAg0L7RgdGC0LDQvdC+0LLQuNC70YHRj1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQntGH0LjRidCw0LXQvCDQuNC90YLQtdGA0LLQsNC7INC/0YDQuCDRgNCw0LfQvNC+0L3RgtC40YDQvtCy0LDQvdC40Lgg0LrQvtC80L/QvtC90LXQvdGC0LBcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbaXNSdW5uaW5nLCB0aW1lXSk7XHJcblxyXG4gIHJldHVybiB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGlzY291bnRUaW1lIiwidGltZSIsInNldFRpbWUiLCJzYXZlZFRpbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJpc1J1bm5pbmciLCJzZXRJc1J1bm5pbmciLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwic2V0SXRlbSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useDiscountTime.js\n"));

/***/ })

});