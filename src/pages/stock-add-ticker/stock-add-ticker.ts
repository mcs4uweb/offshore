import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ITicker } from '../../model/stock'
import { NgForm } from '@angular/forms'; 
import * as $ from 'jquery';
/* import { DataServiceStock} from'../../providers/data-service/data-serviceStock'; */
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
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
  stocks2: FirebaseListObservable<any[]>;
  //stocks2: FirebaseListObservable<any[]>; 
  submitted = false;
  stocks: ITicker[] = [{ ticker: 'aaa', tickerDesc: 'desc', filledAt:1, filledAtOut:1, qty:3, status:'active', last:0  },
                       { ticker: 'bbb', tickerDesc: 'desc bbbb', filledAt:1, filledAtOut:1, qty:7, status:'active', last:0 }
  
]
  stock: ITicker = { ticker: '', tickerDesc: '', filledAt:1, filledAtOut:1, qty:1, status:'', last:0 };
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public db: AngularFireDatabase
             ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockAddTickerPage');
  }
  ngOnInit() {
    this.item = this.navParams.data.item;
    this.stocks2 = this.db.list('/ticker');
    //this.stocks2 = this.db2.getStocks();
   
   
}
updateFillAt(name: string,ticker: any)
{
  //console.log(name + " " + ticker );
  ticker.filledAt = name.replace("$","");
  this.db.object('/ticker/' + ticker.$key).update(ticker); 
}
removeTicker(ticker: any)
{  
  this.db.object('/ticker/' + ticker.$key).remove();  
}
updateTicker(ticker: any)
{  
  debugger
  if(ticker.status == "Pending")
  {
    ticker.status = "active";
  }else{
    ticker.status = "Pending";
  }
  
  this.db.object('/ticker/' + ticker.$key).update(ticker); 
}

  onCreate(form: NgForm)
  {  
      this.submitted = true;
      let ticker = this.stock;
     
      if (form.valid) {
        this.stocks2.push(ticker);
       // this.navCtrl.push(TabsPage);
      }
    }

}

$(document).delegate('.openDetails', 'click', function () {
  $(this).next('.theone').toggle(); 
 
});
$(document).delegate('.openDetails2', 'click', function () {
  console.log('closest')
  $(this).parent().parent().next('.theone2').toggle(); 
 
});
$(document).delegate('#openForm', 'click', function () {
  $(this).next().toggle(); 
 
});

