webpackJsonp([10],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestesPageModule", function() { return TestesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testes__ = __webpack_require__(483);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestesPageModule = /** @class */ (function () {
    function TestesPageModule() {
    }
    TestesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__testes__["a" /* TestesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__testes__["a" /* TestesPage */]),
            ],
        })
    ], TestesPageModule);
    return TestesPageModule;
}());

//# sourceMappingURL=testes.module.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(111);
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
 * Generated class for the TestesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestesPage = /** @class */ (function () {
    function TestesPage(navCtrl, navParams, alertCtrl, alertSrvc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.alertSrvc = alertSrvc;
        this.listaAcos = [];
        this.listaElementos = [
            { id: 1, elemento: 'Prata' },
            { id: 2, elemento: 'Alumínio' },
            { id: 3, elemento: 'Amerício' },
            { id: 4, elemento: 'Argônio' },
            { id: 5, elemento: 'Arsénio' },
            { id: 6, elemento: 'Ástato' },
            { id: 7, elemento: 'Ouro' },
            { id: 8, elemento: 'Boro' },
            { id: 10, elemento: 'Bário' },
            { id: 11, elemento: 'Berílio' },
            { id: 12, elemento: 'Bóhrio' },
            { id: 13, elemento: 'Bismuto' },
            { id: 14, elemento: 'Berquéli' }
        ];
        //this.listaAcos.push({elemento: 'Fósforo', vlMin: 0.05, vlMax: 0.85}, {elemento: 'Sódio', vlMin: 0.050, vlMax: 0.25})
    }
    TestesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestesPage');
    };
    TestesPage.prototype.adicionaLinha = function () {
        console.log(this.listaAcos);
        var ultimo = this.listaAcos[this.listaAcos.length - 1];
        console.log('ultimo valor', ultimo);
        if (ultimo != undefined) {
            console.log('Entrou no if');
            console.log('Valor min', ultimo.vlMin);
            console.log('Valor min', ultimo.vlMax);
            if (ultimo.vlMin > ultimo.vlMax) {
                this.alertSrvc.alert('Erro', 'O valor mínimo não pode ser maior que o máximo.');
            }
            else {
                this.listaAcos.push({ id: null, vlMin: null, vlMax: null });
            }
        }
        else {
            this.listaAcos.push({ id: null, vlMin: null, vlMax: null });
        }
    };
    TestesPage.prototype.retiraLinha = function () {
        this.listaAcos.pop();
    };
    TestesPage.prototype.teste = function () {
        console.log(this.listaAcos);
        var ultimo = this.listaAcos[this.listaAcos.length - 1];
        console.log('ultimo indice', ultimo);
    };
    TestesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-testes',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\testes\testes.html"*/'<!--\n  Generated template for the TestesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>testes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div class="align">\n<ion-card>\n  <ion-card-header>\n    \n  </ion-card-header>\n  \n  <ion-card-content>\n      <button ion-button (click)="adicionaLinha()">ADICIONAR</button>\n\n  </ion-card-content>\n</ion-card>\n\n\n\n<ion-card>\n  <ion-card-content>\n    \n  \n  <table style="width:100%">\n    <tr >\n      <th>Elementos</th>\n      <th>Valor Mínimo</th>\n      <th>Valor Máximo</th>\n    </tr>\n    <tr *ngFor="let aco of listaAcos">\n      <td style="width: 30%;">\n\n<ion-item no-lines>\n  <ion-icon (click)="retiraLinha()" name="trash"></ion-icon>\n  <ion-select [(ngModel)]="aco.id" multiple="false" >\n\n    <ion-option *ngFor="let item of listaElementos" [value]="item.id" >\n        <ion-chip>\n            <ion-label>{{item.elemento}}</ion-label>\n          </ion-chip>\n      </ion-option>\n    \n  </ion-select>\n</ion-item>\n      </td>\n      <td>\n        <ion-item no-lines>\n          <ion-label></ion-label>\n          <ion-input [(ngModel)]="aco.vlMin" type="" ></ion-input>\n        </ion-item>\n\n\n      </td>\n      <td>\n\n        <ion-item no-lines>\n          <ion-label></ion-label>\n          <ion-input [(ngModel)]="aco.vlMax" type="" ></ion-input>\n        </ion-item>\n\n      </td>\n    </tr>\n  </table>\n</ion-card-content>\n</ion-card>\n\n  <ion-card>\n  \n    <ion-card-content>\n      \n      <button ion-button outline (click)="retiraLinha()"><ion-icon name="trash"></ion-icon></button>\n        <button ion-button outline (click)="teste()">Salvar</button>\n    </ion-card-content>\n  </ion-card>\n</div>\n\n    <!-- <ion-chip>\n        <ion-label>Teste</ion-label>\n      </ion-chip> -->\n</ion-content>\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\testes\testes.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */]) === "function" && _d || Object])
    ], TestesPage);
    return TestesPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=testes.js.map

/***/ })

});
//# sourceMappingURL=10.js.map