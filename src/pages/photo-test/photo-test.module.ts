import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoTestPage } from './photo-test';

@NgModule({
  declarations: [
    PhotoTestPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoTestPage),
  ],
})
export class PhotoTestPageModule {}
