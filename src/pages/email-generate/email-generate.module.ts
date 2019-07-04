import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailGeneratePage } from './email-generate';

@NgModule({
  declarations: [
    EmailGeneratePage,
  ],
  imports: [
    IonicPageModule.forChild(EmailGeneratePage),
  ],
})
export class EmailGeneratePageModule {}
