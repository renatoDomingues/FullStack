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
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();
var AuthProvider = function AuthProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isAuthReady = _useState2[0],
      setAuthReady = _useState2[1];

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
                setAuthReady(true);

              case 8:
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
      user: user,
      isAuthReady: isAuthReady,
      isAuth: !user.error
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, children);
};

_s(AuthProvider, "tPKoW0OyPVmS2NkZNtQqJ/B6gBg=");

_c = AuthProvider;
var useAuth = function useAuth() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(AuthContext);
};

_s2(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvQXV0aENvbnRleHQuanMiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiaXNBdXRoUmVhZHkiLCJzZXRBdXRoUmVhZHkiLCJ1c2VFZmZlY3QiLCJnZXRNZSIsImZldGNoIiwicmVzIiwianNvbiIsImF1dGhVc2VyIiwiaXNBdXRoIiwiZXJyb3IiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVPLElBQU1BLFdBQVcsR0FBR0MsMkRBQWEsRUFBakM7QUFDQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFBQSxrQkFDaEJDLHNEQUFRLENBQUMsRUFBRCxDQURRO0FBQUEsTUFDakNDLElBRGlDO0FBQUEsTUFDM0JDLE9BRDJCOztBQUFBLG1CQUVKRixzREFBUSxDQUFDLEtBQUQsQ0FGSjtBQUFBLE1BRWpDRyxXQUZpQztBQUFBLE1BRXBCQyxZQUZvQjs7QUFHeENDLHlEQUFTLENBQUUsWUFBTTtBQUNiLFFBQU1DLEtBQUs7QUFBQSxtTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNRQyx1REFBSyxDQUFDLFNBQUQsQ0FEYjs7QUFBQTtBQUNKQyxtQkFESTtBQUFBO0FBQUEsdUJBRWFBLEdBQUcsQ0FBQ0MsSUFBSixFQUZiOztBQUFBO0FBRUpDLHdCQUZJO0FBR1ZSLHVCQUFPLENBQUNRLFFBQUQsQ0FBUDtBQUNBTiw0QkFBWSxDQUFDLElBQUQsQ0FBWjs7QUFKVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFMRSxLQUFLO0FBQUE7QUFBQTtBQUFBLE9BQVg7O0FBTUFBLFNBQUs7QUFDUixHQVJRLEVBUU4sRUFSTSxDQUFUO0FBU0EsU0FDSSxNQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFDTCxVQUFJLEVBQUpBLElBQUQ7QUFBT0UsaUJBQVcsRUFBWEEsV0FBUDtBQUFvQlEsWUFBTSxFQUFFLENBQUNWLElBQUksQ0FBQ1c7QUFBbEMsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHYixRQURILENBREo7QUFLSCxDQWpCTTs7R0FBTUQsWTs7S0FBQUEsWTtBQWtCTixJQUFNZSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3pCLFNBQU9DLHdEQUFVLENBQUNsQixXQUFELENBQWpCO0FBQ0gsQ0FGTTs7SUFBTWlCLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNyZWF0ZS1zdGF0dXMuanMuZDQzZTIxYzM1YTY3YjNiZWFhMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSlcclxuICAgIGNvbnN0IFtpc0F1dGhSZWFkeSwgc2V0QXV0aFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ2V0TWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL21lJylcclxuICAgICAgICAgICAgY29uc3QgYXV0aFVzZXIgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgICAgIHNldFVzZXIoYXV0aFVzZXIpXHJcbiAgICAgICAgICAgIHNldEF1dGhSZWFkeSh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRNZSgpXHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3t1c2VyLCBpc0F1dGhSZWFkeSwgaXNBdXRoOiAhdXNlci5lcnJvcn19PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=