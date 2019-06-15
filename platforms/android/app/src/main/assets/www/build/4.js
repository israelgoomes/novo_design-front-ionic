webpackJsonp([4],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheClientePageModule", function() { return DetalheClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhe_cliente__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalheClientePageModule = /** @class */ (function () {
    function DetalheClientePageModule() {
    }
    DetalheClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhe_cliente__["a" /* DetalheClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhe_cliente__["a" /* DetalheClientePage */]),
            ],
        })
    ], DetalheClientePageModule);
    return DetalheClientePageModule;
}());

//# sourceMappingURL=detalhe-cliente.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
 * Generated class for the DetalheClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalheClientePage = /** @class */ (function () {
    function DetalheClientePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetalheClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalheClientePage');
    };
    DetalheClientePage.prototype.back = function () {
        this.navCtrl.pop();
        console.log("Passou aqui");
    };
    DetalheClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhe-cliente',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\detalhe-cliente\detalhe-cliente.html"*/'<!--\n  Generated template for the DetalheClientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n     <a (click)="back()"> <ion-icon style="color: white;" ios="ios-arrow-back" md="md-arrow-back"></ion-icon> </a>\n    <ion-title>Detalhe Cliente</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-content>\n      <p> Nome: Pedro Amaral</p>\n      <br/>\n      <p>Email: cliente@hotmail.com</p>\n      <br/>\n      <p>Telefone: (DDD) 99858-9858</p>\n      <br/>\n      <p>Cep: 11724-120</p>\n      <br/>\n      <p>Endereço: Rua lUís Gonzaga da Silva</p>\n      <br/>\n      <p>Bairro: Tude Bastos</p>\n      <br/>\n      <p>Cidade: Praia Grande</p>  \n      <br/>\n      <p>Estado: São Paulo</p>\n    \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\detalhe-cliente\detalhe-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetalheClientePage);
    return DetalheClientePage;
}());

//# sourceMappingURL=detalhe-cliente.js.map

/***/ })

});
//# sourceMappingURL=4.js.map