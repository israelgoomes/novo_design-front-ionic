webpackJsonp([4],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheClientePageModule", function() { return DetalheClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhe_cliente__ = __webpack_require__(308);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhe_cliente__["a" /* DetalheClientePage */]),
            ],
        })
    ], DetalheClientePageModule);
    return DetalheClientePageModule;
}());

//# sourceMappingURL=detalhe-cliente.module.js.map

/***/ }),

/***/ 302:
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

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_clienteModel__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clientes_clientes__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the DetalheClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalheClientePage = /** @class */ (function () {
    function DetalheClientePage(navCtrl, navParams, clienteSrvc, alertSrvc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clienteSrvc = clienteSrvc;
        this.alertSrvc = alertSrvc;
        this.detalheCliente = [];
        var client = this.navParams.get('cliente');
        if (client) {
            this.cliente = client;
        }
        else {
            this.cliente = new __WEBPACK_IMPORTED_MODULE_2__app_models_clienteModel__["a" /* clienteModel */]();
        }
    }
    DetalheClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalheClientePage');
        this.cliente = this.navParams.get('cliente');
        console.log('Testando cliente', this.cliente);
    };
    DetalheClientePage.prototype.addOrEdit = function () {
        this.navCtrl.push('AdmClientePage', { _cliente: this.cliente });
        console.log('Enviando o cliente', this.cliente);
    };
    DetalheClientePage.prototype.cadastrarProjeto = function () {
        this.navCtrl.push('CadastroProjetoPage', { _projeto: this.cliente });
    };
    DetalheClientePage.prototype.deletar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sucesso, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert('Deseja deletar esse projeto ?');
                        sucesso = false;
                        return [4 /*yield*/, this.clienteSrvc.delete(this.cliente._id)];
                    case 1:
                        result = _a.sent();
                        sucesso = result.success;
                        if (sucesso) {
                            this.alertSrvc.toast('Deletado com sucesso', 'bottom');
                            this.navCtrl.setRoot('ClientesPage');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DetalheClientePage.prototype.gerarContrato = function () {
        this.navCtrl.push('ContratoPage', { _cliente: this.cliente });
    };
    DetalheClientePage.prototype.ngOnInit = function () {
    };
    DetalheClientePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    DetalheClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhe-cliente',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\detalhe-cliente\detalhe-cliente.html"*/'<!--\n  Generated template for the DetalheClientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    \n    <ion-title>Detalhe Cliente</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-content >\n        <span class="lixo" (click)="deletar()"><ion-icon name="ios-trash"></ion-icon></span>\n\n   <p> Nome: {{cliente.nome}}</p> <br/>\n   <p> Email: {{cliente.email}}</p> <br/>\n   <p> Telefone: {{cliente.tel}}</p> <br/>\n   <p> Rua: {{cliente.endereco}}</p> <br/>\n   <p> Bairro: {{cliente.bairro}}</p> <br/>\n   <p> Cidade: {{cliente.cidade}}</p> <br/>\n   <p> Estado: {{cliente.estado}}</p> <br/>\n\n   <ion-row>\n      <button ion-button block (click)="gerarContrato()" no-block outline><ion-icon name="document"></ion-icon>&nbsp;Contrato</button>\n      <button class="btn-right" ion-button block (click)="addOrEdit(cliente)" no-block outline>  <ion-icon name="hammer"></ion-icon>&nbsp; Editar</button>\n      <button id="btn-cadastro" ion-button block (click)="cadastrarProjeto(cliente)" outline>Cadastrar Projeto</button>\n\n\n   </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\detalhe-cliente\detalhe-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_clientes_clientes__["a" /* ClientesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */]])
    ], DetalheClientePage);
    return DetalheClientePage;
}());

//# sourceMappingURL=detalhe-cliente.js.map

/***/ })

});
//# sourceMappingURL=4.js.map