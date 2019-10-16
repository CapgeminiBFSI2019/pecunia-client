import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/model/AccountModel';
import { CustomerModel } from 'src/app/model/CustomerModel';
import { HttpClient } from '@angular/common/http';
import { UpdateNameService } from 'src/app/service/update-name.service';



@Component({
  selector: 'app-update-name',
  templateUrl: './update-name.component.html',
  styleUrls: ['./update-name.component.css']
})


export class UpdateNameComponent implements OnInit {

  account = new AccountModel();
  customer = new CustomerModel();
  dataResponse : Object;
  updateNameObject: Object;
  submitted = false;
  httpClient : HttpClient;

  constructor(private doUpdate : UpdateNameService) { }

  ngOnInit() {
    
  }

  onDataReceived(data)
  {
    console.log("aaya idhar"+JSON.stringify(data));
    // this.dataResponse = data;
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

    let updateName = new UpdateNameService(this.httpClient);
    this.submitted = true;
    this.updateNameObject = {"accountId": this.account.id, "name": this.customer.name};
    updateName.doUpdate(this.updateNameObject,this.onDataReceived);
  }

}
  