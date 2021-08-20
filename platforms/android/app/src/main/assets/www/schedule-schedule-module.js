(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedule-schedule-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Agenda</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<ion-item-group *ngFor=\"let group of groupedGames\">\n\n      <ion-item-divider light>{{group.date}}</ion-item-divider>\n      <ion-item id=iteim{{game.id}} *ngFor=\"let game of group.games\" >  \n\t  <ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"3\">\n\t\t\t\t{{game.court}}<br>{{game.strdisplaytime}}\n\t\t\t</ion-col>\n\t\t\t<ion-col *ngIf=\"game.player1 === user.shortname || game.player2 === user.shortname\" size=\"7\">\n\t\t\t\t<div style=\"color: blue\">{{game.player1_firstname}} {{game.player1_lastname}}</div><div style=\"color: blue\">{{game.player2_firstname}} {{game.player2_lastname}}</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col *ngIf=\"game.player1 !== user.shortname && game.player2 !== user.shortname\" size=\"7\">\n\t\t\t\t<div>{{game.player1_firstname}} {{game.player1_lastname}}</div><div>{{game.player2_firstname}} {{game.player2_lastname}}</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"1\">\n\t\t\t\t{{game.displaygame1}} {{game.displaygame2}}\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"1\">\n\t\t\t\t<ion-button  (click)=\"gameSelected(game)\">\n\t\t\t\t\t>\n\t\t\t\t\t\n\t\t\t\t</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t  </ion-grid>\n\t</ion-item>\n    </ion-item-group>\n\t</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/schedule/schedule-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/schedule/schedule-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SchedulePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageRoutingModule", function() { return SchedulePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule.page */ "./src/app/schedule/schedule.page.ts");




var routes = [
    {
        path: '',
        component: _schedule_page__WEBPACK_IMPORTED_MODULE_3__["SchedulePage"]
    }
];
var SchedulePageRoutingModule = /** @class */ (function () {
    function SchedulePageRoutingModule() {
    }
    SchedulePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SchedulePageRoutingModule);
    return SchedulePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/schedule/schedule.module.ts":
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.module.ts ***!
  \*********************************************/
/*! exports provided: SchedulePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function() { return SchedulePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule-routing.module */ "./src/app/schedule/schedule-routing.module.ts");
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule.page */ "./src/app/schedule/schedule.page.ts");







var SchedulePageModule = /** @class */ (function () {
    function SchedulePageModule() {
    }
    SchedulePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _schedule_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchedulePageRoutingModule"]
            ],
            declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_6__["SchedulePage"]]
        })
    ], SchedulePageModule);
    return SchedulePageModule;
}());



/***/ }),

/***/ "./src/app/schedule/schedule.page.scss":
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-content {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-item {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-item-divider {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-button {\n  --background: #46D863;\n}\n\nblue {\n  --color: blue ;\n}\n\na {\n  color: #fff;\n}\n\nscheduled-page .redcolor {\n  color: red;\n}\n\nscheduled-page .whitecolor {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUFFSjs7QUFBQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUdKOztBQURBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FBSUo7O0FBRkE7RUFDSSxxQkFBQTtBQUtKOztBQUhBO0VBQ0MsY0FBQTtBQU1EOztBQUpBO0VBQ0ksV0FBQTtBQU9KOztBQUhDO0VBQ0MsVUFBQTtBQU1GOztBQUhDO0VBQ0MsWUFBQTtBQUtGIiwiZmlsZSI6InNyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NkQ4NjM7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNDZEODYzO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogIzQ2RDg2MztcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuaW9uLWl0ZW0tZGl2aWRlcntcclxuICAgIC0tYmFja2dyb3VuZDogIzQ2RDg2MztcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogIzQ2RDg2MztcclxufVxyXG5ibHVlIHtcclxuXHQtLWNvbG9yOiBibHVlXHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5zY2hlZHVsZWQtcGFnZSB7XHJcblx0LnJlZGNvbG9ye1xyXG5cdFx0Y29sb3I6IHJlZDtcclxuXHR9XHJcblxyXG5cdC53aGl0ZWNvbG9ye1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG59XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/schedule/schedule.page.ts":
/*!*******************************************!*\
  !*** ./src/app/schedule/schedule.page.ts ***!
  \*******************************************/
/*! exports provided: SchedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePage", function() { return SchedulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



var SchedulePage = /** @class */ (function () {
    function SchedulePage(http) {
        this.http = http;
        this.apiUrl = 'http://tennismanager.dp-it.nl/webservice.asmx';
        this.user = JSON.parse(window.localStorage.getItem('userdata'));
        this.groupedGames = [];
        //this.loadActiveGames();
    }
    SchedulePage.prototype.ngOnInit = function () {
    };
    SchedulePage.prototype.ionViewDidEnter = function () {
        console.log("ionviewDIDEnter schedule");
        //allgames
        this.groupedGames = [];
        this.loadActiveGames();
    };
    SchedulePage.prototype.loadActiveGames = function () {
        var _this = this;
        this.http.get(this.apiUrl + '/AllGames').subscribe(function (response) {
            _this.groupGames(JSON.parse(response.toString()));
        });
    };
    SchedulePage.prototype.groupGames = function (games) {
        var _this = this;
        console.log("--");
        var sortedGames = games.sort();
        var currentDate = "";
        var currentGames = [];
        sortedGames.forEach(function (value, index) {
            if (value.strscheduleddate != currentDate) {
                currentDate = value.strdisplaydate;
                var newGroup = {
                    date: currentDate,
                    games: []
                };
                currentGames = newGroup.games;
                _this.groupedGames.push(newGroup);
            }
            currentGames.push(value);
        });
    };
    SchedulePage.prototype.gameSelected = function (game) {
        window.localStorage.setItem('gamedata', JSON.stringify(game));
        document.getElementById("tab-button-game").click();
    };
    SchedulePage.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SchedulePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./schedule.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./schedule.page.scss */ "./src/app/schedule/schedule.page.scss")).default]
        })
    ], SchedulePage);
    return SchedulePage;
}());



/***/ })

}]);
//# sourceMappingURL=schedule-schedule-module.js.map