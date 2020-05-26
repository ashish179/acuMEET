(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  \t<ion-menu-toggle class=\"class1\">\n <ion-icon name=\"menu\"></ion-icon>\n     </ion-menu-toggle>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\t      <ion-card>\n    <ion-card-header color=\"secondary\" class=\"login-card-header\">\n      <ion-card-title>Profile</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form padding-right [formGroup]=\"profileForm\">\n        <ion-item lines=\"inset\">\n          <ion-label position=\"floating\">password</ion-label>\n          <ion-input\n            type=\"password\"\n            class=\"form-control\"\n            placeholder=\"password\"\n            formControlName=\"password\"\n          ></ion-input>\n        </ion-item>\n          <ion-item lines=\"inset\">\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input\n            type=\"password\"\n            class=\"form-control\"\n            placeholder=\"{{this.authUser?.user_email}}\"\n            formControlName=\"password\"\n          ></ion-input>\n        </ion-item>\n         <ion-item lines=\"inset\">\n          <ion-label position=\"floating\">Name</ion-label>\n          <ion-input\n            class=\"form-control\"\n            placeholder=\"{{this.authUser?.name}}\"\n            formControlName=\"name\"\n          ></ion-input>\n        </ion-item>\n         <ion-item lines=\"inset\">\n          <ion-label position=\"floating\">Address</ion-label>\n          <ion-input\n            class=\"form-control\"\n            placeholder=\"{{this.authUser?.address}}\"\n            formControlName=\"address\"\n          ></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"ion-item-right-margin\">\n          <ion-button size=\"default\" slot=\"end\" type=\"submit\" (click)=\"refresh()\"\n            >refresh</ion-button\n          >\n        </ion-item>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");









var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".class1 {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9DOlxcVXNlcnNcXEFTVVNcXERlc2t0b3BcXEFuZ3VsYXItcHJvamVjdHNcXEFjdVBhY2VNb2JpVGVhbS1tYXN0ZXIgKDEpXFxBY3VQYWNlTW9iaVRlYW0tbWFzdGVyL3NyY1xcYXBwXFxwYWdlc1xccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYXNzMXtcblx0ZmxvYXQ6IGxlZnQ7XG59IiwiLmNsYXNzMSB7XG4gIGZsb2F0OiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/http.service */ "./src/app/services/http.service.ts");







var ProfilePage = /** @class */ (function () {
    function ProfilePage(auth, httpservice, toastService, formBuilder) {
        this.auth = auth;
        this.httpservice = httpservice;
        this.toastService = toastService;
        this.formBuilder = formBuilder;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({ userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](), address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]() });
        this.postData = {
            user_id: '',
            token: ''
        };
        this.profileForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
        });
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.userData$.subscribe(function (res) {
            _this.authUser = res;
        });
        this.httpservice.post("myprofile.php", { "userId": this.authUser.ID }).subscribe(function (response) { _this.item = response; console.log(response); });
    };
    ProfilePage.prototype.refresh = function () {
        var _this = this;
        var upload_details = {
            "password": this.profileForm.get('password').value,
            "address": this.profileForm.get('address').value,
            "userId": this.authUser.ID,
            "name": this.profileForm.get('name').value,
            "profile_pic": "http://acupace.co.in/videoconfwebservice/upload_image/avatar.png"
        };
        this.httpservice.post("update_user.php", upload_details).subscribe(function (response) { _this.item = response; console.log(response); });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map