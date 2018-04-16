import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { cameraDetails } from '../../assets/data/questionnaire/electronics/camera';
import { ProductPage } from "../products/product";

@Component({
  selector: 'page-questionnaire',
  templateUrl: 'questionnaire.html'
})
export class QuestionnairePage {

  questionnaireDetails: any[] = cameraDetails.Camera.questionnaire;

  constructor(public navCtrl: NavController) {
  }

  showProducts(){
    this.navCtrl.setRoot(ProductPage);
  }

}

