module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/AuthContext.js":
/*!****************************!*\
  !*** ./lib/AuthContext.js ***!
  \****************************/
/*! exports provided: AuthContext, AuthProvider, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContext", function() { return AuthContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\mydailystatus\\lib\\AuthContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const AuthProvider = ({
  children
}) => {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: isAuthReady,
    1: setAuthReady
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getMe = async () => {
      const res = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()('/api/me');
      const authUser = await res.json();
      setUser(authUser);
      setAuthReady(true);
    };

    getMe();
  }, []);
  return __jsx(AuthContext.Provider, {
    value: {
      user,
      isAuthReady,
      isAuth: !user.error
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, children);
};
const useAuth = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(AuthContext);
};

/***/ }),

/***/ "./lib/auth0.js":
/*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])({
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.AUTH0_SCOPE,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_SESSION_SECRET,
    cookieLifetime: process.env.AUTH0_SESSION_COOKIE_TIME
  }
}));

/***/ }),

/***/ "./pages/create-status.js":
/*!********************************!*\
  !*** ./pages/create-status.js ***!
  \********************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/AuthContext */ "./lib/AuthContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\mydailystatus\\pages\\create-status.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const CreateStatus = () => {
  const auth = Object(_lib_AuthContext__WEBPACK_IMPORTED_MODULE_3__["useAuth"])();
  const {
    0: dados,
    1: setDados
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    status: 'bem',
    coords: {
      lat: null,
      long: null
    }
  });

  if (auth.isAuthReady && !auth.isAuth) {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
  }

  const getMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        //console.log(position.coords)
        setDados(old => {
          return _objectSpread(_objectSpread({}, old), {}, {
            coords: {
              lat: position.coords.latitude,
              long: position.coords.longitude
            }
          });
        });
      });
    }
  };

  const onStatusChange = evt => {
    const value = evt.target.value;
    setDados(old => {
      return _objectSpread(_objectSpread({}, old), {}, {
        status: value
      });
    }); //console.log()
  };

  const save = async () => {
    await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/save-status', dados);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 14
    }
  }, "Create Status"), __jsx("label", {
    className: "block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 14
    }
  }, __jsx("label", {
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }), "Estou bem e sem sintomas")), __jsx("label", {
    className: "block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 14
    }
  }, __jsx("label", {
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }), "Estou com sintomas de  gripe/resfriado")), __jsx("label", {
    className: "block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 14
    }
  }, __jsx("label", {
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }), "Estou com sintomas de COVID")), "Sua posi\xE7\xE3o atual: ", JSON.stringify(dados), __jsx("button", {
    onClick: getMyLocation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 14
    }
  }, "Pegar a minha localia\xE7\xE3o"), __jsx("button", {
    onClick: save,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 14
    }
  }, "Salvar o meu status"));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateStatus);
async function getServerSideProps({
  req,
  res
}) {
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_1__["default"].getSession(req);

  if (session) {
    return {
      props: {
        isAuth: true,
        user: session.user
      }
    };
  }

  return {
    props: {
      isAuth: false,
      user: {}
    }
  };
}

/***/ }),

/***/ 7:
/*!**************************************!*\
  !*** multi ./pages/create-status.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\mydailystatus\pages\create-status.js */"./pages/create-status.js");


