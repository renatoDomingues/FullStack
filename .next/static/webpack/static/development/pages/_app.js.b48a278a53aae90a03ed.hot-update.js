webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);



var _this = undefined,
    _jsxFileName = "C:\\mydailystatus\\components\\Header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Header = function Header() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      user = _useState[0],
      setUser = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getMe = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, authUser;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default()('/api/me');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                authUser = _context.sent;
                setUser(authUser); //console.log(authUser) 

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getMe() {
        return _ref.apply(this, arguments);
      };
    }();

    getMe();
  }, []);
  return __jsx("div", {
    className: "bg-gray-200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "h-24 mx-auto py-4",
    src: "/logo.png",
    alt: "Hello FSL!",
    height: "60",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 14
    }
  })), __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }));
};

_s(Header, "l0nCqodPWuiGgcnCHidP90F0Gls=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwidXNlRWZmZWN0IiwiZ2V0TWUiLCJmZXRjaCIsInJlcyIsImpzb24iLCJhdXRoVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBQyxTQUFQQSxNQUFPLEdBQ2I7QUFBQTs7QUFBQSxrQkFDNEJDLHNEQUFRLENBQUMsRUFBRCxDQURwQztBQUFBLE1BQ1dDLElBRFg7QUFBQSxNQUNpQkMsT0FEakI7O0FBRUlDLHlEQUFTLENBQUMsWUFBSTtBQUNWLFFBQU1DLEtBQUs7QUFBQSxrTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNRQyx1REFBSyxDQUFDLFNBQUQsQ0FEYjs7QUFBQTtBQUNKQyxtQkFESTtBQUFBO0FBQUEsdUJBRWFBLEdBQUcsQ0FBQ0MsSUFBSixFQUZiOztBQUFBO0FBRUpDLHdCQUZJO0FBR1ZOLHVCQUFPLENBQUNNLFFBQUQsQ0FBUCxDQUhVLENBSVY7O0FBSlU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBTEosS0FBSztBQUFBO0FBQUE7QUFBQSxPQUFYOztBQU1BQSxTQUFLO0FBQ1IsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVNBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHO0FBQ0ksYUFBUyxFQUFDLG1CQURkO0FBRUksT0FBRyxFQUFDLFdBRlI7QUFHSSxPQUFHLEVBQUMsWUFIUjtBQUlJLFVBQU0sRUFBQyxJQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESCxDQURGLEVBUUUsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FESjtBQVlILENBeEJEOztHQUFNTCxNOztLQUFBQSxNO0FBeUJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5iNDhhMjc4YTUzYWFlOTBhMDNlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuXHJcbmNvbnN0IEhlYWRlcj0oKT0+XHJcbntcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHt9KVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgZ2V0TWUgPSBhc3luYyAoKSA9PntcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvbWUnKVxyXG4gICAgICAgICAgICBjb25zdCBhdXRoVXNlciA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICAgICAgc2V0VXNlcihhdXRoVXNlcilcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhdXRoVXNlcikgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldE1lKClcclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTIwMCc+XHJcbiAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC0yNCBteC1hdXRvIHB5LTQnIFxyXG4gICAgICAgICAgICAgICAgIHNyYz0nL2xvZ28ucG5nJyBcclxuICAgICAgICAgICAgICAgICBhbHQ9J0hlbGxvIEZTTCEnIFxyXG4gICAgICAgICAgICAgICAgIGhlaWdodD0nNjAnIC8+XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPE5hdkJhci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==