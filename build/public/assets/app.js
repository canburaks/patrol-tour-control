/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/theme.js":
/*!*******************************!*\
  !*** ./resources/js/theme.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var themify = {
  switchToDarkMode: function switchToDarkMode() {
    document.documentElement.classList.add('dark');
    document.documentElement.dataset.theme = 'dark';
    localStorage.theme = 'dark';
  },
  switchToLightMode: function switchToLightMode() {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    document.documentElement.dataset.theme = 'light';
  },
  switchToDarkModeByUserPreference: function switchToDarkModeByUserPreference() {
    document.documentElement.classList.add('dark');
  },
  prefersDarkModeByOS: function prefersDarkModeByOS() {
    // if theme is not setted and user prefers dark mode by OS return true
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  },
  isDarkModeRendered: function isDarkModeRendered() {
    return localStorage.theme === 'dark' || document.documentElement.className.includes('dark');
  },
  initialize: function initialize() {
    // first: check if localStorage has selcted theme
    var selectedTheme = localStorage.theme;
    console.log('selectedTheme', selectedTheme); // if user hasn't choose any theme check OS level preference

    if (!selectedTheme) {
      // if user prefers dark mode by OS, set dark mode by class appending
      if (this.prefersDarkModeByOS()) {
        console.log('user prefer dark mode by OS level');
        this.switchToDarkModeByUserPreference();
      }
    } // if user has chose light mode before
    else if (selectedTheme === 'light') this.switchToLightMode(); // if user has chose dark mode before
      else if (selectedTheme === 'dark') this.switchToDarkMode();

    window.addEventListener('load', function () {
      var toggle = document.getElementById('toggle');

      if (toggle) {
        toggle.value = themify.isDarkModeRendered() ? 'on' : 'off';
        window.setTimeout(function () {
          toggle.addEventListener('change', themify["switch"]);
        }, 500);
      }
    });
  },
  "switch": function _switch(e) {
    console.log('switch value', e.target.value); // check if dark mode rendered then switch to light mode

    if (themify.isDarkModeRendered()) {
      themify.switchToLightMode();
      e.target.checked = false;
    } // else switch to dark mode
    else {
        themify.switchToDarkMode();
        e.target.checked = true;
      }
  }
};
themify.initialize();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themify);
/*
window.themeSwitch = function themeSwitch() {
	// On page load or when changing themes, best to add inline in `head` to avoid FOUC
	console.log('themeSwitch function --> localStorage.theme', localStorage.theme)
	console.log(
		'themeSwitch function --> documentElement.classList',
		document.documentElement.classList
	)

	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark')
		localStorage.theme = 'dark'
	} else {
		console.log('changing to Light')
		document.documentElement.classList.remove('dark')
		localStorage.theme = 'light'
	}

	// Whenever the user explicitly chooses light mode

	// Whenever the user explicitly chooses dark mode

	// Whenever the user explicitly chooses to respect the OS preference
	localStorage.removeItem('theme')
}
*/

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.css */ "./resources/css/app.css");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./resources/js/theme.js");



(function init() {
  document.documentElement.dataset.theme = 'aqua';
})();

