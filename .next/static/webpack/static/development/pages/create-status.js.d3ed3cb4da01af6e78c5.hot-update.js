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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);




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

  if (auth.isAuthReady && !auth.isAuth) {
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
  }

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
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 14
    }
  }, "Create Status"), __jsx("label", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 14
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 55,
      columnNumber: 21
    }
  }), "Estou bem e sem sintomas")), __jsx("label", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 14
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
      lineNumber: 62,
      columnNumber: 21
    }
  }), "Estou com sintomas de  gripe/resfriado")), __jsx("label", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 14
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
      lineNumber: 69,
      columnNumber: 21
    }
  }), "Estou com sintomas de COVID")), "Sua posi\xE7\xE3o atual: ", JSON.stringify(dados), __jsx("button", {
    onClick: getMyLocation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 14
    }
  }, "Pegar a minha localia\xE7\xE3o"), __jsx("button", {
    onClick: save,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 14
    }
  }, "Salvar o meu status"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUtc3RhdHVzLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZVN0YXR1cyIsImF1dGgiLCJ1c2VBdXRoIiwidXNlU3RhdGUiLCJzdGF0dXMiLCJjb29yZHMiLCJsYXQiLCJkYWRvcyIsInNldERhZG9zIiwiaXNBdXRoUmVhZHkiLCJpc0F1dGgiLCJyb3V0ZXIiLCJwdXNoIiwiZ2V0TXlMb2NhdGlvbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJvbGQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIm9uU3RhdHVzQ2hhbmdlIiwiZXZ0IiwidmFsdWUiLCJ0YXJnZXQiLCJzYXZlIiwiYXhpb3MiLCJwb3N0IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQUk7QUFBQTs7QUFDckIsTUFBTUMsSUFBSSxHQUFHQyxnRUFBTyxFQUFwQjs7QUFEcUIsa0JBRUlDLHNEQUFRLENBQUM7QUFDOUJDLFVBQU0sRUFBRSxLQURzQjtBQUU5QkMsVUFBTSxFQUNOO0FBQ0lDLFNBQUcsRUFBRSxJQURUO0FBRUksY0FBTTtBQUZWO0FBSDhCLEdBQUQsQ0FGWjtBQUFBLE1BRWRDLEtBRmM7QUFBQSxNQUVQQyxRQUZPOztBQVVyQixNQUFHUCxJQUFJLENBQUNRLFdBQUwsSUFBb0IsQ0FBQ1IsSUFBSSxDQUFDUyxNQUE3QixFQUFvQztBQUNoQ0Msc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDSDs7QUFDRCxNQUFNQyxhQUFhLEdBQUMsU0FBZEEsYUFBYyxHQUFJO0FBQ3BCLFFBQUdDLFNBQVMsQ0FBQ0MsV0FBYixFQUNBO0FBQ0lELGVBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsa0JBQXRCLENBQXlDLFVBQUFDLFFBQVEsRUFBRTtBQUMvQztBQUNBVCxnQkFBUSxDQUFDLFVBQUFVLEdBQUcsRUFBRTtBQUNWLGlEQUNPQSxHQURQO0FBRUliLGtCQUFNLEVBQUM7QUFDSEMsaUJBQUcsRUFBRVcsUUFBUSxDQUFDWixNQUFULENBQWdCYyxRQURsQjtBQUVILHNCQUFNRixRQUFRLENBQUNaLE1BQVQsQ0FBZ0JlO0FBRm5CO0FBRlg7QUFPSCxTQVJPLENBQVI7QUFTSCxPQVhEO0FBWUg7QUFDSixHQWhCRDs7QUFpQkEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxHQUFHLEVBQUU7QUFDeEIsUUFBTUMsS0FBSyxHQUFHRCxHQUFHLENBQUNFLE1BQUosQ0FBV0QsS0FBekI7QUFDQWYsWUFBUSxDQUFDLFVBQUFVLEdBQUcsRUFBRTtBQUNWLDZDQUNPQSxHQURQO0FBRUlkLGNBQU0sRUFBRW1CO0FBRlo7QUFJSCxLQUxPLENBQVIsQ0FGd0IsQ0FReEI7QUFDSCxHQVREOztBQVVBLE1BQU1FLElBQUk7QUFBQSxnTUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRkMsNENBQUssQ0FBQ0MsSUFBTixDQUFXLGtCQUFYLEVBQStCcEIsS0FBL0IsQ0FERTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBLG9CQUFKa0IsSUFBSTtBQUFBO0FBQUE7QUFBQSxLQUFWOztBQUdBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREwsRUFFSztBQUFPLGFBQVMsRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPO0FBQ0csUUFBSSxFQUFDLE9BRFI7QUFFRyxRQUFJLEVBQUMsUUFGUjtBQUdHLFNBQUssRUFBQyxLQUhUO0FBSUcsV0FBTyxFQUFFSixjQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUCw2QkFEQSxDQUZMLEVBU0s7QUFBTyxhQUFTLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTztBQUNJLFFBQUksRUFBQyxPQURUO0FBRUksUUFBSSxFQUFDLFFBRlQ7QUFHSSxTQUFLLEVBQUMsT0FIVjtBQUlJLFdBQU8sRUFBRUEsY0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVAsMkNBREEsQ0FUTCxFQWdCSztBQUFPLGFBQVMsRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPO0FBQ0csUUFBSSxFQUFDLE9BRFI7QUFFRyxRQUFJLEVBQUMsUUFGUjtBQUdHLFNBQUssRUFBQyxPQUhUO0FBSUcsV0FBTyxFQUFFQSxjQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUCxnQ0FEQSxDQWhCTCwrQkF1QnlCTyxJQUFJLENBQUNDLFNBQUwsQ0FBZXRCLEtBQWYsQ0F2QnpCLEVBd0JLO0FBQVEsV0FBTyxFQUFFTSxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQXhCTCxFQXlCSztBQUFRLFdBQU8sRUFBRVksSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkF6QkwsQ0FESjtBQTZCSCxDQXhFRDs7R0FBTXpCLFk7VUFDV0Usd0Q7OztLQURYRixZOztBQXlFU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNyZWF0ZS1zdGF0dXMuanMuZDNlZDNjYjRkYTAxYWY2ZTc4YzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBhdXRoMCBmcm9tICcuLi9saWIvYXV0aDAnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHt1c2VBdXRofSBmcm9tICcuLi9saWIvQXV0aENvbnRleHQnXHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBDcmVhdGVTdGF0dXMgPSAoKT0+e1xyXG4gICAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKVxyXG4gICAgY29uc3QgW2RhZG9zLCBzZXREYWRvc109IHVzZVN0YXRlKHtcclxuICAgICAgICBzdGF0dXM6ICdiZW0nLFxyXG4gICAgICAgIGNvb3JkczpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhdDogbnVsbCxcclxuICAgICAgICAgICAgbG9uZzogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBpZihhdXRoLmlzQXV0aFJlYWR5ICYmICFhdXRoLmlzQXV0aCl7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0TXlMb2NhdGlvbj0oKT0+e1xyXG4gICAgICAgIGlmKG5hdmlnYXRvci5nZW9sb2NhdGlvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb249PntcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocG9zaXRpb24uY29vcmRzKVxyXG4gICAgICAgICAgICAgICAgc2V0RGFkb3Mob2xkPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5vbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3Jkczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25TdGF0dXNDaGFuZ2UgPSBldnQ9PntcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWVcclxuICAgICAgICBzZXREYWRvcyhvbGQ9PntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4ub2xkLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB2YWx1ZVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2NvbnNvbGUubG9nKClcclxuICAgIH1cclxuICAgIGNvbnN0IHNhdmU9IGFzeW5jKCk9PntcclxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3NhdmUtc3RhdHVzJywgZGFkb3MpXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgIDxoMT5DcmVhdGUgU3RhdHVzPC9oMT5cclxuICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrJz5cclxuICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N0YXR1cycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9J2JlbScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdGF0dXNDaGFuZ2V9Lz5Fc3RvdSBiZW0gZSBzZW0gc2ludG9tYXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrJz5cclxuICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3JhZGlvJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RhdHVzJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9J2dyaXBlJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdGF0dXNDaGFuZ2V9Lz5Fc3RvdSBjb20gc2ludG9tYXMgZGUgIGdyaXBlL3Jlc2ZyaWFkbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2snPlxyXG4gICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RhdHVzJyBcclxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nY292aWQnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3RhdHVzQ2hhbmdlfS8+RXN0b3UgY29tIHNpbnRvbWFzIGRlIENPVklEPC9sYWJlbD5cclxuICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICBTdWEgcG9zacOnw6NvIGF0dWFsOiB7SlNPTi5zdHJpbmdpZnkoZGFkb3MpfVxyXG4gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRNeUxvY2F0aW9ufT5QZWdhciBhIG1pbmhhIGxvY2FsaWHDp8OjbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlfT5TYWx2YXIgbyBtZXUgc3RhdHVzPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlU3RhdHVzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtyZXEsIHJlc30pXHJcbntcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoMC5nZXRTZXNzaW9uKHJlcSlcclxuICAgIGlmKHNlc3Npb24pe1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlzQXV0aDogdHJ1ZSxcclxuICAgICAgICAgICAgdXNlcjogc2Vzc2lvbi51c2VyLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXNBdXRoOiBmYWxzZSxcclxuICAgICAgICAgICAgdXNlcjoge31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9