webpackJsonp([0],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageModule", function() { return ClientesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientes__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__teset_input_teset_input__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { SearchPipe } from '../../pipes/search/search';


var ClientesPageModule = /** @class */ (function () {
    function ClientesPageModule() {
    }
    ClientesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__teset_input_teset_input__["a" /* TesetInputPage */],
                __WEBPACK_IMPORTED_MODULE_2__clientes__["a" /* ClientesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__clientes__["a" /* ClientesPage */]),
            ],
            entryComponents: [],
        })
    ], ClientesPageModule);
    return ClientesPageModule;
}());

//# sourceMappingURL=clientes.module.js.map

/***/ }),

/***/ 462:
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

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        //console.log('Termos', terms)
        try {
            terms = terms.toString().toLowerCase();
            console.log(terms);
            return items.filter(function (it) {
                if (it.nome != undefined) {
                    return JSON.stringify(it.nome).toLowerCase().includes(terms);
                }
                else {
                    return JSON.stringify(it.tituloProjeto).toLowerCase().includes(terms);
                }
            });
        }
        catch (error) {
            console.log('Erro no pipe search', error);
        }
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TesetInputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_clienteModel__ = __webpack_require__(462);
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
 * Generated class for the TesetInputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TesetInputPage = /** @class */ (function () {
    function TesetInputPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    //@Input() listaElementos: elementoAco;
    TesetInputPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TesetInputPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__app_models_clienteModel__["a" /* clienteModel */])
    ], TesetInputPage.prototype, "cliente", void 0);
    TesetInputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-teset-input',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\teset-input\teset-input.html"*/'<ion-card >\n  <ion-card-content >\n    Nome: {{cliente.nome}} <br/>\n    Email: {{cliente.email}}<br/>\n    Telefone: {{cliente.tel}}\n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\teset-input\teset-input.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], TesetInputPage);
    return TesetInputPage;
}());

//# sourceMappingURL=teset-input.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
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







var ClientesPage = /** @class */ (function () {
    function ClientesPage(navCtrl, navParams, modalCtrl, clienteSrvc, events, appVersion, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.clienteSrvc = clienteSrvc;
        this.events = events;
        this.appVersion = appVersion;
        this.formBuilder = formBuilder;
        this.class = 'primary';
        this.input = {};
        this.input1 = {};
        this.disableButton = false;
        this.listaClientes = new Array();
        this.usuario = new Array();
        //-----------------------------------Form Builder -------------------------------
        this.formGroup = formBuilder.group({
            nmFornecedor: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(5)]
        });
        this.nmFornecedor = this.formGroup.controls['nmFornecedor'];
        console.log("Versão do aplicativo", this.appVersion.getVersionNumber());
        console.log("Versão do aplicativo", this.appVersion.getAppName());
        this.load();
        this.loadEvent();
    }
    ClientesPage.prototype.teste = function () {
        console.log('Teste de form Group: ', this.input1.buscar);
    };
    ClientesPage.prototype.enableButton = function () {
        if (this.input1.buscar && this.input1.nome) {
            this.disableButton = true;
        }
        else {
            this.disableButton = false;
        }
    };
    //------------------------------- FIM ---------------------------------------------
    ClientesPage.prototype.abrirDetalheClientePage = function (cliente) {
        var modal = this.modalCtrl.create("DetalheClientePage", {
            cliente: cliente
        });
        modal.present();
    };
    ClientesPage.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].storageKeys.user));
                        console.log("Usuário logado", user);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.clienteSrvc.clientebyIdUser(user._id)];
                    case 2:
                        result = _a.sent();
                        if (result.success) {
                            this.listaClientes = result.data;
                            console.log("Cliente pertencentes ao usuario logado", this.listaClientes);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ClientesPage.prototype.ngOnInit = function () {
        console.log('Formulario: ', this.formGroup.valid);
        this.events.publish(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].Events.atualizacaoUserMenu, {});
        var user = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].storageKeys.user));
        this.theme = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].storageKeys.color);
        if (this.theme == "#527F76") {
            this.theme = 'primary';
        }
        else if (!this.theme) {
            this.theme = 'primary';
        }
        this.eventChangeColor();
    };
    ClientesPage.prototype.abrirCadastro = function (model) {
        this.navCtrl.push("CadastroClientePage", { cliente: model });
    };
    ClientesPage.prototype.abrirDetalheCliente = function (model) {
        this.navCtrl.push("DetalheClientePage", { cliente: model });
    };
    ClientesPage.prototype.loadEvent = function () {
        var _this = this;
        this.events.subscribe(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].Events.atualizaClienteByProjetos, function () {
            _this.load();
        });
    };
    ClientesPage.prototype.eventChangeColor = function () {
        var _this = this;
        this.events.subscribe(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].Events.changeColor, function () {
            _this.menuController();
            console.log('Menu adicionado', _this.class);
        });
    };
    ClientesPage.prototype.menuController = function () {
        this.theme = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].storageKeys.color);
        if (this.theme == "#527F76") {
            this.theme = 'primary';
        }
    };
    ClientesPage.prototype.onChange = function (event) {
        console.log("Exibidno evento", event);
    };
    ClientesPage.prototype.abrirPdf = function () {
        this.navCtrl.setRoot("ContratoPage");
    };
    ClientesPage.prototype.logout = function () {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].storageKeys.token, null);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].storageKeys.user, null);
        this.navCtrl.setRoot("LoginPage");
    };
    ClientesPage.prototype.teste2 = function () {
        this.navCtrl.setRoot('TestesPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], ClientesPage.prototype, "content", void 0);
    ClientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-clientes",template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\clientes.html"*/'<!--\n  Generated template for the ClientesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar [color]="theme">\n      <ion-buttons position>\n          <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>&nbsp;&nbsp;&nbsp; Clientes\n\n          </button>\n          </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-grid>\n<ion-row>\n<ion-col col-10>\n<ion-searchbar [(ngModel)]="args"></ion-searchbar>\n</ion-col>\n\n<ion-col col-2>\n    <ion-fab>\n        <button [color]="theme" ion-fab (click)="abrirCadastro()">  <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-fab>\n\n    </ion-col>\n\n</ion-row>\n</ion-grid>\n\n<div *ngFor="let cliente of listaClientes | search : args " (click)="abrirDetalheCliente(cliente)" tappable>\n<page-teset-input [cliente]="cliente"></page-teset-input>\n</div>\n<!--\n<form [formGroup]="formGroup">\n  <ion-item>\n    <ion-label floating>Nome fornecedor</ion-label>\n    <ion-input type="text" formControlName="nmFornecedor"  ></ion-input>\n  </ion-item>\n\n<button ion-button (click)="teste()" [disabled]="!formGroup.valid">Resultado</button>\n\n</form>\n\n\n<ion-item>\n    <ion-label floating>Buscar</ion-label>\n    <ion-input [(ngModel)]="input1.buscar" (ionChange)="enableButton()" type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input [(ngModel)]="input1.nome" (ionChange)="enableButton()" type="text"></ion-input>\n    </ion-item>\n\n  <button ion-button color="primary" [disabled]="disableButton == false" (click)="teste()">Buscar</button>-->\n\n\n  <button ion-button (click)="teste2()">Teste</button>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\clientes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__["a" /* ClientesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], ClientesPage);
    return ClientesPage;
}());

//# sourceMappingURL=clientes.js.map

/***/ })

});
//# sourceMappingURL=0.js.map