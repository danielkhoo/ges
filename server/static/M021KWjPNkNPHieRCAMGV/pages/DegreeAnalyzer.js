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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
	"ListHeaders": "_1xvQ9cXlHzmxWDndU9OUGF",
	"col": "ce3Mto4deM5PQl0OQhlGK",
	"subHeading": "_3W2MJIYcfzFkh-LEs71vu8"
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
	"ListItemRow": "_2_S2M8XP6GaHKycvageQyj",
	"ListItemCol": "Kp7i2CPPJilK9jzhduhbq"
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
	"Tooltip": "_21KTUTRlXnzh-45YND-iBx",
	"TooltipHeading": "_2g3DJMIPVrQkwvKIVc9tHX",
	"TooltipText": "_3WLxkUUbJudYVZmnozA1mX"
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
	"Banner": "_3Ou2_z6Y_ivToG8hdK9GMk",
	"BannerTitle": "_1q3SpmQGCXJ_u4WobxRVCI",
	"BannerSubtitle": "_22WeXqrC7hA9LnwAH4KQG2"
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
	"SearchContainer": "_1zPRfyQO2RwFsDemv3_yb3",
	"SearchBar": "OQCBnC0TvJGtsMye9xLvs",
	"SearchBarIcon": "-J4XW4Wc7D2woAH1ZK1qO"
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
	"SearchFilter": "_2yvDuW5wMOGBH775I6QiRO",
	"active": "_1lhWeD_QkXuLeG9qoCh7qG"
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("recharts/lib/component/DefaultTooltipContent");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
	"ChartContainer": "_15c4eVZ2WV4n96OUrVOhdX"
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
	"Instructions": "_3v4Ne-sIOrpbFTnxlSbCZO"
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
	"ListLabel": "_2kesAMNGVVSkplETngy4az"
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
	"SearchFilters": "sc1rWWTa95UM1Dfah2aON"
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
	"ResultsTable": "_35qDQqMehZbGZKpPmlUD06"
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
	"Layout": "_3zwSa-BKerfzi2RwMfqMfS"
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/Banner/Banner.module.css
var Banner_module = __webpack_require__(5);
var Banner_module_default = /*#__PURE__*/__webpack_require__.n(Banner_module);

// CONCATENATED MODULE: ./src/components/Banner/Banner.tsx



var Banner_banner = function banner() {
  return external_react_["createElement"]("div", {
    className: Banner_module_default.a.Banner
  }, external_react_["createElement"]("div", {
    className: Banner_module_default.a.BannerTitle
  }, "Graduate Employment Survey 2018"), external_react_["createElement"]("div", {
    className: Banner_module_default.a.BannerSubtitle
  }, external_react_["createElement"]("p", null, "Salary and employment rate of local university graduates by degree."), external_react_["createElement"]("p", null, "Data from the Ministry of Education.")));
};

/* harmony default export */ var Banner = (Banner_banner);
// EXTERNAL MODULE: external "recharts"
var external_recharts_ = __webpack_require__(1);

// EXTERNAL MODULE: external "recharts/lib/component/DefaultTooltipContent"
var DefaultTooltipContent_ = __webpack_require__(8);
var DefaultTooltipContent_default = /*#__PURE__*/__webpack_require__.n(DefaultTooltipContent_);

// EXTERNAL MODULE: ./src/components/Chart/CustomToolTipContent/CustomTooltipContent.module.css
var CustomTooltipContent_module = __webpack_require__(4);
var CustomTooltipContent_module_default = /*#__PURE__*/__webpack_require__.n(CustomTooltipContent_module);

// CONCATENATED MODULE: ./src/components/Chart/CustomToolTipContent/CustomTooltipContent.js
 // CustomTooltipContent.js




