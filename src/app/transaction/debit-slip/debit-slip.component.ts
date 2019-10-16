import { Component, OnInit } from '@angular/core';
import { TransactionModel } from 'src/app/model/TransactionModel';



@Component({
  selector: 'app-debit-slip',
  templateUrl: './debit-slip.component.html',
  styleUrls: ['./debit-slip.component.css']
})
export class DebitSlipComponent implements OnInit {

  debitSlip = new TransactionModel();
  submitted = false;
  constructor() { }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
  }
}

