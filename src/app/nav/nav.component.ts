import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../service/logout.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router,public logoutService: LogoutService) { }

  ngOnInit() {
  }

  logout(): void {
    console.log("Logout");
    this.logoutService.logout();
    this.router.navigate(['/login']);
}
}
