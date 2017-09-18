import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarMaintenancePage } from './car-maintenance';

@NgModule({
  declarations: [
    CarMaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(CarMaintenancePage),
  ],
})
export class CarMaintenancePageModule {}
