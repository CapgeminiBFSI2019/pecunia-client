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
  showToast = false;
  constructor(private accountSummaryService : AccountSummaryService) { }
  
  ngOnInit() {}

  onDataReceived(data)
  {
    if(data["data"])
    {
      this.dataResponse = this.getJson(data["data"]); 
      this.dataReceived = true;
    }
    else{
      this.dataResponse= data;
      this.showToast = true;
    }
  }

  getJson(myData: string[]) {
    let myarr = []
    for(var i=0;i<myData.length;i++)
    {
      let date = "";
      let objectData= JSON.parse(myData[i]);
      var myDay= objectData.transDate.day;
      var myMonth= objectData.transDate.month;
      if(myDay<10)
      {
        myDay="0".concat(myDay);
      }
      if(myMonth<10)
      {
      myMonth="0".concat(myMonth);
      }
      var myYear= objectData.transDate.year;
      var myChequeId= objectData.chequeId;
      if(myChequeId==0)
      {
        myChequeId="-";
      }
      date= date.concat(myDay).concat("/").concat(myMonth).concat("/").concat(myYear);
      //console.log(myChequeId);
      objectData['transDate'] = date;
      objectData['chequeId'] = myChequeId;
     myarr.push(objectData);
    }
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
        this.isProcessing = false;
      }
    );
  }
  closeToast() {
    this.showToast = false;
    this.submitted= false;
  }
}
