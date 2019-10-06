webpackJsonp([6],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalConfigPageModule", function() { return ModalConfigPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_config__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalConfigPageModule = /** @class */ (function () {
    function ModalConfigPageModule() {
    }
    ModalConfigPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_config__["a" /* ModalConfigPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_config__["a" /* ModalConfigPage */]),
            ],
        })
    ], ModalConfigPageModule);
    return ModalConfigPageModule;
}());

//# sourceMappingURL=modal-config.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usuarioModel; });
var usuarioModel = /** @class */ (function () {
    function usuarioModel() {
    }
    return usuarioModel;
}());

/*    nome: {type: String, required: true, trim: true, index: true},
    email: {type: String, require: true},
    senha: {type: String, required: true},
    foto: {type: String},
    ativo: {type: Boolean},
    dataCriacao: {type: Date, default: new Date()}*/ 
//# sourceMappingURL=usuarioModel.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_usuarioModel__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(111);
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
 * Generated class for the ModalConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalConfigPage = /** @class */ (function () {
    function ModalConfigPage(navCtrl, navParams, usuarioSrvc, viewCtrl, events, alertSrvc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioSrvc = usuarioSrvc;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.alertSrvc = alertSrvc;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_4__app_models_usuarioModel__["a" /* usuarioModel */](); //Array<usuarioModel> = new Array<usuarioModel>();
        this.tema = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].storageKeys.color);
    }
    ModalConfigPage.prototype.ngOnInit = function () {
        this.usuarioLogado();
        if (!this.tema) {
            this.tema = '#527F76';
        }
        else if (this.tema == 'blue') {
            this.tema = 'Navy';
        }
    };
    ModalConfigPage.prototype.usuarioLogado = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].storageKeys.user));
                        return [4 /*yield*/, this.usuarioSrvc.getByIdUser(user._id)];
                    case 1:
                        result = _a.sent();
                        if (result.success) {
                            this.usuario = result.data;
                            console.log('App .component', this.usuario);
                            this.usuario.dataCriacao = __WEBPACK_IMPORTED_MODULE_5_moment__(this.usuario.dataCriacao).format("DD/MM/YYYY");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalConfigPage.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var user;
            return __generator(this, function (_a) {
                user = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].storageKeys.user));
                this.alertSrvc.confirm('Excluir ?', ' Ao confirmar todos seus dados serão perdidos.', function () { return __awaiter(_this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.usuarioSrvc.delete(user._id)];
                            case 1:
                                result = _a.sent();
                                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].storageKeys.token, null);
                                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].storageKeys.user, null);
                                if (result.success) {
                                    this.alertSrvc.toast('Conta excluida com sucesso.', 'bottom');
                                    this.navCtrl.setRoot('LoginPage');
                                }
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ModalConfigPage.prototype.theme = function (item) {
        console.log(item);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].storageKeys.color, item);
        this.tema = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].storageKeys.color);
        console.log(this.tema);
        this.events.publish(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].Events.changeColor, {});
        if (!this.tema) {
            this.tema = '#527F76';
        }
        else if (this.tema == 'blue') {
            this.tema = 'Navy';
        }
        this.viewCtrl.dismiss();
    };
    ModalConfigPage.prototype.logout = function () {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].storageKeys.token, null);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* configHelper */].storageKeys.user, null);
        this.navCtrl.setRoot('LoginPage');
    };
    ModalConfigPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    ModalConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-config',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\modal-config\modal-config.html"*/'<ion-content padding>\n\n<div id="header" [ngStyle]="{\'background-color\': tema}">\n\n  \n\n<ion-label id="title">Configurações</ion-label>\n\n\n\n\n\n<div id="left">\n\n  \n\n  <ion-item class="circle">\n\n    <img [src]="usuario.foto" width="70" height="70"/>\n\n  </ion-item>\n\n</div>\n\n<div id="right">\n\n  <ion-item  class="dataUser">  \n\n    {{usuario.nome}}<br/>\n\n    {{usuario.email}}\n\n  </ion-item>\n\n</div>\n\n</div>\n\n\n\n<ion-card>\n\n  <ion-card-header center>\n\nTema\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n\n\n    <div class="div1"> \n\n      <div class="theme1" (click)="theme(\'purple\')">\n\n      </div>\n\n        <ion-input style="padding-left: 14px;" type="text" value="Purple" readonly ></ion-input>\n\n    </div>\n\n    \n\n    <div class="div2"> \n\n        <div class="theme2" (click)="theme(\'#527F76\')">\n\n        </div>\n\n        <ion-input style="padding-left: 11px;" type="text" value="Original" readonly ></ion-input>\n\n      </div>\n\n    \n\n      <div class="div3"> \n\n          <div class="theme3" (click)="theme(\'blue\')">\n\n          </div>\n\n          <ion-input style="padding-left: 20px;" type="text" value="Blue" readonly ></ion-input>\n\n        </div>\n\n    \n\n        <div class="div4"> \n\n            <div class="theme4" (click)="theme(\'black\')">\n\n            </div>\n\n            <ion-input style="padding-left: 19px;" type="text" value="Dark" readonly ></ion-input>\n\n          </div>\n\n          \n\n\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-content>\n\n Membro desde: {{usuario.dataCriacao}}    \n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card (click)="delete()">\n\n    <ion-card-content style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px;">\n\n      <ion-item>\n\n<label>Excluir conta</label>        <ion-note item-end>\n\n    <ion-icon [ngStyle]="{\'color\': tema}" id="trash" name="trash"></ion-icon> </ion-note>\n\n        <br/>\n\n      </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n      <ion-card-content style="padding-top: 0px; padding-bottom: 0px; padding-left: 0px;" >\n\n        <ion-item (click)="logout()">\n\n  <label>Sair da conta</label>        <ion-note item-end>\n\n      <ion-icon id="off" name="power"></ion-icon> </ion-note>\n\n          <br/>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-fab>\n\n        <button (click)="back()" [ngStyle]="{\'background-color\': tema}" ion-fab>    <ion-icon name="arrow-round-back"></ion-icon>\n\n\n\n        </button>\n\n      </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\modal-config\modal-config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */]])
    ], ModalConfigPage);
    return ModalConfigPage;
}());

//# sourceMappingURL=modal-config.js.map

/***/ })

});
//# sourceMappingURL=6.js.map