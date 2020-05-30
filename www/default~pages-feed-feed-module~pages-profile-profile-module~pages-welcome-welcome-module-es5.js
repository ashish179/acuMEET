(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-feed-feed-module~pages-profile-profile-module~pages-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/feed-card/feed-card.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/feed-card/feed-card.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card *ngFor=\"let feed of feedData; let i = index\">\r\n  <ion-card-content>\r\n    <button (click)=\"feedDeleteAction(i, feed.feed_id)\" class=\"right\">\r\n      <ion-icon name=\"trash\"></ion-icon>\r\n    </button>\r\n    <p [innerHTML]=\"feed.feed\"></p>\r\n    <app-timeago [created]=\"feed.created\"></app-timeago>\r\n  </ion-card-content>\r\n</ion-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/feed-update/feed-update.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/feed-update/feed-update.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item>\r\n  <ion-textarea placeholder=\"Enter more information here...\" [(ngModel)]=\"postData.feed\"></ion-textarea>\r\n</ion-item>\r\n<ion-item>\r\n  <ion-button color='dark' item-end (click)=\"feedUpdateAction()\">Update</ion-button>\r\n</ion-item>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/slides/slides.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/slides/slides.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n  <ion-slide>\r\n    <h2>Acupace Prototype</h2>\r\n    <video\r\n      autoplay\r\n      loop\r\n      src=\"https://player.vimeo.com/external/406088732.sd.mp4?s=8eb6623fbe53c233d6e87556277f6d2157b43618&profile_id=165&oauth2_token_id=57447761\"\r\n    ></video>\r\n  </ion-slide>\r\n  <ion-slide>\r\n    <h2>Beta version</h2>\r\n  </ion-slide>\r\n  <ion-slide>\r\n    <h2>pending work</h2>\r\n  </ion-slide>\r\n</ion-slides>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/start-button/start-button.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/start-button/start-button.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button\r\n  expand=\"block\"\r\n  share=\"round\"\r\n  color=\"secondary\"\r\n  (click)=\"navigateToLogin()\"\r\n  >Start</ion-button\r\n>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/timeago/timeago.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/timeago/timeago.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  {{newTime | timeAgo}} \r\n</div>"

/***/ }),

/***/ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js":
/*!**********************************************************!*\
  !*** ./node_modules/time-ago-pipe/esm5/time-ago-pipe.js ***!
  \**********************************************************/
/*! exports provided: TimeAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimeAgoPipe = /** @class */ (function () {
    /**
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     */
    function TimeAgoPipe(changeDetectorRef, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TimeAgoPipe.prototype.transform = function (value) {
        var _this = this;
        this.removeTimer();
        var /** @type {?} */ d = new Date(value);
        var /** @type {?} */ now = new Date();
        var /** @type {?} */ seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        var /** @type {?} */ timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.ngZone.run(function () { return _this.changeDetectorRef.markForCheck(); });
                }, timeToUpdate);
            }
            return null;
        });
        var /** @type {?} */ minutes = Math.round(Math.abs(seconds / 60));
        var /** @type {?} */ hours = Math.round(Math.abs(minutes / 60));
        var /** @type {?} */ days = Math.round(Math.abs(hours / 24));
        var /** @type {?} */ months = Math.round(Math.abs(days / 30.416));
        var /** @type {?} */ years = Math.round(Math.abs(days / 365));
        if (Number.isNaN(seconds)) {
            return '';
        }
        else if (seconds <= 45) {
            return 'a few seconds ago';
        }
        else if (seconds <= 90) {
            return 'a minute ago';
        }
        else if (minutes <= 45) {
            return minutes + ' minutes ago';
        }
        else if (minutes <= 90) {
            return 'an hour ago';
        }
        else if (hours <= 22) {
            return hours + ' hours ago';
        }
        else if (hours <= 36) {
            return 'a day ago';
        }
        else if (days <= 25) {
            return days + ' days ago';
        }
        else if (days <= 45) {
            return 'a month ago';
        }
        else if (days <= 345) {
            return months + ' months ago';
        }
        else if (days <= 545) {
            return 'a year ago';
        }
        else {
            // (days > 545)
            return years + ' years ago';
        }
    };
    /**
     * @return {?}
     */
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    /**
     * @return {?}
     */
    TimeAgoPipe.prototype.removeTimer = function () {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    };
    /**
     * @param {?} seconds
     * @return {?}
     */
    TimeAgoPipe.prototype.getSecondsUntilUpdate = function (seconds) {
        var /** @type {?} */ min = 60;
        var /** @type {?} */ hr = min * 60;
        var /** @type {?} */ day = hr * 24;
        if (seconds < min) {
            // less than 1 min, update every 2 secs
            return 2;
        }
        else if (seconds < hr) {
            // less than an hour, update every 30 secs
            return 30;
        }
        else if (seconds < day) {
            // less then a day, update every 5 mins
            return 300;
        }
        else {
            // update every hour
            return 3600;
        }
    };
    return TimeAgoPipe;
}());
TimeAgoPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'timeAgo',
                pure: false
            },] },
];
/** @nocollapse */
TimeAgoPipe.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=time-ago-pipe.js.map


