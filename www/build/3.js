webpackJsonp([3],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmClientePageModule", function() { return AdmClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adm_cliente__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdmClientePageModule = /** @class */ (function () {
    function AdmClientePageModule() {
    }
    AdmClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adm_cliente__["a" /* AdmClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adm_cliente__["a" /* AdmClientePage */]),
            ],
        })
    ], AdmClientePageModule);
    return AdmClientePageModule;
}());

//# sourceMappingURL=adm-cliente.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmClientePage; });
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
 * Generated class for the AdmClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdmClientePage = /** @class */ (function () {
    function AdmClientePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cliente = new Array();
        /*
              var _client = this.navParams.get('_clientes');
              if(_client){
                this.cliente = <clienteModel>_client
              } else {
                this.cliente = new clienteModel();
              }*/
        this.cliente = this.navParams.get('_cliente');
    }
    AdmClientePage.prototype.ionViewDidLoad = function () {
        var teste = this.navParams.get('_cliente');
        console.log('ionViewDidLoad AdmClientePage');
        console.log('Recebendo cliente', this.cliente.nome);
    };
    AdmClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adm-cliente',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\adm-cliente\adm-cliente.html"*/'<!--\n  Generated template for the AdmClientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>adm-cliente</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-grid>\n  \n</ion-grid>\n\n<ion-content padding>\n\n    <ion-grid>\n        <ion-row>\n      <ion-col>\n      \n      <ion-row>\n        <ion-item>\n          <ion-label floating>Nome</ion-label>\n          <ion-input [(ngModel)]="cliente.nome"  type=""></ion-input>\n        </ion-item>\n      </ion-row>\n      \n      <ion-row>\n          <ion-item>\n            <ion-label floating>Telefone</ion-label>\n            <ion-input type="" [(ngModel)]="cliente.tel"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n            <ion-item>\n              <ion-label floating>Email</ion-label>\n              <ion-input type="" [(ngModel)]="cliente.email"></ion-input>\n            </ion-item>\n          </ion-row>\n          \n          <ion-row>\n              <ion-item>\n                <ion-label floating>Cep</ion-label>\n                <ion-input type="" [(ngModel)]="cliente.cep"></ion-input>\n              </ion-item>\n            </ion-row>\n            \n            <ion-row>\n                <ion-item>\n                  <ion-label floating>Rua</ion-label>\n                  <ion-input type="" [(ngModel)]="cliente.rua"></ion-input>\n                </ion-item>\n              </ion-row>\n\n              <ion-row>\n                  <ion-item>\n                    <ion-label floating>Bairro</ion-label>\n                    <ion-input type="" [(ngModel)]="cliente.bairro"></ion-input>\n                  </ion-item>\n                </ion-row>\n              \n                <ion-row>\n                    <ion-item>\n                      <ion-label floating>Cidade</ion-label>\n                      <ion-input type="" [(ngModel)]="cliente.cidade"></ion-input>\n                    </ion-item>\n                  </ion-row>\n      \n                  <ion-row>\n                      <ion-item>\n                        <ion-label floating>Estado</ion-label>\n                        <ion-input type="" [(ngModel)]="cliente.estado"></ion-input>\n                      </ion-item>\n                    </ion-row>\n      \n      </ion-col>\n        </ion-row>\n      </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\adm-cliente\adm-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], AdmClientePage);
    return AdmClientePage;
    var _a, _b;
}());

//# sourceMappingURL=adm-cliente.js.map

/***/ })

});
//# sourceMappingURL=3.js.map