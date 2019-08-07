webpackJsonp([18],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AlertProvider = /** @class */ (function () {
    function AlertProvider(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    AlertProvider.prototype.toast = function (message, position) {
        var toast = this.toastCtrl.create({
            message: message,
            position: position,
            duration: 3000
        });
        toast.present();
    };
    AlertProvider.prototype.alert = function (title, message) {
        this.alertCtrl.create({
            title: title,
            message: message,
            buttons: ['OK'],
            //colocando false para clicar fora do alert e ele fechar, só irá fechar se clicar no 'OK'
            enableBackdropDismiss: false
        }).present();
    };
    AlertProvider.prototype.confirm = function (title, message, callback) {
        this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                { text: 'Não', role: 'Cancel', handler: function () {
                        console.log('Confirm:Say:no');
                    } },
                { text: 'Sim', handler: function () {
                        //aqui é executado o que a pessoa mandar na hr.
                        callback();
                    } }
            ]
        }).present();
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro-user/cadastro-user.module": [
		436,
		6
	],
	"../pages/clientes/adm-cliente/adm-cliente.module": [
		437,
		17
	],
	"../pages/clientes/cadastro-cliente/cadastro-cliente.module": [
		438,
		9
	],
	"../pages/clientes/clientes.module": [
		439,
		3
	],
	"../pages/clientes/detalhe-cliente/detalhe-cliente.module": [
		440,
		4
	],
	"../pages/contrato/contrato.module": [
		453,
		0
	],
	"../pages/email-generate/email-generate.module": [
		441,
		16
	],
	"../pages/fotos/fotos.module": [
		442,
		15
	],
	"../pages/login/login.module": [
		443,
		14
	],
	"../pages/menu/menu.module": [
		444,
		13
	],
	"../pages/modal-clientes/modal-clientes.module": [
		445,
		2
	],
	"../pages/modal-config/modal-config.module": [
		446,
		5
	],
	"../pages/projetos/adm-projeto/adm-projeto.module": [
		447,
		12
	],
	"../pages/projetos/cadastro-projeto/cadastro-projeto.module": [
		448,
		8
	],
	"../pages/projetos/detalhe-projeto/detalhe-projeto.module": [
		449,
		7
	],
	"../pages/projetos/projetos.module": [
		450,
		1
	],
	"../pages/splash/splash.module": [
		451,
		11
	],
	"../pages/tabs/tabs.module": [
		452,
		10
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SpinnerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SpinnerProvider = /** @class */ (function () {
    function SpinnerProvider(loading) {
        this.loading = loading;
        this.spinner = null;
        console.log("Hello SpinnerProvider Provider");
    }
    SpinnerProvider.prototype.show = function (message) {
        if (!this.spinner) {
            this.spinner = this.loading.create({
                content: message || "Carregando..."
            });
            this.spinner.present();
        }
        else {
            this.spinner.data.content = message;
        }
    };
    SpinnerProvider.prototype.hide = function () {
        if (this.spinner) {
            this.spinner.dismiss();
            this.spinner = null;
        }
    };
    SpinnerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], SpinnerProvider);
    return SpinnerProvider;
}());

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NetworkProvider = /** @class */ (function () {
    function NetworkProvider(platform) {
        this.platform = platform;
    }
    Object.defineProperty(NetworkProvider.prototype, "IsOnline", {
        //verificando se está online
        get: function () {
            //verificando se a pessoa está na plataforma, o 'cordova' verifica se está em um device
            if (this.platform.is("cordova")) {
                //verificando se existe a connection, e se sim verificando o tipo da conexão
                if (navigator.connection && navigator.connection.type) {
                    //perguntando se está online
                    return (navigator.connection.type != Connection.UNKKONW && navigator.connection.type != Connection.NONE);
                }
                else
                    return true;
            }
            else {
                //o navigator retorna todas as propriedades do navegador, nesse caso estamos utilizando a opção de verificar se está online
                return navigator.onLine;
            }
        },
        enumerable: true,
        configurable: true
    });
    NetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]])
    ], NetworkProvider);
    return NetworkProvider;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_base_providerBase__ = __webpack_require__(84);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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




