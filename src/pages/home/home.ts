import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

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
