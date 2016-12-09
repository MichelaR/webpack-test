/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _appRouter = __webpack_require__(1);
	
	var _appRouter2 = _interopRequireDefault(_appRouter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module('starter', ['ionic']).run(function ($ionicPlatform) {
	  $ionicPlatform.ready(function () {
	    if (window.cordova && window.cordova.plugins.Keyboard) {
	      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	      // for form inputs)
	      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	
	      // Don't remove this line unless you know what you are doing. It stops the viewport
	      // from snapping when text inputs are focused. Ionic handles this internally for
	      // a much nicer keyboard experience.
	      cordova.plugins.Keyboard.disableScroll(true);
	    }
	    if (window.StatusBar) {
	      StatusBar.styleDefault();
	    }
	  });
	}).config(_appRouter2.default); // Ionic Starter App
	
	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
	// the 2nd parameter is an array of 'requires'

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _menu = __webpack_require__(2);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _first = __webpack_require__(3);
	
	var _first2 = _interopRequireDefault(_first);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function AppRouter($stateProvider, $urlRouterProvider) {
	    $stateProvider.state('app', {
	        url: "/app",
	        abstract: true,
	        template: _menu2.default
	    }).state('tabs.home', {
	        url: "/home",
	        views: {
	            'home-tab': {
	                template: _first2.default
	            }
	        }
	    });
	    $urlRouterProvider.otherwise('/app/home');
	}
	
	exports.default = AppRouter;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<ion-side-menus enable-menu-with-back-views=\"false\">\n  <ion-side-menu-content>\n    <ion-nav-bar class=\"bar-stable\">\n      <ion-nav-back-button>\n      </ion-nav-back-button>\n\n      <ion-nav-buttons side=\"left\">\n        <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\">\n        </button>\n      </ion-nav-buttons>\n    </ion-nav-bar>\n    <ion-nav-view name=\"menuContent\"></ion-nav-view>\n  </ion-side-menu-content>\n\n  <ion-side-menu side=\"left\">\n    <ion-header-bar class=\"bar-stable\">\n      <h1 class=\"title\">Left</h1>\n    </ion-header-bar>\n    <ion-content>\n      <ion-list>\n\n        <ion-item menu-close href=\"#/app/tageswerte\">\n          Tageswerte\n        </ion-item>\n\n        <ion-item menu-close href=\"#/app/verlauf\">\n          Verlauf\n        </ion-item>\n\n        <ion-item menu-close href=\"#/app/profil\">\n          Profil\n        </ion-item>\n\n        <ion-item menu-close href=\"#/app/logout\">\n          Abmelden\n        </ion-item>\n\n\n      </ion-list>\n    </ion-content>\n  </ion-side-menu>\n</ion-side-menus>\n"

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<ion-view>\n    <ion-nav-title>\n        Home\n    </ion-nav-title>\n    <ion-content>\n        <h1>Header Text</h1>\n    </ion-content>\n</ion-view>\n"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map