var CustomTooltipContent_CustomTooltipContent = function CustomTooltipContent(props) {
  // payload[0] doesn't exist when tooltip isn't visible
  if (props.payload[0] != null) {
    // we render the default, but with our overridden payload
    return external_react_default.a.createElement("div", {
      className: CustomTooltipContent_module_default.a.Tooltip
    }, external_react_default.a.createElement("div", {
      className: CustomTooltipContent_module_default.a.TooltipHeading
    }, props.payload[0].payload.school), external_react_default.a.createElement("span", {
      className: CustomTooltipContent_module_default.a.TooltipText
    }, props.payload[0].payload.degree), external_react_default.a.createElement("div", {
      className: CustomTooltipContent_module_default.a.TooltipHeading
    }, props.payload[0].payload.employment, "% | $", props.payload[0].payload.mean));
  } // we just render the default


  return external_react_default.a.createElement(DefaultTooltipContent_default.a, props);
};

/* harmony default export */ var CustomToolTipContent_CustomTooltipContent = (CustomTooltipContent_CustomTooltipContent);
// EXTERNAL MODULE: ./src/components/Chart/Chart.module.css
var Chart_module = __webpack_require__(9);
var Chart_module_default = /*#__PURE__*/__webpack_require__.n(Chart_module);

// CONCATENATED MODULE: ./src/assets/colorCode.js
var colorCode = ['#FFA600', '#FF3366', '#17CF17', '#00E3F6', '#0F4D65'];
/* harmony default export */ var assets_colorCode = (colorCode);
// CONCATENATED MODULE: ./src/components/Chart/Chart.tsx






var Chart_colorBySchool = function colorBySchool(school) {
  if (school === "NUS") {
    return assets_colorCode[0];
  } else if (school === "NTU") {
    return assets_colorCode[1];
  } else if (school === "SMU") {
    return assets_colorCode[2];
  } else if (school === "SIT") {
    return assets_colorCode[3];
  } else {
    return assets_colorCode[4];
  }
};

var Chart_chart = function chart(props) {
  return external_react_default.a.createElement("div", {
    className: Chart_module_default.a.ChartContainer
  }, external_react_default.a.createElement(external_recharts_["ResponsiveContainer"], {
    aspect: 1.4
  }, external_react_default.a.createElement(external_recharts_["ScatterChart"], {
    margin: {
      top: 10,
      right: 10,
      bottom: 0,
      left: -15
    }
  }, external_react_default.a.createElement(external_recharts_["XAxis"], {
    type: "number",
    domain: ["dataMin", "dataMax"],
    ticks: [50, 60, 70, 80, 90, 100],
    dataKey: "employment",
    name: "Employment Rate",
    unit: "%",
    padding: {
      left: 30,
      right: 10
    }
  }, external_react_default.a.createElement(external_recharts_["Label"], {
    value: "Full-Time Employment Rate",
    offset: 10,
    position: "top"
  })), external_react_default.a.createElement(external_recharts_["YAxis"], {
    type: "number",
    domain: ["dataMin", "dataMax"],
    ticks: [2000, 3000, 4000, 5000],
    dataKey: "mean",
    name: "Mean Monthly Salary",
    padding: {
      left: 0,
      right: 0
    }
  }, external_react_default.a.createElement(external_recharts_["Label"], {
    value: "Salary",
    offset: -15,
    angle: 90,
    position: "insideRight"
  })), external_react_default.a.createElement(external_recharts_["Tooltip"], {
    cursor: {
      strokeDasharray: "3 3"
    },
    content: external_react_default.a.createElement(CustomToolTipContent_CustomTooltipContent, null)
  }), external_react_default.a.createElement(external_recharts_["Scatter"], {
    name: "A school",
    data: props.chartData,
    fill: "#8884d8"
  }, props.chartData.map(function (entry, index) {
    return external_react_default.a.createElement(external_recharts_["Cell"], {
      key: "cell-".concat(index) //fill={entry.employment > 90 ? '#000000' : '#ffffff'}
      ,
      fill: Chart_colorBySchool(entry.school)
    });
  })))));
};

/* harmony default export */ var Chart = (Chart_chart);
// EXTERNAL MODULE: ./src/components/Instructions/Instructions.module.css
var Instructions_module = __webpack_require__(10);
var Instructions_module_default = /*#__PURE__*/__webpack_require__.n(Instructions_module);

// CONCATENATED MODULE: ./src/components/Instructions/Instructions.tsx



var Instructions_instructions = function instructions(props) {
  return external_react_["createElement"]("div", {
    className: Instructions_module_default.a.Instructions
  }, props.children);
};

