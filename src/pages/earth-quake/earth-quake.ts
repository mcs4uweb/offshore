import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider} from'../../providers/data-service/data-service';
/**
 * Generated class for the EarthQuakePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-earth-quake',
  templateUrl: 'earth-quake.html',
  styles: [`
   .sebm-google-map-container {
  height: 300px;
  z-index:0;
}
.toolbar-title-md {
  padding: 0 12px;
  font-size: 2rem;
  font-weight: 500;
  color: #0f9ceb;
}
`]
})
export class EarthQuakePage implements OnInit{
public earthQuakeList:any;
public errorMessage:string;
public lat: number = 33.615303000;
public lng: number = -117.936452000;
today:string;
endDate:string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _dataService: DataServiceProvider) {
  }
ngOnInit() {
this.today=getTodayDate(0);

this.endDate=getTodayDate(1);
console.log("today "+this.endDate);

      this._dataService.getEathQuakestart(this.today,this.endDate).subscribe(res => {
      this.earthQuakeList = res.features;
   /* console.log('item '+ res.features[0].properties.mag);*/
    }, error =>this.errorMessage = error)
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad EarthQuakePage');
  }

}
 function getTodayDate(end:any){
  var today = new Date();
  var yy = today.getFullYear();
  var mm = today.getMonth() + 1+end;
  var dd =today.getDate()-1;

  return yy + "-" +mm+"-"+dd;
}