window.themify = _theme__WEBPACK_IMPORTED_MODULE_1__.default;
/*

function tryCookie(request, response, key, value) {
	const existingItems = request.cookie(key, [])
	console.log('existing items: ', existingItems)
	response.cookie(key, value)
}

*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWFwcC8uL3Jlc291cmNlcy9qcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9teWFwcC8uL3Jlc291cmNlcy9jc3MvYXBwLmNzcyIsIndlYnBhY2s6Ly9teWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXlhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215YXBwLy4vcmVzb3VyY2VzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJ0aGVtaWZ5Iiwic3dpdGNoVG9EYXJrTW9kZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsInRoZW1lIiwibG9jYWxTdG9yYWdlIiwic3dpdGNoVG9MaWdodE1vZGUiLCJyZW1vdmUiLCJzd2l0Y2hUb0RhcmtNb2RlQnlVc2VyUHJlZmVyZW5jZSIsInByZWZlcnNEYXJrTW9kZUJ5T1MiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImlzRGFya01vZGVSZW5kZXJlZCIsImNsYXNzTmFtZSIsImluY2x1ZGVzIiwiaW5pdGlhbGl6ZSIsInNlbGVjdGVkVGhlbWUiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJzZXRUaW1lb3V0IiwiZSIsInRhcmdldCIsImNoZWNrZWQiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBRztBQUNmQyxrQkFBZ0IsRUFBRSw0QkFBWTtBQUM3QkMsWUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUF6QixDQUFtQ0MsR0FBbkMsQ0FBdUMsTUFBdkM7QUFDQUgsWUFBUSxDQUFDQyxlQUFULENBQXlCRyxPQUF6QixDQUFpQ0MsS0FBakMsR0FBeUMsTUFBekM7QUFDQUMsZ0JBQVksQ0FBQ0QsS0FBYixHQUFxQixNQUFyQjtBQUNBLEdBTGM7QUFNZkUsbUJBQWlCLEVBQUUsNkJBQVk7QUFDOUJQLFlBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBekIsQ0FBbUNNLE1BQW5DLENBQTBDLE1BQTFDO0FBQ0FGLGdCQUFZLENBQUNELEtBQWIsR0FBcUIsT0FBckI7QUFDQUwsWUFBUSxDQUFDQyxlQUFULENBQXlCRyxPQUF6QixDQUFpQ0MsS0FBakMsR0FBeUMsT0FBekM7QUFDQSxHQVZjO0FBV2ZJLGtDQUFnQyxFQUFFLDRDQUFZO0FBQzdDVCxZQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQXpCLENBQW1DQyxHQUFuQyxDQUF1QyxNQUF2QztBQUNBLEdBYmM7QUFjZk8scUJBQW1CLEVBQUUsK0JBQVk7QUFDaEM7QUFDQSxXQUFPQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsOEJBQWxCLEVBQWtEQyxPQUF6RDtBQUNBLEdBakJjO0FBa0JmQyxvQkFBa0IsRUFBRSw4QkFBWTtBQUMvQixXQUFPUixZQUFZLENBQUNELEtBQWIsS0FBdUIsTUFBdkIsSUFBaUNMLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QmMsU0FBekIsQ0FBbUNDLFFBQW5DLENBQTRDLE1BQTVDLENBQXhDO0FBQ0EsR0FwQmM7QUFxQmZDLFlBQVUsRUFBRSxzQkFBWTtBQUN2QjtBQUNBLFFBQUlDLGFBQWEsR0FBR1osWUFBWSxDQUFDRCxLQUFqQztBQUNBYyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRixhQUE3QixFQUh1QixDQUl2Qjs7QUFDQSxRQUFJLENBQUNBLGFBQUwsRUFBb0I7QUFDbkI7QUFDQSxVQUFJLEtBQUtSLG1CQUFMLEVBQUosRUFBZ0M7QUFDL0JTLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLG1DQUFaO0FBQ0EsYUFBS1gsZ0NBQUw7QUFDQTtBQUNELEtBTkQsQ0FPQTtBQVBBLFNBUUssSUFBSVMsYUFBYSxLQUFLLE9BQXRCLEVBQStCLEtBQUtYLGlCQUFMLEdBQS9CLENBQ0w7QUFESyxXQUVBLElBQUlXLGFBQWEsS0FBSyxNQUF0QixFQUE4QixLQUFLbkIsZ0JBQUw7O0FBRW5DWSxVQUFNLENBQUNVLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQVk7QUFDM0MsVUFBSUMsTUFBTSxHQUFHdEIsUUFBUSxDQUFDdUIsY0FBVCxDQUF3QixRQUF4QixDQUFiOztBQUNBLFVBQUlELE1BQUosRUFBWTtBQUNYQSxjQUFNLENBQUNFLEtBQVAsR0FBZTFCLE9BQU8sQ0FBQ2dCLGtCQUFSLEtBQStCLElBQS9CLEdBQXNDLEtBQXJEO0FBQ0FILGNBQU0sQ0FBQ2MsVUFBUCxDQUFrQixZQUFZO0FBQzdCSCxnQkFBTSxDQUFDRCxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ3ZCLE9BQU8sVUFBekM7QUFDQSxTQUZELEVBRUcsR0FGSDtBQUdBO0FBQ0QsS0FSRDtBQVNBLEdBL0NjO0FBZ0RmLFlBQVEsaUJBQVU0QixDQUFWLEVBQWE7QUFDcEJQLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJNLENBQUMsQ0FBQ0MsTUFBRixDQUFTSCxLQUFyQyxFQURvQixDQUVwQjs7QUFDQSxRQUFJMUIsT0FBTyxDQUFDZ0Isa0JBQVIsRUFBSixFQUFrQztBQUNqQ2hCLGFBQU8sQ0FBQ1MsaUJBQVI7QUFDQW1CLE9BQUMsQ0FBQ0MsTUFBRixDQUFTQyxPQUFULEdBQW1CLEtBQW5CO0FBQ0EsS0FIRCxDQUlBO0FBSkEsU0FLSztBQUNKOUIsZUFBTyxDQUFDQyxnQkFBUjtBQUNBMkIsU0FBQyxDQUFDQyxNQUFGLENBQVNDLE9BQVQsR0FBbUIsSUFBbkI7QUFDQTtBQUNEO0FBNURjLENBQWhCO0FBOERBOUIsT0FBTyxDQUFDbUIsVUFBUjtBQUNBLGlFQUFlbkIsT0FBZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUM1RkE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVDLENBQUMsU0FBUytCLElBQVQsR0FBZ0I7QUFDakI3QixVQUFRLENBQUNDLGVBQVQsQ0FBeUJHLE9BQXpCLENBQWlDQyxLQUFqQyxHQUF5QyxNQUF6QztBQUNBLENBRkE7O0FBSURNLE1BQU0sQ0FBQ2IsT0FBUCxHQUFpQkEsMkNBQWpCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGhlbWlmeSA9IHtcblx0c3dpdGNoVG9EYXJrTW9kZTogZnVuY3Rpb24gKCkge1xuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJylcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC50aGVtZSA9ICdkYXJrJ1xuXHRcdGxvY2FsU3RvcmFnZS50aGVtZSA9ICdkYXJrJ1xuXHR9LFxuXHRzd2l0Y2hUb0xpZ2h0TW9kZTogZnVuY3Rpb24gKCkge1xuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcblx0XHRsb2NhbFN0b3JhZ2UudGhlbWUgPSAnbGlnaHQnXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQudGhlbWUgPSAnbGlnaHQnXG5cdH0sXG5cdHN3aXRjaFRvRGFya01vZGVCeVVzZXJQcmVmZXJlbmNlOiBmdW5jdGlvbiAoKSB7XG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuXHR9LFxuXHRwcmVmZXJzRGFya01vZGVCeU9TOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaWYgdGhlbWUgaXMgbm90IHNldHRlZCBhbmQgdXNlciBwcmVmZXJzIGRhcmsgbW9kZSBieSBPUyByZXR1cm4gdHJ1ZVxuXHRcdHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXNcblx0fSxcblx0aXNEYXJrTW9kZVJlbmRlcmVkOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZS50aGVtZSA9PT0gJ2RhcmsnIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUuaW5jbHVkZXMoJ2RhcmsnKVxuXHR9LFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gZmlyc3Q6IGNoZWNrIGlmIGxvY2FsU3RvcmFnZSBoYXMgc2VsY3RlZCB0aGVtZVxuXHRcdGxldCBzZWxlY3RlZFRoZW1lID0gbG9jYWxTdG9yYWdlLnRoZW1lXG5cdFx0Y29uc29sZS5sb2coJ3NlbGVjdGVkVGhlbWUnLCBzZWxlY3RlZFRoZW1lKVxuXHRcdC8vIGlmIHVzZXIgaGFzbid0IGNob29zZSBhbnkgdGhlbWUgY2hlY2sgT1MgbGV2ZWwgcHJlZmVyZW5jZVxuXHRcdGlmICghc2VsZWN0ZWRUaGVtZSkge1xuXHRcdFx0Ly8gaWYgdXNlciBwcmVmZXJzIGRhcmsgbW9kZSBieSBPUywgc2V0IGRhcmsgbW9kZSBieSBjbGFzcyBhcHBlbmRpbmdcblx0XHRcdGlmICh0aGlzLnByZWZlcnNEYXJrTW9kZUJ5T1MoKSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygndXNlciBwcmVmZXIgZGFyayBtb2RlIGJ5IE9TIGxldmVsJylcblx0XHRcdFx0dGhpcy5zd2l0Y2hUb0RhcmtNb2RlQnlVc2VyUHJlZmVyZW5jZSgpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGlmIHVzZXIgaGFzIGNob3NlIGxpZ2h0IG1vZGUgYmVmb3JlXG5cdFx0ZWxzZSBpZiAoc2VsZWN0ZWRUaGVtZSA9PT0gJ2xpZ2h0JykgdGhpcy5zd2l0Y2hUb0xpZ2h0TW9kZSgpXG5cdFx0Ly8gaWYgdXNlciBoYXMgY2hvc2UgZGFyayBtb2RlIGJlZm9yZVxuXHRcdGVsc2UgaWYgKHNlbGVjdGVkVGhlbWUgPT09ICdkYXJrJykgdGhpcy5zd2l0Y2hUb0RhcmtNb2RlKClcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUnKVxuXHRcdFx0aWYgKHRvZ2dsZSkge1xuXHRcdFx0XHR0b2dnbGUudmFsdWUgPSB0aGVtaWZ5LmlzRGFya01vZGVSZW5kZXJlZCgpID8gJ29uJyA6ICdvZmYnXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhlbWlmeS5zd2l0Y2gpXG5cdFx0XHRcdH0sIDUwMClcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXHRzd2l0Y2g6IGZ1bmN0aW9uIChlKSB7XG5cdFx0Y29uc29sZS5sb2coJ3N3aXRjaCB2YWx1ZScsIGUudGFyZ2V0LnZhbHVlKVxuXHRcdC8vIGNoZWNrIGlmIGRhcmsgbW9kZSByZW5kZXJlZCB0aGVuIHN3aXRjaCB0byBsaWdodCBtb2RlXG5cdFx0aWYgKHRoZW1pZnkuaXNEYXJrTW9kZVJlbmRlcmVkKCkpIHtcblx0XHRcdHRoZW1pZnkuc3dpdGNoVG9MaWdodE1vZGUoKVxuXHRcdFx0ZS50YXJnZXQuY2hlY2tlZCA9IGZhbHNlXG5cdFx0fVxuXHRcdC8vIGVsc2Ugc3dpdGNoIHRvIGRhcmsgbW9kZVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhlbWlmeS5zd2l0Y2hUb0RhcmtNb2RlKClcblx0XHRcdGUudGFyZ2V0LmNoZWNrZWQgPSB0cnVlXG5cdFx0fVxuXHR9LFxufVxudGhlbWlmeS5pbml0aWFsaXplKClcbmV4cG9ydCBkZWZhdWx0IHRoZW1pZnlcbi8qXG53aW5kb3cudGhlbWVTd2l0Y2ggPSBmdW5jdGlvbiB0aGVtZVN3aXRjaCgpIHtcblx0Ly8gT24gcGFnZSBsb2FkIG9yIHdoZW4gY2hhbmdpbmcgdGhlbWVzLCBiZXN0IHRvIGFkZCBpbmxpbmUgaW4gYGhlYWRgIHRvIGF2b2lkIEZPVUNcblx0Y29uc29sZS5sb2coJ3RoZW1lU3dpdGNoIGZ1bmN0aW9uIC0tPiBsb2NhbFN0b3JhZ2UudGhlbWUnLCBsb2NhbFN0b3JhZ2UudGhlbWUpXG5cdGNvbnNvbGUubG9nKFxuXHRcdCd0aGVtZVN3aXRjaCBmdW5jdGlvbiAtLT4gZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdCcsXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdFxuXHQpXG5cblx0aWYgKFxuXHRcdGxvY2FsU3RvcmFnZS50aGVtZSA9PT0gJ2RhcmsnIHx8XG5cdFx0KCEoJ3RoZW1lJyBpbiBsb2NhbFN0b3JhZ2UpICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcylcblx0KSB7XG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuXHRcdGxvY2FsU3RvcmFnZS50aGVtZSA9ICdkYXJrJ1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUubG9nKCdjaGFuZ2luZyB0byBMaWdodCcpXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKVxuXHRcdGxvY2FsU3RvcmFnZS50aGVtZSA9ICdsaWdodCdcblx0fVxuXG5cdC8vIFdoZW5ldmVyIHRoZSB1c2VyIGV4cGxpY2l0bHkgY2hvb3NlcyBsaWdodCBtb2RlXG5cblx0Ly8gV2hlbmV2ZXIgdGhlIHVzZXIgZXhwbGljaXRseSBjaG9vc2VzIGRhcmsgbW9kZVxuXG5cdC8vIFdoZW5ldmVyIHRoZSB1c2VyIGV4cGxpY2l0bHkgY2hvb3NlcyB0byByZXNwZWN0IHRoZSBPUyBwcmVmZXJlbmNlXG5cdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0aGVtZScpXG59XG4qL1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJ1xuaW1wb3J0IHRoZW1pZnkgZnJvbSAnLi90aGVtZSdcbi8vY29uc29sZS5sb2coJ2FwcCBqcycpXG47KGZ1bmN0aW9uIGluaXQoKSB7XG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kYXRhc2V0LnRoZW1lID0gJ2FxdWEnXG59KSgpXG5cbndpbmRvdy50aGVtaWZ5ID0gdGhlbWlmeVxuXG4vKlxuXG5mdW5jdGlvbiB0cnlDb29raWUocmVxdWVzdCwgcmVzcG9uc2UsIGtleSwgdmFsdWUpIHtcblx0Y29uc3QgZXhpc3RpbmdJdGVtcyA9IHJlcXVlc3QuY29va2llKGtleSwgW10pXG5cdGNvbnNvbGUubG9nKCdleGlzdGluZyBpdGVtczogJywgZXhpc3RpbmdJdGVtcylcblx0cmVzcG9uc2UuY29va2llKGtleSwgdmFsdWUpXG59XG5cbiovXG4iXSwic291cmNlUm9vdCI6IiJ9