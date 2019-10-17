import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoandisbursaldataserviceService {

  constructor(private http: HttpClient) {
  }
  showData(): Observable<any> {
    return this.http
      .get("http://localhost:9090/pecunianew/loanDisbursalData");
      //parameter
      //.get("http://localhost:9090/pecunianew/loanDisbursalData?show-loan-requests="+parameter);
  }
  showRequests(menuOption): Observable<any>{
    return this.http
    .get("http://localhost:9090/pecunianew/loandisbursal?show-loan-requests="+menuOption);
  }
}
