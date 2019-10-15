import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/model/AccountModel';
import { CustomerModel } from 'src/app/model/CustomerModel';
import { AddressModel } from 'src/app/model/AddressModel';


@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  
  acc = new AccountModel();
  cust = new CustomerModel();
add = new AddressModel();
submitted = false;
  todayFormat: string;
  constructor() { }

  ngOnInit() {
  }
  showAcc() {
     return JSON.stringify(this.acc);
  }
  showCust()
  {
     return JSON.stringify(this.cust);
  }
  showAdd()
  {
     return JSON.stringify(this.add);
  }
  onSubmit() {
    this.submitted = true;
    alert(this.showAcc() + this.showAdd() + this.showCust());
   
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