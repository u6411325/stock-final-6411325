"use strict";
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
exports.id = "pages/api/stockFinal/supplier";
exports.ids = ["pages/api/stockFinal/supplier"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _interopRequireDefault;\n    }\n}));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvY2stZmluYWwtNjQxMDM4MS8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5qcz80OGNiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbiAgICB9XG59KTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "(api)/./lib/dbConnect.js":
/*!**************************!*\
  !*** ./lib/dbConnect.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n/** \r\nSource : \r\nhttps://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js \r\n**/ const MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\r\n * Global is used here to maintain a cached connection across hot reloads\r\n * in development. This prevents connections growing exponentially\r\n * during API Route usage.\r\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGJDb25uZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQzs7O0NBR0MsR0FFRCxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFFM0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsTUFDUix3RUFDQTtBQUNKLENBQUM7QUFFRDs7OztDQUlDLEdBQ0QsSUFBSUMsU0FBU0MsT0FBT04sUUFBUTtBQUU1QixJQUFJLENBQUNLLFFBQVE7SUFDWEEsU0FBU0MsT0FBT04sUUFBUSxHQUFHO1FBQUVPLE1BQU0sSUFBSTtRQUFFQyxTQUFTLElBQUk7SUFBQztBQUN6RCxDQUFDO0FBRUQsZUFBZUMsWUFBWTtJQUN6QixJQUFJSixPQUFPRSxJQUFJLEVBQUU7UUFDZixPQUFPRixPQUFPRSxJQUFJO0lBQ3BCLENBQUM7SUFFRCxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxPQUFPO1lBQ1hDLGlCQUFpQixJQUFJO1lBQ3JCQyxvQkFBb0IsSUFBSTtZQUN4QkMsZ0JBQWdCLEtBQUs7UUFJdkI7UUFFQVIsT0FBT0csT0FBTyxHQUFHUix1REFBZ0IsQ0FBQ0MsYUFBYVMsTUFBTUssSUFBSSxDQUFDLENBQUNmLFdBQWE7WUFDdEUsT0FBT0E7UUFDVDtJQUNGLENBQUM7SUFDREssT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDbEMsT0FBT0gsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvY2stZmluYWwtNjQxMDM4MS8uL2xpYi9kYkNvbm5lY3QuanM/MWQzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG4vKiogXHJcblNvdXJjZSA6IFxyXG5odHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvYmxvYi9jYW5hcnkvZXhhbXBsZXMvd2l0aC1tb25nb2RiLW1vbmdvb3NlL3V0aWxzL2RiQ29ubmVjdC5qcyBcclxuKiovXHJcblxyXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG5cclxuaWYgKCFNT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcihcclxuICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWxcIlxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHbG9iYWwgaXMgdXNlZCBoZXJlIHRvIG1haW50YWluIGEgY2FjaGVkIGNvbm5lY3Rpb24gYWNyb3NzIGhvdCByZWxvYWRzXHJcbiAqIGluIGRldmVsb3BtZW50LiBUaGlzIHByZXZlbnRzIGNvbm5lY3Rpb25zIGdyb3dpbmcgZXhwb25lbnRpYWxseVxyXG4gKiBkdXJpbmcgQVBJIFJvdXRlIHVzYWdlLlxyXG4gKi9cclxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcclxuXHJcbmlmICghY2FjaGVkKSB7XHJcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcclxuICBpZiAoY2FjaGVkLmNvbm4pIHtcclxuICAgIHJldHVybiBjYWNoZWQuY29ubjtcclxuICB9XHJcblxyXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcclxuICAgIGNvbnN0IG9wdHMgPSB7XHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXHJcbiAgICAgIC8vIGJ1ZmZlck1heEVudHJpZXM6IDAsXHJcbiAgICAgIC8vIHVzZUZpbmRBbmRNb2RpZnk6IHRydWUsXHJcbiAgICAgIC8vIHVzZUNyZWF0ZUluZGV4OiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigobW9uZ29vc2UpID0+IHtcclxuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XHJcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/dbConnect.js\n");

/***/ }),

