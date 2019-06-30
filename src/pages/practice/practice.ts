import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
    selector: 'page-practice',
    templateUrl: 'practice.html',
})
export class PracticePage {

    constructor(
        public nav: NavController,
        public navParams: NavParams,
        private alert: AlertController) {
    }

    goToPage(page) {
        this.nav.push(page);
    }


    willBeSoon() {
        let alert = this.alert.create({
            title: 'Tezliklə!',
            message: "Bu bölmə tezliklə hazır olacaq :)",
            buttons: ["Bağla"]
        });
        alert.present();
    }
}
