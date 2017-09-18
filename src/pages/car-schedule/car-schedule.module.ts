import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarSchedulePage } from './car-schedule';

@NgModule({
  declarations: [
    CarSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(CarSchedulePage),
  ],
})
export class CarSchedulePageModule {}
