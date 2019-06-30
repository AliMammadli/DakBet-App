import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LetterListPage } from './letter-list';

@NgModule({
  declarations: [
    LetterListPage,
  ],
  imports: [
    IonicPageModule.forChild(LetterListPage),
  ],
})
export class LetterListPageModule {}
