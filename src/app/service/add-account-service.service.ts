import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddAccountServiceService {
  httpClient: HttpClient;

  constructor(private http: HttpClient) {
    
  }
  doAdd(objectName,addAccountFunction : any) {
    
    this.http
    .post("http://localhost:9090/pecunianew/account/add-account",objectName)
    .subscribe(
      data => {
        addAccountFunction(data);
        console.log("Response : "+JSON.stringify(data));
      },
      error => {
        console.log("Error :"+JSON.stringify(error));
      }
    );
  
}
}
