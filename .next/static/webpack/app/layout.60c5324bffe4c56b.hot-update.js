"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/navbar/Nabvar.tsx":
/*!******************************************!*\
  !*** ./src/components/navbar/Nabvar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Navbar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar.scss */ \"(app-pages-browser)/./src/components/navbar/Navbar.scss\");\n/* harmony import */ var _nav_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/index */ \"(app-pages-browser)/./src/components/navbar/nav/index.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// Define the links array with the Link type\nconst links = [\n    {\n        title: \"Services\",\n        href: \"/services\"\n    },\n    {\n        title: \"Work\",\n        href: \"/work\"\n    },\n    {\n        title: \"Case Studies\",\n        href: \"/case-study\"\n    },\n    {\n        title: \"Studio\",\n        href: \"/about\"\n    },\n    {\n        title: \"Get A Qoute\",\n        href: \"/contact\"\n    }\n];\nconst Nabvar = ()=>{\n    _s();\n    const [navOpen, setNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentTime, setCurrentTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(window.innerWidth);\n    const toggleNavOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setNavOpen((prevNavOpen)=>!prevNavOpen);\n    }, [\n        setNavOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setNavOpen(false);\n    }, [\n        location.pathname,\n        setNavOpen\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setNavOpen(false); // Close the navbar when the location changes\n    }, [\n        pathname\n    ]);\n    const formatTime = ()=>{\n        return moment().tz(\"Africa/Cairo\").format(\"HH:mm\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setCurrentTime(new Date());\n        }, 60000); // Update every minute\n        return ()=>clearInterval(interval); // Cleanup interval on unmount\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        style: {\n            position: \"relative\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"nav\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    className: \"nav__logo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"CAIRO STUDIO\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/navbar/Nabvar.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/navbar/Nabvar.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"nav__corner\",\n                    children: [\n                        windowWidth < 1200 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"Cairo: \",\n                                formatTime(currentTime)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/navbar/Nabvar.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 44\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"navLinks\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.h2, {\n                                        children: [\n                                            \"Cairo: \",\n                                            formatTime(currentTime)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/navbar/Nabvar.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    links.map((link, index)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: link.href,\n                                                children: link.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/navbar/Nabvar.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, index, false, {\n                                            fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/navbar/Nabvar.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 37\n                                        }, undefined);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/navbar/Nabvar.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/navbar/Nabvar.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, undefined),\n                        windowWidth < 1200 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            onClick: toggleNavOpen,\n                            className: \"menuNav\",\n                            children: \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/navbar/Nabvar.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 44\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/navbar/Nabvar.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimatePresence, {\n                    mode: \"wait\",\n                    children: navOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        setNavOpen: setNavOpen\n                    }, void 0, false, {\n                        fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/navbar/Nabvar.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 33\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/navbar/Nabvar.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/navbar/Nabvar.tsx\",\n            lineNumber: 63,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/shehabwaleed/Development/work/cairostudio/src/components/navbar/Nabvar.tsx\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Nabvar, \"wuajzK47Yrkgz9yFiCQ38I7Qx04=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Nabvar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nabvar);\nvar _c;\n$RefreshReg$(_c, \"Nabvar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25hdmJhci9OYWJ2YXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzBFO0FBQzdDO0FBQzJCO0FBQ1Y7QUFDdkI7QUFFTztBQU85Qiw0Q0FBNEM7QUFDNUMsTUFBTVMsUUFBZ0I7SUFDbEI7UUFBRUMsT0FBTztRQUFZQyxNQUFNO0lBQVk7SUFDdkM7UUFBRUQsT0FBTztRQUFRQyxNQUFNO0lBQVE7SUFDL0I7UUFBRUQsT0FBTztRQUFnQkMsTUFBTTtJQUFjO0lBQzdDO1FBQUVELE9BQU87UUFBVUMsTUFBTTtJQUFTO0lBQ2xDO1FBQUVELE9BQU87UUFBZUMsTUFBTTtJQUFXO0NBQzVDO0FBU0QsTUFBTUMsU0FBbUI7O0lBQ3JCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBVTtJQUNoRCxNQUFNLENBQUNjLGFBQWFDLGVBQWUsR0FBR2YsK0NBQVFBLENBQU8sSUFBSWdCO0lBQ3pELE1BQU1DLFdBQW1CWCw0REFBV0E7SUFDcEMsTUFBTSxDQUFDWSxhQUFhQyxlQUFlLEdBQUduQiwrQ0FBUUEsQ0FBQ29CLE9BQU9DLFVBQVU7SUFFaEUsTUFBTUMsZ0JBQWdCcEIsa0RBQVdBLENBQUM7UUFDOUJXLFdBQVdVLENBQUFBLGNBQWUsQ0FBQ0E7SUFDL0IsR0FBRztRQUFDVjtLQUFXO0lBRWZaLGdEQUFTQSxDQUFDO1FBQ05ZLFdBQVc7SUFDZixHQUFHO1FBQUNXLFNBQVNQLFFBQVE7UUFBRUo7S0FBVztJQUVsQ1osZ0RBQVNBLENBQUM7UUFDTlksV0FBVyxRQUFRLDZDQUE2QztJQUNwRSxHQUFHO1FBQUNJO0tBQVM7SUFFYixNQUFNUSxhQUFhO1FBQ2YsT0FBT0MsU0FBU0MsRUFBRSxDQUFDLGdCQUFnQkMsTUFBTSxDQUFDO0lBQzlDO0lBRUEzQixnREFBU0EsQ0FBQztRQUNOLE1BQU00QixXQUEyQkMsWUFBWTtZQUN6Q2YsZUFBZSxJQUFJQztRQUN2QixHQUFHLFFBQVEsc0JBQXNCO1FBRWpDLE9BQU8sSUFBTWUsY0FBY0YsV0FBVyw4QkFBOEI7SUFDeEUsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNHO1FBQU9DLE9BQU87WUFBRUMsVUFBVTtRQUFXO2tCQUNsQyw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNqQyxrREFBSUE7b0JBQUNPLE1BQUs7b0JBQUkwQixXQUFVOzhCQUNyQiw0RUFBQ0M7a0NBQUc7Ozs7Ozs7Ozs7OzhCQUVSLDhEQUFDQztvQkFBSUYsV0FBVTs7d0JBQ1ZsQixjQUFjLHNCQUFRLDhEQUFDcUI7O2dDQUFLO2dDQUFRZCxXQUFXWDs7Ozs7OztzQ0FDaEQsOERBQUN3Qjs0QkFBSUYsV0FBVTtzQ0FDWCw0RUFBQ0k7O2tEQUNHLDhEQUFDbkMsaURBQU1BLENBQUNvQyxFQUFFOzs0Q0FBQzs0Q0FBUWhCLFdBQVdYOzs7Ozs7O29DQUM3Qk4sTUFBTWtDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQzt3Q0FDZCxxQkFDSSw4REFBQ0M7c0RBQ0csNEVBQUMxQyxrREFBSUE7Z0RBQUNPLE1BQU1pQyxLQUFLakMsSUFBSTswREFDaEJpQyxLQUFLbEMsS0FBSzs7Ozs7OzJDQUZWbUM7Ozs7O29DQU1qQjs7Ozs7Ozs7Ozs7O3dCQUdQMUIsY0FBYyxzQkFBUSw4REFBQ3VCOzRCQUFHSyxTQUFTeEI7NEJBQWVjLFdBQVU7c0NBQVU7Ozs7Ozs7Ozs7Ozs4QkFJM0UsOERBQUNoQywwREFBZUE7b0JBQUMyQyxNQUFLOzhCQUNqQm5DLHlCQUFXLDhEQUFDTCxrREFBR0E7d0JBQUNNLFlBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pEO0dBOURNRjs7UUFHdUJMLHdEQUFXQTs7O0tBSGxDSztBQWdFTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvTmFidmFyLnRzeD81M2M5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBTdXNwZW5zZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCAnLi9OYXZiYXIuc2Nzcyc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi9uYXYvaW5kZXhcIjtcblxudHlwZSBMaW5rID0ge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaHJlZjogc3RyaW5nO1xufTtcblxuLy8gRGVmaW5lIHRoZSBsaW5rcyBhcnJheSB3aXRoIHRoZSBMaW5rIHR5cGVcbmNvbnN0IGxpbmtzOiBMaW5rW10gPSBbXG4gICAgeyB0aXRsZTogXCJTZXJ2aWNlc1wiLCBocmVmOiBcIi9zZXJ2aWNlc1wiIH0sXG4gICAgeyB0aXRsZTogXCJXb3JrXCIsIGhyZWY6IFwiL3dvcmtcIiB9LFxuICAgIHsgdGl0bGU6IFwiQ2FzZSBTdHVkaWVzXCIsIGhyZWY6IFwiL2Nhc2Utc3R1ZHlcIiB9LFxuICAgIHsgdGl0bGU6IFwiU3R1ZGlvXCIsIGhyZWY6IFwiL2Fib3V0XCIgfSxcbiAgICB7IHRpdGxlOiBcIkdldCBBIFFvdXRlXCIsIGhyZWY6IFwiL2NvbnRhY3RcIiB9LFxuXTtcblxudHlwZSBTZWxlY3RlZExpbmsgPSB7XG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XG4gICAgaW5kZXg6IG51bWJlcjtcbn07XG5cblxuXG5jb25zdCBOYWJ2YXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IFtuYXZPcGVuLCBzZXROYXZPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBjb25zdCBbY3VycmVudFRpbWUsIHNldEN1cnJlbnRUaW1lXSA9IHVzZVN0YXRlPERhdGU+KG5ldyBEYXRlKCkpO1xuICAgIGNvbnN0IHBhdGhuYW1lOiBzdHJpbmcgPSB1c2VQYXRobmFtZSgpO1xuICAgIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGUod2luZG93LmlubmVyV2lkdGgpO1xuXG4gICAgY29uc3QgdG9nZ2xlTmF2T3BlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0TmF2T3BlbihwcmV2TmF2T3BlbiA9PiAhcHJldk5hdk9wZW4pO1xuICAgIH0sIFtzZXROYXZPcGVuXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXROYXZPcGVuKGZhbHNlKTtcbiAgICB9LCBbbG9jYXRpb24ucGF0aG5hbWUsIHNldE5hdk9wZW5dKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldE5hdk9wZW4oZmFsc2UpOyAvLyBDbG9zZSB0aGUgbmF2YmFyIHdoZW4gdGhlIGxvY2F0aW9uIGNoYW5nZXNcbiAgICB9LCBbcGF0aG5hbWVdKTtcblxuICAgIGNvbnN0IGZvcm1hdFRpbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBtb21lbnQoKS50eignQWZyaWNhL0NhaXJvJykuZm9ybWF0KCdISDptbScpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcnZhbDogTm9kZUpTLlRpbWVvdXQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRDdXJyZW50VGltZShuZXcgRGF0ZSgpKTtcbiAgICAgICAgfSwgNjAwMDApOyAvLyBVcGRhdGUgZXZlcnkgbWludXRlXG5cbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyAvLyBDbGVhbnVwIGludGVydmFsIG9uIHVubW91bnRcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nbmF2Jz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIm5hdl9fbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+Q0FJUk8gU1RVRElPPC9oMT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX2Nvcm5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7d2luZG93V2lkdGggPCAxMjAwICYmIDxzcGFuPkNhaXJvOiB7Zm9ybWF0VGltZShjdXJyZW50VGltZSl9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdkxpbmtzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmgyPkNhaXJvOiB7Zm9ybWF0VGltZShjdXJyZW50VGltZSl9PC9tb3Rpb24uaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGluay50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3dpbmRvd1dpZHRoIDwgMTIwMCAmJiA8aDIgb25DbGljaz17dG9nZ2xlTmF2T3Blbn0gY2xhc3NOYW1lPSdtZW51TmF2Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1lbnVcbiAgICAgICAgICAgICAgICAgICAgPC9oMj59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPSd3YWl0Jz5cbiAgICAgICAgICAgICAgICAgICAge25hdk9wZW4gJiYgPE5hdiBzZXROYXZPcGVuPXtzZXROYXZPcGVufSAvPn1cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYWJ2YXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwiTGluayIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsInVzZVBhdGhuYW1lIiwiTmF2IiwibGlua3MiLCJ0aXRsZSIsImhyZWYiLCJOYWJ2YXIiLCJuYXZPcGVuIiwic2V0TmF2T3BlbiIsImN1cnJlbnRUaW1lIiwic2V0Q3VycmVudFRpbWUiLCJEYXRlIiwicGF0aG5hbWUiLCJ3aW5kb3dXaWR0aCIsInNldFdpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInRvZ2dsZU5hdk9wZW4iLCJwcmV2TmF2T3BlbiIsImxvY2F0aW9uIiwiZm9ybWF0VGltZSIsIm1vbWVudCIsInR6IiwiZm9ybWF0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJoZWFkZXIiLCJzdHlsZSIsInBvc2l0aW9uIiwibmF2IiwiY2xhc3NOYW1lIiwiaDEiLCJkaXYiLCJzcGFuIiwidWwiLCJoMiIsIm1hcCIsImxpbmsiLCJpbmRleCIsImxpIiwib25DbGljayIsIm1vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/navbar/Nabvar.tsx\n"));

/***/ })

});