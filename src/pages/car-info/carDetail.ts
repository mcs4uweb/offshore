import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserOptions } from '../../interfaces/user-options';
import { NgForm } from '@angular/forms'; 
import { DataServiceCar} from'../../providers/data-service/data-serviceCar';

@IonicPage()
@Component({
  selector: 'page-carDetail',
  templateUrl: 'carDetail.html',
})
export class CarDetailPage  implements OnInit  {
 public item: any[] = [];
   submitted = false;
public car:any;

   carData: UserOptions = { username: '', password: '' };

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,   
              public db:DataServiceCar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }
ngOnInit() {
    this.item = this.navParams.data.item;
}
 onSignup(form: NgForm) {
    this.submitted = true;
debugger
   let tt = this.carData;
   console.log(tt);
    if (form.valid) {
      this.db.carUpdate(this.carData);
     // this.navCtrl.push(TabsPage);
    }
  }
 
}
