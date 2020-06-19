webpackHotUpdate("static\\development\\pages\\create-status.js",{

/***/ "./lib/AuthContext.js":
/*!****************************!*\
  !*** ./lib/AuthContext.js ***!
  \****************************/
/*! exports provided: AuthContext, AuthProvider, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);



var _this = undefined,
    _jsxFileName = "C:\\mydailystatus\\lib\\AuthContext.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();
var AuthProvider = function AuthProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      user = _useState[0],
      setUser = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getMe = /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, authUser;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()('/api/me');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                authUser = _context.sent;
                setUser(authUser);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getMe() {
        return _ref2.apply(this, arguments);
      };
    }();

    getMe();
  }, []);
  return __jsx(AuthContext.Provider, {
    value: {
      user: user
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, children);
};

_s(AuthProvider, "l0nCqodPWuiGgcnCHidP90F0Gls=");

_c = AuthProvider;
var useAuth = function useAuth() {
  return react__WEBPACK_IMPORTED_MODULE_2__["useContext"];
};

var _c;

$RefreshReg$(_c, "AuthProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvQXV0aENvbnRleHQuanMiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwidXNlRWZmZWN0IiwiZ2V0TWUiLCJmZXRjaCIsInJlcyIsImpzb24iLCJhdXRoVXNlciIsInVzZUF1dGgiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUdDLDJEQUFhLEVBQWpDO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBZ0I7QUFBQTs7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7O0FBQUEsa0JBQ2hCQyxzREFBUSxDQUFDLEVBQUQsQ0FEUTtBQUFBLE1BQ2pDQyxJQURpQztBQUFBLE1BQzNCQyxPQUQyQjs7QUFFeENDLHlEQUFTLENBQUUsWUFBTTtBQUNiLFFBQU1DLEtBQUs7QUFBQSxtTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNRQyx1REFBSyxDQUFDLFNBQUQsQ0FEYjs7QUFBQTtBQUNKQyxtQkFESTtBQUFBO0FBQUEsdUJBRWFBLEdBQUcsQ0FBQ0MsSUFBSixFQUZiOztBQUFBO0FBRUpDLHdCQUZJO0FBR1ZOLHVCQUFPLENBQUNNLFFBQUQsQ0FBUDs7QUFIVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFMSixLQUFLO0FBQUE7QUFBQTtBQUFBLE9BQVg7O0FBS0FBLFNBQUs7QUFDUixHQVBRLEVBT04sRUFQTSxDQUFUO0FBUUEsU0FDSSxNQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFDSCxVQUFJLEVBQUpBO0FBQUQsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixRQURILENBREo7QUFLSCxDQWZNOztHQUFNRCxZOztLQUFBQSxZO0FBZ0JOLElBQU1XLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDekIsU0FBT0MsZ0RBQVA7QUFDSCxDQUZNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjcmVhdGUtc3RhdHVzLmpzLmVmZmZkOGQ1NGVkYjY4MzdkOWMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe30pXHJcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgICAgICBjb25zdCBnZXRNZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvbWUnKVxyXG4gICAgICAgICAgICBjb25zdCBhdXRoVXNlciA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICAgICAgc2V0VXNlcihhdXRoVXNlcilcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0TWUoKVxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7dXNlcn19PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==