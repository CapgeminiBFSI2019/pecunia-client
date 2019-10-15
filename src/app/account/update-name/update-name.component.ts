import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccountModel } from 'src/app/model/AccountModel';
import { CustomerModel } from 'src/app/model/CustomerModel';


@Component({
  selector: 'app-update-name',
  templateUrl: './update-name.component.html',
  styleUrls: ['./update-name.component.css']
})


export class UpdateNameComponent implements OnInit {

  account = new AccountModel();
  customer = new CustomerModel();
  submitted = false;

  constructor() { }

  ngOnInit() {

    
  }

  showAcc() {
    return JSON.stringify(this.account);
  }
  showCust() {
    return JSON.stringify(this.customer);
  }

  onSubmit() {
    this.submitted = true;
    alert(this.showAcc() + this.showCust());
  }
  

}

