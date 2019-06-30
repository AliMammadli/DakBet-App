import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Slides } from 'ionic-angular';



@IonicPage()
@Component({
    selector: 'page-letter-test',
    templateUrl: 'letter-test.html',
})
export class LetterTestPage {
    @ViewChild('slides') slides: Slides;
    inputLetter: any;
    inputs: any = [];

    letters: any = ['a', 'b', 'c', 'ç', 'd', 'e', 'ə', 'f', 'g', 'ğ', 'h', 'x', 'ı', 'i', 'j', 'k', 'q', 'l', 'm', 'n', 'o', 'ö', 'p', 'r', 's', 'ş', 't', 'u', 'ü', 'v', 'y', 'z'];
    testNumbers: number = 0;
    randomArray: any = new Set([]);

    constructor(
        public nav: NavController,
        public navParams: NavParams,
        public actionSheetCtrl: ActionSheetController) {
        this.presentActionSheet();

    }

    ionViewDidLoad() {
        this.slides.lockSwipes(true);
    }

    presentActionSheet() {
        const actionSheet = this.actionSheetCtrl.create({
            title: 'Testlərin sayını seçin:',
            buttons: [
                {
                    text: '10 Test',
                    handler: () => {
                        this.startTest(10);
                    }
                }, {
                    text: '20 Test',
                    handler: () => {
                        this.startTest(20);
                    }
                }, {
                    text: '30 Test',
                    handler: () => {
                        this.startTest(30);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        this.nav.pop();
                    }
                }
            ]
        });
        actionSheet.present();
    }



    startTest(testNumber) {
        while (this.randomArray.size < testNumber) {
            this.randomArray.add(this.letters[Math.floor(Math.random() * this.letters.length)]);
        }

        if (this.randomArray.size == testNumber) {
            this.randomArray = Array.from(this.randomArray); 
        }
        console.log(this.randomArray);

    }


    next() {
        this.inputs.push(this.inputLetter.toLowerCase());
        this.inputLetter = '';
        console.log(this.inputs);
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    }

}
