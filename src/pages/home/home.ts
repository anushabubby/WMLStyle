import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Array<{title: string, icon: string, image: string}>;
  array: number[] = [];

  constructor(public navCtrl: NavController) {
    this.items =  [
      {
        title: "Select Your Theme",
        icon: 'image',
        image: '../assets/imgs/homeImgs/theme.png'
      },
      {
        title: "Select Your Recipe",
        icon: 'restaurant',
        image: '../assets/imgs/homeImgs/recepie.png'
      },
      {
        title: "Select Your Electronics",
        icon: 'game-controller-b',
        image: '../assets/imgs/homeImgs/electronic.png'
      }
    ]
  }

  // add() {
  //   this.array.push(1);
  // }
  // clickMainFAB() {
  //   console.log('Clicked open social menu');
  // }
  //
  // openSocial(network: string, fab) {
  //   console.log('Share in ' + network);
  //   fab.close();
  // }


}
