import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { nflDetails } from '../../assets/data/questionnaire/events/nfl';
import { EventsNFLItems } from "../eventsNFLItems/eventsNFLItems";

@Component({
  selector: 'page-eventsQuestions',
  templateUrl: 'eventsQuestions.html'
})
export class EventsQuestionsPage {

  questionnaireDetails: any[] = nflDetails.NFL.questionnaire;

  constructor(public navCtrl: NavController) {
  }

  showProducts(){
    this.navCtrl.setRoot(EventsNFLItems);
  }

}

