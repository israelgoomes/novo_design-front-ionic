import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, ModalController, Events } from 'ionic-angular';
import { ProjetosProvider } from '../../../providers/projetos/projetos';
import { AlertProvider } from '../../../providers/alert/alert';
import { projetoModel } from '../../../app/models/projetoModel';
import { CameraProvider } from '../../../providers/camera/camera';
import { ClientesProvider } from '../../../providers/clientes/clientes';
import { clienteModel } from '../../../app/models/clienteModel';
import { configHelper } from '../../../app/helpers/configHelper';


@IonicPage()
@Component({
  selector: 'page-cadastro-projeto',
  templateUrl: 'cadastro-projeto.html',
})
export class CadastroProjetoPage implements OnInit{
  foto = []
projeto: projetoModel;
clientes: Array<clienteModel> = new Array<clienteModel>();
cliente = []
theme: string;
disableButton: boolean = false;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private projetoSrvc: ProjetosProvider,
    private alertSrvc: AlertProvider,
    private platform: Platform,
    private actionSheetCtrl: ActionSheetController,
    private cameraSrvc: CameraProvider,
    private clientesSrvc: ClientesProvider,
    private modalCtrl: ModalController,
    private events: Events
    
    ) { 
      
      let projeto = this.navParams.get('_projeto');
      if(projeto){
        this.projeto = <projetoModel>projeto
        if(!this.projeto)
        this.projeto.cliente = projeto.cliente._id;
      }else {
      //  this.projeto.cliente = this.projeto._id
        this.projeto = new projetoModel();
      }
      this.loadCliente();
  }

ngOnInit():void {
  this.eventChangeColor();
  this.theme = localStorage.getItem(configHelper.storageKeys.color);
  if(this.theme == "#527F76"){
    this.theme = 'primary'
  }else if(!this.theme){
    this.theme = 'primary'
  }
           if(this.projeto.tituloProjeto == undefined){
              //this.cliente.nome = this.projeto.nome
            }
}

enableButton() {
  if(this.projeto.tituloProjeto && this.projeto.descricaoProjeto && this.projeto.preco){
    this.disableButton = true;
  }else{
    this.disableButton = false;

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

openClientOption(){
  const modal = this.modalCtrl.create(
    'ModalClientesPage' , {_cliente: this.clientes});
    modal.present();

    modal.onDidDismiss(data => {
      try {
        console.log('Retorno do Modal',data.cliente);
        this.cliente = data.cliente;
        this.projeto.cliente = data.cliente._id;
        //this.projeto = data.cliente;
        console.log('Verificando o valor de projeto', this.projeto.cliente)
      } catch (error) {
        this.alertSrvc.toast('Nenhum cliente escolhido.', 'top')
      }
    
      
    })
}


async loadCliente(): Promise<void> {
  let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
    console.log('Usuário logado',user)
  try {
    let result = await this.clientesSrvc.clientebyIdUser(user._id);
    if (result.success) {
      this.clientes = <Array<clienteModel>>result.data;
      console.log("projeto pertencente pertencentes ao usuario logado", this.clientes);
    }
  } catch (error) {}
}


async salvar(): Promise<void> {
  this.projeto.foto = this.foto;
  let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
  console.log('Usuário logado em projetos',user)
  this.projeto.usuario = user._id;
  let sucesso = false;
  if(!this.projeto._id){
    let cadastroResult = await this.projetoSrvc.post(this.projeto)
    sucesso = cadastroResult.success;
  }
  if(sucesso){
    this.alertSrvc.toast('Projeto salvo com sucesso', 'bottom');
    this.navCtrl.setRoot('ProjetosPage');
  }
}

getPictureOptions(): void {
  //actionSheet serve para aparecer as opções, se a foto será escolhida na galeria ou tirada na hora.
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Adicionar foto',
    buttons: [
      { text: 'Tirar foto', handler: () => {
        //escolhendo a opção de tirar foto no cameraprovider que foi criado, e assumindo o valor da photo para o projeto.foto
        this.cameraSrvc.takePicture((photo) =>{
          this.foto.push(photo);
          this.projeto.foto = this.foto;

        })

      }, 
      icon: this.platform.is('ios') ? null : 'camera' },
//------------------------ Opção pegar da galeria ------------
      { text: 'Pegar galeria', handler: () =>{
        
        this.cameraSrvc.getPictureFromGalery(photo =>{
          this.foto.push(photo);
          this.projeto.foto = this.foto;

        } )

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



}
