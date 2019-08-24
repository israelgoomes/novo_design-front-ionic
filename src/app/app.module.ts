import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { SpinnerProvider } from '../providers/spinner/spinner';
import { AlertProvider } from '../providers/alert/alert';
import { HttpProvider } from '../providers/http/http';
import { NetworkProvider } from '../providers/network/network';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { HttpClientModule } from '@angular/common/http';
import { ClientesProvider } from '../providers/clientes/clientes';
import { ProjetosProvider } from '../providers/projetos/projetos';
import { CameraProvider } from '../providers/camera/camera';
import { Camera } from '@ionic-native/camera';
import { Network} from '@ionic-native/network'
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { EmailComposer} from '@ionic-native/email-composer';
//import { BrMaskerIonic3 } from 'brmasker-ionic-3';
//import { BrMaskerIonicServices3 } from 'brmasker-ionic-3';
import {BrMaskerModule} from 'brmasker-ionic-3';
//import { PipesModule } from '../pipes/pipes.module';
import { AppVersion } from '@ionic-native/app-version';
import { CalendarModule } from "ion2-calendar";

@NgModule({
  declarations: [
    //BrMaskerIonic3,
    //BrMaskerIonicServices3,
    MyApp,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrMaskerModule,
    CalendarModule,
    //PipesModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpinnerProvider,
    AlertProvider,
    HttpProvider,
    NetworkProvider,
    UsuarioProvider,
    ClientesProvider,
    ProjetosProvider,
    CameraProvider,
    Camera,
    Network,
    File,
    FileOpener,
    AppVersion
    //BrMaskerIonicServices3
    
 
  ]
})
export class AppModule {}
