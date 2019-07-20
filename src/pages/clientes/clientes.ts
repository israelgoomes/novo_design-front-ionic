import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, MenuController, Events } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { clienteModel } from '../../app/models/clienteModel';
import { configHelper } from '../../app/helpers/configHelper';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { usuarioModel } from '../../app/models/usuarioModel';

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage implements OnInit{
  @ViewChild(Content) content: Content;

  listaClientes: Array<clienteModel> = new Array<clienteModel>();
  usuario: Array<usuarioModel> = new Array<usuarioModel>();
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public clienteSrvc: ClientesProvider,
    private usuarioSrvc: UsuarioProvider, 
    private menuCtrl: MenuController,
    private events: Events

    ) {

      this.load();
     // this.usuarioLogado();
  }

 abrirDetalheClientePage(cliente: clienteModel) {
   /** enviando pelo localStorage
  localStorage.setItem(configHelper.storageKeys.selectClient, JSON.stringify(cliente));
  */
  const modal =  this.modalCtrl.create('DetalheClientePage', {
    cliente: cliente
  });
  modal.present();
}



async load(): Promise<void> {
//this.events.publish(configHelper.Events.atualizacaoUserMenu, {});
  let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
    console.log('Usuário logado',user)
  try {
    let result = await this.clienteSrvc.clientebyIdUser(user._id);
    if (result.success) {
      this.listaClientes = <Array<clienteModel>>result.data;
   
      console.log("Cliente pertencentes ao usuario logado", this.listaClientes);
    }
  } catch (error) {}
}

/*
async usuarioLogado(): Promise<void>{
  //this.events.publish(configHelper.Events.atualizacaoUserMenu, {});
  let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
let result = await this.usuarioSrvc.getByIdUser(user._id);
if(result.success){
  this.usuario = <Array<usuarioModel>>result.data;
  console.log('Usuario Logado pelo método', this.usuario)
}
}*/

/*
private async _loadCliente(): Promise<void>{
  try {
    let clientResult = await this.clienteSrvc.get();
    if(clientResult.success){
      this.listaClientes = <Array<clienteModel>>clientResult.data;
    }
  } catch (error) {
    console.log('Problema ao carregar os clientes', error)
  }

}*/


 ngOnInit():void{
  this.events.publish(configHelper.Events.atualizacaoUserMenu, {});
   let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
   console.log('usuario Logado', user )
}

ionViewWillEnter(){
  
  this.load();
  //this.usuarioLogado();
}

abrirCadastro(model?: clienteModel){
  this.navCtrl.push('CadastroClientePage', {cliente: model})

}
abrirDetalheCliente(model?: clienteModel){
  this.navCtrl.push('DetalheClientePage', {cliente: model})
  
}
  
menu(){
  this.navCtrl.setRoot('MenuPage')
}
  abrirPdf(){
    this.navCtrl.setRoot('ContratoPage')
  }
  logout(){
  localStorage.setItem(configHelper.storageKeys.token, null);
  localStorage.setItem(configHelper.storageKeys.user, null);
    this.navCtrl.setRoot('LoginPage')
  }

  

}
