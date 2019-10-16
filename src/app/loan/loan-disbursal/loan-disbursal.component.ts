import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-disbursal',
  templateUrl: './loan-disbursal.component.html',
  styleUrls: ['./loan-disbursal.component.css']
})
export class LoanDisbursalComponent implements OnInit {

  loanDataRetrievals = ['Retrieve all loan requests', 'Show the loan requests to be accepted', 'Show the loan requests to be rejected'];

  constructor() { }

  ngOnInit() {
  }

}

// <option value="retrieve all">Retrieve all loan requests</option> 
//       <option value="retrieve approved">Show the loan requests to be accepted</option>
//       <option value="retrieve rejected">Show the loan requests to be rejected</option>