import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/model/AccountModel';
import { CustomerModel } from 'src/app/model/CustomerModel';
import { AddressModel } from 'src/app/model/AddressModel';
import { AddAccountServiceService } from 'src/app/service/add-account-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  
account = new AccountModel();
customer = new CustomerModel();
address = new AddressModel();
submitted = false;
todayFormat: string;
  httpClient: HttpClient;
  constructor() { }

  ngOnInit() {
  }
  showAcc() {
     return JSON.stringify(this.account);
  }
  showCust()
  {
     return JSON.stringify(this.customer);
  }
  showAdd()
  {
     return JSON.stringify(this.address);
  }
 name : String;
gender :String;
dob= Date;
contact= String;
addressLine1: String;
addressLine2: String;
city: String;
state: String;
country:String;
zipcode:String;
aadhar: String;
pan: String;
accountType: String;
branchId: String;
accountBalance: String;
interest: String;

obj: Object = {"name": this.customer.name,
"gender": this.customer.gender, 
"dateOfBirth": this.customer.dob, 
"contact": this.customer.contact,
"addressLine1": this.address.line1,
"addressLine2": this.address.line2,
"city": this.address.city,
"state": this.address.state,
"country":this.address.state,
"zipcode":this.address.zipcode,
"aadhar":this.customer.aadhar,
"pan":this.customer.pan,
"accountType":this.account.accountType,
"branchId":this.account.branchId,
"accountBalance":this.account.balance,
"interest":this.account.interest
  };
  onSubmit() {
    let addAccount = new  AddAccountServiceService(this.httpClient);
    this.submitted = true;
    addAccount.doAdd(this.obj);
  }
  public SetMaxDate() {
    
    let today = new Date();
    let dd = (today.getDate());
    let mm = today.getMonth() + 1; 
    let yyyy = today.getFullYear();
    let ddFormat: string;
    let mmFormat: string;
 
    if (dd < 10) {
      ddFormat = ('0' + dd).toString();
    }
    else
      ddFormat = (dd).toString();
    if (mm < 10) {
      mmFormat = '0' + mm
    }
    else
      mmFormat = (mm).toString();
 
    this.todayFormat = yyyy + '-' + mmFormat + '-' + ddFormat;
    console.log(this.todayFormat);
    
 
  }
  
}