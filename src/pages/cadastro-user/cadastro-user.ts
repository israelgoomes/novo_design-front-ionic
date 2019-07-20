import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { usuarioModel } from '../../app/models/usuarioModel';
import { AlertProvider } from '../../providers/alert/alert';
import { CameraProvider } from '../../providers/camera/camera';

/**
 * Generated class for the CadastroUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-user',
  templateUrl: 'cadastro-user.html',
})
export class CadastroUserPage {
  usuario: usuarioModel = new usuarioModel();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private usuarioSrvc: UsuarioProvider,
    private alertSrvc: AlertProvider,
    private platform: Platform,
    private actionSheetCtrl: ActionSheetController,
    private cameraSrvc: CameraProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUserPage');
  }


  async cadastrar(): Promise<void>{
    let cadastroResult = await this.usuarioSrvc.register(this.usuario);
    if(cadastroResult.success){
      this.alertSrvc.toast('Cadastro realizado com sucesso', 'bottom');
      this.navCtrl.setRoot('LoginPage')
    }
}


getPictureOptions(): void {
  //actionSheet serve para aparecer as opções, se a foto será escolhida na galeria ou tirada na hora.
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Adicionar foto',
    buttons: [
      { text: 'Tirar foto', handler: () => {
        //escolhendo a opção de tirar foto no cameraprovider que foi criado, e assumindo o valor da photo para o categoria.foto
        this.cameraSrvc.takePicture(photo =>{
          this.usuario.foto = photo;
        })

      }, 
      icon: this.platform.is('ios') ? null : 'camera' },
//------------------------ Opção pegar da galeria ------------
      { text: 'Pegar galeria', handler: () =>{
        this.cameraSrvc.getPictureFromGalery(photo =>{
          this.usuario.foto = photo;
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
  this.navCtrl.setRoot('LoginPage')
}

}
