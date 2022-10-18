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
        //priority: document.querySelector('.form-radio').value,
        dueDate: document.querySelector('#date-input').value,
        desc: document.querySelector('#desc-input').value,
        priority: () => {
            const priorityLow = document.getElementById('priority-low');
            const priorityMed = document.getElementById('priority-med');
            const priorityHigh = document.getElementById('priority-high');
            if (priorityLow.checked === true) {
                return 'low';
            } else if (priorityMed.checked === true) {
                return 'med';
            } else {return 'high';};
        },
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
            console.log(`This project's priority is: ${priority}`)
        };
        const sayDesc = () => {
            console.log(`This project's description is: ${desc}`);
        }
        return {TODOS, title, sayTitle, sayDueDate, sayPriority, sayDesc};
    };

    const createdProject = new todoProject(rawFormData.title, rawFormData.priority(), rawFormData.dueDate, rawFormData.desc);
    console.log(createdProject);
    
    localStorage.setItem(`${createdProject.title}`, JSON.stringify(createdProject));
    console.log(`${createdProject.title} has been logged in storage.`);
    createdProject.sayTitle();
    createdProject.sayPriority();
    createdProject.sayDueDate();
    createdProject.sayDesc();
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybVBhcnNlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxNQUFNO0FBQzFEO0FBQ0E7QUFDQSx1REFBdUQsUUFBUTtBQUMvRDtBQUNBO0FBQ0EsdURBQXVELFNBQVM7QUFDaEU7QUFDQTtBQUNBLDBEQUEwRCxLQUFLO0FBQy9EO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFkeS1zZXQtZ28vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVhZHktc2V0LWdvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWFkeS1zZXQtZ28vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZWFkeS1zZXQtZ28vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZWFkeS1zZXQtZ28vLi9zcmMvZm9ybXBhcnNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypUaGlzIG1vZHVsZSBpcyByZXNwb25zaWJsZSBmb3IgdGFraW5nIHRoZSBkYXRhIGZyb21cbnRoZSBuZXcgcHJvamVjdCBmb3JtIGFuZCB1c2luZyBpdCB0byBjcmVhdGUgYSBuZXcgcHJvamVjdC4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybVBhcnNlcigpIHtcbiAgICBjb25zdCByYXdGb3JtRGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgICAvL3ByaW9yaXR5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1yYWRpbycpLnZhbHVlLFxuICAgICAgICBkdWVEYXRlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBkZXNjOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzYy1pbnB1dCcpLnZhbHVlLFxuICAgICAgICBwcmlvcml0eTogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlMb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktbG93Jyk7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eU1lZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eS1tZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eS1oaWdoJyk7XG4gICAgICAgICAgICBpZiAocHJpb3JpdHlMb3cuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbG93JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHlNZWQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbWVkJztcbiAgICAgICAgICAgIH0gZWxzZSB7cmV0dXJuICdoaWdoJzt9O1xuICAgICAgICB9LFxuICAgIH07XG4gICAgZnVuY3Rpb24gdG9kb1Byb2plY3QodGl0bGUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjKSB7XG4gICAgICAgIGNvbnN0IFRPRE9TID0gW107XG4gICAgICAgIGNvbnN0IHNheVRpdGxlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRoaXMgcHJvamVjdCdzIHRpdGxlIGlzOiAke3RpdGxlfWApO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzYXlEdWVEYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRoaXMgcHJvamVjdCdzIGR1ZSBkYXRlIGlzOiAke2R1ZURhdGV9YCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNheVByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRoaXMgcHJvamVjdCdzIHByaW9yaXR5IGlzOiAke3ByaW9yaXR5fWApXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNheURlc2MgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGhpcyBwcm9qZWN0J3MgZGVzY3JpcHRpb24gaXM6ICR7ZGVzY31gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1RPRE9TLCB0aXRsZSwgc2F5VGl0bGUsIHNheUR1ZURhdGUsIHNheVByaW9yaXR5LCBzYXlEZXNjfTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlZFByb2plY3QgPSBuZXcgdG9kb1Byb2plY3QocmF3Rm9ybURhdGEudGl0bGUsIHJhd0Zvcm1EYXRhLnByaW9yaXR5KCksIHJhd0Zvcm1EYXRhLmR1ZURhdGUsIHJhd0Zvcm1EYXRhLmRlc2MpO1xuICAgIGNvbnNvbGUubG9nKGNyZWF0ZWRQcm9qZWN0KTtcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtjcmVhdGVkUHJvamVjdC50aXRsZX1gLCBKU09OLnN0cmluZ2lmeShjcmVhdGVkUHJvamVjdCkpO1xuICAgIGNvbnNvbGUubG9nKGAke2NyZWF0ZWRQcm9qZWN0LnRpdGxlfSBoYXMgYmVlbiBsb2dnZWQgaW4gc3RvcmFnZS5gKTtcbiAgICBjcmVhdGVkUHJvamVjdC5zYXlUaXRsZSgpO1xuICAgIGNyZWF0ZWRQcm9qZWN0LnNheVByaW9yaXR5KCk7XG4gICAgY3JlYXRlZFByb2plY3Quc2F5RHVlRGF0ZSgpO1xuICAgIGNyZWF0ZWRQcm9qZWN0LnNheURlc2MoKTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9