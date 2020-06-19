webpackHotUpdate("static\\development\\pages\\create-status.js",{

/***/ "./pages/create-status.js":
/*!********************************!*\
  !*** ./pages/create-status.js ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/AuthContext */ "./lib/AuthContext.js");




var _this = undefined,
    _jsxFileName = "C:\\mydailystatus\\pages\\create-status.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var CreateStatus = function CreateStatus() {
  _s();

  var auth = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_lib_AuthContext__WEBPACK_IMPORTED_MODULE_5__["AuthContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    status: 'bem',
    coords: {
      lat: null,
      "long": null
    }
  }),
      dados = _useState[0],
      setDados = _useState[1];

  var getMyLocation = function getMyLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        //console.log(position.coords)
        setDados(function (old) {
          return _objectSpread(_objectSpread({}, old), {}, {
            coords: {
              lat: position.coords.latitude,
              "long": position.coords.longitude
            }
          });
        });
      });
    }
  };

  var onStatusChange = function onStatusChange(evt) {
    var value = evt.target.value;
    setDados(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, {
        status: value
      });
    }); //console.log()
  };

  var save = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/api/save-status', dados);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function save() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 14
    }
  }, "Create Status"), __jsx("label", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 14
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 14
    }
  }, __jsx("input", {
    type: "radio",
    name: "status",
    value: "bem",
    onClick: onStatusChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }), "Estou bem e sem sintomas")), __jsx("label", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 14
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 14
    }
  }, __jsx("input", {
    type: "radio",
    name: "status",
    value: "gripe",
    onClick: onStatusChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }), "Estou com sintomas de  gripe/resfriado")), __jsx("label", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 14
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 14
    }
  }, __jsx("input", {
    type: "radio",
    name: "status",
    value: "covid",
    onClick: onStatusChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }), "Estou com sintomas de COVID")), "Sua posi\xE7\xE3o atual: ", JSON.stringify(dados), __jsx("button", {
    onClick: getMyLocation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 14
    }
  }, "Pegar a minha localia\xE7\xE3o"), __jsx("button", {
    onClick: save,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 14
    }
  }, "Salvar o meu status"), __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 14
    }
  }, JSON.stringify(auth)));
};

_s(CreateStatus, "FYSlnFIXreErbWy+UHvM3MIvLpg=");

_c = CreateStatus;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (CreateStatus);

var _c;

