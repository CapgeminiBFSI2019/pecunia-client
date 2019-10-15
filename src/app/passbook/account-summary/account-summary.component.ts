import { Component, OnInit } from '@angular/core';
import { Passbook } from 'src/app/model/Passbook';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  passbook = new Passbook();
  submitted = false;
  constructor() { }

  ngOnInit() {}
    
  showPassbook() {
    return JSON.stringify(this.passbook);
  }

  onSubmit() {
    this.submitted = true;
    alert(this.showPassbook());
  }
}