import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { clienteModel } from '../../../app/models/clienteModel';

/**
 * Generated class for the AdmClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adm-cliente',
  templateUrl: 'adm-cliente.html',
})
export class AdmClientePage {
cliente: Array<clienteModel> = new Array<clienteModel>();
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
/*
      var _client = this.navParams.get('_clientes');
      if(_client){
        this.cliente = <clienteModel>_client
      } else {
        this.cliente = new clienteModel();
      }*/
      this.cliente = <Array<clienteModel>>this.navParams.get('_cliente')
  }

  ionViewDidLoad() {
    let teste = this.navParams.get('_cliente')
    console.log('ionViewDidLoad AdmClientePage');
    console.log('Recebendo cliente',this.cliente.nome);
  }

}