/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _feed_card_feed_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed-card/feed-card.component */ "./src/app/components/feed-card/feed-card.component.ts");
/* harmony import */ var _feed_update_feed_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feed-update/feed-update.component */ "./src/app/components/feed-update/feed-update.component.ts");
/* harmony import */ var _slides_slides_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slides/slides.component */ "./src/app/components/slides/slides.component.ts");
/* harmony import */ var _start_button_start_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./start-button/start-button.component */ "./src/app/components/start-button/start-button.component.ts");
/* harmony import */ var _timeago_timeago_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timeago/timeago.component */ "./src/app/components/timeago/timeago.component.ts");











var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _slides_slides_component__WEBPACK_IMPORTED_MODULE_8__["SlidesComponent"],
                _start_button_start_button_component__WEBPACK_IMPORTED_MODULE_9__["StartButtonComponent"],
                _feed_card_feed_card_component__WEBPACK_IMPORTED_MODULE_6__["FeedCardComponent"],
                _feed_update_feed_update_component__WEBPACK_IMPORTED_MODULE_7__["FeedUpdateComponent"],
                _timeago_timeago_component__WEBPACK_IMPORTED_MODULE_10__["TimeagoComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"]
            ],
            exports: [
                _slides_slides_component__WEBPACK_IMPORTED_MODULE_8__["SlidesComponent"],
                _start_button_start_button_component__WEBPACK_IMPORTED_MODULE_9__["StartButtonComponent"],
                _feed_card_feed_card_component__WEBPACK_IMPORTED_MODULE_6__["FeedCardComponent"],
                _feed_update_feed_update_component__WEBPACK_IMPORTED_MODULE_7__["FeedUpdateComponent"],
                _timeago_timeago_component__WEBPACK_IMPORTED_MODULE_10__["TimeagoComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/feed-card/feed-card.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/feed-card/feed-card.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right {\n  float: right;\n}\n.right ion-icon {\n  font-size: 18px;\n}\nion-card-content p {\n  color: #333333 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWVkLWNhcmQvQzpcXFVzZXJzXFxsZW5vdm9cXERlc2t0b3BcXHByb2plY3RcXGFjdU1FRVQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZlZWQtY2FyZFxcZmVlZC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZlZWQtY2FyZC9mZWVkLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7QUNFSjtBREVFO0VBQ0UseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlZC1jYXJkL2ZlZWQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuaW9uLWNhcmQtY29udGVudHtcclxuICBwe1xyXG4gICAgY29sb3I6IzMzMzMzMyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucmlnaHQgaW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQgcCB7XG4gIGNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/feed-card/feed-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/feed-card/feed-card.component.ts ***!
  \*************************************************************/
/*! exports provided: FeedCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedCardComponent", function() { return FeedCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_feed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/feed.service */ "./src/app/services/feed.service.ts");




var FeedCardComponent = /** @class */ (function () {
    function FeedCardComponent(feedSerivce, alertSerivce) {
        this.feedSerivce = feedSerivce;
        this.alertSerivce = alertSerivce;
        this.postData = {
            user_id: '',
            token: '',
            feed_id: ''
        };
    }
    FeedCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feedSerivce.feedData$.subscribe(function (res) {
            _this.feedData = res;
        });
    };
    FeedCardComponent.prototype.feedDeleteAction = function (msgIndex, feed_id) {
        var _this = this;
        this.postData.user_id = this.loginUser.user_id;
        this.postData.token = this.loginUser.token;
        this.postData.feed_id = feed_id;
        this.alertSerivce
            .presentAlertConfirm('Delete feed', 'Do you want to delete this feed?')
            .then(function (res) {
            if (res.role === 'okay') {
                _this.feedSerivce.feedDelete(_this.postData).subscribe(function (res) {
                    if (res.success) {
                        _this.feedSerivce.deleteFeedData(msgIndex);
                    }
                });
            }
        });
    };
    FeedCardComponent.ctorParameters = function () { return [
        { type: _services_feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeedCardComponent.prototype, "loginUser", void 0);
    FeedCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed-card',
            template: __webpack_require__(/*! raw-loader!./feed-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/feed-card/feed-card.component.html"),
            styles: [__webpack_require__(/*! ./feed-card.component.scss */ "./src/app/components/feed-card/feed-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], FeedCardComponent);
    return FeedCardComponent;
}());



/***/ }),

/***/ "./src/app/components/feed-update/feed-update.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/feed-update/feed-update.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlZC11cGRhdGUvZmVlZC11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/feed-update/feed-update.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/feed-update/feed-update.component.ts ***!
  \*****************************************************************/
/*! exports provided: FeedUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedUpdateComponent", function() { return FeedUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_feed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/feed.service */ "./src/app/services/feed.service.ts");



