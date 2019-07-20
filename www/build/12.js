webpackJsonp([12],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(menu) {
        this.menu = menu;
    }
    MenuPage.prototype.openFirst = function () {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    };
    MenuPage.prototype.openEnd = function () {
        this.menu.open('end');
    };
    MenuPage.prototype.openCustom = function () {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\menu\menu.html"*/'<ion-menu [content]="content">\n  <ion-content no-padding>\n      \n\n      <section id="menu-color">\n\n          <div style="padding-top: 80px; text-align: center;">\n      <ion-item class="circle">\n          <img [src]="usuario.foto" />\n      </ion-item>\n  </div> \n\n  <div style="font-size: 20px; padding-top: 20px; text-align: center; color: white;">\n          {{usuario.nome}}<br/>\n          {{usuario.email}}\n      </div>\n \n  </section>\n  <ion-item >\n          Clientes <ion-note item-end>\n                  <ion-icon id="menu-icon" ios="ios-contacts" md="md-contacts"></ion-icon> </ion-note>\n       </ion-item>\n  <ion-item >\n          Serviços <ion-note item-end>    <ion-icon id="menu-icon" name="folder-open"></ion-icon></ion-note>\n       </ion-item>\n       <ion-item >\n              Enviar email <ion-note item-end>   <ion-icon id="menu-icon" name="mail"></ion-icon> </ion-note>\n           </ion-item>\n      <ion-item >\n             Congigurações <ion-note item-end>  <ion-icon id="menu-icon" name="settings"></ion-icon></ion-note>\n          </ion-item>\n    <!-- <ion-list>\n      <p>some menu content, could be list items</p>\n    </ion-list> -->\n    <ion-footer id="menu-footer">\n        Developed By Israel Gomes  \n    </ion-footer>\n  </ion-content>\n</ion-menu>\n\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=12.js.map