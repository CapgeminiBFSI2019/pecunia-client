import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpClient : HttpClient;
  
  constructor(private http: HttpClient) {
    this.httpClient = http;
  }
  
  doLogin() {

   
   return this.httpClient
      .post("http://localhost:9090/pecunianew/login","loginObject");
      
   }
  }

