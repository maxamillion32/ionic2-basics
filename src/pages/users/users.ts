import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserPage } from './user/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})

export class UsersPage {
  constructor (private navCtrl: NavController) {

  }

  onLoadUser(name: string) {
    this.navCtrl.push(UserPage, {userName: name});
  }

  ionViewCanEnter(): boolean | Promise<boolean> {
    // can also return nothing as Promise<void>
    console.log('ion view can enter');
    const rnd = Math.random();
    console.log(rnd);
    return rnd > 0.5;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewCanLeave(): boolean | Promise<void> {
    console.log('ionViewCanLeave');
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {resolve();}, 1000);
    });
    return promise;
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }
}
