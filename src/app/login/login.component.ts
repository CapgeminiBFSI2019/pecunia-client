import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../model/LoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 LoginModel = new LoginModel();
  submitted = false;
  constructor() { }

  ngOnInit() {}
    
  showLogin() {
    return JSON.stringify(this.LoginModel);
  }

  onSubmit() {
    this.submitted = true;
    alert(this.showLogin());
  }
}