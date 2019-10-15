import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/model/AccountModel';
import { CustomerModel } from 'src/app/model/CustomerModel';
import { AddressModel } from 'src/app/model/AddressModel';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  // genders: any = ['Female', 'Male']
  acc = new AccountModel();
  cust = new CustomerModel();
add = new AddressModel();
submitted = false;
  constructor(public fb: FormBuilder) { }

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
    // alert(JSON.stringify(this.genders.value))
  }

}