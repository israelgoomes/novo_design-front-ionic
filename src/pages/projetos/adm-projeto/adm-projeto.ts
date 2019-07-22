import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform, Events } from 'ionic-angular';
import { projetoModel } from '../../../app/models/projetoModel';
import { ProjetosProvider } from '../../../providers/projetos/projetos';
import { AlertProvider } from '../../../providers/alert/alert';
import { CameraProvider } from '../../../providers/camera/camera';
import { ClientesProvider } from '../../../providers/clientes/clientes';
import { clienteModel } from '../../../app/models/clienteModel';
import { configHelper } from '../../../app/helpers/configHelper';

@IonicPage()
@Component({
  selector: 'page-adm-projeto',
  templateUrl: 'adm-projeto.html',
})
export class AdmProjetoPage implements OnInit{
projeto: projetoModel;
cliente: clienteModel;
theme: string;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public projetoSrvc: ProjetosProvider,
      public alertSrvc: AlertProvider,
      public cameraSrvc: CameraProvider,
      public actionSheetCtrl: ActionSheetController,
      public platform: Platform,
      private clienteSrvc: ClientesProvider,
      private events: Events,
     ) {
    this.projeto = this.navParams.get('_projeto')
    this.cliente = this.navParams.get('_cliente')
  }


ngOnInit(): void {
  this.eventChangeColor();
  this.theme = localStorage.getItem(configHelper.storageKeys.color);
  if(this.theme == "#527F76"){
    this.theme = 'primary';
  }else if(!this.theme){
    this.theme = 'primary';
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
    this.theme = 'primary';
  }
}

  async alterar(): Promise<void>{
    let sucesso = false
    
    //this.cliente = this.navParams.get('_cliente')
    
    if(this.projeto._id){
    //passando o id e o modelo.
    let updateResult= await this.projetoSrvc.put(this.projeto._id, this.projeto)
    sucesso = updateResult.success;
    }
    if(this.cliente._id){
      let updateResult = await this.clienteSrvc.put(this.cliente._id, this.cliente)
      sucesso = updateResult.success
    }
if(sucesso){
this.alertSrvc.toast('Projeto salvo com sucesso', 'bottom');
this.navCtrl.setRoot('ProjetosPage')
}
this.events.publish(configHelper.Events.atualizaClienteByProjetos);
  }


  getPictureOptions(): void {
    //actionSheet serve para aparecer as opções, se a foto será escolhida na galeria ou tirada na hora.
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Adicionar foto',
      buttons: [
        { text: 'Tirar foto', handler: () => {
          //escolhendo a opção de tirar foto no cameraprovider que foi criado, e assumindo o valor da photo para o projeto.foto
          this.cameraSrvc.takePicture(photo =>{
            this.projeto.foto = photo;
          })
  
        }, 
        icon: this.platform.is('ios') ? null : 'camera' },
  //------------------------ Opção pegar da galeria ------------
        { text: 'Pegar galeria', handler: () =>{
          this.cameraSrvc.getPictureFromGalery(photo =>{
            this.projeto.foto = photo;
          })
  
        }, icon: this.platform.is('ios') ? null : 'images'},
        //o role 'destructive' deixa o botao vermelho
        {text: 'Cancelar', role: 'destructive', 
        icon: this.platform.is('ios') ? null : 'close'
      ,handler: () => {
          //cancela a ação
        }, }
      ]
    });
    actionSheet.present();
  
  }
  cancelar(){
    this.navCtrl.pop();
  }

  

  /*
  ionViewDidLoad() {
    this.projeto = this.navParams.get('_projeto')
    console.log('Recebendo Projeto', this.projeto);
  }*/

}
