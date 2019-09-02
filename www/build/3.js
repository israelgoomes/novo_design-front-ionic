webpackJsonp([3],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageModule", function() { return ClientesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientes__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(456);
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

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(457);
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

/***/ 457:
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

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__ = __webpack_require__(348);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]) === "function" && _a || Object)
    ], ClientesPage.prototype, "content", void 0);
    ClientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-clientes",template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\clientes.html"*/'<!--\n\n  Generated template for the ClientesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar [color]="theme">\n\n      <ion-buttons position>\n\n          <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>&nbsp;&nbsp;&nbsp; Clientes\n\n\n\n          </button>\n\n          </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-grid>\n\n<ion-row>\n\n<ion-col col-10>\n\n<ion-searchbar [(ngModel)]="args"></ion-searchbar>\n\n</ion-col>\n\n\n\n<ion-col col-2>\n\n    <ion-fab>\n\n        <button [color]="theme" ion-fab (click)="abrirCadastro()">  <ion-icon name="add"></ion-icon>\n\n        </button>\n\n      </ion-fab>\n\n    \n\n    </ion-col>\n\n\n\n</ion-row>\n\n</ion-grid>\n\n<ion-card *ngFor="let cliente of listaClientes | search : args " (click)="abrirDetalheCliente(cliente)" tappable>\n\n  <ion-card-content >\n\n    Nome: {{cliente.nome}} <br/>\n\n    Email: {{cliente.email}}<br/>\n\n    Telefone: {{cliente.tel}}\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n\n\n<form [formGroup]="formGroup">\n\n  <ion-item>\n\n    <ion-label floating>Nome fornecedor</ion-label>\n\n    <ion-input type="text" formControlName="nmFornecedor"  ></ion-input>\n\n  </ion-item> \n\n\n\n<button ion-button (click)="teste()" [disabled]="!formGroup.valid">Resultado</button>\n\n\n\n</form>\n\n\n\n\n\n<ion-item>\n\n    <ion-label floating>Buscar</ion-label>\n\n    <ion-input [(ngModel)]="input1.buscar" (ionChange)="enableButton()" type="text"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label floating>Nome</ion-label>\n\n      <ion-input [(ngModel)]="input1.nome" (ionChange)="enableButton()" type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n  <button ion-button color="primary" [disabled]="disableButton == false" (click)="teste()">Buscar</button>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\clientes.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__["a" /* ClientesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__["a" /* ClientesProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__["a" /* AppVersion */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__["a" /* AppVersion */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]) === "function" && _h || Object])
    ], ClientesPage);
    return ClientesPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=clientes.js.map

/***/ })

});
//# sourceMappingURL=3.js.map