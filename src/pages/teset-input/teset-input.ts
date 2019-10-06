import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TesteModel } from '../../app/models/testesModel';
import { elementoAco } from '../../app/models/TesteElementosModel';
import { clienteModel } from '../../app/models/clienteModel';

/**
 * Generated class for the TesetInputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teset-input',
  templateUrl: 'teset-input.html',
})
export class TesetInputPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  @Input() cliente: clienteModel;
  //@Input() listaElementos: elementoAco;

  ionViewDidLoad() {
    console.log('ionViewDidLoad TesetInputPage');
  }

}
