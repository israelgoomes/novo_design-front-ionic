import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
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
export class TabsPage implements OnInit{
  theme: string;
userOn: boolean;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public events: Events
     ) {
    let user = localStorage.getItem(configHelper.storageKeys.user);
if(user){
  this.userOn = true;
}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
  eventChangeColor(){
    this.events.subscribe(configHelper.Events.changeColor, ()=>{
      this.menuController();
       console.log('Menu adicionado', this.theme);
         })
  }

  menuController(){
    this.theme = localStorage.getItem(configHelper.storageKeys.color);
    if(this.theme == "#527F76"){
      this.theme = 'primary'
    }
  }
ngOnInit(): void {
  this.theme = localStorage.getItem(configHelper.storageKeys.color);
  this.eventChangeColor();
}
}
