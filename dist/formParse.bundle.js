/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**************************!*\
  !*** ./src/formparse.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formParser)
/* harmony export */ });
/*This module is responsible for taking the data from
the new project form and using it to create a new project. */

function formParser() {
    const rawFormData = {
        title: document.querySelector('#title-input').value,
        priority: document.querySelector('.form-radio').value,
        dueDate: document.querySelector('#date-input').value,
        desc: document.querySelector('#desc-input').value,
    };
    function todoProject(title, priority, dueDate, desc) {
        const TODOS = [];
        const sayTitle = () => {
            console.log(`This project's title is: ${title}`);
        };
        const sayDueDate = () => {
            console.log(`This project's due date is: ${dueDate}`);
        };
        const sayPriority = () => {
            console.log(`This project's priority is: ${priority}`);
        };
        const sayDesc = () => {
            console.log(`This project's description is: ${desc}`);
        }
        return {TODOS, title, sayTitle, sayDueDate, sayPriority, sayDesc};
    };

    const createdProject = new todoProject(rawFormData.title, rawFormData.priority, rawFormData.dueDate, rawFormData.desc);
    console.log(createdProject);
    
    localStorage.setItem(`${createdProject.title}`, JSON.stringify(createdProject));
    console.log(`${createdProject.title} has been logged in storage.`);
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybVBhcnNlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsTUFBTTtBQUMxRDtBQUNBO0FBQ0EsdURBQXVELFFBQVE7QUFDL0Q7QUFDQTtBQUNBLHVEQUF1RCxTQUFTO0FBQ2hFO0FBQ0E7QUFDQSwwREFBMEQsS0FBSztBQUMvRDtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pELG1CQUFtQixzQkFBc0I7QUFDekMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWR5LXNldC1nby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZWFkeS1zZXQtZ28vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlYWR5LXNldC1nby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlYWR5LXNldC1nby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlYWR5LXNldC1nby8uL3NyYy9mb3JtcGFyc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKlRoaXMgbW9kdWxlIGlzIHJlc3BvbnNpYmxlIGZvciB0YWtpbmcgdGhlIGRhdGEgZnJvbVxudGhlIG5ldyBwcm9qZWN0IGZvcm0gYW5kIHVzaW5nIGl0IHRvIGNyZWF0ZSBhIG5ldyBwcm9qZWN0LiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtUGFyc2VyKCkge1xuICAgIGNvbnN0IHJhd0Zvcm1EYXRhID0ge1xuICAgICAgICB0aXRsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWlucHV0JykudmFsdWUsXG4gICAgICAgIHByaW9yaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1yYWRpbycpLnZhbHVlLFxuICAgICAgICBkdWVEYXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBkZXNjOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzYy1pbnB1dCcpLnZhbHVlLFxuICAgIH07XG4gICAgZnVuY3Rpb24gdG9kb1Byb2plY3QodGl0bGUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjKSB7XG4gICAgICAgIGNvbnN0IFRPRE9TID0gW107XG4gICAgICAgIGNvbnN0IHNheVRpdGxlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRoaXMgcHJvamVjdCdzIHRpdGxlIGlzOiAke3RpdGxlfWApO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzYXlEdWVEYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRoaXMgcHJvamVjdCdzIGR1ZSBkYXRlIGlzOiAke2R1ZURhdGV9YCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNheVByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRoaXMgcHJvamVjdCdzIHByaW9yaXR5IGlzOiAke3ByaW9yaXR5fWApO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzYXlEZXNjID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRoaXMgcHJvamVjdCdzIGRlc2NyaXB0aW9uIGlzOiAke2Rlc2N9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtUT0RPUywgdGl0bGUsIHNheVRpdGxlLCBzYXlEdWVEYXRlLCBzYXlQcmlvcml0eSwgc2F5RGVzY307XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZWRQcm9qZWN0ID0gbmV3IHRvZG9Qcm9qZWN0KHJhd0Zvcm1EYXRhLnRpdGxlLCByYXdGb3JtRGF0YS5wcmlvcml0eSwgcmF3Rm9ybURhdGEuZHVlRGF0ZSwgcmF3Rm9ybURhdGEuZGVzYyk7XG4gICAgY29uc29sZS5sb2coY3JlYXRlZFByb2plY3QpO1xuICAgIFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke2NyZWF0ZWRQcm9qZWN0LnRpdGxlfWAsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRQcm9qZWN0KSk7XG4gICAgY29uc29sZS5sb2coYCR7Y3JlYXRlZFByb2plY3QudGl0bGV9IGhhcyBiZWVuIGxvZ2dlZCBpbiBzdG9yYWdlLmApO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=