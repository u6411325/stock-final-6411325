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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { supplier  } = param;\n    function deletesupplier(id) {\n        fetch(\"/api/stockFinal/supplier/\".concat(id), {\n            method: \"DELETE\"\n        }).then((res)=>res.json()).then((data)=>{\n            window.location.reload(false);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    paddingTop: \"30px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    style: {\n                        display: \"flex\",\n                        justifyContent: \"space-between\",\n                        width: \"50%\",\n                        padding: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            style: {\n                                textDecoration: \"none\",\n                                color: \"black\"\n                            },\n                            children: \"Add Suppliers\"\n                        }, void 0, false, {\n                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/about\",\n                            style: {\n                                textDecoration: \"none\",\n                                color: \"black\"\n                            },\n                            children: \"Supplier Management\"\n                        }, void 0, false, {\n                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                fontSize: \"5xl\",\n                children: \"Supplier Management\"\n            }, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    margin: \"0.4rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/supplier/\",\n                    children: \"+Add\"\n                }, void 0, false, {\n                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    borderRadius: \"10px\",\n                    boxShadow: \"0 0 10px rgba(0, 0, 0, 0.2)\",\n                    padding: \"10px\",\n                    width: \"70%\",\n                    margin: \"0 auto\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                    variant: \"simple\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Thead, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                        children: \"Address\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                        children: \"Phone Number\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tbody, {\n                            children: supplier.map((supplier)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tr, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/supplier/\".concat(supplier._id),\n                                                children: supplier.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                            children: supplier.address\n                                        }, void 0, false, {\n                                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                            children: supplier.phone\n                                        }, void 0, false, {\n                                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        href: \"/supplier/update/\".concat(supplier._id),\n                                                        children: \"Update\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    \"\\xa0\\xa0\\xa0\",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        onClick: ()=>deletesupplier(supplier._id),\n                                                        children: \"Delete\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                                        lineNumber: 91,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, supplier._id, true, {\n                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNBO0FBWUg7O0FBRVgsU0FBU1ksS0FBSyxLQUFZLEVBQUU7UUFBZCxFQUFFQyxTQUFRLEVBQUUsR0FBWjtJQUMzQixTQUFTQyxlQUFlQyxFQUFFLEVBQUU7UUFDMUJDLE1BQU0sNEJBQStCLE9BQUhELEtBQU07WUFDdENFLFFBQVE7UUFDVixHQUNHQyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHLE9BQVM7WUFDZEMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNLENBQUMsS0FBSztRQUM5QjtJQUNKO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFDQ0MsT0FBTztvQkFDTEMsU0FBUztvQkFDVEMsZ0JBQWdCO29CQUNoQkMsWUFBWTtnQkFDZDswQkFFQSw0RUFBQ0M7b0JBQ0NKLE9BQU87d0JBQ0xDLFNBQVM7d0JBQ1RDLGdCQUFnQjt3QkFDaEJHLE9BQU87d0JBQ1BDLFNBQVM7b0JBQ1g7O3NDQUVBLDhEQUFDQzs0QkFBRUMsTUFBSzs0QkFBSVIsT0FBTztnQ0FBRVMsZ0JBQWdCO2dDQUFRQyxPQUFPOzRCQUFRO3NDQUFHOzs7Ozs7c0NBRy9ELDhEQUFDSDs0QkFBRUMsTUFBSzs0QkFBU1IsT0FBTztnQ0FBRVMsZ0JBQWdCO2dDQUFRQyxPQUFPOzRCQUFRO3NDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNeEUsOERBQUN6QixrREFBSUE7Z0JBQUMwQixVQUFTOzBCQUFNOzs7Ozs7MEJBQ3JCLDhEQUFDQztnQkFBRVosT0FBTztvQkFBRWEsUUFBUTtnQkFBUzswQkFDM0IsNEVBQUN0QyxrREFBSUE7b0JBQUNpQyxNQUFLOzhCQUFhOzs7Ozs7Ozs7OzswQkFFMUIsOERBQUNUO2dCQUNDQyxPQUFPO29CQUNMYyxjQUFjO29CQUNkQyxXQUFXO29CQUNYVCxTQUFTO29CQUNURCxPQUFPO29CQUNQUSxRQUFRO2dCQUNWOzBCQUVBLDRFQUFDckMsbURBQUtBO29CQUFDd0MsU0FBUTs7c0NBQ2IsOERBQUN2QyxtREFBS0E7c0NBQ0osNEVBQUNHLGdEQUFFQTs7a0RBQ0QsOERBQUNDLGdEQUFFQTtrREFBQzs7Ozs7O2tEQUNKLDhEQUFDQSxnREFBRUE7a0RBQUM7Ozs7OztrREFDSiw4REFBQ0EsZ0RBQUVBO2tEQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHUiw4REFBQ0gsbURBQUtBO3NDQUNIUyxTQUFTOEIsR0FBRyxDQUFDLENBQUM5QixXQUFhO2dDQUMxQixxQkFDRSw4REFBQ1AsZ0RBQUVBOztzREFDRCw4REFBQ0UsZ0RBQUVBO3NEQUNELDRFQUFDUCxrREFBSUE7Z0RBQUNpQyxNQUFNLGFBQTBCLE9BQWJyQixTQUFTK0IsR0FBRzswREFDbEMvQixTQUFTZ0MsSUFBSTs7Ozs7Ozs7Ozs7c0RBR2xCLDhEQUFDckMsZ0RBQUVBO3NEQUFFSyxTQUFTaUMsT0FBTzs7Ozs7O3NEQUNyQiw4REFBQ3RDLGdEQUFFQTtzREFBRUssU0FBU2tDLEtBQUs7Ozs7OztzREFDbkIsOERBQUN2QyxnREFBRUE7c0RBQ0Q7O2tFQUNFLDhEQUFDUCxrREFBSUE7d0RBQUNpQyxNQUFNLG9CQUFpQyxPQUFickIsU0FBUytCLEdBQUc7a0VBQUk7Ozs7OztvREFFekM7a0VBRVAsOERBQUNJO3dEQUFPQyxTQUFTLElBQU1uQyxlQUFlRCxTQUFTK0IsR0FBRztrRUFBRzs7Ozs7Ozs7Ozs7Ozs7bUNBZGxEL0IsU0FBUytCLEdBQUc7Ozs7OzRCQXFCekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWixDQUFDO0tBeEZ1QmhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7XG4gIFRhYmxlLFxuICBUaGVhZCxcbiAgVGJvZHksXG4gIFRmb290LFxuICBUcixcbiAgVGgsXG4gIFRkLFxuICBUYWJsZUNhcHRpb24sXG4gIFRhYmxlQ29udGFpbmVyLFxuICBUZXh0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgc3VwcGxpZXIgfSkge1xuICBmdW5jdGlvbiBkZWxldGVzdXBwbGllcihpZCkge1xuICAgIGZldGNoKGAvYXBpL3N0b2NrRmluYWwvc3VwcGxpZXIvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMzBweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8bmF2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGEgaHJlZj1cIi9cIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+XG4gICAgICAgICAgICBBZGQgU3VwcGxpZXJzXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIvYWJvdXRcIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+XG4gICAgICAgICAgICBTdXBwbGllciBNYW5hZ2VtZW50XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8VGV4dCBmb250U2l6ZT1cIjV4bFwiPlN1cHBsaWVyIE1hbmFnZW1lbnQ8L1RleHQ+XG4gICAgICA8cCBzdHlsZT17eyBtYXJnaW46IFwiMC40cmVtXCIgfX0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc3VwcGxpZXIvXCI+K0FkZDwvTGluaz5cbiAgICAgIDwvcD5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICAgIGJveFNoYWRvdzogXCIwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMilcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICB3aWR0aDogXCI3MCVcIixcbiAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxUYWJsZSB2YXJpYW50PVwic2ltcGxlXCI+XG4gICAgICAgICAgPFRoZWFkPlxuICAgICAgICAgICAgPFRyPlxuICAgICAgICAgICAgICA8VGg+TmFtZTwvVGg+XG4gICAgICAgICAgICAgIDxUaD5BZGRyZXNzPC9UaD5cbiAgICAgICAgICAgICAgPFRoPlBob25lIE51bWJlcjwvVGg+XG4gICAgICAgICAgICA8L1RyPlxuICAgICAgICAgIDwvVGhlYWQ+XG4gICAgICAgICAgPFRib2R5PlxuICAgICAgICAgICAge3N1cHBsaWVyLm1hcCgoc3VwcGxpZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VHIga2V5PXtzdXBwbGllci5faWR9PlxuICAgICAgICAgICAgICAgICAgPFRkPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3N1cHBsaWVyLyR7c3VwcGxpZXIuX2lkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtzdXBwbGllci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L1RkPlxuICAgICAgICAgICAgICAgICAgPFRkPntzdXBwbGllci5hZGRyZXNzfTwvVGQ+XG4gICAgICAgICAgICAgICAgICA8VGQ+e3N1cHBsaWVyLnBob25lfTwvVGQ+XG4gICAgICAgICAgICAgICAgICA8VGQ+XG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zdXBwbGllci91cGRhdGUvJHtzdXBwbGllci5faWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVzdXBwbGllcihzdXBwbGllci5faWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgICAgICAgICAgPC9Ucj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvVGJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3N0b2NrRmluYWwvc3VwcGxpZXJgKTtcbiAgY29uc3Qgc3VwcGxpZXIgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4geyBwcm9wczogeyBzdXBwbGllciB9IH07XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJUYWJsZSIsIlRoZWFkIiwiVGJvZHkiLCJUZm9vdCIsIlRyIiwiVGgiLCJUZCIsIlRhYmxlQ2FwdGlvbiIsIlRhYmxlQ29udGFpbmVyIiwiVGV4dCIsIkhvbWUiLCJzdXBwbGllciIsImRlbGV0ZXN1cHBsaWVyIiwiaWQiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nVG9wIiwibmF2Iiwid2lkdGgiLCJwYWRkaW5nIiwiYSIsImhyZWYiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwiZm9udFNpemUiLCJwIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwidmFyaWFudCIsIm1hcCIsIl9pZCIsIm5hbWUiLCJhZGRyZXNzIiwicGhvbmUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});