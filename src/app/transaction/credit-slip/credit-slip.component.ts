import { Component, OnInit } from '@angular/core';
import { CrediSlipModel } from 'src/app/model/CreditSlipModel';
import { CreditSlipService } from 'src/app/service/credit-slip.service';



@Component({
  selector: 'app-credit-slip',
  templateUrl: './credit-slip.component.html',
  styleUrls: ['./credit-slip.component.css']
})
export class CreditSlipComponent implements OnInit {

  model = new CrediSlipModel();
  dataResponse : object;
  submitted = false;
  constructor(private creditService : CreditSlipService) { }

  ngOnInit() {
  }

  onDataReceived(data)
  {
    console.log("aaya idhar"+JSON.stringify(data));
    this.dataResponse = data;
    alert(JSON.stringify(this.dataResponse));
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
    this.creditService.creditAmount(this.model).subscribe(
      data => {
        this.onDataReceived(data);
        // console.log("Data Receieved  :" + JSON.stringify(data));
      },
      error => {
        console.log("Error occured :" + JSON.stringify(error));
      }
    );
  }
}
