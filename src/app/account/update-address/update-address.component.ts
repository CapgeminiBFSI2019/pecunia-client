import { Component, OnInit } from '@angular/core';
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
  submitted = false;
  dataResponse : Object;
  updateAddressObject: Object;
  httpClient : HttpClient;


  constructor(private updateAddress : UpdateAddressService) { }

  ngOnInit() {
  }


  onDataReceived(data)
  {
    console.log(JSON.stringify(data));
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
    this.submitted = true;
    this.updateAddressObject = {"accountId": this.account.id, "line1": this.address.line1,
                                "line2": this.address.line2, "city": this.address.city,
                                "state": this.address.state, "country": this.address.country, "zipcode": this.address.zipcode};
    this.updateAddress.doUpdate(this.updateAddressObject,this.onDataReceived);
  }


}
