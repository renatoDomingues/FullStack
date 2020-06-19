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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdkJhci5qcyJdLCJuYW1lcyI6WyJOYXZMaW5rIiwiaHJlZiIsImNoaWxkcmVuIiwiTmF2QmFyIiwiYXV0aCIsInVzZUF1dGgiLCJpc0F1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUMsU0FBUkEsT0FBUSxPQUNkO0FBQUEsTUFEZ0JDLElBQ2hCLFFBRGdCQSxJQUNoQjtBQUFBLE1BRHNCQyxRQUN0QixRQURzQkEsUUFDdEI7QUFDSSxTQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVELElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNPO0FBQUcsYUFBUyxFQUFDLHdDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdURDLFFBQXZELENBRFAsQ0FESjtBQUtILENBUEQ7O0tBQU1GLE87O0FBUU4sSUFBTUcsTUFBTSxHQUFDLFNBQVBBLE1BQU8sR0FDYjtBQUFBOztBQUNJLE1BQU1DLElBQUksR0FBR0MsZ0VBQU8sRUFBcEI7QUFDQSxTQUNJO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBUyxRQUFJLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRyxDQUFDRCxJQUFJLENBQUNFLE1BQU4sSUFBZ0IsTUFBQyxPQUFEO0FBQVMsUUFBSSxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGbkIsRUFHRSxNQUFDLE9BQUQ7QUFBUyxRQUFJLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsRUFJRSxNQUFDLE9BQUQ7QUFBUyxRQUFJLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsQ0FESjtBQVFILENBWEQ7O0dBQU1ILE07VUFFV0Usd0Q7OztNQUZYRixNO0FBWVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjhjMzhjNDA0NTgxM2MyMzk2YTk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHt1c2VBdXRofSBmcm9tICcuLi9saWIvQXV0aENvbnRleHQnXHJcblxyXG5jb25zdCBOYXZMaW5rPSh7aHJlZiwgY2hpbGRyZW59KT0+XHJcbntcclxuICAgIHJldHVybihcclxuICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdwLTIgaG92ZXI6dW5kZXJsaW5lIGhvdmVyOnRleHQtcmVkLTgwMCc+e2NoaWxkcmVufTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApXHJcbn1cclxuY29uc3QgTmF2QmFyPSgpPT5cclxue1xyXG4gICAgY29uc3QgYXV0aCA9IHVzZUF1dGgoKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTUwMCBweS00IHRleHQtY2VudGVyJz4gXHJcbiAgICAgICAgICA8TmF2TGluayBocmVmPScvc29icmUnPlNvYnJlPC9OYXZMaW5rPlxyXG4gICAgICAgICAgeyFhdXRoLmlzQXV0aCAmJiA8TmF2TGluayBocmVmPScvY2FkYXN0cm8nPkNhZGFzdHJvPC9OYXZMaW5rPn1cclxuICAgICAgICAgIDxOYXZMaW5rIGhyZWY9Jy9lbnRyYXInPkVudHJhcjwvTmF2TGluaz4gXHJcbiAgICAgICAgICA8TmF2TGluayBocmVmPScvYXBpL2xvZ291dCc+U2FpcjwvTmF2TGluaz4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyIl0sInNvdXJjZVJvb3QiOiIifQ==