import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanRequestServiceService {
  // httpClient : HttpClient;
  

  constructor(private httpClient: HttpClient) { 
    // this.httpClient = http;
  }

  doLoanRequest(loanRequest){
 
    this.httpClient
      .post("http://localhost:4200/loan/loan-request",loanRequest)
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
  
  

