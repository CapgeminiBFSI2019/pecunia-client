import { Component, OnInit } from '@angular/core';
import { Passbook } from "src/app/model/Passbook";
import { AccountSummaryService } from 'src/app/service/account-summaryService';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  isProcessing : boolean = false;
  model = new Passbook();
  dataReceived : boolean = false;
  dataResponse : any;
  submitted = false;
  constructor(private accountSummaryService : AccountSummaryService) { }
  
  ngOnInit() {}


  onDataReceived(data)
  {
    this.dataResponse = this.getJson(data["data"]);
    this.dataReceived = true;
    console.log(JSON.stringify(this.dataResponse))
  }

  getJson(myData: string[]) {
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
    this.accountSummaryService.accountSummary(this.model).subscribe(
      data => {
        this.isProcessing = false;
        this.onDataReceived(data);
      },
      error => {
        alert(JSON.stringify(error));
        this.isProcessing = false;
      }
    );
  }
}
