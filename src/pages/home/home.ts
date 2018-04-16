import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LandingViewPage } from '../landingView/landingView';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  goToLandingView(value: string){
    switch(value){
      case 'theme':{
        this.navCtrl.setRoot(LandingViewPage,{lView:"theme"});
        break;
      }
      case 'recepie':{
        this.navCtrl.setRoot(LandingViewPage,{lView:"recepie"});
        break;
      }
      case 'electronics':{
        this.navCtrl.setRoot(LandingViewPage,{lView:"electronics"});
        break;
      }
      default:{
        this.navCtrl.setRoot(LandingViewPage,{lView:"electronics"});
        break;
      }
    }
  }
}
