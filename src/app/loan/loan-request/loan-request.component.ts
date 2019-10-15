import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/model/LoanModel';
import {FormBuilder,FormGroup,Validators} from '@angular/forms' ;
import {RouterModule,Routes} from '@angular/router' ;


@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css']
})
export class LoanRequestComponent implements OnInit {
  model = new Loan();
  submitted = false;
  loanRequestForm: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {

  

    }

  }
  
  // showModel() {
  //   return JSON.stringify(this.model);
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   alert(this.showModel());
  // }


