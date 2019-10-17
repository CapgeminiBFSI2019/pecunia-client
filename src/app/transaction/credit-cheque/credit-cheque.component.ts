import { Component, OnInit, ViewChild } from '@angular/core';
import { CreditChequeModel } from 'src/app/model/CreditChequeModel';
import { CreditChequeService } from 'src/app/service/credit-cheque.service';

@Component({
  selector: 'app-credit-cheque',
  templateUrl: './credit-cheque.component.html',
  styleUrls: ['./credit-cheque.component.css']
})
export class CreditChequeComponent implements OnInit {
  isProcessing : boolean = false;
  showToast : boolean = false;
  dataResponse : any;
  model = new CreditChequeModel();
  submitted : boolean = false;

  @ViewChild('creditChequeForm' , {static: false}) form: any;

  constructor(private creditService : CreditChequeService) { }

  ngOnInit() {
  }

  onDataReceived(data)
  {
    this.dataResponse = data;
    this.showToast = true;
  }
  onSubmit() {
    console.log(JSON.stringify(this.model));
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
