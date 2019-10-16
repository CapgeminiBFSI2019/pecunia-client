import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateAddressService {

  constructor(private http: HttpClient) { }

  doUpdate(updateAddress, updateAddressFunction : any){


    this.http
      .post("http://localhost:9090/pecunianew/UpdateCustomerAddress",updateAddress)
      .subscribe(
        data => {
          updateAddressFunction(data);
          // console.log("Response : "+JSON.stringify(data));
        },
        error => {
          alert("Error");
          console.log("Error :"+JSON.stringify(error));
        }
      );
  }
}
