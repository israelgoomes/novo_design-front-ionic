import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalClientesPage } from './modal-clientes';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ModalClientesPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ModalClientesPage),
  ],
})
export class ModalClientesPageModule {}
