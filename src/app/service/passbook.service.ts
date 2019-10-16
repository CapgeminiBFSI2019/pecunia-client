import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PassbookService {
  httpClient : HttpClient;

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

 doUpdate( accId: String) {

  this.httpClient
  .get("http://localhost:9090/pecunianew/PassbookServlet?accountID="+accId)
  .subscribe(
    data => {
      console.log("Response : "+JSON.stringify(data));
    },
    error => {
      console.log("Error :"+JSON.stringify(error));
    }
  );

  }


}
