import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/model/LoanModel';
import {FormBuilder,FormGroup,Validators} from '@angular/forms' ;
import {RouterModule,Routes} from '@angular/router' ;
import { LoanRequestServiceService } from 'src/app/service/loan-request-service.service';


@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css']
})
export class LoanRequestComponent implements OnInit {
  model= new Loan();
  submitted = false;
  httpClient: any;
  //loanRequestForm: FormGroup;
  constructor() { 

  }

  ngOnInit() {

    }
    loanobj: Object;
    onSubmit() {
 
      let loanRequest= new LoanRequestServiceService(this.httpClient);
      this.submitted = true;
      this.loanobj = {"accountId": this.model.accountId, "amount": this.model.amount,"type":this.model.type,"creditScore":this.model.creditScore,"status":this.model.status};
      loanRequest.doLoanRequest(this.loanobj);
    }

  }
  

