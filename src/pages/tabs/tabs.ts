import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { configHelper } from '../../app/helpers/configHelper';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
userOn: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let user = localStorage.getItem(configHelper.storageKeys.user);
if(user){
  this.userOn = true;
}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
