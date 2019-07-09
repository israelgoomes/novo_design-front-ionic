webpackJsonp([5],{

<<<<<<< HEAD
/***/ 294:
=======
/***/ 302:
>>>>>>> 8be39a7
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroProjetoPageModule", function() { return CadastroProjetoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cliente__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(211);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_projeto__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(210);
>>>>>>> 8be39a7
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CadastroProjetoPageModule = /** @class */ (function () {
    function CadastroProjetoPageModule() {
    }
    CadastroProjetoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_projeto__["a" /* CadastroProjetoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_projeto__["a" /* CadastroProjetoPage */]),
            ],
        })
    ], CadastroProjetoPageModule);
    return CadastroProjetoPageModule;
}());

//# sourceMappingURL=cadastro-projeto.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 307:
=======
/***/ 312:
>>>>>>> 8be39a7
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

<<<<<<< HEAD
/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_alert_alert__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clientes_clientes__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_clienteModel__ = __webpack_require__(307);
=======
/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroProjetoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projetos_projetos__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_projetoModel__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_camera_camera__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_clientes_clientes__ = __webpack_require__(208);
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







var CadastroProjetoPage = /** @class */ (function () {
    function CadastroProjetoPage(navCtrl, navParams, projetoSrvc, alertSrvc, platform, actionSheetCtrl, cameraSrvc, clientesSrvc, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projetoSrvc = projetoSrvc;
        this.alertSrvc = alertSrvc;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.cameraSrvc = cameraSrvc;
        this.clientesSrvc = clientesSrvc;
        this.modalCtrl = modalCtrl;
        this.foto = [];
        this.clientes = new Array();
        this.cliente = [];
        var projeto = this.navParams.get('_projeto');
        if (projeto) {
            this.projeto = projeto;
            if (!this.projeto)
                this.projeto.cliente = projeto.cliente._id;
        }
        else {
            //  this.projeto.cliente = this.projeto._id
            this.projeto = new __WEBPACK_IMPORTED_MODULE_4__app_models_projetoModel__["a" /* projetoModel */]();
        }
        this.loadCliente();
    }
    CadastroProjetoPage.prototype.ngOnInit = function () {
        if (this.projeto.tituloProjeto == undefined) {
            //this.cliente.nome = this.projeto.nome
        }
    };
    CadastroProjetoPage.prototype.openClientOption = function () {
        var _this = this;
        var modal = this.modalCtrl.create('ModalClientesPage', { _cliente: this.clientes });
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log('Retorno do Modal', data.cliente);
            _this.cliente = data.cliente;
            _this.projeto.cliente = data.cliente._id;
            //this.projeto = data.cliente;
            console.log('Verificando o valor de projeto', _this.projeto.cliente);
        });
    };
    CadastroProjetoPage.prototype.loadCliente = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.clientesSrvc.get()];
                    case 1:
                        result = _a.sent();
                        if (result.success) {
                            this.clientes = result.data;
                        }
                        console.log('Clientes', this.clientes);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log("Erro na tela projetos", error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CadastroProjetoPage.prototype.salvar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sucesso, cadastroResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.projeto.foto = this.foto;
                        sucesso = false;
                        if (!!this.projeto._id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.projetoSrvc.post(this.projeto)];
                    case 1:
                        cadastroResult = _a.sent();
                        sucesso = cadastroResult.success;
                        _a.label = 2;
                    case 2:
                        if (sucesso) {
                            this.alertSrvc.toast('Projeto salvo com sucesso', 'bottom');
                            this.navCtrl.setRoot('ProjetosPage');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CadastroProjetoPage.prototype.getPictureOptions = function () {
        var _this = this;
        //actionSheet serve para aparecer as opções, se a foto será escolhida na galeria ou tirada na hora.
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Adicionar foto',
            buttons: [
                { text: 'Tirar foto', handler: function () {
                        //escolhendo a opção de tirar foto no cameraprovider que foi criado, e assumindo o valor da photo para o projeto.foto
                        _this.cameraSrvc.takePicture(function (photo) {
                            _this.foto.push(photo);
                            _this.projeto.foto = _this.foto;
                        });
                    },
                    icon: this.platform.is('ios') ? null : 'camera' },
                //------------------------ Opção pegar da galeria ------------
                { text: 'Pegar galeria', handler: function () {
                        _this.cameraSrvc.getPictureFromGalery(function (photo) {
                            _this.foto.push(photo);
                            _this.projeto.foto = _this.foto;
                        });
                    }, icon: this.platform.is('ios') ? null : 'images' },
                //o role 'destructive' deixa o botao vermelho
                { text: 'Cancelar', role: 'destructive',
                    icon: this.platform.is('ios') ? null : 'close',
                    handler: function () {
                        //cancela a ação
                    }, }
            ]
        });
        actionSheet.present();
    };
    CadastroProjetoPage.prototype.ionViewDidLoad = function () {
        console.log('Todas fotos', this.projeto.foto);
        console.log('ionViewDidLoad CadastroProjetoPage');
    };
