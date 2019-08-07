import { ModalController } from 'ionic-angular';
import { Component, OnInit, ViewChild, KeyValueDiffers } from '@angular/core';
import { Platform, MenuController, Events, Nav  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { configHelper } from './helpers/configHelper';
import { usuarioModel } from './models/usuarioModel';
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  @ViewChild(Nav) public nav: Nav;
  rootPage:any = UsuarioProvider.isLogado ? 'TabsPage' : 'LoginPage';
  usuario: Array<usuarioModel> = new Array<usuarioModel>();
  theme: string;
class: string;
color: string;
  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, 
    private usuarioSrvc: UsuarioProvider,
    private events: Events,
    private menuCtrl: MenuController,
    private modalCtrl: ModalController
    ) {
  this.initializeApp();
  }

initializeApp(){
  this.platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    //statusBar.styleDefault();
    if (this.platform.is('android')) {
      this.statusBar.backgroundColorByHexString("#33000000");
    }
    //let splash = modalCtrl.create(SplashPage);
   // splash.present();
    this.splashScreen.hide();

    
  });  
}

  async usuarioLogado(): Promise<void>{
    let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
  let result = await this.usuarioSrvc.getByIdUser(user._id);
  if(result.success){
    this.usuario = <Array<usuarioModel>>result.data;
    console.log('App .component', this.usuario)
  }
 
}

openConfigOptions(){
  const modal = this.modalCtrl.create('ModalConfigPage');
    modal.present();

    modal.onDidDismiss(data => {
      try {
       
      } catch (error) {
       
    
      }}) 
    
}


private checkEvent(): void{
  this.events.subscribe(configHelper.Events.atualizacaoUserMenu, ()=>{ 
    this.atualizarUser();
  })

}

async atualizarUser(): Promise<void>{
  let user = JSON.parse(localStorage.getItem(configHelper.storageKeys.user));
  let result = await this.usuarioSrvc.getByIdUser(user._id);
  if(result.success){
    this.usuario = <Array<usuarioModel>>result.data;
  }
}

clientes(){
  this.nav.setRoot('TabsPage')
  this.menuCtrl.close();
}

projetos(){
  this.nav.setRoot('ProjetosPage')
  this.menuCtrl.close();
}

sendEmail(){
  this.nav.setRoot('EmailGeneratePage')
  this.menuCtrl.close();
}

logout(){
  this.menuCtrl.close();
  localStorage.setItem(configHelper.storageKeys.token, null);
  localStorage.setItem(configHelper.storageKeys.user, null);
  this.nav.setRoot('LoginPage');
    
  }

menuController(){
  this.theme = localStorage.getItem(configHelper.storageKeys.color);
  switch(this.theme){
    case 'purple':
      this.class = 'menu-purple';
      break;
    case '#527F76':
      this.class = 'menu-color';
      break;
    case 'blue':
      this.class ='menu-blue';
      break;
    case 'black':
      this.class = 'menu-black';
      break;
    default:
      this.class = 'menu-color';      
      
  }
  if(this.theme == "#527F76"){
    this.theme = 'primary'
  }
}

  eventChangeColor(){
    this.events.subscribe(configHelper.Events.changeColor, ()=>{
     this.menuController();
     this.ngOnInit();
      console.log('Menu adicionado', this.class)
 ;
        })
  }

ngOnInit(): void {
  this.eventChangeColor()
  this.menuController();
this.checkEvent();
this.theme = localStorage.getItem(configHelper.storageKeys.color);
console.log('Tema', this.theme)


switch(this.theme){
  case '527F76':
    this.theme = 'primary';
    break;
  case 'blue':
    this.theme = 'Navy';
    break;
  }



}

}
