import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/model/AccountModel';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  account = new AccountModel();
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  showAccount() {
    return JSON.stringify(this.account);
  }

  onSubmit() {
    this.submitted = true;
    alert(this.showAccount());
  }

}
