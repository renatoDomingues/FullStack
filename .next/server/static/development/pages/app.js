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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./firebase-secret.json":
/*!******************************!*\
  !*** ./firebase-secret.json ***!
  \******************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"mydailystatus-f4442\",\"private_key_id\":\"5bd6ebbfecb13f198f3b43e07308d4e20f394944\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDFXHodGfdwlQ3E\\nFXgbX9HYfYKYjHq+SYHlbrOqJwm4ge9w4+7XmzQGKp/JARkqS6tF+h64pt8Csf5i\\nSeBgBhqmq/+yELcA065BGx0qeT6OCAL82V06DyY3QzD6z5fxPVPN4HqiHogC9tmJ\\nXuDbU5rK91R2fdEakSckFXoiFJXF4tsx3bDnVGLoZEDTo34i2LVEOZkz3myCDCTc\\nW/VmYhKvPtKFd5hE/giB38v5VHHb4ZprA2zfrr/986mCAgV/m8sub1/Gu8bwx/yO\\ny/CYpMwrQsk4Tv3up42jz5uF5Df1RuBLq+AW9hWkAERdnmIXRUIrm4MHUQ9UqhOU\\nCn+ZeZ/HAgMBAAECggEAQ8N60h8mTGuBLIBKmuuNe42sl4A0bL2EcihOW+/HcKh8\\ndABu82yAslVUQ4mzAEi25/H3NmNlUuGWfFztQ0sVP4Dy7Eq86vXDcOtEWl8C0XWC\\nwRpI3jRxZKwXVyaL/vKVoayfrqZZANuM2ZPQFL5h+apuP7j3YO3RyJvvMWBsBGNC\\nesDh6agEDuD5e5lvCt06OzuZu9O7Rdf7AdRt8g1ndDVHLv3OmZuKWqL2f/IuEnVn\\ncRDytCVJlfhvvVGBgNNJGCjVzsweSlpSV9YGti7KLk3ailHE/9m0eYYLHkGMC+Gd\\nP1jDQ3xZ8H+CnqphFxtqSuRIX05oIxX5TQrW0T21EQKBgQD9D16Gr6Lzii0/LItz\\n7ximpvSXzPK1xfLnK7oPlGqelxoxGy/YQZOOyyqqFxTeQYLHOAmaTfWMmzMe0Bxf\\nM10wQQX4Na/TGvIvKL5MaOQ/8TUZN47hSCgSv3eTXaa/C1H1I/i9ndlo6u9LF58e\\nHTt5APZb6ijZyzS7jJzRVZB3QwKBgQDHp3PwmXdB60ZoD1FB97ksTW3nw+un4axV\\nOCLYNUU7DjyqSTVHYXo4qMpHvD4Bob+eohOyJ9/FYYAbaQDafZxZxIBudxAgcxnC\\nXIPuRQhJF2ZB5YifsTrIjv1OZNkUjffRdJV1BSRCFxcU6r59L1gQliBTdxfJk8Oz\\n35uwoXejLQKBgAv4WiRM0oxqkNFYLhCB0syvQQqdKy3l+yNsMhTilFiEFT0VaCH2\\nmCA9A/ufs+D/gEwkHnAqF99ayARBG9Z0+4d4y+t9vp9huur4Jmg+3e0YX8adliiZ\\n3Stl2yYhW+3Vfz71QKLXgJ0x37fRmjk2cMW8geq/HMeQkSH9+Lz+KyM5AoGANnbR\\nw/K5e7wI6t4y1oITe6hrsOvbX2LKtjyoFL8DccbCedmatSw8QTSaadNKPvu24Dlq\\nkhEalCey4MdWOkRF4J8gQgIs3g1IG6NNQjSGvBmsBZHuIVIhrRCEvVv5dAf+cJ8T\\nHmcWqwjNfSFEcbX2mh+6FcrJLG4o1urK9/Y0QskCgYEAqQkiidSTnC9BTyOGyfcT\\nSGkAAbHSoz8A7f/DnmW+IIaZprTqNtC+8nmej+F2nvuIcq65AmOEflIuYtEnZyFC\\nSn1lzNMEAxpk8RqdcIYnXpQCKHkTI2mZMexHWxfbcmMvx4UVktp0z3moHxsF077u\\n6uBNYiEaQ4Wp/jYsTmXddWY=\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-ufcna@mydailystatus-f4442.iam.gserviceaccount.com\",\"client_id\":\"103716815312270670756\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ufcna%40mydailystatus-f4442.iam.gserviceaccount.com\"}");

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

/***/ "./lib/datetime.js":
/*!*************************!*\
  !*** ./lib/datetime.js ***!
  \*************************/
