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
  constructor(private passbookService : PassbookService) { }
  
  ngOnInit() {}


  onDataReceived(data)
  {
    this.dataResponse = this.getJson(data["data"]);
    this.dataReceived = true;
    console.log(JSON.stringify(this.dataResponse))
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
}
