import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountModel } from 'src/app/model/AccountModel';
import { HttpClient } from '@angular/common/http';
import { DeleteAccountService } from 'src/app/service/delete-account.service';




@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})


export class DeleteAccountComponent implements OnInit {


  account = new AccountModel();
  dataResponse : Object;
  showToast = false;
  isProcessing : boolean = false;
  deleteAccountObject: Object;
  submitted = false;
  httpClient : HttpClient;

  @ViewChild('accountDeletionForm' , {static: false}) form: any;
  toastr: any;

  constructor(private deleteAccount : DeleteAccountService) { }

  ngOnInit() {
    
  }

  onDataReceived(data)
  {
    this.dataResponse = data;
    this.showToast = true;
  }


  onSubmit() {
    this.submitted = true;
    this.deleteAccount.doDelete(this.deleteAccountObject)
    .subscribe(
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
  