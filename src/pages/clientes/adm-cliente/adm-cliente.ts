import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { clienteModel } from '../../../app/models/clienteModel';
import { ClientesProvider } from '../../../providers/clientes/clientes';
import { AlertProvider } from '../../../providers/alert/alert';
import { configHelper } from '../../../app/helpers/configHelper';

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
export class AdmClientePage implements OnInit{
  cliente: clienteModel;
  theme: string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public clienteSrvc: ClientesProvider,
    public alertSrvc: AlertProvider,
    private events: Events
    ) {
      this.cliente = this.navParams.get('_cliente')

      
  
      //this.cliente = <Array<clienteModel>>this.navParams.get('_cliente')
  }

ngOnInit(): void {
  this.eventChangeColor();
  this.theme = localStorage.getItem(configHelper.storageKeys.color);
  if(this.theme == "#527F76"){
    this.theme = 'primary'
  }else if(!this.theme){
    this.theme = 'primary'
  }
}


eventChangeColor(){
  this.events.subscribe(configHelper.Events.changeColor, ()=>{
    this.menuController();
       })
}

menuController(){
  this.theme = localStorage.getItem(configHelper.storageKeys.color);
  if(this.theme == "#527F76"){
    this.theme = 'primary'
  }
}

  async alterar(): Promise<void>{
    let sucesso = false
    
    //this.cliente = this.navParams.get('_cliente')
    
    if(this.cliente._id){
    //passando o id e o modelo.
    let updateResult= await this.clienteSrvc.put(this.cliente._id, this.cliente)
    sucesso = updateResult.success;
    }
if(sucesso){
this.alertSrvc.toast('Cliente salva com sucesso', 'bottom');
this.navCtrl.setRoot('ClientesPage')
}
  }

  cancelar(){
    this.navCtrl.pop();
  }
/*
  ionViewDidLoad() {
    this.cliente = this.navParams.get('_cliente')

    console.log('ionViewDidLoad AdmClientePage');
    console.log('Recebendo cliente', this.cliente);
  }*/

}
