import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { HomePage } from '../home/home';
import {cameraDetails} from "../../assets/data/questionnaire/recipe/xmasRecipe";
import {XmasHolidayPage} from "../xmasHoliday/xmasHoliday";
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-preferences',
  templateUrl: 'xmaspreferences.html'
})
export class XmasPreferencesPage {
  choice: string = "allergies";
  items: number[] = Array.from(Array(13).keys());
  pantSizes: string[] = ["30*30", "30*31", "30*32", "31*30", "32*30", "33*33"];
  shirtSizes: string[] = ["Small", "Medium", "Large", "XL", "XXL", "XXXL"];

  questionnaireDetails: any[] = cameraDetails.Camera.questionnaire;
  questionnaireDetails2: any[] = cameraDetails.Camera.questionnaire2;
  questionnaireDetails3: any[] = cameraDetails.Camera.questionnaire3;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

  skipAllergies(){
    this.choice = 'style';
  }
  skipStyle(){
    this.choice = 'lifeStyle';
  }

  goToHome(){
    // this.navCtrl.setRoot(HomePage);
    this.presentLoading();
    this.navCtrl.setRoot(XmasHolidayPage);
  }

  // constructor(public loadingCtrl: LoadingController) { }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }

}

