import { Component } from '@angular/core';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {
  slideData = [
    { image: "../assets/imgs/profileImgs/event1.jpg" },
    { image: "../assets/imgs/profileImgs/event2.jpg" },
    { image: "../assets/imgs/profileImgs/event3.jpg" },
    { image: "../assets/imgs/profileImgs/event4.jpg" },
    { image: "../assets/imgs/profileImgs/apparel1.jpg" },
    { image: "../assets/imgs/profileImgs/apparel2.jpg" },
    { image: "../assets/imgs/profileImgs/apparel3.jpg" },
    { image: "../assets/imgs/profileImgs/recepie1.jpg" },
    { image: "../assets/imgs/profileImgs/recepie2.jpg" }]

  constructor(){

  }
}
