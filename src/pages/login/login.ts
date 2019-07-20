import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Events } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { configHelper } from '../../app/helpers/configHelper';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  form: any ={

  }
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public usuarioSrvc: UsuarioProvider,
     public events: Events
     ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  async login(): Promise<void> {

    this.navCtrl.setRoot(this.navCtrl.getActive().component);  

    let result = await this.usuarioSrvc.autenticate(this.form.email, this.form.senha);
    console.log('Teste',result);
    if(result.success){
      UsuarioProvider.RegisterLogin(result.data);
      this.navCtrl.setRoot('TabsPage')
    }

  }

  cadastroUser(){
    this.navCtrl.setRoot('CadastroUserPage')
  }


}
