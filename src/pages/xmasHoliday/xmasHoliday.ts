import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-preferences',
  templateUrl: 'xmasHoliday.html'
})
export class XmasHolidayPage {
  choice: string = "recipes";
  // items: number[] = Array.from(Array(13).keys());
  // pantSizes: string[] = ["30*30", "30*31", "30*32", "31*30", "32*30", "33*33"];
  // shirtSizes: string[] = ["Small", "Medium", "Large", "XL", "XXL", "XXXL"]

  constructor(public navCtrl: NavController) {
  }

  skipAllergies(){
    this.choice = 'party';
  }
  skipStyle(){
    this.choice = 'gifts';
  }

  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

}

