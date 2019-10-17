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
    console.log("doAdd()");
    this.http
    .post("http://localhost:9090/pecunianew/AddAccountServlet",objectName)
    .subscribe(
      data => {
        console.log("in subscribe");
        addAccountFunction(data);
        console.log("Response : "+JSON.stringify(data));
      },
      error => {
        alert("error");
        console.log("Error :"+JSON.stringify(error));
      }
    ); }
}
