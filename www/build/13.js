webpackJsonp([13],{

<<<<<<< HEAD
/***/ 293:
=======
/***/ 297:
>>>>>>> 8be39a7
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailGeneratePageModule", function() { return EmailGeneratePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adm_cliente__ = __webpack_require__(309);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_generate__ = __webpack_require__(444);
>>>>>>> 8be39a7
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmailGeneratePageModule = /** @class */ (function () {
    function EmailGeneratePageModule() {
    }
    EmailGeneratePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__email_generate__["a" /* EmailGeneratePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__email_generate__["a" /* EmailGeneratePage */]),
            ],
        })
    ], EmailGeneratePageModule);
    return EmailGeneratePageModule;
}());

//# sourceMappingURL=email-generate.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 309:
=======
/***/ 444:
>>>>>>> 8be39a7
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailGeneratePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientes_clientes__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(104);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(212);
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



var EmailGeneratePage = /** @class */ (function () {
    function EmailGeneratePage(navCtrl, navParams, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.subject = '';
        this.body = '';
    }
    EmailGeneratePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmailGeneratePage');
    };
    EmailGeneratePage.prototype.sendEmail = function () {
        var email = {
            to: [
                'rael.lapa@gmail.com', 'rael_goomes@hotmail.com'
            ],
            cc: [],
            bcc: [],
            attachment: [],
            subject: this.subject,
            body: this.body,
            isHtml: false,
            app: 'Gmail'
        };
        this.emailComposer.open(email);
    };
    EmailGeneratePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
            selector: 'page-adm-cliente',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\adm-cliente\adm-cliente.html"*/'<!--\n\n  Generated template for the AdmClientePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Editar Cliente</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-grid>\n\n  \n\n</ion-grid>\n\n\n\n<ion-content padding>\n\n<ion-card>\n\n    <ion-grid>\n\n        <ion-row>\n\n      <ion-col>\n\n           <ion-row>\n\n        <ion-item>\n\n          <ion-label floating>Nome</ion-label>\n\n          <ion-input [(ngModel)]="cliente.nome"  type="text"></ion-input>\n\n        </ion-item>\n\n      </ion-row>\n\n      \n\n      <ion-row>\n\n          <ion-item>\n\n            <ion-label floating>Telefone</ion-label>\n\n            <ion-input type="text" [(ngModel)]="cliente.tel"></ion-input>\n\n          </ion-item>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-item>\n\n              <ion-label floating>Email</ion-label>\n\n              <ion-input type="text" [(ngModel)]="cliente.email"></ion-input>\n\n            </ion-item>\n\n          </ion-row>\n\n          \n\n          <ion-row>\n\n              <ion-item>\n\n                <ion-label floating>Cep</ion-label>\n\n                <ion-input type="text" [(ngModel)]="cliente.cep"></ion-input>\n\n              </ion-item>\n\n            </ion-row>\n\n            \n\n            <ion-row>\n\n                <ion-item>\n\n                  <ion-label floating>Rua</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="cliente.endereco"></ion-input>\n\n                </ion-item>\n\n              </ion-row>\n\n\n\n              <ion-row>\n\n                  <ion-item>\n\n                    <ion-label floating>Bairro</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="cliente.bairro"></ion-input>\n\n                  </ion-item>\n\n                </ion-row>\n\n              \n\n                <ion-row>\n\n                    <ion-item>\n\n                      <ion-label floating>Cidade</ion-label>\n\n                      <ion-input type="text" [(ngModel)]="cliente.cidade"></ion-input>\n\n                    </ion-item>\n\n                  </ion-row>\n\n      \n\n                  <ion-row>\n\n                      <ion-item>\n\n                        <ion-label floating>Estado</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="cliente.estado"></ion-input>\n\n                      </ion-item>\n\n                    </ion-row>\n\n      \n\n\n\n      </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n\n\n\n\n      <ion-icon (click)="cancelar()" name="close-circle"></ion-icon>\n\n\n\n       <p> <ion-icon (click)="alterar()" name="checkmark-circle"></ion-icon> </p>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\clientes\adm-cliente\adm-cliente.html"*/,
=======
            selector: 'page-email-generate',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\email-generate\email-generate.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Gerador de Email</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-label stacked>Assunto</ion-label>\n        <ion-input\n          type="text"\n          [(ngModel)]="subject"\n          placeholde="Digite o assunto"\n        ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Conteúdo</ion-label>\n        <ion-textarea type="text" [(ngModel)]="body"></ion-textarea>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content style="padding-top: 0px; padding-bottom: 0px;">\n      <ion-item (click)="sendEmail()">\n        <label>Enviar e-mail</label>\n        <ion-note item-end>\n          <ion-icon name="mail"></ion-icon> </ion-note\n        ><br />\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\email-generate\email-generate.html"*/,
>>>>>>> 8be39a7
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], EmailGeneratePage);
    return EmailGeneratePage;
}());

//# sourceMappingURL=email-generate.js.map

/***/ })

});
//# sourceMappingURL=13.js.map