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
exports.id = "pages/blog/[id]";
exports.ids = ["pages/blog/[id]"];
exports.modules = {

/***/ "./src/libs/client.ts":
/*!****************************!*\
  !*** ./src/libs/client.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! microcms-js-sdk */ \"microcms-js-sdk\");\n/* harmony import */ var microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = (0,microcms_js_sdk__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n    serviceDomain: process.env.SERVICE_DOMAIN || \"\",\n    apiKey: process.env.API_KEY || \"\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRXZDLE1BQU1DLFNBQVNELDZEQUFZQSxDQUFDO0lBQ2pDRSxlQUFlQyxRQUFRQyxHQUFHLENBQUNDLGNBQWMsSUFBSTtJQUM3Q0MsUUFBUUgsUUFBUUMsR0FBRyxDQUFDRyxPQUFPLElBQUk7QUFDakMsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpbzIvLi9zcmMvbGlicy9jbGllbnQudHM/MWJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdtaWNyb2Ntcy1qcy1zZGsnXG5cbmV4cG9ydCBjb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBzZXJ2aWNlRG9tYWluOiBwcm9jZXNzLmVudi5TRVJWSUNFX0RPTUFJTiB8fCBcIlwiLFxuICBhcGlLZXk6IHByb2Nlc3MuZW52LkFQSV9LRVkgfHwgXCJcIixcbn0pIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImNsaWVudCIsInNlcnZpY2VEb21haW4iLCJwcm9jZXNzIiwiZW52IiwiU0VSVklDRV9ET01BSU4iLCJhcGlLZXkiLCJBUElfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/client.ts\n");

/***/ }),

