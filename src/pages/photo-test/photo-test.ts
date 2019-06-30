import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Slides } from 'ionic-angular';


@IonicPage()
@Component({
    selector: 'page-photo-test',
    templateUrl: 'photo-test.html',
})
export class PhotoTestPage {
    @ViewChild('slides') slides: Slides;
    inputLetter: any;
    inputs: any = [];
    variants: any = [];

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

        for (let i = 0; i < testNumber; i++) {
            this.variants[i] = [];
            this.variants[i][0] = this.randomArray[i];
            var temp=this.letters[Math.floor(Math.random() * this.letters.length)];
            while (temp == this.variants[i][0]) {
                temp = this.letters[Math.floor(Math.random() * this.letters.length)];
            }
            this.variants[i][1] = temp;
            while (temp== this.variants[i][0] || temp == this.variants[i][1]) {
                temp = this.letters[Math.floor(Math.random() * this.letters.length)];
                // break;
            }
            this.variants[i][2] = temp;
            this.shuffle(this.variants[i]);
        }

        console.log(this.variants);

    }


    next(response) {
        this.inputs.push(response);
        console.log(this.inputs);
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    }

    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

}
