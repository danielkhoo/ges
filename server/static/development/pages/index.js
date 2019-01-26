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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/DegreeAnalyzer.module.css":
/*!*****************************************!*\
  !*** ./pages/DegreeAnalyzer.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"ResultsTable": "_35qDQqMehZbGZKpPmlUD06"
};

/***/ }),

/***/ "./pages/DegreeAnalyzer.tsx":
/*!**********************************!*\
  !*** ./pages/DegreeAnalyzer.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Banner_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Banner/Banner */ "./src/components/Banner/Banner.tsx");
/* harmony import */ var _src_components_Chart_Chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Chart/Chart */ "./src/components/Chart/Chart.tsx");
/* harmony import */ var _src_components_Instructions_Instructions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Instructions/Instructions */ "./src/components/Instructions/Instructions.tsx");
/* harmony import */ var _src_components_Analyzer_ListHeaders_ListHeaders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Analyzer/ListHeaders/ListHeaders */ "./src/components/Analyzer/ListHeaders/ListHeaders.tsx");
/* harmony import */ var _src_components_Analyzer_ListItems_ListItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Analyzer/ListItems/ListItems */ "./src/components/Analyzer/ListItems/ListItems.tsx");
/* harmony import */ var _src_components_Analyzer_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Analyzer/SearchBar/SearchBar */ "./src/components/Analyzer/SearchBar/SearchBar.tsx");
/* harmony import */ var _src_components_Analyzer_SearchFilters_SearchFilters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Analyzer/SearchFilters/SearchFilters */ "./src/components/Analyzer/SearchFilters/SearchFilters.tsx");
/* harmony import */ var _src_assets_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/assets/data */ "./src/assets/data.js");
/* harmony import */ var _src_assets_sample__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/assets/sample */ "./src/assets/sample.js");
/* harmony import */ var _DegreeAnalyzer_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DegreeAnalyzer.module.css */ "./pages/DegreeAnalyzer.module.css");
/* harmony import */ var _DegreeAnalyzer_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_DegreeAnalyzer_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_hoc_Layout_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/hoc/Layout/Layout */ "./src/hoc/Layout/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/daniel/Desktop/ges/pages/DegreeAnalyzer.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var fullDataset = _src_assets_data__WEBPACK_IMPORTED_MODULE_8__["default"];

var DegreeAnalyzer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DegreeAnalyzer, _React$Component);

  function DegreeAnalyzer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DegreeAnalyzer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DegreeAnalyzer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      input: "",
      filters: ["NTU", "SMU"],
      filteredItems: _src_assets_sample__WEBPACK_IMPORTED_MODULE_9__["default"]
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterData", function (data, filters, input) {
      var filteredItems = []; //filter by school

      filters.forEach(function (key) {
        filteredItems = filteredItems.concat(data[key]);
      }); //filter by keyword

      return filteredItems.filter(function (item) {
        return item.degree.toLowerCase().indexOf(input) > -1;
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addFilterHandler", function (name) {
      var currentFilters = _this.state.filters;

      if (currentFilters.indexOf(name) === -1) {
        currentFilters.push(name);
        var _input = _this.state.input;

        var _filteredItems = _this.filterData(fullDataset, currentFilters, _input);

        _this.setState({
          filters: currentFilters,
          filteredItems: _filteredItems
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeFilterHandler", function (name) {
      var currentFilters = _this.state.filters;

      if (currentFilters.indexOf(name) !== -1) {
        currentFilters.splice(currentFilters.indexOf(name), 1);
        var _input2 = _this.state.input;

        var _filteredItems2 = _this.filterData(fullDataset, currentFilters, _input2);

        _this.setState({
          filters: currentFilters,
          filteredItems: _filteredItems2
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "textChangedHandler", function (event) {
      var input = event.target.value.toLowerCase();
      var currentFilters = _this.state.filters;

      var filteredItems = _this.filterData(fullDataset, currentFilters, input);

      _this.setState({
        input: input,
        filteredItems: filteredItems
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "keyPressHandler", function (event) {
      if (event.key === "Enter") {
        event.target.blur();
      }
    });

    return _this;
  }

  _createClass(DegreeAnalyzer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_hoc_Layout_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,600",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "GES 2018")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Banner_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Chart_Chart__WEBPACK_IMPORTED_MODULE_2__["default"], {
        chartData: this.state.filteredItems,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Instructions_Instructions__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Select the one or more schools to view."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Analyzer_SearchFilters_SearchFilters__WEBPACK_IMPORTED_MODULE_7__["default"], {
        addFilter: this.addFilterHandler,
        removeFilter: this.removeFilterHandler,
        filters: this.state.filters,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Instructions_Instructions__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Use the search box to narrow down the results."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Analyzer_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        changed: function changed(event) {
          return _this2.textChangedHandler(event);
        },
        keypress: function keypress(event) {
          return _this2.keyPressHandler(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _DegreeAnalyzer_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.ResultsTable,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Analyzer_ListHeaders_ListHeaders__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Analyzer_ListItems_ListItems__WEBPACK_IMPORTED_MODULE_5__["default"], {
        items: this.state.filteredItems,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })));
    }
  }]);

  return DegreeAnalyzer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DegreeAnalyzer);

/***/ }),

/***/ "./pages/index.ts":
/*!************************!*\
  !*** ./pages/index.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DegreeAnalyzer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DegreeAnalyzer */ "./pages/DegreeAnalyzer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DegreeAnalyzer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/assets/colorCode.js":
/*!*********************************!*\
  !*** ./src/assets/colorCode.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var colorCode = ['#FFA600', '#FF3366', '#17CF17', '#00E3F6', '#0F4D65'];
/* harmony default export */ __webpack_exports__["default"] = (colorCode);

/***/ }),