$RefreshReg$(_c, "CreateStatus");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUtc3RhdHVzLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZVN0YXR1cyIsImF1dGgiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJ1c2VTdGF0ZSIsInN0YXR1cyIsImNvb3JkcyIsImxhdCIsImRhZG9zIiwic2V0RGFkb3MiLCJnZXRNeUxvY2F0aW9uIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsIm9sZCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwib25TdGF0dXNDaGFuZ2UiLCJldnQiLCJ2YWx1ZSIsInRhcmdldCIsInNhdmUiLCJheGlvcyIsInBvc3QiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFJO0FBQUE7O0FBQ3JCLE1BQU1DLElBQUksR0FBR0Msd0RBQVUsQ0FBQ0MsNERBQUQsQ0FBdkI7O0FBRHFCLGtCQUVJQyxzREFBUSxDQUFDO0FBQzlCQyxVQUFNLEVBQUUsS0FEc0I7QUFFOUJDLFVBQU0sRUFDTjtBQUNJQyxTQUFHLEVBQUUsSUFEVDtBQUVJLGNBQU07QUFGVjtBQUg4QixHQUFELENBRlo7QUFBQSxNQUVkQyxLQUZjO0FBQUEsTUFFUEMsUUFGTzs7QUFXckIsTUFBTUMsYUFBYSxHQUFDLFNBQWRBLGFBQWMsR0FBSTtBQUNwQixRQUFHQyxTQUFTLENBQUNDLFdBQWIsRUFDQTtBQUNJRCxlQUFTLENBQUNDLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUF5QyxVQUFBQyxRQUFRLEVBQUU7QUFDL0M7QUFDQUwsZ0JBQVEsQ0FBQyxVQUFBTSxHQUFHLEVBQUU7QUFDVixpREFDT0EsR0FEUDtBQUVJVCxrQkFBTSxFQUFDO0FBQ0hDLGlCQUFHLEVBQUVPLFFBQVEsQ0FBQ1IsTUFBVCxDQUFnQlUsUUFEbEI7QUFFSCxzQkFBTUYsUUFBUSxDQUFDUixNQUFULENBQWdCVztBQUZuQjtBQUZYO0FBT0gsU0FSTyxDQUFSO0FBU0gsT0FYRDtBQVlIO0FBQ0osR0FoQkQ7O0FBaUJBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsR0FBRyxFQUFFO0FBQ3hCLFFBQU1DLEtBQUssR0FBR0QsR0FBRyxDQUFDRSxNQUFKLENBQVdELEtBQXpCO0FBQ0FYLFlBQVEsQ0FBQyxVQUFBTSxHQUFHLEVBQUU7QUFDViw2Q0FDT0EsR0FEUDtBQUVJVixjQUFNLEVBQUVlO0FBRlo7QUFJSCxLQUxPLENBQVIsQ0FGd0IsQ0FReEI7QUFDSCxHQVREOztBQVVBLE1BQU1FLElBQUk7QUFBQSxnTUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRkMsNENBQUssQ0FBQ0MsSUFBTixDQUFXLGtCQUFYLEVBQStCaEIsS0FBL0IsQ0FERTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBLG9CQUFKYyxJQUFJO0FBQUE7QUFBQTtBQUFBLEtBQVY7O0FBR0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFETCxFQUVLO0FBQU8sYUFBUyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU87QUFDRyxRQUFJLEVBQUMsT0FEUjtBQUVHLFFBQUksRUFBQyxRQUZSO0FBR0csU0FBSyxFQUFDLEtBSFQ7QUFJRyxXQUFPLEVBQUVKLGNBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQLDZCQURBLENBRkwsRUFTSztBQUFPLGFBQVMsRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPO0FBQ0ksUUFBSSxFQUFDLE9BRFQ7QUFFSSxRQUFJLEVBQUMsUUFGVDtBQUdJLFNBQUssRUFBQyxPQUhWO0FBSUksV0FBTyxFQUFFQSxjQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUCwyQ0FEQSxDQVRMLEVBZ0JLO0FBQU8sYUFBUyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU87QUFDRyxRQUFJLEVBQUMsT0FEUjtBQUVHLFFBQUksRUFBQyxRQUZSO0FBR0csU0FBSyxFQUFDLE9BSFQ7QUFJRyxXQUFPLEVBQUVBLGNBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQLGdDQURBLENBaEJMLCtCQXVCeUJPLElBQUksQ0FBQ0MsU0FBTCxDQUFlbEIsS0FBZixDQXZCekIsRUF3Qks7QUFBUSxXQUFPLEVBQUVFLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBeEJMLEVBeUJLO0FBQVEsV0FBTyxFQUFFWSxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQXpCTCxFQTBCSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1HLElBQUksQ0FBQ0MsU0FBTCxDQUFlekIsSUFBZixDQUFOLENBMUJMLENBREo7QUE4QkgsQ0F2RUQ7O0dBQU1ELFk7O0tBQUFBLFk7O0FBd0VTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY3JlYXRlLXN0YXR1cy5qcy5iYmEzNGM2NDc0YjRlNWU3YjdjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF1dGgwIGZyb20gJy4uL2xpYi9hdXRoMCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge0F1dGhDb250ZXh0fSBmcm9tICcuLi9saWIvQXV0aENvbnRleHQnXHJcblxyXG5jb25zdCBDcmVhdGVTdGF0dXMgPSAoKT0+e1xyXG4gICAgY29uc3QgYXV0aCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcbiAgICBjb25zdCBbZGFkb3MsIHNldERhZG9zXT0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHN0YXR1czogJ2JlbScsXHJcbiAgICAgICAgY29vcmRzOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGF0OiBudWxsLFxyXG4gICAgICAgICAgICBsb25nOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBnZXRNeUxvY2F0aW9uPSgpPT57XHJcbiAgICAgICAgaWYobmF2aWdhdG9yLmdlb2xvY2F0aW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbj0+e1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwb3NpdGlvbi5jb29yZHMpXHJcbiAgICAgICAgICAgICAgICBzZXREYWRvcyhvbGQ9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLm9sZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9uZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBvblN0YXR1c0NoYW5nZSA9IGV2dD0+e1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIHNldERhZG9zKG9sZD0+e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5vbGQsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHZhbHVlXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2F2ZT0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvc2F2ZS1zdGF0dXMnLCBkYWRvcylcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgPGgxPkNyZWF0ZSBTdGF0dXM8L2gxPlxyXG4gICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2snPlxyXG4gICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RhdHVzJyBcclxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nYmVtJyBcclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblN0YXR1c0NoYW5nZX0vPkVzdG91IGJlbSBlIHNlbSBzaW50b21hczwvbGFiZWw+XHJcbiAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2snPlxyXG4gICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdGF0dXMnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nZ3JpcGUnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblN0YXR1c0NoYW5nZX0vPkVzdG91IGNvbSBzaW50b21hcyBkZSAgZ3JpcGUvcmVzZnJpYWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayc+XHJcbiAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3JhZGlvJyBcclxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdGF0dXMnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPSdjb3ZpZCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdGF0dXNDaGFuZ2V9Lz5Fc3RvdSBjb20gc2ludG9tYXMgZGUgQ09WSUQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgIFN1YSBwb3Npw6fDo28gYXR1YWw6IHtKU09OLnN0cmluZ2lmeShkYWRvcyl9XHJcbiAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldE15TG9jYXRpb259PlBlZ2FyIGEgbWluaGEgbG9jYWxpYcOnw6NvPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmV9PlNhbHZhciBvIG1ldSBzdGF0dXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGF1dGgpfTwvcHJlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVN0YXR1c1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cmVxLCByZXN9KVxyXG57XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aDAuZ2V0U2Vzc2lvbihyZXEpXHJcbiAgICBpZihzZXNzaW9uKXtcclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczogXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpc0F1dGg6IHRydWUsXHJcbiAgICAgICAgICAgIHVzZXI6IHNlc3Npb24udXNlcixcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlzQXV0aDogZmFsc2UsXHJcbiAgICAgICAgICAgIHVzZXI6IHt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==