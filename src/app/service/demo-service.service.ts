import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
  httpClient : HttpClient;
  
  constructor(private http: HttpClient) { 
  }

  doLogin() {
    this.httpClient
      .get("")
      .subscribe(
        data => {
          alert("Response : "+JSON.stringify(data));
        },
        error => {
          alert("Error :"+error);
        }
      );
  }
}
