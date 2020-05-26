(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-us-contact-us-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contact-us/contact-us.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contact-us/contact-us.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n     <ion-menu-toggle>\n <ion-icon name=\"menu\" class=\"class1\"></ion-icon>\n     </ion-menu-toggle>\n    <ion-title>Contact Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form>\n\n    <ion-item>\n<ion-text color=\"secondary\">\n  <h1>contact us</h1>\n</ion-text>\n\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Your Name</ion-label>\n      <ion-input type=\"text\" name=\"name\" class=\"input\"></ion-input>\n    </ion-item>\n\n  \n  \n    <ion-item>\n      <ion-label position=\"floating\">Your Email</ion-label>\n      <ion-input type=\"email\" name=\"email\" class=\"input\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Subject</ion-label>\n      <ion-textarea class=\"textarea\" name=\"subject\"></ion-textarea>\n    </ion-item>\n  \n  \n    <ion-item>\n      <ion-label position=\"floating\">Description</ion-label>\n      <ion-textarea class=\"textarea\" name=\"message\"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-button color=\"primary\" type=\"submit\" class=\"button is-danger is-large\">Submit</ion-button>\n    </ion-item>\n  \n  </form>\n  <ion-item>\n    <p>Contact us on: &nbsp;</p>\n    <ion-icon name=\"logo-facebook\"></ion-icon>\n    &nbsp;\n    <ion-icon ios=\"ios-mail\" md=\"md-mail\"></ion-icon>\n    &nbsp;\n    <ion-icon ios=\"logo-instagram\" md=\"logo-instagram\"></ion-icon>\n    &nbsp;\n    <ion-icon ios=\"logo-twitter\" md=\"logo-twitter\"></ion-icon>\n  </ion-item>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.module.ts ***!
  \*******************************************************/
/*! exports provided: ContactUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us.page */ "./src/app/pages/contact-us/contact-us.page.ts");







var routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]
    }
];
var ContactUsPageModule = /** @class */ (function () {
    function ContactUsPageModule() {
    }
    ContactUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]]
        })
    ], ContactUsPageModule);
    return ContactUsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".class1 {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC11cy9DOlxcVXNlcnNcXEFTVVNcXERlc2t0b3BcXEFuZ3VsYXItcHJvamVjdHNcXEFjdVBhY2VNb2JpVGVhbS1tYXN0ZXIgKDEpXFxBY3VQYWNlTW9iaVRlYW0tbWFzdGVyL3NyY1xcYXBwXFxwYWdlc1xcY29udGFjdC11c1xcY29udGFjdC11cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtdXMvY29udGFjdC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0LXVzL2NvbnRhY3QtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYXNzMXtcblx0ZmxvYXQ6IGxlZnQ7XG59IiwiLmNsYXNzMSB7XG4gIGZsb2F0OiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.page.ts ***!
  \*****************************************************/
/*! exports provided: ContactUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPage", function() { return ContactUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsPage = /** @class */ (function () {
    function ContactUsPage() {
    }
    ContactUsPage.prototype.ngOnInit = function () {
    };
    ContactUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! raw-loader!./contact-us.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contact-us/contact-us.page.html"),
            styles: [__webpack_require__(/*! ./contact-us.page.scss */ "./src/app/pages/contact-us/contact-us.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsPage);
    return ContactUsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-contact-us-contact-us-module-es5.js.map