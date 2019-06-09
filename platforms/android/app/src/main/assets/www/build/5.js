webpackJsonp([5],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageModule", function() { return ClientesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientes__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClientesPageModule = /** @class */ (function () {
    function ClientesPageModule() {
    }
    ClientesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clientes__["a" /* ClientesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clientes__["a" /* ClientesPage */]),
            ],
        })
    ], ClientesPageModule);
    return ClientesPageModule;
}());

//# sourceMappingURL=clientes.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
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
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientesPage = /** @class */ (function () {
    function ClientesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ClientesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientesPage');
    };
    ClientesPage.prototype.abrirDetalheClientePage = function () {
        this.navCtrl.setRoot('DetalheClientePage');
    };
    ClientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clientes',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\clientes.html"*/'<!--\n  Generated template for the ClientesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>clientes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-item>\n  <ion-label >Procurar</ion-label>\n  <ion-input type="text" > \n \n      <ion-icon name="search"></ion-icon>\n\n  </ion-input>\n</ion-item>\n\n\n<a (click)="abrirDetalheClientePage()">\n<ion-card>\n  <ion-card-content>\n    Nome: Pedro Amaral\n    Email: cliente@hotmail.com<br/>\n    Telefone: (DDD) 99858-9858\n  </ion-card-content>\n</ion-card>\n</a>\n\n<ion-card>\n <ion-card-content>\n      Nome: Pedro Amaral\n      Email: cliente@hotmail.com <br/>\n      Telefone: (DDD) 99858-9858\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n \n      <ion-card-content>\n        Nome: Pedro Amaral\n        Email: cliente@hotmail.com<br/>\n        Telefone: (DDD) 99858-9858\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n \n        <ion-card-content>\n          Nome: Pedro Amaral\n          Email: cliente@hotmail.com<br/>\n          Telefone: (DDD) 99858-9858\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n \n          <ion-card-content>\n            Nome: Pedro Amaral\n            Email: cliente@hotmail.com<br/>\n            Telefone: (DDD) 99858-9858\n          </ion-card-content>\n        </ion-card>\n        <ion-card>\n \n            <ion-card-content>\n              Nome: Pedro Amaral\n              Email: cliente@hotmail.com<br/>\n              Telefone: (DDD) 99858-9858\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n \n              <ion-card-content>\n                Nome: Pedro Amaral\n                Email: cliente@hotmail.com<br/>\n                Telefone: (DDD) 99858-9858\n              </ion-card-content>\n            </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\clientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ClientesPage);
    return ClientesPage;
}());

//# sourceMappingURL=clientes.js.map

/***/ })

});
//# sourceMappingURL=5.js.map