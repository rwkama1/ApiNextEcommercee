module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/category/category.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/init-middleware.js":
/*!********************************!*\
  !*** ./lib/init-middleware.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initMiddleware; });
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

/***/ }),

/***/ "./pages/api/category/category.js":
/*!****************************************!*\
  !*** ./pages/api/category/category.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cors */ "./pages/api/cors.js");
/* harmony import */ var e_commercee_ECommerce_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! e-commercee/ECommerce/dist/logic/FactoryLogic */ "e-commercee/ECommerce/dist/logic/FactoryLogic");
/* harmony import */ var e_commercee_ECommerce_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(e_commercee_ECommerce_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var e_commercee_ECommerce_dist_shared_entity_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! e-commercee/ECommerce/dist/shared/entity/Category */ "e-commercee/ECommerce/dist/shared/entity/Category");
/* harmony import */ var e_commercee_ECommerce_dist_shared_entity_Category__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(e_commercee_ECommerce_dist_shared_entity_Category__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (async function (req, res) {
  if (req.method === "GET") {
    try {
      await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
      const {
        pname
      } = req.query;
      const getcategory = await e_commercee_ECommerce_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLCategory().getCategory(pname);
      return res.send(getcategory);
    } catch (error) {
      return res.status(500).send("Could not search category " + error.message);
    }
  }

  if (req.method === "POST") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);

    try {
      const data = req.body;
      const dtcat = new e_commercee_ECommerce_dist_shared_entity_Category__WEBPACK_IMPORTED_MODULE_2__["Category"](data.name, data.description);
      await e_commercee_ECommerce_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLCategory().addCategory(dtcat);
      return res.status(200).send("Success");
    } catch (error) {
      return res.status(500).send("Could not add category: " + error.message);
    }
  }

  if (req.method === "PUT") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);

    try {
      const data = req.body;
      const dtcat = new e_commercee_ECommerce_dist_shared_entity_Category__WEBPACK_IMPORTED_MODULE_2__["Category"](data.name, data.description);
      await e_commercee_ECommerce_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLCategory().updateCategory(dtcat);
      return res.status(200).send("Success");
    } catch (error) {
      return res.status(500).send("Could not update category: " + error.message);
    }
  }

  if (req.method === "DELETE") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);

    try {
      const data = req.body;
      const dtcat = new e_commercee_ECommerce_dist_shared_entity_Category__WEBPACK_IMPORTED_MODULE_2__["Category"](data.name, data.description);
      await e_commercee_ECommerce_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLCategory().deleteCategory(dtcat);
      return res.status(200).send("Success");
    } catch (error) {
      return res.status(500).send("Could not delete category: " + error.message);
    }
  }
});

/***/ }),

/***/ "./pages/api/cors.js":
/*!***************************!*\
  !*** ./pages/api/cors.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/init-middleware */ "./lib/init-middleware.js");

 // Initialize the cors middleware

