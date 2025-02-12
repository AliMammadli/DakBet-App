import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';


@IonicPage()
@Component({
    selector: 'page-intro',
    templateUrl: 'intro.html',
})
export class IntroPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private app: App) {
    }

    getStart() {
        this.app.getRootNav().setRoot('TabsPage');
        localStorage.setItem('introShowed', 'true');
    }

}
