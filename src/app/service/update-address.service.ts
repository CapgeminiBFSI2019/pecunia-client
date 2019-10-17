import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateAddressService {

  constructor(private http: HttpClient) { }

  doUpdate(updateAddress): Observable<any>{

    return this.http
      .post("http://localhost:8061/pecunianew/UpdateCustomerAddress",updateAddress);
      
  }
}
