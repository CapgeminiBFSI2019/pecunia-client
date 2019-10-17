import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountModel } from 'src/app/model/AccountModel';
import { AddressModel } from 'src/app/model/AddressModel';
import { HttpClient } from '@angular/common/http';
import { UpdateAddressService } from 'src/app/service/update-address.service';


@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  account = new AccountModel();
  address = new AddressModel();
  showToast = false;
  isProcessing : boolean = false;
  submitted = false;
  dataResponse : Object;
  updateAddressObject: Object;
  httpClient : HttpClient;

  @ViewChild('updateAddressForm' , {static: false}) form: any;
  toastr: any;


  constructor(private updateAddress : UpdateAddressService) { }

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
    this.updateAddressObject = {"accountId": this.account.id, "line1": this.address.line1,
                                "line2": this.address.line2, "city": this.address.city,
                                "state": this.address.state, "country": this.address.country, "zipcode": this.address.zipcode};
    this.updateAddress.doUpdate(this.updateAddressObject)
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

  closeToast() {
    this.showToast = false;
    this.form.reset();
  }


}
