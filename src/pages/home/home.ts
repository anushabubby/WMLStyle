import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController) {
    this.items =  [
      {
        title: "Select Your Theme",
        icon: 'image'
      },
      {
        title: "Select Your Recipe",
        icon: 'restaurant'
      },
      {
        title: "Select Your Electronics",
        icon: 'game-controller-b'
      }
    ]
  }

}
