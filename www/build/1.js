webpackJsonp([1],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheClientePageModule", function() { return DetalheClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhe_cliente__ = __webpack_require__(295);
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

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clienteModel; });
var clienteModel = /** @class */ (function () {
    function clienteModel() {
    }
    return clienteModel;
}());

//# sourceMappingURL=clienteModel.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_clienteModel__ = __webpack_require__(289);
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
        this.cliente = new __WEBPACK_IMPORTED_MODULE_2__app_models_clienteModel__["a" /* clienteModel */]();
        this.detalheCliente = [];
    }
    DetalheClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalheClientePage');
        this.cliente = this.navParams.get('cliente');
        console.log('Testando cliente', this.cliente);
    };
    DetalheClientePage.prototype.addOrEdit = function () {
        this.navCtrl.push('AdmClientePage', { _cliente: this.cliente });
    };
    DetalheClientePage.prototype.ngOnInit = function () {
        //let clientes = this.navParams.get('clientes');
        //console.log('Teste de clientes para Detalhe Clientes',clientes)
        //this.detalheCliente = clientes;
    };
    DetalheClientePage.prototype.back = function () {
        this.navCtrl.pop();
        //ou this.viewCtrl.dismiss();  para isso é necessário inportar o viewcontroller
    };
    DetalheClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhe-cliente',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\detalhe-cliente\detalhe-cliente.html"*/'<!--\n  Generated template for the DetalheClientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n     <a (click)="back()"> <ion-icon style="color: white;" ios="ios-arrow-back" md="md-arrow-back"></ion-icon> </a>\n    <ion-title>Detalhe Cliente</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-content >\n   <p>   Nome: {{cliente.nome}}</p> <br/>\n   <p> Email: {{cliente.email}}</p> <br/>\n   <p> Telefone: {{cliente.tel}}</p> <br/>\n   <p> Rua: {{cliente.endereco}}</p> <br/>\n   <p> Bairro: {{cliente.bairro}}</p> <br/>\n   <p> Cidade: {{cliente.cidade}}</p> <br/>\n   <p> Estado: {{cliente.estado}}</p> <br/>\n    </ion-card-content>\n  </ion-card>\n<button ion-button outline block (click)="addOrEdit(cliente)">Editar</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\detalhe-cliente\detalhe-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], DetalheClientePage);
    return DetalheClientePage;
    var _a, _b;
}());

//# sourceMappingURL=detalhe-cliente.js.map

/***/ })

});
//# sourceMappingURL=1.js.map