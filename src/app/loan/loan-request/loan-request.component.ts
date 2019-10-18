import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/model/LoanModel';
import {FormBuilder,FormGroup,Validators} from '@angular/forms' ;
import {RouterModule,Routes} from '@angular/router' ;
import { LoanRequestServiceService } from 'src/app/service/loan-request-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css']
})
export class LoanRequestComponent implements OnInit {
  model= new Loan();
  submitted = false;
  loanobj: Object;
  httpClient : HttpClient;
  dataResponse : Object;
  
  constructor(private loanRequest:LoanRequestServiceService) { 

  }

  ngOnInit() {

    }
    onDataReceived(data)
    {
      console.log(JSON.stringify(data));
      // this.dataResponse = data;
      alert(JSON.stringify(data));
      if(data["success"])
      {
        console.log("Loan Data added successfully");
      }
      else
      {
        console.log(data["Some error occured,please try again"]);
      }
    }
  
    onSubmit() {
 
      
      this.submitted = true;
      this.loanobj = {"accountId": this.model.accountId, "amount": this.model.amount,"type":this.model.type,"creditScore":this.model.creditScore,"status":this.model.status};
      this.loanRequest.doLoanRequest(this.model,this.onDataReceived);
    }

  }
  

