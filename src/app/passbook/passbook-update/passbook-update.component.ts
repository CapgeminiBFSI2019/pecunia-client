import { Component, OnInit } from '@angular/core';
import { Passbook } from 'src/app/model/Passbook';
import { PassbookService } from 'src/app/service/passbook.service';

@Component({
  selector: 'app-passbook-update',
  templateUrl: './passbook-update.component.html',
  styleUrls: ['./passbook-update.component.css']
})
export class PassbookUpdateComponent implements OnInit {
 
  isProcessing : boolean = false;
  model = new Passbook();
  dataReceived : boolean = false;
  dataResponse : any;
  submitted = false;
  showToast = false;
 
  constructor(private passbookService : PassbookService) { }
  
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

  getJson(myData) {
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
    this.passbookService.updatePassbook(this.model).subscribe(
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
