import { Component, OnInit } from '@angular/core';
import { Passbook } from 'src/app/model/Passbook';
import { PassbookService } from 'src/app/service/passbook.service';

@Component({
  selector: 'app-passbook-update',
  templateUrl: './passbook-update.component.html',
  styleUrls: ['./passbook-update.component.css']
})
export class PassbookUpdateComponent implements OnInit {
  
  model = new Passbook();
  dataResponse : object;
  submitted = false;
  constructor(private passbookService : PassbookService) { }
  
  ngOnInit() {}


  onDataReceived(data)
  {
    console.log("done" + JSON.stringify(data));
    // this.dataResponse = data;
    alert(JSON.stringify(data));
    if(data["success"])
    {
      console.log("Success");
    }
    else
    {
      console.log(data["message"]);
    }
  }

  onSubmit() {
    // alert(JSON.stringify(this.model))
    this.submitted = true;
    this.passbookService.updatePassbook(this.model,this.onDataReceived);
  }
}
