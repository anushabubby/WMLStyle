import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { LandingViewPage } from "../landingView/landingView";
import { cameraDetails } from "../../assets/data/questionnaire/electronics/camera";
import { CartViewPage } from '../cartView/cartView';
import { ICamera } from '../../models/products/cameraModel';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  public tap: number[] = [];
  public cartTap: number = 0;
  public cameraArray: ICamera[] = [];
  public saved: boolean[] = [];
  public addedToCart: boolean[] = [];

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {
  }

  cameraProductsSmall: any[] = cameraDetails.Camera.types.professional.budget[">1000"].Small;
  cameraProductsMedium: any[] = cameraDetails.Camera.types.professional.budget[">1000"].Medium;
  cameraProductsLarge: any[] = cameraDetails.Camera.types.professional.budget[">1000"].Large;

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
  addToCart(cam: ICamera, i){
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