/***/ "./src/assets/data.js":
/*!****************************!*\
  !*** ./src/assets/data.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var data = {
  NUS: [{
    degree: 'Bachelor of Arts',
    employment: 61.9,
    mean: 3005,
    median: 3000,
    group: 'NUS - Faculty of Arts & Social Sciences',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Arts (Hons)',
    employment: 66.7,
    mean: 3309,
    median: 3300,
    group: 'NUS - Faculty of Arts & Social Sciences',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Social Science',
    employment: 74.7,
    mean: 3365,
    median: 3300,
    group: 'NUS - Faculty of Arts & Social Sciences',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Dental Surgery',
    employment: 100.0,
    mean: 4124,
    median: 4050,
    group: 'NUS - Faculty Of Dentistry',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Engineering (Biomedical Engineering)',
    employment: 81.3,
    mean: 3215,
    median: 3200,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Engineering (Chemical Engineering)',
    employment: 81.3,
    mean: 3550,
    median: 3500,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Engineering (Civil Engineering)',
    employment: 90.9,
    mean: 3361,
    median: 3300,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Engineering (Electrical Engineering)',
    employment: 86.5,
    mean: 3529,
    median: 3500,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Engineering (Engineering Science)',
    employment: 64.7,
    mean: 3783,
    median: 3600,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Engineering (Environmental Engineering)',
    employment: 71.2,
    mean: 3425,
    median: 3100,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Engineering (Industrial and Systems Engineering)',
    employment: 89.9,
    mean: 3905,
    median: 3725,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Engineering (Materials Science And Engineering)',
    employment: 86.0,
    mean: 3269,
    median: 3200,
    group: 'NUS - Faculty Of Engineering',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Laws',
    employment: 92.3,
    mean: 4958,
    median: 5000,
    group: 'NUS - Faculty of Law',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Applied Science (Hons)',
    employment: 50.0,
    mean: 3186,
    median: 3075,
    group: 'NUS - Faculty of Science',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Science',
    employment: 54.5,
    mean: 3053,
    median: 3000,
    group: 'NUS - Faculty of Science',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Science (Hons)',
    employment: 69.3,
    mean: 3340,
    median: 3200,
    group: 'NUS - Faculty of Science',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Science (Pharmacy)',
    employment: 94.5,
    mean: 3473,
    median: 3500,
    group: 'NUS - Faculty of Science',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Business Administration',
    employment: 87.3,
    mean: 3770,
    median: 3400,
    group: 'NUS Business School',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Business Administration (Hons)',
    employment: 93.6,
    mean: 4272,
    median: 3725,
    group: 'NUS Business School',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Business Administration (Accountancy)',
    employment: 94.4,
    mean: 3396,
    median: 3000,
    group: 'NUS Business School',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Business Administration (Accountancy) (Hons)',
    employment: 100.0,
    mean: 3689,
    median: 3100,
    group: 'NUS Business School',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Computing (Computer Science)',
    employment: 89.4,
    mean: 4510,
    median: 4200,
    group: 'NUS - School of Computing',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Computing (Information Systems)',
    employment: 91.8,
    mean: 4061,
    median: 4000,
    group: 'NUS - School of Computing',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Science (Business Analytics)',
    employment: 97.6,
    mean: 4114,
    median: 3810,
    group: 'NUS - School of Computing',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Arts (Architecture)',
    employment: 86.4,
    mean: 4037,
    median: 4000,
    group: 'NUS - School of Design and Environment',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Arts (Industrial Design)',
    employment: 60.0,
    mean: 3034,
    median: 2890,
    group: 'NUS - School of Design and Environment',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Science (Project and Facilities Management)',
    employment: 81.7,
    mean: 3105,
    median: 3000,
    group: 'NUS - School of Design and Environment',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Science (Real Estate)',
    employment: 88.7,
    mean: 3090,
    median: 3000,
    group: 'NUS - School of Design and Environment',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Medicine And Bachelor Of Surgery',
    employment: 100.0,
    mean: 4367,
    median: 4500,
    group: 'NUS - Yong Loo Lin School (Medicine)',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Science (Nursing)',
    employment: 97.4,
    mean: 3165,
    median: 3200,
    group: 'NUS - Yong Loo Lin School (Medicine)',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Science (Nursing) (Hons)',
    employment: 89.8,
    mean: 3280,
    median: 3300,
    group: 'NUS - Yong Loo Lin School (Medicine)',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Music',
    employment: 26.7,
    mean: 2298,
    median: 2025,
    group: 'NUS - YST Conservatory Of Music',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Arts with Honours (Yale-NUS)',
    employment: 76.6,
    mean: 3812,
    median: 3500,
    group: 'Yale-NUS College',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Science with Honours (Yale-NUS)',
    employment: 75.0,
    mean: 4362,
    median: 4083,
    group: 'Yale-NUS College',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Engineering (Computer Engineering)',
    employment: 84.7,
    mean: 4010,
    median: 3600,
    group: 'NUS - Multi-Disciplinary Programme',
    school: 'NUS'
  }, {
    degree: 'Bachelor of Science with Honours',
    employment: 62.3,
    mean: 3297,
    median: 3200,
    group: 'NUS - Multi-Disciplinary Programme',
    school: 'NUS'
  }],
  NTU: [{
    degree: 'Bachelor of Accountancy (Hons)',
    employment: 94.5,
    mean: 3121,
    median: 3000,
    group: 'NTU - College of Business (Nanyang Business School)',
    school: 'NTU'
  }, {
    degree: 'Double Degree in Bachelor of Accountancy (Hons) and Bachelor of Business (Hons)',
    employment: 94.3,
    mean: 3830,
    median: 3500,
    group: 'NTU - College of Business (Nanyang Business School)',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Business (Hons)',
    employment: 80.8,
    mean: 3530,
    median: 3300,
    group: 'NTU - College of Business (Nanyang Business School)',
    school: 'NTU'
  }, {
    degree: 'Double Degree in Bachelor of Business (Hons) and Bachelor of Engineering (Hons) (Computer Science)',
    employment: 95.0,
    mean: 5036,
    median: 4750,
    group: 'NTU - College of Business (Nanyang Business School)',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Engineering (Hons) (Aerospace Engineering)',
    employment: 75.0,
    mean: 3645,
    median: 3492,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Engineering (Hons) (Bioengineering)',
    employment: 65.2,
    mean: 3326,
    median: 3200,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Engineering (Hons) (Chemical And Biomolecular Engineering)',
    employment: 75.3,
    mean: 3326,
    median: 3200,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Engineering (Hons) (Civil Engineering)',
    employment: 96.9,
    mean: 3373,
    median: 3300,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Engineering (Hons) (Computer Engineering)',
    employment: 87.8,
    mean: 3667,
    median: 3600,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Engineering (Hons) (Computer Science)',
    employment: 86.7,
    mean: 4078,
    median: 3750,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Engineering (Hons) (Electrical & Electronic Engineering)',
    employment: 85.0,
    mean: 3532,
    median: 3500,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Engineering (Hons) (Environmental Engineering)',
    employment: 64.1,
    mean: 3538,
    median: 3475,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Engineering (Hons) (Information Engineering & Media)',
    employment: 78.7,
    mean: 3685,
    median: 3677,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Science (Hons) (Maritime Studies)',
    employment: 92.2,
    mean: 3279,
    median: 3200,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Engineering (Hons) (Materials Engineering)',
    employment: 75.6,
    mean: 3288,
    median: 3200,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Engineering (Hons) (Mechanical Engineering)',
    employment: 74.9,
    mean: 3422,
    median: 3300,
    group: 'NTU - College of Engineering',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Fine Arts (Hons)',
    employment: 54.0,
    mean: 2862,
    median: 2800,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Arts (Hons) in Chinese',
    employment: 67.7,
    mean: 3119,
    median: 3300,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Communication Studies (Hons)',
    employment: 62.2,
    mean: 3134,
    median: 3000,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Arts (Hons) in Economics',
    employment: 75.5,
    mean: 3286,
    median: 3200,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Arts (Hons) in English',
    employment: 50.8,
    mean: 3042,
    median: 3000,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Arts (Hons) in History',
    employment: 68.4,
    mean: 3206,
    median: 3100,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Arts (Hons) in Linguistics And Multilingual Studies',
    employment: 60.0,
    mean: 3042,
    median: 3000,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Arts (Hons) in Psychology',
    employment: 59.2,
    mean: 3107,
    median: 3107,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Arts (Hons) in Public Policy And Global Affairs',
    employment: 66.7,
    mean: 3353,
    median: 3300,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Arts (Hons) in Sociology',
    employment: 62.1,
    mean: 3263,
    median: 3200,
    group: 'NTU - College of Humanities, Arts & Social Sciences',
    school: 'NTU'
  }, {
    degree: 'Double Degree in Bachelor of Science (Hons) in Biomedical Sciences and Bachelor of Medicine (Chinese Medicine)',
    employment: 80.0,
    mean: 2722,
    median: 2928,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Science (Hons) in Biological Sciences',
    employment: 62.6,
    mean: 3177,
    median: 3100,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Science (Hons) in Chemistry & Biological Chemistry',
    employment: 51.1,
    mean: 3035,
    median: 3000,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Science (Hons) in Mathematical Sciences',
    employment: 79.5,
    mean: 3517,
    median: 3400,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Science (Hons) in Mathematics & Economics',
    employment: 83.1,
    mean: 3504,
    median: 3290,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Science (Hons) in Physics/Applied Physics',
    employment: 61.8,
    mean: 3367,
    median: 3300,
    group: 'NTU - College of Sciences',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Science (Hons) (Sport Science & Management)',
    employment: 48.6,
    mean: 3372,
    median: 3285,
    group: 'NTU - Sport Science and Management',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Arts (Hons) (Education)',
    employment: 100.0,
    mean: 3489,
    median: 3600,
    group: 'National Institute of Education (NIE)',
    school: 'NTU'
  }, {
    degree: 'Bachelor of Science (Hons) (Education)',
    employment: 100.0,
    mean: 3610,
    median: 3603,
    group: 'National Institute of Education (NIE)',
    school: 'NTU'
  }],
  SMU: [{
    degree: 'Accountancy',
    employment: 96.6,
    mean: 3569,
    median: 3000,
    group: 'SMU - School of Accountancy',
    school: 'SMU'
  }, {
    degree: 'Accountancy (Cum Laude and above)',
    employment: 97.8,
    mean: 4037,
    median: 3200,
    group: 'SMU - School of Accountancy',
    school: 'SMU'
  }, {
    degree: 'Business Management',
    employment: 85.7,
    mean: 3862,
    median: 3475,
    group: 'SMU - School of Business',
    school: 'SMU'
  }, {
    degree: 'Business Management (Cum Laude and above)',
    employment: 92.0,
    mean: 4364,
    median: 3880,
    group: 'SMU - School of Business',
    school: 'SMU'
  }, {
    degree: 'Economics',
    employment: 82.6,
    mean: 4013,
    median: 3600,
    group: 'SMU - School of Economics',
    school: 'SMU'
  }, {
    degree: 'Economics (Cum Laude and above)',
    employment: 90.5,
    mean: 4591,
    median: 4000,
    group: 'SMU - School of Economics',
    school: 'SMU'
  }, {
    degree: 'Information Systems Management',
    employment: 91.3,
    mean: 3922,
    median: 3905,
    group: 'SMU - School of Information Systems',
    school: 'SMU'
  }, {
    degree: 'Information Systems Management (Cum Laude and above)',
    employment: 94.1,
    mean: 4211,
    median: 4334,
    group: 'SMU - School of Information Systems',
    school: 'SMU'
  }, {
    degree: 'Social Sciences',
    employment: 78.0,
    mean: 3344,
    median: 3250,
    group: 'SMU - School of Social Sciences',
    school: 'SMU'
  }, {
    degree: 'Social Sciences (Cum Laude and above)',
    employment: 81.8,
    mean: 3810,
    median: 3600,
    group: 'SMU - School of Social Sciences',
    school: 'SMU'
  }, {
    degree: 'Law',
    employment: 94.0,
    mean: 4778,
    median: 4500,
    group: 'SMU - School of Social Sciences',
    school: 'SMU'
  }, {
    degree: 'Law (Cum Laude and above)',
    employment: 97.9,
    mean: 5163,
    median: 5450,
    group: 'SMU - School of Social Sciences',
    school: 'SMU'
  }],
  SIT: [{
    degree: 'Bachelor of Arts in Game Design',
    employment: 92.3,
    mean: 3040,
    median: 3000,
    group: 'DigiPen Institute of Technology',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Fine Arts in Digital Arts & Animation',
    employment: 69.2,
    mean: 2859,
    median: 2825,
    group: 'DigiPen Institute of Technology',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Science in Computer Science & Game Design',
    employment: 100.0,
    mean: 3232,
    median: 3250,
    group: 'DigiPen Institute of Technology',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Science in Computer Science in Real- Time Interactive Simulation',
    employment: 90.6,
    mean: 3898,
    median: 3800,
    group: 'DigiPen Institute of Technology',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Arts with Honours in Communication Design',
    employment: 68.5,
    mean: 2819,
    median: 2600,
    group: 'The Glasgow School of Art',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Arts with Honours in Interior Design',
    employment: 87.2,
    mean: 2818,
    median: 2700,
    group: 'The Glasgow School of Art',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Engineering with Honours in Chemical Engineering',
    employment: 62.1,
    mean: 3061,
    median: 3100,
    group: 'Newcastle University',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Engineering with Honours in Electrical Power Engineering',
    employment: 88.9,
    mean: 3191,
    median: 3200,
    group: 'Newcastle University',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Engineering with Honours in Marine Engineering',
    employment: 88.5,
    mean: 3461,
    median: 3300,
    group: 'Newcastle University',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Engineering with Honours in Mechanical Design & Manufacturing Engineering',
    employment: 85.7,
    mean: 3063,
    median: 3000,
    group: 'Newcastle University',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Engineering with Honours in Naval Architecture',
    employment: 95.5,
    mean: 3451,
    median: 3300,
    group: 'Newcastle University',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Engineering with Honours in Offshore Engineering',
    employment: 86.7,
    mean: 3792,
    median: 3300,
    group: 'Newcastle University',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Science with Honours in Food & Human Nutrition',
    employment: 79.1,
    mean: 2784,
    median: 2600,
    group: 'Newcastle University',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Science in Chemical Engineering',
    employment: 74.1,
    mean: 3061,
    median: 3000,
    group: 'Technische Universität München',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Science in Electrical Engineering & Information Technology',
    employment: 82.8,
    mean: 3504,
    median: 3175,
    group: 'Technische Universität München',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Professional Studies in Culinary Arts Management',
    employment: 54.4,
    mean: 2357,
    median: 2300,
    group: 'The Culinary Institute of America',
    school: 'SIT'
  }, {
    degree: 'Bachelor in Science (Occupational Therapy) ',
    employment: 97.1,
    mean: 3217,
    median: 3250,
    group: 'Singapore Institute of Technology - Trinity College Dublin / Trinity College Dublin',
    school: 'SIT'
  }, {
    degree: 'Bachelor in Science (Physiotherapy)',
    employment: 96.8,
    mean: 3483,
    median: 3350,
    group: 'Singapore Institute of Technology - Trinity College Dublin / Trinity College Dublin',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Engineering with Honours in Aeronautical Engineering',
    employment: 65.6,
    mean: 3367,
    median: 3100,
    group: 'University of Glasgow',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Engineering with Honours in Aerospace Systems',
    employment: 52.5,
    mean: 3207,
    median: 3125,
    group: 'University of Glasgow',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Engineering with Honours in Mechanical Design Engineering',
    employment: 87.9,
    mean: 3608,
    median: 3100,
    group: 'University of Glasgow',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Engineering with Honours in Mechatronics',
    employment: 86.5,
    mean: 3412,
    median: 3050,
    group: 'University of Glasgow',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Science with Honours in Computing Science',
    employment: 85.9,
    mean: 3633,
    median: 3600,
    group: 'University of Glasgow',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Science with Honours in Nursing Practice',
    employment: 96.5,
    mean: 3507,
    median: 3400,
    group: 'University of Manchester',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Arts with Honours in Criminology and Security',
    employment: 69.5,
    mean: 3759,
    median: 3800,
    group: 'University of Liverpool',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Science in Early Childhood Education',
    employment: 92.9,
    mean: 2883,
    median: 2900,
    group: 'Wheelock College',
    school: 'SIT'
  }, {
    degree: 'Bachelor of Accountancy with Honours',
    employment: 92.1,
    mean: 3073,
    median: 3050,
    group: 'Singapore Institute of Technology',
    school: 'SIT'
  }, {
    degree: ' Bachelor of Hospitality Business with Honours',
    employment: 84.2,
    mean: 2713,
    median: 2700,
    group: 'Singapore Institute of Technology',
    school: 'SIT'
  }],
  SUTD: [{
    degree: 'Bachelor of Engineering (Engineering Product Development)',
    employment: 87.3,
    mean: 3594,
    median: 3600,
    group: 'SUTD',
    school: 'SUTD'
  }, {
    degree: 'Bachelor of Engineering (Information Systems Technology and Design)',
    employment: 100.0,
    mean: 4146,
    median: 4000,
    group: 'SUTD',
    school: 'SUTD'
  }, {
    degree: 'Bachelor of Engineering (Engineering Systems and Design)',
    employment: 85.4,
    mean: 3856,
    median: 3800,
    group: 'SUTD',
    school: 'SUTD'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/assets/sample.js":
/*!******************************!*\
  !*** ./src/assets/sample.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sample = [{
  degree: 'Bachelor of Accountancy (Hons)',
  employment: 94.5,
  mean: 3121,
  median: 3000,
  group: 'NTU - College of Business (Nanyang Business School)',
  school: 'NTU'
}, {
  degree: 'Double Degree in Bachelor of Accountancy (Hons) and Bachelor of Business (Hons)',
  employment: 94.3,
  mean: 3830,
  median: 3500,
  group: 'NTU - College of Business (Nanyang Business School)',
  school: 'NTU'
}, {
  degree: 'Bachelor of Business (Hons)',
  employment: 80.8,
  mean: 3530,
  median: 3300,
  group: 'NTU - College of Business (Nanyang Business School)',
  school: 'NTU'
}, {
  degree: 'Double Degree in Bachelor of Business (Hons) and Bachelor of Engineering (Hons) (Computer Science)',
  employment: 95.0,
  mean: 5036,
  median: 4750,
  group: 'NTU - College of Business (Nanyang Business School)',
  school: 'NTU'
}, {
  degree: 'Bachelor of Engineering (Hons) (Aerospace Engineering)',
  employment: 75.0,
  mean: 3645,
  median: 3492,
  group: 'NTU - College of Engineering',
  school: 'NTU'
}, {
  degree: 'Bachelor of Engineering (Hons) (Bioengineering)',
  employment: 65.2,
  mean: 3326,
  median: 3200,
  group: 'NTU - College of Engineering',
  school: 'NTU'
}, {
  degree: 'Bachelor of Engineering (Hons) (Chemical And Biomolecular Engineering)',
  employment: 75.3,
  mean: 3326,
  median: 3200,
  group: 'NTU - College of Engineering',
  school: 'NTU'
}, {
  degree: 'Bachelor of Engineering (Hons) (Civil Engineering)',
  employment: 96.9,
  mean: 3373,
  median: 3300,
  group: 'NTU - College of Engineering',
  school: 'NTU'
}, {
  degree: 'Bachelor of Engineering (Hons) (Computer Engineering)',
  employment: 87.8,
  mean: 3667,
  median: 3600,
  group: 'NTU - College of Engineering',
  school: 'NTU'
}, {
  degree: 'Bachelor of Engineering (Hons) (Computer Science)',
  employment: 86.7,
  mean: 4078,
  median: 3750,
  group: 'NTU - College of Engineering',
  school: 'NTU'
}, {
  degree: 'Bachelor of Engineering (Hons) (Electrical & Electronic Engineering)',
  employment: 85.0,
  mean: 3532,
  median: 3500,
  group: 'NTU - College of Engineering',
  school: 'NTU'
}, {
  degree: 'Bachelor of Engineering (Hons) (Environmental Engineering)',
  employment: 64.1,
  mean: 3538,
  median: 3475,
  group: 'NTU - College of Engineering',
  school: 'NTU'
}, {
  degree: 'Bachelor of Engineering (Hons) (Information Engineering & Media)',
  employment: 78.7,
  mean: 3685,
  median: 3677,
  group: 'NTU - College of Engineering',
  school: 'NTU'
}, {
  degree: 'Bachelor of Science (Hons) (Maritime Studies)',
  employment: 92.2,
  mean: 3279,
  median: 3200,
  group: 'NTU - College of Engineering',
  school: 'NTU'
}, {
  degree: 'Bachelor of Engineering (Hons) (Materials Engineering)',
  employment: 75.6,
  mean: 3288,
  median: 3200,
  group: 'NTU - College of Engineering',
  school: 'NTU'
}, {
  degree: 'Bachelor of Engineering (Hons) (Mechanical Engineering)',
  employment: 74.9,
  mean: 3422,
  median: 3300,
  group: 'NTU - College of Engineering',
  school: 'NTU'
}, {
  degree: 'Bachelor of Fine Arts (Hons)',
  employment: 54.0,
  mean: 2862,
  median: 2800,
  group: 'NTU - College of Humanities, Arts & Social Sciences',
  school: 'NTU'
}, {
  degree: 'Bachelor of Arts (Hons) in Chinese',
  employment: 67.7,
  mean: 3119,
  median: 3300,
  group: 'NTU - College of Humanities, Arts & Social Sciences',
  school: 'NTU'
}, {
  degree: 'Bachelor of Communication Studies (Hons)',
  employment: 62.2,
  mean: 3134,
  median: 3000,
  group: 'NTU - College of Humanities, Arts & Social Sciences',
  school: 'NTU'
}, {
  degree: 'Bachelor of Arts (Hons) in Economics',
  employment: 75.5,
  mean: 3286,
  median: 3200,
  group: 'NTU - College of Humanities, Arts & Social Sciences',
  school: 'NTU'
}, {
  degree: 'Bachelor of Arts (Hons) in English',
  employment: 50.8,
  mean: 3042,
  median: 3000,
  group: 'NTU - College of Humanities, Arts & Social Sciences',
  school: 'NTU'
}, {
  degree: 'Bachelor of Arts (Hons) in History',
  employment: 68.4,
  mean: 3206,
  median: 3100,
  group: 'NTU - College of Humanities, Arts & Social Sciences',
  school: 'NTU'
}, {
  degree: 'Bachelor of Arts (Hons) in Linguistics And Multilingual Studies',
  employment: 60.0,
  mean: 3042,
  median: 3000,
  group: 'NTU - College of Humanities, Arts & Social Sciences',
  school: 'NTU'
}, {
  degree: 'Bachelor of Arts (Hons) in Psychology',
  employment: 59.2,
  mean: 3107,
  median: 3107,
  group: 'NTU - College of Humanities, Arts & Social Sciences',
  school: 'NTU'
}, {
  degree: 'Bachelor of Arts (Hons) in Public Policy And Global Affairs',
  employment: 66.7,
  mean: 3353,
  median: 3300,
  group: 'NTU - College of Humanities, Arts & Social Sciences',
  school: 'NTU'
}, {
  degree: 'Bachelor of Arts (Hons) in Sociology',
  employment: 62.1,
  mean: 3263,
  median: 3200,
  group: 'NTU - College of Humanities, Arts & Social Sciences',
  school: 'NTU'
}, {
  degree: 'Double Degree in Bachelor of Science (Hons) in Biomedical Sciences and Bachelor of Medicine (Chinese Medicine)',
  employment: 80.0,
  mean: 2722,
  median: 2928,
  group: 'NTU - College of Sciences',
  school: 'NTU'
}, {
  degree: 'Bachelor of Science (Hons) in Biological Sciences',
  employment: 62.6,
  mean: 3177,
  median: 3100,
  group: 'NTU - College of Sciences',
  school: 'NTU'
}, {
  degree: 'Bachelor of Science (Hons) in Chemistry & Biological Chemistry',
  employment: 51.1,
  mean: 3035,
  median: 3000,
  group: 'NTU - College of Sciences',
  school: 'NTU'
}, {
  degree: 'Bachelor of Science (Hons) in Mathematical Sciences',
  employment: 79.5,
  mean: 3517,
  median: 3400,
  group: 'NTU - College of Sciences',
  school: 'NTU'
}, {
  degree: 'Bachelor of Science (Hons) in Mathematics & Economics',
  employment: 83.1,
  mean: 3504,
  median: 3290,
  group: 'NTU - College of Sciences',
  school: 'NTU'
}, {
  degree: 'Bachelor of Science (Hons) in Physics/Applied Physics',
  employment: 61.8,
  mean: 3367,
  median: 3300,
  group: 'NTU - College of Sciences',
  school: 'NTU'
}, {
  degree: 'Bachelor of Science (Hons) (Sport Science & Management)',
  employment: 48.6,
  mean: 3372,
  median: 3285,
  group: 'NTU - Sport Science and Management',
  school: 'NTU'
}, {
  degree: 'Bachelor of Arts (Hons) (Education)',
  employment: 100.0,
  mean: 3489,
  median: 3600,
  group: 'National Institute of Education (NIE)',
  school: 'NTU'
}, {
  degree: 'Bachelor of Science (Hons) (Education)',
  employment: 100.0,
  mean: 3610,
  median: 3603,
  group: 'National Institute of Education (NIE)',
  school: 'NTU'
}, {
  degree: 'Accountancy',
  employment: 96.6,
  mean: 3569,
  median: 3000,
  group: 'SMU - School of Accountancy',
  school: 'SMU'
}, {
  degree: 'Accountancy (Cum Laude and above)',
  employment: 97.8,
  mean: 4037,
  median: 3200,
  group: 'SMU - School of Accountancy',
  school: 'SMU'
}, {
  degree: 'Business Management',
  employment: 85.7,
  mean: 3862,
  median: 3475,
  group: 'SMU - School of Business',
  school: 'SMU'
}, {
  degree: 'Business Management (Cum Laude and above)',
  employment: 92.0,
  mean: 4364,
  median: 3880,
  group: 'SMU - School of Business',
  school: 'SMU'
}, {
  degree: 'Economics',
  employment: 82.6,
  mean: 4013,
  median: 3600,
  group: 'SMU - School of Economics',
  school: 'SMU'
}, {
  degree: 'Economics (Cum Laude and above)',
  employment: 90.5,
  mean: 4591,
  median: 4000,
  group: 'SMU - School of Economics',
  school: 'SMU'
}, {
  degree: 'Information Systems Management',
  employment: 91.3,
  mean: 3922,
  median: 3905,
  group: 'SMU - School of Information Systems',
  school: 'SMU'
}, {
  degree: 'Information Systems Management (Cum Laude and above)',
  employment: 94.1,
  mean: 4211,
  median: 4334,
  group: 'SMU - School of Information Systems',
  school: 'SMU'
}, {
  degree: 'Social Sciences',
  employment: 78.0,
  mean: 3344,
  median: 3250,
  group: 'SMU - School of Social Sciences',
  school: 'SMU'
}, {
  degree: 'Social Sciences (Cum Laude and above)',
  employment: 81.8,
  mean: 3810,
  median: 3600,
  group: 'SMU - School of Social Sciences',
  school: 'SMU'
}, {
  degree: 'Law',
  employment: 94.0,
  mean: 4778,
  median: 4500,
  group: 'SMU - School of Social Sciences',
  school: 'SMU'
}, {
  degree: 'Law (Cum Laude and above)',
  employment: 97.9,
  mean: 5163,
  median: 5450,
  group: 'SMU - School of Social Sciences',
  school: 'SMU'
}];
/* harmony default export */ __webpack_exports__["default"] = (sample);