/* harmony default export */ var Instructions = (Instructions_instructions);
// EXTERNAL MODULE: ./src/components/Analyzer/ListHeaders/ListHeaders.module.css
var ListHeaders_module = __webpack_require__(2);
var ListHeaders_module_default = /*#__PURE__*/__webpack_require__.n(ListHeaders_module);

// CONCATENATED MODULE: ./src/components/Analyzer/ListHeaders/ListHeaders.tsx



var ListHeaders_ListHeaders = function ListHeaders(props) {
  return external_react_["createElement"]("div", {
    className: ListHeaders_module_default.a.ListHeaders
  }, external_react_["createElement"]("div", {
    className: ListHeaders_module_default.a.col,
    style: {
      flex: 5
    }
  }, "Degree"), external_react_["createElement"]("div", {
    className: ListHeaders_module_default.a.col,
    style: {
      flex: 2
    }
  }, "Full-Time Employment Rate"), external_react_["createElement"]("div", {
    className: ListHeaders_module_default.a.col,
    style: {
      flex: 4
    }
  }, external_react_["createElement"]("div", {
    style: {
      width: "100%"
    }
  }, "Basic Monthly Salary"), external_react_["createElement"]("div", {
    style: {
      display: "flex",
      width: "100%"
    }
  }, external_react_["createElement"]("div", {
    className: ListHeaders_module_default.a.subHeading
  }, "Mean "), external_react_["createElement"]("div", {
    className: ListHeaders_module_default.a.subHeading
  }, "Median"))));
};

/* harmony default export */ var Analyzer_ListHeaders_ListHeaders = (ListHeaders_ListHeaders);
// EXTERNAL MODULE: ./src/components/Analyzer/ListItems/ListItem/ListItem.module.css
var ListItem_module = __webpack_require__(3);
var ListItem_module_default = /*#__PURE__*/__webpack_require__.n(ListItem_module);

// CONCATENATED MODULE: ./src/components/Analyzer/ListItems/ListItem/ListItem.tsx



var ListItem_listItem = function listItem(props) {
  return external_react_["createElement"]("div", {
    className: ListItem_module_default.a.ListItemRow
  }, external_react_["createElement"]("div", {
    className: ListItem_module_default.a.ListItemCol,
    style: {
      flex: 5
    }
  }, props.data.degree), external_react_["createElement"]("div", {
    className: ListItem_module_default.a.ListItemCol,
    style: {
      flex: 2
    }
  }, props.data.employment), external_react_["createElement"]("div", {
    className: ListItem_module_default.a.ListItemCol,
    style: {
      flex: 2
    }
  }, props.data.mean), external_react_["createElement"]("div", {
    className: ListItem_module_default.a.ListItemCol,
    style: {
      flex: 2
    }
  }, props.data.median));
};

/* harmony default export */ var ListItem = (ListItem_listItem);
// EXTERNAL MODULE: ./src/components/Analyzer/ListItems/ListLabel/ListLabel.module.css
var ListLabel_module = __webpack_require__(11);
var ListLabel_module_default = /*#__PURE__*/__webpack_require__.n(ListLabel_module);

// CONCATENATED MODULE: ./src/components/Analyzer/ListItems/ListLabel/ListLabel.tsx



var ListLabel_listLabel = function listLabel(props) {
  return external_react_default.a.createElement("div", {
    className: ListLabel_module_default.a.ListLabel
  }, props.children);
};

/* harmony default export */ var ListLabel = (ListLabel_listLabel);
// CONCATENATED MODULE: ./src/hoc/Aux/Aux.js
var aux = function aux(props) {
  return props.children;
};

/* harmony default export */ var Aux = (aux);
// CONCATENATED MODULE: ./src/components/Analyzer/ListItems/ListItems.tsx
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ListItems_ListItems = function ListItems(props) {
  var groups = [];
  return external_react_["createElement"]("div", null, props.items.map(function (item) {
    if (groups.indexOf(item.group) === -1) {
      groups.push(item.group);
      return external_react_["createElement"](Aux, {
        key: item.degree
      }, external_react_["createElement"](ListLabel, null, item.group), external_react_["createElement"](ListItem, {
        data: _objectSpread({}, item)
      }));
    } else {
      return external_react_["createElement"](ListItem, {
        key: item.degree,
        data: _objectSpread({}, item)
      });
    }
  }));
};

