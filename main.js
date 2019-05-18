(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'chat-application';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.module */ "./src/app/chat/chat.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//routing









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _chat_chat_module__WEBPACK_IMPORTED_MODULE_4__["ChatModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], pathMatch: 'full' },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                    { path: '**', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] }
                ])
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.url = 'https://chatapi.edwisor.com';
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        this.setUserInfoInLocalstorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
    } // end constructor  
    AppService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobile', data.mobile)
            .set('email', data.email)
            .set('password', data.password)
            .set('apiKey', data.apiKey);
        return this.http.post(this.url + "/api/v1/users/signup", params);
    }; // end of signupFunction function.
    AppService.prototype.signinFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/login", params);
    }; // end of signinFunction function.
    AppService.prototype.logout = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/api/v1/users/logout", params);
    }; // end logout function
    AppService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errorMessage);
    }; // END handleError
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/chat/chat-box/chat-box.component.css":
/*!******************************************************!*\
  !*** ./src/app/chat/chat-box/chat-box.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li\n{\n    list-style-type:none;\n\n}\n\n@media (min-width:574px)\n{\n.displayBlockMobile\n{\n\n    z-index:-1;\n    opacity:0;\n\n}\n}\n\ntext-area\n{\n\n background:burlywood;\n}\n\n@media (max-width:574px)\n{\n    .displayNoneMobile\n{\n    z-index:-1;\n   \n\n\n} \n\n}\n\n.container{\n    background:white;\n}\n\n.online{\n\n  height: 10px;\n  width: 10px;\n  background-color:green;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.offline{\n\n  height: 10px;\n  width: 10px;\n  background-color:red;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.rightSideClass {\n    float: right;\n    background: #ddd;\n    border-radius: 0.5em;\n  }\n\n.leftSideClass {\n    float: left;\n    background: #55C1E7;\n    border-radius: 0.5em;\n  }\n\n.circle-green:before {\n    content: ' \\25CF';\n    font-size: 1em;\n    color: green;\n  }\n\n.circle-red:before {\n    content: ' \\25CF';\n    font-size: 1em;\n    color: red;\n  }\n\n.cursorPointer {\n    cursor: pointer;\n  }\n\n.textCenter {\n    text-align: center;\n  }\n\n.floatLeft {\n    float: left;\n  }\n\n*,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\n#message-to-send\n  {\n    background:burlywood;\n    height:100px;\n  }\n\nbody {\n    padding: 2.5em 0;\n    color: white;\n  }\n\n.container {\n    margin: 0 auto;\n    background: #444753;\n    border-radius: 0.3em;\n  }\n\n.people-list {\n    float: left;\n  }\n\n.people-list input {\n    border-radius: 0.2em;\n    border: none;\n    padding: 1em;\n    color: white;\n    background: #6A6C75;\n    width: 90%;\n    font-size: 1em;\n  }\n\n.people-list .fa-search {\n    position: relative;\n    left: -1.8em;\n  }\n\n.people-list ul {\n    padding: 0;\n  }\n\n.people-list ul li .userPresence {\n    float: left;\n    padding: 0.7em 0.2em;\n    color: white;\n    text-transform: capitalize;\n  }\n\n.textCapitalize {\n    text-transform: capitalize;\n    font-size: 1.2em;\n  }\n\n.people-list img {\n    float: left;\n  }\n\n.people-list .about {\n    float: left;\n  }\n\n.people-list .about {\n    padding-left: 0.4em;\n  }\n\n.people-list .status {\n    color: #92959E;\n  }\n\n.chat {\n    height: 100vh;\n    float: left;\n    background: #F2F5F8;\n    border-top-right-radius: 0.3em;\n    border-bottom-right-radius: 0.3em;\n    color: #434651;\n  }\n\n.chat .chat-header {\n    padding: 0.2em;\n    border-bottom: 0.15em solid white;\n  }\n\n.chat .chat-header img {\n    float: left;\n  }\n\n.chat .chat-header .chat-about {\n    float: left;\n    padding-left: 0.8em;\n    margin-top: 0.4em;\n  }\n\n.chat .chat-header .chat-with {\n    font-weight: bold;\n    font-size: 1.1em;\n  }\n\n.chat .chat-header .chat-num-messages {\n    color: #92959E;\n  }\n\n.chat .chat-header .fa-star {\n    float: right;\n    color: #D8DADF;\n    font-size: 1.42em;\n    margin-top: 0.85em;\n  }\n\n.chat .chat-history {\n    padding: 2em 2em 1.42em;\n    border-bottom: 0.15em solid white;\n    overflow-y: scroll;\n    height: 80vh;\n  }\n\n.chat .chat-history .message-data {\n    margin-bottom: 1em;\n  }\n\n.chat .chat-history .message-data-time {\n    color: #a8aab1;\n    padding-left: 0.4em;\n  }\n\n.chat .chat-history .message {\n    color: white;\n    padding: 0.5em 1.42em;\n    line-height: 1.9em;\n    font-size: 1.1em;\n    border-radius: 7px;\n    margin-bottom: 2em;\n    width: 90%;\n    position: relative;\n  }\n\n.chat .chat-history .message:after {\n    bottom: 100%;\n    left: 7%;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-bottom-color: #86BB71;\n    border-width: 0.8em;\n    margin-left: -0.8em;\n  }\n\n.chat .chat-history .my-message {\n    background: #86BB71;\n  }\n\n.chat .chat-history .other-message {\n    background: #94C2ED;\n  }\n\n.chat .chat-history .other-message:after {\n    border-bottom-color: #94C2ED;\n    left: 90%;\n  }\n\n.chat .chat-message textarea {\n    width: 100%;\n    border: none;\n    padding: 0.8em 1.42em;\n    margin-bottom: 0.8em;\n    border-radius: 5px;\n    resize: none;\n  }\n\n.chat .chat-message .fa-file-o,\n  .chat .chat-message .fa-file-image-o {\n    font-size: 1.1em;\n    color: gray;\n    cursor: pointer;\n  }\n\n.chat .chat-message button {\n    float: right;\n    color: #94C2ED;\n    font-size: 1.1em;\n    text-transform: uppercase;\n    border: none;\n    cursor: pointer;\n    font-weight: bold;\n    background: #F2F5F8;\n  }\n\n.chat .chat-message button:hover {\n    color: #75b1e8;\n  }\n\n.online,\n  .offline,\n  .me,\n  .warning {\n    margin-right: 3px;\n    font-size: 0.8em;\n  }\n\n.online {\n    color: #86BB71;\n  }\n\n.offline {\n    color: #E38968;\n  }\n\n.me {\n    color: #94C2ED;\n  }\n\n.warning {\n    color: #e78930;\n  }\n\n.align-left {\n    text-align: left;\n  }\n\n.align-right {\n    text-align: right;\n  }\n\n.float-right {\n    float: right;\n  }\n\n.clearfix:after {\n    visibility: hidden;\n    display: block;\n    font-size: 0;\n    content: \" \";\n    clear: both;\n    height: 0;\n  }\n\n.customButton {\n    width: 100%;\n  }\n\n.activeChat {\n    background: #393a41;\n  }\n\n.typeOfChats {\n    background: #393a41;\n    color: white;\n    margin-top: 0.2em;\n    margin-bottom: 0.2em;\n  }\n\n.blankContent{\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 3rem;\n    color: #999;\n  }\n\n@media only screen and (max-width:576px) {\n    .chat .chat-history {\n      height:50vh;\n    }\n\n    .displayNoneMobile\n    {\n      display:none;\n    }\n\n\n  }\n\n@media only screen and (min-width:576px) and (max-width:768px) {\n    .chat .chat-history {\n      height:50vh;\n    }\n    \n  }\n\n@media only screen and (min-width:769px) and (max-width:992px) {\n    .chat .chat-history {\n      height:65vh;\n    }\n  }\n\n@media only screen and (min-width:993px) and (max-width:1200  px) {\n    .chat .chat-history {\n      height:50vh;\n    }\n  }\n\n/* user list items */\n\n.crop {\n  border-radius: 100%;\n  line-height: 1em;\n  padding: 1em;\n  text-align: center;\n  margin: 0em;\n  width: 3em;\n  height: 3em;\n  float: left;\n  text-transform: uppercase;\n}\n\n.about {\n  float: left;\n  padding-left: 0.4em;\n}\n\n.online,\n.offline,\n.me,\n.warning {\n  margin-right: 3px;\n  font-size: 0.8em;\n}\n\n.online {\n  color: #86BB71;\n}\n\n.offline {\n  color: #E38968;\n}\n\n.me {\n  color: #94C2ED;\n}\n\n.warning {\n  color: #00c8e7;\n}\n\n.status {\n  color: #92959E;\n}\n\n.name {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LWJveC9jaGF0LWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG9CQUFvQjs7QUFFeEI7O0FBRUE7O0FBRUE7OztJQUdJLFVBQVU7SUFDVixTQUFTOztBQUViO0FBQ0E7O0FBRUE7OztDQUdDLG9CQUFvQjtBQUNyQjs7QUFLQTs7SUFFSTs7SUFFQSxVQUFVOzs7O0FBSWQ7O0FBRUE7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBR0E7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUdBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtFQUNkOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVO0VBQ1o7O0FBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBOzs7SUFJRSxzQkFBc0I7RUFDeEI7O0FBRUE7O0lBRUUsb0JBQW9CO0lBQ3BCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztBQUVBO0lBQ0UsVUFBVTtFQUNaOztBQUVBO0lBQ0UsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osMEJBQTBCO0VBQzVCOztBQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsaUNBQWlDO0VBQ25DOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLDRCQUE0QjtJQUM1QixTQUFTO0VBQ1g7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7QUFFQTs7SUFFRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTs7OztJQUlFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0VBQ1g7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFdBQVc7RUFDYjs7QUFHQTtJQUNFO01BQ0UsV0FBVztJQUNiOztJQUVBOztNQUVFLFlBQVk7SUFDZDs7O0VBR0Y7O0FBQ0E7SUFDRTtNQUNFLFdBQVc7SUFDYjs7RUFFRjs7QUFDQTtJQUNFO01BQ0UsV0FBVztJQUNiO0VBQ0Y7O0FBQ0E7SUFDRTtNQUNFLFdBQVc7SUFDYjtFQUNGOztBQUVELG9CQUFvQjs7QUFFcEI7RUFDQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQtYm94L2NoYXQtYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaVxue1xuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xuXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjU3NHB4KVxue1xuLmRpc3BsYXlCbG9ja01vYmlsZVxue1xuXG4gICAgei1pbmRleDotMTtcbiAgICBvcGFjaXR5OjA7XG5cbn1cbn1cblxudGV4dC1hcmVhXG57XG5cbiBiYWNrZ3JvdW5kOmJ1cmx5d29vZDtcbn1cblxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6NTc0cHgpXG57XG4gICAgLmRpc3BsYXlOb25lTW9iaWxlXG57XG4gICAgei1pbmRleDotMTtcbiAgIFxuXG5cbn0gXG5cbn1cblxuLmNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xufVxuXG5cbi5vbmxpbmV7XG5cbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5vZmZsaW5le1xuXG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6cmVkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuXG4ucmlnaHRTaWRlQ2xhc3Mge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICB9XG4gIFxuICAubGVmdFNpZGVDbGFzcyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZDogIzU1QzFFNztcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgfVxuICBcbiAgLmNpcmNsZS1ncmVlbjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcgXFwyNUNGJztcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogZ3JlZW47XG4gIH1cbiAgXG4gIC5jaXJjbGUtcmVkOmJlZm9yZSB7XG4gICAgY29udGVudDogJyBcXDI1Q0YnO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgXG4gIC5jdXJzb3JQb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC50ZXh0Q2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5mbG9hdExlZnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIFxuICAqLFxuICAqOmJlZm9yZSxcbiAgKjphZnRlciB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAjbWVzc2FnZS10by1zZW5kXG4gIHtcbiAgICBiYWNrZ3JvdW5kOmJ1cmx5d29vZDtcbiAgICBoZWlnaHQ6MTAwcHg7XG4gIH1cbiAgXG4gIGJvZHkge1xuICAgIHBhZGRpbmc6IDIuNWVtIDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0NzUzO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICB9XG4gIFxuICAucGVvcGxlLWxpc3Qge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIFxuICAucGVvcGxlLWxpc3QgaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICM2QTZDNzU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuICBcbiAgLnBlb3BsZS1saXN0IC5mYS1zZWFyY2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMS44ZW07XG4gIH1cbiAgXG4gIC5wZW9wbGUtbGlzdCB1bCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLnBlb3BsZS1saXN0IHVsIGxpIC51c2VyUHJlc2VuY2Uge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuN2VtIDAuMmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuICBcbiAgLnRleHRDYXBpdGFsaXplIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG4gIFxuICAucGVvcGxlLWxpc3QgaW1nIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgLnBlb3BsZS1saXN0IC5hYm91dCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgXG4gIC5wZW9wbGUtbGlzdCAuYWJvdXQge1xuICAgIHBhZGRpbmctbGVmdDogMC40ZW07XG4gIH1cbiAgXG4gIC5wZW9wbGUtbGlzdCAuc3RhdHVzIHtcbiAgICBjb2xvcjogIzkyOTU5RTtcbiAgfVxuICBcbiAgLmNoYXQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYmFja2dyb3VuZDogI0YyRjVGODtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuM2VtO1xuICAgIGNvbG9yOiAjNDM0NjUxO1xuICB9XG4gIFxuICAuY2hhdCAuY2hhdC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDAuMmVtO1xuICAgIGJvcmRlci1ib3R0b206IDAuMTVlbSBzb2xpZCB3aGl0ZTtcbiAgfVxuICBcbiAgLmNoYXQgLmNoYXQtaGVhZGVyIGltZyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgXG4gIC5jaGF0IC5jaGF0LWhlYWRlciAuY2hhdC1hYm91dCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjhlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjRlbTtcbiAgfVxuICBcbiAgLmNoYXQgLmNoYXQtaGVhZGVyIC5jaGF0LXdpdGgge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gIH1cbiAgXG4gIC5jaGF0IC5jaGF0LWhlYWRlciAuY2hhdC1udW0tbWVzc2FnZXMge1xuICAgIGNvbG9yOiAjOTI5NTlFO1xuICB9XG4gIFxuICAuY2hhdCAuY2hhdC1oZWFkZXIgLmZhLXN0YXIge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogI0Q4REFERjtcbiAgICBmb250LXNpemU6IDEuNDJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjg1ZW07XG4gIH1cbiAgXG4gIC5jaGF0IC5jaGF0LWhpc3Rvcnkge1xuICAgIHBhZGRpbmc6IDJlbSAyZW0gMS40MmVtO1xuICAgIGJvcmRlci1ib3R0b206IDAuMTVlbSBzb2xpZCB3aGl0ZTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICB9XG4gIFxuICAuY2hhdCAuY2hhdC1oaXN0b3J5IC5tZXNzYWdlLWRhdGEge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuICBcbiAgLmNoYXQgLmNoYXQtaGlzdG9yeSAubWVzc2FnZS1kYXRhLXRpbWUge1xuICAgIGNvbG9yOiAjYThhYWIxO1xuICAgIHBhZGRpbmctbGVmdDogMC40ZW07XG4gIH1cbiAgXG4gIC5jaGF0IC5jaGF0LWhpc3RvcnkgLm1lc3NhZ2Uge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwLjVlbSAxLjQyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuOWVtO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLmNoYXQgLmNoYXQtaGlzdG9yeSAubWVzc2FnZTphZnRlciB7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIGxlZnQ6IDclO1xuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjODZCQjcxO1xuICAgIGJvcmRlci13aWR0aDogMC44ZW07XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjhlbTtcbiAgfVxuICBcbiAgLmNoYXQgLmNoYXQtaGlzdG9yeSAubXktbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZDogIzg2QkI3MTtcbiAgfVxuICBcbiAgLmNoYXQgLmNoYXQtaGlzdG9yeSAub3RoZXItbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZDogIzk0QzJFRDtcbiAgfVxuICBcbiAgLmNoYXQgLmNoYXQtaGlzdG9yeSAub3RoZXItbWVzc2FnZTphZnRlciB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzk0QzJFRDtcbiAgICBsZWZ0OiA5MCU7XG4gIH1cbiAgXG4gIC5jaGF0IC5jaGF0LW1lc3NhZ2UgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjhlbSAxLjQyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC44ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuICBcbiAgLmNoYXQgLmNoYXQtbWVzc2FnZSAuZmEtZmlsZS1vLFxuICAuY2hhdCAuY2hhdC1tZXNzYWdlIC5mYS1maWxlLWltYWdlLW8ge1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgY29sb3I6IGdyYXk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuY2hhdCAuY2hhdC1tZXNzYWdlIGJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjOTRDMkVEO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQ6ICNGMkY1Rjg7XG4gIH1cbiAgXG4gIC5jaGF0IC5jaGF0LW1lc3NhZ2UgYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogIzc1YjFlODtcbiAgfVxuICBcbiAgLm9ubGluZSxcbiAgLm9mZmxpbmUsXG4gIC5tZSxcbiAgLndhcm5pbmcge1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbiAgXG4gIC5vbmxpbmUge1xuICAgIGNvbG9yOiAjODZCQjcxO1xuICB9XG4gIFxuICAub2ZmbGluZSB7XG4gICAgY29sb3I6ICNFMzg5Njg7XG4gIH1cbiAgXG4gIC5tZSB7XG4gICAgY29sb3I6ICM5NEMyRUQ7XG4gIH1cbiAgXG4gIC53YXJuaW5nIHtcbiAgICBjb2xvcjogI2U3ODkzMDtcbiAgfVxuICBcbiAgLmFsaWduLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIC5hbGlnbi1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgXG4gIC5mbG9hdC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIFxuICAuY2xlYXJmaXg6YWZ0ZXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDA7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIFxuICAuY3VzdG9tQnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmFjdGl2ZUNoYXQge1xuICAgIGJhY2tncm91bmQ6ICMzOTNhNDE7XG4gIH1cbiAgXG4gIC50eXBlT2ZDaGF0cyB7XG4gICAgYmFja2dyb3VuZDogIzM5M2E0MTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMC4yZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gIH1cbiAgXG4gIC5ibGFua0NvbnRlbnR7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGNvbG9yOiAjOTk5O1xuICB9XG5cbiAgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCkge1xuICAgIC5jaGF0IC5jaGF0LWhpc3Rvcnkge1xuICAgICAgaGVpZ2h0OjUwdmg7XG4gICAgfVxuXG4gICAgLmRpc3BsYXlOb25lTW9iaWxlXG4gICAge1xuICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cblxuXG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjU3NnB4KSBhbmQgKG1heC13aWR0aDo3NjhweCkge1xuICAgIC5jaGF0IC5jaGF0LWhpc3Rvcnkge1xuICAgICAgaGVpZ2h0OjUwdmg7XG4gICAgfVxuICAgIFxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkgYW5kIChtYXgtd2lkdGg6OTkycHgpIHtcbiAgICAuY2hhdCAuY2hhdC1oaXN0b3J5IHtcbiAgICAgIGhlaWdodDo2NXZoO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkzcHgpIGFuZCAobWF4LXdpZHRoOjEyMDAgIHB4KSB7XG4gICAgLmNoYXQgLmNoYXQtaGlzdG9yeSB7XG4gICAgICBoZWlnaHQ6NTB2aDtcbiAgICB9XG4gIH1cblxuIC8qIHVzZXIgbGlzdCBpdGVtcyAqL1xuXG4gLmNyb3Age1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwYWRkaW5nOiAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwZW07XG4gIHdpZHRoOiAzZW07XG4gIGhlaWdodDogM2VtO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmFib3V0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMC40ZW07XG59XG5cbi5vbmxpbmUsXG4ub2ZmbGluZSxcbi5tZSxcbi53YXJuaW5nIHtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5vbmxpbmUge1xuICBjb2xvcjogIzg2QkI3MTtcbn1cblxuLm9mZmxpbmUge1xuICBjb2xvcjogI0UzODk2ODtcbn1cblxuLm1lIHtcbiAgY29sb3I6ICM5NEMyRUQ7XG59XG5cbi53YXJuaW5nIHtcbiAgY29sb3I6ICMwMGM4ZTc7XG59XG5cbi5zdGF0dXMge1xuICBjb2xvcjogIzkyOTU5RTtcbn1cblxuLm5hbWUge1xuICBmbG9hdDogbGVmdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat/chat-box/chat-box.component.html":
/*!*******************************************************!*\
  !*** ./src/app/chat/chat-box/chat-box.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"displayBlockMobile\" style=\"position:fixed;width:100%;z-index:1; \">\n\n      <div class=\"col-sm-12 p-0\">\n\n        <nav class=\"navbar navbar-expand-md navbar-fixed navbar-dark bg-dark\">\n\n          <a class=\"navbar-brand text-white\">\n            {{userInfo.firstName}} {{userInfo.lastName}}\n            <i class=\"fa fa-circle online\" *ngIf=\"disconnectedSocket == false\"></i>\n            <i class=\"fa fa-circle offline\" *ngIf=\"disconnectedSocket == true\"></i>\n          </a>\n          \n\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n            <span class=\"navbar-toggler-icon\"></span>\n\n          </button>\n\n          <div class=\"collapse people-list navbar-collapse\" id=\"navbarSupportedContent\">\n\n            <ul class=\"list\">\n              <li class=\"p-2 typeOfChats\">\n                Online Users:\n              </li>\n              <li class=\"clearfix cursorPointer\" [ngClass]=\"{'activeChat': user.chatting == true}\"   *ngFor=\"let user of userList\" (click)=\"userSelectedToChat(user.userId, user.name)\"\n              >\n                <div class=\"userPresence\" *ngIf=\"user.userId != userInfo.userId\">\n                  <user-details [userFirstName]=\"user.name\" [userLastName]=\"''\" [userStatus]=\"'online'\" [messageRead]=\"user.unread\"></user-details>\n                </div>\n              </li>\n              <li> <br>\n                <button (click)=\"logout()\" class=\"btn btn-info customButton\">Logout</button></li>\n              \n            </ul>\n            <br>\n          \n\n          </div>\n\n        </nav>\n\n      </div>\n\n  </div>\n  \n\n     \n\n\n    <div class=\"col-12 displayNoneMobile col-sm-4 col-md-4 people-list p-0\" id=\"people-list\">\n\n      <div class=\"p-3 text-white textCapitalize textCenter\">\n        {{userInfo.firstName}} {{userInfo.lastName}}\n        <i class=\"fa fa-circle online\" *ngIf=\"disconnectedSocket == false\"></i>\n        <i class=\"fa fa-circle offline\" *ngIf=\"disconnectedSocket == true\"></i>\n        <br>\n        <br>\n        <button (click)=\"logout()\" class=\"btn btn-info customButton\">Logout</button>\n      </div>\n    \n      <div>\n      <ul class=\"list\">\n        <li class=\"p-2 typeOfChats\">\n          Online Users:\n        </li>\n      <li class=\"clearfix cursorPointer\" [ngClass]=\"{'activeChat': user.chatting == true}\"\n          *ngFor=\"let user of userList\" (click)=\"userSelectedToChat(user.userId, user.name)\">\n          <div class=\"userPresence\" *ngIf=\"user.userId != userInfo.userId\"  >\n            <user-details [userFirstName]=\"user.name\" [userLastName]=\"''\" [userStatus]=\"'online'\" [messageRead]=\"user.unread\"></user-details>\n          </div>\n        </li> \n       \n      </ul>\n   </div>\n\n    </div>\n     \n    <div class=\"col-12 col-sm-8 col-md-8 chat\">\n      <div class=\"chat-header clearfix mobileMenu\" *ngIf=\"receiverName\">\n        <first-char [name]=\"receiverName\" [userBg]=\"'blue'\" [userColor]=\"'white'\" (notify)=\"showUserName($event)\"></first-char>\n\n        <div class=\"chat-about\">\n          <div class=\"chat-with\">Chat with {{receiverName}}</div>\n        </div>\n      </div>\n      <!-- end chat-header -->\n   <!--scrollTop is a html and js property-->\n      <div #scrollMe [scrollTop]=\"(scrollToChatTop)?0:scrollMe.scrollHeight\" class=\"chat-history\" *ngIf=\"receiverName\">\n\n        <ul>\n          <li class=\"textCenter\" *ngIf=\"receiverName\">\n\n            <span  class=\"cursorPointer\" (click)=\"loadEarlierPageOfChat()\">Load Previous Chat</span>\n\n            <br>\n\n            <span *ngIf=\"loadingPreviousChat == true\">Loading...</span>\n\n          </li>\n          <li class=\"clearfix\" *ngFor=\"let message of messageList\">\n            <div class=\"message-data\" [ngClass]=\"{'align-right': message.senderId == userInfo.userId}\">\n              <span class=\"message-data-time\">{{message?.createdOn | date: 'medium' }}</span> &nbsp; &nbsp;\n              <span class=\" message-data-name floatLeft \" *ngIf=\"message.senderId != userInfo.userId\">\n                <i class=\"fa fa-circle online\"></i> {{ message?.senderName }}</span>\n              <span class=\"message-data-name\" *ngIf=\"message.senderId == userInfo.userId\">{{ message?.senderName }}</span>\n              <i class=\"fa fa-circle me\" *ngIf=\"message.senderId == userInfo.userId\"></i>\n\n            </div>\n            <div class=\"message\" [ngClass]=\"{'float-right other-message': message.senderId == userInfo.userId, 'my-message': message.senderId != userInfo.userId}\">\n              {{message?.message | removeSpecialCharPipe: '#' | removeSpecialCharPipe: '$'}}\n            </div>\n          </li>\n\n        </ul>\n\n      </div>\n      <div *ngIf=\"!receiverName\" class=\"col-sm blankContent\">\n        Click on user for start a chat!!!\n      </div>\n      <!-- end chat-history -->\n\n      <div class=\"chat-message clearfix p-2\" *ngIf=\"receiverName\">\n        <textarea name=\"message-to-send\" id=\"message-to-send\"   (keydown)=\"sendMessageUsingKeypress($event)\" [(ngModel)]=\"messageText\"\n          placeholder=\"Type your message\" rows=\"3\"></textarea>\n\n        <button (click)=\"sendMessage()\">Send</button>\n\n      </div>\n      <!-- end chat-message -->\n\n    </div>\n\n  </div>\n  <!-- end chat -->\n\n</div>\n<!-- end container -->\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/chat/chat-box/chat-box.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/chat/chat-box/chat-box.component.ts ***!
  \*****************************************************/
/*! exports provided: ChatBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBoxComponent", function() { return ChatBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatBoxComponent = /** @class */ (function () {
    function ChatBoxComponent(AppService, SocketService, router, toastr) {
        var _this = this;
        this.AppService = AppService;
        this.SocketService = SocketService;
        this.router = router;
        this.toastr = toastr;
        this.userList = [];
        this.scrollToChatTop = false;
        this.previousChatList = [];
        this.messageList = []; // stores the current message list display in chat box
        this.pageValue = 0;
        this.loadingPreviousChat = false;
        this.checkStatus = function () {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === undefined ||
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === '' ||
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
        this.verifyUserConfirmation = function () {
            _this.SocketService.verifyUser()
                .subscribe(function (data) {
                _this.disconnectedSocket = false;
                _this.SocketService.setUser(_this.authToken);
                console.log(data);
            });
        };
        this.getOnlineUserList = function () {
            _this.SocketService.onlineUserList()
                .subscribe(function (userList) {
                _this.userList = [];
                for (var x in userList) {
                    var temp = { 'userId': x, 'name': userList[x], 'unread': 0, 'chatting': false };
                    _this.userList.push(temp);
                }
                console.log(_this.userList);
            }); // end online-user-list
        };
        // chat related methods
        this.getPreviousChatWithAUser = function () {
            var previousData = (_this.messageList.length > 0 ? _this.messageList.slice() : []);
            _this.SocketService.getChat(_this.userInfo.userId, _this.receiverId, _this.pageValue * 10)
                .subscribe(function (apiResponse) {
                console.log(apiResponse);
                if (apiResponse.status == 200) {
                    _this.messageList = apiResponse.data.concat(previousData);
                }
                else {
                    _this.messageList = previousData;
                    _this.toastr.warning('No Messages available');
                }
                _this.loadingPreviousChat = false;
            }, function (err) {
                _this.toastr.error('some error occured' + err.message);
            });
        }; // end get previous chat with any user
        this.loadEarlierPageOfChat = function () {
            _this.loadingPreviousChat = true;
            _this.pageValue++;
            _this.scrollToChatTop = true;
            _this.getPreviousChatWithAUser();
        }; // end loadPreviousChat
        this.userSelectedToChat = function (id, name) {
            console.log("setting user as active");
            // setting that user to chatting true   
            _this.userList.map(function (user) {
                if (user.userId == id) {
                    user.chatting = true;
                }
                else {
                    user.chatting = false;
                }
            });
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverId', id);
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverName', name);
            _this.receiverName = name;
            _this.receiverId = id;
            _this.messageList = [];
            _this.pageValue = 0;
            var chatDetails = {
                userId: _this.userInfo.userId,
                senderId: id
            };
            _this.SocketService.markChatAsSeen(chatDetails);
            _this.getPreviousChatWithAUser();
        }; // end userBtnClick function
        this.sendMessageUsingKeypress = function (event) {
            if (event.keyCode === 13) { // 13 is keycode of enter.
                _this.sendMessage();
            }
        }; // end sendMessageUsingKeypress
        this.sendMessage = function () {
            if (_this.messageText) {
                var chatMsgObject = {
                    senderName: _this.userInfo.firstName + " " + _this.userInfo.lastName,
                    senderId: _this.userInfo.userId,
                    receiverName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverName'),
                    receiverId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverId'),
                    message: _this.messageText,
                    createdOn: new Date()
                }; // end chatMsgObject
                console.log(chatMsgObject);
                _this.SocketService.SendChatMessage(chatMsgObject);
                _this.pushToChatWindow(chatMsgObject);
            }
            else {
                _this.toastr.warning('text message can not be empty');
            }
        }; // end sendMessage
        this.pushToChatWindow = function (data) {
            _this.messageText = "";
            _this.messageList.push(data);
            _this.scrollToChatTop = false;
        }; // end push to chat window
        this.getMessageFromAUser = function () {
            _this.SocketService.chatByUserId(_this.userInfo.userId)
                .subscribe(function (data) {
                (_this.receiverId == data.senderId) ? _this.messageList.push(data) : '';
                _this.toastr.success(data.senderName + " says : " + data.message);
                _this.scrollToChatTop = false;
            }); //end subscribe
        }; // end get message from a user 
        this.logout = function () {
            _this.AppService.logout()
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('receiverId');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('receiverName');
                    _this.SocketService.exitSocket();
                    _this.router.navigate(['/']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        }; // end logout
        // handle the output from a child component
        this.showUserName = function (name) {
            _this.toastr.success("You are chatting with " + name);
        };
    }
    ChatBoxComponent.prototype.ngOnInit = function () {
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken');
        this.userInfo = this.AppService.getUserInfoFromLocalstorage();
        this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("receiverId");
        this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverName');
        console.log(this.receiverId, this.receiverName);
        if (this.receiverId != null && this.receiverId != undefined && this.receiverId != '') {
            this.userSelectedToChat(this.receiverId, this.receiverName);
        }
        this.checkStatus();
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        this.getMessageFromAUser();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollMe', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatBoxComponent.prototype, "scrollMe", void 0);
    ChatBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-box',
            template: __webpack_require__(/*! ./chat-box.component.html */ "./src/app/chat/chat-box/chat-box.component.html"),
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]],
            styles: [__webpack_require__(/*! ./chat-box.component.css */ "./src/app/chat/chat-box/chat-box.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ChatBoxComponent);
    return ChatBoxComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-box/chat-box.component */ "./src/app/chat/chat-box/chat-box.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_pipe_remove_special_char_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/pipe/remove-special-char.pipe */ "./src/app/shared/pipe/remove-special-char.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { ChatRouteGuardService } from './chat-route-guard.service';
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: 'chat', component: _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_2__["ChatBoxComponent"] /*,canActivate:[ChatRouteGuardService]*/ }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_2__["ChatBoxComponent"], _shared_pipe_remove_special_char_pipe__WEBPACK_IMPORTED_MODULE_7__["RemoveSpecialCharPipe"]],
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\n    border-radius: 100%;\n    line-height: 1em;\n    padding: 1em;\n    text-align: center;\n    margin: 0em;\n    width: 3em;\n    height: 3em;\n    float: left;\n    text-transform: uppercase;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpcnN0LWNoYXIvZmlyc3QtY2hhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZmlyc3QtY2hhci9maXJzdC1jaGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwZW07XG4gICAgd2lkdGg6IDNlbTtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)='nameClicked()' class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n  {{firstChar}}\n</div>\nm  "

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.ts ***!
  \***********************************************************/
/*! exports provided: FirstCharComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstCharComponent", function() { return FirstCharComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstCharComponent = /** @class */ (function () {
    function FirstCharComponent() {
        this._name = '';
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FirstCharComponent.prototype.ngOnInit = function () {
        this._name = this.name;
        this.firstChar = this._name[0];
    }; // end ngOnInit
    FirstCharComponent.prototype.ngOnChanges = function (changes) {
        var name = changes.name;
        this._name = name.currentValue;
        this.firstChar = this._name[0];
    };
    FirstCharComponent.prototype.nameClicked = function () {
        this.notify.emit(this._name);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userBg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FirstCharComponent.prototype, "notify", void 0);
    FirstCharComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'first-char',
            template: __webpack_require__(/*! ./first-char.component.html */ "./src/app/shared/first-char/first-char.component.html"),
            styles: [__webpack_require__(/*! ./first-char.component.css */ "./src/app/shared/first-char/first-char.component.css")]
        })
    ], FirstCharComponent);
    return FirstCharComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipe/remove-special-char.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/pipe/remove-special-char.pipe.ts ***!
  \*********************************************************/
/*! exports provided: RemoveSpecialCharPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveSpecialCharPipe", function() { return RemoveSpecialCharPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RemoveSpecialCharPipe = /** @class */ (function () {
    function RemoveSpecialCharPipe() {
    }
    RemoveSpecialCharPipe.prototype.transform = function (value, character) {
        return value.replace(character, '');
    };
    RemoveSpecialCharPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'removeSpecialCharPipe'
        })
    ], RemoveSpecialCharPipe);
    return RemoveSpecialCharPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/shared/user-details/user-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first-char/first-char.component */ "./src/app/shared/first-char/first-char.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailsComponent"], _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_4__["FirstCharComponent"]],
            exports: [
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailsComponent"],
                _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_4__["FirstCharComponent"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\n    border-radius: 100%;\n    line-height: 1em;\n    padding: 1em;\n    text-align: center;\n    margin: 0em;\n    width: 3em;\n    height: 3em;\n    float: left;\n    text-transform: uppercase;\n  }\n  \n  .about {\n    float: left;\n    padding-left: 0.4em;\n  }\n  \n  .online,\n  .offline,\n  .me,\n  .warning {\n    margin-right: 3px;\n    font-size: 0.8em;\n  }\n  \n  .online {\n    color: #86BB71;\n  }\n  \n  .offline {\n    color: #E38968;\n  }\n  \n  .me {\n    color: #94C2ED;\n  }\n  \n  .warning {\n    color: #00c8e7;\n  }\n  \n  .status {\n    color: #92959E;\n  }\n  \n  .name {\n    float: left;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7RUFFQTs7OztJQUlFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwZW07XG4gICAgd2lkdGg6IDNlbTtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICAuYWJvdXQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMC40ZW07XG4gIH1cbiAgXG4gIC5vbmxpbmUsXG4gIC5vZmZsaW5lLFxuICAubWUsXG4gIC53YXJuaW5nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG4gIFxuICAub25saW5lIHtcbiAgICBjb2xvcjogIzg2QkI3MTtcbiAgfVxuICBcbiAgLm9mZmxpbmUge1xuICAgIGNvbG9yOiAjRTM4OTY4O1xuICB9XG4gIFxuICAubWUge1xuICAgIGNvbG9yOiAjOTRDMkVEO1xuICB9XG4gIFxuICAud2FybmluZyB7XG4gICAgY29sb3I6ICMwMGM4ZTc7XG4gIH1cbiAgXG4gIC5zdGF0dXMge1xuICAgIGNvbG9yOiAjOTI5NTlFO1xuICB9XG4gIFxuICAubmFtZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n  {{firstChar}}\n</div>\n<div class=\"about\">\n  <div class=\"name\">{{userFirstName}} {{userLastName}}\n    <i *ngIf=\"messageRead\" class=\"fa fa-circle warning\"></i>\n  </div>\n  <div class=\"status\">\n    <i class=\"fa fa-circle\" [ngClass]=\"userStatus\"></i>{{userStatus}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/user-details/user-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/user-details/user-details.component.ts ***!
  \***************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent() {
        this.userNameAppear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.firstChar = this.userFirstName[0];
    }; // end ngOnInit
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserDetailsComponent.prototype, "userFirstName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "userLastName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "userStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "messageRead", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "userBg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserDetailsComponent.prototype, "userColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UserDetailsComponent.prototype, "userNameAppear", void 0);
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/shared/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/shared/user-details/user-details.component.css")]
        })
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //npm install socket.io-client

 //npm install ng2-cookies




