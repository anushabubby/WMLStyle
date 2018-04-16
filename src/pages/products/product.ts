import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { LandingViewPage } from "../landingView/landingView";
import { cameraDetails } from "../../assets/data/questionnaire/electronics/camera";

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {
  }

  cameraProductsSmall: any[] = cameraDetails.Camera.types.professional.budget[">1000"].Small;
  cameraProductsMedium: any[] = cameraDetails.Camera.types.professional.budget[">1000"].Medium;
  cameraProductsLarge: any[] = cameraDetails.Camera.types.professional.budget[">1000"].Large;

  goBack(){
    this.navCtrl.setRoot(LandingViewPage);
  }
}


