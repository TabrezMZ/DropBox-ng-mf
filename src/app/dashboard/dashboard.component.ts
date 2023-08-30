import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor( private router: Router) {}
  ngOnInit(): void {
    var userData = localStorage.getItem('user-Data')
    if(userData == undefined || userData == null){
      this.router.navigate(["/login"]);
    }
  }
}
