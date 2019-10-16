import { Component, OnInit } from '@angular/core';
import { TransactionModel } from 'src/app/model/TransactionModel';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-credit-slip',
  templateUrl: './credit-slip.component.html',
  styleUrls: ['./credit-slip.component.css']
})
export class CreditSlipComponent implements OnInit {

  creditSlip = new TransactionModel();
  submitted = false;
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }


  onSubmit() {
    this.toastr.success('Submitted');
    this.submitted = true;
  }
}
