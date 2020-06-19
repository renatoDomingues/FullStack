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

  var auth = Object(_lib_AuthContext__WEBPACK_IMPORTED_MODULE_5__["useAuth"])();

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

_s(CreateStatus, "CahXchdAeYTaolwPTna62LgjPzU=", false, function () {
  return [_lib_AuthContext__WEBPACK_IMPORTED_MODULE_5__["useAuth"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUtc3RhdHVzLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZVN0YXR1cyIsImF1dGgiLCJ1c2VBdXRoIiwidXNlU3RhdGUiLCJzdGF0dXMiLCJjb29yZHMiLCJsYXQiLCJkYWRvcyIsInNldERhZG9zIiwiZ2V0TXlMb2NhdGlvbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJvbGQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIm9uU3RhdHVzQ2hhbmdlIiwiZXZ0IiwidmFsdWUiLCJ0YXJnZXQiLCJzYXZlIiwiYXhpb3MiLCJwb3N0IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBSTtBQUFBOztBQUNyQixNQUFNQyxJQUFJLEdBQUdDLGdFQUFPLEVBQXBCOztBQURxQixrQkFFSUMsc0RBQVEsQ0FBQztBQUM5QkMsVUFBTSxFQUFFLEtBRHNCO0FBRTlCQyxVQUFNLEVBQ047QUFDSUMsU0FBRyxFQUFFLElBRFQ7QUFFSSxjQUFNO0FBRlY7QUFIOEIsR0FBRCxDQUZaO0FBQUEsTUFFZEMsS0FGYztBQUFBLE1BRVBDLFFBRk87O0FBV3JCLE1BQU1DLGFBQWEsR0FBQyxTQUFkQSxhQUFjLEdBQUk7QUFDcEIsUUFBR0MsU0FBUyxDQUFDQyxXQUFiLEVBQ0E7QUFDSUQsZUFBUyxDQUFDQyxXQUFWLENBQXNCQyxrQkFBdEIsQ0FBeUMsVUFBQUMsUUFBUSxFQUFFO0FBQy9DO0FBQ0FMLGdCQUFRLENBQUMsVUFBQU0sR0FBRyxFQUFFO0FBQ1YsaURBQ09BLEdBRFA7QUFFSVQsa0JBQU0sRUFBQztBQUNIQyxpQkFBRyxFQUFFTyxRQUFRLENBQUNSLE1BQVQsQ0FBZ0JVLFFBRGxCO0FBRUgsc0JBQU1GLFFBQVEsQ0FBQ1IsTUFBVCxDQUFnQlc7QUFGbkI7QUFGWDtBQU9ILFNBUk8sQ0FBUjtBQVNILE9BWEQ7QUFZSDtBQUNKLEdBaEJEOztBQWlCQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLEdBQUcsRUFBRTtBQUN4QixRQUFNQyxLQUFLLEdBQUdELEdBQUcsQ0FBQ0UsTUFBSixDQUFXRCxLQUF6QjtBQUNBWCxZQUFRLENBQUMsVUFBQU0sR0FBRyxFQUFFO0FBQ1YsNkNBQ09BLEdBRFA7QUFFSVYsY0FBTSxFQUFFZTtBQUZaO0FBSUgsS0FMTyxDQUFSLENBRndCLENBUXhCO0FBQ0gsR0FURDs7QUFVQSxNQUFNRSxJQUFJO0FBQUEsZ01BQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0ZDLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxrQkFBWCxFQUErQmhCLEtBQS9CLENBREU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQSxvQkFBSmMsSUFBSTtBQUFBO0FBQUE7QUFBQSxLQUFWOztBQUdBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREwsRUFFSztBQUFPLGFBQVMsRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPO0FBQ0csUUFBSSxFQUFDLE9BRFI7QUFFRyxRQUFJLEVBQUMsUUFGUjtBQUdHLFNBQUssRUFBQyxLQUhUO0FBSUcsV0FBTyxFQUFFSixjQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUCw2QkFEQSxDQUZMLEVBU0s7QUFBTyxhQUFTLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTztBQUNJLFFBQUksRUFBQyxPQURUO0FBRUksUUFBSSxFQUFDLFFBRlQ7QUFHSSxTQUFLLEVBQUMsT0FIVjtBQUlJLFdBQU8sRUFBRUEsY0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVAsMkNBREEsQ0FUTCxFQWdCSztBQUFPLGFBQVMsRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPO0FBQ0csUUFBSSxFQUFDLE9BRFI7QUFFRyxRQUFJLEVBQUMsUUFGUjtBQUdHLFNBQUssRUFBQyxPQUhUO0FBSUcsV0FBTyxFQUFFQSxjQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUCxnQ0FEQSxDQWhCTCwrQkF1QnlCTyxJQUFJLENBQUNDLFNBQUwsQ0FBZWxCLEtBQWYsQ0F2QnpCLEVBd0JLO0FBQVEsV0FBTyxFQUFFRSxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQXhCTCxFQXlCSztBQUFRLFdBQU8sRUFBRVksSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkF6QkwsRUEwQks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNRyxJQUFJLENBQUNDLFNBQUwsQ0FBZXhCLElBQWYsQ0FBTixDQTFCTCxDQURKO0FBOEJILENBdkVEOztHQUFNRCxZO1VBQ1dFLHdEOzs7S0FEWEYsWTs7QUF3RVNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjcmVhdGUtc3RhdHVzLmpzLjNkMDM5NWZjYzI5MTQ5NTJiYzFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vbGliL2F1dGgwJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7dXNlQXV0aH0gZnJvbSAnLi4vbGliL0F1dGhDb250ZXh0J1xyXG5cclxuY29uc3QgQ3JlYXRlU3RhdHVzID0gKCk9PntcclxuICAgIGNvbnN0IGF1dGggPSB1c2VBdXRoKClcclxuICAgIGNvbnN0IFtkYWRvcywgc2V0RGFkb3NdPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgc3RhdHVzOiAnYmVtJyxcclxuICAgICAgICBjb29yZHM6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYXQ6IG51bGwsXHJcbiAgICAgICAgICAgIGxvbmc6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGdldE15TG9jYXRpb249KCk9PntcclxuICAgICAgICBpZihuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHBvc2l0aW9uPT57XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHBvc2l0aW9uLmNvb3JkcylcclxuICAgICAgICAgICAgICAgIHNldERhZG9zKG9sZD0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ub2xkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZHM6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb25nOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG9uU3RhdHVzQ2hhbmdlID0gZXZ0PT57XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgc2V0RGFkb3Mob2xkPT57XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLm9sZCxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdmFsdWVcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygpXHJcbiAgICB9XHJcbiAgICBjb25zdCBzYXZlPSBhc3luYygpPT57XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9zYXZlLXN0YXR1cycsIGRhZG9zKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICA8aDE+Q3JlYXRlIFN0YXR1czwvaDE+XHJcbiAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayc+XHJcbiAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3JhZGlvJyBcclxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdGF0dXMnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPSdiZW0nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3RhdHVzQ2hhbmdlfS8+RXN0b3UgYmVtIGUgc2VtIHNpbnRvbWFzPC9sYWJlbD5cclxuICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayc+XHJcbiAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N0YXR1cycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPSdncmlwZScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3RhdHVzQ2hhbmdlfS8+RXN0b3UgY29tIHNpbnRvbWFzIGRlICBncmlwZS9yZXNmcmlhZG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrJz5cclxuICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N0YXR1cycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9J2NvdmlkJyBcclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblN0YXR1c0NoYW5nZX0vPkVzdG91IGNvbSBzaW50b21hcyBkZSBDT1ZJRDwvbGFiZWw+XHJcbiAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgU3VhIHBvc2nDp8OjbyBhdHVhbDoge0pTT04uc3RyaW5naWZ5KGRhZG9zKX1cclxuICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0TXlMb2NhdGlvbn0+UGVnYXIgYSBtaW5oYSBsb2NhbGlhw6fDo288L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZX0+U2FsdmFyIG8gbWV1IHN0YXR1czwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoYXV0aCl9PC9wcmU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlU3RhdHVzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtyZXEsIHJlc30pXHJcbntcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoMC5nZXRTZXNzaW9uKHJlcSlcclxuICAgIGlmKHNlc3Npb24pe1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlzQXV0aDogdHJ1ZSxcclxuICAgICAgICAgICAgdXNlcjogc2Vzc2lvbi51c2VyLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXNBdXRoOiBmYWxzZSxcclxuICAgICAgICAgICAgdXNlcjoge31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9