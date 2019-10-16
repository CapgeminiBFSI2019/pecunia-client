import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { AccountModel } from 'src/app/model/AccountModel';
import { CustomerModel } from 'src/app/model/CustomerModel';
import { UpdateContactService } from 'src/app/service/update-contact.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  account = new AccountModel();
  customer = new CustomerModel();
  dataResponse : Object;
  updateContactObject: Object;
  submitted = false;
  httpClient : HttpClient;

  constructor(private updateContact : UpdateContactService) { }

  ngOnInit() {
  }

  onDataReceived(data)
  {
    console.log(JSON.stringify(data));
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
    this.submitted = true;
    this.updateContactObject = {"accountId": this.account.id, "contact": this.customer.contact};
    this.updateContact.doUpdate(this.updateContactObject,this.onDataReceived);
  }

}

