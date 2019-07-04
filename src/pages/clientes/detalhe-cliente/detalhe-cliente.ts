import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { clienteModel } from '../../../app/models/clienteModel';
import { ClientesProvider } from '../../../providers/clientes/clientes';
import { AlertProvider } from '../../../providers/alert/alert';

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

cliente: clienteModel;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private clienteSrvc: ClientesProvider,
    private alertSrvc: AlertProvider
    ) {
    let client = this.navParams.get('cliente');
    if(client){
        this.cliente = <clienteModel>client
    }else {
      this.cliente = new clienteModel();
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheClientePage');
    this.cliente = <clienteModel>this.navParams.get('cliente');
    console.log('Testando cliente', this.cliente)

  }

addOrEdit(): void {
    this.navCtrl.push('AdmClientePage', { _cliente: this.cliente });
    console.log('Enviando o cliente', this.cliente)

}
cadastrarProjeto(){
  this.navCtrl.push('CadastroProjetoPage', {_projeto: this.cliente})
}

async deletar(): Promise<void>{
  alert('Deseja deletar esse projeto ?')
  let sucesso = false;
 let result = await this.clienteSrvc.delete(this.cliente._id);
 sucesso = result.success;
  if(sucesso){
    this. alertSrvc.toast('Deletado com sucesso', 'bottom');
    this.navCtrl.setRoot('ClientesPage')
  }
}
gerarContrato(){
this.navCtrl.push('ContratoPage', { _cliente: this.cliente});
}

 detalheCliente: any = []; 
  ngOnInit(): void {
  

  }

  back(){
    this.navCtrl.pop();
  }
}
