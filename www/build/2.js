webpackJsonp([2],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheProjetoPageModule", function() { return DetalheProjetoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhe_projeto__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalheProjetoPageModule = /** @class */ (function () {
    function DetalheProjetoPageModule() {
    }
    DetalheProjetoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhe_projeto__["a" /* DetalheProjetoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhe_projeto__["a" /* DetalheProjetoPage */]),
            ],
        })
    ], DetalheProjetoPageModule);
    return DetalheProjetoPageModule;
}());

//# sourceMappingURL=detalhe-projeto.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return projetoModel; });
var projetoModel = /** @class */ (function () {
    function projetoModel() {
    }
    return projetoModel;
}());

/* nomeCliente: {trim: true, required: true, type: String, index: true},
    telefone: {trim:true, requried: true, type: String},
    email: {type: String},
    rua: {type: String, required: true},
    bairro: {type: String, required: true},
    cidade: {type: String, required: true, index: true},
    tituloProjeto: {trim: true, required: true, index: true, type: String },
    descricaoProjeto: {type: String, required: true},
    cep: {type: String, required: true},
    preco: {type: Number},
    foto: {type: String}, */ 
//# sourceMappingURL=projetoModel.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheProjetoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_projetoModel__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_projetos_projetos__ = __webpack_require__(206);
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
 * Generated class for the DetalheProjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalheProjetoPage = /** @class */ (function () {
    function DetalheProjetoPage(navCtrl, navParams, projetoSrvc, alertSrvc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projetoSrvc = projetoSrvc;
        this.alertSrvc = alertSrvc;
        var projeto = this.navParams.get('_projeto');
        if (projeto) {
            this.projeto = projeto;
        }
        else {
            this.projeto = new __WEBPACK_IMPORTED_MODULE_2__app_models_projetoModel__["a" /* projetoModel */]();
        }
    }
    DetalheProjetoPage.prototype.deletar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sucesso, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert('Deseja deletar esse projeto ?');
                        sucesso = false;
                        return [4 /*yield*/, this.projetoSrvc.delete(this.projeto._id)];
                    case 1:
                        result = _a.sent();
                        sucesso = result.success;
                        if (sucesso) {
                            this.alertSrvc.toast('Deletado com sucesso', 'bottom');
                            this.navCtrl.setRoot('ProjetosPage');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DetalheProjetoPage.prototype.addOrEdit = function () {
        this.navCtrl.push('AdmProjetoPage', { _projeto: this.projeto });
        console.log('Enviando o Projeto', this.projeto);
    };
    DetalheProjetoPage.prototype.ionViewDidLoad = function () {
        this.projeto = this.navParams.get('_projeto');
        console.log('ionViewDidLoad DetalheProjetoPage');
    };
    DetalheProjetoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhe-projeto',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\projetos\detalhe-projeto\detalhe-projeto.html"*/'<!--\n  Generated template for the DetalheProjetoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Detalhes do projeto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button block (click)="addOrEdit(cliente)">Editar</button>\n\n  <ion-card>\n    <ion-card-content >\n   <p> Projeto: {{projeto.tituloProjeto}}</p> <br/>\n   <p> Descrição: {{projeto.descricaoProjeto}}</p> <br/>\n   <p> Valor: {{projeto.preco}}</p> <br/>\n   <p> Cliente: {{projeto.nomeCliente}}</p> <br/>\n   <p> Email: {{projeto.email}}</p> <br/>\n   <p> Telefone: {{projeto.telefone}}</p> <br/>\n   <p> Endereço: {{projeto.rua}}</p> <br/>\n   <p> Cidade: {{projeto.cidade}}</p> <br/>\n   <p> Bairro: {{projeto.bairro}}</p> <br/>\n   <p> Cep: {{projeto.cep}}</p> <br/>\n   <p>   <ion-item *ngIf="projeto.foto">\n      <img [src]="projeto.foto">\n    </ion-item></p> <br/>\n\n\n\n   <ion-row>\n    <button ion-button block (click)="addOrEdit(cliente)">Editar</button>\n    <button ion-button block (click)="deletar()">Delete</button>\n\n   </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\projetos\detalhe-projeto\detalhe-projeto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_projetos_projetos__["a" /* ProjetosProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */]])
    ], DetalheProjetoPage);
    return DetalheProjetoPage;
}());

//# sourceMappingURL=detalhe-projeto.js.map

/***/ })

});
//# sourceMappingURL=2.js.map