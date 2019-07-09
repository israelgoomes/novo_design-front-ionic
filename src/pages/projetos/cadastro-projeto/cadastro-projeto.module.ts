import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroProjetoPage } from './cadastro-projeto';
import {BrMaskerModule} from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CadastroProjetoPage,
  ],
  imports: [
    BrMaskerModule,
    IonicPageModule.forChild(CadastroProjetoPage),
  ],
})
export class CadastroProjetoPageModule {}
