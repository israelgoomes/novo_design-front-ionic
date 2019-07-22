import { AlertProvider } from './../../../providers/alert/alert';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ClientesProvider } from '../../../providers/clientes/clientes';
import { clienteModel } from '../../../app/models/clienteModel';
import { configHelper } from '../../../app/helpers/configHelper';


@IonicPage()
@Component({
  selector: 'page-cadastro-cliente',
  templateUrl: 'cadastro-cliente.html',
})
export class CadastroClientePage implements OnInit{
  theme: string;
  cliente: clienteModel;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private clienteSrvc: ClientesProvider,
    private alertSrvc: AlertProvider,
    private events: Events
    ) {
      let _client = this.navParams.get('_cliente');
      if(_client){
          this.cliente = <clienteModel>_client
      }else {
        this.cliente = new clienteModel();
      }
  }

ngOnInit(){
  this.eventChangeColor();
  this.theme = localStorage.getItem(configHelper.storageKeys.color);
  if(this.theme == "#527F76"){
    this.theme = 'primary'
  }else if(!this.theme){
    this.theme = 'primary'
  }
}

  async salvar(): Promise<void>{
    let sucesso = false;
    let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
    console.log('Usuário logado',user)
    this.cliente.usuario = user._id
      if(!this.cliente._id){
    let cadastroResult = await this.clienteSrvc.post(this.cliente);
    this.events.publish(configHelper.Events.atualizaEmailByCliente);
    sucesso = cadastroResult.success;
    console.log('Sem id')

      }
  
    if(sucesso){
      this.alertSrvc.toast('Cliente salva com sucesso', 'bottom');
      this.navCtrl.setRoot('ClientesPage')
    }
}

eventChangeColor(){
  this.events.subscribe(configHelper.Events.changeColor, ()=>{
    this.menuController();
       })
}

menuController(){
  this.theme = localStorage.getItem(configHelper.storageKeys.color);
  if(this.theme == "#527F76"){
    this.theme = 'primary'
  }
}


back(){
  this.navCtrl.pop();
}

/*
  ionViewDidLoad() {
    let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
    console.log('Usuário logado',user._id)
    console.log('ionViewDidLoad CadastroClientePage');
  }*/

}
