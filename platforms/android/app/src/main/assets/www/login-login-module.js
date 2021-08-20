(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>de TennisManager</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding class=\"backgroundimage\">\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h3>Login</h3>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-input name=\"email\" type=\"email\" placeholder=\"your@email.com\" ngModel required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Login</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n\t  <ion-item-divider>\n\t\t</ion-item-divider>\n\t  <ion-row>\n          <div text-center>\n\t\t\tHeb je nog geen account, registreer dan hier:\n            <ion-button size=\"large\" (click) = \"btnRegister()\"  expand=\"block\">Registreer hier</ion-button>\n          </div>\n\t\t   <div padding>\n\t\t   \n\t\t   </div>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #DA522D;\n  --color: #fff;\n}\n\nion-content {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-item {\n  --background: #3FC157;\n  --color: #fff;\n}\n\nion-item-divider {\n  --background: #46D863;\n  --color: #fff;\n}\n\nion-button {\n  --background: #DA522D;\n}\n\na {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUFFSjs7QUFBQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUdKOztBQURBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FBSUo7O0FBRkE7RUFDSSxxQkFBQTtBQUtKOztBQUZBO0VBQ0ksV0FBQTtBQUtKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNEQTUyMkQ7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNDZEODYzO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogIzNGQzE1NztcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuaW9uLWl0ZW0tZGl2aWRlcntcclxuICAgIC0tYmFja2dyb3VuZDogIzQ2RDg2MztcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogI0RBNTIyRDtcclxufVxyXG5cclxuYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cordova-plugin-fcm-with-dependecy-updated/ionic/ngx */ "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/ngx/FCM.js");







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, http, platform, router, fcm) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.platform = platform;
        this.router = router;
        this.fcm = fcm;
        this.apiUrl = 'http://tennismanager.dp-it.nl/webservice.asmx';
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function (form) {
        var _this = this;
        //alert(this.apiUrl+'/LoginUser?input='+JSON.stringify(form.value));
        this.http.get(this.apiUrl + '/LoginUser?input=' + JSON.stringify(form.value)).subscribe(function (response) {
            _this.user = JSON.parse(response.toString());
            if (_this.user.message == "OK") {
                var isDesktop = _this.platform.platforms().includes("desktop");
                if (!isDesktop) {
                    _this.fcm.getToken().then(function (token) {
                        _this.user = JSON.parse(window.localStorage.getItem('userdata'));
                        if (_this.user) {
                            //alert(this.user.id)
                            _this.http.get(_this.apiUrl + '/UpdateToken?id=' + _this.user.id + '&token=' + token).subscribe(function (response) {
                            });
                        }
                        console.log("getToken login:" + token);
                    });
                }
                window.localStorage.setItem('userdata', JSON.stringify(_this.user));
                //this.navCtrl.back(); 
                console.log('ingelogd');
                _this.router.navigate(["tabs"]);
            }
        });
    };
    LoginPage.prototype.btnRegister = function () {
        this.router.navigate(["register"]);
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: cordova_plugin_fcm_with_dependecy_updated_ionic_ngx__WEBPACK_IMPORTED_MODULE_5__["FCM"] }
    ]; };
    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
        })
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map