/*
  Generated class for the ClientesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClientesProvider = /** @class */ (function (_super) {
    __extends(ClientesProvider, _super);
    function ClientesProvider(http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* configHelper */].url + "clientes", http) || this;
        _this.http = http;
        _this.url = __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* configHelper */].url + "clientes";
        return _this;
    }
    ClientesProvider.prototype.clientebyIdUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(this.url + "/usuario/" + id)];
            });
        });
    };
    ClientesProvider.prototype.getByIdClient = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(this.url + "/" + id)];
            });
        });
    };
    ClientesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_http__["a" /* HttpProvider */]])
    ], ClientesProvider);
    return ClientesProvider;
}(__WEBPACK_IMPORTED_MODULE_3__app_base_providerBase__["a" /* ProviderBase */]));

//# sourceMappingURL=clientes.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_base_providerBase__ = __webpack_require__(84);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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




/*
  Generated class for the ProjetosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProjetosProvider = /** @class */ (function (_super) {
    __extends(ProjetosProvider, _super);
    function ProjetosProvider(http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* configHelper */].url + "projetos", http) || this;
        _this.http = http;
        _this.url = __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* configHelper */].url + "projetos";
        return _this;
    }
    ProjetosProvider.prototype.projetoByClienteId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(this.url + "/cliente/" + id)];
            });
        });
    };
    ProjetosProvider.prototype.projetobyIdUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(this.url + "/usuario/" + id)];
            });
        });
    };
    ProjetosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__http_http__["a" /* HttpProvider */]])
    ], ProjetosProvider);
    return ProjetosProvider;
}(__WEBPACK_IMPORTED_MODULE_3__app_base_providerBase__["a" /* ProviderBase */]));

//# sourceMappingURL=projetos.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CameraProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CameraProvider = /** @class */ (function () {
    function CameraProvider(camera, platform) {
        this.camera = camera;
        this.platform = platform;
        console.log('Hello CameraProvider Provider');
    }
    CameraProvider.prototype._getPicture = function (source, callback) {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.platform.ready().then(function () {
                try {
                    //definidno as opções e configurações da foto
                    var options = {
                        quality: 70,
                        //DATA_URL é a imagem convertida em base64, vai devolver em base64 pra gente
                        destinationType: _this.camera.DestinationType.DATA_URL,
                        //definindo da onde vai vir, aqui se escolhe se irá vir da câmera, galeria, etc.
                        sourceType: source,
                        //se permite a pessoa editar a foto depois de tirar
                        allowEdit: true,
                        //como a imgem será salva
                        encodingType: _this.camera.EncodingType.JPEG,
                        //escolher se a foto vai ser salva na galeria do celular
                        saveToPhotoAlbum: false,
                        //defenir a orientação correta
                        correctOrientation: true
                    };
                    _this.camera.getPicture(options).then(function (imgData) {
                        //ajustando a imagem, e no final ${}=> vai o que será o resultado da captura
                        var base64Image = "data:image/jpeg;base64," + imgData;
                        callback(base64Image);
                    }, function (err) {
                        console.log('Problema ao capturar a foto', err);
                    });
                }
                catch (error) {
                    console.log('problema ao tirar a foto', error);
                }
            });
        }
        else {
            alert('Disponibilidade disponível somente no device');
        }
    };
    //criando método para pegar a foto da galeria
    CameraProvider.prototype.getPictureFromGalery = function (callback) {
        this._getPicture(this.camera.PictureSourceType.PHOTOLIBRARY, function (photo) {
            //pegando a foto escolhida
            callback(photo);
        });
    };
    //criando um método para tirar a foto
    CameraProvider.prototype.takePicture = function (callback) {
        this._getPicture(this.camera.PictureSourceType.CAMERA, function (photo) {
            //pegando a foto tirada
            callback(photo);
        });
    };
    CameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"]])
    ], CameraProvider);
    return CameraProvider;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(372);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_spinner_spinner__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_http_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_network_network__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_usuario_usuario__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_clientes_clientes__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_projetos_projetos__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_camera_camera__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_network__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_opener__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_email_composer__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_brmasker_ionic_3__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_app_version__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ion2_calendar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ion2_calendar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















