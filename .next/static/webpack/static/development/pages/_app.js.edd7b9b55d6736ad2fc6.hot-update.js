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
  }, "Sobre"), __jsx(NavLink, {
    href: "/cadastro",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Cadastro"), __jsx(NavLink, {
    href: "/entrar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "Entrar"), __jsx(NavLink, {
    href: "/api/logout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "Sair"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZMaW5rIiwiaHJlZiIsImNoaWxkcmVuIiwiTmF2QmFyIiwiYXV0aCIsInVzZUF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUMsU0FBUkEsT0FBUSxPQUNkO0FBQUEsTUFEZ0JDLElBQ2hCLFFBRGdCQSxJQUNoQjtBQUFBLE1BRHNCQyxRQUN0QixRQURzQkEsUUFDdEI7QUFDSSxTQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVELElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNPO0FBQUcsYUFBUyxFQUFDLHdDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdURDLFFBQXZELENBRFAsQ0FESjtBQUtILENBUEQ7O0tBQU1GLE87O0FBUU4sSUFBTUcsTUFBTSxHQUFDLFNBQVBBLE1BQU8sR0FDYjtBQUFBOztBQUNJLE1BQU1DLElBQUksR0FBR0MsZ0VBQU8sRUFBcEI7QUFDQSxTQUNJO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBUyxRQUFJLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRSxNQUFDLE9BQUQ7QUFBUyxRQUFJLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBR0UsTUFBQyxPQUFEO0FBQVMsUUFBSSxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLEVBSUUsTUFBQyxPQUFEO0FBQVMsUUFBSSxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLENBREo7QUFRSCxDQVhEOztHQUFNRixNO1VBRVdFLHdEOzs7TUFGWEYsTTtBQVlTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5lZGQ3YjliNTVkNjczNmFkMmZjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7dXNlQXV0aH0gZnJvbSAnLi4vbGliL0F1dGhDb250ZXh0J1xyXG5cclxuY29uc3QgTmF2TGluaz0oe2hyZWYsIGNoaWxkcmVufSk9PlxyXG57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncC0yIGhvdmVyOnVuZGVybGluZSBob3Zlcjp0ZXh0LXJlZC04MDAnPntjaGlsZHJlbn08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59XHJcbmNvbnN0IE5hdkJhcj0oKT0+XHJcbntcclxuICAgIGNvbnN0IGF1dGggPSB1c2VBdXRoKClcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS01MDAgcHktNCB0ZXh0LWNlbnRlcic+IFxyXG4gICAgICAgICAgPE5hdkxpbmsgaHJlZj0nL3NvYnJlJz5Tb2JyZTwvTmF2TGluaz5cclxuICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy9jYWRhc3Rybyc+Q2FkYXN0cm88L05hdkxpbms+XHJcbiAgICAgICAgICA8TmF2TGluayBocmVmPScvZW50cmFyJz5FbnRyYXI8L05hdkxpbms+IFxyXG4gICAgICAgICAgPE5hdkxpbmsgaHJlZj0nL2FwaS9sb2dvdXQnPlNhaXI8L05hdkxpbms+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhciJdLCJzb3VyY2VSb290IjoiIn0=