/*! exports provided: getCurrentDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentDate", function() { return getCurrentDate; });
const getCurrentDate = () => {
  const today = new Date();
  const currentDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
  return currentDate;
};

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");

const secret = __webpack_require__(/*! ../firebase-secret.json */ "./firebase-secret.json");

const {
  GeoFirestore
} = __webpack_require__(/*! geofirestore */ "geofirestore");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(secret)
  });
} //instancia db


const firestore = admin.firestore();
const db = new GeoFirestore(firestore);
module.exports = {
  db: db
};

/***/ }),

/***/ "./lib/geo.js":
/*!********************!*\
  !*** ./lib/geo.js ***!
  \********************/
/*! exports provided: distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
//alert(calcCrow(59.3293371,13.4877472,59.3225525,13.4619422).toFixed(1));
// Converts numeric degrees to radians
function toRad(Value) {
  return Value * Math.PI / 180;
} //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)


function distance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km

  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

/***/ }),

/***/ "./model/markers.js":
/*!**************************!*\
  !*** ./model/markers.js ***!
  \**************************/
/*! exports provided: checkExists, findChecksNearbyCheckin, setStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkExists", function() { return checkExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findChecksNearbyCheckin", function() { return findChecksNearbyCheckin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatus", function() { return setStatus; });
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_db__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_geo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/geo */ "./lib/geo.js");
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase-admin */ "firebase-admin");
/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/datetime */ "./lib/datetime.js");




const checkExists = async user => {
  const currentDate = Object(_lib_datetime__WEBPACK_IMPORTED_MODULE_3__["getCurrentDate"])(); //this operation"db" is a promise

  const todaysCheckin = await _lib_db__WEBPACK_IMPORTED_MODULE_0__["db"].collection('markers').doc(currentDate).collection('checks').doc(user).get();
  const todaysData = todaysCheckin.data();
  return todaysData;
}; //export default checkExists

const findChecksNearbyCheckin = async checkin => {
  const currentDate = Object(_lib_datetime__WEBPACK_IMPORTED_MODULE_3__["getCurrentDate"])();
  const checkins = await _lib_db__WEBPACK_IMPORTED_MODULE_0__["db"].collection('markers').doc(currentDate).collection('checks').near({
    center: checkin.coordinates,
    radius: 1000
  }).get();
  const checkinsList = [];
  checkins.docs.forEach(doc => {
    checkinsList.push({
      //...doc.data(),
      id: doc.id,
      status: doc.data().status,
      coords: {
        lat: doc.data().coordinates.latitude,
        long: doc.data().coordinates.longitude
      },
      distance: Object(_lib_geo__WEBPACK_IMPORTED_MODULE_1__["distance"])(checkin.coordinates.latitude, checkin.coordinates.longitude, doc.data().coordinates.latitude, doc.data().coordinates.longitude).toFixed(2)
    });
  });
  return checkinsList;
};
const setStatus = async (user, dados) => {
  const currentDate = Object(_lib_datetime__WEBPACK_IMPORTED_MODULE_3__["getCurrentDate"])();
  await _lib_db__WEBPACK_IMPORTED_MODULE_0__["db"].collection('markers').doc(currentDate).collection('checks').doc(user).set({
    status: dados.status,
    user: user,
    coordinates: new firebase_admin__WEBPACK_IMPORTED_MODULE_2___default.a.firestore.GeoPoint(dados.coords.lat, dados.coords.long)
  });
};