const cors = Object(_lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__["default"])( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
cors__WEBPACK_IMPORTED_MODULE_0___default()({
  // Only allow requests with GET, POST,PUT,DELETE and OPTIONS
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
/* harmony default export */ __webpack_exports__["default"] = (cors);

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "e-commercee/ECommerce/dist/logic/FactoryLogic":
/*!****************************************************************!*\
  !*** external "e-commercee/ECommerce/dist/logic/FactoryLogic" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("e-commercee/ECommerce/dist/logic/FactoryLogic");

/***/ }),

/***/ "e-commercee/ECommerce/dist/shared/entity/Category":
/*!********************************************************************!*\
  !*** external "e-commercee/ECommerce/dist/shared/entity/Category" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("e-commercee/ECommerce/dist/shared/entity/Category");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXQtbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2F0ZWdvcnkvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NvcnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImUtY29tbWVyY2VlL0VDb21tZXJjZS9kaXN0L2xvZ2ljL0ZhY3RvcnlMb2dpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImUtY29tbWVyY2VlL0VDb21tZXJjZS9kaXN0L3NoYXJlZC9lbnRpdHkvQ2F0ZWdvcnlcIiJdLCJuYW1lcyI6WyJpbml0TWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwibWV0aG9kIiwiY29ycyIsInBuYW1lIiwicXVlcnkiLCJnZXRjYXRlZ29yeSIsIkZhY3RvcnlMb2dpYyIsImdldExDYXRlZ29yeSIsImdldENhdGVnb3J5Iiwic2VuZCIsImVycm9yIiwic3RhdHVzIiwibWVzc2FnZSIsImRhdGEiLCJib2R5IiwiZHRjYXQiLCJDYXRlZ29yeSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImFkZENhdGVnb3J5IiwidXBkYXRlQ2F0ZWdvcnkiLCJkZWxldGVDYXRlZ29yeSIsIkNvcnMiLCJtZXRob2RzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FB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O0FBQ0FDLFNBQU8sRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLEtBQWhCLEVBQXNCLFFBQXRCLEVBQStCLFNBQS9CO0FBRk4sQ0FBRCxDQUZxQixDQUEzQjtBQU9lckIsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNWQSxpQzs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSw4RSIsImZpbGUiOiJwYWdlcy9hcGkvY2F0ZWdvcnkvY2F0ZWdvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9jYXRlZ29yeS9jYXRlZ29yeS5qc1wiKTtcbiIsIi8vIEhlbHBlciBtZXRob2QgdG8gd2FpdCBmb3IgYSBtaWRkbGV3YXJlIHRvIGV4ZWN1dGUgYmVmb3JlIGNvbnRpbnVpbmdcbi8vIEFuZCB0byB0aHJvdyBhbiBlcnJvciB3aGVuIGFuIGVycm9yIGhhcHBlbnMgaW4gYSBtaWRkbGV3YXJlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWlkZGxld2FyZShtaWRkbGV3YXJlKSB7XG4gIHJldHVybiAocmVxLCByZXMpID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbWlkZGxld2FyZShyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXG4gICAgICB9KVxuICAgIH0pXG59XG4iLCJpbXBvcnQgY29ycyBmcm9tIFwiLi4vY29yc1wiO1xyXG5pbXBvcnQgeyBGYWN0b3J5TG9naWMgfSBmcm9tIFwiZS1jb21tZXJjZWUvRUNvbW1lcmNlL2Rpc3QvbG9naWMvRmFjdG9yeUxvZ2ljXCI7XHJcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSBcImUtY29tbWVyY2VlL0VDb21tZXJjZS9kaXN0L3NoYXJlZC9lbnRpdHkvQ2F0ZWdvcnlcIjtcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgICBpZihyZXEubWV0aG9kPT09XCJHRVRcIilcclxuICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgYXdhaXQgY29ycyhyZXEsIHJlcylcclxuICAgICAgICAgY29uc3Qge3BuYW1lfSA9IHJlcS5xdWVyeTtcclxuICAgICAgICAgIGNvbnN0IGdldGNhdGVnb3J5PWF3YWl0IEZhY3RvcnlMb2dpYy5nZXRMQ2F0ZWdvcnkoKS5nZXRDYXRlZ29yeShwbmFtZSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnNlbmQoZ2V0Y2F0ZWdvcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChcIkNvdWxkIG5vdCBzZWFyY2ggY2F0ZWdvcnkgXCIrZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuICAgICBcclxuICAgICAgaWYocmVxLm1ldGhvZD09PVwiUE9TVFwiKVxyXG4gICAgICB7XHJcbiAgICAgICAgYXdhaXQgY29ycyhyZXEsIHJlcylcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnN0IGR0Y2F0PW5ldyBDYXRlZ29yeShkYXRhLm5hbWUsZGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgYXdhaXQgRmFjdG9yeUxvZ2ljLmdldExDYXRlZ29yeSgpLmFkZENhdGVnb3J5KGR0Y2F0KTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoXCJTdWNjZXNzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChcIkNvdWxkIG5vdCBhZGQgY2F0ZWdvcnk6IFwiK2Vycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZihyZXEubWV0aG9kPT09XCJQVVRcIilcclxuICAgICAge1xyXG4gICAgICAgIGF3YWl0IGNvcnMocmVxLCByZXMpXHJcbiAgICAgICAgdHJ5XHJcbiAgICAgICAge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICAgICAgICBjb25zdCBkdGNhdD1uZXcgQ2F0ZWdvcnkoZGF0YS5uYW1lLGRhdGEuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGF3YWl0IEZhY3RvcnlMb2dpYy5nZXRMQ2F0ZWdvcnkoKS51cGRhdGVDYXRlZ29yeShkdGNhdCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFwiU3VjY2Vzc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJDb3VsZCBub3QgdXBkYXRlIGNhdGVnb3J5OiBcIitlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYocmVxLm1ldGhvZD09PVwiREVMRVRFXCIpXHJcbiAgICAgIHtcclxuICAgICAgICBhd2FpdCBjb3JzKHJlcSwgcmVzKVxyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgICAgICAgY29uc3QgZHRjYXQ9bmV3IENhdGVnb3J5KGRhdGEubmFtZSxkYXRhLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICBhd2FpdCBGYWN0b3J5TG9naWMuZ2V0TENhdGVnb3J5KCkuZGVsZXRlQ2F0ZWdvcnkoZHRjYXQpO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChcIlN1Y2Nlc3NcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiQ291bGQgbm90IGRlbGV0ZSBjYXRlZ29yeTogXCIrZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbn0iLCJpbXBvcnQgQ29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0IGluaXRNaWRkbGV3YXJlIGZyb20gJy4uLy4uL2xpYi9pbml0LW1pZGRsZXdhcmUnXG4vLyBJbml0aWFsaXplIHRoZSBjb3JzIG1pZGRsZXdhcmVcbmNvbnN0IGNvcnMgPSBpbml0TWlkZGxld2FyZShcbiAgLy8gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhlIGF2YWlsYWJsZSBvcHRpb25zIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9leHByZXNzanMvY29ycyNjb25maWd1cmF0aW9uLW9wdGlvbnNcbiAgQ29ycyh7XG4gICAgLy8gT25seSBhbGxvdyByZXF1ZXN0cyB3aXRoIEdFVCwgUE9TVCxQVVQsREVMRVRFIGFuZCBPUFRJT05TXG4gICAgbWV0aG9kczogWydHRVQnLCAnUE9TVCcsICdQVVQnLCdERUxFVEUnLCdPUFRJT05TJ10sXG4gIH0pXG4pXG5leHBvcnQgZGVmYXVsdCBjb3JzXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZS1jb21tZXJjZWUvRUNvbW1lcmNlL2Rpc3QvbG9naWMvRmFjdG9yeUxvZ2ljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImUtY29tbWVyY2VlL0VDb21tZXJjZS9kaXN0L3NoYXJlZC9lbnRpdHkvQ2F0ZWdvcnlcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==