var FeedUpdateComponent = /** @class */ (function () {
    function FeedUpdateComponent(feedService) {
        this.feedService = feedService;
        this.postData = {
            feed: '',
            feed_id: '',
            lastCreated: '',
            token: '',
            user_id: ''
        };
    }
    FeedUpdateComponent.prototype.ngOnInit = function () { };
    FeedUpdateComponent.prototype.feedUpdateAction = function () {
        var _this = this;
        if (this.postData.feed.length > 0) {
            this.postData.lastCreated = '';
            this.postData.user_id = this.loginUser.user_id;
            this.postData.token = this.loginUser.token;
            this.feedService.feedUpdate(this.postData).subscribe(function (res) {
                _this.postData.feed = '';
                _this.feedService.updateFeedData(res.feedData);
            });
        }
    };
    FeedUpdateComponent.ctorParameters = function () { return [
        { type: _services_feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FeedUpdateComponent.prototype, "loginUser", void 0);
    FeedUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed-update',
            template: __webpack_require__(/*! raw-loader!./feed-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/feed-update/feed-update.component.html"),
            styles: [__webpack_require__(/*! ./feed-update.component.scss */ "./src/app/components/feed-update/feed-update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_feed_service__WEBPACK_IMPORTED_MODULE_2__["FeedService"]])
    ], FeedUpdateComponent);
    return FeedUpdateComponent;
}());



/***/ }),

/***/ "./src/app/components/slides/slides.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/slides/slides.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slide {\n  padding: 300px 20px 160px 20px;\n  display: block;\n}\nion-slide img {\n  width: 100px;\n  margin-left: 10px;\n}\nion-slide h2 {\n  font-size: 36px;\n  font-weight: bold;\n  color: #fdfdfd;\n}\nvideo {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -100;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXMvQzpcXFVzZXJzXFxsZW5vdm9cXERlc2t0b3BcXHByb2plY3RcXGFjdU1FRVQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNsaWRlc1xcc2xpZGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NsaWRlcy9zbGlkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLGNBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDRUo7QURDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjtBREdBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0RBQUE7VUFBQSw0Q0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXMvc2xpZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlIHtcclxuICBwYWRkaW5nOiAzMDBweCAyMHB4IDE2MHB4IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZkZmRmZDtcclxuICB9XHJcbn1cclxuXHJcbnZpZGVvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB6LWluZGV4OiAtMTAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbiIsImlvbi1zbGlkZSB7XG4gIHBhZGRpbmc6IDMwMHB4IDIwcHggMTYwcHggMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tc2xpZGUgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmlvbi1zbGlkZSBoMiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmRmZGZkO1xufVxuXG52aWRlbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB6LWluZGV4OiAtMTAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/slides/slides.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slides/slides.component.ts ***!
  \*******************************************************/
