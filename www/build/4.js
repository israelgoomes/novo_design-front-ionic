webpackJsonp([4],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheClientePageModule", function() { return DetalheClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhe_cliente__ = __webpack_require__(463);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhe_cliente__["a" /* DetalheClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhe_cliente__["a" /* DetalheClientePage */]),
            ],
        })
    ], DetalheClientePageModule);
    return DetalheClientePageModule;
}());

//# sourceMappingURL=detalhe-cliente.module.js.map

/***/ }),

/***/ 454:
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

/***/ 455:
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

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_clienteModel__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clientes_clientes__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_models_projetoModel__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_projetos_projetos__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
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









var DetalheClientePage = /** @class */ (function () {
    function DetalheClientePage(navCtrl, navParams, clienteSrvc, alertSrvc, projetoSrvc, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clienteSrvc = clienteSrvc;
        this.alertSrvc = alertSrvc;
        this.projetoSrvc = projetoSrvc;
        this.events = events;
        this.clienteSelecionado = new __WEBPACK_IMPORTED_MODULE_5__app_models_projetoModel__["a" /* projetoModel */]();
        this.icone = false;
        this.projeto = new Array();
        this.detalheCliente = [];
        var client = this.navParams.get("cliente");
        if (client) {
            this.cliente = client;
        }
        else {
            this.cliente = new __WEBPACK_IMPORTED_MODULE_2__app_models_clienteModel__["a" /* clienteModel */]();
        }
    }
    DetalheClientePage.prototype.ionViewWillEnter = function () {
        this.cliente = this.navParams.get("cliente");
        console.log("Cliente que está vindo", this.cliente);
        console.log("lista de projetos para o cliente", this.clienteSelecionado);
        console.log("Proejtos", this.projeto);
    };
    DetalheClientePage.prototype.ngOnInit = function () {
        this.load();
        this.eventChangeColor();
        this.theme = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__["a" /* configHelper */].storageKeys.color);
        if (this.theme == "#527F76") {
            this.theme = 'primary';
        }
        else if (!this.theme) {
            this.theme = 'primary';
        }
    };
    DetalheClientePage.prototype.eventChangeColor = function () {
        var _this = this;
        this.events.subscribe(__WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__["a" /* configHelper */].Events.changeColor, function () {
            _this.menuController();
        });
    };
    DetalheClientePage.prototype.menuController = function () {
        this.theme = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__["a" /* configHelper */].storageKeys.color);
        if (this.theme == "#527F76") {
            this.theme = 'primary';
        }
    };
    DetalheClientePage.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.projetoSrvc.projetoByClienteId(this.cliente._id)];
                    case 1:
                        result = _a.sent();
                        if (result.success) {
                            this.projeto = result.data;
                            this.projeto.forEach(function (v) {
                                v.data = __WEBPACK_IMPORTED_MODULE_8_moment__(v.data).format("DD/MM/YYYY");
                            });
                            console.log("Projetos", this.projeto);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DetalheClientePage.prototype.expandable = function () {
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                }
                else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    };
    DetalheClientePage.prototype.addOrEdit = function () {
        this.navCtrl.push("AdmClientePage", { _cliente: this.cliente });
        console.log("Enviando o cliente", this.cliente);
    };
    DetalheClientePage.prototype.cadastrarProjeto = function () {
        this.navCtrl.push("CadastroProjetoPage", { _projeto: this.cliente });
    };
    DetalheClientePage.prototype.deletar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.alertSrvc.confirm("Excluir?", "Deseja realmente excluir o cliente " + this.cliente.nome + " ?", function () { return __awaiter(_this, void 0, void 0, function () {
                    var sucesso, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                sucesso = false;
                                return [4 /*yield*/, this.clienteSrvc.delete(this.cliente._id)];
                            case 1:
                                result = _a.sent();
                                this.events.publish(__WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__["a" /* configHelper */].Events.atualizaEmailByCliente);
                                sucesso = result.success;
                                if (sucesso) {
                                    this.alertSrvc.toast("Deletado com sucesso", "bottom");
                                    this.navCtrl.setRoot("ClientesPage");
                                }
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    DetalheClientePage.prototype.gerarContrato = function () {
        this.navCtrl.push("ContratoPage", { _cliente: this.cliente });
    };
    DetalheClientePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    DetalheClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-detalhe-cliente",template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\detalhe-cliente\detalhe-cliente.html"*/'<!--\n\n  Generated template for the DetalheClientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar [color]="theme">\n\n    \n\n    <ion-title>Detalhe Cliente</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <ion-card-content >\n\n        <span class="lixo" (click)="deletar()"><ion-icon name="ios-trash"></ion-icon></span>\n\n\n\n   <p> Nome: {{cliente.nome}}</p> <br/>\n\n   <p> Email: {{cliente.email}}</p> <br/>\n\n   <p> Telefone: {{cliente.tel}}</p> <br/>\n\n   <p> Rua: {{cliente.endereco}}</p> <br/>\n\n   <p> Bairro: {{cliente.bairro}}</p> <br/>\n\n   <p> Cidade: {{cliente.cidade}}</p> <br/>\n\n   <p> Estado: {{cliente.estado}}</p> <br/>\n\n\n\n   \n\n \n\n\n\n   <hr>\n\n   <div *ngIf="projeto.tituloProjeto">\n\n\n\n   <p  style="text-align: center; font-size: 20px; padding-top: 10px; padding-bottom: 15px;">Projetos</p>\n\n  </div>\n\n   <div *ngFor="let item of projeto">\n\n\n\n    <button (click)="expandable()" class="accordion" >Projeto: {{item.tituloProjeto}}</button>   \n\n    <div class="panel">\n\n      <p> Descricao: {{item.descricaoProjeto}}</p> <br/>\n\n      <p> Preco: {{item.preco}}</p> <br/>\n\n      <p> Data: {{item.data}}</p> <br/>\n\n   </div>\n\n  </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n\n\n      <ion-card-content style="padding-top: 0px; padding-bottom: 0px;">\n\n        <ion-item (click)="gerarContrato()">\n\n  <label>Gerar contrato</label>        <ion-note item-end>\n\n      <ion-icon id="icon-color" name="document"></ion-icon> </ion-note>\n\n          <br />\n\n        </ion-item>\n\n      </ion-card-content>\n\n\n\n\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n\n\n        <ion-card-content style="padding-top: 0px; padding-bottom: 0px;">\n\n          <ion-item (click)="addOrEdit(cliente)">\n\n    <label>Editar</label>        <ion-note item-end>\n\n        <ion-icon id="icon-color" name="hammer"></ion-icon> </ion-note>\n\n            <br />\n\n          </ion-item>\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n    \n\n     \n\n    <!-- <ion-card>\n\n\n\n        <ion-card-content style="padding-top: 0px; padding-bottom: 0px;">\n\n          <ion-item disabled (click)="cadastrarProjeto(cliente)">\n\n    <label>Cadastrar Projetos</label>        <ion-note item-end>\n\n        <ion-icon name="albums"></ion-icon> </ion-note>\n\n            <br />\n\n          </ion-item>\n\n        </ion-card-content>\n\n      </ion-card> -->\n\n  \n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\detalhe-cliente\detalhe-cliente.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_clientes_clientes__["a" /* ClientesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_projetos_projetos__["a" /* ProjetosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], DetalheClientePage);
    return DetalheClientePage;
}());

//# sourceMappingURL=detalhe-cliente.js.map

/***/ })

});
//# sourceMappingURL=4.js.map