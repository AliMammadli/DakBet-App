import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LetterTestPage } from './letter-test';

@NgModule({
  declarations: [
    LetterTestPage,
  ],
  imports: [
    IonicPageModule.forChild(LetterTestPage),
  ],
})
export class LetterTestPageModule {}
