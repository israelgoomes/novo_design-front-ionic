import { Component, OnInit, ViewChild, TestabilityRegistry } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Content,
  Events
} from "ionic-angular";
import { ModalController } from "ionic-angular";
import { ClientesProvider } from "../../providers/clientes/clientes";
import { clienteModel } from "../../app/models/clienteModel";
import { configHelper } from "../../app/helpers/configHelper";
import { usuarioModel } from "../../app/models/usuarioModel";
import { AppVersion } from "@ionic-native/app-version";
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Componentes } from './ComponenteTo';


@IonicPage()
@Component({
  selector: "page-clientes",
  templateUrl: "clientes.html"
})
export class ClientesPage implements OnInit {
  @ViewChild(Content) content: Content;

lista: Array<any>= [];
lista2: Array<Componentes>= [];

theme: string;
class = 'primary';
input: any ={}
formGroup: FormGroup;
nmFornecedor: AbstractControl;
input1: any = {}
disableButton: boolean = false;
  listaClientes: Array<clienteModel> = new Array<clienteModel>();
  usuario: Array<usuarioModel> = new Array<usuarioModel>();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public clienteSrvc: ClientesProvider,
    private events: Events,
    private appVersion: AppVersion,
    private formBuilder: FormBuilder
  ) {
//-----------------------------------Form Builder -------------------------------
this.formGroup = formBuilder.group({
  nmFornecedor: ['', Validators.minLength(5)]
})
this.nmFornecedor = this.formGroup.controls['nmFornecedor']


    console.log("Versão do aplicativo", this.appVersion.getVersionNumber());
    console.log("Versão do aplicativo", this.appVersion.getAppName());

    this.load();
    this.loadEvent();
  }

teste(){
  console.log('Teste de form Group: ', this.input1.buscar)
}

enableButton() {
  if(this.input1.buscar && this.input1.nome){
    this.disableButton = true;
  }else{
    this.disableButton = false;

  }
}
//------------------------------- FIM ---------------------------------------------
  abrirDetalheClientePage(cliente: clienteModel) {
    const modal = this.modalCtrl.create("DetalheClientePage", {
      cliente: cliente
    });
    modal.present();
  }

  async load(): Promise<void> {
    let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
    console.log("Usuário logado", user);
    try {
      let result = await this.clienteSrvc.clientebyIdUser(user._id);
      if (result.success) {
        this.listaClientes = <Array<clienteModel>>result.data;

        console.log(
          "Cliente pertencentes ao usuario logado",
          this.listaClientes
        );
      }
    } catch (error) {}
  }

  ngOnInit(): void {
    this.populaLista();
    console.log('Formulario: ',this.formGroup.valid)
    this.events.publish(configHelper.Events.atualizacaoUserMenu, {});
    let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
    this.theme = localStorage.getItem(configHelper.storageKeys.color);

    if(this.theme == "#527F76"){
      this.theme = 'primary'
    }else if(!this.theme){
      this.theme = 'primary'
    }
    this.eventChangeColor();

  }

  abrirCadastro(model?: clienteModel) {
    this.navCtrl.push("CadastroClientePage", { cliente: model });
  }
  abrirDetalheCliente(model?: clienteModel) {
    this.navCtrl.push("DetalheClientePage", { cliente: model });
  }

  private loadEvent() {
    this.events.subscribe(configHelper.Events.atualizaClienteByProjetos, () => {
      this.load();
    });
  }

  eventChangeColor(){
    this.events.subscribe(configHelper.Events.changeColor, ()=>{
      this.menuController();
       console.log('Menu adicionado', this.class);
         })
  }

  menuController(){
    this.theme = localStorage.getItem(configHelper.storageKeys.color);
    if(this.theme == "#527F76"){
      this.theme = 'primary'
    }
  }
