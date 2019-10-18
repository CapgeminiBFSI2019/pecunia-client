import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemoServiceService } from './service/demo-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pecunia-client';

  constructor(private demoService : DemoServiceService,private http: HttpClient,private router : Router) {
  }

  ngOnInit() {
    console.log('in app init');
    let loggedIn = this.isLoggedIn();
    if(loggedIn) {
      console.log('in logged in true')
      this.router.navigate(['account/account-menu']);
    }
    else {
      console.log('in logged in true')
      this.router.navigate(['login']);
    }
  }

  public isLoggedIn(): boolean{
    let status = false;
    if( localStorage.getItem('isLoggedIn') == "true"){
      status = true;
    }
    else{
      status = false;
    }
    return status;
}
  

  
}