/***/ }),

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_markers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/markers */ "./model/markers.js");
var _jsxFileName = "C:\\mydailystatus\\pages\\app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const App = props => {
  //this code snippet "useEffect" just to see is logged
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!props.isAuth) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    } else if (props.forceCreate) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/create-status');
    }
  });

  if (!props.isAuth || props.forceCreate) {
    return null;
  }

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Status pr\xF3ximo a voc\xEA:"), __jsx("table", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, props.checkins.map(checkin => {
    return __jsx("tr", {
      key: checkin.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 24
      }
    }, __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 27
      }
    }, checkin.id === props.user.sub && 'Seu status -', " "), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 27
      }
    }, checkin.status), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 27
      }
    }, JSON.stringify(checkin.coords)), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 27
      }
    }, checkin.distance));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App); //get server, use getServerSideProps
//this code below does not go front end, only server

async function getServerSideProps({
  req,
  res
}) {
  let user = {};
  let isAuth = false;
  let forceCreate = false;
  let checkins = [];
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_1__["default"].getSession(req);

  if (session) {
    isAuth = true;
    user = session.user;
    const todaysData = await Object(_model_markers__WEBPACK_IMPORTED_MODULE_3__["checkExists"])(session.user.sub);

    if (!todaysData) {
      forceCreate = true;
    } else {
      checkins = await Object(_model_markers__WEBPACK_IMPORTED_MODULE_3__["findChecksNearbyCheckin"])(todaysData);
    }
  }

  return {
    props: {
      isAuth,
      user,
      forceCreate,
      checkins
    }
  };
}

/***/ }),

/***/ 9:
/*!****************************!*\
  !*** multi ./pages/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\mydailystatus\pages\app.js */"./pages/app.js");


