import { Component, OnInit } from '@angular/core';
import { CrediSlipModel } from 'src/app/model/CreditSlipModel';
import { CreditSlipService } from 'src/app/service/credit-slip.service';



@Component({
  selector: 'app-credit-slip',
  templateUrl: './credit-slip.component.html',
  styleUrls: ['./credit-slip.component.css']
})
export class CreditSlipComponent implements OnInit {
  isProcessing : boolean = false;
  showToast = false;
  model = new CrediSlipModel();
  dataResponse : object;
  submitted = false;
  constructor(private creditService : CreditSlipService) { }

  ngOnInit() {
  }

  onDataReceived(data)
  {
    this.dataResponse = data;
    this.showToast = true;
  }

  onSubmit() {
    this.isProcessing = true;
    this.submitted = true;
    this.creditService.creditAmount(this.model).subscribe(
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
  }
}
