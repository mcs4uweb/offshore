import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceCar } from '../../providers/data-service/data-serviceCar';
import { CarDetailPage } from './carDetail';
/**
 * Generated class for the CarInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-info',
  templateUrl: 'car-info.html',
})
export class CarInfoPage implements OnInit {
public cars: any[] ;
public item: any[] = [];
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
goToCarDetail(item: any) {
    
    this.navCtrl.push(CarDetailPage, { item:  item });
  } 
}
