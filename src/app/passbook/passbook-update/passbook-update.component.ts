import { Component, OnInit } from '@angular/core';
import { Passbook } from 'src/app/model/Passbook';
import { PassbookService } from 'src/app/service/passbook.service';

@Component({
  selector: 'app-passbook-update',
  templateUrl: './passbook-update.component.html',
  styleUrls: ['./passbook-update.component.css']
})
export class PassbookUpdateComponent implements OnInit {
  
  isProcessing : boolean = false;
  model = new Passbook();
  dataResponse : object;
  submitted = false;
  constructor(private passbookService : PassbookService) { }
  
  ngOnInit() {}


  onDataReceived(data)
  {
    this.dataResponse = data;
  }

  onSubmit() {
    
    this.isProcessing = true;
    this.submitted = true;
    this.passbookService.updatePassbook(this.model).subscribe(
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