/*! exports provided: SlidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesComponent", function() { return SlidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlidesComponent = /** @class */ (function () {
    function SlidesComponent() {
        this.slideOpts = {
            speed: 400
        };
    }
    SlidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slides',
            template: __webpack_require__(/*! raw-loader!./slides.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/slides/slides.component.html"),
            styles: [__webpack_require__(/*! ./slides.component.scss */ "./src/app/components/slides/slides.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SlidesComponent);
    return SlidesComponent;
}());



/***/ }),

/***/ "./src/app/components/start-button/start-button.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/start-button/start-button.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnQtYnV0dG9uL3N0YXJ0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/start-button/start-button.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/start-button/start-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: StartButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartButtonComponent", function() { return StartButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var StartButtonComponent = /** @class */ (function () {
    function StartButtonComponent(router) {
        this.router = router;
    }
    StartButtonComponent.prototype.ngOnInit = function () { };
    StartButtonComponent.prototype.navigateToLogin = function () {
        this.router.navigate(['/login']);
    };
    StartButtonComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    StartButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start-button',
            template: __webpack_require__(/*! raw-loader!./start-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/start-button/start-button.component.html"),
            styles: [__webpack_require__(/*! ./start-button.component.scss */ "./src/app/components/start-button/start-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StartButtonComponent);
    return StartButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/timeago/timeago.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/timeago/timeago.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGltZWFnby90aW1lYWdvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/timeago/timeago.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/timeago/timeago.component.ts ***!
  \*********************************************************/
/*! exports provided: TimeagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeagoComponent", function() { return TimeagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimeagoComponent = /** @class */ (function () {
    function TimeagoComponent() {
    }
    TimeagoComponent.prototype.ngOnInit = function () {
        this.newTime = this.converTime(this.created);
        ;
    };
    TimeagoComponent.prototype.converTime = function (time) {
        var a = new Date(time * 1000);
        return a;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimeagoComponent.prototype, "created", void 0);
    TimeagoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeago',
            template: __webpack_require__(/*! raw-loader!./timeago.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/timeago/timeago.component.html"),
            styles: [__webpack_require__(/*! ./timeago.component.scss */ "./src/app/components/timeago/timeago.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeagoComponent);
    return TimeagoComponent;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AlertService = /** @class */ (function () {
    function AlertService(alertController) {
        this.alertController = alertController;
    }
    AlertService.prototype.presentAlertConfirm = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var choice, alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: message,
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                },
                                {
                                    text: 'Okay',
                                    role: 'okay'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss().then(function (data) {
                                choice = data;
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, choice];
                }
            });
        });
    };
    AlertService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/feed.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/feed.service.ts ***!
  \******************************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




var FeedService = /** @class */ (function () {
    function FeedService(httpService) {
        this.httpService = httpService;
        this.feedData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    FeedService.prototype.changeFeedData = function (data) {
        this.feedData$.next(data);
    };
    FeedService.prototype.getCurrentFeedData = function () {
        return this.feedData$.getValue();
    };
    FeedService.prototype.updateFeedData = function (newFeed) {
        var data = [];
        data.push(newFeed);
        var currentFeedData = this.getCurrentFeedData();
        var newFeedUpdateData = data.concat(currentFeedData);
        this.changeFeedData(newFeedUpdateData);
    };
    FeedService.prototype.deleteFeedData = function (msgIndex) {
        var data = [];
        var currentFeedData = this.getCurrentFeedData();
        currentFeedData.splice(msgIndex, 1);
        var newFeedUpdateData = data.concat(currentFeedData);
        this.changeFeedData(newFeedUpdateData);
    };
    FeedService.prototype.feedData = function (postData) {
        return this.httpService.post('feed', postData);
    };
    FeedService.prototype.feedDelete = function (postData) {
        return this.httpService.post('feedDelete', postData);
    };
    FeedService.prototype.feedUpdate = function (postData) {
        return this.httpService.post('feedUpdate', postData);
    };
    FeedService.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
    ]; };
    FeedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], FeedService);
    return FeedService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-feed-feed-module~pages-profile-profile-module~pages-welcome-welcome-module-es5.js.map