/***/ }),

/***/ "./src/components/Analyzer/ListHeaders/ListHeaders.module.css":
/*!********************************************************************!*\
  !*** ./src/components/Analyzer/ListHeaders/ListHeaders.module.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"ListHeaders": "_1xvQ9cXlHzmxWDndU9OUGF",
	"col": "ce3Mto4deM5PQl0OQhlGK",
	"subHeading": "_3W2MJIYcfzFkh-LEs71vu8"
};

/***/ }),

/***/ "./src/components/Analyzer/ListHeaders/ListHeaders.tsx":
/*!*************************************************************!*\
  !*** ./src/components/Analyzer/ListHeaders/ListHeaders.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListHeaders_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListHeaders.module.css */ "./src/components/Analyzer/ListHeaders/ListHeaders.module.css");
/* harmony import */ var _ListHeaders_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ListHeaders_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daniel/Desktop/ges/src/components/Analyzer/ListHeaders/ListHeaders.tsx";



var ListHeaders = function ListHeaders(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _ListHeaders_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ListHeaders,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _ListHeaders_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.col,
    style: {
      flex: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Degree"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _ListHeaders_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.col,
    style: {
      flex: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Full-Time Employment Rate"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _ListHeaders_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.col,
    style: {
      flex: 4
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Basic Monthly Salary"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: {
      display: "flex",
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _ListHeaders_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Mean "), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _ListHeaders_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Median"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ListHeaders);

/***/ }),

/***/ "./src/components/Analyzer/ListItems/ListItem/ListItem.module.css":
/*!************************************************************************!*\
  !*** ./src/components/Analyzer/ListItems/ListItem/ListItem.module.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"ListItemRow": "_2_S2M8XP6GaHKycvageQyj",
	"ListItemCol": "Kp7i2CPPJilK9jzhduhbq"
};

/***/ }),

