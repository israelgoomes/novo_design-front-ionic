webpackJsonp([9],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmProjetoPageModule", function() { return AdmProjetoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adm_projeto__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdmProjetoPageModule = /** @class */ (function () {
    function AdmProjetoPageModule() {
    }
    AdmProjetoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adm_projeto__["a" /* AdmProjetoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adm_projeto__["a" /* AdmProjetoPage */]),
            ],
        })
    ], AdmProjetoPageModule);
    return AdmProjetoPageModule;
}());

//# sourceMappingURL=adm-projeto.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmProjetoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projetos_projetos__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_camera_camera__ = __webpack_require__(208);
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





var AdmProjetoPage = /** @class */ (function () {
    function AdmProjetoPage(navCtrl, navParams, projetoSrvc, alertSrvc, cameraSrvc, actionSheetCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projetoSrvc = projetoSrvc;
        this.alertSrvc = alertSrvc;
        this.cameraSrvc = cameraSrvc;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.projeto = this.navParams.get('_projeto');
    }
    AdmProjetoPage.prototype.alterar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sucesso, updateResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sucesso = false;
                        if (!this.projeto._id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.projetoSrvc.put(this.projeto._id, this.projeto)];
                    case 1:
                        updateResult = _a.sent();
                        sucesso = updateResult.success;
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
    AdmProjetoPage.prototype.getPictureOptions = function () {
        var _this = this;
        //actionSheet serve para aparecer as opções, se a foto será escolhida na galeria ou tirada na hora.
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Adicionar foto',
            buttons: [
                { text: 'Tirar foto', handler: function () {
                        //escolhendo a opção de tirar foto no cameraprovider que foi criado, e assumindo o valor da photo para o projeto.foto
                        _this.cameraSrvc.takePicture(function (photo) {
                            _this.projeto.foto = photo;
                        });
                    },
                    icon: this.platform.is('ios') ? null : 'camera' },
                //------------------------ Opção pegar da galeria ------------
                { text: 'Pegar galeria', handler: function () {
                        _this.cameraSrvc.getPictureFromGalery(function (photo) {
                            _this.projeto.foto = photo;
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
    AdmProjetoPage.prototype.ionViewDidLoad = function () {
        this.projeto = this.navParams.get('_projeto');
        console.log('Recebendo Projeto', this.projeto._id);
    };
    AdmProjetoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adm-projeto',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\projetos\adm-projeto\adm-projeto.html"*/'<!--\n  Generated template for the AdmProjetoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Editar Projeto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n  <ion-col>\n       <ion-row>\n    <ion-item>\n      <ion-label floating>Projeto</ion-label>\n      <ion-input [(ngModel)]="projeto.tituloProjeto" required type="text"></ion-input>\n    </ion-item>\n  </ion-row>\n  \n  <ion-row>\n      <ion-item>\n        <ion-label floating>Descrição</ion-label>\n        <ion-input type="text" [(ngModel)]="projeto.descricaoProjeto"></ion-input>\n      </ion-item>\n    </ion-row>\n\n    <ion-row>\n        <ion-item>\n          <ion-label floating>Valor</ion-label>\n          <ion-input type="text" [(ngModel)]="projeto.preco"></ion-input>\n        </ion-item>\n      </ion-row>\n      \n      <ion-row>\n          <ion-item>\n            <ion-label floating>Cliente</ion-label>\n            <ion-input type="text" [(ngModel)]="projeto.nomeCliente"></ion-input>\n          </ion-item>\n        </ion-row>\n        \n        <ion-row>\n            <ion-item>\n              <ion-label floating>Email</ion-label>\n              <ion-input type="text" [(ngModel)]="projeto.email"></ion-input>\n            </ion-item>\n          </ion-row>\n\n          <ion-row>\n              <ion-item>\n                <ion-label floating>Telefone</ion-label>\n                <ion-input type="text" [(ngModel)]="projeto.telefone"></ion-input>\n              </ion-item>\n            </ion-row>\n          \n            <ion-row>\n                <ion-item>\n                  <ion-label floating>Endereço</ion-label>\n                  <ion-input type="text" [(ngModel)]="projeto.rua"></ion-input>\n                </ion-item>\n              </ion-row>\n  \n              <ion-row>\n                  <ion-item>\n                    <ion-label floating>Cidade</ion-label>\n                    <ion-input type="text" [(ngModel)]="projeto.cidade"></ion-input>\n                  </ion-item>\n                </ion-row>\n\n                <ion-row>\n                  <ion-item>\n                    <ion-label floating>Bairro</ion-label>\n                    <ion-input type="text" [(ngModel)]="projeto.bairro"></ion-input>\n                  </ion-item>\n                </ion-row>\n\n                <ion-row>\n                  <ion-item>\n                    <ion-label floating>Cep</ion-label>\n                    <ion-input type="text" [(ngModel)]="projeto.cep"></ion-input>\n                  </ion-item>\n                </ion-row>\n\n                <ion-row>\n                    <ion-item text-center>\n                        <button ion-button clear (click)="getPictureOptions()"><ion-icon name="camera" item-left></ion-icon> Selecionar Foto</button>\n                      </ion-item>\n                </ion-row>\n                \n                \n\n                <ion-item *ngIf="projeto.foto">\n                    <img [src]="projeto.foto">\n                  </ion-item>\n  \n\n  </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <button ion-button (click)="alterar()">Salvar</button>   \n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\projetos\adm-projeto\adm-projeto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_projetos_projetos__["a" /* ProjetosProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], AdmProjetoPage);
    return AdmProjetoPage;
}());

//# sourceMappingURL=adm-projeto.js.map

/***/ })

});
//# sourceMappingURL=9.js.map