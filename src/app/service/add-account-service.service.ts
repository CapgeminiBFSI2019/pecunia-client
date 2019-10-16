import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddAccountServiceService {
  httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }
  doAdd(objectName) {
    const httpOptions : any    = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Origin': '*'
      })
    };
    this.httpClient
    .post("http://localhost:9090/pecunianew/account/add-account",objectName)
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
