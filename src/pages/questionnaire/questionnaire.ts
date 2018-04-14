import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-questionnaire',
  templateUrl: 'questionnaire.html'
})
export class QuestionnairePage {
  slides = [
    {
      title: "What's your favourite color?",
      description: ["white", "Red", "Blue"],
      image: "../assets/imgs/questionnaireImgs/quesImg1.jpg",
    },
    {
      title: "What is your favourite game?",
      description: ["Soccer", "Badminton", "Hockey"],
      image: "../assets/imgs/questionnaireImgs/quesImg1.jpg",
    },
    {
      title: "What is your favourite book?",
      description: ["Harry potter", "Wings of fire", "The sign of four"],
      image: "../assets/imgs/questionnaireImgs/quesImg1.jpg",
    }
  ];

  constructor(private navCtrl: NavController) {
  }

  goToHomePage(){
    this.navCtrl.push(HomePage);
  }
}