/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "geofirestore":
/*!*******************************!*\
  !*** external "geofirestore" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("geofirestore");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2F1dGgwLmpzIiwid2VicGFjazovLy8uL2xpYi9kYXRldGltZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZGIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2dlby5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbC9tYXJrZXJzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UtYWRtaW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnZW9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiaW5pdEF1dGgwIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiQVVUSDBfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiQVVUSDBfQ0xJRU5UX1NFQ1JFVCIsInNjb3BlIiwiQVVUSDBfU0NPUEUiLCJkb21haW4iLCJBVVRIMF9ET01BSU4iLCJyZWRpcmVjdFVyaSIsIkFVVEgwX1JFRElSRUNUX1VSSSIsInBvc3RMb2dvdXRSZWRpcmVjdFVyaSIsIkFVVEgwX0xPR09VVF9SRURJUkVDVF9VUkkiLCJzZXNzaW9uIiwiY29va2llU2VjcmV0IiwiQVVUSDBfU0VTU0lPTl9TRUNSRVQiLCJjb29raWVMaWZldGltZSIsIkFVVEgwX1NFU1NJT05fQ09PS0lFX1RJTUUiLCJnZXRDdXJyZW50RGF0ZSIsInRvZGF5IiwiRGF0ZSIsImN1cnJlbnREYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJhZG1pbiIsInJlcXVpcmUiLCJzZWNyZXQiLCJHZW9GaXJlc3RvcmUiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImNyZWRlbnRpYWwiLCJjZXJ0IiwiZmlyZXN0b3JlIiwiZGIiLCJtb2R1bGUiLCJleHBvcnRzIiwidG9SYWQiLCJWYWx1ZSIsIk1hdGgiLCJQSSIsImRpc3RhbmNlIiwibGF0MSIsImxvbjEiLCJsYXQyIiwibG9uMiIsIlIiLCJkTGF0IiwiZExvbiIsImEiLCJzaW4iLCJjb3MiLCJjIiwiYXRhbjIiLCJzcXJ0IiwiZCIsImNoZWNrRXhpc3RzIiwidXNlciIsInRvZGF5c0NoZWNraW4iLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidG9kYXlzRGF0YSIsImRhdGEiLCJmaW5kQ2hlY2tzTmVhcmJ5Q2hlY2tpbiIsImNoZWNraW4iLCJjaGVja2lucyIsIm5lYXIiLCJjZW50ZXIiLCJjb29yZGluYXRlcyIsInJhZGl1cyIsImNoZWNraW5zTGlzdCIsImRvY3MiLCJmb3JFYWNoIiwicHVzaCIsImlkIiwic3RhdHVzIiwiY29vcmRzIiwibGF0IiwibGF0aXR1ZGUiLCJsb25nIiwibG9uZ2l0dWRlIiwidG9GaXhlZCIsInNldFN0YXR1cyIsImRhZG9zIiwic2V0IiwiR2VvUG9pbnQiLCJBcHAiLCJwcm9wcyIsInVzZUVmZmVjdCIsImlzQXV0aCIsInJvdXRlciIsImZvcmNlQ3JlYXRlIiwibWFwIiwic3ViIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcSIsInJlcyIsImF1dGgwIiwiZ2V0U2Vzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxr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QyxJQUFSLENBQWFxQyxHQUFkLENBQXBDOztBQUVBLFFBQUcsQ0FBQ2hDLFVBQUosRUFBZTtBQUNYOEIsaUJBQVcsR0FBRyxJQUFkO0FBQ0gsS0FGRCxNQUVLO0FBQ0gxQixjQUFRLEdBQUcsTUFBTUYsOEVBQXVCLENBQUNGLFVBQUQsQ0FBeEM7QUFDRDtBQUNKOztBQUNELFNBQU07QUFDRjBCLFNBQUssRUFBRTtBQUNIRSxZQURHO0FBRUhqQyxVQUZHO0FBR0htQyxpQkFIRztBQUlIMUI7QUFKRztBQURMLEdBQU47QUFRSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFRCxnRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuIiwiXHJcbmltcG9ydCB7aW5pdEF1dGgwfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdEF1dGgwKFxyXG4gICAge1xyXG4gICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfSUQsXHJcbiAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfU0VDUkVULFxyXG4gICAgICAgIHNjb3BlOiBwcm9jZXNzLmVudi5BVVRIMF9TQ09QRSxcclxuICAgICAgICBkb21haW46IHByb2Nlc3MuZW52LkFVVEgwX0RPTUFJTixcclxuICAgICAgICByZWRpcmVjdFVyaTogcHJvY2Vzcy5lbnYuQVVUSDBfUkVESVJFQ1RfVVJJLFxyXG4gICAgICAgIHBvc3RMb2dvdXRSZWRpcmVjdFVyaTogcHJvY2Vzcy5lbnYuQVVUSDBfTE9HT1VUX1JFRElSRUNUX1VSSSxcclxuICAgICAgICBzZXNzaW9uOiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvb2tpZVNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfU0VTU0lPTl9TRUNSRVQsXHJcbiAgICAgICAgICAgIGNvb2tpZUxpZmV0aW1lOiBwcm9jZXNzLmVudi5BVVRIMF9TRVNTSU9OX0NPT0tJRV9USU1FXHJcbiAgICAgICAgfVxyXG4gICAgfSkiLCJcclxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnREYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgKyAnLScgKyB0b2RheS5nZXRNb250aCgpICsgJy0nICsgdG9kYXkuZ2V0RGF0ZSgpXHJcbiAgICByZXR1cm4gY3VycmVudERhdGUgXHJcbn0iLCJcclxuY29uc3QgYWRtaW4gPSByZXF1aXJlKCdmaXJlYmFzZS1hZG1pbicpXHJcbmNvbnN0IHNlY3JldCA9IHJlcXVpcmUoJy4uL2ZpcmViYXNlLXNlY3JldC5qc29uJylcclxuY29uc3Qge0dlb0ZpcmVzdG9yZX0gPSByZXF1aXJlKCdnZW9maXJlc3RvcmUnKVxyXG5cclxuaWYoIWFkbWluLmFwcHMubGVuZ3RoKVxyXG57XHJcbiAgICBhZG1pbi5pbml0aWFsaXplQXBwKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY3JlZGVudGlhbDogYWRtaW4uY3JlZGVudGlhbC5jZXJ0KHNlY3JldClcclxuICAgICAgICB9KVxyXG59XHJcbiAgICBcclxuLy9pbnN0YW5jaWEgZGJcclxuY29uc3QgZmlyZXN0b3JlID0gYWRtaW4uZmlyZXN0b3JlKClcclxuY29uc3QgZGIgPSBuZXcgR2VvRmlyZXN0b3JlKGZpcmVzdG9yZSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gXHJcbntcclxuICAgIGRiOiBkYlxyXG59IiwiXHJcbi8vYWxlcnQoY2FsY0Nyb3coNTkuMzI5MzM3MSwxMy40ODc3NDcyLDU5LjMyMjU1MjUsMTMuNDYxOTQyMikudG9GaXhlZCgxKSk7XHJcbi8vIENvbnZlcnRzIG51bWVyaWMgZGVncmVlcyB0byByYWRpYW5zXHJcbmZ1bmN0aW9uIHRvUmFkKFZhbHVlKSBcclxue1xyXG4gICAgcmV0dXJuIFZhbHVlICogTWF0aC5QSSAvIDE4MDtcclxufVxyXG4vL1RoaXMgZnVuY3Rpb24gdGFrZXMgaW4gbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBvZiB0d28gbG9jYXRpb24gYW5kIHJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlbSBhcyB0aGUgY3JvdyBmbGllcyAoaW4ga20pXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShsYXQxLCBsb24xLCBsYXQyLCBsb24yKSBcclxue1xyXG4gIHZhciBSID0gNjM3MTsgLy8ga21cclxuICB2YXIgZExhdCA9IHRvUmFkKGxhdDItbGF0MSk7XHJcbiAgdmFyIGRMb24gPSB0b1JhZChsb24yLWxvbjEpO1xyXG4gIHZhciBsYXQxID0gdG9SYWQobGF0MSk7XHJcbiAgdmFyIGxhdDIgPSB0b1JhZChsYXQyKTtcclxuXHJcbiAgdmFyIGEgPSBNYXRoLnNpbihkTGF0LzIpICogTWF0aC5zaW4oZExhdC8yKSArXHJcbiAgICBNYXRoLnNpbihkTG9uLzIpICogTWF0aC5zaW4oZExvbi8yKSAqIE1hdGguY29zKGxhdDEpICogTWF0aC5jb3MobGF0Mik7IFxyXG4gIHZhciBjID0gMiAqIE1hdGguYXRhbjIoTWF0aC5zcXJ0KGEpLCBNYXRoLnNxcnQoMS1hKSk7IFxyXG4gIHZhciBkID0gUiAqIGM7XHJcbiAgcmV0dXJuIGQ7XHJcbn0iLCJpbXBvcnQge2RifSBmcm9tICcuLi9saWIvZGInXHJcbmltcG9ydCB7IGRpc3RhbmNlIH0gZnJvbSAnLi4vbGliL2dlbydcclxuaW1wb3J0IGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJ1xyXG5pbXBvcnQge2dldEN1cnJlbnREYXRlfSBmcm9tICcuLi9saWIvZGF0ZXRpbWUnXHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tFeGlzdHMgPSBhc3luYyh1c2VyKSA9PiB7ICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IGdldEN1cnJlbnREYXRlKClcclxuICAgICAgICAgICAgLy90aGlzIG9wZXJhdGlvblwiZGJcIiBpcyBhIHByb21pc2VcclxuICAgICAgICAgICAgY29uc3QgdG9kYXlzQ2hlY2tpbiA9IGF3YWl0IGRiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbignbWFya2VycycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZG9jKGN1cnJlbnREYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2NoZWNrcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZG9jKHVzZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KClcclxuICAgICAgICAgICAgY29uc3QgdG9kYXlzRGF0YSA9IHRvZGF5c0NoZWNraW4uZGF0YSgpXHJcbiAgICAgICAgICAgIHJldHVybiB0b2RheXNEYXRhIFxyXG59XHJcbi8vZXhwb3J0IGRlZmF1bHQgY2hlY2tFeGlzdHNcclxuZXhwb3J0IGNvbnN0IGZpbmRDaGVja3NOZWFyYnlDaGVja2luID0gYXN5bmMgY2hlY2tpbiA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IGdldEN1cnJlbnREYXRlKClcclxuICAgIGNvbnN0IGNoZWNraW5zID0gYXdhaXQgZGJcclxuICAgICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbignbWFya2VycycpXHJcbiAgICAgICAgICAgICAgICAgICAgLmRvYyhjdXJyZW50RGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICAuY29sbGVjdGlvbignY2hlY2tzJylcclxuICAgICAgICAgICAgICAgICAgICAubmVhcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjogY2hlY2tpbi5jb29yZGluYXRlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAxMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0KClcclxuICAgIGNvbnN0ICBjaGVja2luc0xpc3QgPSBbXSBcclxuICAgICAgICAgICAgXHJcbiAgICBjaGVja2lucy5kb2NzLmZvckVhY2goZG9jID0+IHtcclxuICAgICAgICBjaGVja2luc0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8uLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgICBzdGF0dXM6IGRvYy5kYXRhKCkuc3RhdHVzLFxyXG4gICAgICAgICAgICBjb29yZHM6IHtcclxuICAgICAgICAgICAgICAgIGxhdDogZG9jLmRhdGEoKS5jb29yZGluYXRlcy5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgIGxvbmc6IGRvYy5kYXRhKCkuY29vcmRpbmF0ZXMubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3RhbmNlOiBkaXN0YW5jZShcclxuICAgICAgICAgICAgICAgIGNoZWNraW4uY29vcmRpbmF0ZXMubGF0aXR1ZGUsIFxyXG4gICAgICAgICAgICAgICAgY2hlY2tpbi5jb29yZGluYXRlcy5sb25naXR1ZGUsIFxyXG4gICAgICAgICAgICAgICAgZG9jLmRhdGEoKS5jb29yZGluYXRlcy5sYXRpdHVkZSwgXHJcbiAgICAgICAgICAgICAgICBkb2MuZGF0YSgpLmNvb3JkaW5hdGVzLmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgKS50b0ZpeGVkKDIpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gY2hlY2tpbnNMaXN0XHJcbn1cclxuZXhwb3J0IGNvbnN0IHNldFN0YXR1cyA9IGFzeW5jKHVzZXIsIGRhZG9zKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IGdldEN1cnJlbnREYXRlKClcclxuICAgIGF3YWl0IGRiXHJcbiAgICAgICAgICAgLmNvbGxlY3Rpb24oJ21hcmtlcnMnKVxyXG4gICAgICAgICAgIC5kb2MoY3VycmVudERhdGUpXHJcbiAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2NoZWNrcycpXHJcbiAgICAgICAgICAgLmRvYyh1c2VyKVxyXG4gICAgICAgICAgIC5zZXQoe1xyXG4gICAgICAgICAgICAgICBzdGF0dXM6IGRhZG9zLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IG5ldyBhZG1pbi5maXJlc3RvcmUuR2VvUG9pbnQoXHJcbiAgICAgICAgICAgICAgICAgICBkYWRvcy5jb29yZHMubGF0LFxyXG4gICAgICAgICAgICAgICAgICAgZGFkb3MuY29vcmRzLmxvbmdcclxuICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgIH0pXHJcbn0iLCJcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF1dGgwIGZyb20gJy4uL2xpYi9hdXRoMCdcclxuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgY2hlY2tFeGlzdHMsIGZpbmRDaGVja3NOZWFyYnlDaGVja2luIH0gZnJvbSAnLi4vbW9kZWwvbWFya2VycydcclxuXHJcbmNvbnN0IEFwcCA9IHByb3BzID0+XHJcbntcclxuICAgIC8vdGhpcyBjb2RlIHNuaXBwZXQgXCJ1c2VFZmZlY3RcIiBqdXN0IHRvIHNlZSBpcyBsb2dnZWRcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoIXByb3BzLmlzQXV0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICB9ZWxzZSBpZihwcm9wcy5mb3JjZUNyZWF0ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvY3JlYXRlLXN0YXR1cycpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGlmKCFwcm9wcy5pc0F1dGggfHwgcHJvcHMuZm9yY2VDcmVhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIHJldHVybiggXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPlN0YXR1cyBwcsOzeGltbyBhIHZvY8OqOjwvaDE+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAge3Byb3BzLmNoZWNraW5zLm1hcChjaGVja2luID0+IHtcclxuICAgICAgICAgICAgICAgICAgIHJldHVybiggXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17Y2hlY2tpbi5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntjaGVja2luLmlkID09PSBwcm9wcy51c2VyLnN1YiAmJiAnU2V1IHN0YXR1cyAtJ30gPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NoZWNraW4uc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntKU09OLnN0cmluZ2lmeShjaGVja2luLmNvb3Jkcyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2NoZWNraW4uZGlzdGFuY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwcCAgXHJcbi8vZ2V0IHNlcnZlciwgdXNlIGdldFNlcnZlclNpZGVQcm9wc1xyXG4vL3RoaXMgY29kZSBiZWxvdyBkb2VzIG5vdCBnbyBmcm9udCBlbmQsIG9ubHkgc2VydmVyXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3JlcSwgcmVzfSl7XHJcbiAgICBsZXQgdXNlciA9IHsgfVxyXG4gICAgbGV0IGlzQXV0aCA9IGZhbHNlXHJcbiAgICBsZXQgZm9yY2VDcmVhdGUgPSBmYWxzZVxyXG4gICAgbGV0IGNoZWNraW5zID0gWyBdXHJcblxyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgwLmdldFNlc3Npb24ocmVxKVxyXG4gICAgXHJcbiAgICBpZihzZXNzaW9uKVxyXG4gICAge1xyXG4gICAgICAgIGlzQXV0aCA9IHRydWVcclxuICAgICAgICB1c2VyID0gc2Vzc2lvbi51c2VyXHJcblxyXG4gICAgICAgIGNvbnN0IHRvZGF5c0RhdGEgPSBhd2FpdCBjaGVja0V4aXN0cyhzZXNzaW9uLnVzZXIuc3ViKVxyXG5cclxuICAgICAgICBpZighdG9kYXlzRGF0YSl7XHJcbiAgICAgICAgICAgIGZvcmNlQ3JlYXRlID0gdHJ1ZVxyXG4gICAgICAgIH1lbHNleyAgICAgICAgICAgIFxyXG4gICAgICAgICAgY2hlY2tpbnMgPSBhd2FpdCBmaW5kQ2hlY2tzTmVhcmJ5Q2hlY2tpbih0b2RheXNEYXRhKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBpc0F1dGgsXHJcbiAgICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgICAgIGZvcmNlQ3JlYXRlLFxyXG4gICAgICAgICAgICBjaGVja2luc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhdXRoMC9uZXh0anMtYXV0aDBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UtYWRtaW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ2VvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=