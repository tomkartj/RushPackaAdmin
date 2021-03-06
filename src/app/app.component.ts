import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DriversPage } from '../pages/drivers/drivers';
import * as firebase from 'firebase';
import { TripsPage } from '../pages/trips/trips';
import { CarsPage } from '../pages/cars/cars';
import { PassengersPage } from '../pages/passengers/passengers';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Drivers', component: DriversPage },
      { title: 'Passengers', component: PassengersPage },
      { title: 'Trips', component: TripsPage },
      { title: 'Settings', component: CarsPage}
    ];

  }

  initializeApp() {
    firebase.initializeApp({
      apiKey: "AIzaSyAWdN4dKqpn-31Uip_YJvhyvyqITPQLX9A",
    authDomain: "rushpack1.firebaseapp.com",
    databaseURL: "https://rushpack1.firebaseio.com",
    projectId: "rushpack1",
    storageBucket: "rushpack1.appspot.com",
    messagingSenderId: "706481577375"
    });
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