<<<<<<< HEAD
    CadastroClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-cadastro-cliente',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\cadastro-cliente\cadastro-cliente.html"*/'<!--\n\n  Generated template for the CadastroClientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n     \n\n    <ion-title >&nbsp;&nbsp;&nbsp; Novo Cliente</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n    <ion-grid>\n\n        <ion-row>\n\n      <ion-col>\n\n      \n\n      <ion-row>\n\n        <ion-item>\n\n          <ion-label floating>Nome</ion-label>\n\n          <ion-input [(ngModel)]="cliente.nome"  type="text"></ion-input>\n\n        </ion-item>\n\n      </ion-row>\n\n      \n\n      <ion-row>\n\n          <ion-item>\n\n            <ion-label floating>Telefone</ion-label>\n\n            <ion-input type="text" [(ngModel)]="cliente.tel" [brmasker]="{mask:\'(00) 00000-0000\'}" value="(**) *****-****"></ion-input>\n\n          </ion-item>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-item>\n\n              <ion-label floating>Email</ion-label>\n\n              <ion-input type="text" [(ngModel)]="cliente.email"></ion-input>\n\n            </ion-item>\n\n          </ion-row>\n\n          \n\n          <ion-row>\n\n              <ion-item>\n\n                <ion-label floating>Cep</ion-label>\n\n                <ion-input type="text" [(ngModel)]="cliente.cep"></ion-input>\n\n              </ion-item>\n\n            </ion-row>\n\n            \n\n            <ion-row>\n\n                <ion-item>\n\n                  <ion-label floating>Rua</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="cliente.endereco"></ion-input>\n\n                </ion-item>\n\n              </ion-row>\n\n\n\n              <ion-row>\n\n                  <ion-item>\n\n                    <ion-label floating>Bairro</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="cliente.bairro"></ion-input>\n\n                  </ion-item>\n\n                </ion-row>\n\n              \n\n                <ion-row>\n\n                    <ion-item>\n\n                      <ion-label floating>Cidade</ion-label>\n\n                      <ion-input type="text" [(ngModel)]="cliente.cidade"></ion-input>\n\n                    </ion-item>\n\n                  </ion-row>\n\n      \n\n                  <ion-row>\n\n                      <ion-item>\n\n                        <ion-label floating>Estado</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="cliente.estado"></ion-input>\n\n                      </ion-item>\n\n                    </ion-row>\n\n      \n\n      </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n      <ion-grid>\n\n        <ion-row>\n\n          <button ion-button outline block (click)="salvar()">  <ion-icon ios="ios-contacts" md="md-contacts"></ion-icon>&nbsp; Cadastrar\n\n          </button>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n    </ion-content>\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\cadastro-cliente\cadastro-cliente.html"*/,
=======
    CadastroProjetoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadastro-projeto',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\projetos\cadastro-projeto\cadastro-projeto.html"*/'<!--\n  Generated template for the CadastroProjetoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Novo Projeto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label floating>Projeto</ion-label>\n        <ion-input\n          [(ngModel)]="projeto.tituloProjeto"\n          required\n          type="text"\n        ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Descrição</ion-label>\n        <ion-textarea\n          type="text"\n          [(ngModel)]="projeto.descricaoProjeto"\n        ></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Valor</ion-label>\n        <ion-input type="text" [(ngModel)]="projeto.preco" [brmasker]="{money: true}"></ion-input>\n      </ion-item>\n     \n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card *ngIf="!cliente.nome">\n    <ion-card-content style="padding-top: 0px; padding-bottom: 0px;">\n      <ion-item (click)="openClientOption()">\n<label>Escolher cliente</label>        <ion-note item-end>\n          <ion-icon name="arrow-dropright-circle"></ion-icon> </ion-note\n        ><br />\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="cliente.nome">\n      <ion-card-content style="padding-top: 3px; padding-bottom: 3px;">\n        <ion-item (click)="openClientOption()">\n  <label>Alterar cliente</label>        <ion-note item-end>\n            <ion-icon name="arrow-dropright-circle"></ion-icon> </ion-note\n          ><br />\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  \n\n\n\n<ion-card  *ngIf="cliente.nome">\n  <ion-card-content>\n      <ion-item> Cliente: {{ cliente.nome }} </ion-item>\n  </ion-card-content>\n</ion-card>\n\n\n\n<ion-card>\n    <ion-card-content style="padding-top: 0px; padding-bottom: 0px;">\n      <ion-item (click)="getPictureOptions()">\n<label>Selecionar Foto(s)</label>        <ion-note item-end>\n    <ion-icon name="camera" ></ion-icon> </ion-note\n        ><br />\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n\n<!-- <ion-item text-center>\n    <button ion-button clear (click)="getPictureOptions()">\n      Selecionar Foto\n    </button>\n  </ion-item> -->\n\n  <ion-item *ngIf="projeto.foto" >\n    <img [src]="fotos" *ngFor="let fotos of foto" />\n  </ion-item>\n\n\n  <ion-grid>\n    <ion-row>\n      <button ion-button outline block (click)="salvar()">Cadastrar</button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\projetos\cadastro-projeto\cadastro-projeto.html"*/,
>>>>>>> 8be39a7
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_projetos_projetos__["a" /* ProjetosProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_clientes_clientes__["a" /* ClientesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], CadastroProjetoPage);
    return CadastroProjetoPage;
}());

//# sourceMappingURL=cadastro-projeto.js.map

/***/ })

});
//# sourceMappingURL=5.js.map