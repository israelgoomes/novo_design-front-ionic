import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, ModalController } from 'ionic-angular';
import { ProjetosProvider } from '../../../providers/projetos/projetos';
import { AlertProvider } from '../../../providers/alert/alert';
import { projetoModel } from '../../../app/models/projetoModel';
import { CameraProvider } from '../../../providers/camera/camera';
import { ClientesProvider } from '../../../providers/clientes/clientes';
import { clienteModel } from '../../../app/models/clienteModel';


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
  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private projetoSrvc: ProjetosProvider,
    private alertSrvc: AlertProvider,
    private platform: Platform,
    private actionSheetCtrl: ActionSheetController,
    private cameraSrvc: CameraProvider,
    private clientesSrvc: ClientesProvider,
    private modalCtrl: ModalController
    
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
 
 if(this.projeto.tituloProjeto == undefined){
    //this.cliente.nome = this.projeto.nome
  
  }
}


openClientOption(){
  const modal = this.modalCtrl.create(
    'ModalClientesPage' , {_cliente: this.clientes});
    modal.present();

    modal.onDidDismiss(data => {
      console.log('Retorno do Modal',data.cliente);
      this.cliente = data.cliente;
      this.projeto.cliente = data.cliente._id;
      //this.projeto = data.cliente;
      console.log('Verificando o valor de projeto', this.projeto.cliente)
    })
}

async loadCliente(): Promise<void>{
  try {
    let result = await this.clientesSrvc.get();
    if(result.success){
      this.clientes = <Array<clienteModel>>result.data;
    }  
    console.log('Clientes', this.clientes)
  } catch (error) {
    console.log("Erro na tela projetos", error);
  }
  
}

async salvar(): Promise<void> {
  this.projeto.foto = this.foto;

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

  ionViewDidLoad() {
    console.log('Todas fotos', this.projeto.foto)
    console.log('ionViewDidLoad CadastroProjetoPage');
  }

}
