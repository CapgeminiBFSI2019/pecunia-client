import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passbook-update',
  templateUrl: './passbook-update.component.html',
  styleUrls: ['./passbook-update.component.css']
})
export class PassbookUpdateComponent implements OnInit {
  model = new Todo();
  submitted = false;
  constructor() { }

  ngOnInit() {}
    
  showModel() {}

  onSubmit() {
    this.submitted = true;
    alert(this.showModel());
  }
}
