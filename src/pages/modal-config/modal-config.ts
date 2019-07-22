import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { configHelper } from '../../app/helpers/configHelper';
import { usuarioModel } from '../../app/models/usuarioModel';
import * as moment from 'moment';
import { AlertProvider } from '../../providers/alert/alert';

/**
 * Generated class for the ModalConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-config',
  templateUrl: 'modal-config.html',
})
export class ModalConfigPage implements OnInit{
  usuario = new usuarioModel(); //Array<usuarioModel> = new Array<usuarioModel>();

  tema: string = localStorage.getItem(configHelper.storageKeys.color);
  

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private usuarioSrvc: UsuarioProvider,
     private viewCtrl: ViewController,
     private events: Events,
     private alertSrvc: AlertProvider
     ) {
  }

 ngOnInit(): void {
   this.usuarioLogado();
   if(!this.tema){
    this.tema ='#527F76';
}else if(this.tema == 'blue'){
  this.tema = 'Navy';
}
 }

  
  async usuarioLogado(): Promise<void>{
    let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
  let result = await this.usuarioSrvc.getByIdUser(user._id);
  if(result.success){
    this.usuario = result.data;
    console.log('App .component', this.usuario)
      this.usuario.dataCriacao = moment(this.usuario.dataCriacao).format("DD/MM/YYYY");
  
  }
}

async delete(): Promise<void>{
  let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
  this.alertSrvc.confirm('Excluir ?',' Ao confirmar todos seus dados serão perdidos.', async ()=>{
      let result = await this.usuarioSrvc.delete(user._id);
      localStorage.setItem(configHelper.storageKeys.token, null);
  localStorage.setItem(configHelper.storageKeys.user, null);
      if(result.success){
        this.alertSrvc.toast('Conta excluida com sucesso.', 'bottom');
        this.navCtrl.setRoot('LoginPage');
      }
  });
}

theme(item: string){
  console.log(item);
  localStorage.setItem(configHelper.storageKeys.color, item);
  this.tema = localStorage.getItem(configHelper.storageKeys.color);
  console.log(this.tema);
  this.events.publish(configHelper.Events.changeColor, {});

  if(!this.tema){
      this.tema ='#527F76';
  }else if(this.tema == 'blue'){
    this.tema = 'Navy';
  }

  this.viewCtrl.dismiss();
}

logout(){
  localStorage.setItem(configHelper.storageKeys.token, null);
  localStorage.setItem(configHelper.storageKeys.user, null);
  this.navCtrl.setRoot('LoginPage');
    
  }

back(){
  this.viewCtrl.dismiss();
}

}
