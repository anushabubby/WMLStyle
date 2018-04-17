import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { LandingViewPage } from "../landingView/landingView";
import { nflDetails } from "../../assets/data/questionnaire/events/nfl";
import { CartViewPage } from '../cartView/cartView';
import { iNFL } from '../../models/products/nflModel';

@Component({
  selector: 'page-eventsNFLItems',
  templateUrl: 'eventsNFLItems.html'
})
export class EventsNFLItems {
  public tap: number[] = [];
  public cartTap: number = 0;
  public cameraArray: iNFL[] = [];
  public saved: boolean[] = [];
  public addedToCart: boolean[] = [];

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {
  }

  cameraProductsSmall: any[] = nflDetails.NFL.types.guests.budget["<100"].adults;
  cameraProductsMedium: any[] = nflDetails.NFL.types.guests.budget["<100"].teens;
  cameraProductsLarge: any[] = nflDetails.NFL.types.guests.budget["<100"].kids;

  goBack(){
    this.navCtrl.setRoot(LandingViewPage);
  }
  goToCart(e){
    this.navCtrl.setRoot(CartViewPage,{camCartArray: this.cameraArray});
  }
  tapEvent(e, i) {
    if(this.tap[i] === undefined){
      this.tap[i] = 0;
      this.tap[i]++;
    } else {
      this.tap[i]++;
    }
  }
  addToCart(cam: iNFL, i){
    this.cartTap++;
    this.cameraArray.push(cam);
    if(this.addedToCart[i] === undefined){
      this.addedToCart[i] = true;
    } else {
      this.addedToCart[i] = !this.addedToCart[i];
    }
  }
  saveEvent(e, i){
    this.saved[i] = (this.saved[i] != false || this.saved[i] === null) ? false : true;
  }
}


