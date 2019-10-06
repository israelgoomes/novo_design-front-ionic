import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientesPage } from './clientes';
//import { SearchPipe } from '../../pipes/search/search';
import { PipesModule } from '../../pipes/pipes.module';
import { TesetInputPage } from '../teset-input/teset-input';


@NgModule({
  declarations: [
    TesetInputPage,
    ClientesPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ClientesPage),
  ],
  entryComponents: [
  ],
})
export class ClientesPageModule {}
