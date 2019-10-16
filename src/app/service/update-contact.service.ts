import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UpdateContactService {

  constructor(private http: HttpClient) { }

  doUpdate(updateContact, updateContactFunction : any){

    console.log("Inside doUpdate");

    this.http
      .post("http://localhost:9090/pecunianew/UpdateCustomerContact",updateContact)
      .subscribe(
        data => {
          updateContactFunction(data);
          // console.log("Response : "+JSON.stringify(data));
        },
        error => {
          alert("Error");
          console.log("Error :"+JSON.stringify(error));
        }
      );
  }

}
