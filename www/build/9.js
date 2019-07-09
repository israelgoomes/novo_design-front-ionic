webpackJsonp([9],{

<<<<<<< HEAD
/***/ 300:
=======
/***/ 305:
>>>>>>> 8be39a7
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageModule", function() { return SplashPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adm_projeto__ = __webpack_require__(317);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splash__ = __webpack_require__(452);
>>>>>>> 8be39a7
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SplashPageModule = /** @class */ (function () {
    function SplashPageModule() {
    }
    SplashPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__splash__["a" /* SplashPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__splash__["a" /* SplashPage */]),
            ],
        })
    ], SplashPageModule);
    return SplashPageModule;
}());

//# sourceMappingURL=splash.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 317:
=======
/***/ 452:
>>>>>>> 8be39a7
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projetos_projetos__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_camera_camera__ = __webpack_require__(210);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(106);
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



/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashPage = /** @class */ (function () {
    function SplashPage(navCtrl, navParams, splashScreen, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.splashScreen = splashScreen;
        this.viewCtrl = viewCtrl;
    }
    SplashPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 4000);
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
            selector: 'page-adm-projeto',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\projetos\adm-projeto\adm-projeto.html"*/'<!--\n\n  Generated template for the AdmProjetoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Editar Projeto</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n  <ion-col>\n\n       <ion-row>\n\n    <ion-item>\n\n      <ion-label floating>Projeto</ion-label>\n\n      <ion-input [(ngModel)]="projeto.tituloProjeto" required type="text"></ion-input>\n\n    </ion-item>\n\n  </ion-row>\n\n  \n\n  <ion-row>\n\n      <ion-item>\n\n        <ion-label floating>Descrição</ion-label>\n\n        <ion-input type="text" [(ngModel)]="projeto.descricaoProjeto"></ion-input>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-item>\n\n          <ion-label floating>Valor</ion-label>\n\n          <ion-input type="text" [(ngModel)]="projeto.preco"></ion-input>\n\n        </ion-item>\n\n      </ion-row>\n\n      \n\n      <ion-row>\n\n          <ion-item>\n\n            <ion-label floating>Cliente</ion-label>\n\n            <ion-input type="text" [(ngModel)]="projeto.nomeCliente"></ion-input>\n\n          </ion-item>\n\n        </ion-row>\n\n        \n\n        <ion-row>\n\n            <ion-item>\n\n              <ion-label floating>Email</ion-label>\n\n              <ion-input type="text" [(ngModel)]="projeto.email"></ion-input>\n\n            </ion-item>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n              <ion-item>\n\n                <ion-label floating>Telefone</ion-label>\n\n                <ion-input type="text" [(ngModel)]="projeto.telefone"></ion-input>\n\n              </ion-item>\n\n            </ion-row>\n\n          \n\n            <ion-row>\n\n                <ion-item>\n\n                  <ion-label floating>Endereço</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="projeto.rua"></ion-input>\n\n                </ion-item>\n\n              </ion-row>\n\n  \n\n              <ion-row>\n\n                  <ion-item>\n\n                    <ion-label floating>Cidade</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="projeto.cidade"></ion-input>\n\n                  </ion-item>\n\n                </ion-row>\n\n\n\n                <ion-row>\n\n                  <ion-item>\n\n                    <ion-label floating>Bairro</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="projeto.bairro"></ion-input>\n\n                  </ion-item>\n\n                </ion-row>\n\n\n\n                <ion-row>\n\n                  <ion-item>\n\n                    <ion-label floating>Cep</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="projeto.cep"></ion-input>\n\n                  </ion-item>\n\n                </ion-row>\n\n\n\n                <ion-row>\n\n                    <ion-item text-center>\n\n                        <button ion-button clear (click)="getPictureOptions()"><ion-icon name="camera" item-left></ion-icon> Selecionar Foto</button>\n\n                      </ion-item>\n\n                </ion-row>\n\n                \n\n                \n\n\n\n                <ion-item *ngIf="projeto.foto">\n\n                    <img [src]="projeto.foto">\n\n                  </ion-item>\n\n  \n\n\n\n  </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <button ion-button (click)="alterar()">Salvar</button>   \n\n    </ion-row>\n\n  </ion-grid>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\projetos\adm-projeto\adm-projeto.html"*/,
=======
            selector: 'page-splash',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\splash\splash.html"*/'\n\n<ion-content padding>\n    <svg id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.15 224.35">\n      <defs>\n          <style>.cls-1{fill:#dd238c;}.cls-2{fill:#ef4328;}.cls-3{fill:#7dd0df;}.cls-4{fill:#febf12;}.cls-5{fill:#282828;}</style>\n      </defs>\n      <title>jmlogo</title>\n      <rect class="cls-1" x="27.22" width="20.06" height="163.78"/>\n      <rect class="cls-2" y="4" width="20.06" height="163.78"/>\n      <rect class="cls-3" x="13.9" y="13.1" width="20.06" height="163.78"/>\n      <rect class="cls-4" x="43.1" y="7.45" width="20.06" height="163.78"/>\n      <path class="cls-5" d="M243.5,323a12,12,0,0,1-.5,3.43,8.88,8.88,0,0,1-1.63,3.1,8.24,8.24,0,0,1-3,2.26,10.8,10.8,0,0,1-4.58.86,9.63,9.63,0,0,1-6-1.82,8.48,8.48,0,0,1-3.07-5.47l4-.82a5.64,5.64,0,0,0,1.66,3.19,4.86,4.86,0,0,0,3.43,1.18,5.71,5.71,0,0,0,2.83-.62,4.53,4.53,0,0,0,1.7-1.63,7,7,0,0,0,.84-2.33,15.15,15.15,0,0,0,.24-2.71V297.82h4V323Z" transform="translate(-224.04 -108.31)"/>\n      <path class="cls-5" d="M252,297.82h6l11.52,26.64h0.1l11.62-26.64H287v34h-4V303.29h-0.1L270.72,331.8h-2.45l-12.19-28.51H256V331.8h-4v-34Z" transform="translate(-224.04 -108.31)"/>\n  </svg>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\splash\splash.html"*/,
>>>>>>> 8be39a7
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ })

});
//# sourceMappingURL=9.js.map