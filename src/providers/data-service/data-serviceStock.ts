import { Injectable, OnInit  } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response  } from '@angular/http';
import { UserOptions } from '../../interfaces/user-options';
import { Observable } from 'rxjs/Observable';
/*import { Subject }    from 'rxjs/Subject';*/
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
 
@Injectable()
export class DataServiceStock  implements OnInit {
headerName = '*';
headers: Headers = new Headers();
options = new RequestOptions({
      headers: this.headers
  });
 private baseUrl:string ='http://offshoresurf.azurewebsites.net';
 
 constructor(private http: Http,
             private db: AngularFireDatabase ) { }
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
/* getCarsMock(): any[] 
{
   return null;
} */
  getStocks2(): Observable<any[]> {
         return this.http.get(this.baseUrl + '/api/TowerService/GetLocation/').map((response: Response) => response.json());

  }
  getStocks(): Observable<any[]> {
        return  this.db.list('/ticker').map((response: Response) => response.json());

}
}
   

