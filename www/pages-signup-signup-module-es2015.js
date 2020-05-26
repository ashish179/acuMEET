(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"mango\">\n    <ion-title>Registration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding='true'>\n  <div class=\"center\">\n    <img src=\"assets/images/logo.png\" class=\"smallLogo\"/> \n    <h1>Create Account</h1>\n  </div>\n  <form padding text-center [formGroup]=\"registerForm\">  \n    <ion-list>\n        <ion-item>\n            <ion-label position=\"stacked\">Name</ion-label>\n            <!-- [(ngModel)]=\"postData.name\" -->\n            <ion-input autocomplete=\"off\" formControlName=\"name\" name=\"name\" type=\"text\" ></ion-input>\n          </ion-item> \n          <div class=\"noborder\" no-lines\n          *ngIf=\"!registerForm.controls.name.valid && (registerForm.controls.name.dirty || submitAttempt)\">\n          <p text-left text-wrap class=\"error\">Please enter the Name</p>\n        </div>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Email</ion-label>\n        <ion-input autocomplete=\"off\" formControlName=\"email\" name=\"email\" type=\"email\"></ion-input>\n      </ion-item>\n      <div class=\"noborder\" no-lines\n      *ngIf=\"!registerForm.controls.email.valid && (registerForm.controls.email.dirty || submitAttempt)\">\n      <p text-left text-wrap class=\"error\">Please enter a valid email</p>\n    </div>\n      \n      <ion-item>\n        <ion-label position=\"stacked\">Mobile No</ion-label>\n        <ion-input autocomplete=\"off\" name=\"mobile\" formControlName=\"mobile\" type=\"tel\" ></ion-input>\n      </ion-item> \n      <div class=\"noborder\" no-lines\n      *ngIf=\"!registerForm.controls.mobile.valid && (registerForm.controls.mobile.dirty || submitAttempt)\">\n      <p text-left text-wrap class=\"error\">Please enter 10 digit Mobile No.</p>\n    </div>\n\n      <ion-item lines='none'>\n        Already have an account? <a routerLink='/login'>Sign in.</a>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" share=\"round\" color=\"success\" (click)=\"signupAction()\">Registration</ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");







const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-signup .noborder {\n  border-bottom: 0px solid #ffffff !important;\n}\npage-signup .error {\n  font-size: 14.4px !important;\n  color: #ea6153;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxVc2Vyc1xcQVNVU1xcRGVza3RvcFxcQW5ndWxhci1wcm9qZWN0c1xcQWN1UGFjZU1vYmlUZWFtLW1hc3RlciAoMSlcXEFjdVBhY2VNb2JpVGVhbS1tYXN0ZXIvc3JjXFxhcHBcXHBhZ2VzXFxzaWdudXBcXHNpZ251cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksMkNBQUE7QUNGSjtBRElFO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2Utc2lnbnVwIHtcblxuLy8gVmFsaWRhdGlvbiBFcnJvciBNc2dcbi5ub2JvcmRlcntcbiAgICBib3JkZXItYm90dG9tOjBweCBzb2xpZCAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmVycm9ye1xuICAgIGZvbnQtc2l6ZTogMTQuNHB4ICFpbXBvcnRhbnQ7IFxuICAgIGNvbG9yOiAjZWE2MTUzO1xuICB9ICBcblxufSIsInBhZ2Utc2lnbnVwIC5ub2JvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5wYWdlLXNpZ251cCAuZXJyb3Ige1xuICBmb250LXNpemU6IDE0LjRweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2VhNjE1Mztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let SignupPage = class SignupPage {
    // postData = {
    //   name: '',
    //   username: '',
    //   email: '',
    //   password: ''
    // };
    constructor(authService, toastService, storageService, router, formBuilder) {
        this.authService = authService;
        this.toastService = toastService;
        this.storageService = storageService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.show = true;
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])]
        });
    }
    ngOnInit() { }
    // validateInputs() {
    //   let username = this.postData.username.trim();
    //   let password = this.postData.password.trim();
    //   let email = this.postData.email.trim();
    //   let name = this.postData.name.trim();
    //   return (
    //     this.postData.name &&
    //     this.postData.username &&
    //     this.postData.password &&
    //     this.postData.email &&
    //     email.length > 0 &&
    //     username.length > 0 &&
    //     email.length > 0 &&
    //     password.length > 0
    //   );
    // }
    signupAction() {
        //   if (this.validateInputs()) { 
        this.submitAttempt = true;
        if (this.registerForm.valid) {
            let bodystring = {
                "name": this.registerForm.get('name').value,
                "email": this.registerForm.get('email').value,
                "mobileno": this.registerForm.get('mobile').value,
                "lat": '',
                "long": '',
                "device_id": '',
                "device_details": ''
            };
            this.authService.signup(bodystring).subscribe((res) => {
                if (res) {
                    this.toastService.presentToast(res.message);
                    // Storing the User data. 
                    this.router.navigate(['login']);
                }
                else {
                    // this.toastService.presentToast(
                    //   'Data alreay exists, please enter new details.'
                    // );  
                }
            }, (error) => {
                this.toastService.presentToast('Network Issue.');
            });
        }
        else {
            this.toastService.presentToast('Please enter name, email, username or password.');
        }
    }
};
SignupPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/signup/signup.page.html"),
        styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map