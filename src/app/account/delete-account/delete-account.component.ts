import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountModel } from 'src/app/model/AccountModel';
import { HttpClient } from '@angular/common/http';
import { DeleteAccountService } from 'src/app/service/delete-account.service';
import { SessionService } from 'src/app/service/session.service';
import { AccountDetailsService } from 'src/app/service/account-details.service';




@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})


export class DeleteAccountComponent implements OnInit {


  account = new AccountModel();
  accountRequested = new AccountModel();
  firstdataResponse : Object;
  seconddataResponse : Object;
  showToast = false;
  isProcessing : boolean = false;
  deleteAccountObject: Object;
  submitted = false;
  httpClient : HttpClient;

  @ViewChild('accountDeletionForm' , {static: false}) form: any;
  toastr: any;

  constructor(private deleteAccount : DeleteAccountService, private accountService : AccountDetailsService, private sessionService : SessionService) { }

  ngOnInit() {
    this.sessionService.doSessionRouting();
  }

  onFirstDataReceived(data)
  {
    this.firstdataResponse = JSON.parse(data["data"]);
    this.showToast = true;
    console.log("inside data2");
    alert("ONFIRSTDATARECEICVED :"+JSON.stringify(this.firstdataResponse));
    console.log(this.firstdataResponse);
  }

  
  onSecondDataReceived(data){
    // seconddataResponse : Object;
    this.seconddataResponse = JSON.parse(data["data"]);
    this.showToast = true;
    console.log("inside data");
    alert("ONSECONDDATARECEICVED :"+JSON.stringify(this.seconddataResponse));
    console.log(this.seconddataResponse["id"]);
  }


  onSubmit() {
    console.log("inside button");
    this.isProcessing = true;
    this.submitted = true;
    this.deleteAccountObject = {"accountId": this.accountRequested.id};
    
    this.accountService.showAccountDetails(this.deleteAccountObject).subscribe(
      data => {
        console.log("inside data");
        this.isProcessing = false;
        this.onFirstDataReceived(data);
        console.log(data);
      },
      error => {
        let errorObject = {
         
          "success" : false,
          "message" : "Could not connect to server"
        }
        this.onFirstDataReceived(errorObject);
        this.isProcessing = false;
      }
    );
  }

  closeAccount(){
    this.isProcessing = true;
    this.deleteAccountObject = {"accountId": this.accountRequested.id};
    this.deleteAccount.doDelete(this.deleteAccountObject)
    .subscribe(
      data => {
        this.isProcessing = false;
        console.log("inside second data");
        console.log(data);
        this.onSecondDataReceived(data);
        console.log("inside second data received");
      },
      error => {
        let errorObject = {
          "success" : false,
          "message" : "Could not connect to server"
        }
        this.onSecondDataReceived(errorObject);
        this.isProcessing = false;
      }
    );
  }
  closeToast() {
    this.showToast = false;
    this.form.reset();
  }
}