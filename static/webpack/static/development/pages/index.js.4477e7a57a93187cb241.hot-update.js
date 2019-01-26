webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/lib/head */ "./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./pages/DegreeAnalyzer.tsx":
/*!**********************************!*\
  !*** ./pages/DegreeAnalyzer.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
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
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        href: "index.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
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
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/DegreeAnalyzer")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.4477e7a57a93187cb241.hot-update.js.map