import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CounterTimePage } from './counter-time';

@NgModule({
  declarations: [
    CounterTimePage,
  ],
  imports: [
    IonicPageModule.forChild(CounterTimePage),
  ],
})
export class CounterTimePageModule {}