/***/ "./src/components/Analyzer/ListItems/ListItem/ListItem.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/Analyzer/ListItems/ListItem/ListItem.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListItem_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItem.module.css */ "./src/components/Analyzer/ListItems/ListItem/ListItem.module.css");
/* harmony import */ var _ListItem_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ListItem_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daniel/Desktop/ges/src/components/Analyzer/ListItems/ListItem/ListItem.tsx";



var listItem = function listItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _ListItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ListItemRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _ListItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ListItemCol,
    style: {
      flex: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.data.degree), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _ListItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ListItemCol,
    style: {
      flex: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.data.employment), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _ListItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ListItemCol,
    style: {
      flex: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.data.mean), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _ListItem_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ListItemCol,
    style: {
      flex: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.data.median));
};

/* harmony default export */ __webpack_exports__["default"] = (listItem);

/***/ }),

/***/ "./src/components/Analyzer/ListItems/ListItems.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Analyzer/ListItems/ListItems.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListItem_ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItem/ListItem */ "./src/components/Analyzer/ListItems/ListItem/ListItem.tsx");
/* harmony import */ var _ListLabel_ListLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListLabel/ListLabel */ "./src/components/Analyzer/ListItems/ListLabel/ListLabel.tsx");
/* harmony import */ var _hoc_Aux_Aux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hoc/Aux/Aux */ "./src/hoc/Aux/Aux.js");
var _jsxFileName = "/Users/daniel/Desktop/ges/src/components/Analyzer/ListItems/ListItems.tsx";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ListItems = function ListItems(props) {
  var groups = [];
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.items.map(function (item) {
    if (groups.indexOf(item.group) === -1) {
      groups.push(item.group);
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_hoc_Aux_Aux__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: item.degree,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ListLabel_ListLabel__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, item.group), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        data: _objectSpread({}, item),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: item.degree,
        data: _objectSpread({}, item),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ListItems);

/***/ }),

