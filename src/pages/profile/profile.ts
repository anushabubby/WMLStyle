import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController){
        let loader = this.loadingCtrl.create({
          content: "Please wait...",
          duration: 500
        });
        loader.present();
  }
  goToWelcomePage(){
    this.navCtrl.push(WelcomePage);
  }

}
