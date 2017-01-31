import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // Telling Ionic 2 that home/initial/root page is our HomePage
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // Callback added by Ionic making sure that Cordova and platform has loaded properly
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
