import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PreferencesPage } from '../preferences/preferences';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {
  }

  gotToKnowYou(){
    this.navCtrl.setRoot(PreferencesPage);
  }

}
