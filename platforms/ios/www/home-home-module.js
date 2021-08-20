(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"btnLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Home </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  <ion-list>\n      <ion-item>\n\t\tHallo {{user.firstname}} {{user.lastname}} ({{user.shortname}})\n      </ion-item>\n  </ion-list>\n  <ion-list>\n      <ion-item>\n          Eerstvolgende wedstrijd:<br>\n      </ion-item>\n\t  <ion-button expand=\"full\" (click)=\"gameSelected(nextgame)\">\n\t\t  <ion-item>\n\t\t\t  {{nextgame.strscheduleddate}}<br>\n\t\t\t  {{nextgame.strscheduledtime}} <i class = \"icon ion-star\"></i>\n\t\t  </ion-item>\n\t\t  <ion-item>\n\t\t\t  {{nextgame.player1_firstname}} {{nextgame.player1_lastname}}  <br>\n\t\t\t  {{nextgame.player2_firstname}} {{nextgame.player2_lastname}}  \n\t\t  </ion-item>\n\t\t  <ion-item>\n\t\t\t  -<br>\n\t\t\t  -\n\t\t  </ion-item>\n\t  </ion-button>\n  </ion-list>\n  <ion-list>\n      <ion-item>\n          Laatste wedstrijd:<br>\n      </ion-item>\n\t  <ion-button expand=\"full\" (click)=\"gameSelected(lastgame)\">\n\t\t\t  <ion-item>\n\t\t\t\t  {{lastgame.strplayeddate}} <br>\n\t\t\t\t  {{lastgame.strplayedtime}} \n\t\t\t  <ion-item>\n\t\t\t  </ion-item>\n\t\t\t\t  {{lastgame.player1_firstname}} {{lastgame.player1_lastname}}  <br>\n\t\t\t\t  {{lastgame.player2_firstname}} {{lastgame.player2_lastname}}  \n\t\t\t  </ion-item>\n\t\t\t  <ion-item>\n\t\t\t\t  {{lastgame.games1}}<br>\n\t\t\t\t  {{lastgame.games2}}\n\t\t\t  </ion-item>\n\t  </ion-button>\n  </ion-list>\n  <ion-button expand=\"full\" (click)=\"messageSelected()\">Er zijn {{messagecount}} melding(en)</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #DA522D;\n  --color: #fff;\n}\n\nion-content {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-item {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-item-divider {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-button {\n  --background: #46D863;\n}\n\nin-list {\n  --background: #DA522D;\n}\n\ngame {\n  --background: #DA522D;\n}\n\na {\n  color: #fff;\n}\n\n.tabs-md .tabbar {\n  background: #00c6ff;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #0072ff, #00c6ff);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUFHSjs7QUFEQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZBO0VBQ0kscUJBQUE7QUFLSjs7QUFIQTtFQUNJLHFCQUFBO0FBTUo7O0FBSkE7RUFDSSxxQkFBQTtBQU9KOztBQUpBO0VBQ0ksV0FBQTtBQU9KOztBQUxBO0VBQ0ksbUJBQUE7RUFBc0IsOEJBQUE7RUFDNEMsK0JBQUE7RUFDbEUsdURBQUE7RUFBeUQscUVBQUE7QUFXN0QiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNEQTUyMkQ7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNDZEODYzO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogIzQ2RDg2MztcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuaW9uLWl0ZW0tZGl2aWRlcntcclxuICAgIC0tYmFja2dyb3VuZDogIzQ2RDg2MztcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogIzQ2RDg2MztcclxufVxyXG5pbi1saXN0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjREE1MjJEO1xyXG59XHJcbmdhbWV7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNEQTUyMkQ7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4udGFicy1tZCAudGFiYmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMGM2ZmY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNzJmZiwgIzAwYzZmZik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA3MmZmLCAjMDBjNmZmKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, router) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.router = router;
        this.apiUrl = 'http://tennismanager.dp-it.nl/webservice.asmx';
        this.user = JSON.parse(window.localStorage.getItem('userdata'));
        this.lastgame = [];
        this.nextgame = [];
        this.messagecount = 0;
    }
    HomePage.prototype.btnLogout = function () {
        window.localStorage.removeItem('userdata');
        this.router.navigate(["login"]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log("ionviewDIDLoad home");
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log("ionviewDIDnter home");
        this.user = JSON.parse(window.localStorage.getItem('userdata'));
        //lastgame
        this.http.get(this.apiUrl + '/LastGame?shortname=' + this.user.shortname).subscribe(function (response) {
            _this.lastgame = JSON.parse(response.toString());
        });
        //nextgame
        this.http.get(this.apiUrl + '/NextGame?shortname=' + this.user.shortname).subscribe(function (response) {
            _this.nextgame = JSON.parse(response.toString());
        });
        //count message
        console.log(this.user.id);
        this.http.get(this.apiUrl + '/AllMessages?user_id=' + this.user.id).subscribe(function (response) {
            var message = JSON.parse(response.toString());
            _this.messagecount = message.length;
        });
    };
    HomePage.prototype.messageSelected = function () {
        document.getElementById("tab-button-message").click();
    };
    HomePage.prototype.gameSelected = function (game) {
        window.localStorage.setItem('gamedata', JSON.stringify(game));
        document.getElementById("tab-button-game").click();
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map