/***/ "./src/components/Analyzer/ListItems/ListLabel/ListLabel.module.css":
/*!**************************************************************************!*\
  !*** ./src/components/Analyzer/ListItems/ListLabel/ListLabel.module.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"ListLabel": "_2kesAMNGVVSkplETngy4az"
};

/***/ }),

/***/ "./src/components/Analyzer/ListItems/ListLabel/ListLabel.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/Analyzer/ListItems/ListLabel/ListLabel.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListLabel_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListLabel.module.css */ "./src/components/Analyzer/ListItems/ListLabel/ListLabel.module.css");
/* harmony import */ var _ListLabel_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ListLabel_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daniel/Desktop/ges/src/components/Analyzer/ListItems/ListLabel/ListLabel.tsx";



var listLabel = function listLabel(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _ListLabel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ListLabel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (listLabel);

/***/ }),

/***/ "./src/components/Analyzer/SearchBar/SearchBar.module.css":
/*!****************************************************************!*\
  !*** ./src/components/Analyzer/SearchBar/SearchBar.module.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"SearchContainer": "_1zPRfyQO2RwFsDemv3_yb3",
	"SearchBar": "OQCBnC0TvJGtsMye9xLvs",
	"SearchBarIcon": "-J4XW4Wc7D2woAH1ZK1qO"
};

/***/ }),

