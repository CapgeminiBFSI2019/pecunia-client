import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router : Router) { }

  isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem('isLoggedIn') == "true") {
      status = true;
    }
    else {
      status = false;
    }
    return status;
  }

  doSessionRouting() {
    let loggedIn = this.isLoggedIn();
    if(loggedIn) {
      console.log('in logged in true')
      //this.router.navigate(['home-page']);
    }
    else {
      console.log('in logged in false')
      this.router.navigate(['login']);
    }
  }
}
