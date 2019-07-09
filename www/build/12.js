webpackJsonp([12],{

<<<<<<< HEAD
/***/ 297:
=======
/***/ 298:
>>>>>>> 8be39a7
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosPageModule", function() { return FotosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_generate__ = __webpack_require__(314);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fotos__ = __webpack_require__(445);
>>>>>>> 8be39a7
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FotosPageModule = /** @class */ (function () {
    function FotosPageModule() {
    }
    FotosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fotos__["a" /* FotosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fotos__["a" /* FotosPage */]),
            ],
        })
    ], FotosPageModule);
    return FotosPageModule;
}());

//# sourceMappingURL=fotos.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 314:
=======
/***/ 445:
>>>>>>> 8be39a7
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(212);
=======
>>>>>>> 8be39a7
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FotosPage = /** @class */ (function () {
    function FotosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FotosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FotosPage');
    };
    FotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
            selector: 'page-email-generate',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\email-generate\email-generate.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>email-generate</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div>\n\n    <ion-item>\n\n      <ion-label stacked>Assunto</ion-label>\n\n      <ion-input type="text" [(ngModel)]="subject" placeholde="Digite o assunto" ></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label stacked>Conteúdo</ion-label>\n\n        <ion-input type="text" [(ngModel)]="body" placeholde="Digite o conteúdo do email" ></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label stacked>Para</ion-label>\n\n          <ion-input type="text" placeholde="Email" ></ion-input>\n\n        </ion-item>\n\n    \n\n\n\n    <button ion-button (click)="sendEmail()">Send</button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\email-generate\email-generate.html"*/,
=======
            selector: 'page-fotos',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\fotos\fotos.html"*/'<!--\n  Generated template for the FotosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>fotos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\fotos\fotos.html"*/,
>>>>>>> 8be39a7
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FotosPage);
    return FotosPage;
}());

//# sourceMappingURL=fotos.js.map

/***/ })

});
//# sourceMappingURL=12.js.map