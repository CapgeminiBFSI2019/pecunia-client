import { Component, OnInit } from '@angular/core';
import { LoanDisbursal } from 'src/app/model/LoanDIsbursalModel';
import { LoandisbursaldataserviceService } from 'src/app/service/loandisbursaldataservice.service';

@Component({
  selector: 'app-loan-disbursal',
  templateUrl: './loan-disbursal.component.html',
  styleUrls: ['./loan-disbursal.component.css']
})
export class LoanDisbursalComponent implements OnInit {

  loanDataRetrievals = ['Retrieve all loan requests', 'Show the loan requests to be accepted', 'Show the loan requests to be rejected'];
  loanDisbursal = new LoanDisbursal()
  menuOption : string;
  isProcessing : boolean = false;
  dataReceived : boolean = false;
  dataReceived1 : boolean = false;
  dataResponse : any;
  dataResponse1 : any;
  submitted = false;
  constructor(private loanDisbursalservice : LoandisbursaldataserviceService) { }

  ngOnInit() {
  }

  onDataReceived(data)
  {
    this.dataResponse = this.getJson(data["data"]);
    alert(JSON.stringify(this.dataResponse))
    this.dataReceived = true;
    this.dataReceived1 = false;
    console.log(JSON.stringify(this.dataResponse))
  }

  onDataReceived1(data)
  {
    this.dataResponse1 = this.getJson(data["data"]);
    alert(JSON.stringify(this.dataResponse1))
    this.dataReceived1 = true;
    this.dataReceived = false;
    console.log(JSON.stringify(this.dataResponse1))
  }

  getJson(myData) {
  let myarr = []
  for(var i=0;i<myData.length;i++)
  {
    myarr.push(JSON.parse(myData[i]));
    console.log(myarr[i]['id']);
  }
  console.log("Full json object : "+myarr);
  return myarr;
}

onSubmit() {
  
  this.isProcessing = true;
  this.submitted = true;
  this.loanDisbursalservice.showData().subscribe(
    data => {
      this.isProcessing = false;
      this.onDataReceived(data);
    },
    error => {
      this.isProcessing = false;
    }
  );
}

onClick() {
  
  this.isProcessing = true;
  this.submitted = true;
  this.loanDisbursalservice.showRequests(this.menuOption).subscribe(
    data => {
      this.isProcessing = false;
      this.onDataReceived1(data);
    },
    error => {
      this.isProcessing = false;
    }
  );
}


}

