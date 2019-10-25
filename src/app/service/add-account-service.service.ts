import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddAccountServiceService {
  httpClient: HttpClient;

  constructor(private http: HttpClient) {
    
  }

addAccountFunction(objectName): Observable<any> {
  // console.log("aaraha hu me")
  return this.http
    .post("http://localhost:9090/pecunianew/AddAccountServlet",objectName);
}}