var SocketService = /** @class */ (function () {
    function SocketService(http) {
        var _this = this;
        this.http = http;
        this.url = 'https://chatapi.edwisor.com';
        // events to be listened 
        this.verifyUser = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('verifyUser', function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end verifyUser
        this.onlineUserList = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("online-user-list", function (userList) {
                    observer.next(userList);
                }); // end Socket
            }); // end Observable
        }; // end onlineUserList
        this.disconnectedSocket = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("disconnect", function () {
                    observer.next();
                }); // end Socket
            }); // end Observable
        }; // end disconnectSocket
        // end events to be listened
        // events to be emitted
        this.setUser = function (authToken) {
            _this.socket.emit("set-user", authToken);
        }; // end setUser
        this.markChatAsSeen = function (userDetails) {
            _this.socket.emit('mark-chat-as-seen', userDetails);
        }; // end markChatAsSeen
        this.chatByUserId = function (userId) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end chatByUserId
        this.SendChatMessage = function (chatMsgObject) {
            _this.socket.emit('chat-msg', chatMsgObject);
        }; // end getChatMessage
        this.exitSocket = function () {
            _this.socket.disconnect();
        }; // end exit socket
        // connection is being created.
        // that handshake
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.url);
    }
    // end events to be emitted
    // chat related methods 
    SocketService.prototype.getChat = function (senderId, receiverId, skip) {
        return this.http.get(this.url + "/api/v1/chat/get/for/user?senderId=" + senderId + "&receiverId=" + receiverId + "&skip=" + skip + "&authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'))
            .do(function (data) { return console.log('Data Received'); })
            .catch(this.handleError);
    }; // end logout function
    SocketService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    }; // END handleError
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"/login\">My Chat</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5\">\n\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n\n    <br>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n\n    <br>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signinFunction()\">Sign in</button>\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router, toastr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.goToSignUp = function () {
            _this.router.navigate(['/sign-up']);
        }; // end goToSignUp
        this.signinFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.appService.signinFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        _this.appService.setUserInfoInLocalstorage(apiResponse.data.userDetails);
                        _this.router.navigate(['/chat']);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('some error occured');
                });
            } // end condition
        }; // end signinFunction
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"/\">My Chat</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToSignIn()\">Sign-In</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm\"></div>\n\n  <div class=\"col-sm p-5 \">\n\n    <h2 class=\"form-signin-heading\">Sign Up To Start Chat</h2>\n\n    <br>\n\n    <span>FirstName: </span>\n\n    <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n\n    <input type=\"text\" id=\"inputFirstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\" required autofocus>\n\n    <br>\n\n    <span>LastName: </span>\n\n    <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n\n    <input type=\"text\" id=\"inputLastName\" class=\"form-control\" [(ngModel)]=\"lastName\" placeholder=\"LastName\" required>\n\n    <br>\n\n    <span>Mobile: </span>\n\n    <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n\n    <input type=\"number\" id=\"inputMobile\" class=\"form-control\" [(ngModel)]=\"mobile\" placeholder=\"Mobile\" required>\n\n    <br>\n\n    <span>Email: </span>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required>\n\n    <br>\n\n    <span>Password: </span>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n\n    <br>\n\n\n    <span>API Key: </span>\n\n    <label for=\"inputPassword\" class=\"sr-only\">AuthKey</label>\n\n    <textarea type=\"password\" id=\"AuthKey\" class=\"form-control\" [(ngModel)]=\"apiKey\" placeholder=\"API Key\" required></textarea>\n\n    <br>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\n\n  </div>\n\n  \n\n  <div class=\"col-sm\"></div>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, router, toastr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.goToSignIn = function () {
            _this.router.navigate(['/']);
        }; // end goToSignIn
        // this.toastr.setRootViewContainerRef(vcr);
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signupFunction = function () {
        var _this = this;
        if (!this.firstName) {
            this.toastr.warning('enter first name');
        }
        else if (!this.lastName) {
            this.toastr.warning('enter last name');
        }
        else if (!this.mobile) {
            this.toastr.warning('enter mobile');
        }
        else if (!this.email) {
            this.toastr.warning('enter email');
        }
        else if (!this.password) {
            this.toastr.warning('enter password');
        }
        else if (!this.apiKey) {
            this.toastr.warning('Enter your API key');
        }
        else {
            var data = {
                firstName: this.firstName,
                lastName: this.lastName,
                mobile: this.mobile,
                email: this.email,
                password: this.password,
                apiKey: this.apiKey
            };
            console.log(data);
            this.appService.signupFunction(data)
                .subscribe(function (apiResponse) {
                console.log(apiResponse);
                if (apiResponse.status === 200) {
                    _this.toastr.success('Signup successful');
                    setTimeout(function () {
                        _this.goToSignIn();
                    }, 2000);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        } // end condition
    }; // end signupFunction
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: 'sign-up', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"] }
                ])
            ],
            declarations: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]],
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/siddharthsingh/Documents/EDWISOR/github projects_edwisor guys/Ankit Singh/chat-app-master/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map