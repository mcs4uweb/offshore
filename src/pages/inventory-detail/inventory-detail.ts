import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 import * as $ from 'jquery';

import { DataServiceProvider} from'../../providers/data-service/data-service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/* import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'; */
/**
 * Generated class for the InventoryDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inventory-detail',
  templateUrl: 'inventory-detail.html',
})
export class InventoryDetailPage  implements OnInit  {
public category: any;
public users:any;
public thename:string;
 
 users2: FirebaseListObservable<any[]>;
public show:boolean=true;
 allCategories: any = 
{
 
  "transfers": [
    {
    "ref": "201216",
	  "location":"Sam's Club #4562",
    "shipDate":"8/20/2017",
    "item": [{ 'id': 1, name:'Hair Dryer', 'date': '6/6/2016', 'qty':21, cost:12.99 },
                { 'id': 2, name:'Iron', 'date': '6/6/2016', 'qty':3, cost:6.50 },
				{ 'id': 3, name:'Flat Iron', 'date': '6/6/2016', 'qty':11, cost:32.00 },
                  ],
    },
     {
    "ref": "456234",
	  "location":"Costco #6662",
    "shipDate":"8/20/2017",
    "item": [{ 'id': 1, name:'Hair Dryer 2', 'date': '6/6/2016', 'qty':21, cost:12.99 },
             { 'id': 2, name:'Iron 2', 'date': '6/6/2016', 'qty':3, cost:6.50 },
			       { 'id': 3, name:'Flat Iron 2 ', 'date': '6/6/2016', 'qty':11, cost:32.00 },
          ],
    },
     {
    "ref": "889011",
	  "location":"Sam's Club #213",
    "shipDate":"8/20/2017",
    "item": [{ 'id': 1, name:'Hair Dryer 3 ', 'date': '6/6/2016', 'qty':21, cost:12.99 },
                { 'id': 2, name:'Iron 3', 'date': '6/6/2016', 'qty':3, cost:6.50 },
			        	{ 'id': 3, name:'Flat Iron 3', 'date': '6/6/2016', 'qty':11, cost:32.00 },
                  ],
    }]
  };  
/* constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public serviceProvider: DataServiceProvider,
              public db: AngularFireDatabase){
                db.list('/users').subscribe(users => {
                  this.users = users;
                })

  } */
              constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public serviceProvider: DataServiceProvider,
              public db: AngularFireDatabase
             ){  }
ngOnInit() {
     $('#elemId').width();
    this.category = this.navParams.data.category;
    console.log(this.category );
    this.thename = this.category.name + " " ;
     console.log( this.db.list('/ticker').subscribe(res => { this.users = res;})); 
     this.users2 = this.db.list('/users');
     // console.log('trmp' +    this.items);
  }
  ionViewDidLoad() {
   
    console.log('ionViewDidLoad InventoryDetailPage');
  
  }
  showDetails(item:any)
  {
    debugger
    console.log(item);
    this.show = false;

  }

}
