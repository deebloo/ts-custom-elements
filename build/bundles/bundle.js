var LsMapComponent =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.drawGeoFence = drawGeoFence;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HTMLCustomElement = exports.HTMLCustomElement = function (_HTMLElement) {
  _inherits(HTMLCustomElement, _HTMLElement);

  function HTMLCustomElement(_) {
    var _this, _ret;

    _classCallCheck(this, HTMLCustomElement);

    return _ret = ((_ = (_this = _possibleConstructorReturn(this, (HTMLCustomElement.__proto__ || Object.getPrototypeOf(HTMLCustomElement)).call(this, _)), _this)).init(), _), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HTMLCustomElement, [{
    key: "init",
    value: function init() {/* override as you like */}
  }]);

  return HTMLCustomElement;
}(HTMLElement);

function drawGeoFence(map, fence) {
  var coords = fence.coordinates.map(function (point) {
    return new google.maps.LatLng(point.latitude, point.longitude);
  });

  var common = {
    geofenceid: fence.geofenceid,
    title: fence.geofencename,
    description: fence.description,
    prompts: fence.prompts,
    ispublished: fence.ispublished,
    centerlat: fence.centerlat,
    centerlon: fence.centerlon,
    edited: false,
    fillColor: "#43a1cc",
    fillOpacity: 0.25,
    strokeColor: "#000000",
    strokeOpacity: 1,
    strokeWeight: 1
  };

  var place = void 0;

  if (fence.geofencetypeid === '0') {
    place = new google.maps.Circle(Object.assign({}, common, {
      center: coords[0],
      radius: parseFloat(fence.radius)
    }));
  } else {
    place = new google.maps.Polygon(Object.assign({}, common, {
      paths: coords,
      strokeColor: "#000000"
    }));
  }

  place.setMap(map);
}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LsMap = function (_HTMLCustomElement) {
  _inherits(LsMap, _HTMLCustomElement);

  function LsMap() {
    _classCallCheck(this, LsMap);

    return _possibleConstructorReturn(this, (LsMap.__proto__ || Object.getPrototypeOf(LsMap)).apply(this, arguments));
  }

  _createClass(LsMap, [{
    key: 'init',
    value: function init() {
      this.style.display = 'block';
      this.style.height = (this.getAttribute('height') || 400) + 'px';
      this.style.width = (this.getAttribute('width') || 400) + 'px';
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.map = new google.maps.Map(this, {
        zoom: 14,
        center: { lat: -25.363, lng: 131.044 }
      });

      this.drawingManager = new google.maps.drawing.DrawingManager({
        drawingControl: false,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_RIGHT,
          drawingModes: [google.maps.drawing.OverlayType.POLYGON]
        }
      });

      this.drawingManager.setMap(this.map);
    }
  }, {
    key: 'organization',
    set: function set(org) {
      this._organization = org;

      this.map.setCenter(new google.maps.LatLng(org.latitude, org.longitude));
    },
    get: function get() {
      return this._organization;
    }
  }, {
    key: 'places',
    set: function set(places) {
      var _this2 = this;

      this._places = places;

      this._places.forEach(function (fence) {
        return (0, _util.drawGeoFence)(_this2.map, fence);
      });
    },
    get: function get() {
      return this._places;
    }
  }]);

  return LsMap;
}(_util.HTMLCustomElement);

customElements.define('ls-map', LsMap);

/***/ }
/******/ ]);