import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjetosPage } from './projetos';
import { SearchPipe } from '../../pipes/search/search';

@NgModule({
  declarations: [
    ProjetosPage,

  ],
  imports: [
    IonicPageModule.forChild(ProjetosPage),
  ],
})
export class ProjetosPageModule {}