/***/ "./src/components/Analyzer/SearchBar/SearchBar.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Analyzer/SearchBar/SearchBar.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar.module.css */ "./src/components/Analyzer/SearchBar/SearchBar.module.css");
/* harmony import */ var _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SearchBar_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daniel/Desktop/ges/src/components/Analyzer/SearchBar/SearchBar.tsx";



var searchBar = function searchBar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.SearchContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
    className: _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.SearchBar,
    type: "text",
    onChange: props.changed,
    onKeyPress: props.keypress,
    placeholder: "e.g. Business",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
    className: _SearchBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.SearchBarIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
    viewBox: "0 0 100 100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "icon-search"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M80.65 66.78a33.55 33.55 0 0 1-47.44-47.44 33.55 33.55 0 1 1 47.44 47.44zm6.73-54.16a43.06 43.06 0 0 0-65.32 55.71L2 88.39A6.8 6.8 0 0 0 11.61 98l20.06-20.06a43.06 43.06 0 0 0 55.71-65.32z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (searchBar);

/***/ }),

/***/ "./src/components/Analyzer/SearchFilters/SearchFilter/SearchFilter.module.css":
/*!************************************************************************************!*\
  !*** ./src/components/Analyzer/SearchFilters/SearchFilter/SearchFilter.module.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"SearchFilter": "_2yvDuW5wMOGBH775I6QiRO",
	"active": "_1lhWeD_QkXuLeG9qoCh7qG"
};

/***/ }),

