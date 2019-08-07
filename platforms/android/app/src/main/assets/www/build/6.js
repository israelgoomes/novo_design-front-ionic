webpackJsonp([6],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroUserPageModule", function() { return CadastroUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_user__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroUserPageModule = /** @class */ (function () {
    function CadastroUserPageModule() {
    }
    CadastroUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_user__["a" /* CadastroUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_user__["a" /* CadastroUserPage */]),
            ],
        })
    ], CadastroUserPageModule);
    return CadastroUserPageModule;
}());

//# sourceMappingURL=cadastro-user.module.js.map

/***/ }),

/***/ 458:
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

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models_usuarioModel__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_camera_camera__ = __webpack_require__(346);
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






var CadastroUserPage = /** @class */ (function () {
    function CadastroUserPage(navCtrl, navParams, usuarioSrvc, alertSrvc, platform, actionSheetCtrl, cameraSrvc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioSrvc = usuarioSrvc;
        this.alertSrvc = alertSrvc;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.cameraSrvc = cameraSrvc;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_3__app_models_usuarioModel__["a" /* usuarioModel */]();
    }
    CadastroUserPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CadastroUserPage");
    };
    CadastroUserPage.prototype.cadastrar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cadastroResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuarioSrvc.register(this.usuario)];
                    case 1:
                        cadastroResult = _a.sent();
                        if (cadastroResult.success) {
                            this.alertSrvc.toast("Cadastro realizado com sucesso", "bottom");
                            this.navCtrl.setRoot("LoginPage");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CadastroUserPage.prototype.getPictureOptions = function () {
        var _this = this;
        //actionSheet serve para aparecer as opções, se a foto será escolhida na galeria ou tirada na hora.
        var actionSheet = this.actionSheetCtrl.create({
            title: "Adicionar foto",
            buttons: [
                {
                    text: "Tirar foto",
                    handler: function () {
                        //escolhendo a opção de tirar foto no cameraprovider que foi criado, e assumindo o valor da photo para o categoria.foto
                        _this.cameraSrvc.takePicture(function (photo) {
                            _this.usuario.foto = photo;
                        });
                    },
                    icon: this.platform.is("ios") ? null : "camera"
                },
                //------------------------ Opção pegar da galeria ------------
                {
                    text: "Pegar galeria",
                    handler: function () {
                        _this.cameraSrvc.getPictureFromGalery(function (photo) {
                            _this.usuario.foto = photo;
                        });
                    },
                    icon: this.platform.is("ios") ? null : "images"
                },
                //o role 'destructive' deixa o botao vermelho
                {
                    text: "Cancelar",
                    role: "destructive",
                    icon: this.platform.is("ios") ? null : "close",
                    handler: function () {
                        //cancela a ação
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CadastroUserPage.prototype.cancelar = function () {
        this.navCtrl.setRoot("LoginPage");
    };
    CadastroUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-cadastro-user",template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\cadastro-user\cadastro-user.html"*/'<ion-content padding>\n\n  <div class="logo">\n\n    <div>\n\n      <ion-item (click)="getPictureOptions()" *ngIf="usuario.foto" class="circle">\n\n        <img [src]="usuario.foto" />\n\n      </ion-item>\n\n\n\n      <ion-item (click)="getPictureOptions()"  *ngIf="!usuario.foto" class="circle">\n\n        <img src="../../assets/imgs/user.jpg" />\n\n      </ion-item>\n\n    </div>\n\n\n\n    <button ion-button clear (click)="getPictureOptions()">\n\n      <ion-icon name="camera" item-left></ion-icon>\n\n    </button>\n\n  </div>\n\n\n\n  <ion-list no-lines class="list-transparent">\n\n    <ion-item>\n\n      <ion-label style="color: white;" floating>Nome</ion-label>\n\n      <ion-input [(ngModel)]="usuario.nome" type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label style="color: white;" floating>Email</ion-label>\n\n      <ion-input [(ngModel)]="usuario.email" type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label style="color: white;" floating>Senha</ion-label>\n\n      <ion-input [(ngModel)]="usuario.senha" type="password"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label style="color: white;" floating>Confirme a senha</ion-label>\n\n      <ion-input\n\n        [(ngModel)]="usuario.senhaConfirmacao"\n\n        type="password"\n\n      ></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <button ion-button block outline color="dark" (click)="cadastrar()">\n\n          Cadastrar\n\n        </button>\n\n      </ion-row>\n\n      <ion-row>\n\n        <button ion-button block outline color="dark" (click)="cancelar()">\n\n          Cancelar\n\n        </button>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\cadastro-user\cadastro-user.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_camera_camera__["a" /* CameraProvider */]])
    ], CadastroUserPage);
    return CadastroUserPage;
}());

//# sourceMappingURL=cadastro-user.js.map

/***/ })

});
//# sourceMappingURL=6.js.map