onChange(event){
  console.log("Exibidno evento", event)
}

  abrirPdf() {
    this.navCtrl.setRoot("ContratoPage");
  }
  logout() {
    localStorage.setItem(configHelper.storageKeys.token, null);
    localStorage.setItem(configHelper.storageKeys.user, null);
    this.navCtrl.setRoot("LoginPage");
  }

teste2(){
  let lista3: Array<Componentes> = [];
 // 
    console.log('Entrou no 1 foreach')
    this.lista.forEach((i)=>{
     // this.lista2.push(i);
     // this.lista2.forEach((v)=>{
      //console.log('Entrou no 2 foreach')
    //console.log('vl maximo' , i.vlMaximo)

   
    //v.vlObjetivadoMaximo = i.vlMaximo;
    //v.vlObjetivadoMinimo = i.vlMinimo;
    //v.id = i.id;
    //v.dsComponente = i.dsComponente;
    //
    lista3.push(i);
   
//})

  })

console.log(this.lista)
console.log(this.lista2)
console.log('Lista 3', lista3)

}


populaLista(){
  this.lista.push(
    {id: 2, dsComponente: 'Hidrogenio', vlMinimo: 0.265, vlMaximo: 0.852},
    {id: 3, dsComponente: 'Fósforo', vlMinimo: 0.032, vlMaximo: 0.123},
    {id: 4, dsComponente: 'Hélio', vlMinimo: 0.002, vlMaximo: 0.789},
    {id: 5, dsComponente: 'Maganês', vlMinimo: 0.210, vlMaximo: 0.321},
    {id: 6, dsComponente: 'Hélio', vlMinimo: 0.002, vlMaximo: 0.789},
    {id: 7, dsComponente: 'Hélio', vlMinimo: 0.002, vlMaximo: 0.789},
    {id: 8, dsComponente: 'Hélio', vlMinimo: 0.002, vlMaximo: 0.789},
    {id: 9, dsComponente: 'Hélio', vlMinimo: 0.002, vlMaximo: 0.789},
    {id: 10, dsComponente: 'Hélio', vlMinimo: 0.002, vlMaximo: 0.789},
    {id: 2, dsComponente: 'Hélio', vlMinimo: 0.002, vlMaximo: 0.789},
    {id: 12, dsComponente: 'Hélio', vlMinimo: 0.002, vlMaximo: 0.789},
    {id: 13, dsComponente: 'Hélio', vlMinimo: 0.002, vlMaximo: 0.789},
    {id: 14, dsComponente: 'Hélio', vlMinimo: 0.002, vlMaximo: 0.789},
    {id: 15, dsComponente: 'Hélio', vlMinimo: 0.002, vlMaximo: 0.789},

   // {id: 5, dsComponente: 'Hélio', vlMinimo: 0.002, vlMaximo: 0.789}

    
    );
}

testeItensRepetidos(){
  
  var occurrences = {}
  let teste: boolean = false;
  teste=false
  var filteredFamily = this.lista.filter(function(x) {
    if (occurrences[x.id]) {
      teste = true; 
      console.log('itens repetidos', x.id)
      return;
    }
    occurrences[x.id] = true;
    //teste = false; 
      console.log('itens não repeditos', x.id)

  })
  console.log(teste)
  console.log('Filtrando teste',filteredFamily)
  
  
  
  
  //this.lista = [...new Set(this.lista0.map(a => a.name))];

  console.log(this.lista)
  for ( var i = 0; i < this.lista.length; i++ ) {
    if ( this.lista.indexOf( this.lista[ i ].id ) === this.lista[i].id ) {
      console.log(this.lista[i].id)
    }
}


  this.lista = this.lista.filter(item => !this.lista.filter(item2 => item.id === item2.id))
  console.log('Lista depois do some', this.lista)

var uniqueProducts = this.lista.filter( ( elem, i, array )=> {
 return array.indexOf( elem.id ) === i;

 } );
console.log(uniqueProducts)

}
}
