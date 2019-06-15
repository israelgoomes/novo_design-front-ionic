import { AlertProvider } from './../../../providers/alert/alert';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientesProvider } from '../../../providers/clientes/clientes';
import { clienteModel } from '../../../app/models/clienteModel';
import { shiftInitState } from '@angular/core/src/view';

/**
 * Generated class for the CadastroClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-cliente',
  templateUrl: 'cadastro-cliente.html',
})
export class CadastroClientePage {

  cliente: clienteModel = new clienteModel();
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private clienteSrvc: ClientesProvider,
    private alertSrvc: AlertProvider
    ) {
  }

  async cadastrar(): Promise<void> {
    let sucesso = false;
      let cadastroResult = await this.clienteSrvc.post(this.cliente);
      sucesso = cadastroResult.success;

  }

back(){
  this.navCtrl.pop();
  //ou this.viewCtrl.dismiss();  para isso é necessário inportar o viewcontroller
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroClientePage');
  }

}
