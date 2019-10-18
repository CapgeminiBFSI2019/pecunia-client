import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanRequestServiceService {
  


  constructor(private http: HttpClient) { 
   
 
  }

  doLoanRequest(loanRequest){
 
    return this.http.post("http://localhost:9080/pecunianew/LoanRequestServlet",loanRequest);
  //   this.http.post("http://localhost:9080/pecunianew/LoanRequestServlet",loanRequest)
  //     .subscribe(
  //       data => {
  //         console.log("in subscribe");
  //         loanRequestFunction(data);
  //         console.log("Response : "+JSON.stringify(data));
  //       },
  //       error => {
  //         alert("Error");
  //         console.log("Error :"+JSON.stringify(error));
  //       }
  //     );
  // }

}
}
  