/***/ "./src/components/Analyzer/SearchFilters/SearchFilter/SearchFilter.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/Analyzer/SearchFilters/SearchFilter/SearchFilter.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchFilter_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchFilter.module.css */ "./src/components/Analyzer/SearchFilters/SearchFilter/SearchFilter.module.css");
/* harmony import */ var _SearchFilter_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SearchFilter_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daniel/Desktop/ges/src/components/Analyzer/SearchFilters/SearchFilter/SearchFilter.tsx";



var searchFilter = function searchFilter(props) {
  var attachedClasses = [_SearchFilter_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.SearchFilter];

  var click = function click() {
    return props.add(props.children);
  };

  if (props.active) {
    attachedClasses = [_SearchFilter_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.SearchFilter, _SearchFilter_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.active];

    click = function click() {
      return props.remove(props.children);
    };
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: attachedClasses.join(" "),
    onClick: click,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      background: props.color,
      width: "9px",
      height: "9px",
      borderRadius: "50%",
      margin: "5px auto 0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (searchFilter);

/***/ }),

/***/ "./src/components/Analyzer/SearchFilters/SearchFilters.module.css":
/*!************************************************************************!*\
  !*** ./src/components/Analyzer/SearchFilters/SearchFilters.module.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"SearchFilters": "sc1rWWTa95UM1Dfah2aON"
};

/***/ }),

/***/ "./src/components/Analyzer/SearchFilters/SearchFilters.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/Analyzer/SearchFilters/SearchFilters.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchFilters_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchFilters.module.css */ "./src/components/Analyzer/SearchFilters/SearchFilters.module.css");
/* harmony import */ var _SearchFilters_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SearchFilters_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchFilter_SearchFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchFilter/SearchFilter */ "./src/components/Analyzer/SearchFilters/SearchFilter/SearchFilter.tsx");
/* harmony import */ var _assets_colorCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/colorCode */ "./src/assets/colorCode.js");
var _jsxFileName = "/Users/daniel/Desktop/ges/src/components/Analyzer/SearchFilters/SearchFilters.tsx";





var searchFilters = function searchFilters(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _SearchFilters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.SearchFilters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchFilter_SearchFilter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    add: props.addFilter,
    remove: props.removeFilter,
    active: props.filters.indexOf("NUS") !== -1,
    color: _assets_colorCode__WEBPACK_IMPORTED_MODULE_3__["default"][0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "NUS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchFilter_SearchFilter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    add: props.addFilter,
    remove: props.removeFilter,
    active: props.filters.indexOf("NTU") !== -1,
    color: _assets_colorCode__WEBPACK_IMPORTED_MODULE_3__["default"][1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "NTU"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchFilter_SearchFilter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    add: props.addFilter,
    remove: props.removeFilter,
    active: props.filters.indexOf("SMU") !== -1,
    color: _assets_colorCode__WEBPACK_IMPORTED_MODULE_3__["default"][2],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "SMU"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchFilter_SearchFilter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    add: props.addFilter,
    remove: props.removeFilter,
    active: props.filters.indexOf("SIT") !== -1,
    color: _assets_colorCode__WEBPACK_IMPORTED_MODULE_3__["default"][3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "SIT"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchFilter_SearchFilter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    add: props.addFilter,
    remove: props.removeFilter,
    active: props.filters.indexOf("SUTD") !== -1,
    color: _assets_colorCode__WEBPACK_IMPORTED_MODULE_3__["default"][4],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "SUTD"));
};

/* harmony default export */ __webpack_exports__["default"] = (searchFilters);

/***/ }),

/***/ "./src/components/Banner/Banner.module.css":
/*!*************************************************!*\
  !*** ./src/components/Banner/Banner.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Banner": "_3Ou2_z6Y_ivToG8hdK9GMk",
	"BannerTitle": "_1q3SpmQGCXJ_u4WobxRVCI",
	"BannerSubtitle": "_22WeXqrC7hA9LnwAH4KQG2"
};

/***/ }),

/***/ "./src/components/Banner/Banner.tsx":
/*!******************************************!*\
  !*** ./src/components/Banner/Banner.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Banner_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banner.module.css */ "./src/components/Banner/Banner.module.css");
/* harmony import */ var _Banner_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Banner_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daniel/Desktop/ges/src/components/Banner/Banner.tsx";



var banner = function banner() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Banner_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Banner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Banner_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.BannerTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Graduate Employment Survey 2018"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Banner_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.BannerSubtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Salary and employment rate of local university graduates by degree."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Data from the Ministry of Education.")));
};

/* harmony default export */ __webpack_exports__["default"] = (banner);

/***/ }),

/***/ "./src/components/Chart/Chart.module.css":
/*!***********************************************!*\
  !*** ./src/components/Chart/Chart.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"ChartContainer": "_15c4eVZ2WV4n96OUrVOhdX"
};

/***/ }),

