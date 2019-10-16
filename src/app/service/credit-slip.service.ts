import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditSlipService {

  constructor(private http : HttpClient) {
    
   }

   creditAmount(dataObject,fn : any) {
     gfdewg:String;
    this.http
      .post("http://localhost:9090/pecunianew/creditslip",dataObject)
      .subscribe(
        data => {
          fn(data);
          // console.log("Data Receieved  :" + JSON.stringify(data));
        },
        error => {
          console.log("Error occured :" + JSON.stringify(error));
        }
      )
  }
}
