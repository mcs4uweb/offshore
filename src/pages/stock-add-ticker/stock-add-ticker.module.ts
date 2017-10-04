import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StockAddTickerPage } from './stock-add-ticker';

@NgModule({
  declarations: [
    StockAddTickerPage,
  ],
  imports: [
    IonicPageModule.forChild(StockAddTickerPage),
  ],
})
export class StockAddTickerPageModule {}
