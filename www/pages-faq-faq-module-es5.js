(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-faq-faq-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/faq/faq.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/faq/faq.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ion-toolbar>\n  <ion-menu-toggle class=\"class1\">\n <ion-icon name=\"menu\"></ion-icon>\n     </ion-menu-toggle>\n    <ion-title>FAQ</ion-title>\n  </ion-toolbar>\n  <ion-content fullscreen>\n    <ion-card>\n      <h2>Where do I download the of Acumeet App?</h2>\n      <h3>Acumeet can be easily install from our <a href=\"www.accumeet.com\">Download Center.</a></h3>\n    </ion-card>\n    \n    <ion-card>\n      <h2>How do I signup for Acumeet?</h2>\n      <h3>You can sign up for a free Acumeet account at <a href=\"www.accumeet.com\">accumeet.in/signup.</a></h3>\n    </ion-card>\n    \n\n    <ion-card>\n      <h2>How do I join a Acumeet meeting?</h2>\n      <h3>You can join a meeting by clicking the meeting link or manually filling the Meeting ID and Password ,send by the host. <a href=\"www.accumeet.com\">Know more</a></h3>\n    </ion-card>\n\n    <ion-card>\n      <h2>How do I share my screen?</h2>\n      <h3>Click Share in your meeting and choose the screen that you would like to share. <a href=\"www.accumeet.com\">Know more</a></h3>\n    </ion-card>\n   \n\n    <ion-card>\n      <h2>How do I reset my password?</h2>\n      <h3>You can easily change password by clicking Edit Profile Under Profile Section.</h3>\n    </ion-card>\n\n    <ion-card>\n      <h2>How do I reset my password?</h2>\n      <h3>You can easily change password by clicking Edit Profile Under Profile Section.</h3>\n    </ion-card>\n\n    <ion-item-divider></ion-item-divider>\n    \n    <ion-item>\n    \n      <ion-label position=\"floating\">Ask Question</ion-label>\n      <ion-textarea class=\"textarea\" name=\"msg\" row=\"100\" col=\"20\"></ion-textarea>\n\n      <ion-button color=\"primary\" type=\"submit\" >Submit</ion-button>\n\n    </ion-item>\n\n    <ion-item-divider></ion-item-divider>\n    <ion-item-divider></ion-item-divider>\n    <ion-item-divider></ion-item-divider>\n    \n    \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/faq/faq.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.module.ts ***!
  \*****************************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/faq/faq.page.ts");







var routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]
    }
];
var FaqPageModule = /** @class */ (function () {
    function FaqPageModule() {
    }
    FaqPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
        })
    ], FaqPageModule);
    return FaqPageModule;
}());



/***/ }),

/***/ "./src/app/pages/faq/faq.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin-left: 10px;\n  color: #3cbff3;\n  font: italic small-caps bold 20px Georgia, serif;\n}\n\nh3 {\n  margin-left: 10px;\n  margin-top: 15px;\n  margin-bottom: 20px;\n  -webkit-text-decoration-color: rgba(60, 60, 60, 0.768627451);\n          text-decoration-color: rgba(60, 60, 60, 0.768627451);\n}\n\n.class1 {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFxL0M6XFxVc2Vyc1xcQVNVU1xcRGVza3RvcFxcQW5ndWxhci1wcm9qZWN0c1xcQWN1UGFjZU1vYmlUZWFtLW1hc3RlciAoMSlcXEFjdVBhY2VNb2JpVGVhbS1tYXN0ZXIvc3JjXFxhcHBcXHBhZ2VzXFxmYXFcXGZhcS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZhcS9mYXEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0RBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO1VBQUEsb0RBQUE7QUNFSjs7QURFQTtFQUNDLFdBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhcS9mYXEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgICBjb2xvcjogcmdiKDYwLCAxOTEsIDI0Myk7XG4gICAgZm9udDogaXRhbGljIHNtYWxsLWNhcHMgYm9sZCAyMHB4IEdlb3JnaWEsIHNlcmlmO1xufVxuaDN7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogZ3JheXNjYWxlKCRjb2xvcjogIzQ2MzIzMmM0KTtcbiAgICBcbn1cblxuLmNsYXNzMXtcblx0ZmxvYXQ6IGxlZnQ7XG59IiwiaDIge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICMzY2JmZjM7XG4gIGZvbnQ6IGl0YWxpYyBzbWFsbC1jYXBzIGJvbGQgMjBweCBHZW9yZ2lhLCBzZXJpZjtcbn1cblxuaDMge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIDAuNzY4NjI3NDUxKTtcbn1cblxuLmNsYXNzMSB7XG4gIGZsb2F0OiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/faq/faq.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/faq/faq.page.ts ***!
  \***************************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FaqPage = /** @class */ (function () {
    function FaqPage() {
    }
    FaqPage.prototype.ngOnInit = function () {
    };
    FaqPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! raw-loader!./faq.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/faq/faq.page.html"),
            styles: [__webpack_require__(/*! ./faq.page.scss */ "./src/app/pages/faq/faq.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaqPage);
    return FaqPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-faq-faq-module-es5.js.map