"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/mainProjects/MainProjects.tsx":
/*!******************************************************!*\
  !*** ./src/components/mainProjects/MainProjects.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useFetchProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useFetchProjects */ \"(app-pages-browser)/./src/hooks/useFetchProjects.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProjectItem = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((param)=>{\n    let { item } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: {\n            pathname: \"/case-study/\".concat(item.title)\n        },\n        className: \"mainProjects__item\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mainProjectsCo__imgs\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mainProjects__item__img\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: item.poster,\n                            alt: item.title,\n                            className: \"mainProjects__item__img__poster\",\n                            title: item.title\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/mainProjects/MainProjects.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"-\",\n                                    item.date,\n                                    \"-\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/mainProjects/MainProjects.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/mainProjects/MainProjects.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/mainProjects/MainProjects.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/mainProjects/MainProjects.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mainProjects__item__desc\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: item.categories.join(\" - \")\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/mainProjects/MainProjects.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: item.title\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/mainProjects/MainProjects.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/mainProjects/MainProjects.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/mainProjects/MainProjects.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n});\n_c = ProjectItem;\nProjectItem.displayName = \"ProjectItem \";\nconst MainProjects = ()=>{\n    _s();\n    const { projects } = (0,_hooks_useFetchProjects__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const displayedProjects = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>projects.filter((project)=>[\n                \"Lemkus\",\n                \"Aldar\",\n                \"Innovest\"\n            ].includes(project.title)), [\n        projects\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mainProjects\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mainProjects__container\",\n            children: displayedProjects.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectItem, {\n                    item: item\n                }, index, false, {\n                    fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/mainProjects/MainProjects.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 21\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/mainProjects/MainProjects.tsx\",\n            lineNumber: 52,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/mainProjects/MainProjects.tsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MainProjects, \"gVWgMiGGYBJd27KlPZyInjGjKqk=\", false, function() {\n    return [\n        _hooks_useFetchProjects__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c1 = MainProjects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainProjects);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProjectItem\");\n$RefreshReg$(_c1, \"MainProjects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21haW5Qcm9qZWN0cy9NYWluUHJvamVjdHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ0E7QUFDb0I7QUFDM0I7QUFDRTtBQWEvQixNQUFNSyw0QkFBY0osMkNBQUlBLENBQUM7UUFBQyxFQUFFSyxJQUFJLEVBQW9CO3lCQUNoRCw4REFBQ0gsa0RBQUlBO1FBQUNJLE1BQU07WUFBRUMsVUFBVSxlQUEwQixPQUFYRixLQUFLRyxLQUFLO1FBQUc7UUFBR0MsV0FBVTs7MEJBQzdELDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUlELFdBQVU7O3NDQUNYLDhEQUFDTixtREFBS0E7NEJBQUNRLEtBQUtOLEtBQUtPLE1BQU07NEJBQUVDLEtBQUtSLEtBQUtHLEtBQUs7NEJBQ3BDQyxXQUFVOzRCQUNWRCxPQUFPSCxLQUFLRyxLQUFLOzs7Ozs7c0NBRXJCLDhEQUFDTTtzQ0FDRyw0RUFBQ0M7O29DQUFLO29DQUFFVixLQUFLVyxJQUFJO29DQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJOUIsOERBQUNOO2dCQUFJRCxXQUFVOztrQ0FDWCw4REFBQ0s7a0NBQUdULEtBQUtZLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDOzs7Ozs7a0NBQ3pCLDhEQUFDQztrQ0FBSWQsS0FBS0csS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWZyQko7QUFvQk5BLFlBQVlnQixXQUFXLEdBQUc7QUFFMUIsTUFBTUMsZUFBZTs7SUFDakIsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR3JCLG1FQUFnQkE7SUFFckMsTUFBTXNCLG9CQUFvQnhCLG9EQUFhLENBQUMsSUFDcEN1QixTQUFTRyxNQUFNLENBQUNDLENBQUFBLFVBQ1o7Z0JBQUM7Z0JBQVU7Z0JBQVM7YUFBVyxDQUFDQyxRQUFRLENBQUNELFFBQVFsQixLQUFLLElBRTFEO1FBQUNjO0tBQVM7SUFHZCxxQkFDSSw4REFBQ1o7UUFBSUQsV0FBVTtrQkFDWCw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDVmMsa0JBQWtCSyxHQUFHLENBQUMsQ0FBQ3ZCLE1BQU13QixzQkFDMUIsOERBQUN6QjtvQkFBWUMsTUFBTUE7bUJBQVd3Qjs7Ozs7Ozs7Ozs7Ozs7O0FBS2xEO0dBbkJNUjs7UUFDbUJwQiwrREFBZ0JBOzs7TUFEbkNvQjtBQXFCTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tYWluUHJvamVjdHMvTWFpblByb2plY3RzLnRzeD82MjkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFwiLi9NYWluUHJvamVjdHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB1c2VGZXRjaFByb2plY3RzIGZyb20gJ0AvaG9va3MvdXNlRmV0Y2hQcm9qZWN0cyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5pbnRlcmZhY2UgUHJvamVjdCB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBwb3N0ZXI6IHN0cmluZztcbiAgICBkYXRlOiBzdHJpbmc7XG4gICAgY2F0ZWdvcmllczogc3RyaW5nW107XG59XG5cbmludGVyZmFjZSBQcm9qZWN0SXRlbVByb3BzIHtcbiAgICBpdGVtOiBQcm9qZWN0O1xufVxuXG5jb25zdCBQcm9qZWN0SXRlbSA9IG1lbW8oKHsgaXRlbSB9OiBQcm9qZWN0SXRlbVByb3BzKSA9PiAoXG4gICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9jYXNlLXN0dWR5LyR7aXRlbS50aXRsZX1gIH19IGNsYXNzTmFtZT1cIm1haW5Qcm9qZWN0c19faXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5Qcm9qZWN0c0NvX19pbWdzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5Qcm9qZWN0c19faXRlbV9faW1nXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5wb3N0ZXJ9IGFsdD17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFpblByb2plY3RzX19pdGVtX19pbWdfX3Bvc3RlclwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPi17aXRlbS5kYXRlfS08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5Qcm9qZWN0c19faXRlbV9fZGVzY1wiPlxuICAgICAgICAgICAgPHA+e2l0ZW0uY2F0ZWdvcmllcy5qb2luKCcgLSAnKX08L3A+XG4gICAgICAgICAgICA8aDI+e2l0ZW0udGl0bGV9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuKSk7XG5cblByb2plY3RJdGVtLmRpc3BsYXlOYW1lID0gXCJQcm9qZWN0SXRlbSBcIlxuXG5jb25zdCBNYWluUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwcm9qZWN0cyB9ID0gdXNlRmV0Y2hQcm9qZWN0cygpO1xuXG4gICAgY29uc3QgZGlzcGxheWVkUHJvamVjdHMgPSBSZWFjdC51c2VNZW1vKCgpID0+XG4gICAgICAgIHByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+XG4gICAgICAgICAgICBbJ0xlbWt1cycsICdBbGRhcicsICdJbm5vdmVzdCddLmluY2x1ZGVzKHByb2plY3QudGl0bGUpXG4gICAgICAgICksXG4gICAgICAgIFtwcm9qZWN0c11cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW5Qcm9qZWN0cyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5Qcm9qZWN0c19fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge2Rpc3BsYXllZFByb2plY3RzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RJdGVtIGl0ZW09e2l0ZW19IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblByb2plY3RzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWVtbyIsInVzZUZldGNoUHJvamVjdHMiLCJMaW5rIiwiSW1hZ2UiLCJQcm9qZWN0SXRlbSIsIml0ZW0iLCJocmVmIiwicGF0aG5hbWUiLCJ0aXRsZSIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsInBvc3RlciIsImFsdCIsInAiLCJzcGFuIiwiZGF0ZSIsImNhdGVnb3JpZXMiLCJqb2luIiwiaDIiLCJkaXNwbGF5TmFtZSIsIk1haW5Qcm9qZWN0cyIsInByb2plY3RzIiwiZGlzcGxheWVkUHJvamVjdHMiLCJ1c2VNZW1vIiwiZmlsdGVyIiwicHJvamVjdCIsImluY2x1ZGVzIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/mainProjects/MainProjects.tsx\n"));

/***/ })

});