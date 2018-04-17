import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../products/product';
import { ICamera } from '../../models/products/cameraModel';

@Component({
  selector: 'page-cartView',
  templateUrl: 'cartView.html'
})
export class CartViewPage {

  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;
  public cameraArray: ICamera[] = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.cameraArray = this.navParams.get('camCartArray');
  }
  goBack(){
    this.navCtrl.setRoot(ProductPage);
  }

  pressEvent(e) {
    this.press++
  }
  panEvent(e) {
    this.pan++
  }
  swipeEvent(e) {
    this.swipe++
  }
  tapEvent(e) {
    this.tap++
  }
  public removeFromCart(e, cam) {
    this.cameraArray = this.cameraArray.filter(item => item !== cam);
  }
}

