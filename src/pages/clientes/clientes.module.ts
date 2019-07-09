import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientesPage } from './clientes';
//import { SearchPipe } from '../../pipes/search/search';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    ClientesPage,
    //SearchPipe
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ClientesPage),
  ],
})
export class ClientesPageModule {}
