import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { clienteModel } from '../../app/models/clienteModel';
import { configHelper } from '../../app/helpers/configHelper';

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

  listaClientes: Array<clienteModel> = new Array<clienteModel>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public clienteSrvc: ClientesProvider

    ) {
      this._loadCliente();
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

private async _loadCliente(): Promise<void>{
  try {
    let clientResult = await this.clienteSrvc.get();
    if(clientResult.success){
      this.listaClientes = <Array<clienteModel>>clientResult.data;
    }
  } catch (error) {
    console.log('Problema ao carregar os clientes', error)
  }

}


 ngOnInit():void{
   let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
   console.log('usuario Logado', user )
  
}

abrirCadastro(model?: clienteModel){
  this.navCtrl.push('CadastroClientePage', {cliente: model})

}
abrirDetalheCliente(model?: clienteModel){
  this.navCtrl.push('DetalheClientePage', {cliente: model})
  
}
  ionViewDidLoad() {

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
