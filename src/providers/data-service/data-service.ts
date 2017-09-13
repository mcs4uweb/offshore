import { Injectable, OnInit  } from '@angular/core';

import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
/*import { Subject }    from 'rxjs/Subject';*/
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Station } from '../../model/Station';
import { SurfLocation } from '../../model/SurfLocation';
/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataServiceProvider  implements OnInit {
headerName = '*';
headers: Headers = new Headers();
options = new RequestOptions({
      headers: this.headers
  });
 private baseUrl:string ='http://offshoresurf.azurewebsites.net';

    constructor(private http: Http) { }
    ngOnInit() {
        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', '*');
  }
  getStations():  Observable<Station[]> {
         return this.http.get(this.baseUrl +'/buoy/GetCurrentConditions?locationSelection=all').map((response: Response) => <Station[]>response.json()).finally(() => {
                console.log('end');
            });
  }
  getLocations(): Observable<SurfLocation[]> {
         return this.http.get(this.baseUrl + '/api/TowerService/GetLocation/').map((response: Response) => response.json());

  }
  getStationsById(id:string): Observable<Station>{
        return this.http.get(this.baseUrl + '/buoy/GetAllStationData?locationSelection='+id).map((response: Response) => response.json());

    }
  getStationsById2(id:string):  Observable<Station[]>{
        return this.http.get(this.baseUrl + '/buoy/GetAllStationData?locationSelection='+id).map((response: Response) => response.json());

    }
  getEathQuakestart(start: string, end: string ): Observable<any>
    {  //yyyy-mm-dd
      console.log("--------------------- " + start.trim());
//start = "2017-7-29";

     /* return this.http.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime='+returnDate()+'&endtime='+returnDate()+'&minlatitude=32&minlongitude=-118').map((response: Response) => response.json());*/
        return this.http.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime='+start+'&endtime='+end+'&minlatitude=32&minlongitude=-118').map((response: Response) => response.json());
    }

getInventory()
{

}

 /*   getUser(): Observable<any> {
          return this.http.get(this.baseUrl + '/api/TowerService/Getuser/mhubbs').map((response: Response) => response.json());

    }
    getBuoy(): Observable<Station[]> {
         return this.http.get(this.baseUrl +'/buoy/GetCurrentConditions?locationSelection=all').map((response: Response) => <Station[]>response.json())
  }

     getStationsById(id:string): Observable<Station>{
        return this.http.get(this.baseUrl + '/buoy/GetAllStationData?locationSelection='+id).map((response: Response) => response.json());

    }


    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    }

saveStation(station: Station): void {
        this.http.put(this.baseUrl + '/saveStation', JSON.stringify(station));

}

   createUser(user: User): Observable<User>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
         return this.http.post('', user, options)
                  .map((response: Response) => response.json());
    }
     private jwt() {
        // create authorization header with  token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return   new RequestOptions({ headers: headers });
        }
    }*/


}


/*function handleError(error:any)
    {
        let errorMsg =error.message;
        console.log(errorMsg);

        return Observable.throw(errorMsg);
    }*/

