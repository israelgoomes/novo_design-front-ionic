import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientesPage } from './clientes';
//import { PipesModule } from '../../pipes/pipes.module';
import { SearchPipe } from '../../pipes/search/search';
@NgModule({
  declarations: [
    ClientesPage,
    SearchPipe
  ],
  imports: [
    //PipesModule,
    IonicPageModule.forChild(ClientesPage),
  ],
})
export class ClientesPageModule {}