/***/ "(api)/./models/Supplier.js":
/*!****************************!*\
  !*** ./models/Supplier.js ***!
  \****************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst supplierSchema = new _mongoose.default.Schema({\n    name: String,\n    address: String,\n    phone: String\n}, {\n    strict: false\n});\nmodule.exports = _mongoose.default.models.Supplier || _mongoose.default.model(\"Supplier\", supplierSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvU3VwcGxpZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7MkVBQXFCLDBCQUFVO0FBRS9CLE1BQU1BLGlCQUFpQixJQUFJQyxpQkFBUSxDQUFDQyxNQUFNLENBQ3hDO0lBQ0VDLE1BQU1DO0lBQ05DLFNBQVNEO0lBQ1RFLE9BQU9GO0FBQ1QsR0FDQTtJQUFFRyxRQUFRLEtBQUs7QUFBQztBQUdsQkMsT0FBT0MsT0FBTyxHQUNaUixpQkFBUSxDQUFDUyxNQUFNLENBQUNDLFFBQVEsSUFBSVYsaUJBQVEsQ0FBQ1csS0FBSyxDQUFDLFlBQVlaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvY2stZmluYWwtNjQxMDM4MS8uL21vZGVscy9TdXBwbGllci5qcz80Yzc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IHN1cHBsaWVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBuYW1lOiBTdHJpbmcsXHJcbiAgICBhZGRyZXNzOiBTdHJpbmcsXHJcbiAgICBwaG9uZTogU3RyaW5nLFxyXG4gIH0sXHJcbiAgeyBzdHJpY3Q6IGZhbHNlIH1cclxuKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID1cclxuICBtb25nb29zZS5tb2RlbHMuU3VwcGxpZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJTdXBwbGllclwiLCBzdXBwbGllclNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJzdXBwbGllclNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwibmFtZSIsIlN0cmluZyIsImFkZHJlc3MiLCJwaG9uZSIsInN0cmljdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJTdXBwbGllciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Supplier.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/stockFinal/supplier/index.js":
/*!****************************************************!*\
  !*** ./src/pages/api/stockFinal/supplier/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../lib/dbConnect */ \"(api)/./lib/dbConnect.js\");\n/* harmony import */ var _models_Supplier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../models/Supplier */ \"(api)/./models/Supplier.js\");\n/* harmony import */ var _models_Supplier__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Supplier__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    console.log(\"req.method: \", req.method);\n    if (req.method === \"GET\") {\n        const docs = await _models_Supplier__WEBPACK_IMPORTED_MODULE_1___default().find();\n        res.status(200).json(docs);\n    } else if (req.method === \"POST\") {\n        console.log(\"POST\", req.body);\n        const doc = await _models_Supplier__WEBPACK_IMPORTED_MODULE_1___default().create(req.body);\n        res.status(201).json(doc);\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\",\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N0b2NrRmluYWwvc3VwcGxpZXIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxRDtBQUNDO0FBRXZDLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1KLDBEQUFTQTtJQUNmSyxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCSCxJQUFJSSxNQUFNO0lBRXRDLElBQUlKLElBQUlJLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE1BQU1DLE9BQU8sTUFBTVAsNERBQWE7UUFDaENHLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO0lBQ3ZCLE9BQU8sSUFBSUwsSUFBSUksTUFBTSxLQUFLLFFBQVE7UUFDaENGLFFBQVFDLEdBQUcsQ0FBQyxRQUFRSCxJQUFJUyxJQUFJO1FBQzVCLE1BQU1DLE1BQU0sTUFBTVosOERBQWUsQ0FBQ0UsSUFBSVMsSUFBSTtRQUMxQ1IsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0U7SUFDdkIsT0FBTztRQUNMVCxJQUFJVyxTQUFTLENBQUMsU0FBUztZQUFDO1lBQU87U0FBTztRQUN0Q1gsSUFBSU0sTUFBTSxDQUFDLEtBQUtNLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRWIsSUFBSUksTUFBTSxDQUFDLFlBQVksQ0FBQztJQUN4RCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0b2NrLWZpbmFsLTY0MTAzODEvLi9zcmMvcGFnZXMvYXBpL3N0b2NrRmluYWwvc3VwcGxpZXIvaW5kZXguanM/MDdkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9saWIvZGJDb25uZWN0XCI7XHJcbmltcG9ydCBzdXBwbGllciBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbW9kZWxzL1N1cHBsaWVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgYXdhaXQgZGJDb25uZWN0KCk7XHJcbiAgY29uc29sZS5sb2coXCJyZXEubWV0aG9kOiBcIiwgcmVxLm1ldGhvZCk7XHJcblxyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICBjb25zdCBkb2NzID0gYXdhaXQgc3VwcGxpZXIuZmluZCgpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oZG9jcyk7XHJcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc29sZS5sb2coXCJQT1NUXCIsIHJlcS5ib2R5KTtcclxuICAgIGNvbnN0IGRvYyA9IGF3YWl0IHN1cHBsaWVyLmNyZWF0ZShyZXEuYm9keSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbihkb2MpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc2V0SGVhZGVyKFwiQWxsb3dcIiwgW1wiR0VUXCIsIFwiUE9TVFwiXSk7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZGJDb25uZWN0Iiwic3VwcGxpZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsImRvY3MiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsImJvZHkiLCJkb2MiLCJjcmVhdGUiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/stockFinal/supplier/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/stockFinal/supplier/index.js"));
module.exports = __webpack_exports__;

})();