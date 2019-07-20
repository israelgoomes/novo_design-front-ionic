webpackJsonp([8],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroClientePageModule", function() { return CadastroClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cliente__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CadastroClientePageModule = /** @class */ (function () {
    function CadastroClientePageModule() {
    }
    CadastroClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_cliente__["a" /* CadastroClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_cliente__["a" /* CadastroClientePage */]),
            ],
        })
    ], CadastroClientePageModule);
    return CadastroClientePageModule;
}());

//# sourceMappingURL=cadastro-cliente.module.js.map

/***/ }),

/***/ 314:
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

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_alert_alert__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clientes_clientes__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_clienteModel__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_helpers_configHelper__ = __webpack_require__(42);
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
 * Generated class for the CadastroClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroClientePage = /** @class */ (function () {
    function CadastroClientePage(navCtrl, navParams, clienteSrvc, alertSrvc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clienteSrvc = clienteSrvc;
        this.alertSrvc = alertSrvc;
        var _client = this.navParams.get('_cliente');
        if (_client) {
            this.cliente = _client;
        }
        else {
            this.cliente = new __WEBPACK_IMPORTED_MODULE_4__app_models_clienteModel__["a" /* clienteModel */]();
        }
    }
    CadastroClientePage.prototype.salvar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sucesso, user, cadastroResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sucesso = false;
                        user = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__app_helpers_configHelper__["a" /* configHelper */].storageKeys.user));
                        console.log('Usuário logado', user);
                        this.cliente.usuario = user._id;
                        if (!!this.cliente._id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.clienteSrvc.post(this.cliente)];
                    case 1:
                        cadastroResult = _a.sent();
                        sucesso = cadastroResult.success;
                        console.log('Sem id');
                        _a.label = 2;
                    case 2:
                        /*
                        else {
                          console.log('com id')
                            //passando o id e o modelo.
                            let updateResult= await this.clienteSrvc.put(this.cliente._id, this.cliente)
                            sucesso = updateResult.success;
                        }*/
                        if (sucesso) {
                            this.alertSrvc.toast('Cliente salva com sucesso', 'bottom');
                            this.navCtrl.setRoot('ClientesPage');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CadastroClientePage.prototype.back = function () {
        this.navCtrl.pop();
        //ou this.viewCtrl.dismiss();  para isso é necessário inportar o viewcontroller
    };
    CadastroClientePage.prototype.ionViewDidLoad = function () {
        var user = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__app_helpers_configHelper__["a" /* configHelper */].storageKeys.user));
        console.log('Usuário logado', user._id);
        console.log('ionViewDidLoad CadastroClientePage');
    };
    CadastroClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-cadastro-cliente',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\ND-TEstes\novo_design-front-ionic\src\pages\clientes\cadastro-cliente\cadastro-cliente.html"*/'<!--\n\n  Generated template for the CadastroClientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n     \n\n    <ion-title >&nbsp;&nbsp;&nbsp; Novo Cliente</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n    \n\n<ion-card>\n\n  <ion-card-content>\n\n    \n\n      <ion-col>\n\n      \n\n      <ion-row>\n\n        <ion-item>\n\n          <ion-label floating>Nome</ion-label>\n\n          <ion-input [(ngModel)]="cliente.nome"  type="text"></ion-input>\n\n        </ion-item>\n\n      </ion-row>\n\n      \n\n      <ion-row>\n\n          <ion-item>\n\n            <ion-label floating>Telefone</ion-label>\n\n            <ion-input type="text" [(ngModel)]="cliente.tel" [brmasker]="{mask:\'(00) 00000-0000\'}"></ion-input>\n\n          </ion-item>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-item>\n\n              <ion-label floating>Email</ion-label>\n\n              <ion-input type="text" [(ngModel)]="cliente.email"></ion-input>\n\n            </ion-item>\n\n          </ion-row>\n\n          \n\n          <ion-row>\n\n              <ion-item>\n\n                <ion-label floating>Cep</ion-label>\n\n                <ion-input type="text" [(ngModel)]="cliente.cep" [brmasker]="{mask:\'00000-120\'}"></ion-input>\n\n              </ion-item>\n\n            </ion-row>\n\n            \n\n            <ion-row>\n\n                <ion-item>\n\n                  <ion-label floating>Rua</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="cliente.endereco"></ion-input>\n\n                </ion-item>\n\n              </ion-row>\n\n\n\n              <ion-row>\n\n                  <ion-item>\n\n                    <ion-label floating>Bairro</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="cliente.bairro"></ion-input>\n\n                  </ion-item>\n\n                </ion-row>\n\n              \n\n                <ion-row>\n\n                    <ion-item>\n\n                      <ion-label floating>Cidade</ion-label>\n\n                      <ion-input type="text" [(ngModel)]="cliente.cidade"></ion-input>\n\n                    </ion-item>\n\n                  </ion-row>\n\n      \n\n                  <ion-row>\n\n                      <ion-item>\n\n                        <ion-label floating>Estado</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="cliente.estado"></ion-input>\n\n                      </ion-item>\n\n                    </ion-row>\n\n      \n\n      </ion-col>\n\n    </ion-card-content>\n\n  </ion-card>\n\n    \n\n\n\n\n\n    <!-- <ion-card>\n\n      <ion-card-content style="padding-top: 0px; padding-bottom: 0px;"> \n\n        \n\n        <button ion-button outline block (click)="salvar()">  <ion-icon ios="ios-contacts" md="md-contacts"></ion-icon>&nbsp; Cadastrar\n\n          </button>\n\n        </ion-card-content>\n\n      </ion-card> -->\n\n\n\n      <ion-card>\n\n          <ion-card-content style="padding-top: 0px; padding-bottom: 0px; ">\n\n            <ion-item (click)="salvar()">\n\n      <label>Cadastrar cliente</label>        <ion-note item-end>\n\n          <ion-icon id="icon-color" ios="ios-contacts" md="md-contacts"></ion-icon> </ion-note>\n\n              <br/>\n\n            </ion-item>\n\n          </ion-card-content>\n\n        </ion-card>\n\n        \n\n    </ion-content>\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\ND-TEstes\novo_design-front-ionic\src\pages\clientes\cadastro-cliente\cadastro-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_clientes_clientes__["a" /* ClientesProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_alert_alert__["a" /* AlertProvider */]])
    ], CadastroClientePage);
    return CadastroClientePage;
}());

//# sourceMappingURL=cadastro-cliente.js.map

/***/ })

});
//# sourceMappingURL=8.js.map