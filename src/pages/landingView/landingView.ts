import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuestionnairePage } from '../questionnaire/questionnaire';
import { HomePage } from '../home/home';
import { EventsPage } from '../events/events';
import {XmasPreferencesPage} from "../xmaspreferences/xmaspreferences";

@Component({
  selector: 'page-landingView',
  templateUrl: 'landingView.html'
})
export class LandingViewPage {

  items;

  passedParam: string = null;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    // this.initializeItems();
    this.passedParam = this.navParams.get('lView');
  }

  initializeItems() {
    this.items = [
      'Christmas',
      'Thanksgiving',
      'NFL',
      'BBQ Party'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  goBack(){
    this.navCtrl.setRoot(HomePage);
  }
  goToQuestionnaire(){
    this.navCtrl.setRoot(QuestionnairePage);
  }
  goToHolidaysPage(){
    this.navCtrl.setRoot(XmasPreferencesPage);
  }
  goToAllEventsPage(){
    this.navCtrl.setRoot(EventsPage);
  }

}
