(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-menu\n    side=\"start\"\n    menuId=\"main-menu\"\n    contentId=\"main\"\n    class=\"my-custom-menu\"\n  >\n    <ion-content>\n      <div class=\"user-part\">\n        <ion-avatar>\n          <img src=\"./assets/images/download.jfif\" alt=\"\" />\n        </ion-avatar>\n        <ion-card-subtitle class=\"username\">@username</ion-card-subtitle>\n      </div>\n\n      <ion-list>\n        <ion-item routerLink=\"/home\" (click)=\"toggleMenu()\">\n          <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n          <ion-label>Home </ion-label>\n        </ion-item>\n        <ion-item routerLink=\"/home/messages\" (click)=\"toggleMenu()\">\n          <ion-icon name=\"person-outline\" slot=\"start\"> </ion-icon>\n          <ion-label>messages</ion-label>\n        </ion-item>\n\n        <ion-item routerLink=\"/home/notifications\" (click)=\"toggleMenu()\">\n          <ion-icon name=\"person-outline\" slot=\"start\"> </ion-icon>\n          <ion-label>notifications</ion-label>\n        </ion-item>\n         <ion-item routerLink=\"/home/profile\" (click)=\"toggleMenu()\">\n          <ion-icon name=\"person-outline\" slot=\"start\"> </ion-icon>\n          <ion-label>profile</ion-label>\n        </ion-item>\n        <ion-item (click)=\"logoutAction()\">\n          <ion-icon name=\"person-outline\" slot=\"start\"> </ion-icon>\n          <ion-label>LogOut </ion-label>\n        </ion-item>\n        <ion-item routerLink=\"/home/contact-us\" (click)=\"toggleMenu()\">\n          <ion-icon name=\"person-outline\" slot=\"start\"> </ion-icon>\n          <ion-label>contact-us</ion-label>\n        </ion-item>\n        <ion-item routerLink=\"/home/faq\" (click)=\"toggleMenu()\">\n          <ion-icon name=\"person-outline\" slot=\"start\"> </ion-icon>\n          <ion-label>faq</ion-label>\n        </ion-item>\n        <ion-item routerLink=\"/home/tutorial\" (click)=\"toggleMenu()\">\n          <ion-icon name=\"person-outline\" slot=\"start\"> </ion-icon>\n          <ion-label>tutorial</ion-label>\n        </ion-item>\n        <ion-item routerLink=\"/home/about-us\" (click)=\"toggleMenu()\">\n          <ion-icon name=\"person-outline\" slot=\"start\"> </ion-icon>\n          <ion-label>about-us</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n"

/***/ }),

/***/ "./src/app/guards/home.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/home.guard.ts ***!
  \**************************************/
/*! exports provided: HomeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeGuard", function() { return HomeGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/auth-constants */ "./src/app/config/auth-constants.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");





