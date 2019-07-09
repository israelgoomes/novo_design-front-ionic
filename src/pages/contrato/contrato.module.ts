import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContratoPage } from './contrato';
import {BrMaskerModule} from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    ContratoPage,
  ],
  imports: [
    BrMaskerModule,
    IonicPageModule.forChild(ContratoPage),
  ],
})
export class ContratoPageModule {}
