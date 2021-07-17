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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/article/article.js");
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

/***/ "./pages/api/article/article.js":
/*!**************************************!*\
  !*** ./pages/api/article/article.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cors */ "./pages/api/cors.js");
/* harmony import */ var e_commercee_ECommerce_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! e-commercee/ECommerce/dist/logic/FactoryLogic */ "e-commercee/ECommerce/dist/logic/FactoryLogic");
/* harmony import */ var e_commercee_ECommerce_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(e_commercee_ECommerce_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var e_commercee_ECommerce_dist_shared_entity_Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! e-commercee/ECommerce/dist/shared/entity/Article */ "e-commercee/ECommerce/dist/shared/entity/Article");
/* harmony import */ var e_commercee_ECommerce_dist_shared_entity_Article__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(e_commercee_ECommerce_dist_shared_entity_Article__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (async function (req, res) {
  if (req.method === "GET") {
    try {
      await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
      const {
        pbarcode
      } = req.query;
      const getArticle = await e_commercee_ECommerce_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLArticle().getArticle(pbarcode);
      return res.send(getArticle);
    } catch (error) {
      return res.status(500).send("Could not search article " + error.message);
    }
  }

  if (req.method === "POST") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);

    try {
      const data = req.body;
      const getcategory = await e_commercee_ECommerce_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLCategory().getCategory(data.categoryname);
      var article = new e_commercee_ECommerce_dist_shared_entity_Article__WEBPACK_IMPORTED_MODULE_2__["Article"](data.barcode, data.name, data.price, data.stock, data.description, data.img, getcategory);
      await e_commercee_ECommerce_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLArticle().addArticle(article);
      return res.status(200).send("Success");
    } catch (error) {
      return res.status(500).send("Could not add article: " + error.message);
    }
  }

  if (req.method === "PUT") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);

    try {
      const data = req.body;
      const getcategory = await e_commercee_ECommerce_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLCategory().getCategory(data.categoryname);
      var article = new e_commercee_ECommerce_dist_shared_entity_Article__WEBPACK_IMPORTED_MODULE_2__["Article"](data.barcode, data.name, data.price, data.stock, data.description, data.img, getcategory);
      await e_commercee_ECommerce_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLArticle().updateArticle(article);
      return res.status(200).send("Success");
    } catch (error) {
      return res.status(500).send("Could not update article: " + error.message);
    }
  }

  if (req.method === "DELETE") {
    await Object(_cors__WEBPACK_IMPORTED_MODULE_0__["default"])(req, res);
    const data = req.body;

    try {
      var article = new e_commercee_ECommerce_dist_shared_entity_Article__WEBPACK_IMPORTED_MODULE_2__["Article"](data.barcode, "", 0, 0, "", "", null);
      await e_commercee_ECommerce_dist_logic_FactoryLogic__WEBPACK_IMPORTED_MODULE_1__["FactoryLogic"].getLArticle().deleteArticle(article);
      return res.status(200).send("Success");
    } catch (error) {
      return res.status(500).send("Could not DELETE article: " + error.message);
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

/***/ "e-commercee/ECommerce/dist/shared/entity/Article":
/*!*******************************************************************!*\
  !*** external "e-commercee/ECommerce/dist/shared/entity/Article" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("e-commercee/ECommerce/dist/shared/entity/Article");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2luaXQtbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXJ0aWNsZS9hcnRpY2xlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9jb3JzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlLWNvbW1lcmNlZS9FQ29tbWVyY2UvZGlzdC9sb2dpYy9GYWN0b3J5TG9naWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlLWNvbW1lcmNlZS9FQ29tbWVyY2UvZGlzdC9zaGFyZWQvZW50aXR5L0FydGljbGVcIiJdLCJuYW1lcyI6WyJpbml0TWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwibWV0aG9kIiwiY29ycyIsInBiYXJjb2RlIiwicXVlcnkiLCJnZXRBcnRpY2xlIiwiRmFjdG9yeUxvZ2ljIiwiZ2V0TEFydGljbGUiLCJzZW5kIiwiZXJyb3IiLCJzdGF0dXMiLCJtZXNzYWdlIiwiZGF0YSIsImJvZHkiLCJnZXRjYXRlZ29yeSIsImdldExDYXRlZ29yeSIsImdldENhdGVnb3J5IiwiY2F0ZWdvcnluYW1lIiwiYXJ0aWNsZSIsIkFydGljbGUiLCJiYXJjb2RlIiwibmFtZSIsInByaWNlIiwic3RvY2siLCJkZXNjcmlwdGlvbiIsImltZyIsImFkZEFydGljbGUiLCJ1cGRhdGVBcnRpY2xlIiwiZGVsZXRlQXJ0aWNsZSIsIkNvcnMiLCJtZXRob2RzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FB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akI7O0FBQ0EsUUFDQTtBQUNBLFVBQUlLLE9BQU8sR0FBQyxJQUFJQyx3RkFBSixDQUFZUCxJQUFJLENBQUNRLE9BQWpCLEVBQXlCLEVBQXpCLEVBQTRCLENBQTVCLEVBQThCLENBQTlCLEVBQWdDLEVBQWhDLEVBQW1DLEVBQW5DLEVBQXNDLElBQXRDLENBQVo7QUFDQSxZQUFNZCwwRkFBWSxDQUFDQyxXQUFiLEdBQTJCcUIsYUFBM0IsQ0FBeUNWLE9BQXpDLENBQU47QUFDQSxhQUFPdkIsR0FBRyxDQUFDZSxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUIsU0FBckIsQ0FBUDtBQUNILEtBTEcsQ0FNSixPQUFPQyxLQUFQLEVBQWM7QUFDZCxhQUFPZCxHQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQiwrQkFBNkJDLEtBQUssQ0FBQ0UsT0FBeEQsQ0FBUDtBQUVDO0FBQ0o7QUFDUixDOzs7Ozs7Ozs7Ozs7QUNsRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNBLE1BQU1ULElBQUksR0FBR1Ysb0VBQWMsRUFDekI7QUFDQXFDLDJDQUFJLENBQUM7QUFDSDtBQUNBQyxTQUFPLEVBQUUsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixLQUFoQixFQUFzQixRQUF0QixFQUErQixTQUEvQjtBQUZOLENBQUQsQ0FGcUIsQ0FBM0I7QUFPZTVCLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDVkEsaUM7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsNkUiLCJmaWxlIjoicGFnZXMvYXBpL2FydGljbGUvYXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2FydGljbGUvYXJ0aWNsZS5qc1wiKTtcbiIsIi8vIEhlbHBlciBtZXRob2QgdG8gd2FpdCBmb3IgYSBtaWRkbGV3YXJlIHRvIGV4ZWN1dGUgYmVmb3JlIGNvbnRpbnVpbmdcbi8vIEFuZCB0byB0aHJvdyBhbiBlcnJvciB3aGVuIGFuIGVycm9yIGhhcHBlbnMgaW4gYSBtaWRkbGV3YXJlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWlkZGxld2FyZShtaWRkbGV3YXJlKSB7XG4gIHJldHVybiAocmVxLCByZXMpID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbWlkZGxld2FyZShyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXG4gICAgICB9KVxuICAgIH0pXG59XG4iLCIgaW1wb3J0IGNvcnMgZnJvbSBcIi4uL2NvcnNcIjtcclxuIGltcG9ydCB7IEZhY3RvcnlMb2dpYyB9IGZyb20gXCJlLWNvbW1lcmNlZS9FQ29tbWVyY2UvZGlzdC9sb2dpYy9GYWN0b3J5TG9naWNcIjtcclxuIGltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiZS1jb21tZXJjZWUvRUNvbW1lcmNlL2Rpc3Qvc2hhcmVkL2VudGl0eS9BcnRpY2xlXCI7XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgICBpZihyZXEubWV0aG9kPT09XCJHRVRcIilcclxuICAgIHtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgYXdhaXQgY29ycyhyZXEsIHJlcylcclxuICAgICBjb25zdCB7cGJhcmNvZGV9ID0gcmVxLnF1ZXJ5O1xyXG4gICAgIFxyXG4gICAgICBjb25zdCBnZXRBcnRpY2xlPWF3YWl0IEZhY3RvcnlMb2dpYy5nZXRMQXJ0aWNsZSgpLmdldEFydGljbGUocGJhcmNvZGUpO1xyXG4gICAgICByZXR1cm4gcmVzLnNlbmQoZ2V0QXJ0aWNsZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiQ291bGQgbm90IHNlYXJjaCBhcnRpY2xlIFwiK2Vycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgaWYocmVxLm1ldGhvZD09PVwiUE9TVFwiKVxyXG4gICAge1xyXG4gICAgICBhd2FpdCBjb3JzKHJlcSwgcmVzKVxyXG4gICAgICB0cnlcclxuICAgICAge1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgICAgIGNvbnN0IGdldGNhdGVnb3J5PWF3YWl0IEZhY3RvcnlMb2dpYy5nZXRMQ2F0ZWdvcnkoKS5nZXRDYXRlZ29yeShkYXRhLmNhdGVnb3J5bmFtZSk7XHJcbiAgICAgIHZhciBhcnRpY2xlPW5ldyBBcnRpY2xlKGRhdGEuYmFyY29kZSxkYXRhLm5hbWUsZGF0YS5wcmljZSxkYXRhLnN0b2NrLGRhdGEuZGVzY3JpcHRpb24sZGF0YS5pbWcsZ2V0Y2F0ZWdvcnkpO1xyXG4gICAgICBhd2FpdCBGYWN0b3J5TG9naWMuZ2V0TEFydGljbGUoKS5hZGRBcnRpY2xlKGFydGljbGUpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoXCJTdWNjZXNzXCIpOyAgIFxyXG4gICAgICB9XHJcbiAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChcIkNvdWxkIG5vdCBhZGQgYXJ0aWNsZTogXCIrZXJyb3IubWVzc2FnZSk7ICAgIFxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgaWYocmVxLm1ldGhvZD09PVwiUFVUXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhd2FpdCBjb3JzKHJlcSwgcmVzKVxyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldGNhdGVnb3J5PWF3YWl0IEZhY3RvcnlMb2dpYy5nZXRMQ2F0ZWdvcnkoKS5nZXRDYXRlZ29yeShkYXRhLmNhdGVnb3J5bmFtZSk7XHJcbiAgICAgICAgICAgIHZhciBhcnRpY2xlPW5ldyBBcnRpY2xlKGRhdGEuYmFyY29kZSxkYXRhLm5hbWUsZGF0YS5wcmljZSxkYXRhLnN0b2NrLGRhdGEuZGVzY3JpcHRpb24sZGF0YS5pbWcsZ2V0Y2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICBhd2FpdCBGYWN0b3J5TG9naWMuZ2V0TEFydGljbGUoKS51cGRhdGVBcnRpY2xlKGFydGljbGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoXCJTdWNjZXNzXCIpOyAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChcIkNvdWxkIG5vdCB1cGRhdGUgYXJ0aWNsZTogXCIrZXJyb3IubWVzc2FnZSk7ICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgaWYocmVxLm1ldGhvZD09PVwiREVMRVRFXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgY29ycyhyZXEsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBhcnRpY2xlPW5ldyBBcnRpY2xlKGRhdGEuYmFyY29kZSxcIlwiLDAsMCxcIlwiLFwiXCIsbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBGYWN0b3J5TG9naWMuZ2V0TEFydGljbGUoKS5kZWxldGVBcnRpY2xlKGFydGljbGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFwiU3VjY2Vzc1wiKTsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiQ291bGQgbm90IERFTEVURSBhcnRpY2xlOiBcIitlcnJvci5tZXNzYWdlKTsgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgQ29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0IGluaXRNaWRkbGV3YXJlIGZyb20gJy4uLy4uL2xpYi9pbml0LW1pZGRsZXdhcmUnXG4vLyBJbml0aWFsaXplIHRoZSBjb3JzIG1pZGRsZXdhcmVcbmNvbnN0IGNvcnMgPSBpbml0TWlkZGxld2FyZShcbiAgLy8gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhlIGF2YWlsYWJsZSBvcHRpb25zIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9leHByZXNzanMvY29ycyNjb25maWd1cmF0aW9uLW9wdGlvbnNcbiAgQ29ycyh7XG4gICAgLy8gT25seSBhbGxvdyByZXF1ZXN0cyB3aXRoIEdFVCwgUE9TVCxQVVQsREVMRVRFIGFuZCBPUFRJT05TXG4gICAgbWV0aG9kczogWydHRVQnLCAnUE9TVCcsICdQVVQnLCdERUxFVEUnLCdPUFRJT05TJ10sXG4gIH0pXG4pXG5leHBvcnQgZGVmYXVsdCBjb3JzXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZS1jb21tZXJjZWUvRUNvbW1lcmNlL2Rpc3QvbG9naWMvRmFjdG9yeUxvZ2ljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImUtY29tbWVyY2VlL0VDb21tZXJjZS9kaXN0L3NoYXJlZC9lbnRpdHkvQXJ0aWNsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9