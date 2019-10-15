import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemoServiceService } from './service/demo-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pecunia-client';

  constructor(private demoService : DemoServiceService,private http: HttpClient) {
  }

  ngOnInit() {
    // this.demoService.doLogin();
  }

  

  
}
