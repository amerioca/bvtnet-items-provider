/*!
 * bvtnet-items-provider
 * datatables.net ajax items provider for bootstrap-vue b-table

 * @version v1.0.3
 * @author Tom Noogen
 * @homepage https://github.com/niiknow/bvtnet-items-provider
 * @repository https://github.com/niiknow/bvtnet-items-provider.git
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("bvtnet-items-provider", [], factory);
	else if(typeof exports === 'object')
		exports["bvtnet-items-provider"] = factory();
	else
		root["bvtnet-items-provider"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _name = new WeakMap(),
    _axios = new WeakMap(),
    _localItems = new WeakMap();

var ItemsProvider =
/*#__PURE__*/
function () {
  /**
  * Initialize an instance of ItemsProvider
   *
   * @param Object opts  options object
  * @return             an instance of ItemsProvider
  */
  function ItemsProvider(opts) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ItemsProvider);

    return this.init(opts);
  }
  /**
  * Initialize an instance of ItemsProvider
   *
   * @param Object opts  options object
  * @return ItemsProvider       an instance of ItemsProvider
  */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ItemsProvider, [{
    key: "init",
    value: function init() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var that = this;
      var fields = opts.fields || [];
      var axios = opts.axios;
      var state = {};
      var isFieldsArray = fields.constructor === Array || Array.isArray(fields);

      _name.set(that, 'ItemsProvider');

      _axios.set(that, axios);

      that.stateId = opts.stateId;
      that.state = state;
      that.fields = fields;
      that.busy = false;
      that.storage = opts.storage || window.localStorage;
      that.pageLengths = [{
        value: 15,
        text: '15'
      }, {
        value: 100,
        text: '100'
      }, {
        value: 500,
        text: '500'
      }, {
        value: 1000,
        text: '1000'
      }, {
        value: -1,
        text: 'All'
      }];
      that.resetCounterVars();
      state.perPage = opts.perPage || 15;
      state.currentPage = opts.currentPage || 1;
      state.filter = opts.filter;
      state.filterIgnoredFields = opts.filterIgnoredFields || [];
      state.filterIncludedFields = opts.filterIncludedFields || [];
      state.searchFields = opts.searchFields || {};
      state.sortFields = opts.sortFields || {};
      state.query = opts.query || {};
      state.queryUrl = opts.queryUrl; // field is not array, must be object type

      if (!isFieldsArray) {
        that.fields = []; // these are either internal or fields listed from b-table

        var copyable = ['onFieldTranslate', 'searchable', 'isLocal', 'key', 'label', 'headerTitle', 'headerAbbr', 'class', 'formatter', 'sortable', 'sortDirection', 'sortByFormatted', 'filterByFormatted', 'tdClass', 'thClass', 'thStyle', 'variant', 'tdAttr', 'thAttr', 'isRowHeader', 'stickyColumn', 'data', 'name'];

        for (var k in fields) {
          var field = fields[k];
          var col = {};
          field.key = "".concat(field.key || field.name || field.data || k); // disable search and sort for local field

          if (field.isLocal) {
            field.searchable = false;
            field.sortable = false;
            delete field['filterByFormatted'];
          }

          for (var i = 0; i < copyable.length; i++) {
            if (field.hasOwnProperty(copyable[i])) {
              col[copyable[i]] = field[copyable[i]];
            }
          }

          that.fields.push(col);
        }
      } // retaining the this context
      // passing the b-table component as 3rd parameter


      that.items = function (ctx, cb) {
        return that.executeQuery(ctx, cb, this);
      }; // finally, load states


      if (typeof that.stateId === 'string') {
        if (typeof that.onStateLoading === 'function') {
          that.onStateLoading();
        } // begin saving state


        var savedState = that.storage.getItem(that.getStateId());

        if (typeof savedState === 'string' && savedState.indexOf('}') > 0) {
          var _state = JSON.parse(savedState);

          for (var _k in _state) {
            that.state[_k] = _state[_k];
          }

          if (typeof that.onStateLoaded === 'function') {
            that.onStateLoaded(_state);
          }
        }
      }

      return that;
    }
    /**
     * Reset counter ariables
     *
     * @return void
     */

  }, {
    key: "resetCounterVars",
    value: function resetCounterVars() {
      var that = this;
      that.totalRows = that.startRow = that.endRow = 0;
    }
    /**
     * get the component name
     *
     * @return String component name
     */

  }, {
    key: "getName",
    value: function getName() {
      return _name.get(this);
    }
    /**
     * get the axios
     *
     * @return Object the axios object
     */

  }, {
    key: "getAxios",
    value: function getAxios() {
      return _axios.get(this);
    }
    /**
     * Get the local items
     *
     * @param  Function a callback function to return local items data
     * @return Array array of local items or empty
     */

  }, {
    key: "getLocalItems",
    value: function getLocalItems() {
      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var items = _localItems.get(this);

      if (items && cb) {
        cb(items);
      }

      return items;
    }
    /**
     * Set local items
     *
     * @param Array items list of local items
     */

  }, {
    key: "setLocalItems",
    value: function setLocalItems(items) {
      var that = this;
      that.state.currentPage = 1;
      that.totalRows = items ? items.length : 0;
      that.startRow = that.totalRows > 0 ? 1 : 0;
      that.endRow = that.totalRows;
      that.state.perPage = -1;

      _localItems.set(this, items);
    }
    /**
     * safely decode the string
     *
     * @param  String str
     * @return String url decoded string
     */

  }, {
    key: "decode",
    value: function decode(str) {
      try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
      } catch (e) {
        return str;
      }
    }
    /**
     * safely encode the string
     *
     * @param  String str
     * @return String url encoded string
     */

  }, {
    key: "encode",
    value: function encode(str) {
      try {
        return encodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }
    /**
     * helper method to parse querystring to object
     *
     * @param  String qstr the querystring
     * @return Object      result
     */

  }, {
    key: "queryParseString",
    value: function queryParseString(qstr) {
      qstr = (qstr || '').replace('?', '').replace('#', '');
      var pattern = /(\w+)\[(\d+)\]/;
      var decode = this.decode,
          obj = {},
          a = qstr.split('&');

      for (var i = 0; i < a.length; i++) {
        var parts = a[i].split('='),
            key = decode(parts[0]),
            m = pattern.exec(key);

        if (m) {
          obj[m[1]] = obj[m[1]] || [];
          obj[m[1]][m[2]] = decode(parts[1]);
          continue;
        }

        obj[parts[0]] = decode(parts[1] || '');
      }

      return obj;
    }
    /**
     * reverse object to query string
     *
     * @param  Object obj the object
     * @return String     the query string
     */

  }, {
    key: "queryStringify",
    value: function queryStringify(obj, prefix) {
      var that = this;
      var encode = that.encode;
      var str = [],
          p;

      for (p in obj) {
        if (obj.hasOwnProperty(p)) {
          var k = prefix ? prefix + '[' + p + ']' : p,
              v = obj[p];
          str.push(v !== null && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(v) === 'object' ? that.queryStringify(v, k) : encode(k) + '=' + encode(v));
        }
      }

      return str.join('&');
    }
    /**
     * translate the context to datatables.net query object
     *
     * @param  Object  ctx the context object
     * @param  inQuery the additional query data
     * @return Object    the query object
     */

  }, {
    key: "translateContext",
    value: function translateContext(ctx) {
      var inQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var that = this;
      var fields = that.fields;
      var state = that.state;
      var qry = state.extraQuery || {};

      var query = _objectSpread({
        draw: 1,
        start: (ctx.currentPage - 1) * ctx.perPage,
        length: ctx.perPage,
        search: {
          value: "".concat(ctx.filter || '')
        },
        order: [],
        columns: []
      }, qry, {}, inQuery);

      if (ctx.filter instanceof RegExp) {
        query.search.regex = true;
        query.search.value = ctx.filter.source;
      } else if (typeof ctx.filter !== 'string') {
        query.search.value = '';
      }

      var index = -1;

      for (var i = 0; i < fields.length; i++) {
        var field = fields[i];

        if (typeof field === 'string') {
          field = {
            key: field
          };
        }

        var col = {
          data: field.data || field.key,
          name: field.name || field.key,
          searchable: typeof field.searchable === 'undefined' ? true : field.searchable,
          orderable: typeof field.sortable === 'undefined' ? true : field.sortable
        };

        if (state.filterIgnoredFields && state.filterIgnoredFields.indexOf(field.key) > -1) {
          col.searchable = false;
        }

        if (state.filterIncludedFields && state.filterIncludedFields.indexOf(field.key) > -1) {
          col.searchable = true;
        }

        if (typeof that.onFieldTranslate === 'function') {
          that.onFieldTranslate(field, col);
        } // skip local field or empty key


        if (field.isLocal || "".concat(field.key) === '') {
          continue;
        } else {
          query.columns.push(col);
          index++;
        } // handle server-side for non-local fields


        if (col.orderable && ctx.sortBy === field.key) {
          query.order.push({
            column: index,
            dir: ctx.sortDesc ? 'desc' : 'asc'
          });
        } // implement per field search/filtering


        if (col.searchable && state.searchFields) {
          var val = state.searchFields[field.key];

          if (val) {
            // actual object with value, then simply assign it
            if (val.value) {
              col.search = val;
            } else {
              col.search = col.search || {};
              col.search.value = {
                value: "".concat(val || ''),
                regex: false
              };

              if (val instanceof RegExp) {
                col.search.regex = true;
                col.search.value = val.source;
              }
            }
          }
        } // handle multi-columns sorting


        if (col.orderable && state.sortFields) {
          var sort = state.sortFields[field.key]; // validate valid values

          if (sort === 'asc' || sort === 'desc') {
            query.order.push({
              column: index,
              dir: sort
            });
          }
        }
      }

      if (query.columns.length <= 0) {
        delete query['columns'];
      }

      return query;
    }
    /**
     * computed state id
     *
     * @return String the computed state id
     */

  }, {
    key: "getStateId",
    value: function getStateId() {
      return "bvtnetip.".concat(this.stateId);
    }
    /**
     * perform state saving
     *
     * @return Object ItemsProvider
     */

  }, {
    key: "performSaveState",
    value: function performSaveState() {
      var that = this;

      if (typeof that.stateId !== 'string') {
        return that;
      }

      if (typeof that.onStateSaving === 'function') {
        that.onStateSaving();
      } // begin saving state


      that.storage.setItem(that.getStateId(), JSON.stringify(that.state));

      if (typeof that.onStateSaved === 'function') {
        that.onStateSaved();
      }

      return that;
    }
    /**
    * the provider function to use with bootstrap vue
    *
    * @param  Object   ctx bootstrap-vue context object
     * @param  Function cb the callback function
    * @return Array   array of items
    */

  }, {
    key: "executeQuery",
    value: function executeQuery(ctx) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var that = this;
      var locItems = that.getLocalItems(cb);
      var apiParts = (ctx.apiUrl || that.apiUrl).split('?');
      var query = {};

      if (apiParts.length > 1) {
        query = that.queryParseString(apiParts[1]);
      }

      query = that.translateContext(ctx, query);

      if (typeof that.onBeforeQuery === 'function') {
        that.onBeforeQuery(query, ctx);
      }

      that.state.queryUrl = apiParts[0];
      that.state.query = query;

      if (locItems) {
        return locItems;
      }

      that.resetCounterVars();
      that.busy = true;
      var axios = that.getAxios();
      var ajaxUrl = that.state.queryUrl;
      var promise = that.method === 'POST' ? axios.post(ajaxUrl, query) : axios.get("".concat(ajaxUrl, "?").concat(that.queryStringify(query)));
      return promise.then(function (rsp) {
        var myData = rsp.data;
        that.totalRows = myData.recordsFiltered || myData.recordsTotal;
        that.startRow = that.totalRows > 0 ? query.start + 1 : 0;
        that.endRow = query.start + query.length;

        if (that.endRow > that.totalRows) {
          that.endRow = that.totalRows;
        }

        if (typeof that.onResponseComplete === 'function') {
          that.onResponseComplete(rsp);
        }

        that.busy = false; // finally, save state on successful response

        that.performSaveState();
        return myData.data || [];
      })["catch"](function (err) {
        that.busy = false;

        if (typeof that.onResponseError === 'function') {
          that.onResponseError(err);
        }

        return [];
      });
    }
  }]);

  return ItemsProvider;
}();

/* harmony default export */ __webpack_exports__["default"] = (ItemsProvider);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tomnoogen/Desktop/work/niiknow/bvtnet-items-provider/src/index.js */"./src/index.js");


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=index.js.map