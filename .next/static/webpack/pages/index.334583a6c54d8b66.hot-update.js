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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { supplier  } = param;\n    function deletesupplier(id) {\n        fetch(\"/api/stockFinal/supplier/\".concat(id), {\n            method: \"DELETE\"\n        }).then((res)=>res.json()).then((data)=>{\n            window.location.reload(false);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Supplier Management\"\n                }, void 0, false, {\n                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Supplier Management\"\n            }, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    margin: \"0.4rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/supplier/supplier\",\n                    children: \"+Add\"\n                }, void 0, false, {\n                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                variant: \"striped\",\n                colorScheme: \"teal\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Address\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Phone Number\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: supplier.map((supplier)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/supplier/\".concat(supplier._id),\n                                            children: supplier.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: {\n                                            textAlign: \"center\"\n                                        },\n                                        children: supplier.address\n                                    }, void 0, false, {\n                                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        style: {\n                                            textAlign: \"center\"\n                                        },\n                                        children: supplier.phone\n                                    }, void 0, false, {\n                                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    href: \"/supplier/update/\".concat(supplier._id),\n                                                    children: \"Update\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 21\n                                                }, this),\n                                                \"\\xa0\\xa0\\xa0\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: ()=>deletesupplier(supplier._id),\n                                                    children: \"Delete\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, supplier._id, true, {\n                                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNBO0FBQ1k7O0FBRTFCLFNBQVNHLEtBQUssS0FBWSxFQUFFO1FBQWQsRUFBRUMsU0FBUSxFQUFFLEdBQVo7SUFDM0IsU0FBU0MsZUFBZUMsRUFBRSxFQUFFO1FBQzFCQyxNQUFNLDRCQUErQixPQUFIRCxLQUFNO1lBQ3RDRSxRQUFRO1FBQ1YsR0FDR0MsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRyxPQUFTO1lBQ2RDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLEtBQUs7UUFDOUI7SUFDSjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ2Ysa0RBQUlBOzBCQUNILDRFQUFDZ0I7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBRUMsT0FBTztvQkFBRUMsUUFBUTtnQkFBUzswQkFDM0IsNEVBQUNuQixrREFBSUE7b0JBQUNvQixNQUFLOzhCQUFxQjs7Ozs7Ozs7Ozs7MEJBRWxDLDhEQUFDbkIsbURBQUtBO2dCQUFDb0IsU0FBUTtnQkFBVUMsYUFBWTs7a0NBQ25DLDhEQUFDQztrQ0FDQyw0RUFBQ0M7OzhDQUNDLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNDO2tDQUNFdkIsU0FBU3dCLEdBQUcsQ0FBQyxDQUFDeEIsV0FBYTs0QkFDMUIscUJBQ0UsOERBQUNxQjs7a0RBQ0MsOERBQUNJO2tEQUNDLDRFQUFDNUIsa0RBQUlBOzRDQUFDb0IsTUFBTSxhQUEwQixPQUFiakIsU0FBUzBCLEdBQUc7c0RBQ2xDMUIsU0FBUzJCLElBQUk7Ozs7Ozs7Ozs7O2tEQUdsQiw4REFBQ0Y7d0NBQUdWLE9BQU87NENBQUVhLFdBQVc7d0NBQVM7a0RBQUk1QixTQUFTNkIsT0FBTzs7Ozs7O2tEQUNyRCw4REFBQ0o7d0NBQUdWLE9BQU87NENBQUVhLFdBQVc7d0NBQVM7a0RBQUk1QixTQUFTOEIsS0FBSzs7Ozs7O2tEQUNuRCw4REFBQ0w7a0RBQ0M7OzhEQUNFLDhEQUFDNUIsa0RBQUlBO29EQUFDb0IsTUFBTSxvQkFBaUMsT0FBYmpCLFNBQVMwQixHQUFHOzhEQUFJOzs7Ozs7Z0RBRXpDOzhEQUVQLDhEQUFDSztvREFBT0MsU0FBUyxJQUFNL0IsZUFBZUQsU0FBUzBCLEdBQUc7OERBQUc7Ozs7Ozs7Ozs7Ozs7OytCQWRsRDFCLFNBQVMwQixHQUFHOzs7Ozt3QkFxQnpCOzs7Ozs7Ozs7Ozs7MEJBR0osOERBQUNPOzs7OzswQkFDRCw4REFBQ3BDLGtEQUFJQTtnQkFBQ29CLE1BQUs7MEJBQUk7Ozs7OzswQkFDZiw4REFBQ0g7Ozs7Ozs7QUFHUCxDQUFDO0tBNUR1QmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgc3VwcGxpZXIgfSkge1xuICBmdW5jdGlvbiBkZWxldGVzdXBwbGllcihpZCkge1xuICAgIGZldGNoKGAvYXBpL3N0b2NrRmluYWwvc3VwcGxpZXIvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TdXBwbGllciBNYW5hZ2VtZW50PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMT5TdXBwbGllciBNYW5hZ2VtZW50PC9oMT5cbiAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogXCIwLjRyZW1cIiB9fT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zdXBwbGllci9zdXBwbGllclwiPitBZGQ8L0xpbms+XG4gICAgICA8L3A+XG4gICAgICA8VGFibGUgdmFyaWFudD1cInN0cmlwZWRcIiBjb2xvclNjaGVtZT1cInRlYWxcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgIDx0aD5BZGRyZXNzPC90aD5cbiAgICAgICAgICAgIDx0aD5QaG9uZSBOdW1iZXI8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7c3VwcGxpZXIubWFwKChzdXBwbGllcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIGtleT17c3VwcGxpZXIuX2lkfT5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3N1cHBsaWVyLyR7c3VwcGxpZXIuX2lkfWB9PlxuICAgICAgICAgICAgICAgICAgICB7c3VwcGxpZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+e3N1cHBsaWVyLmFkZHJlc3N9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PntzdXBwbGllci5waG9uZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3VwcGxpZXIvdXBkYXRlLyR7c3VwcGxpZXIuX2lkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZXN1cHBsaWVyKHN1cHBsaWVyLl9pZCl9PlxuICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICAgIDxociAvPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgPHA+PC9wPlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc3RvY2tGaW5hbC9zdXBwbGllcmApO1xuICBjb25zdCBzdXBwbGllciA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7IHByb3BzOiB7IHN1cHBsaWVyIH0gfTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsIlRhYmxlIiwiSG9tZSIsInN1cHBsaWVyIiwiZGVsZXRlc3VwcGxpZXIiLCJpZCIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJ0aXRsZSIsImgxIiwicCIsInN0eWxlIiwibWFyZ2luIiwiaHJlZiIsInZhcmlhbnQiLCJjb2xvclNjaGVtZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwidGQiLCJfaWQiLCJuYW1lIiwidGV4dEFsaWduIiwiYWRkcmVzcyIsInBob25lIiwiYnV0dG9uIiwib25DbGljayIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});