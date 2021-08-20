(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["message-message-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Meldingen</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/message/message-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/message/message-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageRoutingModule", function() { return MessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.page */ "./src/app/message/message.page.ts");




var routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_3__["MessagePage"]
    }
];
var MessagePageRoutingModule = /** @class */ (function () {
    function MessagePageRoutingModule() {
    }
    MessagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MessagePageRoutingModule);
    return MessagePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/message/message.module.ts":
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/*! exports provided: MessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message-routing.module */ "./src/app/message/message-routing.module.ts");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.page */ "./src/app/message/message.page.ts");







var MessagePageModule = /** @class */ (function () {
    function MessagePageModule() {
    }
    MessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _message_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagePageRoutingModule"]
            ],
            declarations: [_message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]]
        })
    ], MessagePageModule);
    return MessagePageModule;
}());



/***/ }),

/***/ "./src/app/message/message.page.scss":
/*!*******************************************!*\
  !*** ./src/app/message/message.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #DA522D;\n  --color: #fff;\n}\n\nion-content {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-item {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-item-divider {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-button {\n  --background: #DA522D;\n}\n\na {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUFHSjs7QUFEQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZBO0VBQ0kscUJBQUE7QUFLSjs7QUFGQTtFQUNJLFdBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0RBNTIyRDtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NkQ4NjM7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNDZEODYzO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5pb24taXRlbS1kaXZpZGVye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNDZEODYzO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjREE1MjJEO1xyXG59XHJcblxyXG5he1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/message/message.page.ts":
/*!*****************************************!*\
  !*** ./src/app/message/message.page.ts ***!
  \*****************************************/
/*! exports provided: MessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var MessagePage = /** @class */ (function () {
    function MessagePage() {
    }
    MessagePage.prototype.ngOnInit = function () {
    };
    MessagePage.ctorParameters = function () { return []; };
    MessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./message.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./message.page.scss */ "./src/app/message/message.page.scss")).default]
        })
    ], MessagePage);
    return MessagePage;
}());



/***/ })

}]);
//# sourceMappingURL=message-message-module.js.map