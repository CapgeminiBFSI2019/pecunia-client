import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanRequestServiceService {
  


  constructor(private http: HttpClient) { 
   console.log('http service inside LoanRequestServiceService ' + http);
 
  }

  doLoanRequest(loanRequest,loanRequestFunction:any){
 
    this.http.post("http://localhost:9080/pecunianew/LoanRequestServlet",loanRequest)
      .subscribe(
        data => {
          console.log("in subscribe");
          loanRequestFunction(data);
          console.log("Response : "+JSON.stringify(data));
        },
        error => {
          alert("Error");
          console.log("Error :"+JSON.stringify(error));
        }
      );
  }
}
  
  