/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0F1dGhDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2xpYi9hdXRoMC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jcmVhdGUtc3RhdHVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwiaXNBdXRoUmVhZHkiLCJzZXRBdXRoUmVhZHkiLCJ1c2VFZmZlY3QiLCJnZXRNZSIsInJlcyIsImZldGNoIiwiYXV0aFVzZXIiLCJqc29uIiwiaXNBdXRoIiwiZXJyb3IiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsImluaXRBdXRoMCIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkFVVEgwX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkFVVEgwX0NMSUVOVF9TRUNSRVQiLCJzY29wZSIsIkFVVEgwX1NDT1BFIiwiZG9tYWluIiwiQVVUSDBfRE9NQUlOIiwicmVkaXJlY3RVcmkiLCJBVVRIMF9SRURJUkVDVF9VUkkiLCJwb3N0TG9nb3V0UmVkaXJlY3RVcmkiLCJBVVRIMF9MT0dPVVRfUkVESVJFQ1RfVVJJIiwic2Vzc2lvbiIsImNvb2tpZVNlY3JldCIsIkFVVEgwX1NFU1NJT05fU0VDUkVUIiwiY29va2llTGlmZXRpbWUiLCJBVVRIMF9TRVNTSU9OX0NPT0tJRV9USU1FIiwiQ3JlYXRlU3RhdHVzIiwiYXV0aCIsImRhZG9zIiwic2V0RGFkb3MiLCJzdGF0dXMiLCJjb29yZHMiLCJsYXQiLCJsb25nIiwicm91dGVyIiwicHVzaCIsImdldE15TG9jYXRpb24iLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwib2xkIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJvblN0YXR1c0NoYW5nZSIsImV2dCIsInZhbHVlIiwidGFyZ2V0Iiwic2F2ZSIsImF4aW9zIiwicG9zdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJhdXRoMCIsImdldFNlc3Npb24iLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUVPLE1BQU1BLFdBQVcsR0FBR0MsMkRBQWEsRUFB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QSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY3JlYXRlLXN0YXR1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcbiIsIlxyXG5pbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7fSlcclxuICAgIGNvbnN0IFtpc0F1dGhSZWFkeSwgc2V0QXV0aFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ2V0TWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL21lJylcclxuICAgICAgICAgICAgY29uc3QgYXV0aFVzZXIgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgICAgIHNldFVzZXIoYXV0aFVzZXIpXHJcbiAgICAgICAgICAgIHNldEF1dGhSZWFkeSh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRNZSgpXHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3t1c2VyLCBpc0F1dGhSZWFkeSwgaXNBdXRoOiAhdXNlci5lcnJvcn19PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxufSIsIlxyXG5pbXBvcnQge2luaXRBdXRoMH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRBdXRoMChcclxuICAgIHtcclxuICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lELFxyXG4gICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcclxuICAgICAgICBzY29wZTogcHJvY2Vzcy5lbnYuQVVUSDBfU0NPUEUsXHJcbiAgICAgICAgZG9tYWluOiBwcm9jZXNzLmVudi5BVVRIMF9ET01BSU4sXHJcbiAgICAgICAgcmVkaXJlY3RVcmk6IHByb2Nlc3MuZW52LkFVVEgwX1JFRElSRUNUX1VSSSxcclxuICAgICAgICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6IHByb2Nlc3MuZW52LkFVVEgwX0xPR09VVF9SRURJUkVDVF9VUkksXHJcbiAgICAgICAgc2Vzc2lvbjogXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb29raWVTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX1NFU1NJT05fU0VDUkVULFxyXG4gICAgICAgICAgICBjb29raWVMaWZldGltZTogcHJvY2Vzcy5lbnYuQVVUSDBfU0VTU0lPTl9DT09LSUVfVElNRVxyXG4gICAgICAgIH1cclxuICAgIH0pIiwiXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF1dGgwIGZyb20gJy4uL2xpYi9hdXRoMCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge3VzZUF1dGh9IGZyb20gJy4uL2xpYi9BdXRoQ29udGV4dCdcclxuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IENyZWF0ZVN0YXR1cyA9ICgpPT57XHJcbiAgICBjb25zdCBhdXRoID0gdXNlQXV0aCgpXHJcbiAgICBjb25zdCBbZGFkb3MsIHNldERhZG9zXT0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHN0YXR1czogJ2JlbScsXHJcbiAgICAgICAgY29vcmRzOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGF0OiBudWxsLFxyXG4gICAgICAgICAgICBsb25nOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGlmKGF1dGguaXNBdXRoUmVhZHkgJiYgIWF1dGguaXNBdXRoKXtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRNeUxvY2F0aW9uPSgpPT57XHJcbiAgICAgICAgaWYobmF2aWdhdG9yLmdlb2xvY2F0aW9uKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbj0+e1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwb3NpdGlvbi5jb29yZHMpXHJcbiAgICAgICAgICAgICAgICBzZXREYWRvcyhvbGQ9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLm9sZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9uZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBvblN0YXR1c0NoYW5nZSA9IGV2dD0+e1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIHNldERhZG9zKG9sZD0+e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5vbGQsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHZhbHVlXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2F2ZT0gYXN5bmMoKT0+e1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvc2F2ZS1zdGF0dXMnLCBkYWRvcylcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgPGgxPkNyZWF0ZSBTdGF0dXM8L2gxPlxyXG4gICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2snPlxyXG4gICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdyYWRpbycgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RhdHVzJyBcclxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nYmVtJyBcclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblN0YXR1c0NoYW5nZX0vPkVzdG91IGJlbSBlIHNlbSBzaW50b21hczwvbGFiZWw+XHJcbiAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2snPlxyXG4gICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncmFkaW8nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdGF0dXMnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nZ3JpcGUnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblN0YXR1c0NoYW5nZX0vPkVzdG91IGNvbSBzaW50b21hcyBkZSAgZ3JpcGUvcmVzZnJpYWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayc+XHJcbiAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3JhZGlvJyBcclxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdGF0dXMnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPSdjb3ZpZCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdGF0dXNDaGFuZ2V9Lz5Fc3RvdSBjb20gc2ludG9tYXMgZGUgQ09WSUQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgIFN1YSBwb3Npw6fDo28gYXR1YWw6IHtKU09OLnN0cmluZ2lmeShkYWRvcyl9XHJcbiAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldE15TG9jYXRpb259PlBlZ2FyIGEgbWluaGEgbG9jYWxpYcOnw6NvPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmV9PlNhbHZhciBvIG1ldSBzdGF0dXM8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVTdGF0dXNcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3JlcSwgcmVzfSlcclxue1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgwLmdldFNlc3Npb24ocmVxKVxyXG4gICAgaWYoc2Vzc2lvbil7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgcHJvcHM6IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXNBdXRoOiB0cnVlLFxyXG4gICAgICAgICAgICB1c2VyOiBzZXNzaW9uLnVzZXIsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgcHJvcHM6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpc0F1dGg6IGZhbHNlLFxyXG4gICAgICAgICAgICB1c2VyOiB7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhdXRoMC9uZXh0anMtYXV0aDBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9