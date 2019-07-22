import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    private usuarioSrvc: UsuarioProvider,
    private events: Events,
    private menuCtrl: MenuController
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //let splash = modalCtrl.create(SplashPage);
     // splash.present();
      splashScreen.hide();

      
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
ngOnInit(): void {
this.checkEvent();

}

}