/***/ "./src/components/Chart/Chart.tsx":
/*!****************************************!*\
  !*** ./src/components/Chart/Chart.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomToolTipContent_CustomTooltipContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomToolTipContent/CustomTooltipContent */ "./src/components/Chart/CustomToolTipContent/CustomTooltipContent.js");
/* harmony import */ var _Chart_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chart.module.css */ "./src/components/Chart/Chart.module.css");
/* harmony import */ var _Chart_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Chart_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_colorCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/colorCode */ "./src/assets/colorCode.js");
var _jsxFileName = "/Users/daniel/Desktop/ges/src/components/Chart/Chart.tsx";






var colorBySchool = function colorBySchool(school) {
  if (school === "NUS") {
    return _assets_colorCode__WEBPACK_IMPORTED_MODULE_4__["default"][0];
  } else if (school === "NTU") {
    return _assets_colorCode__WEBPACK_IMPORTED_MODULE_4__["default"][1];
  } else if (school === "SMU") {
    return _assets_colorCode__WEBPACK_IMPORTED_MODULE_4__["default"][2];
  } else if (school === "SIT") {
    return _assets_colorCode__WEBPACK_IMPORTED_MODULE_4__["default"][3];
  } else {
    return _assets_colorCode__WEBPACK_IMPORTED_MODULE_4__["default"][4];
  }
};

var chart = function chart(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Chart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.ChartContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], {
    aspect: 1.4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["ScatterChart"], {
    margin: {
      top: 10,
      right: 10,
      bottom: 0,
      left: -15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
    type: "number",
    domain: ["dataMin", "dataMax"],
    ticks: [50, 60, 70, 80, 90, 100],
    dataKey: "employment",
    name: "Employment Rate",
    unit: "%",
    padding: {
      left: 30,
      right: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    value: "Full-Time Employment Rate",
    offset: 10,
    position: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
    type: "number",
    domain: ["dataMin", "dataMax"],
    ticks: [2000, 3000, 4000, 5000],
    dataKey: "mean",
    name: "Mean Monthly Salary",
    padding: {
      left: 0,
      right: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    value: "Salary",
    offset: -15,
    angle: 90,
    position: "insideRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    cursor: {
      strokeDasharray: "3 3"
    },
    content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomToolTipContent_CustomTooltipContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Scatter"], {
    name: "A school",
    data: props.chartData,
    fill: "#8884d8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, props.chartData.map(function (entry, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
      key: "cell-".concat(index) //fill={entry.employment > 90 ? '#000000' : '#ffffff'}
      ,
      fill: colorBySchool(entry.school),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (chart);

/***/ }),

/***/ "./src/components/Chart/CustomToolTipContent/CustomTooltipContent.js":
/*!***************************************************************************!*\
  !*** ./src/components/Chart/CustomToolTipContent/CustomTooltipContent.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts_lib_component_DefaultTooltipContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts/lib/component/DefaultTooltipContent */ "recharts/lib/component/DefaultTooltipContent");
/* harmony import */ var recharts_lib_component_DefaultTooltipContent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts_lib_component_DefaultTooltipContent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomTooltipContent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomTooltipContent.module.css */ "./src/components/Chart/CustomToolTipContent/CustomTooltipContent.module.css");
/* harmony import */ var _CustomTooltipContent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CustomTooltipContent_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/daniel/Desktop/ges/src/components/Chart/CustomToolTipContent/CustomTooltipContent.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // CustomTooltipContent.js




var CustomTooltipContent = function CustomTooltipContent(props) {
  // payload[0] doesn't exist when tooltip isn't visible
  if (props.payload[0] != null) {
    // we render the default, but with our overridden payload
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _CustomTooltipContent_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Tooltip,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _CustomTooltipContent_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.TooltipHeading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, props.payload[0].payload.school), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _CustomTooltipContent_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.TooltipText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, props.payload[0].payload.degree), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _CustomTooltipContent_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.TooltipHeading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, props.payload[0].payload.employment, "% | $", props.payload[0].payload.mean));
  } // we just render the default


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts_lib_component_DefaultTooltipContent__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomTooltipContent);

/***/ }),

/***/ "./src/components/Chart/CustomToolTipContent/CustomTooltipContent.module.css":
/*!***********************************************************************************!*\
  !*** ./src/components/Chart/CustomToolTipContent/CustomTooltipContent.module.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Tooltip": "_21KTUTRlXnzh-45YND-iBx",
	"TooltipHeading": "_2g3DJMIPVrQkwvKIVc9tHX",
	"TooltipText": "_3WLxkUUbJudYVZmnozA1mX"
};

/***/ }),

/***/ "./src/components/Instructions/Instructions.module.css":
/*!*************************************************************!*\
  !*** ./src/components/Instructions/Instructions.module.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Instructions": "_3v4Ne-sIOrpbFTnxlSbCZO"
};

/***/ }),

/***/ "./src/components/Instructions/Instructions.tsx":
/*!******************************************************!*\
  !*** ./src/components/Instructions/Instructions.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Instructions_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instructions.module.css */ "./src/components/Instructions/Instructions.module.css");
/* harmony import */ var _Instructions_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Instructions_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daniel/Desktop/ges/src/components/Instructions/Instructions.tsx";



var instructions = function instructions(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Instructions_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Instructions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (instructions);

/***/ }),

/***/ "./src/hoc/Aux/Aux.js":
/*!****************************!*\
  !*** ./src/hoc/Aux/Aux.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var aux = function aux(props) {
  return props.children;
};

/* harmony default export */ __webpack_exports__["default"] = (aux);

/***/ }),

/***/ "./src/hoc/Layout/Layout.js":
/*!**********************************!*\
  !*** ./src/hoc/Layout/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.module.css */ "./src/hoc/Layout/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/daniel/Desktop/ges/src/hoc/Layout/Layout.js";



var layout = function layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Layout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (layout);

/***/ }),

/***/ "./src/hoc/Layout/Layout.module.css":
/*!******************************************!*\
  !*** ./src/hoc/Layout/Layout.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Layout": "_3zwSa-BKerfzi2RwMfqMfS"
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.ts */"./pages/index.ts");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),

/***/ "recharts/lib/component/DefaultTooltipContent":
/*!***************************************************************!*\
  !*** external "recharts/lib/component/DefaultTooltipContent" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts/lib/component/DefaultTooltipContent");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map