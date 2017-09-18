import { Injectable, OnInit  } from '@angular/core';

import 'rxjs/add/operator/map';
/* import { Http, Headers, RequestOptions, Response  } from '@angular/http'; */

/* import { Observable } from 'rxjs/Observable'; */
/*import { Subject }    from 'rxjs/Subject';*/
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
 
@Injectable()
export class DataServiceSmartCircle  implements OnInit {
headerName = '*';
headers: Headers = new Headers();
/* options = new RequestOptions({
      headers: this.headers
  }); */

public appReports: any  = [
    
   { title: 'Transfer', name: 'transfer'  },
   { title: 'Shipments', name: 'shipments'  },
    { title: 'Other', name: 'other' } 
  ];

 public allCategories: any = 
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

  

    constructor( ) { }
    ngOnInit() {
        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', '*');
  }
 
  
  
  

getReports(): any[] 
{
  return this.appReports;
}

 /*   getUser(): Observable<any> {
          return this.http.get(this.baseUrl + '/api/TowerService/Getuser/mhubbs').map((response: Response) => response.json());

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

 