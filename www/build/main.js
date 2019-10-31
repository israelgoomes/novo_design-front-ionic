webpackJsonp([20],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro-user/cadastro-user.module": [
		442,
		6
	],
	"../pages/clientes/adm-cliente/adm-cliente.module": [
		443,
		19
	],
	"../pages/clientes/cadastro-cliente/cadastro-cliente.module": [
		444,
		10
	],
	"../pages/clientes/clientes.module": [
		445,
		0
	],
	"../pages/clientes/detalhe-cliente/detalhe-cliente.module": [
		446,
		4
	],
	"../pages/contrato/contrato.module": [
		447,
		3
	],
	"../pages/email-generate/email-generate.module": [
		448,
		18
	],
	"../pages/fotos/fotos.module": [
		449,
		17
	],
	"../pages/login/login.module": [
		450,
		16
	],
	"../pages/menu/menu.module": [
		451,
		15
	],
	"../pages/modal-clientes/modal-clientes.module": [
		453,
		2
	],
	"../pages/modal-config/modal-config.module": [
		452,
		5
	],
	"../pages/projetos/adm-projeto/adm-projeto.module": [
		454,
		14
	],
	"../pages/projetos/cadastro-projeto/cadastro-projeto.module": [
		455,
		8
	],
	"../pages/projetos/detalhe-projeto/detalhe-projeto.module": [
		456,
		7
	],
	"../pages/projetos/projetos.module": [
		457,
		1
	],
	"../pages/splash/splash.module": [
		458,
		13
	],
	"../pages/tabs/tabs.module": [
		459,
		12
	],
	"../pages/teset-input/teset-input.module": [
		460,
		9
	],
	"../pages/testes/testes.module": [
		461,
		11
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
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_base_providerBase__ = __webpack_require__(85);
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

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_base_providerBase__ = __webpack_require__(85);
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

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
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

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContratoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
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
  Generated class for the ContratoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ContratoProvider = /** @class */ (function () {
    function ContratoProvider(http, platform, file, toastCtrl) {
        this.http = http;
        this.platform = platform;
        this.file = file;
        this.toastCtrl = toastCtrl;
        console.log('Hello ContratoProvider Provider');
    }
    ContratoProvider.prototype.saveToDevice = function (data, savefile, prEntrega) {
        prEntrega = __WEBPACK_IMPORTED_MODULE_6_moment__(prEntrega).format("DD/MM/YYYY");
        var self = this;
        self.file.writeFile(self.file.externalDataDirectory, savefile, data, {
            replace: false
        });
        var toast = self.toastCtrl.create({
            message: "Arquivo salvo no seu celular",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    ContratoProvider.prototype.createPdf = function (dados, contrato) {
        var _this = this;
        console.log('dados enviados para o provider: ', dados);
        var self = this;
        __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
        var docDefinition = {
            content: [
                {
                    image: "data:image/jpeg;base64,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",
                    style: "header",
                    margin: [0, 20, 0, 0]
                },
                {
                    text: "Fabiano Gomes da Lapa",
                    style: "subheader",
                    margin: [10, 0, 0, 3]
                },
                {
                    text: "CNPJ: 12.405.428/001-01",
                    style: "subheader",
                    margin: [10, 0, 0, 3]
                },
                {
                    text: "CPF: 260.590.808-98",
                    style: "subheader",
                    margin: [10, 0, 0, 3]
                },
                { text: "RG: 28.866.616-1", style: "subheader", margin: [10, 0, 0, 3] },
                { text: "TELS: (13) 98836-3024; (13) 98144-0084.", style: "subheader" },
                {
                    text: "CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE MARCENARIA",
                    style: "header",
                    margin: [0, 20, 0, 20]
                },
                //--------------------  Dados do cliente ----------------------------------------
                { text: "01 - CONTRATANTE:", style: "titles", margin: [0, 20, 0, 10] },
                {
                    text: ("" + dados.nome).toUpperCase(),
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                {
                    text: ("CPF: " + contrato.cpf).toUpperCase(),
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                {
                    text: ("Cep: " + dados.cep).toUpperCase(),
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                {
                    text: ("Endere\u00E7o: " + dados.endereco).toUpperCase(),
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                {
                    text: ("Bairro: " + dados.bairro).toUpperCase(),
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                {
                    text: ("Cidade: " + dados.cidade).toUpperCase(),
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                {
                    text: ("Telefone: " + dados.tel).toUpperCase(),
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                //--------------Dados da empresa -------------------------------------
                { text: "02 - CONTRATADO:", style: "titles", margin: [0, 20, 0, 0] },
                {
                    text: "Marcenaria Nova Design, representada por Fabiano Gomes da Lapa.",
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                {
                    text: "Endereço (centro de corte e apoio baixada): Avenida marginal um, 102",
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                {
                    text: "Cidade: São vicente/SP",
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                //-----------------------Descrição do serviço ------------------------------------------
                { text: "03 - DESCRITIVO:", style: "titles", margin: [0, 20, 0, 0] },
                {
                    text: dados.descritivo,
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                //------------------------------- Valor Total ------------------------------------------
                { text: "04 - VALOR TOTAL:", style: "titles", margin: [0, 20, 0, 0] },
                {
                    text: "R$ " + dados.vlTotal,
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                //------------------------------Prazo de entrega --------------------------------------
                {
                    text: "05 - PRAZO DE ENTREGA:",
                    style: "titles",
                    margin: [0, 20, 0, 0]
                },
                {
                    text: "" + contrato.prEntrega,
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                //--------------------------------Tratados ------------------------------------
                { text: "06:", style: "titles", margin: [0, 20, 0, 0] },
                {
                    text: "O CONTRATADO FORNCERÁ AS FERRAMENTAS, METERIAIS E PROFISSIONAIS NECESSÁRIOS PARA A EXECUÇÃO DO SERVIÇO, REPONSABILIZANDO-SE INCLUSIVE DA LIMPEZA QUE FOR NECESSÁRIA.",
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                //--------------------------------Tratados ------------------------------------
                { text: "07 - ENCANAMENTO:", style: "titles", margin: [0, 20, 0, 0] },
                {
                    text: "FICA DE RESPONSABILIDADE DO CONTRATANTE FORNECER A PLANTA HIDRÁULICA DO APARTAMENTO DOIS DIAS ANTES DA MONTAGEM DOS MÓVEIS, FICANDO O CONTRATADO ISENTO DE QUAISQUER ÔNUS DECORRENTE DE CANO FURADO.",
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                //--------------------------------Tratados ------------------------------------
                { text: "08:", style: "titles", margin: [0, 20, 0, 0] },
                {
                    text: "O CONTRATADO REPONDERÁ POR DANOS QUE RESULTEM DA IMPERÍCIA OU NEGLIGÊNCIA SUA OU DE SEUS EMPREGADOS, SEGUNDO OS PRINCÍPIOS GERAIS DE RESPONSABILIDADE.",
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                //--------------------------------Tratados ------------------------------------
                { text: "09:", style: "titles", margin: [0, 20, 0, 0] },
                {
                    text: "AS PARTES ELEGEM O FÓRUM DE SÃO VICENTE/SP, PARA DIRIMIREM QUAISQUER DÚVIDAS DECORRENTES DO PRESENTE COTNRATO.",
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                //--------------------------------Tratados ------------------------------------
                { text: "10:", style: "titles", margin: [0, 20, 0, 0] },
                {
                    text: "CONTRATANTE E CONTRATADO CONCORDAM E ESTÃO AJUSTADOS COM TODAS AS NORMAS E CLAÚSULAS ESTIPULADAS NESTE CONTRATO, E ASSIM ASSINAM O PRESENTE TERMO EM DUAS VIAS DE IGUAL TEOR, OS QUAIS PASSAM A TER FORÇA LEGAL ENTRE AS PARTES.",
                    style: "story",
                    margin: [10, 10, 0, 0]
                },
                //--------------------------------Tratados ------------------------------------
                {
                    text: "__________________________________________________",
                    style: "assinatura",
                    margin: [0, 100, 0, 0]
                },
                {
                    text: "Assinatura do contratante",
                    style: "assinatura",
                    margin: [0, 20, 0, 0]
                },
                {
                    text: "__________________________________________________",
                    style: "assinatura",
                    margin: [0, 100, 0, 0]
                },
                {
                    text: "Assinatura do contratado",
                    style: "assinatura",
                    margin: [0, 20, 0, 0]
                }
            ],
            styles: {
                header: {
                    bold: true,
                    fontSize: 14,
                    alignment: "center"
                },
                assinatura: {
                    fontSize: 14,
                    alignment: "center"
                },
                subheader: {
                    fontSize: 14,
                    alignment: "center"
                },
                titles: {
                    fontSize: 14,
                    bold: true,
                    alignment: "left"
                },
                story: {
                    fontSize: 14,
                    alignment: "left"
                },
                url: {
                    fontSize: 14,
                    alignment: "center"
                }
            },
            pageSize: "A4",
            pageOrientation: "portrait"
        };
        __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default.a.createPdf(docDefinition).getBuffer(function (buffer) {
            if (_this.platform.is("cordova")) {
                var utf8 = new Uint8Array(buffer);
                var binaryArray = utf8.buffer;
                self.saveToDevice(binaryArray, contrato.nmContrato + ".pdf", dados.prEntrega);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default.a.createPdf(docDefinition).download();
            }
        });
    };
    ContratoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ToastController"]])
    ], ContratoProvider);
    return ContratoProvider;
}());

//# sourceMappingURL=contrato.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(373);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_spinner_spinner__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_http_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_network_network__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_usuario_usuario__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_clientes_clientes__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_projetos_projetos__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_camera_camera__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_network__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_opener__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_email_composer__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_brmasker_ionic_3__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_app_version__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ion2_calendar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_contrato_contrato__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















//import { BrMaskerIonic3 } from 'brmasker-ionic-3';
//import { BrMaskerIonicServices3 } from 'brmasker-ionic-3';

//import { PipesModule } from '../pipes/pipes.module';



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
                        { loadChildren: '../pages/contrato/contrato.module#ContratoPageModule', name: 'ContratoPage', segment: 'contrato', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email-generate/email-generate.module#EmailGeneratePageModule', name: 'EmailGeneratePage', segment: 'email-generate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fotos/fotos.module#FotosPageModule', name: 'FotosPage', segment: 'fotos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-config/modal-config.module#ModalConfigPageModule', name: 'ModalConfigPage', segment: 'modal-config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-clientes/modal-clientes.module#ModalClientesPageModule', name: 'ModalClientesPage', segment: 'modal-clientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projetos/adm-projeto/adm-projeto.module#AdmProjetoPageModule', name: 'AdmProjetoPage', segment: 'adm-projeto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projetos/cadastro-projeto/cadastro-projeto.module#CadastroProjetoPageModule', name: 'CadastroProjetoPage', segment: 'cadastro-projeto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projetos/detalhe-projeto/detalhe-projeto.module#DetalheProjetoPageModule', name: 'DetalheProjetoPage', segment: 'detalhe-projeto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projetos/projetos.module#ProjetosPageModule', name: 'ProjetosPage', segment: 'projetos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teset-input/teset-input.module#TesetInputPageModule', name: 'TesetInputPage', segment: 'teset-input', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/testes/testes.module#TestesPageModule', name: 'TestesPage', segment: 'testes', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_23__providers_contrato_contrato__["a" /* ContratoProvider */]
                //BrMaskerIonicServices3
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 174,
	"./af.js": 174,
	"./ar": 175,
	"./ar-dz": 176,
	"./ar-dz.js": 176,
	"./ar-kw": 177,
	"./ar-kw.js": 177,
	"./ar-ly": 178,
	"./ar-ly.js": 178,
	"./ar-ma": 179,
	"./ar-ma.js": 179,
	"./ar-sa": 180,
	"./ar-sa.js": 180,
	"./ar-tn": 181,
	"./ar-tn.js": 181,
	"./ar.js": 175,
	"./az": 182,
	"./az.js": 182,
	"./be": 183,
	"./be.js": 183,
	"./bg": 184,
	"./bg.js": 184,
	"./bm": 185,
	"./bm.js": 185,
	"./bn": 186,
	"./bn.js": 186,
	"./bo": 187,
	"./bo.js": 187,
	"./br": 188,
	"./br.js": 188,
	"./bs": 189,
	"./bs.js": 189,
	"./ca": 190,
	"./ca.js": 190,
	"./cs": 191,
	"./cs.js": 191,
	"./cv": 192,
	"./cv.js": 192,
	"./cy": 193,
	"./cy.js": 193,
	"./da": 194,
	"./da.js": 194,
	"./de": 195,
	"./de-at": 196,
	"./de-at.js": 196,
	"./de-ch": 197,
	"./de-ch.js": 197,
	"./de.js": 195,
	"./dv": 198,
	"./dv.js": 198,
	"./el": 199,
	"./el.js": 199,
	"./en-SG": 200,
	"./en-SG.js": 200,
	"./en-au": 201,
	"./en-au.js": 201,
	"./en-ca": 202,
	"./en-ca.js": 202,
	"./en-gb": 203,
	"./en-gb.js": 203,
	"./en-ie": 204,
	"./en-ie.js": 204,
	"./en-il": 205,
	"./en-il.js": 205,
	"./en-nz": 206,
	"./en-nz.js": 206,
	"./eo": 207,
	"./eo.js": 207,
	"./es": 208,
	"./es-do": 209,
	"./es-do.js": 209,
	"./es-us": 210,
	"./es-us.js": 210,
	"./es.js": 208,
	"./et": 211,
	"./et.js": 211,
	"./eu": 212,
	"./eu.js": 212,
	"./fa": 213,
	"./fa.js": 213,
	"./fi": 214,
	"./fi.js": 214,
	"./fo": 215,
	"./fo.js": 215,
	"./fr": 216,
	"./fr-ca": 217,
	"./fr-ca.js": 217,
	"./fr-ch": 218,
	"./fr-ch.js": 218,
	"./fr.js": 216,
	"./fy": 219,
	"./fy.js": 219,
	"./ga": 220,
	"./ga.js": 220,
	"./gd": 221,
	"./gd.js": 221,
	"./gl": 222,
	"./gl.js": 222,
	"./gom-latn": 223,
	"./gom-latn.js": 223,
	"./gu": 224,
	"./gu.js": 224,
	"./he": 225,
	"./he.js": 225,
	"./hi": 226,
	"./hi.js": 226,
	"./hr": 227,
	"./hr.js": 227,
	"./hu": 228,
	"./hu.js": 228,
	"./hy-am": 229,
	"./hy-am.js": 229,
	"./id": 230,
	"./id.js": 230,
	"./is": 231,
	"./is.js": 231,
	"./it": 232,
	"./it-ch": 233,
	"./it-ch.js": 233,
	"./it.js": 232,
	"./ja": 234,
	"./ja.js": 234,
	"./jv": 235,
	"./jv.js": 235,
	"./ka": 236,
	"./ka.js": 236,
	"./kk": 237,
	"./kk.js": 237,
	"./km": 238,
	"./km.js": 238,
	"./kn": 239,
	"./kn.js": 239,
	"./ko": 240,
	"./ko.js": 240,
	"./ku": 241,
	"./ku.js": 241,
	"./ky": 242,
	"./ky.js": 242,
	"./lb": 243,
	"./lb.js": 243,
	"./lo": 244,
	"./lo.js": 244,
	"./lt": 245,
	"./lt.js": 245,
	"./lv": 246,
	"./lv.js": 246,
	"./me": 247,
	"./me.js": 247,
	"./mi": 248,
	"./mi.js": 248,
	"./mk": 249,
	"./mk.js": 249,
	"./ml": 250,
	"./ml.js": 250,
	"./mn": 251,
	"./mn.js": 251,
	"./mr": 252,
	"./mr.js": 252,
	"./ms": 253,
	"./ms-my": 254,
	"./ms-my.js": 254,
	"./ms.js": 253,
	"./mt": 255,
	"./mt.js": 255,
	"./my": 256,
	"./my.js": 256,
	"./nb": 257,
	"./nb.js": 257,
	"./ne": 258,
	"./ne.js": 258,
	"./nl": 259,
	"./nl-be": 260,
	"./nl-be.js": 260,
	"./nl.js": 259,
	"./nn": 261,
	"./nn.js": 261,
	"./pa-in": 262,
	"./pa-in.js": 262,
	"./pl": 263,
	"./pl.js": 263,
	"./pt": 264,
	"./pt-br": 265,
	"./pt-br.js": 265,
	"./pt.js": 264,
	"./ro": 266,
	"./ro.js": 266,
	"./ru": 267,
	"./ru.js": 267,
	"./sd": 268,
	"./sd.js": 268,
	"./se": 269,
	"./se.js": 269,
	"./si": 270,
	"./si.js": 270,
	"./sk": 271,
	"./sk.js": 271,
	"./sl": 272,
	"./sl.js": 272,
	"./sq": 273,
	"./sq.js": 273,
	"./sr": 274,
	"./sr-cyrl": 275,
	"./sr-cyrl.js": 275,
	"./sr.js": 274,
	"./ss": 276,
	"./ss.js": 276,
	"./sv": 277,
	"./sv.js": 277,
	"./sw": 278,
	"./sw.js": 278,
	"./ta": 279,
	"./ta.js": 279,
	"./te": 280,
	"./te.js": 280,
	"./tet": 281,
	"./tet.js": 281,
	"./tg": 282,
	"./tg.js": 282,
	"./th": 283,
	"./th.js": 283,
	"./tl-ph": 284,
	"./tl-ph.js": 284,
	"./tlh": 285,
	"./tlh.js": 285,
	"./tr": 286,
	"./tr.js": 286,
	"./tzl": 287,
	"./tzl.js": 287,
	"./tzm": 288,
	"./tzm-latn": 289,
	"./tzm-latn.js": 289,
	"./tzm.js": 288,
	"./ug-cn": 290,
	"./ug-cn.js": 290,
	"./uk": 291,
	"./uk.js": 291,
	"./ur": 292,
	"./ur.js": 292,
	"./uz": 293,
	"./uz-latn": 294,
	"./uz-latn.js": 294,
	"./uz.js": 293,
	"./vi": 295,
	"./vi.js": 295,
	"./x-pseudo": 296,
	"./x-pseudo.js": 296,
	"./yo": 297,
	"./yo.js": 297,
	"./zh-cn": 298,
	"./zh-cn.js": 298,
	"./zh-hk": 299,
	"./zh-hk.js": 299,
	"./zh-tw": 300,
	"./zh-tw.js": 300
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
webpackContext.id = 413;

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__ = __webpack_require__(57);
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

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner_spinner__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__network_network__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usuario_usuario__ = __webpack_require__(57);
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

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_helpers_configHelper__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_base_providerBase__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_http__ = __webpack_require__(51);
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

/***/ 85:
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

},[353]);
//# sourceMappingURL=main.js.map