/* harmony default export */ var Analyzer_ListItems_ListItems = (ListItems_ListItems);
// EXTERNAL MODULE: ./src/components/Analyzer/SearchBar/SearchBar.module.css
var SearchBar_module = __webpack_require__(6);
var SearchBar_module_default = /*#__PURE__*/__webpack_require__.n(SearchBar_module);

// CONCATENATED MODULE: ./src/components/Analyzer/SearchBar/SearchBar.tsx



var SearchBar_searchBar = function searchBar(props) {
  return external_react_["createElement"]("div", {
    className: SearchBar_module_default.a.SearchContainer
  }, external_react_["createElement"]("input", {
    className: SearchBar_module_default.a.SearchBar,
    type: "text",
    onChange: props.changed,
    onKeyPress: props.keypress,
    placeholder: "e.g. Business"
  }), external_react_["createElement"]("svg", {
    className: SearchBar_module_default.a.SearchBarIcon
  }, external_react_["createElement"]("svg", {
    viewBox: "0 0 100 100"
  }, external_react_["createElement"]("title", null, "icon-search"), external_react_["createElement"]("path", {
    d: "M80.65 66.78a33.55 33.55 0 0 1-47.44-47.44 33.55 33.55 0 1 1 47.44 47.44zm6.73-54.16a43.06 43.06 0 0 0-65.32 55.71L2 88.39A6.8 6.8 0 0 0 11.61 98l20.06-20.06a43.06 43.06 0 0 0 55.71-65.32z"
  }))));
};

/* harmony default export */ var SearchBar = (SearchBar_searchBar);
// EXTERNAL MODULE: ./src/components/Analyzer/SearchFilters/SearchFilters.module.css
var SearchFilters_module = __webpack_require__(12);
var SearchFilters_module_default = /*#__PURE__*/__webpack_require__.n(SearchFilters_module);

// EXTERNAL MODULE: ./src/components/Analyzer/SearchFilters/SearchFilter/SearchFilter.module.css
var SearchFilter_module = __webpack_require__(7);
var SearchFilter_module_default = /*#__PURE__*/__webpack_require__.n(SearchFilter_module);

// CONCATENATED MODULE: ./src/components/Analyzer/SearchFilters/SearchFilter/SearchFilter.tsx



var SearchFilter_searchFilter = function searchFilter(props) {
  var attachedClasses = [SearchFilter_module_default.a.SearchFilter];

  var click = function click() {
    return props.add(props.children);
  };

  if (props.active) {
    attachedClasses = [SearchFilter_module_default.a.SearchFilter, SearchFilter_module_default.a.active];

    click = function click() {
      return props.remove(props.children);
    };
  }

  return external_react_default.a.createElement("li", {
    className: attachedClasses.join(" "),
    onClick: click
  }, props.children, external_react_default.a.createElement("div", {
    style: {
      background: props.color,
      width: "9px",
      height: "9px",
      borderRadius: "50%",
      margin: "5px auto 0px"
    }
  }));
};

/* harmony default export */ var SearchFilter = (SearchFilter_searchFilter);
// CONCATENATED MODULE: ./src/components/Analyzer/SearchFilters/SearchFilters.tsx





var SearchFilters_searchFilters = function searchFilters(props) {
  return external_react_default.a.createElement("ul", {
    className: SearchFilters_module_default.a.SearchFilters
  }, external_react_default.a.createElement(SearchFilter, {
    add: props.addFilter,
    remove: props.removeFilter,
    active: props.filters.indexOf("NUS") !== -1,
    color: assets_colorCode[0]
  }, "NUS"), external_react_default.a.createElement(SearchFilter, {
    add: props.addFilter,
    remove: props.removeFilter,
    active: props.filters.indexOf("NTU") !== -1,
    color: assets_colorCode[1]
  }, "NTU"), external_react_default.a.createElement(SearchFilter, {
    add: props.addFilter,
    remove: props.removeFilter,
    active: props.filters.indexOf("SMU") !== -1,
    color: assets_colorCode[2]
  }, "SMU"), external_react_default.a.createElement(SearchFilter, {
    add: props.addFilter,
    remove: props.removeFilter,
    active: props.filters.indexOf("SIT") !== -1,
    color: assets_colorCode[3]
  }, "SIT"), external_react_default.a.createElement(SearchFilter, {
    add: props.addFilter,
    remove: props.removeFilter,
    active: props.filters.indexOf("SUTD") !== -1,
    color: assets_colorCode[4]
  }, "SUTD"));
};

