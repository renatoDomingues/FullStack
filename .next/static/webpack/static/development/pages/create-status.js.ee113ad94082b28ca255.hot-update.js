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
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 14
    }
  }, "Create Status"), __jsx("label", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 14
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 56,
      columnNumber: 21
    }
  }), "Estou bem e sem sintomas")), __jsx("label", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 14
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
      lineNumber: 63,
      columnNumber: 21
    }
  }), "Estou com sintomas de  gripe/resfriado")), __jsx("label", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 14
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 70,
      columnNumber: 21
    }
  }), "Estou com sintomas de COVID")), "Sua posi\xE7\xE3o atual: ", JSON.stringify(dados), __jsx("button", {
    onClick: getMyLocation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 14
    }
  }, "Pegar a minha localia\xE7\xE3o"), __jsx("button", {
    onClick: save,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 14
    }
  }, "Salvar o meu status"), __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUtc3RhdHVzLmpzIl0sIm5hbWVzIjpbIkNyZWF0ZVN0YXR1cyIsImF1dGgiLCJ1c2VBdXRoIiwidXNlU3RhdGUiLCJzdGF0dXMiLCJjb29yZHMiLCJsYXQiLCJkYWRvcyIsInNldERhZG9zIiwiaXNBdXRoUmVhZHkiLCJpc0F1dGgiLCJyb3V0ZXIiLCJwdXNoIiwiZ2V0TXlMb2NhdGlvbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJvbGQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIm9uU3RhdHVzQ2hhbmdlIiwiZXZ0IiwidmFsdWUiLCJ0YXJnZXQiLCJzYXZlIiwiYXhpb3MiLCJwb3N0IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBSTtBQUFBOztBQUNyQixNQUFNQyxJQUFJLEdBQUdDLGdFQUFPLEVBQXBCOztBQURxQixrQkFFSUMsc0RBQVEsQ0FBQztBQUM5QkMsVUFBTSxFQUFFLEtBRHNCO0FBRTlCQyxVQUFNLEVBQ047QUFDSUMsU0FBRyxFQUFFLElBRFQ7QUFFSSxjQUFNO0FBRlY7QUFIOEIsR0FBRCxDQUZaO0FBQUEsTUFFZEMsS0FGYztBQUFBLE1BRVBDLFFBRk87O0FBVXJCLE1BQUdQLElBQUksQ0FBQ1EsV0FBTCxJQUFvQixDQUFDUixJQUFJLENBQUNTLE1BQTdCLEVBQW9DO0FBQ2hDQyxzREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNIOztBQUNELE1BQU1DLGFBQWEsR0FBQyxTQUFkQSxhQUFjLEdBQUk7QUFDcEIsUUFBR0MsU0FBUyxDQUFDQyxXQUFiLEVBQ0E7QUFDSUQsZUFBUyxDQUFDQyxXQUFWLENBQXNCQyxrQkFBdEIsQ0FBeUMs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bG9wbWVudFxccGFnZXNcXGNyZWF0ZS1zdGF0dXMuanMuZWUxMTNhZDk0MDgyYjI4Y2EyNTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBhdXRoMCBmcm9tICcuLi9saWIvYXV0aDAnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHt1c2VBdXRofSBmcm9tICcuLi9saWIvQXV0aENvbnRleHQnXHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgcm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgQ3JlYXRlU3RhdHVzID0gKCk9PntcclxuICAgIGNvbnN0IGF1dGggPSB1c2VBdXRoKClcclxuICAgIGNvbnN0IFtkYWRvcywgc2V0RGFkb3NdPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgc3RhdHVzOiAnYmVtJyxcclxuICAgICAgICBjb29yZHM6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYXQ6IG51bGwsXHJcbiAgICAgICAgICAgIGxvbmc6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgaWYoYXV0aC5pc0F1dGhSZWFkeSAmJiAhYXV0aC5pc0F1dGgpe1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgIH1cclxuICAgIGNvbnN0IGdldE15TG9jYXRpb249KCk9PntcclxuICAgICAgICBpZihuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHBvc2l0aW9uPT57XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHBvc2l0aW9uLmNvb3JkcylcclxuICAgICAgICAgICAgICAgIHNldERhZG9zKG9sZD0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ub2xkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZHM6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb25nOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG9uU3RhdHVzQ2hhbmdlID0gZXZ0PT57XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgc2V0RGFkb3Mob2xkPT57XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLm9sZCxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdmFsdWVcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygpXHJcbiAgICB9XHJcbiAgICBjb25zdCBzYXZlPSBhc3luYygpPT57XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9zYXZlLXN0YXR1cycsIGRhZG9zKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICA8aDE+Q3JlYXRlIFN0YXR1czwvaDE+XHJcbiAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayc+XHJcbiAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3JhZGlvJyBcclxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdGF0dXMnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPSdiZW0nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3RhdHVzQ2hhbmdlfS8+RXN0b3UgYmVtIGUgc2VtIHNpbnRvbWFzPC9sYWJlbD5cclxuICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayc+XHJcbiAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N0YXR1cycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPSdncmlwZScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3RhdHVzQ2hhbmdlfS8+RXN0b3UgY29tIHNpbnRvbWFzIGRlICBncmlwZS9yZXNmcmlhZG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrJz5cclxuICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N0YXR1cycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9J2NvdmlkJyBcclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblN0YXR1c0NoYW5nZX0vPkVzdG91IGNvbSBzaW50b21hcyBkZSBDT1ZJRDwvbGFiZWw+XHJcbiAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgU3VhIHBvc2nDp8OjbyBhdHVhbDoge0pTT04uc3RyaW5naWZ5KGRhZG9zKX1cclxuICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0TXlMb2NhdGlvbn0+UGVnYXIgYSBtaW5oYSBsb2NhbGlhw6fDo288L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZX0+U2FsdmFyIG8gbWV1IHN0YXR1czwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoYXV0aCl9PC9wcmU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlU3RhdHVzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtyZXEsIHJlc30pXHJcbntcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoMC5nZXRTZXNzaW9uKHJlcSlcclxuICAgIGlmKHNlc3Npb24pe1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlzQXV0aDogdHJ1ZSxcclxuICAgICAgICAgICAgdXNlcjogc2Vzc2lvbi51c2VyLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXNBdXRoOiBmYWxzZSxcclxuICAgICAgICAgICAgdXNlcjoge31cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9