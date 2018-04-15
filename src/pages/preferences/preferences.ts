import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html'
})
export class PreferencesPage {
  choice: string = "allergies";
  items: number[] = Array.from(Array(13).keys());
  pantSizes: string[] = ["30*30", "30*31", "30*32", "31*30", "32*30", "33*33"];
  shirtSizes: string[] = ["Small", "Medium", "Large", "XL", "XXL", "XXXL"]

  constructor(public navCtrl: NavController) {
  }

  skipAllergies(){
    this.choice = 'style';
  }
  skipStyle(){
    this.choice = 'lifeStyle';
  }

}

