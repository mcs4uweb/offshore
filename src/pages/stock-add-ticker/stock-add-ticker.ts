import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';

//import {ITicker } from '../../model/ITicker'
import { Stock } from '../../model/Stock'
import { NgForm } from '@angular/forms'; 
import * as $ from 'jquery';
import { FormGroup, FormControl } from '@angular/forms'
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
  hasSearch: boolean = false;
  public listing = [];
  public isError: boolean = false;
  public showSpinner: boolean = false;
  public searchInput = new FormControl('');
  public showOverlay: boolean = false;
  public item: any[] = [];
  stocksList: FirebaseListObservable<any[]>;
 
  submitted = false;
  /* stocks: ITicker[] = [{ ticker: 'aaa', tickerDesc: 'desc', filledAt:1, filledAtOut:1, qty:3, status:'active', last:0, notes:'very active'},
                       { ticker: 'bbb', tickerDesc: 'desc bbbb', filledAt:1, filledAtOut:1, qty:7, status:'active', last:0 }
  
] */
stockFormEdit: FormGroup;
key:FormGroup;
filledAt:FormGroup
  //stock2: Stock;
  stock: Stock = { ticker: '', tickerDesc: '', filledAt:1, filledAtOut:1, qty:1, status:'', last:0, notes:'', ipoDate:'', ipoExpectedPrice:0, earningsDate:''};
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public db: AngularFireDatabase,
              private alertCtrl: AlertController
             ) {
  }
  searchFocused(e:any) {
    console.log(e)
    this.hasSearch = true;
    if (!this.searchInput.value) {
      this.showOverlay = true;
      this.isError = false;
    }
  }
  searchCleared(e:any) {
    console.log(e)
    this.hasSearch = false;
    this.isError = false;
  }
  searchBlured(e:any) {
    console.log(e)
    this.showOverlay = false;
    this.isError = false;
    if (!this.searchInput.value) {
      this.hasSearch = false;
    }
  }
  setSearch(e:any) {
    console.log(e)
    this.isError = false;
    this.hasSearch = true;
    this.searchInput.setValue(e);
  }
  ionViewWillLoad(){
     
  this.stockFormEdit = new FormGroup({
    key: new FormControl(),
    filledAt: new FormControl(),

  });
}
  ionViewDidLoad() {
   console.log('ionViewDidLoad StockAddTickerPage');
  }
  ngOnInit() {
    this.showSpinner = true;
    this.item = this.navParams.data.item;
    this.stocksList = this.db.list('/ticker'   , {
      query: {
        orderByChild: 'ticker'
      }
    });
    
    this.stocksList.subscribe(() => this.showSpinner = false)
    //this.stocks2 = this.db2.getStocks();
   
   
}
updateFillAt(name: string, ticker: any)
{
 
  ticker.filledAt = name.replace("$","");
  this.db.object('/ticker/' + ticker.$key).update(ticker); 
}
updateStatus(name: string, ticker: any)
{ 
  debugger
  ticker.status = name;
  this.db.object('/ticker/' + ticker.$key).update(ticker); 
}
updateNotes(name: string, ticker: any)
{
  ticker.notes = name;
  this.db.object('/ticker/' + ticker.$key).update(ticker); 
}
removeTicker(ticker: any)
{  
  let alert = this.alertCtrl.create({
    title: 'Delete Stock Ticker',
    message: 'Do you want to Delete this item?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Delete',
        handler: () => {
          this.db.object('/ticker/' + ticker.$key).remove();  
        }
      }
    ]
  });
  alert.present();
  console.log(ticker)
  //
 
 
}
/* saveTicker()
{
   let kkey = this.stockFormEdit.get('key')!.value;
   let fill = this.stockFormEdit.get('filledAt')!.value;
console.log(kkey + '' + fill)
  debugger
 // console.log(form.value );
  let ticker = this.stock;
  let k = $('#key').val();
  console.log( k)
  console.log( ticker)
 
 // if (form.valid) {
   // this.stocks2.push(ticker); 
  // ticker.filledAt = form.;
  //this.db.object('/ticker/' + ticker.$key).update(ticker); 
// }
} */
updateTicker(ticker: any)
{  
  debugger
 /*  if(ticker.status == "Pending")
  {
    ticker.status = "active";
  }else{
    ticker.status = "Pending";
  } */
  
  this.db.object('/ticker/' + ticker.$key).update(ticker); 
}

  onCreate(form: NgForm)
  {  
      this.submitted = true;
      let ticker = this.stock;
      debugger
      ticker.sellStock = form.controls["sellStock"].value == undefined ? false : form.controls["sellStock"].value;
      ticker.statusTrading = form.controls["statusTrading"].value == undefined ? false : form.controls["statusTrading"].value;
  
     
      if (form.valid) {
        this.stocksList.push(ticker);
       // this.navCtrl.push(TabsPage);
      }
    }

}

$(document).delegate('.openDetail', 'click', function () {
 
  if ( $(this).text() == "Edit"){
       $(this).text('Editing');
  }else{
    $(this).text('Edit');
  }
  $(this).next('.theone').toggle(); 
 
});
$(document).delegate('.openDetails2', 'click', function () {
  if ( $(this).text() == "Edit"){
    $(this).text('Editing');
  }else{
  $(this).text('Edit');
  }
  $(this).parent().parent().next('.theone2').toggle(); 
 
});
$(document).delegate('#openForm', 'click', function () {
  $(this).next().toggle(); 
 
});

