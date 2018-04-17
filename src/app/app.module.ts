import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { GetStartedPage } from '../pages/getStarted/getStarted';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePage } from '../pages/profile/profile';
import { WelcomePage } from '../pages/welcome/welcome';
import { PreferencesPage } from '../pages/preferences/preferences';
import { HomePage } from '../pages/home/home';
import { LandingViewPage } from '../pages/landingView/landingView';
import { QuestionnairePage } from '../pages/questionnaire/questionnaire';
import { ProductPage } from '../pages/products/product';
import { CartViewPage } from '../pages/cartView/cartView';

@NgModule({
  declarations: [
    GetStartedPage,
    MyApp,
    HomePage,
    PreferencesPage,
    ProfilePage,
    WelcomePage,
    LandingViewPage,
    QuestionnairePage,
    ProductPage,
    CartViewPage
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
    PreferencesPage,
    ProfilePage,
    WelcomePage,
    LandingViewPage,
    QuestionnairePage,
    ProductPage,
    CartViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
