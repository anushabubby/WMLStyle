import { Component } from '@angular/core';

@Component({
  selector: 'page-startScreen',
  templateUrl: 'startScreen.html'
})
export class StartScreenPage {

  slideData = [
    { image: "../assets/imgs/recepies.jpeg" },
    { image: "../assets/imgs/shopping.jpg" },
    { image: "../assets/imgs/holiday.jpg" }]
  constructor() {
  }
}
