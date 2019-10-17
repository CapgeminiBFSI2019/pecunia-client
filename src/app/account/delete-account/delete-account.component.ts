import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/model/AccountModel';
import { HttpClient } from '@angular/common/http';
import { DeleteAccountService } from 'src/app/service/delete-account.service';




@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})


export class DeleteAccountComponent implements OnInit {

  account = new AccountModel();
  dataResponse : Object;
  deleteAccountObject: Object;
  submitted = false;
  httpClient : HttpClient;

  constructor(private deleteAccount : DeleteAccountService) { }

  ngOnInit() {
    
  }

  onDataReceived(data)
  {
    console.log(JSON.stringify(data));
   
    alert(JSON.stringify(data));
    if(data["success"])
    {
      console.log("Success");
    }
    else
    {
      console.log(data["message"]);
    }
  }


  onSubmit() {
    this.submitted = true;
    this.deleteAccountObject = {"accountId": this.account.id};
    this.deleteAccount.doDelete(this.deleteAccountObject,this.onDataReceived);
  }

}
  