import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  accountId = new FormControl('');
  contact = new FormControl('');

}
