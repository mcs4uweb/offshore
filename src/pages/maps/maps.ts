import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider} from'../../providers/data-service/data-service';
import { AgmCoreModule } from '@agm/core';
import { Station } from '../../model/Station';
import { SurfLocation } from '../../model/SurfLocation';
/**
 * Generated class for the MapsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
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
export class MapsPage {

lat: number = 33.615303000;
lng: number = -117.936452000;
errorMessage: string = '';
lblcolor:string = "red";
isLoading:boolean=true;
public markers: Station[];
public location: Station[];
public locationId: SurfLocation[];

constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _dataService: DataServiceProvider,
              public _amg:AgmCoreModule ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
  }
  ngOnInit() {
    this.getStations();//todo: change string lat . long to  double on the back end
    this.getLocations();
  }

  getStations() {
       this._dataService.getStations().subscribe(res => { this.markers = res;
      }, error =>this.errorMessage = error)
      , () =>this.isLoading = false;
        /* $('#error').empty().append('An error occured in the Map Component');*/

  }
  getLocations() {
       this._dataService.getLocations().subscribe(res => {  this.locationId = res; }, error =>this.errorMessage = error)
   ,() =>this.isLoading = false;
        /* $('#error').empty().append('An error occured in the Map Component');*/

  }

 updateMap(item:string){
    //TODO:eventuallyfilter on all records once loaded,currently the API is slow but once consumed then wewon't need to make the getStationById
    //let surfLocation = this.locationId.filter(x =>x.LocationKey === item);


    let station = new Station();




   this._dataService.getStationsById2(item).subscribe(res => { this.location = res;
console.log(this.location[0].Ident);

  if( Object.keys(res).length > 0)
  {
   station.Location = this.location[0].Location == null ? "n/a" : this.location[0].Location;
    station.WindDirIcon = 'assets/' + this.location[0].WindDirIcon; // this.getWindSpeedImg(res[0].WindDirText,res[0].LocationWindCondition );


  console.log('..........' + this.location[0].Ident      );
    station.LocationLongitude =this.location[0].LocationLongitude;
    station.LocationLatitude =this.location[0].LocationLatitude ;
    station.LocationWindCondition= this.location[0].LocationWindCondition;
    station.WindSpeed = this.location[0].WindSpeed;
    station.WindDirText = this.location[0].WindDirText;
    station.WindGust = this.location[0].WindGust;
    this.markers.push(station);
  }else{
//TODO: make a call to another source
  let surfLocation = this.locationId.filter(x =>x.LocationKey === item);
   station.Location = surfLocation[0].LocationName == null ? "n/a" : surfLocation[0].LocationName;
   // station.ImageType = surfLocation[0].Ident>14 ? 'assets/redX.png' : 'assets/greenCheck.png';
    station.LocationLongitude =surfLocation[0].Longitude;
    station.LocationLatitude =surfLocation[0].Latitude ;
    station.LocationWindCondition= ''; // surfLocation[0].LocationWindCondition'';
    station.WindSpeed =''; //  surfLocation[0].WindSpeed;
    station.WindDirText =''; //  surfLocation[0].WindDirText;
    station.WindGust =''; //  surfLocation[0].WindGust;
    this.markers.push(station);
  }
 }, error =>this.errorMessage = error);





  }
/*
      const watch = geolocation.watchPosition().subscribe(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      });


      watch.unsubscribe();

    })
    ;*/



 clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
   selectedAStation(label: string, index: number) {
     this.clickedMarker("q", 3);
    console.log(`clicked the marker: ${label || index}`)
  }
mouseOver(input:string)
{
   //infowindow.open(map,CalMarker);
    console.log(input);

}




}

