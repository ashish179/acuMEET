(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n/* Core CSS required for Ionic components to work properly */\nhtml.ios {\r\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\r\n}\nhtml.md {\r\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\r\n}\nhtml {\r\n  --ion-font-family: var(--ion-default-font);\r\n}\nbody {\r\n  background: var(--ion-background-color);\r\n}\nbody.backdrop-no-scroll {\r\n  overflow: hidden;\r\n}\n.ion-color-primary {\r\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\r\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\r\n}\n.ion-color-secondary {\r\n  --ion-color-base: var(--ion-color-secondary, #0cd1e8) !important;\r\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 12, 209, 232) !important;\r\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-secondary-shade, #0bb8cc) !important;\r\n  --ion-color-tint: var(--ion-color-secondary-tint, #24d6ea) !important;\r\n}\n.ion-color-tertiary {\r\n  --ion-color-base: var(--ion-color-tertiary, #7044ff) !important;\r\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 112, 68, 255) !important;\r\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-tertiary-shade, #633ce0) !important;\r\n  --ion-color-tint: var(--ion-color-tertiary-tint, #7e57ff) !important;\r\n}\n.ion-color-success {\r\n  --ion-color-base: var(--ion-color-success, #10dc60) !important;\r\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 16, 220, 96) !important;\r\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-success-shade, #0ec254) !important;\r\n  --ion-color-tint: var(--ion-color-success-tint, #28e070) !important;\r\n}\n.ion-color-warning {\r\n  --ion-color-base: var(--ion-color-warning, #ffce00) !important;\r\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 206, 0) !important;\r\n  --ion-color-contrast: var(--ion-color-warning-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-warning-shade, #e0b500) !important;\r\n  --ion-color-tint: var(--ion-color-warning-tint, #ffd31a) !important;\r\n}\n.ion-color-danger {\r\n  --ion-color-base: var(--ion-color-danger, #f04141) !important;\r\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 240, 65, 65) !important;\r\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-danger-shade, #d33939) !important;\r\n  --ion-color-tint: var(--ion-color-danger-tint, #f25454) !important;\r\n}\n.ion-color-light {\r\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\r\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\r\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\r\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\r\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\r\n}\n.ion-color-medium {\r\n  --ion-color-base: var(--ion-color-medium, #989aa2) !important;\r\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 152, 154, 162) !important;\r\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-medium-shade, #86888f) !important;\r\n  --ion-color-tint: var(--ion-color-medium-tint, #a2a4ab) !important;\r\n}\n.ion-color-dark {\r\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\r\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\r\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\r\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\r\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\r\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\r\n}\n.ion-page {\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  position: absolute;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  contain: layout size style;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n}\nion-route,\r\nion-route-redirect,\r\nion-router,\r\nion-select-option,\r\nion-nav-controller,\r\nion-menu-controller,\r\nion-action-sheet-controller,\r\nion-alert-controller,\r\nion-loading-controller,\r\nion-modal-controller,\r\nion-picker-controller,\r\nion-popover-controller,\r\nion-toast-controller,\r\n.ion-page-hidden,\r\n[hidden] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  display: none !important;\r\n}\n.ion-page-invisible {\r\n  opacity: 0;\r\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\r\n  --ion-statusbar-padding: 20px;\r\n}\n@supports (padding-top: 20px) {\r\n  html {\r\n    --ion-safe-area-top: var(--ion-statusbar-padding);\r\n  }\r\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: constant(safe-area-inset-top);\r\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\r\n    --ion-safe-area-left: constant(safe-area-inset-left);\r\n    --ion-safe-area-right: constant(safe-area-inset-right);\r\n  }\r\n}\n@supports (padding-top: env(safe-area-inset-top)) {\r\n  html {\r\n    --ion-safe-area-top: env(safe-area-inset-top);\r\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\r\n    --ion-safe-area-left: env(safe-area-inset-left);\r\n    --ion-safe-area-right: env(safe-area-inset-right);\r\n  }\r\n}\n/* Basic CSS for apps built with Ionic */\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  vertical-align: baseline;\r\n}\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\nimg {\r\n  max-width: 100%;\r\n  border: 0;\r\n}\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\nfigure {\r\n  margin: 1em 40px;\r\n}\nhr {\r\n  height: 1px;\r\n  border-width: 0;\r\n  box-sizing: content-box;\r\n}\npre {\r\n  overflow: auto;\r\n}\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\nlabel,\r\ninput,\r\nselect,\r\ntextarea {\r\n  font-family: inherit;\r\n  line-height: normal;\r\n}\ntextarea {\r\n  overflow: auto;\r\n  height: auto;\r\n  font: inherit;\r\n  color: inherit;\r\n}\ntextarea::-webkit-input-placeholder {\r\n  padding-left: 2px;\r\n}\ntextarea::-moz-placeholder {\r\n  padding-left: 2px;\r\n}\ntextarea:-ms-input-placeholder {\r\n  padding-left: 2px;\r\n}\ntextarea::-ms-input-placeholder {\r\n  padding-left: 2px;\r\n}\ntextarea::placeholder {\r\n  padding-left: 2px;\r\n}\nform,\r\ninput,\r\noptgroup,\r\nselect {\r\n  margin: 0;\r\n  font: inherit;\r\n  color: inherit;\r\n}\nhtml input[type=button],\r\ninput[type=reset],\r\ninput[type=submit] {\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\na,\r\na div,\r\na span,\r\na ion-icon,\r\na ion-label,\r\nbutton,\r\nbutton div,\r\nbutton span,\r\nbutton ion-icon,\r\nbutton ion-label,\r\n.ion-tappable,\r\n[tappable],\r\n[tappable] div,\r\n[tappable] span,\r\n[tappable] ion-icon,\r\n[tappable] ion-label,\r\ninput,\r\ntextarea {\r\n  touch-action: manipulation;\r\n}\na ion-label,\r\nbutton ion-label {\r\n  pointer-events: none;\r\n}\nbutton {\r\n  border: 0;\r\n  border-radius: 0;\r\n  font-family: inherit;\r\n  font-style: inherit;\r\n  font-variant: inherit;\r\n  line-height: 1;\r\n  text-transform: none;\r\n  cursor: pointer;\r\n  -webkit-appearance: button;\r\n}\n[tappable] {\r\n  cursor: pointer;\r\n}\na[disabled],\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  padding: 0;\r\n  border: 0;\r\n}\ninput[type=checkbox],\r\ninput[type=radio] {\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\ninput[type=search]::-webkit-search-cancel-button,\r\ninput[type=search]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\ntd,\r\nth {\r\n  padding: 0;\r\n}\n* {\r\n  box-sizing: border-box;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-touch-callout: none;\r\n}\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-text-size-adjust: 100%;\r\n     -moz-text-size-adjust: 100%;\r\n      -ms-text-size-adjust: 100%;\r\n          text-size-adjust: 100%;\r\n}\nhtml:not(.hydrated) body {\r\n  display: none;\r\n}\nhtml.plt-pwa {\r\n  height: 100vh;\r\n}\nbody {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  position: fixed;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  text-rendering: optimizeLegibility;\r\n  overflow: hidden;\r\n  touch-action: manipulation;\r\n  -webkit-user-drag: none;\r\n  -ms-content-zooming: none;\r\n  word-wrap: break-word;\r\n  overscroll-behavior-y: none;\r\n  -webkit-text-size-adjust: none;\r\n     -moz-text-size-adjust: none;\r\n      -ms-text-size-adjust: none;\r\n          text-size-adjust: none;\r\n}\nhtml {\r\n  font-family: var(--ion-font-family);\r\n}\na {\r\n  background-color: transparent;\r\n  color: var(--ion-color-primary, #3880ff);\r\n}\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin-top: 16px;\r\n  margin-bottom: 10px;\r\n  font-weight: 500;\r\n  line-height: 1.2;\r\n}\nh1 {\r\n  margin-top: 20px;\r\n  font-size: 26px;\r\n}\nh2 {\r\n  margin-top: 18px;\r\n  font-size: 24px;\r\n}\nh3 {\r\n  font-size: 22px;\r\n}\nh4 {\r\n  font-size: 20px;\r\n}\nh5 {\r\n  font-size: 18px;\r\n}\nh6 {\r\n  font-size: 16px;\r\n}\nsmall {\r\n  font-size: 75%;\r\n}\nsub,\r\nsup {\r\n  position: relative;\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  vertical-align: baseline;\r\n}\nsup {\r\n  top: -0.5em;\r\n}\nsub {\r\n  bottom: -0.25em;\r\n}\n.ion-hide {\r\n  display: none !important;\r\n}\n.ion-hide-up {\r\n  display: none !important;\r\n}\n@media (max-width: 575px) {\r\n  .ion-hide-down {\r\n    display: none !important;\r\n  }\r\n}\n@media (min-width: 576px) {\r\n  .ion-hide-sm-up {\r\n    display: none !important;\r\n  }\r\n}\n@media (max-width: 767px) {\r\n  .ion-hide-sm-down {\r\n    display: none !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-hide-md-up {\r\n    display: none !important;\r\n  }\r\n}\n@media (max-width: 991px) {\r\n  .ion-hide-md-down {\r\n    display: none !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-hide-lg-up {\r\n    display: none !important;\r\n  }\r\n}\n@media (max-width: 1199px) {\r\n  .ion-hide-lg-down {\r\n    display: none !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-hide-xl-up {\r\n    display: none !important;\r\n  }\r\n}\n.ion-hide-xl-down {\r\n  display: none !important;\r\n}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding,\r\n[no-padding] {\r\n  --padding-start: 0;\r\n  --padding-end: 0;\r\n  --padding-top: 0;\r\n  --padding-bottom: 0;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n}\n.ion-padding,\r\n[padding] {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding,\r\n[padding] {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-padding-top,\r\n[padding-top] {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n}\n.ion-padding-start,\r\n[padding-start] {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding-start,\r\n[padding-start] {\r\n    padding-left: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-padding-end,\r\n[padding-end] {\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding-end,\r\n[padding-end] {\r\n    padding-right: unset;\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-padding-bottom,\r\n[padding-bottom] {\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\n.ion-padding-vertical,\r\n[padding-vertical] {\r\n  --padding-top: var(--ion-padding, 16px);\r\n  --padding-bottom: var(--ion-padding, 16px);\r\n  padding-top: var(--ion-padding, 16px);\r\n  padding-bottom: var(--ion-padding, 16px);\r\n}\n.ion-padding-horizontal,\r\n[padding-horizontal] {\r\n  --padding-start: var(--ion-padding, 16px);\r\n  --padding-end: var(--ion-padding, 16px);\r\n  padding-left: var(--ion-padding, 16px);\r\n  padding-right: var(--ion-padding, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-padding-horizontal,\r\n[padding-horizontal] {\r\n    padding-left: unset;\r\n    padding-right: unset;\r\n    -webkit-padding-start: var(--ion-padding, 16px);\r\n    padding-inline-start: var(--ion-padding, 16px);\r\n    -webkit-padding-end: var(--ion-padding, 16px);\r\n    padding-inline-end: var(--ion-padding, 16px);\r\n  }\r\n}\n.ion-no-margin,\r\n[no-margin] {\r\n  --margin-start: 0;\r\n  --margin-end: 0;\r\n  --margin-top: 0;\r\n  --margin-bottom: 0;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\n.ion-margin,\r\n[margin] {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin,\r\n[margin] {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-margin-top,\r\n[margin-top] {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n}\n.ion-margin-start,\r\n[margin-start] {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin-start,\r\n[margin-start] {\r\n    margin-left: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-margin-end,\r\n[margin-end] {\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin-end,\r\n[margin-end] {\r\n    margin-right: unset;\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-margin-bottom,\r\n[margin-bottom] {\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\n.ion-margin-vertical,\r\n[margin-vertical] {\r\n  --margin-top: var(--ion-margin, 16px);\r\n  --margin-bottom: var(--ion-margin, 16px);\r\n  margin-top: var(--ion-margin, 16px);\r\n  margin-bottom: var(--ion-margin, 16px);\r\n}\n.ion-margin-horizontal,\r\n[margin-horizontal] {\r\n  --margin-start: var(--ion-margin, 16px);\r\n  --margin-end: var(--ion-margin, 16px);\r\n  margin-left: var(--ion-margin, 16px);\r\n  margin-right: var(--ion-margin, 16px);\r\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\r\n  .ion-margin-horizontal,\r\n[margin-horizontal] {\r\n    margin-left: unset;\r\n    margin-right: unset;\r\n    -webkit-margin-start: var(--ion-margin, 16px);\r\n    margin-inline-start: var(--ion-margin, 16px);\r\n    -webkit-margin-end: var(--ion-margin, 16px);\r\n    margin-inline-end: var(--ion-margin, 16px);\r\n  }\r\n}\n.ion-float-left,\r\n[float-left] {\r\n  float: left !important;\r\n}\n.ion-float-right,\r\n[float-right] {\r\n  float: right !important;\r\n}\n.ion-float-start,\r\n[float-start] {\r\n  float: left !important;\r\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start, [dir=rtl] [float-start], :host-context([dir=rtl]) [float-start] {\r\n  float: right !important;\r\n}\n.ion-float-end,\r\n[float-end] {\r\n  float: right !important;\r\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end, [dir=rtl] [float-end], :host-context([dir=rtl]) [float-end] {\r\n  float: left !important;\r\n}\n@media (min-width: 576px) {\r\n  .ion-float-sm-left,\r\n[float-sm-left] {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-sm-right,\r\n[float-sm-right] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-start,\r\n[float-sm-start] {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start, [dir=rtl] [float-sm-start], :host-context([dir=rtl]) [float-sm-start] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-sm-end,\r\n[float-sm-end] {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end, [dir=rtl] [float-sm-end], :host-context([dir=rtl]) [float-sm-end] {\r\n    float: left !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-float-md-left,\r\n[float-md-left] {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-md-right,\r\n[float-md-right] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-start,\r\n[float-md-start] {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start, [dir=rtl] [float-md-start], :host-context([dir=rtl]) [float-md-start] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-md-end,\r\n[float-md-end] {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end, [dir=rtl] [float-md-end], :host-context([dir=rtl]) [float-md-end] {\r\n    float: left !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-float-lg-left,\r\n[float-lg-left] {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-lg-right,\r\n[float-lg-right] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-start,\r\n[float-lg-start] {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start, [dir=rtl] [float-lg-start], :host-context([dir=rtl]) [float-lg-start] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-lg-end,\r\n[float-lg-end] {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end, [dir=rtl] [float-lg-end], :host-context([dir=rtl]) [float-lg-end] {\r\n    float: left !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-float-xl-left,\r\n[float-xl-left] {\r\n    float: left !important;\r\n  }\r\n\r\n  .ion-float-xl-right,\r\n[float-xl-right] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-start,\r\n[float-xl-start] {\r\n    float: left !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start, [dir=rtl] [float-xl-start], :host-context([dir=rtl]) [float-xl-start] {\r\n    float: right !important;\r\n  }\r\n\r\n  .ion-float-xl-end,\r\n[float-xl-end] {\r\n    float: right !important;\r\n  }\r\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end, [dir=rtl] [float-xl-end], :host-context([dir=rtl]) [float-xl-end] {\r\n    float: left !important;\r\n  }\r\n}\n.ion-text-center,\r\n[text-center] {\r\n  text-align: center !important;\r\n}\n.ion-text-justify,\r\n[text-justify] {\r\n  text-align: justify !important;\r\n}\n.ion-text-start,\r\n[text-start] {\r\n  text-align: start !important;\r\n}\n.ion-text-end,\r\n[text-end] {\r\n  text-align: end !important;\r\n}\n.ion-text-left,\r\n[text-left] {\r\n  text-align: left !important;\r\n}\n.ion-text-right,\r\n[text-right] {\r\n  text-align: right !important;\r\n}\n.ion-text-nowrap,\r\n[text-nowrap] {\r\n  white-space: nowrap !important;\r\n}\n.ion-text-wrap,\r\n[text-wrap] {\r\n  white-space: normal !important;\r\n}\n@media (min-width: 576px) {\r\n  .ion-text-sm-center,\r\n[text-sm-center] {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-sm-justify,\r\n[text-sm-justify] {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-sm-start,\r\n[text-sm-start] {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-sm-end,\r\n[text-sm-end] {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-sm-left,\r\n[text-sm-left] {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-sm-right,\r\n[text-sm-right] {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-sm-nowrap,\r\n[text-sm-nowrap] {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-sm-wrap,\r\n[text-sm-wrap] {\r\n    white-space: normal !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-text-md-center,\r\n[text-md-center] {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-md-justify,\r\n[text-md-justify] {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-md-start,\r\n[text-md-start] {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-md-end,\r\n[text-md-end] {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-md-left,\r\n[text-md-left] {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-md-right,\r\n[text-md-right] {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-md-nowrap,\r\n[text-md-nowrap] {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-md-wrap,\r\n[text-md-wrap] {\r\n    white-space: normal !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-text-lg-center,\r\n[text-lg-center] {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-lg-justify,\r\n[text-lg-justify] {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-lg-start,\r\n[text-lg-start] {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-lg-end,\r\n[text-lg-end] {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-lg-left,\r\n[text-lg-left] {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-lg-right,\r\n[text-lg-right] {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-lg-nowrap,\r\n[text-lg-nowrap] {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-lg-wrap,\r\n[text-lg-wrap] {\r\n    white-space: normal !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-text-xl-center,\r\n[text-xl-center] {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .ion-text-xl-justify,\r\n[text-xl-justify] {\r\n    text-align: justify !important;\r\n  }\r\n\r\n  .ion-text-xl-start,\r\n[text-xl-start] {\r\n    text-align: start !important;\r\n  }\r\n\r\n  .ion-text-xl-end,\r\n[text-xl-end] {\r\n    text-align: end !important;\r\n  }\r\n\r\n  .ion-text-xl-left,\r\n[text-xl-left] {\r\n    text-align: left !important;\r\n  }\r\n\r\n  .ion-text-xl-right,\r\n[text-xl-right] {\r\n    text-align: right !important;\r\n  }\r\n\r\n  .ion-text-xl-nowrap,\r\n[text-xl-nowrap] {\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .ion-text-xl-wrap,\r\n[text-xl-wrap] {\r\n    white-space: normal !important;\r\n  }\r\n}\n.ion-text-uppercase,\r\n[text-uppercase] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: uppercase !important;\r\n}\n.ion-text-lowercase,\r\n[text-lowercase] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: lowercase !important;\r\n}\n.ion-text-capitalize,\r\n[text-capitalize] {\r\n  /* stylelint-disable-next-line declaration-no-important */\r\n  text-transform: capitalize !important;\r\n}\n@media (min-width: 576px) {\r\n  .ion-text-sm-uppercase,\r\n[text-sm-uppercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-sm-lowercase,\r\n[text-sm-lowercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-sm-capitalize,\r\n[text-sm-capitalize] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n@media (min-width: 768px) {\r\n  .ion-text-md-uppercase,\r\n[text-md-uppercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-md-lowercase,\r\n[text-md-lowercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-md-capitalize,\r\n[text-md-capitalize] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n@media (min-width: 992px) {\r\n  .ion-text-lg-uppercase,\r\n[text-lg-uppercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-lg-lowercase,\r\n[text-lg-lowercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-lg-capitalize,\r\n[text-lg-capitalize] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n@media (min-width: 1200px) {\r\n  .ion-text-xl-uppercase,\r\n[text-xl-uppercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: uppercase !important;\r\n  }\r\n\r\n  .ion-text-xl-lowercase,\r\n[text-xl-lowercase] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: lowercase !important;\r\n  }\r\n\r\n  .ion-text-xl-capitalize,\r\n[text-xl-capitalize] {\r\n    /* stylelint-disable-next-line declaration-no-important */\r\n    text-transform: capitalize !important;\r\n  }\r\n}\n.ion-align-self-start,\r\n[align-self-start] {\r\n  align-self: flex-start !important;\r\n}\n.ion-align-self-end,\r\n[align-self-end] {\r\n  align-self: flex-end !important;\r\n}\n.ion-align-self-center,\r\n[align-self-center] {\r\n  align-self: center !important;\r\n}\n.ion-align-self-stretch,\r\n[align-self-stretch] {\r\n  align-self: stretch !important;\r\n}\n.ion-align-self-baseline,\r\n[align-self-baseline] {\r\n  align-self: baseline !important;\r\n}\n.ion-align-self-auto,\r\n[align-self-auto] {\r\n  align-self: auto !important;\r\n}\n.ion-wrap,\r\n[wrap] {\r\n  flex-wrap: wrap !important;\r\n}\n.ion-nowrap,\r\n[nowrap] {\r\n  flex-wrap: nowrap !important;\r\n}\n.ion-wrap-reverse,\r\n[wrap-reverse] {\r\n  flex-wrap: wrap-reverse !important;\r\n}\n.ion-justify-content-start,\r\n[justify-content-start] {\r\n  -webkit-box-pack: start !important;\r\n          justify-content: flex-start !important;\r\n}\n.ion-justify-content-center,\r\n[justify-content-center] {\r\n  -webkit-box-pack: center !important;\r\n          justify-content: center !important;\r\n}\n.ion-justify-content-end,\r\n[justify-content-end] {\r\n  -webkit-box-pack: end !important;\r\n          justify-content: flex-end !important;\r\n}\n.ion-justify-content-around,\r\n[justify-content-around] {\r\n  justify-content: space-around !important;\r\n}\n.ion-justify-content-between,\r\n[justify-content-between] {\r\n  -webkit-box-pack: justify !important;\r\n          justify-content: space-between !important;\r\n}\n.ion-justify-content-evenly,\r\n[justify-content-evenly] {\r\n  -webkit-box-pack: space-evenly !important;\r\n          justify-content: space-evenly !important;\r\n}\n.ion-align-items-start,\r\n[align-items-start] {\r\n  -webkit-box-align: start !important;\r\n          align-items: flex-start !important;\r\n}\n.ion-align-items-center,\r\n[align-items-center] {\r\n  -webkit-box-align: center !important;\r\n          align-items: center !important;\r\n}\n.ion-align-items-end,\r\n[align-items-end] {\r\n  -webkit-box-align: end !important;\r\n          align-items: flex-end !important;\r\n}\n.ion-align-items-stretch,\r\n[align-items-stretch] {\r\n  -webkit-box-align: stretch !important;\r\n          align-items: stretch !important;\r\n}\n.ion-align-items-baseline,\r\n[align-items-baseline] {\r\n  -webkit-box-align: baseline !important;\r\n          align-items: baseline !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXGxlbm92b1xcRGVza3RvcFxccHJvamVjdFxcYWN1TUVFVC9zcmNcXGdsb2JhbC5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvY29yZS5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy90aGVtZXMvaW9uaWMuZ2xvYmFscy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3Mvbm9ybWFsaXplLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9zdHJ1Y3R1cmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3R5cG9ncmFwaHkuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9kaXNwbGF5LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2Rpc3BsYXkuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvcGFkZGluZy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2Zsb2F0LWVsZW1lbnRzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtYWxpZ25tZW50LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9mbGV4LXV0aWxzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2ZsZXgtdXRpbHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7RUFBQTtBQVdBLDREQUFBO0FDTkE7RUFDRSw2RkFBQTtBQ0pGO0FETUE7RUFDRSwwREFBQTtBQ0hGO0FETUE7RUFDRSwwQ0FBQTtBQ0hGO0FETUE7RUFDRSx1Q0FBQTtBQ0hGO0FETUE7RUFDRSxnQkFBQTtBQ0hGO0FEa0NFO0VBVEEsOERBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDckJGO0FEeUJFO0VBVEEsZ0VBQUE7RUFDQSw2RUFBQTtFQUNBLDBFQUFBO0VBQ0EsMkZBQUE7RUFDQSx1RUFBQTtFQUNBLHFFQUFBO0FDWkY7QURnQkU7RUFUQSwrREFBQTtFQUNBLDRFQUFBO0VBQ0EseUVBQUE7RUFDQSwwRkFBQTtFQUNBLHNFQUFBO0VBQ0Esb0VBQUE7QUNIRjtBRE9FO0VBVEEsOERBQUE7RUFDQSwwRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDTUY7QURGRTtFQVRBLDhEQUFBO0VBQ0EsMEVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ2VGO0FEWEU7RUFUQSw2REFBQTtFQUNBLHlFQUFBO0VBQ0EsdUVBQUE7RUFDQSx3RkFBQTtFQUNBLG9FQUFBO0VBQ0Esa0VBQUE7QUN3QkY7QURwQkU7RUFUQSw0REFBQTtFQUNBLDBFQUFBO0VBQ0Esc0VBQUE7RUFDQSxpRkFBQTtFQUNBLG1FQUFBO0VBQ0EsaUVBQUE7QUNpQ0Y7QUQ3QkU7RUFUQSw2REFBQTtFQUNBLDJFQUFBO0VBQ0EsdUVBQUE7RUFDQSx3RkFBQTtFQUNBLG9FQUFBO0VBQ0Esa0VBQUE7QUMwQ0Y7QUR0Q0U7RUFUQSwyREFBQTtFQUNBLHNFQUFBO0VBQ0EscUVBQUE7RUFDQSxzRkFBQTtFQUNBLGtFQUFBO0VBQ0EsZ0VBQUE7QUNtREY7QUR0Q0E7RUUrTk0sT0Y5TnVCO0VFK052QixRRi9OaUI7RUV3UHJCLE1GeFBrQjtFRXlQbEIsU0Z6UHdCO0VBRXhCLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUVBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVR3RCK0I7QUYrRGpDO0FEdENBOzs7Ozs7Ozs7Ozs7Ozs7RUFlRSx5REFBQTtFQUNBLHdCQUFBO0FDeUNGO0FEdENBO0VBQ0UsVUFBQTtBQ3lDRjtBRG5DQTtFQUNFLDZCQUFBO0FDc0NGO0FEbkNBO0VBQ0U7SUFDRSxpREFBQTtFQ3NDRjtBQUNGO0FEbENBO0VBQ0U7SUFDRSxrREFBQTtJQUNBLHdEQUFBO0lBQ0Esb0RBQUE7SUFDQSxzREFBQTtFQ29DRjtBQUNGO0FEakNBO0VBQ0U7SUFDRSw2Q0FBQTtJQUNBLG1EQUFBO0lBQ0EsK0NBQUE7SUFDQSxpREFBQTtFQ21DRjtBQUNGO0FGcEpBLHdDQUFBO0FLUEE7Ozs7RUFJRSx3QkFBQTtBQ05GO0FEV0E7RUFDRSxhQUFBO0VBRUEsU0FBQTtBQ1RGO0FEaUJBOztFQUVFLGlCQUFBO0FDZEY7QURzQkE7RUFDRSxlQUFBO0VBRUEsU0FBQTtBQ3BCRjtBRHdCQTtFQUNFLGdCQUFBO0FDckJGO0FENkJBO0VBQ0UsZ0JBQUE7QUMxQkY7QUQ2QkE7RUFDRSxXQUFBO0VBRUEsZUFBQTtFQUVBLHVCQUFBO0FDNUJGO0FEZ0NBO0VBQ0UsY0FBQTtBQzdCRjtBRGlDQTs7OztFQUlFLGlDQUFBO0VBQ0EsY0FBQTtBQzlCRjtBRDhDQTs7OztFQUlFLG9CQUFBO0VBQ0EsbUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxjQUFBO0VBRUEsWUFBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0FDN0NGO0FEZ0RBO0VBQ0UsaUJBQUE7QUM3Q0Y7QUQ0Q0E7RUFDRSxpQkFBQTtBQzdDRjtBRDRDQTtFQUNFLGlCQUFBO0FDN0NGO0FENENBO0VBQ0UsaUJBQUE7QUM3Q0Y7QUQ0Q0E7RUFDRSxpQkFBQTtBQzdDRjtBRGdEQTs7OztFQUlFLFNBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtBQzlDRjtBRHNEQTs7O0VBR0UsZUFBQTtFQUVBLDBCQUFBO0FDcERGO0FEd0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkUsMEJBQUE7QUNyREY7QUR3REE7O0VBRUUsb0JBQUE7QUNyREY7QUR3REE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBRUEsMEJBQUE7QUN0REY7QUR5REE7RUFDRSxlQUFBO0FDdERGO0FEMERBOzs7RUFHRSxlQUFBO0FDdkRGO0FEMkRBOztFQUVFLFVBQUE7RUFFQSxTQUFBO0FDekRGO0FEK0RBOztFQUVFLFVBQUE7RUFFQSxzQkFBQTtBQzdERjtBRG1FQTs7RUFFRSxZQUFBO0FDaEVGO0FEc0VBOztFQUVFLHdCQUFBO0FDbkVGO0FEMkVBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ3hFRjtBRDJFQTs7RUFFRSxVQUFBO0FDeEVGO0FDekpBO0VBQ0Usc0JBQUE7RUFFQSw2Q0FBQTtFQUNBLHdDQUFBO0VBQ0EsMkJBQUE7QUNSRjtBRFdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSw4QkFBQTtLQUFBLDJCQUFBO01BQUEsMEJBQUE7VUFBQSxzQkFBQTtBQ1RGO0FEWUE7RUFDRSxhQUFBO0FDVEY7QURZQTtFQUNFLGFBQUE7QUNURjtBRFlBO0VKU0Usa0NBQUE7RUFDQSxtQ0FBQTtFQStKRSxjSXZLYztFSndLZCxlSXhLYztFSjRNaEIsYUk1TWdCO0VKNk1oQixnQkk3TWdCO0VKdUtkLGVJdEtlO0VKdUtmLGdCSXZLZTtFSjJNakIsY0kzTWlCO0VKNE1qQixpQkk1TWlCO0VBRWpCLGVBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGtDQUFBO0VBRUEsZ0JBQUE7RUFFQSwwQkFBQTtFQUVBLHVCQUFBO0VBRUEseUJBQUE7RUFFQSxxQkFBQTtFQUVBLDJCQUFBO0VBRUEsOEJBQUE7S0FBQSwyQkFBQTtNQUFBLDBCQUFBO1VBQUEsc0JBQUE7QUNaRjtBQ2ZBO0VBQ0UsbUNBQUE7QUM3QkY7QURnQ0E7RUFDRSw2QkFBQTtFQUNBLHdDQUFBO0FDN0JGO0FEZ0NBOzs7Ozs7RU5zTUUsZ0JNaE1nQjtFTmlNaEIsbUJNak00QjtFQUU1QixnQkF4QzZCO0VBMEM3QixnQkF2QzZCO0FDUy9CO0FEaUNBO0VOeUxFLGdCTXhMZ0I7RUFFaEIsZUExQzZCO0FDVS9CO0FEbUNBO0VObUxFLGdCTWxMZ0I7RUFFaEIsZUE3QzZCO0FDVy9CO0FEcUNBO0VBQ0UsZUE5QzZCO0FDVy9CO0FEc0NBO0VBQ0UsZUEvQzZCO0FDWS9CO0FEc0NBO0VBQ0UsZUFoRDZCO0FDYS9CO0FEc0NBO0VBQ0UsZUFqRDZCO0FDYy9CO0FEc0NBO0VBQ0UsY0FBQTtBQ25DRjtBRHNDQTs7RUFFRSxrQkFBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0VBRUEsd0JBQUE7QUN0Q0Y7QUR5Q0E7RUFDRSxXQUFBO0FDdENGO0FEeUNBO0VBQ0UsZUFBQTtBQ3RDRjtBQ3ZEQTtFQUNFLHdCQUFBO0FDTkY7QURnQkk7RUFDRSx3QkFBQTtBQ2JOO0FUeUhJO0VRckdBO0lBQ0Usd0JBQUE7RUNoQko7QUFDRjtBVCtFSTtFUXpFQTtJQUNFLHdCQUFBO0VDSEo7QUFDRjtBVDhHSTtFUXJHQTtJQUNFLHdCQUFBO0VDTko7QUFDRjtBVHFFSTtFUXpFQTtJQUNFLHdCQUFBO0VDT0o7QUFDRjtBVG9HSTtFUXJHQTtJQUNFLHdCQUFBO0VDSUo7QUFDRjtBVDJESTtFUXpFQTtJQUNFLHdCQUFBO0VDaUJKO0FBQ0Y7QVQwRkk7RVFyR0E7SUFDRSx3QkFBQTtFQ2NKO0FBQ0Y7QVRpREk7RVF6RUE7SUFDRSx3QkFBQTtFQzJCSjtBQUNGO0FEckJJO0VBQ0Usd0JBQUE7QUN1Qk47QVo5QkEsaURBQUE7QWFMQTs7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFVm9MRSxlVWxMZTtFVm1MZixnQlVuTGU7RVZ1TmpCLGNVdk5pQjtFVndOakIsaUJVeE5pQjtBQ1puQjtBRGVBOztFQUVFLHlDQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VWOEtFLHNDVW5NTTtFVm9NTix1Q1VwTU07RVZvT1IscUNVcE9RO0VWcU9SLHdDVXJPUTtBQ2FWO0FYMExNO0VBQ0U7O0lBRUksbUJBQUE7SUFHQSxvQkFBQTtJQUdGLCtDVWhOQTtJVmlOQSw4Q1VqTkE7SVZrTkEsNkNVbE5BO0lWbU5BLDRDVW5OQTtFQ3VCUjtBQUNGO0FERUE7O0VBRUUsdUNBQUE7RVZ3TUEscUNVcE9RO0FDOEJWO0FER0E7O0VBRUUseUNBQUE7RVZnS0Usc0NVbk1NO0FDbUNWO0FYb0tNO0VBQ0U7O0lBRUksbUJBQUE7SUFNRiwrQ1VoTkE7SVZpTkEsOENVak5BO0VDMENSO0FBQ0Y7QURIQTs7RUFFRSx1Q0FBQTtFVjBKRSx1Q1VwTU07QUNpRFY7QVhzSk07RUFDRTs7SUFLSSxvQkFBQTtJQUtGLDZDVWxOQTtJVm1OQSw0Q1VuTkE7RUN3RFI7QUFDRjtBRFZBOztFQUVFLDBDQUFBO0VWb0xBLHdDVXJPUTtBQytEVjtBRFRBOztFQUVFLHVDQUFBO0VBQ0EsMENBQUE7RVYyS0EscUNVcE9RO0VWcU9SLHdDVXJPUTtBQ3NFVjtBRFJBOztFQUVFLHlDQUFBO0VBQ0EsdUNBQUE7RVZrSUUsc0NVbk1NO0VWb01OLHVDVXBNTTtBQzZFVjtBWDBITTtFQUNFOztJQUVJLG1CQUFBO0lBR0Esb0JBQUE7SUFHRiwrQ1VoTkE7SVZpTkEsOENVak5BO0lWa05BLDZDVWxOQTtJVm1OQSw0Q1VuTkE7RUN1RlI7QUFDRjtBRGRBOztFQUVFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFVmdIRSxjVTlHYztFVitHZCxlVS9HYztFVm1KaEIsYVVuSmdCO0VWb0poQixnQlVwSmdCO0FDbUJsQjtBRGhCQTs7RUFFRSx1Q0FBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSx3Q0FBQTtFVjBHRSxvQ1VsTUs7RVZtTUwscUNVbk1LO0VWbU9QLG1DVW5PTztFVm9PUCxzQ1VwT087QUMrR1Q7QVh1Rk07RUFDRTs7SUFFSSxrQkFBQTtJQUdBLG1CQUFBO0lBR0YsNkNVL01EO0lWZ05DLDRDVWhORDtJVmlOQywyQ1VqTkQ7SVZrTkMsMENVbE5EO0VDeUhQO0FBQ0Y7QUQ3QkE7O0VBRUUscUNBQUE7RVZvSUEsbUNVbk9PO0FDZ0lUO0FENUJBOztFQUVFLHVDQUFBO0VWNEZFLG9DVWxNSztBQ3FJVDtBWGlFTTtFQUNFOztJQUVJLGtCQUFBO0lBTUYsNkNVL01EO0lWZ05DLDRDVWhORDtFQzRJUDtBQUNGO0FEbENBOztFQUVFLHFDQUFBO0VWc0ZFLHFDVW5NSztBQ21KVDtBWG1ETTtFQUNFOztJQUtJLG1CQUFBO0lBS0YsMkNVak5EO0lWa05DLDBDVWxORDtFQzBKUDtBQUNGO0FEekNBOztFQUVFLHdDQUFBO0VWZ0hBLHNDVXBPTztBQ2lLVDtBRHhDQTs7RUFFRSxxQ0FBQTtFQUNBLHdDQUFBO0VWdUdBLG1DVW5PTztFVm9PUCxzQ1VwT087QUN3S1Q7QUR2Q0E7O0VBRUUsdUNBQUE7RUFDQSxxQ0FBQTtFVjhERSxvQ1VsTUs7RVZtTUwscUNVbk1LO0FDK0tUO0FYdUJNO0VBQ0U7O0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUdGLDZDVS9NRDtJVmdOQyw0Q1VoTkQ7SVZpTkMsMkNVak5EO0lWa05DLDBDVWxORDtFQ3lMUDtBQUNGO0FDdkxJOztFWmdYRSxzQkFBQTtBYTFYTjtBRGVJOztFWjJXRSx1QkFBQTtBYXJYTjtBRGVJOztFWndWRSxzQkFBQTtBYWxXTjtBYitJVztFQXNOTCx1QkFBQTtBYWxXTjtBRFlJOztFWjBWRSx1QkFBQTtBYWpXTjtBYnVJVztFQTZOTCxzQkFBQTtBYWpXTjtBYm1FSTtFWTlFQTs7SVpnWEUsc0JBQUE7RWEvVko7O0VEWkU7O0laMldFLHVCQUFBO0VhMVZKOztFRFpFOztJWndWRSxzQkFBQTtFYXZVSjtFYm9IUztJQXNOTCx1QkFBQTtFYXZVSjs7RURmRTs7SVowVkUsdUJBQUE7RWF0VUo7RWI0R1M7SUE2Tkwsc0JBQUE7RWF0VUo7QUFDRjtBYnVDSTtFWTlFQTs7SVpnWEUsc0JBQUE7RWFwVUo7O0VEdkNFOztJWjJXRSx1QkFBQTtFYS9USjs7RUR2Q0U7O0lad1ZFLHNCQUFBO0VhNVNKO0VieUZTO0lBc05MLHVCQUFBO0VhNVNKOztFRDFDRTs7SVowVkUsdUJBQUE7RWEzU0o7RWJpRlM7SUE2Tkwsc0JBQUE7RWEzU0o7QUFDRjtBYllJO0VZOUVBOztJWmdYRSxzQkFBQTtFYXpTSjs7RURsRUU7O0laMldFLHVCQUFBO0VhcFNKOztFRGxFRTs7SVp3VkUsc0JBQUE7RWFqUko7RWI4RFM7SUFzTkwsdUJBQUE7RWFqUko7O0VEckVFOztJWjBWRSx1QkFBQTtFYWhSSjtFYnNEUztJQTZOTCxzQkFBQTtFYWhSSjtBQUNGO0FiZkk7RVk5RUE7O0laZ1hFLHNCQUFBO0VhOVFKOztFRDdGRTs7SVoyV0UsdUJBQUE7RWF6UUo7O0VEN0ZFOztJWndWRSxzQkFBQTtFYXRQSjtFYm1DUztJQXNOTCx1QkFBQTtFYXRQSjs7RURoR0U7O0laMFZFLHVCQUFBO0VhclBKO0ViMkJTO0lBNk5MLHNCQUFBO0VhclBKO0FBQ0Y7QUN4SEk7O0VBRUUsNkJBQUE7QUNaTjtBRGVJOztFQUVFLDhCQUFBO0FDWk47QURlSTs7RUFFRSw0QkFBQTtBQ1pOO0FEZUk7O0VBRUUsMEJBQUE7QUNaTjtBRGVJOztFQUVFLDJCQUFBO0FDWk47QURlSTs7RUFFRSw0QkFBQTtBQ1pOO0FEZUk7O0VBRUUsOEJBQUE7QUNaTjtBRGVJOztFQUVFLDhCQUFBO0FDWk47QWZxREk7RWM5RUE7O0lBRUUsNkJBQUE7RUM2Qko7O0VEMUJFOztJQUVFLDhCQUFBO0VDNkJKOztFRDFCRTs7SUFFRSw0QkFBQTtFQzZCSjs7RUQxQkU7O0lBRUUsMEJBQUE7RUM2Qko7O0VEMUJFOztJQUVFLDJCQUFBO0VDNkJKOztFRDFCRTs7SUFFRSw0QkFBQTtFQzZCSjs7RUQxQkU7O0lBRUUsOEJBQUE7RUM2Qko7O0VEMUJFOztJQUVFLDhCQUFBO0VDNkJKO0FBQ0Y7QWZXSTtFYzlFQTs7SUFFRSw2QkFBQTtFQ3NFSjs7RURuRUU7O0lBRUUsOEJBQUE7RUNzRUo7O0VEbkVFOztJQUVFLDRCQUFBO0VDc0VKOztFRG5FRTs7SUFFRSwwQkFBQTtFQ3NFSjs7RURuRUU7O0lBRUUsMkJBQUE7RUNzRUo7O0VEbkVFOztJQUVFLDRCQUFBO0VDc0VKOztFRG5FRTs7SUFFRSw4QkFBQTtFQ3NFSjs7RURuRUU7O0lBRUUsOEJBQUE7RUNzRUo7QUFDRjtBZjlCSTtFYzlFQTs7SUFFRSw2QkFBQTtFQytHSjs7RUQ1R0U7O0lBRUUsOEJBQUE7RUMrR0o7O0VENUdFOztJQUVFLDRCQUFBO0VDK0dKOztFRDVHRTs7SUFFRSwwQkFBQTtFQytHSjs7RUQ1R0U7O0lBRUUsMkJBQUE7RUMrR0o7O0VENUdFOztJQUVFLDRCQUFBO0VDK0dKOztFRDVHRTs7SUFFRSw4QkFBQTtFQytHSjs7RUQ1R0U7O0lBRUUsOEJBQUE7RUMrR0o7QUFDRjtBZnZFSTtFYzlFQTs7SUFFRSw2QkFBQTtFQ3dKSjs7RURySkU7O0lBRUUsOEJBQUE7RUN3Sko7O0VEckpFOztJQUVFLDRCQUFBO0VDd0pKOztFRHJKRTs7SUFFRSwwQkFBQTtFQ3dKSjs7RURySkU7O0lBRUUsMkJBQUE7RUN3Sko7O0VEckpFOztJQUVFLDRCQUFBO0VDd0pKOztFRHJKRTs7SUFFRSw4QkFBQTtFQ3dKSjs7RURySkU7O0lBRUUsOEJBQUE7RUN3Sko7QUFDRjtBQzlMSTs7RUFFRSx5REFBQTtFQUNBLG9DQUFBO0FDWk47QURlSTs7RUFFRSx5REFBQTtFQUNBLG9DQUFBO0FDWk47QURlSTs7RUFFRSx5REFBQTtFQUNBLHFDQUFBO0FDWk47QWpCMkVJO0VnQjlFQTs7SUFFRSx5REFBQTtJQUNBLG9DQUFBO0VDT0o7O0VESkU7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQ09KOztFREpFOztJQUVFLHlEQUFBO0lBQ0EscUNBQUE7RUNPSjtBQUNGO0FqQnVESTtFZ0I5RUE7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQzBCSjs7RUR2QkU7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQzBCSjs7RUR2QkU7O0lBRUUseURBQUE7SUFDQSxxQ0FBQTtFQzBCSjtBQUNGO0FqQm9DSTtFZ0I5RUE7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQzZDSjs7RUQxQ0U7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQzZDSjs7RUQxQ0U7O0lBRUUseURBQUE7SUFDQSxxQ0FBQTtFQzZDSjtBQUNGO0FqQmlCSTtFZ0I5RUE7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQ2dFSjs7RUQ3REU7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQ2dFSjs7RUQ3REU7O0lBRUUseURBQUE7SUFDQSxxQ0FBQTtFQ2dFSjtBQUNGO0FDckZBOztFQUVFLGlDQUFBO0FDUEY7QURVQTs7RUFFRSwrQkFBQTtBQ1BGO0FEVUE7O0VBRUUsNkJBQUE7QUNQRjtBRFVBOztFQUVFLDhCQUFBO0FDUEY7QURVQTs7RUFFRSwrQkFBQTtBQ1BGO0FEVUE7O0VBRUUsMkJBQUE7QUNQRjtBRGNBOztFQUVFLDBCQUFBO0FDWEY7QURjQTs7RUFFRSw0QkFBQTtBQ1hGO0FEY0E7O0VBRUUsa0NBQUE7QUNYRjtBRGtCQTs7RUFFRSxrQ0FBQTtVQUFBLHNDQUFBO0FDZkY7QURrQkE7O0VBRUUsbUNBQUE7VUFBQSxrQ0FBQTtBQ2ZGO0FEa0JBOztFQUVFLGdDQUFBO1VBQUEsb0NBQUE7QUNmRjtBRGtCQTs7RUFFRSx3Q0FBQTtBQ2ZGO0FEa0JBOztFQUVFLG9DQUFBO1VBQUEseUNBQUE7QUNmRjtBRGtCQTs7RUFFRSx5Q0FBQTtVQUFBLHdDQUFBO0FDZkY7QURzQkE7O0VBRUUsbUNBQUE7VUFBQSxrQ0FBQTtBQ25CRjtBRHNCQTs7RUFFRSxvQ0FBQTtVQUFBLDhCQUFBO0FDbkJGO0FEc0JBOztFQUVFLGlDQUFBO1VBQUEsZ0NBQUE7QUNuQkY7QURzQkE7O0VBRUUscUNBQUE7VUFBQSwrQkFBQTtBQ25CRjtBRHNCQTs7RUFFRSxzQ0FBQTtVQUFBLGdDQUFBO0FDbkJGIiwiZmlsZSI6InNyYy9nbG9iYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEFwcCBHbG9iYWwgQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUHV0IHN0eWxlIHJ1bGVzIGhlcmUgdGhhdCB5b3Ugd2FudCB0byBhcHBseSBnbG9iYWxseS4gVGhlc2Ugc3R5bGVzIGFyZSBmb3JcclxuICogdGhlIGVudGlyZSBhcHAgYW5kIG5vdCBqdXN0IG9uZSBjb21wb25lbnQuIEFkZGl0aW9uYWxseSwgdGhpcyBmaWxlIGNhbiBiZVxyXG4gKiB1c2VkIGFzIGFuIGVudHJ5IHBvaW50IHRvIGltcG9ydCBvdGhlciBDU1MvU2FzcyBmaWxlcyB0byBiZSBpbmNsdWRlZCBpbiB0aGVcclxuICogb3V0cHV0IENTUy5cclxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZ2xvYmFsIHN0eWxlc2hlZXRzLCB2aXNpdCB0aGUgZG9jdW1lbnRhdGlvbjpcclxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ2xvYmFsLXN0eWxlc2hlZXRzXHJcbiAqL1xyXG5cclxuLyogQ29yZSBDU1MgcmVxdWlyZWQgZm9yIElvbmljIGNvbXBvbmVudHMgdG8gd29yayBwcm9wZXJseSAqL1xyXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzc1wiO1xyXG5cclxuLyogQmFzaWMgQ1NTIGZvciBhcHBzIGJ1aWx0IHdpdGggSW9uaWMgKi9cclxuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzc1wiO1xyXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzXCI7XHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3R5cG9ncmFwaHkuY3NzXCI7XHJcbkBpbXBvcnQgJ35AaW9uaWMvYW5ndWxhci9jc3MvZGlzcGxheS5jc3MnO1xyXG5cclxuLyogT3B0aW9uYWwgQ1NTIHV0aWxzIHRoYXQgY2FuIGJlIGNvbW1lbnRlZCBvdXQgKi9cclxuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvcGFkZGluZy5jc3NcIjtcclxuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzXCI7XHJcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzc1wiO1xyXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLmNzc1wiO1xyXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzc1wiO1xyXG4iLG51bGwsImh0bWwuaW9zIHtcclxuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5odG1sLm1kIHtcclxuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgLS1pb24tZm9udC1mYW1pbHk6IHZhcigtLWlvbi1kZWZhdWx0LWZvbnQpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XHJcbn1cclxuXHJcbmJvZHkuYmFja2Ryb3Atbm8tc2Nyb2xsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaW9uLWNvbG9yLXByaW1hcnkge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjMzE3MWUwKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICM0YzhkZmYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tY29sb3Itc2Vjb25kYXJ5IHtcclxuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCAjMGNkMWU4KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiwgMTIsIDIwOSwgMjMyKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUsICMwYmI4Y2MpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50LCAjMjRkNmVhKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWNvbG9yLXRlcnRpYXJ5IHtcclxuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnksICM3MDQ0ZmYpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2IsIDExMiwgNjgsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlLCAjNjMzY2UwKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50LCAjN2U1N2ZmKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWNvbG9yLXN1Y2Nlc3Mge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCAjMTBkYzYwKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IsIDE2LCAyMjAsIDk2KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUsICMwZWMyNTQpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCwgIzI4ZTA3MCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1jb2xvci13YXJuaW5nIHtcclxuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZywgI2ZmY2UwMCkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctcmdiLCAyNTUsIDIwNiwgMCkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlLCAjZTBiNTAwKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQsICNmZmQzMWEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tY29sb3ItZGFuZ2VyIHtcclxuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZjA0MTQxKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiwgMjQwLCA2NSwgNjUpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSwgI2QzMzkzOSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQsICNmMjU0NTQpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tY29sb3ItbGlnaHQge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiwgMjQ0LCAyNDUsIDI0OCkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LCAjMDAwKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYiwgMCwgMCwgMCkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50LCAjZjVmNmY5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWNvbG9yLW1lZGl1bSB7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzk4OWFhMikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IsIDE1MiwgMTU0LCAxNjIpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSwgIzg2ODg4ZikgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQsICNhMmE0YWIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tY29sb3ItZGFyayB7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWRhcmssICMyMjI0MjgpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiwgMzQsIDM2LCA0MCkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlLCAjMWUyMDIzKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQsICMzODNhM2UpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tcGFnZSB7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGNvbnRhaW46IGxheW91dCBzaXplIHN0eWxlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuaW9uLXJvdXRlLFxyXG5pb24tcm91dGUtcmVkaXJlY3QsXHJcbmlvbi1yb3V0ZXIsXHJcbmlvbi1zZWxlY3Qtb3B0aW9uLFxyXG5pb24tbmF2LWNvbnRyb2xsZXIsXHJcbmlvbi1tZW51LWNvbnRyb2xsZXIsXHJcbmlvbi1hY3Rpb24tc2hlZXQtY29udHJvbGxlcixcclxuaW9uLWFsZXJ0LWNvbnRyb2xsZXIsXHJcbmlvbi1sb2FkaW5nLWNvbnRyb2xsZXIsXHJcbmlvbi1tb2RhbC1jb250cm9sbGVyLFxyXG5pb24tcGlja2VyLWNvbnRyb2xsZXIsXHJcbmlvbi1wb3BvdmVyLWNvbnRyb2xsZXIsXHJcbmlvbi10b2FzdC1jb250cm9sbGVyLFxyXG4uaW9uLXBhZ2UtaGlkZGVuLFxyXG5baGlkZGVuXSB7XHJcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1wYWdlLWludmlzaWJsZSB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuaHRtbC5wbHQtaW9zLnBsdC1oeWJyaWQsIGh0bWwucGx0LWlvcy5wbHQtcHdhIHtcclxuICAtLWlvbi1zdGF0dXNiYXItcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogMjBweCkge1xyXG4gIGh0bWwge1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogdmFyKC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nKTtcclxuICB9XHJcbn1cclxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCkpIHtcclxuICBodG1sIHtcclxuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApO1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xyXG4gIH1cclxufVxyXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpIHtcclxuICBodG1sIHtcclxuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcclxuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxuICAgIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KTtcclxuICB9XHJcbn1cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmUuY3NzLm1hcCAqL1xyXG4iLG51bGwsbnVsbCxudWxsLCJhdWRpbyxcclxuY2FudmFzLFxyXG5wcm9ncmVzcyxcclxudmlkZW8ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuYXVkaW86bm90KFtjb250cm9sc10pIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuYixcclxuc3Ryb25nIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5zdmc6bm90KDpyb290KSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuZmlndXJlIHtcclxuICBtYXJnaW46IDFlbSA0MHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG5wcmUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5jb2RlLFxyXG5rYmQsXHJcbnByZSxcclxuc2FtcCB7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG5sYWJlbCxcclxuaW5wdXQsXHJcbnNlbGVjdCxcclxudGV4dGFyZWEge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxufVxyXG5cclxuZm9ybSxcclxuaW5wdXQsXHJcbm9wdGdyb3VwLFxyXG5zZWxlY3Qge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5odG1sIGlucHV0W3R5cGU9YnV0dG9uXSxcclxuaW5wdXRbdHlwZT1yZXNldF0sXHJcbmlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG59XHJcblxyXG5hLFxyXG5hIGRpdixcclxuYSBzcGFuLFxyXG5hIGlvbi1pY29uLFxyXG5hIGlvbi1sYWJlbCxcclxuYnV0dG9uLFxyXG5idXR0b24gZGl2LFxyXG5idXR0b24gc3BhbixcclxuYnV0dG9uIGlvbi1pY29uLFxyXG5idXR0b24gaW9uLWxhYmVsLFxyXG4uaW9uLXRhcHBhYmxlLFxyXG5bdGFwcGFibGVdLFxyXG5bdGFwcGFibGVdIGRpdixcclxuW3RhcHBhYmxlXSBzcGFuLFxyXG5bdGFwcGFibGVdIGlvbi1pY29uLFxyXG5bdGFwcGFibGVdIGlvbi1sYWJlbCxcclxuaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxufVxyXG5cclxuYSBpb24tbGFiZWwsXHJcbmJ1dHRvbiBpb24tbGFiZWwge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XHJcbiAgZm9udC12YXJpYW50OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxufVxyXG5cclxuW3RhcHBhYmxlXSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hW2Rpc2FibGVkXSxcclxuYnV0dG9uW2Rpc2FibGVkXSxcclxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxyXG5pbnB1dFt0eXBlPXJhZGlvXSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXHJcbmlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxudGQsXHJcbnRoIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUuY3NzLm1hcCAqL1xyXG4iLG51bGwsIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG59XHJcblxyXG5odG1sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxufVxyXG5cclxuaHRtbDpub3QoLmh5ZHJhdGVkKSBib2R5IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5odG1sLnBsdC1wd2Ege1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxuICAtbXMtY29udGVudC16b29taW5nOiBub25lO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6IG5vbmU7XHJcbiAgdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxufVxyXG5cclxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3RydWN0dXJlLmNzcy5tYXAgKi9cclxuIixudWxsLCJodG1sIHtcclxuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcclxufVxyXG5cclxuYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5oMSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuaDIge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbmgzIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbmg0IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbmg2IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICBmb250LXNpemU6IDc1JTtcclxufVxyXG5cclxuc3ViLFxyXG5zdXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDc1JTtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbnN1cCB7XHJcbiAgdG9wOiAtMC41ZW07XHJcbn1cclxuXHJcbnN1YiB7XHJcbiAgYm90dG9tOiAtMC4yNWVtO1xyXG59XHJcblxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD10eXBvZ3JhcGh5LmNzcy5tYXAgKi9cclxuIixudWxsLCIuaW9uLWhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1oaWRlLXVwIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5pb24taGlkZS1kb3duIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLmlvbi1oaWRlLXNtLXVwIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmlvbi1oaWRlLXNtLWRvd24ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW9uLWhpZGUtbWQtdXAge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAuaW9uLWhpZGUtbWQtZG93biB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5pb24taGlkZS1sZy11cCB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAuaW9uLWhpZGUtbGctZG93biB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuaW9uLWhpZGUteGwtdXAge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uaW9uLWhpZGUteGwtZG93biB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kaXNwbGF5LmNzcy5tYXAgKi9cclxuIixudWxsLCIuaW9uLW5vLXBhZGRpbmcsXHJcbltuby1wYWRkaW5nXSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4uaW9uLXBhZGRpbmcsXHJcbltwYWRkaW5nXSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxufVxyXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xyXG4gIC5pb24tcGFkZGluZyxcclxuW3BhZGRpbmddIHtcclxuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcclxuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmlvbi1wYWRkaW5nLXRvcCxcclxuW3BhZGRpbmctdG9wXSB7XHJcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbn1cclxuLmlvbi1wYWRkaW5nLXN0YXJ0LFxyXG5bcGFkZGluZy1zdGFydF0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG59XHJcbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XHJcbiAgLmlvbi1wYWRkaW5nLXN0YXJ0LFxyXG5bcGFkZGluZy1zdGFydF0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcclxuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5pb24tcGFkZGluZy1lbmQsXHJcbltwYWRkaW5nLWVuZF0ge1xyXG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbn1cclxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcclxuICAuaW9uLXBhZGRpbmctZW5kLFxyXG5bcGFkZGluZy1lbmRdIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xyXG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW9uLXBhZGRpbmctYm90dG9tLFxyXG5bcGFkZGluZy1ib3R0b21dIHtcclxuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxufVxyXG4uaW9uLXBhZGRpbmctdmVydGljYWwsXHJcbltwYWRkaW5nLXZlcnRpY2FsXSB7XHJcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbn1cclxuLmlvbi1wYWRkaW5nLWhvcml6b250YWwsXHJcbltwYWRkaW5nLWhvcml6b250YWxdIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG59XHJcbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XHJcbiAgLmlvbi1wYWRkaW5nLWhvcml6b250YWwsXHJcbltwYWRkaW5nLWhvcml6b250YWxdIHtcclxuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcclxuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmlvbi1uby1tYXJnaW4sXHJcbltuby1tYXJnaW5dIHtcclxuICAtLW1hcmdpbi1zdGFydDogMDtcclxuICAtLW1hcmdpbi1lbmQ6IDA7XHJcbiAgLS1tYXJnaW4tdG9wOiAwO1xyXG4gIC0tbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uaW9uLW1hcmdpbixcclxuW21hcmdpbl0ge1xyXG4gIC0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICAtLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIC0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgLS1tYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxufVxyXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xyXG4gIC5pb24tbWFyZ2luLFxyXG5bbWFyZ2luXSB7XHJcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xyXG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmlvbi1tYXJnaW4tdG9wLFxyXG5bbWFyZ2luLXRvcF0ge1xyXG4gIC0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbn1cclxuLmlvbi1tYXJnaW4tc3RhcnQsXHJcblttYXJnaW4tc3RhcnRdIHtcclxuICAtLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG59XHJcbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XHJcbiAgLmlvbi1tYXJnaW4tc3RhcnQsXHJcblttYXJnaW4tc3RhcnRdIHtcclxuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcclxuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmlvbi1tYXJnaW4tZW5kLFxyXG5bbWFyZ2luLWVuZF0ge1xyXG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxufVxyXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xyXG4gIC5pb24tbWFyZ2luLWVuZCxcclxuW21hcmdpbi1lbmRdIHtcclxuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIH1cclxufVxyXG5cclxuLmlvbi1tYXJnaW4tYm90dG9tLFxyXG5bbWFyZ2luLWJvdHRvbV0ge1xyXG4gIC0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbn1cclxuLmlvbi1tYXJnaW4tdmVydGljYWwsXHJcblttYXJnaW4tdmVydGljYWxdIHtcclxuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIC0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbn1cclxuLmlvbi1tYXJnaW4taG9yaXpvbnRhbCxcclxuW21hcmdpbi1ob3Jpem9udGFsXSB7XHJcbiAgLS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbn1cclxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcclxuICAuaW9uLW1hcmdpbi1ob3Jpem9udGFsLFxyXG5bbWFyZ2luLWhvcml6b250YWxdIHtcclxuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcclxuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD1wYWRkaW5nLmNzcy5tYXAgKi9cclxuIixudWxsLCIuaW9uLWZsb2F0LWxlZnQsXHJcbltmbG9hdC1sZWZ0XSB7XHJcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1mbG9hdC1yaWdodCxcclxuW2Zsb2F0LXJpZ2h0XSB7XHJcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tZmxvYXQtc3RhcnQsXHJcbltmbG9hdC1zdGFydF0ge1xyXG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuW2Rpcj1ydGxdIC5pb24tZmxvYXQtc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXN0YXJ0LCBbZGlyPXJ0bF0gW2Zsb2F0LXN0YXJ0XSwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC1zdGFydF0ge1xyXG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWZsb2F0LWVuZCxcclxuW2Zsb2F0LWVuZF0ge1xyXG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcbltkaXI9cnRsXSAuaW9uLWZsb2F0LWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtZW5kLCBbZGlyPXJ0bF0gW2Zsb2F0LWVuZF0sIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtZW5kXSB7XHJcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLmlvbi1mbG9hdC1zbS1sZWZ0LFxyXG5bZmxvYXQtc20tbGVmdF0ge1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tZmxvYXQtc20tcmlnaHQsXHJcbltmbG9hdC1zbS1yaWdodF0ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLWZsb2F0LXNtLXN0YXJ0LFxyXG5bZmxvYXQtc20tc3RhcnRdIHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXNtLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zbS1zdGFydCwgW2Rpcj1ydGxdIFtmbG9hdC1zbS1zdGFydF0sIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtc20tc3RhcnRdIHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi1mbG9hdC1zbS1lbmQsXHJcbltmbG9hdC1zbS1lbmRdIHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1zbS1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXNtLWVuZCwgW2Rpcj1ydGxdIFtmbG9hdC1zbS1lbmRdLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXNtLWVuZF0ge1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmlvbi1mbG9hdC1tZC1sZWZ0LFxyXG5bZmxvYXQtbWQtbGVmdF0ge1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tZmxvYXQtbWQtcmlnaHQsXHJcbltmbG9hdC1tZC1yaWdodF0ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLWZsb2F0LW1kLXN0YXJ0LFxyXG5bZmxvYXQtbWQtc3RhcnRdIHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LW1kLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1zdGFydCwgW2Rpcj1ydGxdIFtmbG9hdC1tZC1zdGFydF0sIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtbWQtc3RhcnRdIHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi1mbG9hdC1tZC1lbmQsXHJcbltmbG9hdC1tZC1lbmRdIHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1tZC1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LW1kLWVuZCwgW2Rpcj1ydGxdIFtmbG9hdC1tZC1lbmRdLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LW1kLWVuZF0ge1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmlvbi1mbG9hdC1sZy1sZWZ0LFxyXG5bZmxvYXQtbGctbGVmdF0ge1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tZmxvYXQtbGctcmlnaHQsXHJcbltmbG9hdC1sZy1yaWdodF0ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLWZsb2F0LWxnLXN0YXJ0LFxyXG5bZmxvYXQtbGctc3RhcnRdIHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LWxnLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1sZy1zdGFydCwgW2Rpcj1ydGxdIFtmbG9hdC1sZy1zdGFydF0sIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBbZmxvYXQtbGctc3RhcnRdIHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi1mbG9hdC1sZy1lbmQsXHJcbltmbG9hdC1sZy1lbmRdIHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1sZy1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWxnLWVuZCwgW2Rpcj1ydGxdIFtmbG9hdC1sZy1lbmRdLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LWxnLWVuZF0ge1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5pb24tZmxvYXQteGwtbGVmdCxcclxuW2Zsb2F0LXhsLWxlZnRdIHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLWZsb2F0LXhsLXJpZ2h0LFxyXG5bZmxvYXQteGwtcmlnaHRdIHtcclxuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi1mbG9hdC14bC1zdGFydCxcclxuW2Zsb2F0LXhsLXN0YXJ0XSB7XHJcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC14bC1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQteGwtc3RhcnQsIFtkaXI9cnRsXSBbZmxvYXQteGwtc3RhcnRdLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgW2Zsb2F0LXhsLXN0YXJ0XSB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tZmxvYXQteGwtZW5kLFxyXG5bZmxvYXQteGwtZW5kXSB7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQteGwtZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC14bC1lbmQsIFtkaXI9cnRsXSBbZmxvYXQteGwtZW5kXSwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIFtmbG9hdC14bC1lbmRdIHtcclxuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD1mbG9hdC1lbGVtZW50cy5jc3MubWFwICovXHJcbiIsbnVsbCwiLmlvbi10ZXh0LWNlbnRlcixcclxuW3RleHQtY2VudGVyXSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tdGV4dC1qdXN0aWZ5LFxyXG5bdGV4dC1qdXN0aWZ5XSB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLXRleHQtc3RhcnQsXHJcblt0ZXh0LXN0YXJ0XSB7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi10ZXh0LWVuZCxcclxuW3RleHQtZW5kXSB7XHJcbiAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tdGV4dC1sZWZ0LFxyXG5bdGV4dC1sZWZ0XSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLXRleHQtcmlnaHQsXHJcblt0ZXh0LXJpZ2h0XSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi10ZXh0LW5vd3JhcCxcclxuW3RleHQtbm93cmFwXSB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLXRleHQtd3JhcCxcclxuW3RleHQtd3JhcF0ge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLmlvbi10ZXh0LXNtLWNlbnRlcixcclxuW3RleHQtc20tY2VudGVyXSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1zbS1qdXN0aWZ5LFxyXG5bdGV4dC1zbS1qdXN0aWZ5XSB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtc20tc3RhcnQsXHJcblt0ZXh0LXNtLXN0YXJ0XSB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXNtLWVuZCxcclxuW3RleHQtc20tZW5kXSB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1zbS1sZWZ0LFxyXG5bdGV4dC1zbS1sZWZ0XSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtc20tcmlnaHQsXHJcblt0ZXh0LXNtLXJpZ2h0XSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXNtLW5vd3JhcCxcclxuW3RleHQtc20tbm93cmFwXSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtc20td3JhcCxcclxuW3RleHQtc20td3JhcF0ge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW9uLXRleHQtbWQtY2VudGVyLFxyXG5bdGV4dC1tZC1jZW50ZXJdIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LW1kLWp1c3RpZnksXHJcblt0ZXh0LW1kLWp1c3RpZnldIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1tZC1zdGFydCxcclxuW3RleHQtbWQtc3RhcnRdIHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbWQtZW5kLFxyXG5bdGV4dC1tZC1lbmRdIHtcclxuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LW1kLWxlZnQsXHJcblt0ZXh0LW1kLWxlZnRdIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1tZC1yaWdodCxcclxuW3RleHQtbWQtcmlnaHRdIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbWQtbm93cmFwLFxyXG5bdGV4dC1tZC1ub3dyYXBdIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1tZC13cmFwLFxyXG5bdGV4dC1tZC13cmFwXSB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5pb24tdGV4dC1sZy1jZW50ZXIsXHJcblt0ZXh0LWxnLWNlbnRlcl0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbGctanVzdGlmeSxcclxuW3RleHQtbGctanVzdGlmeV0ge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LWxnLXN0YXJ0LFxyXG5bdGV4dC1sZy1zdGFydF0ge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1sZy1lbmQsXHJcblt0ZXh0LWxnLWVuZF0ge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbGctbGVmdCxcclxuW3RleHQtbGctbGVmdF0ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LWxnLXJpZ2h0LFxyXG5bdGV4dC1sZy1yaWdodF0ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1sZy1ub3dyYXAsXHJcblt0ZXh0LWxnLW5vd3JhcF0ge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LWxnLXdyYXAsXHJcblt0ZXh0LWxnLXdyYXBdIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5pb24tdGV4dC14bC1jZW50ZXIsXHJcblt0ZXh0LXhsLWNlbnRlcl0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQteGwtanVzdGlmeSxcclxuW3RleHQteGwtanVzdGlmeV0ge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXhsLXN0YXJ0LFxyXG5bdGV4dC14bC1zdGFydF0ge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC14bC1lbmQsXHJcblt0ZXh0LXhsLWVuZF0ge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQteGwtbGVmdCxcclxuW3RleHQteGwtbGVmdF0ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXhsLXJpZ2h0LFxyXG5bdGV4dC14bC1yaWdodF0ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC14bC1ub3dyYXAsXHJcblt0ZXh0LXhsLW5vd3JhcF0ge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXhsLXdyYXAsXHJcblt0ZXh0LXhsLXdyYXBdIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXRleHQtYWxpZ25tZW50LmNzcy5tYXAgKi9cclxuIixudWxsLCIuaW9uLXRleHQtdXBwZXJjYXNlLFxyXG5bdGV4dC11cHBlcmNhc2VdIHtcclxuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLXRleHQtbG93ZXJjYXNlLFxyXG5bdGV4dC1sb3dlcmNhc2VdIHtcclxuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLXRleHQtY2FwaXRhbGl6ZSxcclxuW3RleHQtY2FwaXRhbGl6ZV0ge1xyXG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAuaW9uLXRleHQtc20tdXBwZXJjYXNlLFxyXG5bdGV4dC1zbS11cHBlcmNhc2VdIHtcclxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1zbS1sb3dlcmNhc2UsXHJcblt0ZXh0LXNtLWxvd2VyY2FzZV0ge1xyXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXNtLWNhcGl0YWxpemUsXHJcblt0ZXh0LXNtLWNhcGl0YWxpemVdIHtcclxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5pb24tdGV4dC1tZC11cHBlcmNhc2UsXHJcblt0ZXh0LW1kLXVwcGVyY2FzZV0ge1xyXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LW1kLWxvd2VyY2FzZSxcclxuW3RleHQtbWQtbG93ZXJjYXNlXSB7XHJcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbWQtY2FwaXRhbGl6ZSxcclxuW3RleHQtbWQtY2FwaXRhbGl6ZV0ge1xyXG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmlvbi10ZXh0LWxnLXVwcGVyY2FzZSxcclxuW3RleHQtbGctdXBwZXJjYXNlXSB7XHJcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtbGctbG93ZXJjYXNlLFxyXG5bdGV4dC1sZy1sb3dlcmNhc2VdIHtcclxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC1sZy1jYXBpdGFsaXplLFxyXG5bdGV4dC1sZy1jYXBpdGFsaXplXSB7XHJcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmlvbi10ZXh0LXhsLXVwcGVyY2FzZSxcclxuW3RleHQteGwtdXBwZXJjYXNlXSB7XHJcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQteGwtbG93ZXJjYXNlLFxyXG5bdGV4dC14bC1sb3dlcmNhc2VdIHtcclxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC14bC1jYXBpdGFsaXplLFxyXG5bdGV4dC14bC1jYXBpdGFsaXplXSB7XHJcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MubWFwICovXHJcbiIsbnVsbCwiLmlvbi1hbGlnbi1zZWxmLXN0YXJ0LFxyXG5bYWxpZ24tc2VsZi1zdGFydF0ge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1hbGlnbi1zZWxmLWVuZCxcclxuW2FsaWduLXNlbGYtZW5kXSB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1hbGlnbi1zZWxmLWNlbnRlcixcclxuW2FsaWduLXNlbGYtY2VudGVyXSB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tYWxpZ24tc2VsZi1zdHJldGNoLFxyXG5bYWxpZ24tc2VsZi1zdHJldGNoXSB7XHJcbiAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWFsaWduLXNlbGYtYmFzZWxpbmUsXHJcblthbGlnbi1zZWxmLWJhc2VsaW5lXSB7XHJcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1hbGlnbi1zZWxmLWF1dG8sXHJcblthbGlnbi1zZWxmLWF1dG9dIHtcclxuICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24td3JhcCxcclxuW3dyYXBdIHtcclxuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1ub3dyYXAsXHJcbltub3dyYXBdIHtcclxuICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLXdyYXAtcmV2ZXJzZSxcclxuW3dyYXAtcmV2ZXJzZV0ge1xyXG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tanVzdGlmeS1jb250ZW50LXN0YXJ0LFxyXG5banVzdGlmeS1jb250ZW50LXN0YXJ0XSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tanVzdGlmeS1jb250ZW50LWNlbnRlcixcclxuW2p1c3RpZnktY29udGVudC1jZW50ZXJdIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWp1c3RpZnktY29udGVudC1lbmQsXHJcbltqdXN0aWZ5LWNvbnRlbnQtZW5kXSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWp1c3RpZnktY29udGVudC1hcm91bmQsXHJcbltqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbixcclxuW2p1c3RpZnktY29udGVudC1iZXR3ZWVuXSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tanVzdGlmeS1jb250ZW50LWV2ZW5seSxcclxuW2p1c3RpZnktY29udGVudC1ldmVubHldIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWFsaWduLWl0ZW1zLXN0YXJ0LFxyXG5bYWxpZ24taXRlbXMtc3RhcnRdIHtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uLWFsaWduLWl0ZW1zLWNlbnRlcixcclxuW2FsaWduLWl0ZW1zLWNlbnRlcl0ge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1hbGlnbi1pdGVtcy1lbmQsXHJcblthbGlnbi1pdGVtcy1lbmRdIHtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1hbGlnbi1pdGVtcy1zdHJldGNoLFxyXG5bYWxpZ24taXRlbXMtc3RyZXRjaF0ge1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pb24tYWxpZ24taXRlbXMtYmFzZWxpbmUsXHJcblthbGlnbi1pdGVtcy1iYXNlbGluZV0ge1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD1mbGV4LXV0aWxzLmNzcy5tYXAgKi9cclxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/theme/variables.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #0cd1e8;\n  --ion-color-secondary-rgb: 12, 209, 232;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #0bb8cc;\n  --ion-color-secondary-tint: #24d6ea;\n  /** tertiary **/\n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  /** success **/\n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  /** warning **/\n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  /** danger **/\n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  --ion-color-mango: #ffcc66;\n  --ion-color-mango-rgb: 255,204,102;\n  --ion-color-mango-contrast: #000000;\n  --ion-color-mango-contrast-rgb: 0,0,0;\n  --ion-color-mango-shade: #e0b45a;\n  --ion-color-mango-tint: #ffd175;\n}\n:root ion-tab-button.tab-selected ion-icon, :root ion-tab-button.tab-selected ion-label {\n  color: var(--ion-color-mango) !important;\n  --ion-color-base: var(--ion-color-mango) !important;\n}\n.ion-color-mango {\n  --ion-color-base: var(--ion-color-mango);\n  --ion-color-base-rgb: var(--ion-color-mango-rgb);\n  --ion-color-contrast: var(--ion-color-mango-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-mango-contrast-rgb);\n  --ion-color-shade: var(--ion-color-mango-shade);\n  --ion-color-tint: var(--ion-color-mango-tint);\n}\n.smallLogo {\n  height: 50px;\n}\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9DOlxcVXNlcnNcXGxlbm92b1xcRGVza3RvcFxccHJvamVjdFxcYWN1TUVFVC9zcmNcXHRoZW1lXFx2YXJpYWJsZXMuc2NzcyIsInNyYy90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSwwQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUVBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQ1pGO0FEZUk7RUFDRSx3Q0FBQTtFQUNBLG1EQUFBO0FDYk47QURrQkE7RUFDRSx3Q0FBQTtFQUNBLGdEQUFBO0VBQ0EscURBQUE7RUFDQSw2REFBQTtFQUNBLCtDQUFBO0VBQ0EsNkNBQUE7QUNmRjtBRGlCQTtFQUNFLFlBQUE7QUNkRjtBRGdCQTtFQUNFLGtCQUFBO0FDYkYiLCJmaWxlIjoic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxyXG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cclxuXHJcblxyXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cclxuOnJvb3Qge1xyXG4gIC8qKiBwcmltYXJ5ICoqL1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMzODgwZmY7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzMTcxZTA7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xyXG5cclxuICAvKiogc2Vjb25kYXJ5ICoqL1xyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzBjZDFlODtcclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiAxMiwgMjA5LCAyMzI7XHJcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMGJiOGNjO1xyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjMjRkNmVhO1xyXG5cclxuICAvKiogdGVydGlhcnkgKiovXHJcbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM3MDQ0ZmY7XHJcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTIsIDY4LCAyNTU7XHJcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNjMzY2UwO1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3ZTU3ZmY7XHJcblxyXG4gIC8qKiBzdWNjZXNzICoqL1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMxMGRjNjA7XHJcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDE2LCAyMjAsIDk2O1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzBlYzI1NDtcclxuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMyOGUwNzA7XHJcblxyXG4gIC8qKiB3YXJuaW5nICoqL1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmNlMDA7XHJcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMjA2LCAwO1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYjUwMDtcclxuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQzMWE7XHJcblxyXG4gIC8qKiBkYW5nZXIgKiovXHJcbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZjA0MTQxO1xyXG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI0NSwgNjEsIDYxO1xyXG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2QzMzkzOTtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2YyNTQ1NDtcclxuXHJcbiAgLyoqIGRhcmsgKiovXHJcbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcclxuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM0LCAzNDtcclxuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XHJcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xyXG5cclxuICAvKiogbWVkaXVtICoqL1xyXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcclxuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsIDE1NCwgMTYyO1xyXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcclxuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcclxuXHJcbiAgLyoqIGxpZ2h0ICoqL1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDQsIDI0NDtcclxuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcclxuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XHJcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XHJcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcclxuXHJcbiAgLS1pb24tY29sb3ItbWFuZ286ICNmZmNjNjY7XHJcbiAgLS1pb24tY29sb3ItbWFuZ28tcmdiOiAyNTUsMjA0LDEwMjtcclxuICAtLWlvbi1jb2xvci1tYW5nby1jb250cmFzdDogIzAwMDAwMDtcclxuICAtLWlvbi1jb2xvci1tYW5nby1jb250cmFzdC1yZ2I6IDAsMCwwO1xyXG4gIC0taW9uLWNvbG9yLW1hbmdvLXNoYWRlOiAjZTBiNDVhO1xyXG4gIC0taW9uLWNvbG9yLW1hbmdvLXRpbnQ6ICNmZmQxNzU7XHJcblxyXG4gIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7XHJcbiAgICBpb24taWNvbiwgaW9uLWxhYmVsIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYW5nbykgIWltcG9ydGFudDtcclxuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1hbmdvKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmlvbi1jb2xvci1tYW5nbyB7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1hbmdvKTtcclxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLW1hbmdvLXJnYik7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1tYW5nby1jb250cmFzdCk7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbWFuZ28tY29udHJhc3QtcmdiKTtcclxuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLW1hbmdvLXNoYWRlKTtcclxuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbWFuZ28tdGludCk7XHJcbn1cclxuLnNtYWxsTG9nb3tcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmNlbnRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4iLCIvKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMzODgwZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzBjZDFlODtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogMTIsIDIwOSwgMjMyO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzBiYjhjYztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICMyNGQ2ZWE7XG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM3MDQ0ZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTEyLCA2OCwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzYzM2NlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzdlNTdmZjtcbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMxMGRjNjA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAxNiwgMjIwLCA5NjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMwZWMyNTQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzI4ZTA3MDtcbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmNlMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDIwNiwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGI1MDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDMxYTtcbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZjA0MTQxO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNDUsIDYxLCA2MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNkMzM5Mzk7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZjI1NDU0O1xuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNCwgMzQ7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLCAxNTQsIDE2MjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ0LCAyNDQ7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xuICAtLWlvbi1jb2xvci1tYW5nbzogI2ZmY2M2NjtcbiAgLS1pb24tY29sb3ItbWFuZ28tcmdiOiAyNTUsMjA0LDEwMjtcbiAgLS1pb24tY29sb3ItbWFuZ28tY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLW1hbmdvLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLW1hbmdvLXNoYWRlOiAjZTBiNDVhO1xuICAtLWlvbi1jb2xvci1tYW5nby10aW50OiAjZmZkMTc1O1xufVxuOnJvb3QgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIGlvbi1pY29uLCA6cm9vdCBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYW5nbykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1hbmdvKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLW1hbmdvIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1hbmdvKTtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1tYW5nby1yZ2IpO1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1hbmdvLWNvbnRyYXN0KTtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbWFuZ28tY29udHJhc3QtcmdiKTtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1tYW5nby1zaGFkZSk7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1tYW5nby10aW50KTtcbn1cblxuLnNtYWxsTG9nbyB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./global.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--15-3!./variables.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!**********************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\lenovo\Desktop\project\acuMEET\src\theme\variables.scss */"./src/theme/variables.scss");
module.exports = __webpack_require__(/*! C:\Users\lenovo\Desktop\project\acuMEET\src\global.scss */"./src/global.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map