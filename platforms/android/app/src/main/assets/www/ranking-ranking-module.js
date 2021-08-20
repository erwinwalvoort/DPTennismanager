(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ranking-ranking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ranking/ranking.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ranking/ranking.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Standen</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ranking/ranking-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/ranking/ranking-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RankingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingPageRoutingModule", function() { return RankingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ranking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ranking.page */ "./src/app/ranking/ranking.page.ts");




var routes = [
    {
        path: '',
        component: _ranking_page__WEBPACK_IMPORTED_MODULE_3__["RankingPage"]
    }
];
var RankingPageRoutingModule = /** @class */ (function () {
    function RankingPageRoutingModule() {
    }
    RankingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RankingPageRoutingModule);
    return RankingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/ranking/ranking.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ranking/ranking.module.ts ***!
  \*******************************************/
/*! exports provided: RankingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingPageModule", function() { return RankingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ranking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ranking-routing.module */ "./src/app/ranking/ranking-routing.module.ts");
/* harmony import */ var _ranking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ranking.page */ "./src/app/ranking/ranking.page.ts");







var RankingPageModule = /** @class */ (function () {
    function RankingPageModule() {
    }
    RankingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ranking_routing_module__WEBPACK_IMPORTED_MODULE_5__["RankingPageRoutingModule"]
            ],
            declarations: [_ranking_page__WEBPACK_IMPORTED_MODULE_6__["RankingPage"]]
        })
    ], RankingPageModule);
    return RankingPageModule;
}());



/***/ }),

/***/ "./src/app/ranking/ranking.page.scss":
/*!*******************************************!*\
  !*** ./src/app/ranking/ranking.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #DA522D;\n  --color: #fff;\n}\n\nion-content {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-item {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-item-divider {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-button {\n  --background: #DA522D;\n}\n\na {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFua2luZy9yYW5raW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUFHSjs7QUFEQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZBO0VBQ0kscUJBQUE7QUFLSjs7QUFGQTtFQUNJLFdBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL3JhbmtpbmcvcmFua2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0RBNTIyRDtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NkQ4NjM7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNDZEODYzO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5pb24taXRlbS1kaXZpZGVye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNDZEODYzO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjREE1MjJEO1xyXG59XHJcblxyXG5he1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/ranking/ranking.page.ts":
/*!*****************************************!*\
  !*** ./src/app/ranking/ranking.page.ts ***!
  \*****************************************/
/*! exports provided: RankingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingPage", function() { return RankingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var RankingPage = /** @class */ (function () {
    function RankingPage() {
    }
    RankingPage.prototype.ngOnInit = function () {
    };
    RankingPage.ctorParameters = function () { return []; };
    RankingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ranking',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ranking.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ranking/ranking.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ranking.page.scss */ "./src/app/ranking/ranking.page.scss")).default]
        })
    ], RankingPage);
    return RankingPage;
}());



/***/ })

}]);
//# sourceMappingURL=ranking-ranking-module.js.map