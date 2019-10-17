import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UpdateNameService {
 
  constructor(private http: HttpClient) {
   
  }

  doUpdate(updateName, updateNameFunction : any){

    this.http
      .post("http://localhost:8061/pecunianew/UpdateCustomerName",updateName)
      .subscribe(
        data => {
          updateNameFunction(data);
          console.log("Response : "+JSON.stringify(data));
        },
        error => {
          alert("Error");
          console.log("Error :"+JSON.stringify(error));
        }
      );
  }

  
 
}