import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usrPage = UsersPage;
  shopPage = ShopPage;

  // Below is an option to navigate between pages
  constructor(public navCtrl: NavController) {}

  // page, data you want to pass along and object with navigation options
  onGoToUsers() {
    this.navCtrl.push(this.usrPage, {}, {
      direction: 'back',
      duration: 2000,
      easing: 'ease-out'
  })
    .catch((error) => console.log("Access denied"));
  }
}
