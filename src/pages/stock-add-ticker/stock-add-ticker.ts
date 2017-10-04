import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ITicker } from '../../model/stock'
import { NgForm } from '@angular/forms'; 
import { DataServiceStock} from'../../providers/data-service/data-serviceStock';

/**
 * Generated class for the StockAddTickerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stock-add-ticker',
  templateUrl: 'stock-add-ticker.html',
})
export class StockAddTickerPage  implements OnInit  {
  public item: any[] = [];
  submitted = false;
   
  stock: ITicker = { ticker: '', tickerDesc: '', filledAt:1, filledAtOut:1, qty:'', status:'', last:0 };
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public db:DataServiceStock) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockAddTickerPage');
  }
  ngOnInit() {
    this.item = this.navParams.data.item;
}
  

  onCreate(form: NgForm)
  {  
      this.submitted = true;
  debugger
     let tt = this.stock;
     console.log(tt);
      if (form.valid) {
        this.db.getStocks();
       // this.navCtrl.push(TabsPage);
      }
    }

}
