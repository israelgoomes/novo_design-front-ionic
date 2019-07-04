import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer} from '@ionic-native/email-composer';


@IonicPage()
@Component({
  selector: 'page-email-generate',
  templateUrl: 'email-generate.html',
})
export class EmailGeneratePage {
subject ='';
body = '';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailGeneratePage');
  }

  sendEmail(){
    let email = {
      to: [
        'rael.lapa@gmail.com', 'rael_goomes@hotmail.com'
      ],
      cc: [],
      bcc: [],
      attachment: [],
      subject: this.subject,
      body: this.body,
      isHtml: false,
      app: 'Gmail'
    }
    this.emailComposer.open(email);
  }

}
