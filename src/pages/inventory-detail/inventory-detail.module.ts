import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InventoryDetailPage } from './inventory-detail';

@NgModule({
  declarations: [
    InventoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InventoryDetailPage),
  ],
})
export class InventoryDetailPageModule {}
