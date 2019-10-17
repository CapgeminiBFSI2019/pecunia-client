import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DeleteAccountService {
 
  constructor(private http: HttpClient) {
   
  }

  doDelete(deleteAccount, deleteAccountFunction : any){

    this.http
      .post("http://localhost:9090/pecunianew/DeleteAccountServlet",deleteAccount)
      .subscribe(
        data => {
          deleteAccountFunction(data);
          console.log("Response : "+JSON.stringify(data));
        },
        error => {
          alert("Error");
          console.log("Error :"+JSON.stringify(error));
        }
      );
  }

  
 
}