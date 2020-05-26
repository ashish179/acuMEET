(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding='true'>\n    <div class=\"center\">\n      <img src=\"assets/images/logo.png\" class=\"smallLogo\"/>\n      <h1>Sign In</h1>\n    </div>\n    <form [formGroup]=\"loginForm\"> \n      <ion-list> \n      <ion-item>\n        <ion-label position=\"stacked\">Username</ion-label>\n        <ion-input formControlName=\"mobileno\" autocomplete=\"off\" type=\"tel\" name=\"mobileno\" ></ion-input>\n      </ion-item> \n      <!-- [(ngModel)]=\"postData.mobileno\" --> \n      <div class=\"noborder\" no-lines\n        *ngIf=\"!loginForm.controls.mobileno.valid && (loginForm.controls.mobileno.dirty || submitAttempt)\">\n        <p text-left text-wrap class=\"error\">Please enter the mobileno</p>\n      </div>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Password</ion-label>\n        <ion-input autocomplete=\"off\" formControlName=\"password\" type=\"password\" name=\"password\" ></ion-input>\n        <!-- [(ngModel)]=\"postData.password\" -->\n      </ion-item> \n      <div class=\"noborder\" no-lines\n      *ngIf=\"!loginForm.controls.password.valid && (loginForm.controls.password.dirty || submitAttempt)\">\n     </div>\n\n      <ion-item lines='none'>\n        <a routerLink='/signup'>Create Account</a> \n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" share=\"round\" color=\"success\" (click)=\"loginAction()\">Login</ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-login .noborder {\n  border-bottom: 0px solid #ffffff !important;\n}\npage-login .error {\n  font-size: 14.4px !important;\n  color: #ea6153;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxBU1VTXFxEZXNrdG9wXFxBbmd1bGFyLXByb2plY3RzXFxBY3VQYWNlTW9iaVRlYW0tbWFzdGVyICgxKVxcQWN1UGFjZU1vYmlUZWFtLW1hc3Rlci9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLDJDQUFBO0FDRko7QURJRTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1sb2dpbiB7XG5cbi8vIFZhbGlkYXRpb24gRXJyb3IgTXNnXG4ubm9ib3JkZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTowcHggc29saWQgI2ZmZmZmZiAhaW1wb3J0YW50O1xuICB9XG4gIC5lcnJvcntcbiAgICBmb250LXNpemU6IDE0LjRweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZWE2MTUzO1xuICB9IFxuIFxufSIsInBhZ2UtbG9naW4gLm5vYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbnBhZ2UtbG9naW4gLmVycm9yIHtcbiAgZm9udC1zaXplOiAxNC40cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNlYTYxNTM7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/auth-constants */ "./src/app/config/auth-constants.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let LoginPage = class LoginPage {
    // postData = {
    //   mobileno: '',
    //   password: ''
    // };
    constructor(router, authService, storageService, toastService, formBuilder) {
        this.router = router;
        this.authService = authService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.loginForm = this.formBuilder.group({
            mobileno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])]
        });
    }
    ngOnInit() { }
    // validateInputs() {
    //   console.log(this.loginForm);
    //   let mobileno = this.loginForm.mobileno.trim();
    //   let password = this.loginForm.password.trim();
    //   return ( 
    //     this.loginForm.mobileno &&
    //     this.loginForm.password &&
    //     mobileno.length <= 10 &&
    //     password.length > 0
    //   );
    // }
    loginAction() {
        this.submitAttempt = true;
        // if (this.validateInputs()) {
        if (this.loginForm.valid) {
            let bodystring = {
                "mobileno": this.loginForm.get('mobileno').value,
                "password": this.loginForm.get('password').value,
            };
            this.authService.login(bodystring).subscribe((res) => {
                console.log('logged data', JSON.stringify(res));
                let data = JSON.stringify(res);
                console.log('login res -> ', res['result']);
                if (res['result'] != 'No Record') {
                    // Storing the User data.
                    this.storageService
                        .store(_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH, res.result)
                        .then(res => {
                        this.router.navigate(['home']);
                    });
                }
                else {
                    this.toastService.presentToast('Incorrect username and password.');
                }
            }, (error) => {
                this.toastService.presentToast('Network Issue.');
            });
        }
        else {
            this.toastService.presentToast('Please enter mobileno or password.');
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map