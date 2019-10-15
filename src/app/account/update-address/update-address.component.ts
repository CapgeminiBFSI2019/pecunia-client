import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/model/AccountModel';
import { AddressModel } from 'src/app/model/AddressModel';


@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  account = new AccountModel();
  address = new AddressModel();
  submitted = false;

  constructor() { }

  ngOnInit() {
  }


  showAccount() {
    return JSON.stringify(this.account);
  }
  showAddress() {
    return JSON.stringify(this.address);
  }

  onSubmit() {
    this.submitted = true;
    alert(this.showAccount() + this.showAddress());
  }


}
