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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { supplier  } = param;\n    function deletesupplier(id) {\n        fetch(\"/api/stockFinal/supplier/\".concat(id), {\n            method: \"DELETE\"\n        }).then((res)=>res.json()).then((data)=>{\n            window.location.reload(false);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                    fontSize: \"5xl\",\n                    children: \"Supplier Management\"\n                }, void 0, false, {\n                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Supplier Management\"\n            }, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    margin: \"0.4rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/supplier/supplier\",\n                    children: \"+Add\"\n                }, void 0, false, {\n                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                variant: \"simple\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Thead, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tr, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                    children: \"Address\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                    children: \"Phone Number\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tbody, {\n                        children: supplier.map((supplier)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/supplier/\".concat(supplier._id),\n                                            children: supplier.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                        style: {\n                                            textAlign: \"center\"\n                                        },\n                                        children: supplier.address\n                                    }, void 0, false, {\n                                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                        style: {\n                                            textAlign: \"center\"\n                                        },\n                                        children: supplier.phone\n                                    }, void 0, false, {\n                                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    href: \"/supplier/update/\".concat(supplier._id),\n                                                    children: \"Update\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 21\n                                                }, this),\n                                                \"\\xa0\\xa0\\xa0\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: ()=>deletesupplier(supplier._id),\n                                                    children: \"Delete\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, supplier._id, true, {\n                                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNBO0FBWUg7O0FBRVgsU0FBU1ksS0FBSyxLQUFZLEVBQUU7UUFBZCxFQUFFQyxTQUFRLEVBQUUsR0FBWjtJQUMzQixTQUFTQyxlQUFlQyxFQUFFLEVBQUU7UUFDMUJDLE1BQU0sNEJBQStCLE9BQUhELEtBQU07WUFDdENFLFFBQVE7UUFDVixHQUNHQyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHLE9BQVM7WUFDZEMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNLENBQUMsS0FBSztRQUM5QjtJQUNKO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDeEIsa0RBQUlBOzBCQUNILDRFQUFDVyxrREFBSUE7b0JBQUNjLFVBQVM7OEJBQU07Ozs7Ozs7Ozs7OzBCQUV2Qiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUVDLE9BQU87b0JBQUVDLFFBQVE7Z0JBQVM7MEJBQzNCLDRFQUFDNUIsa0RBQUlBO29CQUFDNkIsTUFBSzs4QkFBcUI7Ozs7Ozs7Ozs7OzBCQUVsQyw4REFBQzVCLG1EQUFLQTtnQkFBQzZCLFNBQVE7O2tDQUNiLDhEQUFDNUIsbURBQUtBO2tDQUNKLDRFQUFDRyxnREFBRUE7OzhDQUNELDhEQUFDQyxnREFBRUE7OENBQUM7Ozs7Ozs4Q0FDSiw4REFBQ0EsZ0RBQUVBOzhDQUFDOzs7Ozs7OENBQ0osOERBQUNBLGdEQUFFQTs4Q0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNILG1EQUFLQTtrQ0FDSFMsU0FBU21CLEdBQUcsQ0FBQyxDQUFDbkIsV0FBYTs0QkFDMUIscUJBQ0UsOERBQUNQLGdEQUFFQTs7a0RBQ0QsOERBQUNFLGdEQUFFQTtrREFDRCw0RUFBQ1Asa0RBQUlBOzRDQUFDNkIsTUFBTSxhQUEwQixPQUFiakIsU0FBU29CLEdBQUc7c0RBQ2xDcEIsU0FBU3FCLElBQUk7Ozs7Ozs7Ozs7O2tEQUdsQiw4REFBQzFCLGdEQUFFQTt3Q0FBQ29CLE9BQU87NENBQUVPLFdBQVc7d0NBQVM7a0RBQUl0QixTQUFTdUIsT0FBTzs7Ozs7O2tEQUNyRCw4REFBQzVCLGdEQUFFQTt3Q0FBQ29CLE9BQU87NENBQUVPLFdBQVc7d0NBQVM7a0RBQUl0QixTQUFTd0IsS0FBSzs7Ozs7O2tEQUNuRCw4REFBQzdCLGdEQUFFQTtrREFDRDs7OERBQ0UsOERBQUNQLGtEQUFJQTtvREFBQzZCLE1BQU0sb0JBQWlDLE9BQWJqQixTQUFTb0IsR0FBRzs4REFBSTs7Ozs7O2dEQUV6Qzs4REFFUCw4REFBQ0s7b0RBQU9DLFNBQVMsSUFBTXpCLGVBQWVELFNBQVNvQixHQUFHOzhEQUFHOzs7Ozs7Ozs7Ozs7OzsrQkFkbERwQixTQUFTb0IsR0FBRzs7Ozs7d0JBcUJ6Qjs7Ozs7Ozs7Ozs7OzBCQUdKLDhEQUFDTzs7Ozs7MEJBQ0QsOERBQUN2QyxrREFBSUE7Z0JBQUM2QixNQUFLOzBCQUFJOzs7Ozs7MEJBQ2YsOERBQUNIOzs7Ozs7O0FBR1AsQ0FBQztLQTVEdUJmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7XG4gIFRhYmxlLFxuICBUaGVhZCxcbiAgVGJvZHksXG4gIFRmb290LFxuICBUcixcbiAgVGgsXG4gIFRkLFxuICBUYWJsZUNhcHRpb24sXG4gIFRhYmxlQ29udGFpbmVyLFxuICBUZXh0LFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgc3VwcGxpZXIgfSkge1xuICBmdW5jdGlvbiBkZWxldGVzdXBwbGllcihpZCkge1xuICAgIGZldGNoKGAvYXBpL3N0b2NrRmluYWwvc3VwcGxpZXIvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwiNXhsXCI+U3VwcGxpZXIgTWFuYWdlbWVudDwvVGV4dD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMT5TdXBwbGllciBNYW5hZ2VtZW50PC9oMT5cbiAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwLjRyZW1cIiB9fT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zdXBwbGllci9zdXBwbGllclwiPitBZGQ8L0xpbms+XG4gICAgICA8L3A+XG4gICAgICA8VGFibGUgdmFyaWFudD1cInNpbXBsZVwiPlxuICAgICAgICA8VGhlYWQ+XG4gICAgICAgICAgPFRyPlxuICAgICAgICAgICAgPFRoPk5hbWU8L1RoPlxuICAgICAgICAgICAgPFRoPkFkZHJlc3M8L1RoPlxuICAgICAgICAgICAgPFRoPlBob25lIE51bWJlcjwvVGg+XG4gICAgICAgICAgPC9Ucj5cbiAgICAgICAgPC9UaGVhZD5cbiAgICAgICAgPFRib2R5PlxuICAgICAgICAgIHtzdXBwbGllci5tYXAoKHN1cHBsaWVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VHIga2V5PXtzdXBwbGllci5faWR9PlxuICAgICAgICAgICAgICAgIDxUZD5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3VwcGxpZXIvJHtzdXBwbGllci5faWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtzdXBwbGllci5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgICAgICAgICAgPFRkIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT57c3VwcGxpZXIuYWRkcmVzc308L1RkPlxuICAgICAgICAgICAgICAgIDxUZCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+e3N1cHBsaWVyLnBob25lfTwvVGQ+XG4gICAgICAgICAgICAgICAgPFRkPlxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zdXBwbGllci91cGRhdGUvJHtzdXBwbGllci5faWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlc3VwcGxpZXIoc3VwcGxpZXIuX2lkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgPC9UZD5cbiAgICAgICAgICAgICAgPC9Ucj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgICAgPGhyIC8+XG4gICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICA8cD48L3A+XG4gICAgPC8+XG4gICk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zdG9ja0ZpbmFsL3N1cHBsaWVyYCk7XG4gIGNvbnN0IHN1cHBsaWVyID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgc3VwcGxpZXIgfSB9O1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiVGFibGUiLCJUaGVhZCIsIlRib2R5IiwiVGZvb3QiLCJUciIsIlRoIiwiVGQiLCJUYWJsZUNhcHRpb24iLCJUYWJsZUNvbnRhaW5lciIsIlRleHQiLCJIb21lIiwic3VwcGxpZXIiLCJkZWxldGVzdXBwbGllciIsImlkIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImZvbnRTaXplIiwiaDEiLCJwIiwic3R5bGUiLCJtYXJnaW4iLCJocmVmIiwidmFyaWFudCIsIm1hcCIsIl9pZCIsIm5hbWUiLCJ0ZXh0QWxpZ24iLCJhZGRyZXNzIiwicGhvbmUiLCJidXR0b24iLCJvbkNsaWNrIiwiaHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});