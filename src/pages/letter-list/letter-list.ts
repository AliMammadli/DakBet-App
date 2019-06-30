import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-letter-list',
  templateUrl: 'letter-list.html',
})
export class LetterListPage {

  letters: any = ['a','b','c','ç','d','e','ə','f','g','ğ','h','x','ı','i','j','k','q','l','m','n','o','ö','p','r','s','ş','t','u','ü','v','y','z'];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  

}
