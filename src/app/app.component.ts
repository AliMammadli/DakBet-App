import { Component } from '@angular/core';
import { Platform, App, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;
    alertPresented: boolean = false;
    tabsPage: any = [];



    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        private app: App,
        alertCtrl: AlertController) {
        platform.ready().then(() => {
			splashScreen.hide();
			statusBar.styleDefault();
			statusBar.backgroundColorByHexString("#f8f8f8");

            platform.registerBackButtonAction(() => {

				let nav = app.getActiveNavs()[0];
				let activeView = this.app.getActiveNavs()[0].getActive().id;

				if (activeView) {

					const alert = alertCtrl.create({
						title: 'Çıxış',
						message: 'Proqramdan çıxmaq istəyirsiniz?',
						enableBackdropDismiss: false,
						buttons: [{
							text: 'İmtina',
							role: 'cancel',
							handler: () => {
								this.alertPresented = false;
							}
						}, {
							text: 'Çıxış',
							handler: () => {
								platform.exitApp();
							}
						}]
					});

					this.tabsPage = ['PracticePage', 'SettingsPage'];

					if (nav.canGoBack()) {
						nav.pop();
					} else if (this.tabsPage.includes(activeView)) {
						this.app.getActiveNav().parent.select(0);
					} else {
						if (!this.alertPresented) {
							alert.present();
							this.alertPresented = true;
						} else if (this.alertPresented) {
							platform.exitApp();
						}
					}
				}
			});


            if (localStorage.getItem("introShowed") === null) {
                this.app.getRootNav().setRoot('IntroPage');
                this.rootPage = 'IntroPage';
            } else if (localStorage.getItem("introShowed")) {
                this.rootPage = 'TabsPage';
            }


            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}
