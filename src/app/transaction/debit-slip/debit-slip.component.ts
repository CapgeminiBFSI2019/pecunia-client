import { Component, OnInit, ViewChild } from '@angular/core';
import { DebitSlipModel } from 'src/app/model/DebitSlipModel';
import { DebitSlipService } from 'src/app/service/debit-slip.service';



@Component({
  selector: 'app-credit-slip',
  templateUrl: './debit-slip.component.html',
  styleUrls: ['./debit-slip.component.css']
})
export class DebitSlipComponent implements OnInit {
  isProcessing : boolean = false;
  showToast = false;
  model = new DebitSlipModel();
  dataResponse : object;
  submitted = false;
  
  @ViewChild('debitSlipForm' , {static: false}) form: any;
  toastr: any;

  constructor(private debitService : DebitSlipService) { }


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
    this.debitService.debitAmount(this.model).subscribe(
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
