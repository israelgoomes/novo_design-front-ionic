import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { ClientesPage } from './clientes';
//import { SearchPipe } from '../../pipes/search/search';
import { PipesModule } from '../../pipes/pipes.module';
import { MyApp } from '../../app/app.component';

@NgModule({
  declarations: [
    ClientesPage,
    //SearchPipe
  ],
  imports: [
    PipesModule,
    //IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(ClientesPage),
  ],
  entryComponents: [
  ],
})
export class ClientesPageModule {}
