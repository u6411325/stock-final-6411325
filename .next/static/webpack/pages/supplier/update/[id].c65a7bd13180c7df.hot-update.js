"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/supplier/update/[id]",{

/***/ "./src/pages/supplier/update/[id].js":
/*!*******************************************!*\
  !*** ./src/pages/supplier/update/[id].js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Supplier; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Supplier(param) {\n    let { supplier  } = param;\n    _s();\n    const { register , handleSubmit , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        reset(supplier);\n    }, [\n        reset,\n        supplier\n    ]);\n    const updateSupplier = async (data)=>{\n        const response = await fetch(\"/api/stockFinal/suppliers/\".concat(supplier._id), {\n            method: \"PUT\",\n            mode: \"cors\",\n            cache: \"no-cache\",\n            // credentials: \"same-origin\", // include, *same-origin, omit\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            // redirect: \"follow\", // manual, *follow, error\n            referrerPolicy: \"no-referrer\",\n            // serialisation\n            body: JSON.stringify(data)\n        });\n        const result = await response.json(); // deserialise\n        if (result.error) {\n            alert(\"Error: \" + result.error);\n        } else {\n            alert(\"Supplier updated\");\n            window.location.href = \"/\";\n        }\n        console.log(result);\n        setData(JSON.stringify(data));\n    };\n    console.log(\"supplier 2\", supplier);\n    if (!supplier) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Supplier not found\"\n            }, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: \"Back\"\n            }, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n        lineNumber: 55,\n        columnNumber: 7\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                borderRadius: \"4px\",\n                boxShadow: \"0 0 10px rgba(0, 0, 0, 0.1)\",\n                padding: \"20px\",\n                width: \"600px\",\n                margin: \"0 auto\",\n                marginTop: \"6em\",\n                backgroundColor: \"#F9FBFB\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                style: {\n                    maxWidth: \"80%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                    onSubmit: handleSubmit(updateSupplier),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            style: {\n                                marginTop: \"2em\",\n                                marginBottom: \"2em\"\n                            },\n                            children: \"Edit Supplier Details\"\n                        }, void 0, false, {\n                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {\n                            controlId: \"name\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Label, {\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {\n                                    ...register(\"name\", {\n                                        required: true\n                                    }),\n                                    placeholder: \"Ada Lovelace\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {\n                            controlId: \"address\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Label, {\n                                    children: \"Address\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {\n                                    ...register(\"address\", {\n                                        required: true\n                                    }),\n                                    placeholder: \"City, Country\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Group, {\n                            controlId: \"phone\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Label, {\n                                    children: \"Phone Number\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {\n                                    ...register(\"phone\", {\n                                        required: true\n                                    }),\n                                    placeholder: \"082-1725-7165\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                display: \"flex\",\n                                justifyContent: \"center\",\n                                alignItems: \"center\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        style: {\n                                            marginLeft: \"6em\",\n                                            marginRight: \"2em\",\n                                            width: \"10em\"\n                                        },\n                                        variant: \"secondary\",\n                                        children: \"Cancel\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                                        lineNumber: 116,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    style: {\n                                        width: \"10em\"\n                                    },\n                                    variant: \"primary\",\n                                    type: \"submit\",\n                                    children: \"Update\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                                    lineNumber: 127,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                            lineNumber: 108,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: data\n                        }, void 0, false, {\n                            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                            lineNumber: 138,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/acm/Desktop/stock-final-6411325/src/pages/supplier/update/[id].js\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Supplier, \"P59vrQl2+ct33nEaKXo7NTg75IE=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c = Supplier;\nvar _c;\n$RefreshReg$(_c, \"Supplier\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7c0NBR2hCLDhEQUFDQzs7Ozs7c0NBRUQsOERBQUN2Qjs0QkFDQ0UsT0FBTztnQ0FDTEMsU0FBUztnQ0FDVEMsZ0JBQWdCO2dDQUNoQkMsWUFBWTs0QkFDZDs7OENBRUEsOERBQUM3QyxrREFBSUE7b0NBQUNxQyxNQUFLO29DQUFJMkIsUUFBUTs4Q0FDckIsNEVBQUM3RCxtREFBTUE7d0NBQ0x1QyxPQUFPOzRDQUNMdUIsWUFBWTs0Q0FDWkMsYUFBYTs0Q0FDYmpCLE9BQU87d0NBQ1Q7d0NBQ0FrQixTQUFRO2tEQUNUOzs7Ozs7Ozs7Ozs4Q0FJSCw4REFBQ2hFLG1EQUFNQTtvQ0FDTHVDLE9BQU87d0NBQ0xPLE9BQU87b0NBQ1Q7b0NBQ0FrQixTQUFRO29DQUNSQyxNQUFLOzhDQUNOOzs7Ozs7Ozs7Ozs7c0NBS0gsOERBQUMzQjtzQ0FBR3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQixDQUFDO0dBOUh1Qkw7O1FBQ29CRCxvREFBT0E7OztLQUQzQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3N1cHBsaWVyL3VwZGF0ZS9baWRdLmpzPzE0OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBUYWJsZSxcbiAgQnV0dG9uLFxuICBSb3csXG4gIENvbCxcbiAgTmF2YmFyLFxuICBOYXYsXG4gIEZvcm0sXG59IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdXBwbGllcih7IHN1cHBsaWVyIH0pIHtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCByZXNldCB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlc2V0KHN1cHBsaWVyKTtcbiAgfSwgW3Jlc2V0LCBzdXBwbGllcl0pO1xuXG4gIGNvbnN0IHVwZGF0ZVN1cHBsaWVyID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3N0b2NrRmluYWwvc3VwcGxpZXJzLyR7c3VwcGxpZXIuX2lkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIiwgLy8gKkdFVCwgUE9TVCwgUFVULCBERUxFVEUsIGV0Yy5cbiAgICAgIG1vZGU6IFwiY29yc1wiLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cbiAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcbiAgICAgIC8vIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsIC8vIGluY2x1ZGUsICpzYW1lLW9yaWdpbiwgb21pdFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgfSxcbiAgICAgIC8vIHJlZGlyZWN0OiBcImZvbGxvd1wiLCAvLyBtYW51YWwsICpmb2xsb3csIGVycm9yXG4gICAgICByZWZlcnJlclBvbGljeTogXCJuby1yZWZlcnJlclwiLCAvLyBuby1yZWZlcnJlciwgKm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlLCBvcmlnaW4sIG9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgc2FtZS1vcmlnaW4sIHN0cmljdC1vcmlnaW4sIHN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW4sIHVuc2FmZS11cmxcbiAgICAgIC8vIHNlcmlhbGlzYXRpb25cbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCAvLyBib2R5IGRhdGEgdHlwZSBtdXN0IG1hdGNoIFwiQ29udGVudC1UeXBlXCIgaGVhZGVyXG4gICAgfSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAvLyBkZXNlcmlhbGlzZVxuICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgIGFsZXJ0KFwiRXJyb3I6IFwiICsgcmVzdWx0LmVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJTdXBwbGllciB1cGRhdGVkXCIpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICBzZXREYXRhKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfTtcblxuICBjb25zb2xlLmxvZyhcInN1cHBsaWVyIDJcIiwgc3VwcGxpZXIpO1xuICBpZiAoIXN1cHBsaWVyKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5TdXBwbGllciBub3QgZm91bmQ8L3A+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+QmFjazwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgICAgICAgIGJveFNoYWRvdzogXCIwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcbiAgICAgICAgICB3aWR0aDogXCI2MDBweFwiLFxuICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiNmVtXCIsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGOUZCRkJcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lciBzdHlsZT17eyBtYXhXaWR0aDogXCI4MCVcIiB9fT5cbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHVwZGF0ZVN1cHBsaWVyKX0+XG4gICAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjJlbVwiLCBtYXJnaW5Cb3R0b206IFwiMmVtXCIgfX0+XG4gICAgICAgICAgICAgIEVkaXQgU3VwcGxpZXIgRGV0YWlsc1xuICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwibmFtZVwiPlxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5OYW1lPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwibmFtZVwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRhIExvdmVsYWNlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPEZvcm0uR3JvdXAgY29udHJvbElkPVwiYWRkcmVzc1wiPlxuICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5BZGRyZXNzPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiYWRkcmVzc1wiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2l0eSwgQ291bnRyeVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNvbnRyb2xJZD1cInBob25lXCI+XG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlBob25lIE51bWJlcjwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInBob25lXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwODItMTcyNS03MTY1XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjZlbVwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTBlbVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTBlbVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwPntkYXRhfTwvcD5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zb2xlLmRlYnVnKFwicGFyYW1zXCIsIHBhcmFtcyk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3N0b2NrRmluYWwvc3VwcGxpZXIvJHtwYXJhbXMuaWR9YFxuICApO1xuICBjb25zdCBzdXBwbGllciA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7IHByb3BzOiB7IHN1cHBsaWVyIH0gfTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsIkNvbnRhaW5lciIsIlRhYmxlIiwiQnV0dG9uIiwiUm93IiwiQ29sIiwiTmF2YmFyIiwiTmF2IiwiRm9ybSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRm9ybSIsIlN1cHBsaWVyIiwic3VwcGxpZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJlc2V0IiwiZGF0YSIsInNldERhdGEiLCJ1cGRhdGVTdXBwbGllciIsInJlc3BvbnNlIiwiZmV0Y2giLCJfaWQiLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJoZWFkZXJzIiwicmVmZXJyZXJQb2xpY3kiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImpzb24iLCJlcnJvciIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY29uc29sZSIsImxvZyIsImRpdiIsInAiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJwYWRkaW5nIiwid2lkdGgiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXhXaWR0aCIsIm9uU3VibWl0IiwiaDMiLCJtYXJnaW5Cb3R0b20iLCJHcm91cCIsImNvbnRyb2xJZCIsIkxhYmVsIiwiQ29udHJvbCIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJiciIsInBhc3NIcmVmIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwidmFyaWFudCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/supplier/update/[id].js\n"));

/***/ })

});