import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { clienteModel } from '../../app/models/clienteModel';

/**
 * Generated class for the ModalClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-clientes',
  templateUrl: 'modal-clientes.html',
})
export class ModalClientesPage {
@Input() cliente = []
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.cliente = this.navParams.get('_cliente')
  }

  ionViewDidLoad() {
    console.log(this.cliente)
    console.log('ionViewDidLoad ModalClientesPage');
  }

  saveClient(client: clienteModel){
  this.viewCtrl.dismiss({cliente: client});
  console.log('Enviando do modal', client)
    
    }

}
