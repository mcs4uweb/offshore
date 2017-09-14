import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InventoryDetailPage } from '../inventory-detail/inventory-detail';

/**
 * Generated class for the ContactsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
 category: any[] = [];
 
allCategories: any = 
{
 
   "members": [
    {
      "name": "Shipments",
      color:'primary',
      "other": [
        "Initiated",
        "Shipments",
        "Radiation blast"
      ],
        category: [{ 'id': 1, name:'Initiated', 'date': '6/6/2016', total:21 },
                   { 'id': 2, name:'Shipments', 'date': '5/6/2017', total: 15 }
                  ],
    },
    {
      "name": "Transfers",
       color:'secondary',
       "other": [
        "Initiated",
        "Shipments",
        "Superhuman reflexes"
      ],
        category: [{ 'id': 1, name:'Initiated', 'date': '6/6/2016', total:32 },
                   { 'id': 2, name:'Shipments', 'date': '5/6/2017', total:68 }
                  ],
    },
    {
      "name": "EOS Transfers",
       color:'dark',
       "other": [
      "Initiated",
     
      ],
        category: [{ 'id': 1, name:'Initiated', 'date': '6/6/2016', total:4 },
                   { 'id': 2, name:'Shipments', 'date': '5/6/2017', total:1 }
                  ],
    }]
  };  

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }
  goToInventoryDetail(category: any) {
    
    this.navCtrl.push(InventoryDetailPage, { category:  category });
  }
  itemDetail($event:any, team:any )
  {
    debugger
   var test = $event;
   console.log(test + " " + team);
  }

}
