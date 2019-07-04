import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroClientePage } from './cadastro-cliente';
import {BrMaskerModule} from 'brmasker-ionic-3';
@NgModule({
  declarations: [
    CadastroClientePage,
  ],
  imports: [
    BrMaskerModule,
    IonicPageModule.forChild(CadastroClientePage),
  ],
})
export class CadastroClientePageModule {}
