import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { GetStartedPage } from '../pages/getStarted/getStarted';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePage } from '../pages/profile/profile';
import { QuestionnairePage } from '../pages/questionnaire/questionnaire';
import { WelcomePage } from '../pages/welcome/welcome';

@NgModule({
  declarations: [
    GetStartedPage,
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    QuestionnairePage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GetStartedPage,
    MyApp,
    HomePage,
    ListPage,
    ProfilePage,
    QuestionnairePage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