/* harmony default export */ var SearchFilters = (SearchFilters_searchFilters);
// CONCATENATED MODULE: ./src/assets/data.js
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
/* harmony default export */ var assets_data = (data);
// CONCATENATED MODULE: ./src/assets/sample.js
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
/* harmony default export */ var assets_sample = (sample);
// EXTERNAL MODULE: ./pages/DegreeAnalyzer.module.css
var DegreeAnalyzer_module = __webpack_require__(13);
var DegreeAnalyzer_module_default = /*#__PURE__*/__webpack_require__.n(DegreeAnalyzer_module);

// EXTERNAL MODULE: ./src/hoc/Layout/Layout.module.css
var Layout_module = __webpack_require__(14);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);

// CONCATENATED MODULE: ./src/hoc/Layout/Layout.js



var Layout_layout = function layout(props) {
  return external_react_default.a.createElement("main", {
    className: Layout_module_default.a.Layout
  }, props.children);
};

/* harmony default export */ var Layout = (Layout_layout);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(15);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/DegreeAnalyzer.tsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DegreeAnalyzer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var fullDataset = assets_data;

var DegreeAnalyzer_DegreeAnalyzer =
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

    DegreeAnalyzer_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      input: "",
      filters: ["NTU", "SMU"],
      filteredItems: assets_sample
    });

    DegreeAnalyzer_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "filterData", function (data, filters, input) {
      var filteredItems = []; //filter by school

      filters.forEach(function (key) {
        filteredItems = filteredItems.concat(data[key]);
      }); //filter by keyword

      return filteredItems.filter(function (item) {
        return item.degree.toLowerCase().indexOf(input) > -1;
      });
    });

    DegreeAnalyzer_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addFilterHandler", function (name) {
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

    DegreeAnalyzer_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeFilterHandler", function (name) {
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

    DegreeAnalyzer_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "textChangedHandler", function (event) {
      var input = event.target.value.toLowerCase();
      var currentFilters = _this.state.filters;

      var filteredItems = _this.filterData(fullDataset, currentFilters, input);

      _this.setState({
        input: input,
        filteredItems: filteredItems
      });
    });

    DegreeAnalyzer_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "keyPressHandler", function (event) {
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

      return external_react_default.a.createElement(Layout, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700",
        rel: "stylesheet"
      }), external_react_default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,600",
        rel: "stylesheet"
      }), external_react_default.a.createElement("title", null, "GES 2018")), external_react_default.a.createElement(Banner, null), external_react_default.a.createElement(Chart, {
        chartData: this.state.filteredItems
      }), external_react_default.a.createElement(Instructions, null, "Select the one or more schools to view."), external_react_default.a.createElement(SearchFilters, {
        addFilter: this.addFilterHandler,
        removeFilter: this.removeFilterHandler,
        filters: this.state.filters
      }), external_react_default.a.createElement(Instructions, null, "Use the search box to narrow down the results."), external_react_default.a.createElement(SearchBar, {
        changed: function changed(event) {
          return _this2.textChangedHandler(event);
        },
        keypress: function keypress(event) {
          return _this2.keyPressHandler(event);
        }
      }), external_react_default.a.createElement("div", {
        className: DegreeAnalyzer_module_default.a.ResultsTable
      }, external_react_default.a.createElement(Analyzer_ListHeaders_ListHeaders, null), external_react_default.a.createElement(Analyzer_ListItems_ListItems, {
        items: this.state.filteredItems
      })));
    }
  }]);

  return DegreeAnalyzer;
}(external_react_default.a.Component);

/* harmony default export */ var pages_DegreeAnalyzer = __webpack_exports__["default"] = (DegreeAnalyzer_DegreeAnalyzer);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ })
/******/ ]);