import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionnairePage } from '../questionnaire/questionnaire';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-landingView',
  templateUrl: 'landingView.html'
})
export class LandingViewPage {
  passedParam: string = null;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.passedParam = this.navParams.get('lView');
  }
  goBack(){
    this.navCtrl.setRoot(HomePage);
  }
  goToQuestionnaire(){
    this.navCtrl.setRoot(QuestionnairePage);
  }
}
