webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/AuthContext */ "./lib/AuthContext.js");
var _this = undefined,
    _jsxFileName = "C:\\mydailystatus\\components\\NavBar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var NavLink = function NavLink(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "p-2 hover:underline hover:text-red-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 16
    }
  }, children));
};

_c = NavLink;

var NavBar = function NavBar() {
  _s();

  var auth = Object(_lib_AuthContext__WEBPACK_IMPORTED_MODULE_2__["useAuth"])();
  return __jsx("div", {
    className: "bg-gray-500 py-4 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(NavLink, {
    href: "/sobre",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Sobre"), !auth.isAuth && __jsx(NavLink, {
    href: "/cadastro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 28
    }
  }, "Cadastro"), !auth.isAuth && __jsx(NavLink, {
    href: "/entrar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 28
    }
  }, "Entrar"), auth.isAuth && __jsx(NavLink, {
    href: "/api/logout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 27
    }
  }, auth.user.given_name, " Sair"));
};

_s(NavBar, "YuJWYXaKIY31b1y7U6yy3IXSxQA=", false, function () {
  return [_lib_AuthContext__WEBPACK_IMPORTED_MODULE_2__["useAuth"]];
});

_c2 = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c, _c2;

$RefreshReg$(_c, "NavLink");
$RefreshReg$(_c2, "NavBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZMaW5rIiwiaHJlZiIsImNoaWxkcmVuIiwiTmF2QmFyIiwiYXV0aCIsInVzZUF1dGgiLCJpc0F1dGgiLCJ1c2VyIiwiZ2l2ZW5fbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBQyxTQUFSQSxPQUFRLE9BQ2Q7QUFBQSxNQURnQkMsSUFDaEIsUUFEZ0JBLElBQ2hCO0FBQUEsTUFEc0JDLFFBQ3RCLFFBRHNCQSxRQUN0QjtBQUNJLFNBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUQsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ087QUFBRyxhQUFTLEVBQUMsd0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1REMsUUFBdkQsQ0FEUCxDQURKO0FBS0gsQ0FQRDs7S0FBTUYsTzs7QUFRTixJQUFNRyxNQUFNLEdBQUMsU0FBUEEsTUFBTyxHQUNiO0FBQUE7O0FBQ0ksTUFBTUMsSUFBSSxHQUFHQyxnRUFBTyxFQUFwQjtBQUNBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFTLFFBQUksRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHLENBQUNELElBQUksQ0FBQ0UsTUFBTixJQUFnQixNQUFDLE9BQUQ7QUFBUyxRQUFJLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZuQixFQUdHLENBQUNGLElBQUksQ0FBQ0UsTUFBTixJQUFnQixNQUFDLE9BQUQ7QUFBUyxRQUFJLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSG5CLEVBSUdGLElBQUksQ0FBQ0UsTUFBTCxJQUFlLE1BQUMsT0FBRDtBQUFTLFFBQUksRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkJGLElBQUksQ0FBQ0csSUFBTCxDQUFVQyxVQUF2QyxVQUpsQixDQURKO0FBUUgsQ0FYRDs7R0FBTUwsTTtVQUVXRSx3RDs7O01BRlhGLE07QUFZU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNDU1YjBhNTM1ZDg4NGMwNGZhZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge3VzZUF1dGh9IGZyb20gJy4uL2xpYi9BdXRoQ29udGV4dCdcclxuXHJcbmNvbnN0IE5hdkxpbms9KHtocmVmLCBjaGlsZHJlbn0pPT5cclxue1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3AtMiBob3Zlcjp1bmRlcmxpbmUgaG92ZXI6dGV4dC1yZWQtODAwJz57Y2hpbGRyZW59PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIClcclxufVxyXG5jb25zdCBOYXZCYXI9KCk9PlxyXG57XHJcbiAgICBjb25zdCBhdXRoID0gdXNlQXV0aCgpXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWdyYXktNTAwIHB5LTQgdGV4dC1jZW50ZXInPiBcclxuICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy9zb2JyZSc+U29icmU8L05hdkxpbms+XHJcbiAgICAgICAgICB7IWF1dGguaXNBdXRoICYmIDxOYXZMaW5rIGhyZWY9Jy9jYWRhc3Rybyc+Q2FkYXN0cm88L05hdkxpbms+fVxyXG4gICAgICAgICAgeyFhdXRoLmlzQXV0aCAmJiA8TmF2TGluayBocmVmPScvZW50cmFyJz5FbnRyYXI8L05hdkxpbms+fSBcclxuICAgICAgICAgIHthdXRoLmlzQXV0aCAmJiA8TmF2TGluayBocmVmPScvYXBpL2xvZ291dCc+e2F1dGgudXNlci5naXZlbl9uYW1lfSBTYWlyPC9OYXZMaW5rPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXIiXSwic291cmNlUm9vdCI6IiJ9