/***/ "./src/pages/blog/[id].tsx":
/*!*********************************!*\
  !*** ./src/pages/blog/[id].tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BlogId),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/client */ \"./src/libs/client.ts\");\n\n\n// SSG\nconst getStaticProps = async ({ params  })=>{\n    if (!params || !params.id) {\n        return {\n            notFound: true\n        };\n    }\n    const { id  } = params;\n    const data = await _libs_client__WEBPACK_IMPORTED_MODULE_1__.client.get({\n        endpoint: \"blog\",\n        contentId: Array.isArray(id) ? id[0] : id\n    });\n    return {\n        props: {\n            blog: data\n        },\n        revalidate: 1\n    };\n};\nconst getStaticPaths = async ()=>{\n    const data = await _libs_client__WEBPACK_IMPORTED_MODULE_1__.client.get({\n        endpoint: \"blog\"\n    });\n    const paths = data.contents.map((content)=>`/blog/${content.id}`);\n    return {\n        paths,\n        fallback: false\n    };\n};\nfunction BlogId({ blog  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: blog.title\n            }, void 0, false, {\n                fileName: \"/Users/ochiaikyousuke/Documents/development/React/Portfolio/src/pages/blog/[id].tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: blog.publishedAt\n            }, void 0, false, {\n                fileName: \"/Users/ochiaikyousuke/Documents/development/React/Portfolio/src/pages/blog/[id].tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: blog.body\n                }\n            }, void 0, false, {\n                fileName: \"/Users/ochiaikyousuke/Documents/development/React/Portfolio/src/pages/blog/[id].tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ochiaikyousuke/Documents/development/React/Portfolio/src/pages/blog/[id].tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBDO0FBSTFDLE1BQU07QUFDQyxNQUFNQyxpQkFBd0QsT0FBTyxFQUFFQyxPQUFNLEVBQUUsR0FBSztJQUN6RixJQUFJLENBQUNBLFVBQVUsQ0FBQ0EsT0FBT0MsRUFBRSxFQUFFO1FBQ3pCLE9BQU87WUFBRUMsVUFBVSxJQUFJO1FBQUM7SUFDMUIsQ0FBQztJQUVELE1BQU0sRUFBRUQsR0FBRSxFQUFFLEdBQUdEO0lBQ2YsTUFBTUcsT0FBTyxNQUFNTCxvREFBVSxDQUFDO1FBQUVPLFVBQVU7UUFBUUMsV0FBV0MsTUFBTUMsT0FBTyxDQUFDUCxNQUFNQSxFQUFFLENBQUMsRUFBRSxHQUFHQSxFQUFFO0lBQUM7SUFFNUYsT0FBTztRQUNMUSxPQUFPO1lBQ0xDLE1BQU1QO1FBQ1I7UUFDQVEsWUFBWTtJQUNkO0FBQ0YsRUFBQztBQUVNLE1BQU1DLGlCQUFpQixVQUFXO0lBQ3ZDLE1BQU1ULE9BQU8sTUFBTUwsb0RBQVUsQ0FBQztRQUFFTyxVQUFVO0lBQU87SUFFakQsTUFBTVEsUUFBUVYsS0FBS1csUUFBUSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsVUFBZ0IsQ0FBQyxNQUFNLEVBQUVBLFFBQVFmLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLE9BQU87UUFDTFk7UUFDQUksVUFBVSxLQUFLO0lBQ2pCO0FBQ0YsRUFBQztBQUVjLFNBQVNDLE9BQU8sRUFBRVIsS0FBSSxFQUFRLEVBQUU7SUFDN0MscUJBQ0UsOERBQUNTOzswQkFDQyw4REFBQ0M7MEJBQUlWLEtBQUtXLEtBQUs7Ozs7OzswQkFDZiw4REFBQ0M7MEJBQUdaLEtBQUthLFdBQVc7Ozs7OzswQkFDcEIsOERBQUNDO2dCQUFJQyx5QkFBeUI7b0JBQUVDLFFBQVFoQixLQUFLaUIsSUFBSTtnQkFBQzs7Ozs7Ozs7Ozs7O0FBR3hELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8yLy4vc3JjL3BhZ2VzL2Jsb2cvW2lkXS50c3g/MWVhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vLi4vbGlicy9jbGllbnRcIlxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IHR5cGUgeyBCbG9nLCBQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzL2Jsb2cnXG5cbi8vIFNTR1xuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wczxQcm9wcywgeyBpZDogc3RyaW5nIH0+ID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy5pZCkge1xuICAgIHJldHVybiB7IG5vdEZvdW5kOiB0cnVlIH1cbiAgfVxuXG4gIGNvbnN0IHsgaWQgfSA9IHBhcmFtc1xuICBjb25zdCBkYXRhID0gYXdhaXQgY2xpZW50LmdldCh7IGVuZHBvaW50OiAnYmxvZycsIGNvbnRlbnRJZDogQXJyYXkuaXNBcnJheShpZCkgPyBpZFswXSA6IGlkIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYmxvZzogZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjbGllbnQuZ2V0KHsgZW5kcG9pbnQ6ICdibG9nJyB9KVxuXG4gIGNvbnN0IHBhdGhzID0gZGF0YS5jb250ZW50cy5tYXAoKGNvbnRlbnQ6QmxvZyk9PiBgL2Jsb2cvJHtjb250ZW50LmlkfWApXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ0lkKHsgYmxvZyB9OlByb3BzKSB7XG4gIHJldHVybihcbiAgICA8bWFpbj5cbiAgICAgIDxoMT57YmxvZy50aXRsZX08L2gxPlxuICAgICAgPHA+e2Jsb2cucHVibGlzaGVkQXR9PC9wPlxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGJsb2cuYm9keSB9fT48L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn0iXSwibmFtZXMiOlsiY2xpZW50IiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJpZCIsIm5vdEZvdW5kIiwiZGF0YSIsImdldCIsImVuZHBvaW50IiwiY29udGVudElkIiwiQXJyYXkiLCJpc0FycmF5IiwicHJvcHMiLCJibG9nIiwicmV2YWxpZGF0ZSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJjb250ZW50cyIsIm1hcCIsImNvbnRlbnQiLCJmYWxsYmFjayIsIkJsb2dJZCIsIm1haW4iLCJoMSIsInRpdGxlIiwicCIsInB1Ymxpc2hlZEF0IiwiZGl2IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/blog/[id].tsx\n");

/***/ }),

/***/ "microcms-js-sdk":
/*!**********************************!*\
  !*** external "microcms-js-sdk" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("microcms-js-sdk");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!***********************************************************!*\
  !*** external "next/dist/compiled/react/jsx-dev-runtime" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/blog/[id].tsx"));
module.exports = __webpack_exports__;

})();