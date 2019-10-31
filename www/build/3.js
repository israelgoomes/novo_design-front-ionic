webpackJsonp([3],{

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratoPageModule", function() { return ContratoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contrato__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContratoPageModule = /** @class */ (function () {
    function ContratoPageModule() {
    }
    ContratoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contrato__["a" /* ContratoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__contrato__["a" /* ContratoPage */]),
            ],
        })
    ], ContratoPageModule);
    return ContratoPageModule;
}());

//# sourceMappingURL=contrato.module.js.map

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

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return projetoModel; });
var projetoModel = /** @class */ (function () {
    function projetoModel() {
    }
    return projetoModel;
}());

/* nomeCliente: {trim: true, required: true, type: String, index: true},
    telefone: {trim:true, requried: true, type: String},
    email: {type: String},
    rua: {type: String, required: true},
    bairro: {type: String, required: true},
    cidade: {type: String, required: true, index: true},
    tituloProjeto: {trim: true, required: true, index: true, type: String },
    descricaoProjeto: {type: String, required: true},
    cep: {type: String, required: true},
    preco: {type: Number},
    foto: {type: String}, */ 
//# sourceMappingURL=projetoModel.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContratoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models_clienteModel__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_projetoModel__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ion2_calendar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_contrato_contrato__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ContratoPage = /** @class */ (function () {
    function ContratoPage(navCtrl, navParams, platform, file, toastCtrl, events, modalCtrl, contratoSrvc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.file = file;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.contratoSrvc = contratoSrvc;
        this.contrato = {
            name: "",
            descritivo: "",
            vlTotal: "",
            prEntrega: "",
            cpf: ''
        };
        this.pdfObj = null;
        this.values = {};
        __WEBPACK_IMPORTED_MODULE_5_moment__["locale"]('pt-BR', {
            months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        });
        var client = this.navParams.get("_cliente");
        var clienteProjeto = this.navParams.get('_clienteProjeto');
        if (client) {
            this.cliente = client;
        }
        else if (clienteProjeto) {
            this.cliente = clienteProjeto;
        }
        else {
            this.cliente = new __WEBPACK_IMPORTED_MODULE_3__app_models_clienteModel__["a" /* clienteModel */]();
        }
        var projeto = this.navParams.get('_projeto');
        if (projeto) {
            this.projeto = projeto;
        }
        else {
            this.projeto = new __WEBPACK_IMPORTED_MODULE_4__app_models_projetoModel__["a" /* projetoModel */]();
        }
    }
    ContratoPage.prototype.ngOnInit = function () {
        this.contrato.prEntrega = __WEBPACK_IMPORTED_MODULE_5_moment__(new Date()).format("DD/MM/YYYY");
        console.log('cliente', this.cliente);
        this.theme = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__["a" /* configHelper */].storageKeys.color);
        if (this.theme == "#527F76") {
            this.theme = 'primary';
        }
        else if (!this.theme) {
            this.theme = 'primary';
        }
        else if (this.theme == 'black') {
            this.theme = 'dark';
            console.log('Mudando nome do tema para black');
        }
        else if (this.theme == 'purple') {
            this.theme = 'secondary';
        }
        else if (this.theme == 'blue') {
            this.theme = 'light';
        }
        this.eventChangeColor();
        if (this.projeto.tituloProjeto == undefined) {
            this.values = [
                { nome: this.cliente.nome,
                    cep: this.cliente.cep,
                    endereco: this.cliente.endereco,
                    bairro: this.cliente.bairro,
                    cidade: this.cliente.cidade,
                    tel: this.cliente.tel,
                    descritivo: this.contrato.descritivo,
                    vlTotal: this.contrato.vlTotal
                }
            ];
        }
        else {
            this.values = [{
                    nome: this.cliente.nome,
                    cep: this.cliente.cep,
                    endereco: this.cliente.endereco,
                    bairro: this.cliente.bairro,
                    cidade: this.cliente.cidade,
                    descritivo: this.projeto.descricaoProjeto,
                    vlTotal: this.projeto.preco,
                    projeto: this.projeto.tituloProjeto,
                    tel: this.cliente.tel,
                }
            ];
        }
        console.log("Valores do novo array", this.values);
    };
    ContratoPage.prototype.eventChangeColor = function () {
        var _this = this;
        this.events.subscribe(__WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__["a" /* configHelper */].Events.changeColor, function () {
            _this.menuController();
        });
    };
    ContratoPage.prototype.menuController = function () {
        this.theme = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__["a" /* configHelper */].storageKeys.color);
        if (this.theme == "#527F76") {
            this.theme = 'primary';
        }
        else if (this.theme == 'black') {
            this.theme = 'dark';
            console.log('Mudando nome do tema para black');
        }
    };
    ContratoPage.prototype.ionViewDidLoad = function () {
    };
    ContratoPage.prototype.openCalendar = function () {
        var _this = this;
        var options = {
            pickMode: 'single',
            title: 'Prazo de Entrega',
            weekdays: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
            monthFormat: 'MMMM YYYY',
            canBackwardsSelected: true,
            closeIcon: true,
            doneIcon: true,
            color: this.theme,
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7_ion2_calendar__["CalendarModal"], {
            options: options
        });
        myCalendar.onDidDismiss(function (date, type) {
            if (date != null) {
                _this.contrato.prEntrega = __WEBPACK_IMPORTED_MODULE_5_moment__(date.string).format("DD/MM/YYYY");
            }
        });
        myCalendar.present();
    };
    ContratoPage.prototype.createPdf = function () {
        if (this.projeto.tituloProjeto == undefined) {
            this.values["0"].descritivo = this.contrato.descritivo;
            this.values["0"].vlTotal = this.contrato.vlTotal;
        }
        this.contratoSrvc.createPdf(this.values["0"], this.contrato);
    };
    ContratoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-contrato",template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\contrato\contrato.html"*/'  \n\n<ion-header>\n\n  <ion-navbar [color]="theme">\n\n    <ion-title>Contrato</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-grid *ngIf="projeto.tituloProjeto == undefined">\n\n\n\n      <ion-card>\n\n        <ion-card-content>    \n\n              <ion-item>\n\n    <ion-label floating>Nome contrato</ion-label>\n\n    <ion-input [(ngModel)]="contrato.name"></ion-input>\n\n</ion-item>\n\n\n\n<ion-item>\n\n    <ion-label floating>Descritivo</ion-label>\n\n    <ion-input [(ngModel)]="contrato.descritivo"></ion-input>\n\n  </ion-item>\n\n\n\n  \n\n<ion-item>\n\n    <ion-label floating>Valor Total</ion-label>\n\n    <ion-input [(ngModel)]="contrato.vlTotal"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item (click)="openCalendar()">\n\n    <ion-label  floating>Prazo de entrega</ion-label>\n\n    <ion-input [(ngModel)]="contrato.prEntrega" readonly></ion-input>\n\n</ion-item>\n\n\n\n<ion-item>\n\n    <ion-label floating>Contratante</ion-label>\n\n    <ion-input [(ngModel)]="cliente.nome"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label floating>Cpf</ion-label>\n\n      <ion-input [(ngModel)]="contrato.cpf"></ion-input>\n\n  </ion-item>\n\n<ion-item>\n\n    <ion-label floating>Endereço</ion-label>\n\n    <ion-input [(ngModel)]="cliente.endereco"></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n    <ion-label floating>Cep</ion-label>\n\n    <ion-input [(ngModel)]="cliente.cep"></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n    <ion-label floating>Bairro</ion-label>\n\n    <ion-input [(ngModel)]="cliente.bairro"></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n    <ion-label floating>Cidade</ion-label>\n\n    <ion-input [(ngModel)]="cliente.cidade"></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n    <ion-label floating>Telefone</ion-label>\n\n    <ion-input [(ngModel)]="cliente.tel"></ion-input>\n\n</ion-item>\n\n\n\n</ion-card-content>\n\n</ion-card>\n\n\n\n</ion-grid>\n\n\n\n\n\n<ion-grid *ngIf="projeto.tituloProjeto != undefined">\n\n<ion-card>\n\n    <ion-card-content>\n\n    \n\n      <ion-item>\n\n      <ion-label floating>Nome contrato</ion-label>\n\n      <ion-input [(ngModel)]="contrato.name"></ion-input>\n\n  </ion-item>\n\n  \n\n  <ion-item>\n\n      <ion-label floating>Descritivo</ion-label>\n\n      <ion-input [(ngModel)]="projeto.descricaoProjeto"></ion-input>\n\n    </ion-item>\n\n  \n\n    \n\n  <ion-item>\n\n      <ion-label floating>Valor Total</ion-label>\n\n      <ion-input [(ngModel)]="projeto.preco" [brmasker]="{money: true}"></ion-input>\n\n    </ion-item>\n\n  \n\n      <ion-item (click)="openCalendar()">\n\n          <ion-label  floating>Prazo de entrega</ion-label>\n\n          <ion-input [(ngModel)]="contrato.prEntrega" readonly></ion-input>\n\n    </ion-item>\n\n  \n\n  <ion-item>\n\n      <ion-label floating>Contratante</ion-label>\n\n      <ion-input [(ngModel)]="cliente.nome"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n        <ion-label floating>Cpf</ion-label>\n\n        <ion-input [(ngModel)]="contrato.cpf" [brmasker]="{mask:\'000.000.000-00\'}"></ion-input>\n\n    </ion-item>\n\n  <ion-item>\n\n      <ion-label floating>Endereço</ion-label>\n\n      <ion-input [(ngModel)]="cliente.endereco"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label floating>Cep</ion-label>\n\n      <ion-input [(ngModel)]="cliente.cep" [brmasker]="{mask:\'00000-120\'}"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label floating>Bairro</ion-label>\n\n      <ion-input [(ngModel)]="cliente.bairro"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label floating>Cidade</ion-label>\n\n      <ion-input [(ngModel)]="cliente.cidade"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n      <ion-label floating>Telefone</ion-label>\n\n      <ion-input [(ngModel)]="cliente.tel" [brmasker]="{mask:\'(00) 00000-0000\'}"></ion-input>\n\n  </ion-item>\n\n</ion-card-content>\n\n</ion-card>\n\n\n\n  </ion-grid>\n\n\n\n<ion-card>\n\n    <ion-card-content style="padding-top: 0px; padding-bottom: 0px; ">\n\n      <ion-item (click)="createPdf()">\n\n<label>Gerar Contrato</label>        <ion-note item-end>\n\n    <ion-icon id="icon-color" ios="ios-document" md="md-document"></ion-icon> </ion-note>\n\n        <br/>\n\n      </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\contrato\contrato.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_8__providers_contrato_contrato__["a" /* ContratoProvider */]])
    ], ContratoPage);
    return ContratoPage;
}());

//# sourceMappingURL=contrato.js.map

/***/ })

});
//# sourceMappingURL=3.js.map