import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { clienteModel } from '../../../app/models/clienteModel';

/**
 * Generated class for the DetalheClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-cliente',
  templateUrl: 'detalhe-cliente.html',
})
export class DetalheClientePage implements OnInit{

cliente: clienteModel =  new clienteModel();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheClientePage');
    this.cliente = <clienteModel>this.navParams.get('cliente');
    console.log('Testando cliente', this.cliente)

  }

 detalheCliente: any = []; 
  ngOnInit(): void {
  

    //let clientes = this.navParams.get('clientes');
    //console.log('Teste de clientes para Detalhe Clientes',clientes)
    //this.detalheCliente = clientes;

  }

  back(){
    this.navCtrl.pop();
    //ou this.viewCtrl.dismiss();  para isso é necessário inportar o viewcontroller
  }
}
