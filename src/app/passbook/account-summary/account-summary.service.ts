import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
  httpClient : HttpClient;
  
  constructor(private http: HttpClient) {
    this.httpClient = http;
  }
  
  // doSummary(accId : string,stDate : Date ,endDate : Date) {
  
  //   this.httpClient
  //     .post("http://localhost:9091/pecunianew/AccountSummaryServlet?accountID=", {+accId"&startDate="+stDate"&endDate="+endDate);
  //     .subscribe(
  //       data => {
  //         console.log("Response : "+JSON.stringify(data));
  //       },
  //       error => {
  //         console.log("Error :"+JSON.stringify(error));
  //       }
  //     );
  //     }
  // 
}

