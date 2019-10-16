import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PassbookService {

  constructor(private http: HttpClient) {
  }


  updatePassbook(dataObject,fn : any) {
  this.http
  .post("http://localhost:9090/pecunianew/PassbookServlet",dataObject)
  .subscribe(
    data => {
      fn(data);
      console.log("Response : "+JSON.stringify(data));
    },
    error => {
      console.log("okay done");
      console.log("Error :"+JSON.stringify(error));
    }
  )
  }
}
