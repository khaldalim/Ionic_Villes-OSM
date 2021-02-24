(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-members-city-form-city-form-module"],{

/***/ "SC76":
/*!*********************************************************************!*\
  !*** ./src/app/pages/members/city-form/city-form-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CityFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityFormPageRoutingModule", function() { return CityFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _city_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./city-form.page */ "b/x0");




const routes = [
    {
        path: '',
        component: _city_form_page__WEBPACK_IMPORTED_MODULE_3__["CityFormPage"]
    }
];
let CityFormPageRoutingModule = class CityFormPageRoutingModule {
};
CityFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CityFormPageRoutingModule);



/***/ }),

/***/ "b/x0":
/*!***********************************************************!*\
  !*** ./src/app/pages/members/city-form/city-form.page.ts ***!
  \***********************************************************/
/*! exports provided: CityFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityFormPage", function() { return CityFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_city_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./city-form.page.html */ "f2YP");
/* harmony import */ var _city_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./city-form.page.scss */ "wd56");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let CityFormPage = class CityFormPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    SearchCity() {
        this.router.navigate(['/city-info/' + this.codePostal]);
    }
};
CityFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CityFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-city-form',
        template: _raw_loader_city_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_city_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CityFormPage);



/***/ }),

/***/ "f2YP":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/members/city-form/city-form.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>City Form</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n\n\n\n\n  <form (ngSubmit)=\"SearchCity()\" #form=\"ngForm\" >\n\n    <ion-item>\n      <p>Veuillez taper le code postale d'une ville française pour obtenir ses informations</p>\n      <ion-label position=\"floating\">Code postal :</ion-label>\n      <ion-input type=\"text\"  name=\"postalCode\" [(ngModel)]=\"codePostal\" pattern=\"[0-9]*\" maxlength=\"5\" minlength=\"5\" placeholder=\"exemple : 59170\" required></ion-input>\n    </ion-item>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" color=\"danger\" [disabled]=\"form.invalid\" expand=\"block\">Rechercher</ion-button>\n\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ "qiH8":
/*!*************************************************************!*\
  !*** ./src/app/pages/members/city-form/city-form.module.ts ***!
  \*************************************************************/
/*! exports provided: CityFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityFormPageModule", function() { return CityFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _city_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./city-form-routing.module */ "SC76");
/* harmony import */ var _city_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./city-form.page */ "b/x0");







let CityFormPageModule = class CityFormPageModule {
};
CityFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _city_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["CityFormPageRoutingModule"]
        ],
        declarations: [_city_form_page__WEBPACK_IMPORTED_MODULE_6__["CityFormPage"]]
    })
], CityFormPageModule);



/***/ }),

/***/ "wd56":
/*!*************************************************************!*\
  !*** ./src/app/pages/members/city-form/city-form.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaXR5LWZvcm0ucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=pages-members-city-form-city-form-module.js.map