//import { BrMaskerIonic3 } from 'brmasker-ionic-3';
//import { BrMaskerIonicServices3 } from 'brmasker-ionic-3';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                //BrMaskerIonic3,
                //BrMaskerIonicServices3,
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_22_ion2_calendar__["CalendarModule"],
                //PipesModule,
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro-user/cadastro-user.module#CadastroUserPageModule', name: 'CadastroUserPage', segment: 'cadastro-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clientes/adm-cliente/adm-cliente.module#AdmClientePageModule', name: 'AdmClientePage', segment: 'adm-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clientes/cadastro-cliente/cadastro-cliente.module#CadastroClientePageModule', name: 'CadastroClientePage', segment: 'cadastro-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clientes/clientes.module#ClientesPageModule', name: 'ClientesPage', segment: 'clientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clientes/detalhe-cliente/detalhe-cliente.module#DetalheClientePageModule', name: 'DetalheClientePage', segment: 'detalhe-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-generate/email-generate.module#EmailGeneratePageModule', name: 'EmailGeneratePage', segment: 'email-generate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fotos/fotos.module#FotosPageModule', name: 'FotosPage', segment: 'fotos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-clientes/modal-clientes.module#ModalClientesPageModule', name: 'ModalClientesPage', segment: 'modal-clientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-config/modal-config.module#ModalConfigPageModule', name: 'ModalConfigPage', segment: 'modal-config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projetos/adm-projeto/adm-projeto.module#AdmProjetoPageModule', name: 'AdmProjetoPage', segment: 'adm-projeto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projetos/cadastro-projeto/cadastro-projeto.module#CadastroProjetoPageModule', name: 'CadastroProjetoPage', segment: 'cadastro-projeto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projetos/detalhe-projeto/detalhe-projeto.module#DetalheProjetoPageModule', name: 'DetalheProjetoPage', segment: 'detalhe-projeto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projetos/projetos.module#ProjetosPageModule', name: 'ProjetosPage', segment: 'projetos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contrato/contrato.module#ContratoPageModule', name: 'ContratoPage', segment: 'contrato', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_email_composer__["a" /* EmailComposer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_6__providers_spinner_spinner__["a" /* SpinnerProvider */],
                __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_network_network__["a" /* NetworkProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_clientes_clientes__["a" /* ClientesProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_projetos_projetos__["a" /* ProjetosProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_camera_camera__["a" /* CameraProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_app_version__["a" /* AppVersion */]
                //BrMaskerIonicServices3
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 173,
	"./af.js": 173,
	"./ar": 174,
	"./ar-dz": 175,
	"./ar-dz.js": 175,
	"./ar-kw": 176,
	"./ar-kw.js": 176,
	"./ar-ly": 177,
	"./ar-ly.js": 177,
	"./ar-ma": 178,
	"./ar-ma.js": 178,
	"./ar-sa": 179,
	"./ar-sa.js": 179,
	"./ar-tn": 180,
	"./ar-tn.js": 180,
	"./ar.js": 174,
	"./az": 181,
	"./az.js": 181,
	"./be": 182,
	"./be.js": 182,
	"./bg": 183,
	"./bg.js": 183,
	"./bm": 184,
	"./bm.js": 184,
	"./bn": 185,
	"./bn.js": 185,
	"./bo": 186,
	"./bo.js": 186,
	"./br": 187,
	"./br.js": 187,
	"./bs": 188,
	"./bs.js": 188,
	"./ca": 189,
	"./ca.js": 189,
	"./cs": 190,
	"./cs.js": 190,
	"./cv": 191,
	"./cv.js": 191,
	"./cy": 192,
	"./cy.js": 192,
	"./da": 193,
	"./da.js": 193,
	"./de": 194,
	"./de-at": 195,
	"./de-at.js": 195,
	"./de-ch": 196,
	"./de-ch.js": 196,
	"./de.js": 194,
	"./dv": 197,
	"./dv.js": 197,
	"./el": 198,
	"./el.js": 198,
	"./en-SG": 199,
	"./en-SG.js": 199,
	"./en-au": 200,
	"./en-au.js": 200,
	"./en-ca": 201,
	"./en-ca.js": 201,
	"./en-gb": 202,
	"./en-gb.js": 202,
	"./en-ie": 203,
	"./en-ie.js": 203,
	"./en-il": 204,
	"./en-il.js": 204,
	"./en-nz": 205,
	"./en-nz.js": 205,
	"./eo": 206,
	"./eo.js": 206,
	"./es": 207,
	"./es-do": 208,
	"./es-do.js": 208,
	"./es-us": 209,
	"./es-us.js": 209,
	"./es.js": 207,
	"./et": 210,
	"./et.js": 210,
	"./eu": 211,
	"./eu.js": 211,
	"./fa": 212,
	"./fa.js": 212,
	"./fi": 213,
	"./fi.js": 213,
	"./fo": 214,
	"./fo.js": 214,
	"./fr": 215,
	"./fr-ca": 216,
	"./fr-ca.js": 216,
	"./fr-ch": 217,
	"./fr-ch.js": 217,
	"./fr.js": 215,
	"./fy": 218,
	"./fy.js": 218,
	"./ga": 219,
	"./ga.js": 219,
	"./gd": 220,
	"./gd.js": 220,
	"./gl": 221,
	"./gl.js": 221,
	"./gom-latn": 222,
	"./gom-latn.js": 222,
	"./gu": 223,
	"./gu.js": 223,
	"./he": 224,
	"./he.js": 224,
	"./hi": 225,
	"./hi.js": 225,
	"./hr": 226,
	"./hr.js": 226,
	"./hu": 227,
	"./hu.js": 227,
	"./hy-am": 228,
	"./hy-am.js": 228,
	"./id": 229,
	"./id.js": 229,
	"./is": 230,
	"./is.js": 230,
	"./it": 231,
	"./it-ch": 232,
	"./it-ch.js": 232,
	"./it.js": 231,
	"./ja": 233,
	"./ja.js": 233,
	"./jv": 234,
	"./jv.js": 234,
	"./ka": 235,
	"./ka.js": 235,
	"./kk": 236,
	"./kk.js": 236,
	"./km": 237,
	"./km.js": 237,
	"./kn": 238,
	"./kn.js": 238,
	"./ko": 239,
	"./ko.js": 239,
	"./ku": 240,
	"./ku.js": 240,
	"./ky": 241,
	"./ky.js": 241,
	"./lb": 242,
	"./lb.js": 242,
	"./lo": 243,
	"./lo.js": 243,
	"./lt": 244,
	"./lt.js": 244,
	"./lv": 245,
	"./lv.js": 245,
	"./me": 246,
	"./me.js": 246,
	"./mi": 247,
	"./mi.js": 247,
	"./mk": 248,
	"./mk.js": 248,
	"./ml": 249,
	"./ml.js": 249,
	"./mn": 250,
	"./mn.js": 250,
	"./mr": 251,
	"./mr.js": 251,
	"./ms": 252,
	"./ms-my": 253,
	"./ms-my.js": 253,
	"./ms.js": 252,
	"./mt": 254,
	"./mt.js": 254,
	"./my": 255,
	"./my.js": 255,
	"./nb": 256,
	"./nb.js": 256,
	"./ne": 257,
	"./ne.js": 257,
	"./nl": 258,
	"./nl-be": 259,
	"./nl-be.js": 259,
	"./nl.js": 258,
	"./nn": 260,
	"./nn.js": 260,
	"./pa-in": 261,
	"./pa-in.js": 261,
	"./pl": 262,
	"./pl.js": 262,
	"./pt": 263,
	"./pt-br": 264,
	"./pt-br.js": 264,
	"./pt.js": 263,
	"./ro": 265,
	"./ro.js": 265,
	"./ru": 266,
	"./ru.js": 266,
	"./sd": 267,
	"./sd.js": 267,
	"./se": 268,
	"./se.js": 268,
	"./si": 269,
	"./si.js": 269,
	"./sk": 270,
	"./sk.js": 270,
	"./sl": 271,
	"./sl.js": 271,
	"./sq": 272,
	"./sq.js": 272,
	"./sr": 273,
	"./sr-cyrl": 274,
	"./sr-cyrl.js": 274,
	"./sr.js": 273,
	"./ss": 275,
	"./ss.js": 275,
	"./sv": 276,
	"./sv.js": 276,
	"./sw": 277,
	"./sw.js": 277,
	"./ta": 278,
	"./ta.js": 278,
	"./te": 279,
	"./te.js": 279,
	"./tet": 280,
	"./tet.js": 280,
	"./tg": 281,
	"./tg.js": 281,
	"./th": 282,
	"./th.js": 282,
	"./tl-ph": 283,
	"./tl-ph.js": 283,
	"./tlh": 284,
	"./tlh.js": 284,
	"./tr": 285,
	"./tr.js": 285,
	"./tzl": 286,
	"./tzl.js": 286,
	"./tzm": 287,
	"./tzm-latn": 288,
	"./tzm-latn.js": 288,
	"./tzm.js": 287,
	"./ug-cn": 289,
	"./ug-cn.js": 289,
	"./uk": 290,
	"./uk.js": 290,
	"./ur": 291,
	"./ur.js": 291,
	"./uz": 292,
	"./uz-latn": 293,
	"./uz-latn.js": 293,
	"./uz.js": 292,
	"./vi": 294,
	"./vi.js": 294,
	"./x-pseudo": 295,
	"./x-pseudo.js": 295,
	"./yo": 296,
	"./yo.js": 296,
	"./zh-cn": 297,
	"./zh-cn.js": 297,
	"./zh-hk": 298,
	"./zh-hk.js": 298,
	"./zh-tw": 299,
	"./zh-tw.js": 299
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 412;

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_configHelper__ = __webpack_require__(44);
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







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, usuarioSrvc, events, menuCtrl, modalCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.usuarioSrvc = usuarioSrvc;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__["a" /* UsuarioProvider */].isLogado ? 'TabsPage' : 'LoginPage';
        this.usuario = new Array();
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //statusBar.styleDefault();
            if (_this.platform.is('android')) {
                _this.statusBar.backgroundColorByHexString("#33000000");
            }
            //let splash = modalCtrl.create(SplashPage);
            // splash.present();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.usuarioLogado = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__helpers_configHelper__["a" /* configHelper */].storageKeys.user));
                        return [4 /*yield*/, this.usuarioSrvc.getByIdUser(user._id)];
                    case 1:
                        result = _a.sent();
                        if (result.success) {
                            this.usuario = result.data;
                            console.log('App .component', this.usuario);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.openConfigOptions = function () {
        var modal = this.modalCtrl.create('ModalConfigPage');
        modal.present();
        modal.onDidDismiss(function (data) {
            try {
            }
            catch (error) {
            }
        });
    };
    MyApp.prototype.checkEvent = function () {
        var _this = this;
        this.events.subscribe(__WEBPACK_IMPORTED_MODULE_5__helpers_configHelper__["a" /* configHelper */].Events.atualizacaoUserMenu, function () {
            _this.atualizarUser();
        });
    };
    MyApp.prototype.atualizarUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__helpers_configHelper__["a" /* configHelper */].storageKeys.user));
                        return [4 /*yield*/, this.usuarioSrvc.getByIdUser(user._id)];
                    case 1:
                        result = _a.sent();
                        if (result.success) {
                            this.usuario = result.data;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.clientes = function () {
        this.nav.setRoot('TabsPage');
        this.menuCtrl.close();
    };
    MyApp.prototype.projetos = function () {
        this.nav.setRoot('ProjetosPage');
        this.menuCtrl.close();
    };
    MyApp.prototype.sendEmail = function () {
        this.nav.setRoot('EmailGeneratePage');
        this.menuCtrl.close();
    };
    MyApp.prototype.logout = function () {
        this.menuCtrl.close();
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_5__helpers_configHelper__["a" /* configHelper */].storageKeys.token, null);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_5__helpers_configHelper__["a" /* configHelper */].storageKeys.user, null);
        this.nav.setRoot('LoginPage');
    };
    MyApp.prototype.menuController = function () {
        this.theme = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__helpers_configHelper__["a" /* configHelper */].storageKeys.color);
        switch (this.theme) {
            case 'purple':
                this.class = 'menu-purple';
                break;
            case '#527F76':
                this.class = 'menu-color';
                break;
            case 'blue':
                this.class = 'menu-blue';
                break;
            case 'black':
                this.class = 'menu-black';
                break;
            default:
                this.class = 'menu-color';
        }
        if (this.theme == "#527F76") {
            this.theme = 'primary';
        }
    };
    MyApp.prototype.eventChangeColor = function () {
        var _this = this;
        this.events.subscribe(__WEBPACK_IMPORTED_MODULE_5__helpers_configHelper__["a" /* configHelper */].Events.changeColor, function () {
            _this.menuController();
            _this.ngOnInit();
            console.log('Menu adicionado', _this.class);
        });
    };
    MyApp.prototype.ngOnInit = function () {
        this.eventChangeColor();
        this.menuController();
        this.checkEvent();
        this.theme = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_5__helpers_configHelper__["a" /* configHelper */].storageKeys.color);
        console.log('Tema', this.theme);
        switch (this.theme) {
            case '527F76':
                this.theme = 'primary';
                break;
            case 'blue':
                this.theme = 'Navy';
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\app\app.html"*/'<ion-menu [content]="content">\n\n        <ion-content no-padding>\n\n            \n\n\n\n            <section [class]="class">\n\n\n\n               \n\n                \n\n\n\n                <div id="picture-position">\n\n            <ion-item class="circle">\n\n                <img [src]="usuario.foto" width="200" height="200"/>\n\n            </ion-item>\n\n        </div> \n\n\n\n        <div style="font-size: 20px; padding-top: 20px; text-align: center; color: white;">\n\n                {{usuario.nome}}<br/>\n\n                {{usuario.email}}\n\n            </div>\n\n       \n\n        </section>\n\n              \n\n\n\n        <ion-item (click)="clientes()">\n\n                Clientes <ion-note item-end>\n\n                        <ion-icon id="menu-icon" ios="ios-contacts" md="md-contacts"></ion-icon> </ion-note>\n\n             </ion-item>\n\n        <ion-item (click)="projetos()">\n\n                Serviços <ion-note item-end>    <ion-icon id="menu-icon" name="folder-open"></ion-icon></ion-note>\n\n             </ion-item>\n\n             <ion-item (click)="sendEmail()">\n\n                    Enviar email <ion-note item-end>   <ion-icon id="menu-icon" name="mail"></ion-icon> </ion-note>\n\n                 </ion-item>\n\n            <ion-item (click)="openConfigOptions()">\n\n                   Configurações <ion-note item-end>  <ion-icon id="menu-icon" name="settings"></ion-icon></ion-note>\n\n                </ion-item>      \n\n\n\n\n\n                <div id="btn-logout">\n\n                <button (click)="logout()" id="logout" [ngStyle]="{\'color\': theme}">\n\n                    <ion-icon name="power"> Sair da Conta</ion-icon>\n\n                </button>\n\n            </div>\n\n\n\n          <ion-footer id="menu-footer" [ngStyle]="{\'background-color\': theme}">\n\n              Developed By Israel Gomes  <br/>\n\n              Version 1.0.0<br/>\n\n          </ion-footer>\n\n        </ion-content>\n\n      </ion-menu>\n\n      \n\n\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n\n'/*ion-inline-end:"C:\Users\lsrael\Desktop\NovaDesign_app\novo_design-front-ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ModalController"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configHelper; });
var configHelper = /** @class */ (function () {
    function configHelper() {
    }
    //colocado desse jeito para configurar o cors, foi configura no ionic.config.json n aparte de proxies
    //public static url: string = '/v1/';
    configHelper.url = 'https://marcenarianovadesign.com.br/api/';
    //public static url: string ='http://localhost:3000/api/';
    //https://marcenarianovadesign.com.br/api/
    // public static url: string = 'http://localhost:3000/api/'
    configHelper.storageKeys = {
        token: 'novadesign.token',
        user: 'novadesign.user',
        selectClient: 'novadesign.select.client',
        color: 'cm.theme'
    };
    configHelper.Events = {
        atualizacaoUserMenu: 'atualizacao.user.menu',
        atualizaClienteByProjetos: 'atualiza.client.by.projeto',
        atualizaEmailByCliente: 'atualiza.email.by.cliente',
        changeColor: 'change.color'
    };
    return configHelper;
}());

//# sourceMappingURL=configHelper.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner_spinner__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__network_network__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usuario_usuario__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { _ParseAST } from '@angular/compiler';

var HttpProvider = /** @class */ (function () {
    function HttpProvider(http, spinnerSrvc, alertSrvc, networkSrvc) {
        this.http = http;
        this.spinnerSrvc = spinnerSrvc;
        this.alertSrvc = alertSrvc;
        this.networkSrvc = networkSrvc;
    }
    HttpProvider.prototype.createHeader = function (header) {
        if (!header) {
            header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        }
        header = header.append('Content-type', 'application/json');
        header = header.append('accept', 'application/json');
        var token = __WEBPACK_IMPORTED_MODULE_5__usuario_usuario__["a" /* UsuarioProvider */].getTokenAcess;
        if (token) {
            header = header.append('user-token', token);
        }
        return header;
    };
    //criando uma promessa, pois é um código que vai demorar para se executar.
    HttpProvider.prototype.get = function (url) {
        var _this = this;
        //startando o loader, é necessário apenas uma última vez
        this.spinnerSrvc.show("Carregando os dados...");
        var header = this.createHeader();
        //criando uma nova promessa, por padrão se cria o resolve e o reject, não está sendo utilizado o reject pq dentro do HttpResultModel que está sendo passado a cima na promise já tem as informações de erro.
        return new Promise(function (resolve) {
            //verirfica se o usuário está online
            if (_this.networkSrvc.IsOnline) {
                //se estiver online ele pega o http do angular e passa a url que veio, e espera o subscribe que é o retorno
                _this.http.get(url, { headers: header }).subscribe(function (_res) {
                    //quando ele fizer o retorno ele vai tirar o loader com o método hide criado no provider spinner e vai resolver a promise
                    _this.spinnerSrvc.hide();
                    //aqui é feito o resolve, no caso o success true pois foi resolvido com sucesso, no data vem o que retornou do api da pessoa, e virá sem erro
                    resolve({ success: true, data: _res, err: undefined });
                }, function (err) {
                    //caso de algum erro no get, ele irá também ocultar o alert
                    _this.spinnerSrvc.hide();
                    //vai dar um toast
                    _this.alertSrvc.toast('Não foi possível consultar os dados, verifique sua conexão e tente novamente', 'bottom');
                    //e da um resolve dizendo que não houve sucesso, não tem informação e passa o erro.
                    resolve({ success: false, data: undefined, err: err });
                });
                //cai aqui caso o usuário esteja offline
            }
            else {
                _this.alertSrvc.toast('Você está offline, e infelizmente não pode ser carregado os dados!', 'bottom');
                //da um resolve dizendo que não houve erro, a informação vem vazia e sem erro.
                resolve({ success: true, data: [], err: undefined });
            }
        });
    };
    HttpProvider.prototype.post = function (url, model) {
        var _this = this;
        this.spinnerSrvc.show("Salvando informações...");
        var header = this.createHeader();
        return new Promise(function (resolve) {
            if (_this.networkSrvc.IsOnline) {
                _this.http.post(url, model, { headers: header }).subscribe(function (_res) {
                    _this.spinnerSrvc.hide();
                    resolve({ success: true, data: _res, err: undefined });
                    console.log('Salvando');
                }, function (err) {
                    _this.spinnerSrvc.hide();
                    console.log(err);
                    if (err.status == 400) {
                        var msg_1 = "";
                        console.log('O erro provavelmente é aqui');
                        try {
                            err.error.validation.forEach(function (_err) {
                                msg_1 += "<li>" + _err.message + "</li>";
                            });
                            _this.alertSrvc.alert(err.error.message, msg_1);
                        }
                        catch (error) {
                            var msg_2;
                            _this.alertSrvc.alert(err.error.message, msg_2);
                        }
                    }
                    else if (err.status == 404) {
                        _this.alertSrvc.alert("informação", err.errors.message);
                    }
                    else
                        _this.alertSrvc.toast("Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente", "bottom");
                    resolve({ success: false, data: undefined, err: err });
                });
            }
            else {
                _this.alertSrvc.toast("Você está offline e infelizmente não pode ser enviado os dados", "bottom");
                resolve({ success: true, data: [], err: undefined });
            }
        });
    };
    HttpProvider.prototype.put = function (url, model) {
        var _this = this;
        this.spinnerSrvc.show("Atualizando informações");
        var header = this.createHeader();
        return new Promise(function (resolve) {
            //caso de tudo certo com a conexão
            if (_this.networkSrvc.IsOnline) {
                _this.http.put(url, model, { headers: header }).subscribe(function (_res) {
                    _this.spinnerSrvc.hide();
                    resolve({ success: true, data: _res, err: undefined });
                    //caso de algum problema de carregamento ou salvamento
                }, function (err) {
                    _this.spinnerSrvc.hide();
                    console.log(err);
                    if (err.status == 400) {
                        var msg_3 = '';
                        err.error.validation.forEach(function (_err) {
                            msg_3 + ("<li>" + _err.message + "</li>");
                        });
                        _this.alertSrvc.alert(err.erros.message, msg_3);
                    }
                    else
                        _this.alertSrvc.toast('Não foi possível realizar o processamento da informação, verifique sua conexão e tnete novamente', 'bottom');
                    resolve({ success: false, data: undefined, err: err });
                });
            }
            else {
                _this.alertSrvc.toast('Você está offline e infelizmente não pode ser enviado os dados', 'bottom');
                resolve({ success: true, data: [], err: undefined });
            }
        });
    };
    HttpProvider.prototype.delete = function (url) {
        var _this = this;
        this.spinnerSrvc.show('Deletando informações');
        var header = this.createHeader();
        return new Promise(function (resolve) {
            if (_this.networkSrvc.IsOnline) {
                _this.http.delete(url, { headers: header }).subscribe(function (_res) {
                    _this.spinnerSrvc.hide();
                    resolve({ success: true, data: _res, err: undefined });
                }, function (err) {
                    _this.spinnerSrvc.hide();
                    _this.alertSrvc.toast('Não foi possível realizar o porcessamemto da informação, verifique a sua conexão e tente novamente', 'bottom');
                    resolve({ success: false, data: undefined, err: err });
                });
            }
            else {
                _this.alertSrvc.toast('Você está offline e infelizmente não pode ser enviado os dados!', 'bottom');
                resolve({ success: true, data: [], err: undefined });
            }
        });
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__spinner_spinner__["a" /* SpinnerProvider */],
            __WEBPACK_IMPORTED_MODULE_3__alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_4__network_network__["a" /* NetworkProvider */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_helpers_configHelper__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_base_providerBase__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_http__ = __webpack_require__(50);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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




/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsuarioProvider = /** @class */ (function (_super) {
    __extends(UsuarioProvider, _super);
    function UsuarioProvider(http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_0__app_helpers_configHelper__["a" /* configHelper */].url + "usuario", http) || this;
        _this.http = http;
        _this.url = __WEBPACK_IMPORTED_MODULE_0__app_helpers_configHelper__["a" /* configHelper */].url + "usuario";
        return _this;
    }
    UsuarioProvider.prototype.autenticate = function (email, senha) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(this.url + "/autenticar", { email: email, senha: senha })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsuarioProvider.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get("" + this.url)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsuarioProvider.prototype.getByIdUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.url + "/" + id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Object.defineProperty(UsuarioProvider, "getTokenAcess", {
        get: function () {
            return localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0__app_helpers_configHelper__["a" /* configHelper */].storageKeys.token);
        },
        enumerable: true,
        configurable: true
    });
    UsuarioProvider.prototype.register = function (usuario) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('Usuario Provider');
                return [2 /*return*/, this.http.post(this.url + "/register", usuario)];
            });
        });
    };
    UsuarioProvider.RegisterLogin = function (result) {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__app_helpers_configHelper__["a" /* configHelper */].storageKeys.token, result.token);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__app_helpers_configHelper__["a" /* configHelper */].storageKeys.user, JSON.stringify(result.usuario));
    };
    Object.defineProperty(UsuarioProvider, "isLogado", {
        //criando método para verificar se po usuário está logado, se sim, retorna true
        get: function () {
            return (localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0__app_helpers_configHelper__["a" /* configHelper */].storageKeys.token) != undefined);
        },
        enumerable: true,
        configurable: true
    });
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_http__["a" /* HttpProvider */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}(__WEBPACK_IMPORTED_MODULE_2__app_base_providerBase__["a" /* ProviderBase */]));

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderBase; });
var ProviderBase = /** @class */ (function () {
    function ProviderBase(url, http) {
        this.url = url;
        this.http = http;
    }
    ProviderBase.prototype.get = function () {
        return this.http.get(this.url);
    };
    ProviderBase.prototype.getByuid = function (uid) {
        return this.http.get(this.url + "/" + uid);
    };
    ProviderBase.prototype.post = function (model) {
        return this.http.post(this.url, model);
    };
    ProviderBase.prototype.put = function (uid, model) {
        return this.http.put(this.url + "/" + uid, model);
    };
    ProviderBase.prototype.delete = function (uid) {
        return this.http.delete(this.url + "/" + uid);
    };
    return ProviderBase;
}());

//# sourceMappingURL=providerBase.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map