import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 import { DataServiceCar } from '../../providers/data-service/data-serviceCar';
/**
 * Generated class for the CarListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-list',
  templateUrl: 'car-list.html',
})
export class CarListPage implements OnInit {
public cars: any[] ;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public car: DataServiceCar
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarListPage');
  }
  ngOnInit() {
 
    this.cars = this.car.getCarsMock();
 
  }

}