var HomeGuard = /** @class */ (function () {
    function HomeGuard(storageService, router) {
        this.storageService = storageService;
        this.router = router;
    }
    HomeGuard.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storageService
                .get(_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH)
                .then(function (res) {
                if (res) {
                    resolve(true);
                }
                else {
                    _this.router.navigate(['login']);
                    resolve(false);
                }
            })
                .catch(function (err) {
                resolve(false);
            });
        });
    };
    HomeGuard.ctorParameters = function () { return [
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HomeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeGuard);
    return HomeGuard;
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.router */ "./src/app/home/home.router.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_router__WEBPACK_IMPORTED_MODULE_6__["HomeRouter"]],
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-button {\n  --color-selected:#fff;\n}\n\nimg {\n  margin-left: 10px;\n  margin-top: 60px;\n  height: 60px;\n}\n\nion-card-subtitle {\n  margin-left: 70px;\n  padding-top: 30px;\n  color: \"dark\";\n}\n\n.user-part {\n  height: 150px;\n  background-image: url(\"https://images.pexels.com/photos/3799821/pexels-photo-3799821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\");\n}\n\nion-item {\n  margin-top: 20px;\n  color: #3490de;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEFTVVNcXERlc2t0b3BcXEFuZ3VsYXItcHJvamVjdHNcXEFjdVBhY2VNb2JpVGVhbS1tYXN0ZXIgKDEpXFxBY3VQYWNlTW9iaVRlYW0tbWFzdGVyL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHFCQUFBO0FDQ0Q7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNHRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxpSUFBQTtBQ0lGOztBRERBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1idXR0b257XG5cdC0tY29sb3Itc2VsZWN0ZWQ6I2ZmZjtcbn1cbmltZyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgY29sb3I6IFwiZGFya1wiO1xufVxuLnVzZXItcGFydCB7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzM3OTk4MjEvcGV4ZWxzLXBob3RvLTM3OTk4MjEuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0xJnc9NTAwXCIpO1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiAjMzQ5MGRlO1xufSIsImlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvci1zZWxlY3RlZDojZmZmO1xufVxuXG5pbWcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgY29sb3I6IFwiZGFya1wiO1xufVxuXG4udXNlci1wYXJ0IHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMzc5OTgyMS9wZXhlbHMtcGhvdG8tMzc5OTgyMS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTEmdz01MDBcIik7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6ICMzNDkwZGU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");




var HomePage = /** @class */ (function () {
    function HomePage(menu, auth) {
        this.menu = menu;
        this.auth = auth;
    }
    HomePage.prototype.toggleMenu = function () {
        this.menu.toggle(); //Add this method to your button click function
    };
    HomePage.prototype.logoutAction = function () {
        this.auth.logout();
    };
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/home/home.router.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.router.ts ***!
  \*************************************/
/*! exports provided: HomeRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRouter", function() { return HomeRouter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_home_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guards/home.guard */ "./src/app/guards/home.guard.ts");
/* harmony import */ var _resolvers_user_data_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resolvers/user-data.resolver */ "./src/app/resolvers/user-data.resolver.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");






var routes = [
    {
        path: 'home',
        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"],
        canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_3__["HomeGuard"]],
        resolve: {
            userData: _resolvers_user_data_resolver__WEBPACK_IMPORTED_MODULE_4__["UserDataResolver"]
        },
        children: [
            {
                path: 'feed',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | pages-feed-feed-module */[__webpack_require__.e("default~pages-feed-feed-module~pages-profile-profile-module~pages-welcome-welcome-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-feed-feed-module")]).then(__webpack_require__.bind(null, /*! ../pages/feed/feed.module */ "./src/app/pages/feed/feed.module.ts")).then(function (m) { return m.FeedPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'messages',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | pages-messages-messages-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-messages-messages-module")]).then(__webpack_require__.bind(null, /*! ../pages/messages/messages.module */ "./src/app/pages/messages/messages.module.ts")).then(function (m) { return m.MessagesPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'notifications',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | pages-notifications-notifications-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-notifications-notifications-module")]).then(__webpack_require__.bind(null, /*! ../pages/notifications/notifications.module */ "./src/app/pages/notifications/notifications.module.ts")).then(function (m) { return m.NotificationsPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | pages-settings-settings-module */ "pages-settings-settings-module").then(__webpack_require__.bind(null, /*! ../pages/settings/settings.module */ "./src/app/pages/settings/settings.module.ts")).then(function (m) { return m.SettingsPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | pages-profile-profile-module */[__webpack_require__.e("default~home-home-module~index-index-module~pages-profile-profile-module"), __webpack_require__.e("default~pages-feed-feed-module~pages-profile-profile-module~pages-welcome-welcome-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../pages/profile/profile.module */ "./src/app/pages/profile/profile.module.ts")).then(function (m) { return m.ProfilePageModule; });
                        }
                    }
                ]
            },
            {
                path: 'contact-us',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | pages-contact-us-contact-us-module */ "pages-contact-us-contact-us-module").then(__webpack_require__.bind(null, /*! ../pages/contact-us/contact-us.module */ "./src/app/pages/contact-us/contact-us.module.ts")).then(function (m) { return m.ContactUsPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'tutorial',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | pages-tutorial-tutorial-module */ "pages-tutorial-tutorial-module").then(__webpack_require__.bind(null, /*! ../pages/tutorial/tutorial.module */ "./src/app/pages/tutorial/tutorial.module.ts")).then(function (m) { return m.TutorialPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'about-us',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | pages-about-us-about-us-module */ "pages-about-us-about-us-module").then(__webpack_require__.bind(null, /*! ../pages/about-us/about-us.module */ "./src/app/pages/about-us/about-us.module.ts")).then(function (m) { return m.AboutUsPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'faq',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | pages-faq-faq-module */ "pages-faq-faq-module").then(__webpack_require__.bind(null, /*! ../pages/faq/faq.module */ "./src/app/pages/faq/faq.module.ts")).then(function (m) { return m.FaqPageModule; });
                        }
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/feed',
                pathMatch: 'full'
            }
        ]
    }
];
var HomeRouter = /** @class */ (function () {
    function HomeRouter() {
    }
    HomeRouter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRouter);
    return HomeRouter;
}());



/***/ }),

/***/ "./src/app/resolvers/user-data.resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/resolvers/user-data.resolver.ts ***!
  \*************************************************/
/*! exports provided: UserDataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataResolver", function() { return UserDataResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var UserDataResolver = /** @class */ (function () {
    function UserDataResolver(authService) {
        this.authService = authService;
    }
    UserDataResolver.prototype.resolve = function () {
        console.log('Hello');
        return this.authService.getUserData();
    };
    UserDataResolver.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    UserDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserDataResolver);
    return UserDataResolver;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map