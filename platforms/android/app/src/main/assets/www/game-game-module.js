(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["game-game-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Wedstrijd</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n <ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\"><strong>Gepland :</strong></ion-col> \n\t\t\t<ion-col size=\"5\">{{game.strscheduleddate}} {{game.strscheduledtime}}</ion-col> \n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\"><strong>Baan :</strong></ion-col> \n\t\t\t<ion-col size=\"5\">{{game.court}} </ion-col> \n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"9\">{{game.player1_firstname}} {{game.player1_lastname}}</ion-col> \n\t\t\t<ion-col size=\"2\">{{game.displaygame1}}</ion-col> \n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"9\">{{game.player2_firstname}} {{game.player2_lastname}}</ion-col> \n\t\t\t<ion-col size=\"2\">{{game.displaygame2}}</ion-col> \n\t\t</ion-row>\n\t</ion-grid>\n  <form  #form=\"ngForm\" (ngSubmit)=\"submitRegister(form)\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"8\">\n          <div padding>\n            <ion-item>\n              Gespeeld:<ion-input  name=\"played\" type=\"date\" placeholder=\"{{game.strplayeddate}}\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n              Tijd:<ion-input  name=\"time\" type=\"time\" placeholder=\"{{game.strplayedtime}}\" ngModel required></ion-input>\n            </ion-item>\n            Games 1<ion-item>\n              <ion-input name=\"game1\" type=\"number\" placeholder=\"{{game.games1}}\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n              Games 2<ion-input name=\"game2\" type=\"number\" placeholder=\"{{game.games2}}\" ngModel required></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button  size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Doorvoeren</ion-button>\n\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/game/game-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/game/game-routing.module.ts ***!
  \*********************************************/
/*! exports provided: GamePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageRoutingModule", function() { return GamePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.page */ "./src/app/game/game.page.ts");




var routes = [
    {
        path: '',
        component: _game_page__WEBPACK_IMPORTED_MODULE_3__["GamePage"]
    }
];
var GamePageRoutingModule = /** @class */ (function () {
    function GamePageRoutingModule() {
    }
    GamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GamePageRoutingModule);
    return GamePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/game/game.module.ts":
/*!*************************************!*\
  !*** ./src/app/game/game.module.ts ***!
  \*************************************/
/*! exports provided: GamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageModule", function() { return GamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-routing.module */ "./src/app/game/game-routing.module.ts");
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game.page */ "./src/app/game/game.page.ts");







var GamePageModule = /** @class */ (function () {
    function GamePageModule() {
    }
    GamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _game_routing_module__WEBPACK_IMPORTED_MODULE_5__["GamePageRoutingModule"]
            ],
            declarations: [_game_page__WEBPACK_IMPORTED_MODULE_6__["GamePage"]]
        })
    ], GamePageModule);
    return GamePageModule;
}());



/***/ }),

/***/ "./src/app/game/game.page.scss":
/*!*************************************!*\
  !*** ./src/app/game/game.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #DA522D;\n  --color: #fff;\n}\n\nion-content {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-item {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-item-divider {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-button {\n  --background: #DA522D;\n}\n\na {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUFHSjs7QUFEQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZBO0VBQ0kscUJBQUE7QUFLSjs7QUFGQTtFQUNJLFdBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogI0RBNTIyRDtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NkQ4NjM7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNDZEODYzO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5pb24taXRlbS1kaXZpZGVye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNDZEODYzO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjREE1MjJEO1xyXG59XHJcblxyXG5he1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/game/game.page.ts":
/*!***********************************!*\
  !*** ./src/app/game/game.page.ts ***!
  \***********************************/
/*! exports provided: GamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePage", function() { return GamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var GamePage = /** @class */ (function () {
    function GamePage() {
        this.game = JSON.parse(window.localStorage.getItem('gamedata'));
    }
    GamePage.prototype.ngOnInit = function () {
    };
    GamePage.prototype.ionViewDidEnter = function () {
        console.log("ionviewDIDEnter game");
        this.game = JSON.parse(window.localStorage.getItem('gamedata'));
        console.log(JSON.stringify(this.game));
    };
    GamePage.ctorParameters = function () { return []; };
    GamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./game.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/game.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./game.page.scss */ "./src/app/game/game.page.scss")).default]
        })
    ], GamePage);
    return GamePage;
}());



/***/ })

}]);
//# sourceMappingURL=game-game-module.js.map