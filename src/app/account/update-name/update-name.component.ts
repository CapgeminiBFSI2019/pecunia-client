import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-name',
  templateUrl: './update-name.component.html',
  styleUrls: ['./update-name.component.css']
})
export class UpdateNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  accountId = new FormControl('');
  name = new FormControl('');
  

}
