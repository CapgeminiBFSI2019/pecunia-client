
import { Component, OnInit } from '@angular/core';
import { TransactionModel } from 'src/app/model/TransactionModel';
import { ToastrService } from 'ngx-toastr';

import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(private toastr: ToastrService) { }

  
  @ViewChild('creditSlipForm' , {static: false}) form: any;

  constructor(private creditService : CreditSlipService) { }



  ngOnInit() {
  }

  onDataReceived(data)
  {
    this.dataResponse = data;
    this.showToast = true;
  }

  onSubmit() {

    this.toastr.success('Submitted');

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
    this.form.reset();
  }
}
