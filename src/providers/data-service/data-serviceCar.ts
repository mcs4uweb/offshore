import { Injectable, OnInit  } from '@angular/core';

import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response  } from '@angular/http';
import { UserOptions } from '../../interfaces/user-options';
import { Observable } from 'rxjs/Observable';
/*import { Subject }    from 'rxjs/Subject';*/
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataServiceCar  implements OnInit {
headerName = '*';
headers: Headers = new Headers();
options = new RequestOptions({
      headers: this.headers
  });
 private baseUrl:string ='http://offshoresurf.azurewebsites.net';
 public cars:any[] = [{
                    index: 1,
                    make: "Ford",
                    model: "Mustang",
                    year: "1967",
                    color: "red",
                    vin:'MUST8765YUT22',
                     warranty:[{warranty:'', extentedWarranty:'', other:''}],
                    odometer: [{ index: 1, odometer: '67500', odometerType: 'Miles', reading: '6/6/2016' },
                                 { index: 2, odometer: '75000', odometerType: 'Miles', reading: '5/6/2017' }
                    ],
                    partNumber: [
                    ],
                    siteImages: [{}],

                    maintenance: [{ index: 1, }],
                }, {
                    index: 2,
                    make: "Audi",
                    model: "A4",
                    year: "2014",
                    color: "#4FA8FF",
                    vin:'AUDN123E12346567',
                    warranty:[{warranty:2020, extentedWarranty:2019, other:""}],
                    odometer:
                    [
                        { index: 1, odometer: '22200', odometerType: 'Miles', reading: '6/6/2016' },
                        { index: 2, odometer: '323000', odometerType: 'Miles', reading: '5/6/2017' }
                    ],
                    partNumber: [
                                            { id: 1, item: 'oil filer', type: 'HR 4540', url: 'http://www.amazon.com/Bosch-3330-Premium-FILTECH-Filter/dp/B002EBSLA4/ref=sr_1_2?ie=UTF8&qid=1460915414&sr=8-2&keywords=oil+filter+2004+tundra' },
                                            { id: 1, item: 'oil', type: '5W-30', url: 'http://www.amazon.com/Castrol-03096-5W-30-Conventional-Motor/dp/B00GTOJK0C/ref=pd_rhf_se_s_cp_1?ie=UTF8&dpID=51GddsNC%2BIL&dpSrc=sims&preST=_SL500_SR106%2C135_&refRID=07AM4KGVX90XRCHMRMX9' },
                    ],
                    siteImages:
                    [
                        {index: 1, image: "", caption: "", type: "" },
                        {index: 2, image: "", caption: "", type: "" },

                    ],

                    maintenance: [{ index: 1, }],
                }
                ];
    constructor(private http: Http ) { }
    ngOnInit() {
        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', '*');
  }
carUpdate(form:UserOptions)
{
    debugger
    console.log(form);
}
getCarsMock(): any[] 
{
  return this.cars;
}
  getCars(): Observable<any[]> {
         return this.http.get(this.baseUrl + '/api/TowerService/GetLocation/').map((response: Response) => response.json());

  }
}
   

