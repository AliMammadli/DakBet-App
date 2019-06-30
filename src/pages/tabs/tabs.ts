import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {
    tab1Root = 'HomePage';
    tab2Root = 'PracticePage';
    tab3Root = 'SettingsPage';

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams) {
    }

}
