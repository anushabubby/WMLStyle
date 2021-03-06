import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LandingViewPage } from '../landingView/landingView';
import { EventsQuestionsPage } from '../eventsQuestions/eventsQuestions';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  passedParam: string = null;
  constructor(public navCtrl: NavController) {
  }
  goBack(){
    this.navCtrl.setRoot(LandingViewPage,'lView');
  }
  goToEventsQuestions(){
    this.navCtrl.setRoot(EventsQuestionsPage);
  }
}
