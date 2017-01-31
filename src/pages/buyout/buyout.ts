import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  produce: string;

  ngOnInit() {
    this.produce = this.navParams.data;
  }

  goHome() {
    this.navCtrl.popToRoot();
  }

}
