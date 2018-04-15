import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-getStarted',
  templateUrl: 'getStarted.html'
})
export class GetStartedPage {

  constructor(public navCtrl: NavController) {
  }

  setProfile(){
    this.navCtrl.push(ProfilePage);
  }

}
