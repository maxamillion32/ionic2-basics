import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})

export class UserPage implements OnInit {
    name: string;

    constructor (private navParams: NavParams, private navCtrl: NavController) {

    }

    ngOnInit() {
        // Below will get the entire object passed into nav params
        // this.name = this.navParams.data;
        // Below will use built in .get() to get property of nav params object (granted the param you passed in is an object)
        this.name = this.navParams.get('userName');
    }

    goBack() {
        // this.navCtrl.pop();
        this.navCtrl.popToRoot();
    }
}