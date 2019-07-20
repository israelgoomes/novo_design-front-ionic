webpackJsonp([2],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosPageModule", function() { return ProjetosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projetos__ = __webpack_require__(458);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { SearchPipe } from '../../pipes/search/search';
var ProjetosPageModule = /** @class */ (function () {
    function ProjetosPageModule() {
    }
    ProjetosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__projetos__["a" /* ProjetosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__projetos__["a" /* ProjetosPage */]),
            ],
        })
    ], ProjetosPageModule);
    return ProjetosPageModule;
}());

//# sourceMappingURL=projetos.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(313);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 313:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projetos_projetos__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__ = __webpack_require__(42);
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
 * Generated class for the ProjetosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjetosPage = /** @class */ (function () {
    function ProjetosPage(navCtrl, navParams, projetoSrvc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projetoSrvc = projetoSrvc;
        this.listaProjetos = new Array();
        this._loadProjetos();
    }
    ProjetosPage.prototype.ionViewDidLoad = function () {
        console.log(' lista', this.listaProjetos);
    };
    ProjetosPage.prototype._loadProjetos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].storageKeys.user));
                        console.log('Usuário logado', user);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.projetoSrvc.projetobyIdUser(user._id)];
                    case 2:
                        result = _a.sent();
                        if (result.success) {
                            this.listaProjetos = result.data;
                            console.log("Projetos pertencentes ao usuario logado", this.listaProjetos);
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
    /*
    
      async _loadProjetos(): Promise<void>{
          let result = await this.projetoSrvc.get();
          if(result.success){
            this.listaProjetos = <Array<projetoModel>>result.data;
            console.log(this.listaProjetos)
          }
      }*/
    ProjetosPage.prototype.deletar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.projetoSrvc.get()];
                    case 1:
                        result = _a.sent();
                        this.listaProjetos = result.data;
                        console.log('IDs', this.listaProjetos);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjetosPage.prototype.abrirCadastro = function (model) {
        this.navCtrl.push('CadastroProjetoPage', { _projeto: model });
    };
    ProjetosPage.prototype.abrirDetalheProjeto = function (model, item) {
        this.navCtrl.push('DetalheProjetoPage', { _projeto: model });
    };
    ProjetosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-projetos',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\ND-TEstes\novo_design-front-ionic\src\pages\projetos\projetos.html"*/'<!--\n\n  Generated template for the ProjetosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-buttons position>\n\n            <button ion-button icon-only menuToggle>\n\n              <ion-icon name="menu"></ion-icon>&nbsp;&nbsp;&nbsp; Serviços\n\n  \n\n            </button>\n\n            </ion-buttons>\n\n  \n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-searchbar [(ngModel)]="args"></ion-searchbar>\n\n            </ion-col>\n\n        <ion-col col-2>\n\n            <ion-fab>\n\n                <button ion-fab (click)="abrirCadastro()">  <ion-icon name="add"></ion-icon>\n\n                </button>\n\n              </ion-fab>\n\n            \n\n            </ion-col>\n\n        \n\n        </ion-row>\n\n        </ion-grid>\n\n\n\n  <ion-card *ngFor="let projeto of listaProjetos | search: args " (click)="abrirDetalheProjeto(projeto)" tappable>\n\n    <ion-card-content >\n\n      Projeto: {{projeto.tituloProjeto}} <br/>\n\n      <!-- Cliente: {{projeto.cliente.nome}}<br/> -->\n\n      Preço: {{projeto.preco}}\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\ND-TEstes\novo_design-front-ionic\src\pages\projetos\projetos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_projetos_projetos__["a" /* ProjetosProvider */]])
    ], ProjetosPage);
    return ProjetosPage;
}());

//# sourceMappingURL=projetos.js.map

/***/ })

});
//# sourceMappingURL=2.js.map